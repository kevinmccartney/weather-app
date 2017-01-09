/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  AlertIOS
} from 'react-native';
import { WEATHER_KEY, GOOGLE_KEY } from "./config"

export default class WeatherApp extends Component {

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
      .then((response) => response.json())
      .then((response) => {
        var zipCode = response.results[0].address_components[0].long_name
        this.setState({ zipcode: zipCode })
        resolve(zipCode)
      })
    })
  }

  getWeather = (zip) => {
    fetch("https://api.apixu.com/v1/current.json?key=" + WEATHER_KEY + "&q=" + zip)
    .then((response) => response.json())
    .then((response) => {
      AlertIOS.alert(
        "Response URL",
        JSON.stringify(response)
      )
    })
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

AppRegistry.registerComponent('WeatherApp', () => WeatherApp);
