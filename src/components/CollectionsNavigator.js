/* jshint esnext: true */

import React from 'react-native';
let {
  StyleSheet,
  NavigatorIOS,
} = React;

import CollectionsListScreen from './CollectionsListScreen';

export default class CollectionsNavigator extends React.Component {
  render() {
    return React.createElement(NavigatorIOS, {
      style: styles.container,
      initialRoute: {
        title: 'Collections',
        component: CollectionsListScreen,
      }
    });
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
