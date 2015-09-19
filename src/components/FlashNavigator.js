/* jshint esnext: true */

import React from 'react-native';
import FlashActionsScreen from './FlashActionsScreen';

let {
  StyleSheet,
  NavigatorIOS,
} = React;

export default class FlashNavigator extends React.Component {
  render() {
    return React.createElement(NavigatorIOS, {
      style: styles.container,
      initialRoute: {
        title: 'Flash',
        component: FlashActionsScreen,
      }
    });
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
