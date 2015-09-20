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

import Camera from 'react-native-camera';
import styles from './src/config/styles';
import CollectionsNavigator from './src/components/CollectionsNavigator';
import FlashNavigator from './src/components/FlashNavigator';

class Remember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'collections'
    };
  }

  render() {
    return (
        <TabBarIOS>
        <TabBarIOS.Item
      title='Collections'
      selected={this.state.selectedTab === 'collections'}
      onPress={() => this.setState({selectedTab: 'collections'})}>
            <CollectionsNavigator/>
          </TabBarIOS.Item>

        <TabBarIOS.Item
      title='Flash'
      selected={this.state.selectedTab === 'flash'}
      onPress={() => this.setState({selectedTab: 'flash'})}>
            <FlashNavigator/>
          </TabBarIOS.Item>
        </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('Remember', () => Remember);
