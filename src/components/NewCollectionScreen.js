/* jshint esnext: true */

import React from 'react-native';
let {
  StyleSheet,
  Text,
  TextInput,
  View,
} = React;

export default class NewCollectionScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    console.log(this.state);
    return (
        <View style={styles.container}>
        <View style={styles.row}>
        <Text style={styles.description}>Collection name</Text>
        <TextInput
      style={styles.input}
      placeholder="ex: Restaurants, AwesomeProject, etc"
      onChangeText={(text) => this.setState({text})}
      value={this.state.text} />
        </View>
        </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 80,
    backgroundColor: '#B5C6CC',
  },

  row: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 10,
    paddingRight: 10,
  },

  description: {
    flex: .4,
  },

  input: {
    flex: .6,
    fontSize: 12,
  },
});
