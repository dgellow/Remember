/* jshint esnext: true */

import React from 'react-native';
let {
  ListView,
} = React;

import CollectionRow from './CollectionRow';
import CollectionItemsListScreen from './CollectionItemsListScreen';

export default class CollectionsListScreen extends React.Component {

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        {name: 'Temples', items: [
          {type: 'picture',
           image: 'http://retraite-en-thailande.com/files/2015/05/Chiang-Mai-Thailand1.jpg',
           note: "Thailand, Chiang Mai, Lalala Temple"},
          {type: 'picture',
           image: 'http://theicforum.com/wp-content/uploads/2015/02/chiang-mai.jpg',
           note: "Thailand, Chiang Mai, Green and bronze Temple"},
          {type: 'picture',
           image: 'http://www.chiangmai.net/images/front-page-slides/final/doi_suthep_horizontal_640.jpg',
           note: "Thailand, Chiang Mai, Golden Romono Temple"},
        ]},
        {name: 'Restaurants', items: [
          {type: 'picture',
           image: 'http://4.bp.blogspot.com/-Qh_EjLOYm2A/UzqqFoy5ipI/AAAAAAAAS7Y/UPx9bka3upQ/s1600/chezxu6.jpg',
           note: 'Xu Lausanne, Hot & Spicy Chicken with vegetables'},
          {type: 'picture',
           image: 'http://www.foodaholic.ch/wp-content/uploads/2012/07/2012_06_06_04.jpg',
           note: 'Xu Lausanne, Peking duck'},
          {type: 'picture',
           image: 'https://irs1.4sqi.net/img/general/600x600/OMiqpQeN6hGdMEBGy4yPO2NM06jJ1L0KrB0YzIj2pF8.jpg',
           note: 'Xu Lausanne, Pork Sichuan style'},
          {type: 'picture',
           image: 'https://irs0.4sqi.net/img/general/600x600/mga90Dcvkw7wW-5KmSt1P5X1D5XeDgaTB3vxm-DDsJQ.jpg',
           note: 'Xu Lausanne, Pork noodle soup'},
        ]},
      ])
    };
  }

  onRowPress(collection) {
    this.props.navigator.push({
      title: collection.name,
      component: CollectionItemsListScreen,
      passProps: {collection: collection},
    });
  }

  renderRow(rowData, sectionID, rowID) {
    return (
        <CollectionRow
      onPress={() => this.onRowPress(rowData)}
      rowData={rowData}/>
    );
  }

  render() {
    return (
        <ListView
      dataSource={this.state.dataSource}
      renderRow={this.renderRow.bind(this)}/>
    );
  }
};
