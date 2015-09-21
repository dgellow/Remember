/* jshint esnext: true */

import React from 'react-native';
let {
  StyleSheet,
  Text,
  Image,
  View,
} = React;

export default class CollectionItemRow extends React.Component {
  render() {
    let {image, text} = this.props.rowData;
    return (
        <View style={styles.container}>
        <View style={styles.imageWrapper}>
        <Image source={{uri: image}} style={styles.image} />
        </View>
        <View style={styles.textWrapper}>
        <Text style={styles.text}>{text}</Text>
        </View>
        </View>
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
    alignItems: 'center',
    padding: 10,
  },

  image: {
    resizeMode: 'cover',
    width: 100,
    height: 100,
    flex: 1,
  },

  textWrapper: {
    flex: .8,
    padding: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#AAAAAA',
    fontSize: 10,
  },

  text: {
    color: '#888888',
  }
});
