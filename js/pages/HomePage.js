/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class HomePage extends Component{
    static navigationOptions = {
      title: "Back",
      headerBackTitle:'返回哈哈'
  }

  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>欢迎来到首页</Text>
        <Text style={styles.instructions}>{instructions}</Text>
        {/* <TouchableOpacity
              title="Go to TabNavigator"
              onPress={() => {
                  navigation.navigate('TabNav', {title: 'Devio'})
              }}
          /> */}
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
  instructions: {
    // textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
