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
      itemWrapperStyle: styles.wrapper,
      initialRoute: {
        title: 'Flash',
        component: FlashActionsScreen,
      }
    });
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#B5C6CC',
  },

  wrapper: {
    marginTop: 70
  }
});
