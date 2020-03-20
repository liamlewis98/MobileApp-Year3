/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';

const styles = StyleSheet.create({});

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reload: false,
    }
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
          console.log(response.status);
          if (response.status === 200) {
            global.LoggedIn = false;
            console.log(
              'Logout Success! \nState of LoggedIn = ' + global.LoggedIn,
            );
            this.props.navigation.navigate('HomePage');
          } else {
            alert('Error 401, log out error');
          }
        })
    );
  }

  confirmLogout() {
    Alert.alert('Are you sure you want to log out?', '', [
      {text: 'Yes', onPress: () => [this.logoutUser()]},
      {text: 'No', onPress: () => console.log('Did not logout')},
    ]);
  }
  logoutButton() {
    return (
      <TouchableOpacity onPress={() => this.confirmLogout()}>
        <Text>Logout</Text>
      </TouchableOpacity>
    );
  }
  test() {
    return <Text>Hello Liam Testing</Text>;
  }

  render() {
    return (
      <View>
        <View style={{justifyContent: 'center', alignSelf: 'center'}}>
          <Text style={{fontSize: 32}}>
            {global.LoggedIn ? this.test() : 'You are not logged in.'}
          </Text>
        </View>

        {/* Bottom Logout Button */}
        <View>
          {/* Add in more profile functionality... maybe tabnav to navigate through
        Profile-Followers-Following ** Could see if this can be implemented into the header? */}
          {global.LoggedIn ? this.logoutButton() : null}
        </View>
      </View>
    );
  }
}
