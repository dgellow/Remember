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
      text: this.props.text || '',
    };
  }

  render() {
    return (
        <View style={styles.container}>
        <TextInput
      style={styles.input}
      autoFocus={true}
      multiline={true}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text} />
        <View style={styles.separator} />
        </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#B5C6CC',
    flex: 1,
  },

  input: {
    flex: .4,
    padding: 5,
    backgroundColor: '#FFFFFF',
  },

  separator: {
    flex: .6,
  }
});
