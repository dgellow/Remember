/* jshint esnext: true */

import React from 'react-native';
let {
  StyleSheet,
  View,
  Text,
  Image,
  AlertIOS,
  TouchableHighlight,
} = React;

import FlashCamera from './FlashCamera';

export default class FlashActionsScreen extends React.Component {
  handleCameraPress() {
    this.props.navigator.push({
      title: 'Camera',
      component: FlashCamera,
    });
  }

  handleAudioPress() {
    AlertIOS.alert(
      'Audio!',
      'You have pressed the audio button',
      [{text: 'Cancel', onPress: () => console.log('[Audio alert]: Cancel')},
       {text: 'OK', onPress: () => console.log('[Audio alert]: OK')}]
    );
  }

  render() {
    return (
        <View style={styles.container}>
        <View style={styles.buttonWrapper}>
        <TouchableHighlight
      style={styles.button}
      onPress={this.handleCameraPress.bind(this)}>
        <View style={styles.camera}>
        <Image source={require('image!ic_camera_alt')} />
        <Text style={styles.buttonTitle}>Camera</Text>
      </View>
        </TouchableHighlight>
        </View>

        <View style={styles.buttonWrapper}>
        <TouchableHighlight
      style={styles.button}
      onPress={this.handleAudioPress.bind(this)}>
        <View style={styles.audio}>
        <Image source={require('image!ic_mic')} />
        <Text style={styles.buttonTitle}>Audio</Text>
      </View>
        </TouchableHighlight>
        </View>
        </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#B5C6CC',
    flex: 1,
    paddingTop: 20,
    paddingBottom: 100,
  },

  buttonWrapper: {
    flex: .5,
    paddingTop: 15,
    paddingBottom: 15,
  },

  button: {
    flex: 1,
  },

  buttonTitle: {
    color: '#222222',
  },

  camera: {
    flex: 1,
    backgroundColor: '#EBF0F5',
    alignItems: 'center',
    justifyContent: 'center',
  },

  audio: {
    flex: 1,
    backgroundColor: '#EBF0F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
