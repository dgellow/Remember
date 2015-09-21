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
        <View style={styles.container}>
        <View style={styles.imageWrapper}>
        <Image style={styles.image} source={{uri: image}} />
        </View>
        <View style={styles.textWrapper}>
        <Text style={styles.text}>{name}</Text>
        </View>
        </View>
        </TouchableHighlight>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#FFFFFF',
  },

  imageWrapper: {
    flex: .2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  image: {
    resizeMode: 'cover',
    width: 200,
    height: 200,
    flex: 1,
  },

  textWrapper: {
    flex: .8,
    padding: 20,
    justifyContent: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#AAAAAA',
  },

  text: {
    color: '#888888',
  }
});
