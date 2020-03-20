/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from 'react-native';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const styles = StyleSheet.create({
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
    paddingVertical: screenHeight * 0.01,
  },
  header_userName: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header_userEmail: {},
  user_picture: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    marginBottom: 20,
    height: '30%',
  },
  user_recentChits: {
    // flex: 1,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default class ChittrProfile extends Component {
  constructor(props) {
    super(props);
    // States
    this.state = {
      isLoading: true,
      chits: [],
    };
  }

  getUserInfo(done) {
    fetch('http://10.0.2.2:3333/api/v0.0.5/user/' + global.UserId, {
      method: 'GET',
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState(
          {
            isLoading: false,
            recent_chits: responseJson,
          },
          () => {
            console.log(responseJson);
            console.log(
              responseJson.given_name + ' ' + responseJson.family_name,
            );
            console.log(responseJson.email);

            done();
          },
        );
      })
      .catch(error => {
        console.log(error);
      }); // getDetails
  }

  getUserChits() {
    fetch('http://10.0.2.2:3333/api/v0.0.5/user/' + global.UserId, {
      method: 'GET',
    })
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

  follow() {
    return (
      <TouchableOpacity style={{justifyContent: 'center', borderWidth: 2}}>
        <Text style={{color: 'green'}}>Follow</Text>
      </TouchableOpacity>
    );
  }

  unfollow() {
    return (
      <TouchableOpacity style={{justifyContent: 'center', borderWidth: 2}}>
        <Text style={{color: 'red'}}>Unfollow</Text>
      </TouchableOpacity>
    );
  }

  componentDidMount() {
    this.getUserInfo(() => {
      console.log('Completed?');
    });
    // console.log(global.UserId);
  }
  render() {
    var following = true;
    if (this.state.isLoading === true) {
      return (
        <View>
          {/* Style this to be in the center and larger. */}
          <ActivityIndicator />
        </View>
      );
    } // if
    return (
      <View style={{flex: 1, backgroundColor: 'cyan'}}>
        {/* Header first and second name with email. */}
        <View style={{flexDirection: 'column'}}>
          <View style={styles.header_userName}>
            <Text style={{fontSize: 28}}>
              {/* {this.state.forename} {this.state.surname} */}
            </Text>
          </View>
          <Text style={{fontSize: 20, textAlign: 'center'}}>
            {/* {this.state.email} */}
          </Text>
        </View>

        {/* Follow / Unfollow button. */}
        <View style={{marginVertical: 20}}>
          {following ? this.unfollow() : this.follow()}
        </View>

        {/* User picture */}
        <View style={styles.user_picture}>
          <Text>Picture Here</Text>
        </View>

        {/* Recent Chits Title */}
        <View style={styles.user_recentChits}>
          <Text style={{fontSize: 22}}>Recent Chits</Text>
        </View>

        {/* FlatList for chits. */}
        <FlatList
          style={{flex: 1}}
          data={this.state.recent_chits}
          renderItem={({item}) => (
            <View style={styles.chits}>
              <Text>{item.user.email}</Text>
            </View>
          )}>
          keyExtractor ={({id}, index) => id}
        </FlatList>
      </View>
    );
  }
}
