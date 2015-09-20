/* jshint esnext: true */

import React from 'react-native';
let {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} = React;

export default class CollectionRow extends React.Component {
  render() {
    let {image, name} = this.props.rowData;
    return (
        <TouchableHighlight
      onPress={this.props.onPress}>
        <View style={styles.rowContainer}>
        <Image style={styles.thumb} source={{uri: image}} />
        <Text style={styles.title}>{name}</Text>
        <View style={styles.separator} />
        </View>
        </TouchableHighlight>
    );
  }
};

var styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    padding: 10
  },

  textContainer: {
    flex: 1
  },

  thumb: {
    width: 80,
    height: 80,
    marginRight: 10
  },

  title: {
    fontSize: 20,
    color: '#FF8000',
    fontWeight: 'bold'
  },

  subtitle: {
    fontSize: 16,
    color: '#656565'
  },

  separator: {
    height: 1,
    backgroundColor: '#dddddd'
  },
});
