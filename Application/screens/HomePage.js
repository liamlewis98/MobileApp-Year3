/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Text,
  TextInput,
  View,
  StyleSheet,
  FlatList,
  Dimensions,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

import PostChit from '../components/PostChit';

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
  },
  chits: {
    borderRadius: 20,
    flex: 1,
    borderWidth: 1,
    flexDirection: 'row',
    textAlign: 'center',
    backgroundColor: 'silver',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: screenWidth * 0.02,
    marginVertical: screenHeight * 0.02,
    fontSize: 20,
    // paddingHorizontal: screenWidth * 0.02,
    paddingVertical: screenHeight * 0.01,
  },
});

var LoggedIn = false;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      recent_chits: [],
      t: 1,
    };
    global.UserId = '';
  }
  checkState() {
    if (global.LoggedIn === true) {
      LoggedIn = true;
      console.log(
        'Global Authentication Key - ' +
          global.AuthToken +
          '\nLogged in global state = ' +
          global.LoggedIn +
          '\nLogged in local state = ' +
          LoggedIn,
      );
    } else {
      alert('Something went wrong.');
    }
  }
  getChits() {
    fetch('http://10.0.2.2:3333/api/v0.0.5/chits', {method: 'GET'})
      .then(response => response.json())
      .then(responseJson => {
        //Debug
        console.log(responseJson);

        this.setState({
          isLoading: false,
          chits: responseJson,
        });
      });
  } // getChits
  reloadPage() {
    this.setState({
      t: 2,
    });
  }
  componentDidMount() {
    this.getChits();
  }
  render() {
    if (this.state.isLoading === true) {
      return (
        <View>
          {/* Style this to be in the center and larger. */}
          <ActivityIndicator />
        </View>
      );
    } // if

    return (
      // Container
      <View style={styles.container}>
        <TouchableOpacity
          style={{alignSelf: 'center', marginTop: 10, justifyContent: 'center'}}
          onPress={() => this.checkState()}>
          <Text>
            Press me to reveal auth token and logged in state for debugging in
            console.
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.reloadPage()}>
          <Text>Reload</Text>
        </TouchableOpacity>

        {/* FlatList */}
        <View style={styles.container}>
          <FlatList
            data={this.state.chits}
            renderItem={({item}) => (
              <View style={styles.chits}>
                <TouchableOpacity
                  onPress={() => {
                    console.log('From HomePage -- ' + item.user.user_id);
                    global.UserId = item.user.user_id;
                    this.props.navigation.navigate('UserPage');
                  }}
                  style={{width: '100%', height: '100%'}}>
                  <Text style={{textAlign: 'center', fontSize: 18}}>
                    [ID #{item.user.user_id}] - {item.chit_content}
                    {/* {item.chit_id} */}
                  </Text>
                </TouchableOpacity>
              </View>
            )}>
            keyExtractor ={({id}, index) => id}
          </FlatList>
          {global.LoggedIn ? <PostChit /> : null}
        </View>
      </View>
    );
  }
}
