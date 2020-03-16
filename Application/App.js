/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
  Dimensions,
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
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

// Navs
const StackNav = createStackNavigator();
const DrawNav = createDrawerNavigator();

// Navigation
// Drawer - Calls stack nav.
export default function Drawer({navigation}) {
  return (
    <NavigationContainer>
      <DrawNav.Navigator initialRouteName="HomePage">
        <DrawNav.Screen name="Home Page" component={HomePage} />
        <DrawNav.Screen name="Profile Page" component={Profile} />
      </DrawNav.Navigator>
    </NavigationContainer>
  );
}

// Stack Pages
function HomePage({navigation}) {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="Chittr"
        component={Home}
        options={{
          // Title
          headerTitle: 'Chittr',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 38, fontWeight: 'bold'},
          headerStyle: {backgroundColor: '#D3D3D3'},
          // Left Button
          headerRight: () => (
            <TouchableOpacity
              style={styles.HeaderButtons}
              onPress={() => navigation.navigate('LoginPage')}>
              <Text>Login Page</Text>
            </TouchableOpacity>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={styles.HeaderButtons}
              onPress={() => navigation.openDrawer()}>
              <Text>Menu Icon</Text>
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
          headerTitleStyle: {fontSize: 38, fontWeight: 'bold'},
          headerStyle: {backgroundColor: '#D3D3D3'},
        }}
      />
      <StackNav.Screen
        name="ProfilePage"
        component={Profile}
        options={{
          headerTitle: 'Profile Page',
          headerTitleAlign: 'center',
          headerTitleStyle: {fontSize: 38, fontWeight: 'bold'},
          headerStyle: {backgroundColor: '#D3D3D3'},
        }}
      />
    </StackNav.Navigator>
  );
}
