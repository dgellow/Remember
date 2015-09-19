/* jshint esnext: true */

import React from 'react-native';
let {
  View,
  Text,
  AlertIOS,
} = React;

import Button from 'react-native-button';
import styles from '../config/styles';
import FlashCamera from './FlashCamera';

export default class FlashActionsScreen extends React.Component {
  handleCameraPress() {
    AlertIOS.alert(
      'Camera!',
      'You have pressed the camera button',
      [{text: 'Cancel', onPress: () => console.log('[Camera alert]: Cancel')},
       {text: 'OK', onPress: () => this.props.navigator.push({
         title: 'Camera',
         component: FlashCamera,
       })}]
    );
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
        <Text>
        Record something
      </Text>
        <Button onPress={this.handleCameraPress.bind(this)}>
        Camera
      </Button>
        <Button onPress={this.handleAudioPress.bind(this)}>
        Audio
      </Button>
        </View>
    );
  }
};
