/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import Toast, {DURATION} from 'react-native-easy-toast'; //在根视图的底部使用
import {StyleSheet, Text, View,Button, WebView, TextInput, DeviceEventEmitter} from 'react-native';
const URL = 'www.baidu.com';
export default class WebViewTest extends Component{
  constructor(props){
    super(props);
    this.state = {
        url: URL,
        title: '',
        canGoBack: false
    }
  }
  //添加监听
  componentDidMount(){
    this.listener = DeviceEventEmitter.addListener('showToast',(text)=>{
        this.toast.show(text, DURATION.LENGTH_LONG);
    })
  }
  //移除监听
  componentWillUnmount(){
      this.listener&&this.listener.remove();
  }
  goBack(){
    if(this.state.canGoBack){
        this.webView.goBack();
    }else{
        DeviceEventEmitter.emit('showToast', '到顶了');
    }
  }
  go(){
    this.setState({
        url:this.text
    })
  }
  onNavigationStateChange(e){
    this.setState({
        canGoBack: e.canGoBack,
        title: e.title
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>WebViewTest</Text>
        <View style={styles.row}>
            <Text style={styles.tips}
                onPress={()=>{this.goBack()}}
                >返回</Text>
            <TextInput 
                style={styles.input} 
                defaultValue={URL}
                onChangeText={text => this.text = text}/>  
            <Text 
                style={styles.tips}
                onPress={()=>{this.go()}}
                >前往</Text>  
        </View>
        <WebView ref={webView => this.webView = webView}
            source={{uri: this.state.url}}
            onNavigationStateChange={(e)=>{this.onNavigationStateChange(e)}}/>
        <Toast ref = {toast => this.toast = toast} 
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
const styles= StyleSheet.create({
    container: { 
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center' 
    },
    tips: {
        fontSize: 20
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10
    }
})

