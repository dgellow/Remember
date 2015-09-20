/* jshint esnext: true */

import EventEmitter from 'EventEmitter';
import React from 'react-native';
let {
  StyleSheet,
  NavigatorIOS,
  AsyncStorage,
  AlertIOS,
} = React;

import CollectionsListScreen from './CollectionsListScreen';
import NewCollectionScreen from './NewCollectionScreen';

let STORAGE_COLLECTIONS_KEY = '@Remember:Collections';
let STORAGE_COLLECTIONS_DEFAULT_DATA = [];

function createCollection(name) {
  return {
    name: name,
    items: [],
  };
}

export default class CollectionsNavigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: STORAGE_COLLECTIONS_DEFAULT_DATA
    };
  }

  emitChange() {
    this.eventEmitter.emit('collections:change', this.state.collections);
  }

  async writeDefaultData() {
    try {
      this.writeData(STORAGE_COLLECTIONS_DEFAULT_DATA).done();
    } catch (error) {
      console.error(error);
      AlertIOS.alert("Couldn't write default data");
    }
  }

  async writeData(data) {
    try {
      await AsyncStorage.setItem(
        STORAGE_COLLECTIONS_KEY,
        JSON.stringify(data)
      );
    } catch(error) {
      console.error(error);
      AlertIOS.alert("Couldn't write data");
    }
  }

  async loadInitialState() {
    try {
      let value = await AsyncStorage.getItem(STORAGE_COLLECTIONS_KEY);
      if (value) {
        let collections = JSON.parse(value);
        this.setState({collections});
      } else {
        this.writeDefaultData().done();
      }
    } catch (error) {
      console.error(error);
      AlertIOS.alert("Couldn't read data");
    }
  }

  addCollection(collection) {
    this.setState({
      collections: this.state.collections.concat(collection)
    }, () => {
      this.writeData(this.state.collections).done(this.emitChange.bind(this));
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

  componentDidMount() {
    this.loadInitialState().done(this.emitChange.bind(this));
  }

  componentWillMount() {
    this.eventEmitter = new EventEmitter();
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
        passProps: {
          events: this.eventEmitter,
        },
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
