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
import TabCollections from './src/components/TabCollections';
import TabFlash from './src/components/TabFlash';

class Remember extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: 'Collections'
    };
  }

  handleTabPress(tabTitle) {
    this.setState({selectedTab: tabTitle});
  }

  render() {
    return (
        <TabBarIOS>
        <TabCollections onPress={this.handleTabPress.bind(this)} selectedTab={this.state.selectedTab}/>
        <TabFlash onPress={this.handleTabPress.bind(this)} selectedTab={this.state.selectedTab}/>
        </TabBarIOS>
    );
  }
}

AppRegistry.registerComponent('Remember', () => Remember);
