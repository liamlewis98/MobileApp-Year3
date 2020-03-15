/* eslint-disable no-alert */
import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    },
    email: {
        justifyContent: 'center',
    }
});

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isLoggedIn: false,
    };
  }

  loginUser() {
    return fetch('http://10.0.2.2:3333/api/v0.0.5/login', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then(response => {
        Alert.alert('Logged In!');
        this.setState({
          isLoggedIn: true,
        });
        console.log(this.state.isLoggedIn);
        this.props.navigation.navigate('Chittr');
      })
      .catch(error => {
        // console.error(error);
        console.log(this.state.email, this.state.password);
        console.log(this.state.isLoggedIn);
        Alert.alert(
          'Incorrect email / Password.' +
            '\n email=' +
            this.state.email +
            ' Password=' +
            this.state.password,
        );
      });
  }
  render() {
    return (
      // Container
      <View style={styles.container}>
        {/* Email */}
        <View style={styles.email}>
          <Text>Email</Text>
          <TextInput
            placeholder="Please Enter Your Email"
            // value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </View>
        {/* Password */}
        <View style={styles.password}>
          <Text>Password</Text>
          <TextInput
            placeholder="Please Enter Your Password"
            // value={this.state.password}
            onChangeText={password => this.setState({password})}
          />
        </View>
        <TouchableOpacity onPress={() => this.loginUser()}>
          <Text>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
