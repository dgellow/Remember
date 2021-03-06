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

import AppDispatcher from '../dispatchers/AppDispatcher';
import FlashPreviewStore from '../stores/FlashPreviewStore';

import FlashSetCollection from './FlashSetCollection';
import FlashSetNotes from './FlashSetNotes';

export default class FlashPreviewScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: '',
      text: '',
    };
  }

  previewChanged() {
    let {text, collection} = FlashPreviewStore.get();
    this.setState({text, collection});
  }

  componentDidMount() {
    FlashPreviewStore.eventEmitter
      .addListener('change', this.previewChanged.bind(this));
  }

  componentWillUnmount() {
    FlashPreviewStore.eventEmitter
      .removeListener('change', this.previewChanged.bind(this));
  }

  handleSetCollectionRef(setCollection) {
    this._setCollection = setCollection;
  }

  handleCollectionPress() {
    this.props.navigator.push({
      component: FlashSetCollection,
      title: 'Choose a collection',
      leftButtonTitle: 'Cancel',
      rightButtonTitle: 'Done',
      onLeftButtonPress: () => this.props.navigator.pop(),
      onRightButtonPress: () => {
        if (this._setCollection) {
          AppDispatcher.dispatch({
            eventName: 'set-collection',
            collection: this._setCollection.state.selectedItem,
          });
        }
        this.props.navigator.pop();
      },
      passProps: {
        ref: this.handleSetCollectionRef.bind(this),
        collection: this.state.collection,
      }
    });
  }

  handleSetNotesRef(setNotes) {
    this._setNotes = setNotes;
  }

  handleNotesPress() {
    this.props.navigator.push({
      component: FlashSetNotes,
      title: 'Write a quick note',
      leftButtonTitle: 'Cancel',
      rightButtonTitle: 'Done',
      onLeftButtonPress: () => this.props.navigator.pop(),
      onRightButtonPress: () => {
        if (this._setNotes) {
          AppDispatcher.dispatch({
            eventName: 'set-text',
            text: this._setNotes.state.text,
          });
        }
        this.props.navigator.pop();
      },
      passProps: {
        ref: this.handleSetNotesRef.bind(this),
        text: this.state.text,
      }
    });
  }

  render() {
    let {image} = FlashPreviewStore.get();
    return (
      <View style={styles.container}>
        <Image
          source={{uri: image}}
      style={styles.image} />
        <TableView style={styles.table}
        tableViewCellStyle={TableView.Consts.CellStyle.Subtitle}>
        <Section label="Add information" style={styles.section} arrow={true}>
            <Item
              value="collection"
              onPress={this.handleCollectionPress.bind(this)}
              detail={this.state.collection}>
              Collection
            </Item>
            <Item
              value="notes"
              onPress={this.handleNotesPress.bind(this)}
              detail={this.state.text}>
              Notes
            </Item>
          </Section>
        </TableView>
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    backgroundColor: '#B5C6CC',
    flex: 1,
  },

  image: {
    flex: 0.6,
    resizeMode: 'contain',
  },

  table: {
    flex: 0.4,
  },

  section: {
    backgroundColor: '#B5C6CC',
  },

  tableTitle: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    marginBottom: 30,
  },
});
