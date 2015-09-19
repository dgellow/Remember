/* jshint esnext: true */

import React from 'react-native';
let {
  StyleSheet,
  TouchableHighlight,
  Text,
} = React;

import Camera from 'react-native-camera';

export default class FlashCamera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraType: Camera.constants.Type.back
    };
  }

  handleBarCodeRead(ev) {
    console.log(ev);
  }

  handleTakePicture() {
    this.refs.cam.capture((err, data) => console.log(err, data));
  }

  render() {
    return (
        <Camera ref="cam"
      style={styles.container}
      onBarCodeRead={this.handleBarCodeRead}
      type={this.state.cameraType}>
        <TouchableHighlight onPress={this.handleTakePicture}>
        <Text>Take Picture</Text>
        </TouchableHighlight>
        </Camera>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
});
