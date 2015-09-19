/* jshint esnext: true */

import React from 'react-native';
let {
  AppRegistry,
  TabBarIOS,
  View,
  Text,
} = React;

import styles from '../config/styles';

export default class TabCollections extends React.Component {
  render() {
    var {
      selectedTab,
      onPress,
    } = this.props;

    let title = 'Collections';
    return (
        <TabBarIOS.Item title={title} selected={selectedTab === title}
      onPress={onPress.bind(null, title)}>
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
        </TabBarIOS.Item>
    );
  }
};
