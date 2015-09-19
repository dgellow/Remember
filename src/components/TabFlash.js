/* jshint esnext: true */

import React from 'react-native';
let {
  AppRegistry,
  TabBarIOS,
  View,
  Text,
  AlertIOS,
} = React;

import Button from 'react-native-button';
import styles from '../config/styles';

export default class TabFlash extends React.Component {
  handleCameraPress() {
    AlertIOS.alert(
      'Camera!',
      'You have pressed the camera button',
      [{text: 'Cancel', onPress: () => console.log('[Camera alert]: Cancel')},
       {text: 'OK', onPress: () => console.log('[Camera alert]: OK')}]
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
    var {
      selectedTab,
      onPress,
    } = this.props;

    let title = 'Flash';
    return (
        <TabBarIOS.Item title={title}
      selected={selectedTab === title}
      onPress={onPress.bind(null, title)}>
        <View style={styles.container}>
        <Text>
        Record something
      </Text>
        <Button onPress={this.handleCameraPress}>
        Camera
      </Button>
        <Button onPress={this.handleAudioPress}>
        Audio
      </Button>
        </View>
        </TabBarIOS.Item>
    );
  }
};
