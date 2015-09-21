/* jshint esnext: true */

import React from 'react-native';
let {
  StyleSheet,
  TouchableHighlight,
  Text,
  AlertIOS,
} = React;

import AppDispatcher from '../dispatchers/AppDispatcher';
import FlashPreviewStore from '../stores/FlashPreviewStore';

import Camera from 'react-native-camera';
import FlashPreviewScreen from './FlashPreviewScreen';

export default class FlashCamera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cameraType: Camera.constants.Type.back
    };
  }

  handleTakePicture() {
    this.refs.cam.capture((error, data) => {
      if (error) {
        console.error(error);
        AlertIOS.alert('An error occurred during picture taking');
      } else {
        AppDispatcher.dispatch({eventName: 'set-image', image: data});
        this.props.navigator.replace({
          title: 'Preview',
          component: FlashPreviewScreen,
          leftButtonTitle: 'Cancel',
          rightButtonTitle: 'Done',
          onLeftButtonPress: () => {
            AppDispatcher.dispatch({eventName: 'clear-preview'});
            this.props.navigator.pop();
          },
          onRightButtonPress: () => {
            AppDispatcher.dispatch({
              eventName: 'insert-item',
              item: FlashPreviewStore.get()
            });
            AppDispatcher.dispatch({eventName: 'clear-preview'});
            this.props.navigator.pop();
          }
        });
      }
    });
  }

  render() {
    return (
        <Camera ref="cam"
      style={styles.container}
      type={this.state.cameraType}>
        <TouchableHighlight onPress={this.handleTakePicture.bind(this)}>
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
