/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

// HeaderStyling
const styles = StyleSheet.create({
  HeaderButtons: {
    paddingHorizontal: 20,
    height: '100%',
    justifyContent: 'center',
  },
});

// Pages
import Home from './screens/HomePage';
import Login from './screens/LoginPage';
import Profile from './screens/ProfilePage';
import Users from './screens/UserProfilePage';
import NewAccount from './screens/CreateAccountPage';
// Navs
const StackNav = createStackNavigator();
const DrawNav = createDrawerNavigator();
const TabNav = createBottomTabNavigator();

// Navigation
// Drawer - Calls stack nav.
export default function Drawer() {
  return (
    <NavigationContainer>
      <DrawNav.Navigator
        initialRouteName="HomePage"
        drawerStyle={{
          backgroundColor: 'silver',
          width: '60%',
          flex: 1,
        }}
        drawerContentOptions={{
          activeBackgroundColor: '#696969',
          activeTintColor: 'gold',
          inactiveTintColor: 'white',
          inactiveBackgroundColor: 'black',
          // itemStyle: {alignItems: 'center'},
          labelStyle: {fontWeight: 'bold', fontSize: 18},
        }}>
        <DrawNav.Screen name="Home" component={MainStack} />
        <DrawNav.Screen name="ProfilePage" component={ProfileStack} />
      </DrawNav.Navigator>
    </NavigationContainer>
  );
}

// Stack Pages
function MainStack({navigation}) {
  // var displayModal = global.LogoutVisible;
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="HomePage"
        component={Home}
        options={{
          // Title
          headerTitle: 'Chittr',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 38, fontWeight: 'bold'},
          headerStyle: {backgroundColor: '#D3D3D3'},
          // Right Button
          headerRight: () => (
            <TouchableOpacity
              style={styles.HeaderButtons}
              onPress={() => {
                global.LoggedIn
                  ? navigation.navigate('ProfilePage')
                  : navigation.navigate('LoginPage');
              }}>
              <Text>{global.LoggedIn ? 'Profile Page' : 'Login Page'}</Text>
            </TouchableOpacity>
          ),
          // Left Button
          headerLeft: () => (
            <TouchableOpacity
              style={styles.HeaderButtons}
              onPress={() => navigation.openDrawer()}>
              <Text>Open Drawer</Text>
            </TouchableOpacity>
          ),
        }}
      />
      <StackNav.Screen
        name="LoginPage"
        component={Login}
        options={{
          headerTitle: 'Login Page',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 30, fontWeight: 'bold'},
          headerStyle: {backgroundColor: '#D3D3D3'},
        }}
      />
      <StackNav.Screen
        name="UserPage"
        component={Users}
        options={{
          headerTitle: 'Your Page',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 30, fontWeight: 'bold'},
          headerStyle: {backgroundColor: '#D3D3D3'},
        }}
      />
      <StackNav.Screen
        name="NewAccount"
        component={NewAccount}
        options={{
          headerTitle: 'Create Account',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 30, fontWeight: 'bold'},
          headerStyle: {backgroundColor: '#D3D3D3'},
        }}
      />
    </StackNav.Navigator>
  );
}

function ProfileStack({navigation}) {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="ProfilePage"
        component={ProfileTabs}
        options={{
          headerTitle: 'Profile Page',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 30, fontWeight: 'bold'},
          headerStyle: {backgroundColor: '#D3D3D3'},
          // Left Button
          headerLeft: () => (
            <TouchableOpacity
              style={styles.HeaderButtons}
              onPress={() => navigation.openDrawer()}>
              <Text>Open Drawer</Text>
            </TouchableOpacity>
          ),
        }}
      />
    </StackNav.Navigator>
  );
}

function ProfileTabs({navigation}) {
  return (
    <TabNav.Navigator initialRouteName="Profile">
      <TabNav.Screen name="Profile" component={Profile} />
      <TabNav.Screen name="Followers" component={Profile} />
      <TabNav.Screen name="Following" component={Profile} />
    </TabNav.Navigator>
  );
}
