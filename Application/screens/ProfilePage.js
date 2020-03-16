import React, {Component} from 'react';
import {Text, TextInput, View, Button, StyleSheet, Alert} from 'react-native';

const styles = StyleSheet.create({});

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Hello Profile Page World</Text>
        <Text>{global.ThingToPass}</Text>
        <Text>{global.LogInResponse}</Text>
      </View>
    );
  }
}
