/* jshint jsnext: true */
/*global require, module, fetch*/

'use strict';

import React from 'react-native';
let {
  AppRegistry,
  Text,
  View,
  TabBarIOS,
} = React;

import AppDispatcher from './src/dispatchers/AppDispatcher';

import CollectionsNavigator from './src/components/CollectionsNavigator';
import FlashNavigator from './src/components/FlashNavigator';

class Remember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'collections'
    };
  }

  componentDidMount() {
    AppDispatcher.dispatch({eventName: 'read-from-storage'});
  }

  render() {
    return (
        <TabBarIOS>
        <TabBarIOS.Item
      title='Collections'
      icon={require('image!ic_collections')}
      selected={this.state.selectedTab === 'collections'}
      onPress={() => this.setState({selectedTab: 'collections'})}>
            <CollectionsNavigator/>
          </TabBarIOS.Item>

        <TabBarIOS.Item
      title='Flash actions'
      icon={require('image!ic_flash_on')}
      selected={this.state.selectedTab === 'flash'}
      onPress={() => this.setState({selectedTab: 'flash'})}>
            <FlashNavigator/>
          </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('Remember', () => Remember);
