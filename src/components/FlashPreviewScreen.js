/* jshint esnext: true */

import React from 'react-native';
let {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  ScrollView,
  TouchableHighlight,
} = React;

import TableView from 'react-native-tableview';
let {
  Section,
  Item,
} = TableView;

import FlashSetCollection from './FlashSetCollection';
import FlashSetNotes from './FlashSetNotes';

export default class FlashPreviewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  handleCollectionPress() {
    this.props.navigator.push({
      component: FlashSetCollection,
      title: 'Choose a collection',
      leftButtonTitle: 'Cancel',
      rightButtonTitle: 'Done',
      onLeftButtonPress: () => this.props.navigator.pop(),
      onRightButtonPress: () => {
        this.props.navigator.pop();
      },
      passProps: {
      }
    });
  }

  handleNotesPress() {
    this.props.navigator.push({
      component: FlashSetNotes,
      title: 'Enter some notes',
      leftButtonTitle: 'Cancel',
      rightButtonTitle: 'Done',
      onLeftButtonPress: () => this.props.navigator.pop(),
      onRightButtonPress: () => {
        this.props.navigator.pop();
      },
      passProps: {
      }
    });
  }

  render() {
    return (
        <View style={{flex: 1}}>
        <Image source={{uri: this.props.assetUri}}
      style={{
        flex: 0.5,
        resizeMode: 'contain',
      }} />
        <TableView style={{flex: 0.5}}>
        <Section label="Add information" arrow={true}>

        <Item value="collection" onPress={this.handleCollectionPress.bind(this)}>
        Collection
      </Item>
        <Item value="notes" onPress={this.handleNotesPress.bind(this)}>
        Notes
      </Item>
        </Section>
        </TableView>
        </View>
    );
  }
};
