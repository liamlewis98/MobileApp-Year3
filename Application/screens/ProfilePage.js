/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Dimensions,
  FlatList,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import PostChit from '../components/PostChit';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  profileWelcome: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    marginTop: 20,
  },
  recentChitTitle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  chits: {
    borderRadius: 20,
    flex: 1,
    borderWidth: 2,
    textAlign: 'center',
    backgroundColor: 'silver',
    marginHorizontal: screenWidth * 0.02,
    marginVertical: screenHeight * 0.02,
    fontSize: 20,
    paddingVertical: screenHeight * 0.01,
  },
});

export default class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reload: false,
      firstname: '',
      secondanme: '',
      email: '',
      recent_chits: {},
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
          console.log(response.status);
          if (response.status === 200) {
            this.setState({reload: true})
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

  reload() {
    if (global.LogInToken !== null) {
      this.setState({reload: true});
    } else {
      this.setState({reload: false});
    }
  }

  getUserChits() {
    fetch('http://10.0.2.2:3333/api/v0.0.5/user/' + global.LogInToken, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        //Debug
        console.log(responseJson);

        this.setState({
          firstname: responseJson.given_name,
          secondanme: responseJson.family_name,
          recent_chits: responseJson.recent_chits,
        });
        console.log(this.state.firstname + ' ' + this.state.secondanme);
        console.log(this.state.recent_chits);
      });
  } // getChits

  reloadPage() {
    this.setState({
      t: 2,
    });
  }
  componentDidMount() {
    this.getUserChits();
    this.reload();
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <TouchableOpacity onPress={() => this.reloadPage()}><Text>Reload Page</Text></TouchableOpacity> */}
        <View style={styles.profileWelcome}>
          <Text style={{fontSize: 32}}>
            {global.LoggedIn
              ? 'Hello, ' + this.state.firstname
              : 'Please log in first!'}
          </Text>
        </View>
        <View style={styles.recentChitTitle}>
          {global.LoggedIn ? (
            <Text style={{fontSize: 28}}>Your Recent Chits</Text>
          ) : null}
          <FlatList
            data={this.state.recent_chits}
            renderItem={({item}) => (
              <View>
                <Text style={styles.chits}>{item.chit_content}</Text>
              </View>
            )}>
            keyExtractor ={({id}, index) => id}
          </FlatList>

          {global.LoggedIn ? this.logoutButton() : null}
          <View style={{width: '100%', marginBottom: 50}}>
          {global.LoggedIn ? <PostChit /> : null}
          </View>
        </View>
      </View>
    );
  }
}
