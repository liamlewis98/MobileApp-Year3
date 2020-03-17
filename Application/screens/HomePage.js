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
    borderWidth: 1,
    textAlign: 'center',
    backgroundColor: 'silver',
    marginHorizontal: screenWidth * 0.05,
    marginVertical: screenHeight * 0.02,
    fontSize: 20,
    paddingHorizontal: screenWidth * 0.02,
    paddingVertical: screenHeight * 0.01,
  },
});

var LoggedIn = false;

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      chits: [],
    };
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
  } // getChit
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

        {/* FlatList */}
        <View style={styles.container}>
          <FlatList
            data={this.state.chits}
            renderItem={({item}) => (
              <View>
                <Text style={styles.chits}>{item.chit_content}</Text>
              </View>
            )}>
            keyExtractor ={({id}, index) => id}
          </FlatList>
        </View>
        <View>{global.LoggedIn ? <PostChit /> : null}</View>
      </View>
    );
  }
}
