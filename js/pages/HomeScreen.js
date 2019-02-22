/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';

export default class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <View style={{ marginBottom:20}}>
          <Button color='red'
            title="Go to Settings"
            onPress={() => this.props.navigation.navigate('Settings')}
          />
        </View>
        <View style={{ marginBottom:20}}>
          <Button
            title="Go to Details"
            onPress={() => this.props.navigation.navigate('Details')}
          />
        </View>
      </View>
    );
  }
}

