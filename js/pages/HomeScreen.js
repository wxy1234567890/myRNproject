/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TouchableOpacity, TouchableHighlight, Platform,StatusBar} from 'react-native';//Image组件在引用外部资源时需要指定宽高
import LinearGradient from 'react-native-linear-gradient';
import Toast, {DURATION} from 'react-native-easy-toast'; //在根视图的底部使用

export default class HomeScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
      text1: 'Sign in with Facebook'
    }
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <StatusBar style={[styles.statusBar,{backgroundColor:'blue'}]} backgroundColor={'blue'} barStyle={'light-content'}/>
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
        
          <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#fff', '#3b5998', '#192f6a']} style={styles.linearGradient}>
            <TouchableOpacity
              onPress={()=>{
                  this.refs.toast.show(this.state.text1, DURATION.LENGTH_LONG);
              }}>
            <Text style={styles.buttonText}>
              {this.state.text1}
            </Text>
            </TouchableOpacity>
          </LinearGradient>
        
        <Toast ref="toast" 
                    style={{backgroundColor:'black'}}
                    position='bottom'
                    positionValue={200}
                    fadeInDuration={500}
                    fadeOutDuration={500}
                    opacity={0.8}
                    textStyle={{color:'white'}}/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  statusBar:{
    // height: Platform.OS === 'ios' ? 20:30,
  },
  linearGradient: {
    // flex: 1,
    height: 45,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
  buttonText: {
    // flex: 1,
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});

