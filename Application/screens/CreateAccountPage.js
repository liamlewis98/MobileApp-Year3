import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    // justifyContent: 'center',
    alignItems: 'center',
  },
  textInputs: {
    borderWidth: 2,
    width: '40%',
    textAlign: 'center',
    // marginVertical: 10,
    // marginBottom: 30,
    backgroundColor: 'silver',
    color: 'black',
  },
  createButton: {
    width: '70%',
    height: '10%',
    marginTop: 20,
    borderWidth: 2,
    backgroundColor: 'silver',
  },
  buttonText: {
    marginTop: 10,
    alignSelf: 'center',
    fontSize: 22,
  },
});

export default class CreateAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: '',
      secondname: '',
      email: '',
      password: '',
    };
  }

  async createAccount() {
    try {
      const response = await fetch('http://10.0.2.2:3333/api/v0.0.5/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          given_name: this.state.firstname,
          family_name: this.state.secondname,
          email: this.state.email,
          password: this.state.password,
        }),
      });

      //   console.log(response);
      //   console.log(response.status);
      if (response.status === 201) {
        alert(
          'Hello ' +
            this.state.firstname +
            ', please log in via the login screen.',
        );
        this.props.navigation.navigate('LoginPage');
      }
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={{marginTop: 20}}>First Name</Text>
        <TextInput
          placeholder="First Name"
          style={styles.textInputs}
          value={this.state.firstname}
          onChangeText={firstname => this.setState({firstname})}
        />
        <Text>Second Name</Text>
        <TextInput
          placeholder="Second Name"
          style={styles.textInputs}
          value={this.state.secondname}
          onChangeText={secondname => this.setState({secondname})}
        />
        <Text>Email</Text>
        <TextInput
          placeholder="Email"
          style={styles.textInputs}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />
        <Text>Password</Text>
        <TextInput
          placeholder="Password"
          style={styles.textInputs}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
        />

        <TouchableOpacity
          style={styles.createButton}
          onPress={() => this.createAccount()}>
          <Text style={styles.buttonText}>Create</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
