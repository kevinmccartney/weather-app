/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  AlertIOS
} from 'react-native';
import { WEATHER_KEY, GOOGLE_KEY } from "../config"
import * as Actions from './actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class App extends Component {

  handleErrors = (response) => {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  getCoords = () => {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          var { latitude, longitude } = position.coords
          var latLong = latitude + "," + longitude
          this.setState({lat_long: latLong})
          resolve(latLong)
        },
        (error) => {
          reject(alert(JSON.stringify(error)))
        },
        { enableHighAccuracy: true }
      )
    })
  }

  getZip = (latLong) => {
    return new Promise((resolve, reject) => {
      fetch("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + latLong + "&result_type=postal_code&key=" + GOOGLE_KEY)
      .then(this.handleErrors)
      .then((response) => response.json())
      .then((response) => {
        var zipCode = response.results[0].address_components[0].long_name
        this.setState({ zipcode: zipCode })
        resolve(zipCode)
      })
      .catch(error => console.log(error) );
    })
  }

  getWeather = (zip) => {
    fetch("https://api.apixu.com/v1/current.json?key=" + WEATHER_KEY + "&q=" + zip)
    .then(this.handleErrors)
    .then((response) => response.json())
    .then((response) => {
      AlertIOS.alert(
        "Response URL",
        JSON.stringify(response)
      )
    })
    .catch(error => console.log(error) );
  }

  componentDidMount() {
    this.getCoords()
    .then(latLong => this.getZip(latLong))
    .then(zip => this.getWeather(zip))
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          MyWeatherApp
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

const mapStateToProps = state => ({
  coords: state.coords,
  currentWeather: state.currentWeather,
  dailyWeather: state.dailyWeather,
  forecast: state.forecast,
  zip: state.zip
})

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(Actions, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
