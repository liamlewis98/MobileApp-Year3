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
  header: {
    flexDirection: 'row',
    backgroundColor: 'cyan',
    borderWidth: 1,
    height: screenHeight * 0.1,
  },
  loginBtn: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  menuBtn: {
    flex: 1,
    backgroundColor: 'white',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    height: screenHeight * 0.1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      chits: [],
    };
    global.ThingToPass = 'WordsWordsWords';
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
          onPress={() =>
            console.log(
              'Main Page - ' +
                global.AuthToken +
                '\nLogged in state = ' +
                global.LoggedIn,
            )
          }>
          <Text>Press me to reveal auth token for debugging in console.</Text>
        </TouchableOpacity>
        {/* <Text>Authentication Token is: {data}</Text> */}
        {/* FlatList */}
        <View>
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
        {/* Button to add chit */}
        <View>
          <TouchableOpacity style={{borderWidth: 1}}>
            <Text>Change Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
