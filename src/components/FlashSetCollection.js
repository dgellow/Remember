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

export default class FlashSetCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ['Hello', 'Nuieu', 'Tdite', 'Iuier', 'Cdietd']
    };
  }

  handlePress(event) {
    console.log(event);
  }

  renderItem(collection) {
    return collection === this.state.selectedItem ?
      (<Item selected={true}>{collection}</Item>) :
    (<Item>{collection}</Item>);
  }

  render() {
    var items = this.state.collections.map(this.renderItem, this);
    return (
        <TableView onPress={this.handlePress} style={{flex: 1}}>
        <Section>
        {items}
      </Section>
        </TableView>
    );
  }
};
