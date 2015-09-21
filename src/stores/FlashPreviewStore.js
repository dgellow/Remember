/* jshint jsnext: true */

import AppDispatcher from '../dispatchers/AppDispatcher';
import EventEmitter from 'events';

var FlashPreviewStore = {
  eventEmitter: new EventEmitter(),

  collection: '',
  text: '',
  image: '',

  get() {
    return {
      text: this.text,
      collection: this.collection,
      image: this.image,
    };
  },

  clear() {
    this.text = '';
    this.collection = '';
    this.image = '';
  },
};
export default FlashPreviewStore;

AppDispatcher.register((payload) => {
  switch(payload.eventName) {
  case 'set-collection':
    FlashPreviewStore.collection = payload.collection;
    FlashPreviewStore.eventEmitter.emit('change');
    break;
  case 'set-text':
    FlashPreviewStore.text = payload.text;
    FlashPreviewStore.eventEmitter.emit('change');
    break;
  case 'set-image':
    FlashPreviewStore.image = payload.image;
    FlashPreviewStore.eventEmitter.emit('change');
    break;
  case 'clear-preview':
    FlashPreviewStore.clear();
    FlashPreviewStore.eventEmitter.emit('change');
    break;
  }

  return true;
});
