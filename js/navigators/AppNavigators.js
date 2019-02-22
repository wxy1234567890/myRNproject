

/** 
 * 首先进入底部导航页，然后进入'首页'，在'我的'页面进行登录
 * **/
import React from 'react';
import { Text, View, Button } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import IconWithBadge from '../pages/IconWithBadge';
import HomeScreen from '../pages/HomeScreen'
import SettingsScreen from '../pages/SettingsScreen'
import DetailsScreen from '../pages/DetailsScreen'

    // const HomeIconWithBadge = (props) => {
        // You should pass down the badgeCount in some other ways like react context api, redux, mobx or event emitters.
        // return <IconWithBadge {...props} badgeCount={4} />;  
    // }  

    const HomeStack = createStackNavigator({
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                // header: null,
                title: "Home"
              }
        },
        Details: {
            screen: DetailsScreen,
            // navigationOptions: {
            //     title: "Details"
            //   }
            navigationOptions: (props) => {
              const {navigation} = props;
              const {state, setParams, getParam} = navigation;
              // const {params} = state;
              return {
                  title: getParam('title') ? getParam('title') : 'Details',
                  headerRight: (
                    <View style={{ marginRight:20}}>
                      <Button
                          title={getParam('mode') === 'edit' ? '保存' : '编辑'}
                          onPress={() => {
                              setParams({mode: getParam('mode') === 'edit' ? "" : "edit"})
                          }}
                      />
                    </View>
                  )
              }
          }
        },
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
          headerStyle: {
            backgroundColor: 'blue'
          },
          headerTintColor: 'white',
          headerLayoutPreset: 'center'
        }
    }
    );

    const SettingsStack = createStackNavigator({
        Settings: {
          screen: SettingsScreen,
          navigationOptions: {
              // header: null,
              title: "Settings"
            }
      },
        Details: DetailsScreen,
    },
    {
      initialRouteName: 'Settings',
      navigationOptions: {
        headerStyle: {
          backgroundColor: 'blue'
        },
        headerTintColor: 'white',
        headerLayoutPreset: 'center'
      }
  });
  
    const TabNavigator = createBottomTabNavigator(
    {
        Home: HomeStack,
        Settings: SettingsStack,
    },
    {
    // initialRouteName: 'Settings',//不设置默认第一个路由
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Home') {
          // iconName = `md-home${focused ? '' : ''}`;
          iconName = `md-home`
          // Sometimes we want to add badges to some icons. 
          // You can check the implementation below.
          IconComponent = IconWithBadge; 
        } else if (routeName === 'Settings') {
          // iconName = `md-settings${focused ? '' : ''}`;
          iconName = `md-settings`
        }
        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} badgeCount={4}/>;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

// class LoginScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
//         <Button 
//           title='Login' 
//           onPress={() => {
//             this.props.navigation.navigate('TabNavigator', {title: 'home'})
//           }}/>
//       </View>
//     );
//   }
// }

// const AppNavigator = createStackNavigator({
//   Login: {
//     screen: LoginScreen,
//     navigationOptions: {
//       header: null,
//       title: "Home"
//     }
//   },
//   TabNavigator:TabNavigator
// });

export default createAppContainer(TabNavigator);

