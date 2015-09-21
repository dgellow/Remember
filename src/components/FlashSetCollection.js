/* jshint esnext: true */

import React from 'react-native';
let {
  StyleSheet,
  Text,
  View,
} = React;

import TableView from 'react-native-tableview';
let {
  Section,
  Item,
} = TableView;

import CollectionsStore from '../stores/CollectionsStore';

export default class FlashSetCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: CollectionsStore.getAttrs('name'),
      selectedItem: this.props.collection || '',
    };
  }

  renderItem(collection, index) {
    var props = {
      key: `collection-item-${index}`,
      onPress: () => this.setState({selectedItem: collection}),
    };
    if (collection === this.state.selectedItem) {
      props.selected = true;
    }
    return React.createElement(Item, props, collection);
  }

  render() {
    var items = this.state.collections.map(this.renderItem, this);
    return (
        <TableView style={{flex: 1}} selected={true}>
        <Section>
        {items}
      </Section>
        </TableView>
    );
  }
};
