/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image,TouchableOpacity} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Boy from './Boy';
// import NavigationBar from './NavigationBar';//自定义组件

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};

export default class App extends Component<Props> {
  constructor(props){
    super(props);
    this.state = {
      selectedTab : 'home'
    }
  }
  renderButton(image){
    return <TouchableOpacity>
    <Image style={{width:22,height:22,margin:5}} source={image}/>
  </TouchableOpacity>
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>To get started, edit App.js</Text>
        <Text style={styles.instructions}>{instructions}</Text> */}
        <TabNavigator>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="Home"
            selectedTitleStyle={{color:'red'}}
            renderIcon={() => <Image style={[styles.image,{tintColor:'pink'}]} source={require('./res/images/iconHome.png')} />}
            renderSelectedIcon={() => <Image source={require('./res/images/iconHomeActive.png')} />}
            badgeText="1"
            onPress={() => this.setState({ selectedTab: 'home' })}>
            <View style={styles.home}>
              {/* <NavigationBar 
                title = {'BOOY'} 
                style = {{backgroundColor:'#ee6363'}} 
                leftButton = {renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))}
                rightButton = {renderButton(require('./res/images/ic_arrow_back_white_36pt.png'))}
                rightButton={
                  <TouchableOpacity>
                    <Image source={require('./res/images/ic_star_navbar.png')}/>
                  </TouchableOpacity>}
               /> */}
            </View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'contact'}
            title="Contact"
            renderIcon={() => <Image source={require('./res/images/iconContact.png')} />}
            renderSelectedIcon={() => <Image source={require('./res/images/iconContactActive.png')} />}
            onPress={() => this.setState({ selectedTab: 'contact' })}>
            <View style={styles.Profile}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'location'}
            title="Location"
            renderIcon={() => <Image source={require('./res/images/iconLocation.png')} />}
            renderSelectedIcon={() => <Image source={require('./res/images/iconLocationActive.png')} />}
            onPress={() => this.setState({ selectedTab: 'location' })}>
            <View style={styles.home}></View>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'profile'}
            title="Profile"
            renderIcon={() => <Image source={require('./res/images/iconProfile.png')} />}
            renderSelectedIcon={() => <Image source={require('./res/images/iconProfileActive.png')} />}
            onPress={() => this.setState({ selectedTab: 'profile' })}>
            <View style={styles.Profile}></View>
          </TabNavigator.Item>
      </TabNavigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center', 
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  // welcome: {
  //   fontSize: 20,
  //   textAlign: 'center',
  //   margin: 10,
  // },
  // instructions: {
  //   textAlign: 'center',
  //   color: '#333333',
  //   marginBottom: 5,
  // },
  home:{
    flex:1,
    backgroundColor: 'red',
    justifyContent:'center',
    textAlign:'center'
  },
  Profile:{
    flex:1,
    backgroundColor: 'yellow',
    justifyContent:'center',
    textAlign:'center'
  },
  image:{
    width:22,
    height:22
  }
});
