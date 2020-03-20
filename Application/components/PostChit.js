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
    // marginTop: 10,
    marginRight: 20,
  },
  modal: {
    maxWidth: 200,
    maxHeight: 100,
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
          <Modal visible={this.state.modalVisibility} style={styles.modal}>
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
