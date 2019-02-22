/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default class Page3 extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render() {
    const {navigation} = this.props;
    const {state,setParams} = navigation;
    const {params} = state;
    const showText = params.mode==='edit'?'正在编辑':'编辑完成';
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>欢迎来到Page3</Text>
        <Button 
          title="go back" 
          onPress={()=>{
            navigation.goBack();
          }}/>
          <Text>{showText}</Text>
        <TextInput style={styles.input} onChangeText={(text)=>{
          setParams({title:text})
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
  instructions: {
    // textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
    height:50,
    borderWidth:1,
    marginTop:20,
    borderColor:'black',
    width:200
  }
});

