/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Image,TouchableOpacity} from 'react-native';

export default class Page2 extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>欢迎来到Page2</Text>
        <Button 
          title="go back" 
          onPress={()=>{
            navigation.goBack()
          }}/>
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

