/* jshint esnext: true */

import React from 'react-native';
let {
  Text,
  Image,
  View,
} = React;

export default class CollectionItemRow extends React.Component {
  render() {
    let {image, note} = this.props.rowData;
    return (
        <View>
        <Image source={{uri: image}} style={{width: 100, height: 100}} />
        <Text>{note}</Text>
        </View>
    );
  }
};
