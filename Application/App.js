import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// Pages
import Home from './screens/HomePage';
import Login from './screens/LoginPage';
import Profile from './screens/HomePage';

// Navs
const StackNav = createStackNavigator();
const DrawNav = createDrawerNavigator();

// Navigation
// Drawer - Calls stack nav.
export default function Drawer() {
  return (
    <NavigationContainer>
      <DrawNav.Navigator initialRouteName="HomePage">
        <DrawNav.Screen name="Home Page" component={HomePage} />
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
          headerTitle: 'Chittr', // Style me later.
          headerTitleAlign: 'center',

          // Left Button
          headerLeft: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('LoginPage', {screen: 'LoginPage'})
              }>
              <Text>Press ME!</Text>
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
        }}
      />
    </StackNav.Navigator>
  );
}
const LoginPage = () => {
  return (
    <StackNav.Screen
      name="LoginPage"
      component={Login}
      options={{
        headerTitle: 'Login Page',
      }}
    />
  );
};
