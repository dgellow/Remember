/* jshint esnext: true */

import React from 'react-native';
let {
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

import TableView from 'react-native-tableview';
let {
  Section,
  Item,
} = TableView;

export default class FlashSetNotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
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
    return (
        <View style={{flex: 1}}>
        <Text>Notes: (100/100)</Text>
        <TextInput
      style={{height: 60, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text} />
        </View>
    );
  }
};
