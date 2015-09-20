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
        <Text>Choose a name for your collection</Text>
        <TextInput
      style={{height: 40, borderColor: 'gray', borderWidth: 1}}
      onChangeText={(text) => this.setState({text})}
      value={this.state.text} />
        </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
