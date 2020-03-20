/* eslint-disable no-alert */
import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    // justifyContent: 'center',
  },
  emailCont: {
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    paddingTop: 80,
  },
  passwordCont: {
    // borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    width: '90%',
    paddingTop: 20,
  },
  textInputLabels: {
    fontWeight: 'bold',
    marginBottom: 10,
    fontSize: 24,
  },
  textInput: {
    borderWidth: 2,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'silver',
    width: '100%',
  },
  buttonContainer: {
    // borderWidth: 2,
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  bottomButton: {
    // width: '80%',
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: 'white',
    marginBottom: 20,
  },
  bottomButtonText: {
    fontSize: 28,
    textAlign: 'center',
    // justifyContent: 'center',
    fontWeight: 'bold',
  },
});
var myBool = false;

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
    global.LogInToken = '';
  }
  // var authentication = '';
  changeScreen() {
    this.props.navigation.navigate('HomePage');
  }
  async loginUser() {
    try {
      const response = await fetch('http://10.0.2.2:3333/api/v0.0.5/login', {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      });
      const responseJson = await response.json();
      // console.log('RESPONSE HERE -' + responseJson);
      this.setState({
        authenticationToken: responseJson.token,
      });
      console.log(this.state.authenticationToken);
      global.AuthToken = this.state.authenticationToken;

      global.LogInToken = responseJson.id;

      console.log(global.LogInToken);

      console.log('The global variable = ' + global.AuthToken);
      if (this.state.authenticationToken !== null) {
        myBool = true;
      }
      if (myBool === true) {
        console.log('Login Success! = ' + this.state.authenticationToken);
        global.LoggedIn = true;
        this.changeScreen();
      }
    } catch (error) {
      // console.error(error);
      console.log(this.state.email, this.state.password);
      console.log(this.state.isLoggedIn);
      alert(
        'Error trying to sign in.\nPlease enter Username and Passsword\nCorrectly.',
      );
    }
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
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={() => this.loginUser()}>
            <Text style={styles.bottomButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.bottomButton}
            onPress={() => this.props.navigation.navigate('NewAccount')}>
            <Text style={styles.bottomButtonText}>Create account here!</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    );
  }
}
