
import React, {Component} from 'react';
import {StyleSheet, Text, View,Button, TextInput} from 'react-native';

export default class DetailsScreen extends Component{
  constructor(props){
    super(props);
    this.state = {
    }
  }
  // render() {
  //   return (
  //     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
  //       <Text>Details!</Text>
  //       <Button 
  //         title="go back" 
  //         onPress={()=>{
  //           this.props.navigation.navigate('Home', {title: 'Devio'})
  //         }}/>
  //     </View>
  //   );
  // }
  render() {
    const {navigation} = this.props;
    const {state, setParams, getParam} = navigation;
    // const {params} = state;
    const showText = getParam('mode') === 'edit' ? '正在编辑' : '编辑完成';
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Details</Text>
            <View style={{ marginBottom:20}}>
              <Button
                  title="Go Back"
                  onPress={() => {
                      navigation.goBack();
                  }}
              />
            </View>
            <View style={{ marginBottom:20}}>
              <Button
                  title="Go Home"
                  onPress={() => {
                    navigation.navigate('Home', {title: 'Devio'})
                  }}
              />
            </View>
            <View style={{ marginBottom:20}}>
              <Button
                  title="Go Settings"
                  onPress={() => {
                    navigation.navigate('Settings', {title: 'Devio'})
                  }}
              />
            </View>
            <Text>{showText}</Text>
            <TextInput
                style={styles.input}
                onChangeText={text => {
                    setParams({title: text, name: 'Lucy'});
                }}
            />
        </View>
    );
}
}
const styles = StyleSheet.create({
  input: {
      height: 50,
      borderWidth: 1,
      marginTop: 20,
      borderColor: 'black',
      width: 360
  },
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
  },
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },
  instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
  },
});

