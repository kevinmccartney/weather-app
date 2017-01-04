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
import { apiKey } from "./config"

export default class WeatherApp extends Component {

  sendReq = () => {
    fetch("https://api.apixu.com/v1/current.json?key=" + apiKey + "&q=43081")
    .then((response) => response.json())
    .then((response) => {
      AlertIOS.alert(
        "Response",
        JSON.stringify(response)
      )
    })
    .done()
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          MyWeatherApp
        </Text>
        <Button
          title="Send Request"
          onPress={this.sendReq}
        />
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
