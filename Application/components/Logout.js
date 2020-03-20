// Will be a modal that will handle the logout process for the user.
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Modal} from 'react-native';

export default class Logout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      LogoutVisible: false,
    };
  }

  logoutUser() {
    // const {navigate} = this.props.navigation;
    return (
      fetch('http://10.0.2.2:3333/api/v0.0.5/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Authorization': global.AuthToken,
        },
      })
        //   .then(response => ressponse.json())
        .then(response => {
          if (response.status === 200) {
            this.goHome();
          } else {
            alert('Error 401, log out error');
          }
        })
    );
  }

  goHome() {
    this.closeModal();
    global.LoggedIn = false;
    alert('Logged Out');
  }
  openModal() {
    this.setState({
      LogoutVisible: true,
    });
  }
  closeModal() {
    this.setState({
      LogoutVisible: false,
    });
  }

  render() {
    return (
      <View>
        <TouchableOpacity onPress={() => this.openModal()}>
          <Text>Logout?!</Text>
        </TouchableOpacity>
        <Modal visible={this.state.LogoutVisible}>
          <Text>Are you sure you want to log out?</Text>
          <TouchableOpacity onPress={() => this.closeModal()}>
            <Text>CloseModal</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => this.logoutUser()}>
            <Text>Yes Im Sure</Text>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}
