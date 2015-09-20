/* jshint esnext: true */

import Subscribable from 'Subscribable';
import React from 'react-native';
let {
  ListView,
} = React;

import CollectionRow from './CollectionRow';
import CollectionItemsListScreen from './CollectionItemsListScreen';

var CollectionsListScreen = React.createClass({
  mixins: [Subscribable.Mixin],

  getInitialState() {
    return {
      dataSource: this.createDataSource(this.props.collections)
    };
  },

  createDataSource(data) {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ds.cloneWithRows(data || []);
  },

  componentDidMount() {
    this.addListenerOn(
      this.props.events, 'collections:change',
      (collections) => {
        this.setState({dataSource: this.createDataSource(collections)});
      }
    );
  },

  componentWillUnmount() {
    this.removeListenerOn(
      this.props.events, 'collections:change',
      (collections) => {
        this.setState({dataSource: this.createDataSource(collections)});
      }
    );
  },

  onRowPress(collection) {
    this.props.navigator.push({
      title: collection.name,
      component: CollectionItemsListScreen,
      passProps: {collection: collection},
    });
  },

  renderRow(rowData, sectionID, rowID) {
    return (
        <CollectionRow
      onPress={() => this.onRowPress(rowData)}
      rowData={rowData}/>
    );
  },

  render() {
    return (
        <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow}/>
    );
  },
});

export default CollectionsListScreen;
