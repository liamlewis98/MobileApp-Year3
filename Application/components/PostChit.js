/* eslint-disable react-native/no-inline-styles */
// Will be a modal that will handle the posting of the chit.
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  bottomBar: {
    height: screenHeight * 0.1,
    borderRadius: 100,
    backgroundColor: 'transparent',
    alignItems: 'flex-end',
  },
  newChitButton: {
    height: '80%',
    width: '40%',
    borderRadius: 100,
    borderWidth: 2,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginRight: 20,
  },
  modal: {
    width: 200,
    height: 100,
  },
});

export default class postChit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: '',
      chit_content: '',
      modalVisibility: false,
    };
  } // Constructor

  // Modal Options
  openModal() {
    if (global.LoggedIn === false) {
      alert('Please log in before posting.');
      // this.props.navigation.navigate('LoginPage');
    } else {
      this.setState({
        modalVisibility: true,
      });
    }
  }
  closeModal() {
    this.setState({
      modalVisibility: false,
    });
  }

  async postChit() {
    try {
      const response = await fetch('http://10.0.2.2:3333/api/v0.0.5/chits', {
        method: 'POST',
        headers: {
          // Accept: 'application/json',
          'Content-Type': 'application/json',
          'X-Authorization': global.AuthToken,
        },
        body: JSON.stringify({
          // chit_id
          // timestamp
          // chit_content
          // location: {}
          // user: {}
        }),
      });
      const responseJson = await response.json();
      // console.log('RESPONSE HERE -' + responseJson);
      this.setState({
        authenticationToken: responseJson.token,
      });
      console.log(this.state.authenticationToken);
      global.AuthToken = this.state.authenticationToken;
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
      <View style={{backgroundColor: 'transparent'}}>
        <View style={styles.bottomBar}>
          <TouchableOpacity
            onPress={() => this.openModal()}
            style={styles.newChitButton}>
            <Text style={{fontSize: 32}}>Post</Text>
          </TouchableOpacity>
        </View>

        {/* Modal Container */}
        <View>
          {/* Modal */}
          <Modal
            visible={this.state.modalVisibility}
            style={{backgroundColor: 'blue'}}>
            <TouchableOpacity onPress={() => this.closeModal()}>
              <Text>Close Modal</Text>
            </TouchableOpacity>
            <Text>Post Your Chit!</Text>
            <TextInput
              placeholder="Talk about your day?"
              onChangeText={chitToPost => this.setState({chitToPost})}
              multiline={true}
              maxLength={141}
            />
          </Modal>
        </View>
      </View>
    );
  }
}
