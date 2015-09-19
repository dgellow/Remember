/* jshint jsnext: true */
/*global require, module, fetch*/

'use strict';

import React from 'react-native';
let {
  AppRegistry,
  Text,
  View,
} = React;

import styles from './src/config/styles';

class Remember extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('Remember', () => Remember);
