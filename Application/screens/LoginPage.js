/* eslint-disable no-alert */
import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  Alert,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
  },
  emailCont: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 50,
    width: '90%',
  },
  passwordCont: {
    flexDirection: 'row',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
  },
  textInputLabels: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 25,
  },
  textInput: {
    paddingHorizontal: 25,
    alignSelf: 'flex-end',
  },
});

export default class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      authenticationToken: '',
    };
    global.AuthToken = '';
    global.LoggedIn = false;
  }
  // var authentication = '';
  changeScreen() {
    this.props.navigation.navigate('Chittr');
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
      .then(response => response.json())
      .then(responseJson => {
        // console.log('RESPONSE HERE -' + responseJson);
        this.setState({
          authenticationToken: responseJson.token,
          // authenticationToken: JSON.stringify(responseJson.token),
        });
        console.log(this.state.authenticationToken);
        global.AuthToken = this.state.authenticationToken;
        console.log('The global variable = ' + global.AuthToken);

        if (this.state.authenticationToken === null) {
          alert('Error 400');
        } else {
          console.log('Login Success!' + this.state.authenticationToken);
          global.LoggedIn = true;
          this.changeScreen();
        }
      })
      .catch(error => {
        // console.error(error);
        console.log(this.state.email, this.state.password);
        console.log(this.state.isLoggedIn);
        alert(
          'Error trying to sign in.\nPlease enter Username and Passsword\nCorrectly.',
        );
      });
  }
  render() {
    return (
      // Container
      <KeyboardAvoidingView style={styles.container}>
        {/* Email */}
        <View style={styles.emailCont}>
          <Text style={styles.textInputLabels}>Email</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Please Enter Your Email"
            maxLength={30}
            value={this.state.email}
            onChangeText={email => this.setState({email})}
          />
        </View>
        {/* Password */}
        <View style={styles.passwordCont}>
          <Text style={styles.textInputLabels}>Password</Text>
          <TextInput
            style={styles.textInput}
            placeholder="Please Enter Your Password"
            // multiline={true}
            secureTextEntry
            value={this.state.password}
            maxLength={20}
            onChangeText={password => this.setState({password})}
          />
        </View>
        <TouchableOpacity onPress={() => this.loginUser()}>
          <Text>Login</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    );
  }
}
