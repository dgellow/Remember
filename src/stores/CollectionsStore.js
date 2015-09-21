/* jshint jsnext: true */

import AppDispatcher from '../dispatchers/AppDispatcher';
import EventEmitter from 'events';
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

  getAttrs(attr) {
    return this.collections
      .map((x) => x[attr])
      .reduce((acc, x) => {
        if (x !== null && x !== undefined)  {
          acc.push(x);
        }
        return acc;
      }, []);
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

  case 'insert-item':
    var {collection, index} = CollectionsStore.collections
      .reduce((acc, collection, index) => {
        if (collection.name === payload.item.collection) {
          acc = {collection, index};
        }
        return acc;
      }, {});
    let {text, image} = payload.item;
    collection.items.push({text, image});
    CollectionsStore.collections[index] = collection;
    writeToStorage().done(CollectionsStore.eventEmitter.emit('change'));
    break;
  }

  return true;
});
