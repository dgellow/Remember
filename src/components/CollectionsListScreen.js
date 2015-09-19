/* jshint esnext: true */

import React from 'react-native';
let {
  TabBarIOS,
  View,
  Text,
} = React;

import styles from '../config/styles';

export default class CollectionsListScreen extends React.Component {
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
};
