/* jshint esnext: true */

import React from 'react-native';
let {
  StyleSheet,
  ListView,
} = React;

import CollectionItemRow from './CollectionItemRow';

export default class CollectionsItemsListScreen extends React.Component {
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(props.collection.items)
    };
  }

  renderRow(rowData, sectionID, rowID) {
    return React.createElement(CollectionItemRow, {
      rowData: rowData,
    });
  }

  render() {
    return (
        <ListView style={styles.list}
      dataSource={this.state.dataSource}
      renderRow={this.renderRow.bind(this)}/>
    );
  }
};

var styles = StyleSheet.create({
  list: {
    backgroundColor: '#B5C6CC',
  },
});
