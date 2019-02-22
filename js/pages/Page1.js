/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Page1 extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>欢迎来到Page1</Text>
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
  welcome: {
    fontSize: 20,
    // textAlign: 'center',
    margin: 10,
  },
  instructions: {
    // textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});

