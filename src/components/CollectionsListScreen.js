/* jshint esnext: true */

import React from 'react-native';
let {
  ListView,
} = React;

import CollectionsStore from  '../stores/CollectionsStore.js';

import CollectionRow from './CollectionRow';
import CollectionItemsListScreen from './CollectionItemsListScreen';

export default class CollectionsListScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: this.createDataSource(CollectionsStore.getAll())
    };
  }

  createDataSource(data) {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return ds.cloneWithRows(data || []);
  }

  collectionsChanged() {
    let collections = CollectionsStore.getAll();
    this.setState({dataSource: this.createDataSource(collections)});
  }

  componentDidMount() {
    CollectionsStore.eventEmitter
      .addListener('change', this.collectionsChanged.bind(this));
  }

  componentWillUnmount() {
    CollectionsStore.eventEmitter
      .removeListener('change', this.collectionsChanged.bind(this));
  }

  onRowPress(collection) {
    this.props.navigator.push({
      title: collection.name,
      component: CollectionItemsListScreen,
      passProps: {collection: collection},
    });
  }

  renderRow(rowData, sectionID, rowID) {
    return (
        <CollectionRow
      onPress={() => this.onRowPress(rowData)}
      rowData={rowData}/>
    );
  }

  render() {
    return (
        <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow.bind(this)}/>
    );
  }
};
