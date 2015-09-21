/* jshint esnext: true */

import EventEmitter from 'EventEmitter';
import React from 'react-native';
let {
  StyleSheet,
  NavigatorIOS,
  AlertIOS,
} = React;

import AppDispatcher from '../dispatchers/AppDispatcher';

import CollectionsListScreen from './CollectionsListScreen';
import NewCollectionScreen from './NewCollectionScreen';

function createCollection(name) {
  return {
    name: name,
    items: [],
  };
}

export default class CollectionsNavigator extends React.Component {
  addCollection(collection) {
    AppDispatcher.dispatch({
      eventName: 'new-collection',
      newCollection: collection
    });
  }

  handleNewCollectionRef(newCollectionScreen) {
    this._newCollectionScreen = newCollectionScreen;
  }

  handleRightButtonPress() {
    this.refs.collectionNav.push({
      title: 'Add',
      component: NewCollectionScreen,
      leftButtonTitle: 'Cancel',
      rightButtonTitle: 'Done',
      onLeftButtonPress: () => {
        this.refs.collectionNav.pop();
      },
      onRightButtonPress: () => {
        if(this._newCollectionScreen &&
           this._newCollectionScreen.state.text) {
          let collectionName = this._newCollectionScreen.state.text;
          this.addCollection(createCollection(collectionName));
        }
        this.refs.collectionNav.pop();
      },
      passProps: {
        ref: this.handleNewCollectionRef.bind(this),
      }
    });
  }

  render() {
    return (
        <NavigatorIOS
      ref="collectionNav"
      style={styles.container}
      itemWrapperStyle={styles.wrapper}
      initialRoute={{
        title: 'Collections',
        component: CollectionsListScreen,
        rightButtonTitle: 'Add',
        onRightButtonPress: this.handleRightButtonPress.bind(this),
      }} />
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  wrapper: {
    flex: 1,
    paddingTop: 70
  }
});
