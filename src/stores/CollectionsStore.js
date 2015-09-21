/* jshint jsnext: true */

import AppDispatcher from '../dispatchers/AppDispatcher';
import EventEmitter from 'EventEmitter';
import {AsyncStorage} from 'react-native';

let STORAGE_COLLECTIONS_KEY = '@Remember:Collections';
let STORAGE_COLLECTIONS_DEFAULT_DATA = [];


function writeDefaultToStorage() {
  return writeDataToStorage(STORAGE_COLLECTIONS_DEFAULT_DATA);
}

function writeToStorage() {
  return writeDataToStorage(CollectionsStore.collections);
}

function writeDataToStorage(data) {
  return AsyncStorage.setItem(STORAGE_COLLECTIONS_KEY,
                              JSON.stringify(data));
}

function readFromStorage() {
  return AsyncStorage.getItem(STORAGE_COLLECTIONS_KEY);
}


var CollectionsStore = {
  eventEmitter: new EventEmitter(),

  collections: [],

  getAll() {
    return this.collections;
  },
};
export default CollectionsStore;

AppDispatcher.register((payload) => {
  switch(payload.eventName) {
  case 'read-from-storage':
    readFromStorage()
      .done((data) => {
        if (data) {
          let collections = JSON.parse(data);
          CollectionsStore.collections = collections;
          CollectionsStore.eventEmitter.emit('change');
        } else {
          writeDefaultToStorage()
            .done(() => readFromStorage().done());
        }
      });
    break;

  case 'new-collection':
    CollectionsStore.collections.push(payload.newCollection);
    writeToStorage().done(CollectionsStore.eventEmitter.emit('change'));
    break;
  }

  return true;
});
