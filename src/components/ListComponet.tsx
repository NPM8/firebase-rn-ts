import { PureComponent as Component } from 'react';
import * as React from 'react';
import { View, StyleSheet, Text} from 'react-native';
import {NavigationScreenProp} from 'react-navigation';
import {IStation} from '../interfaces/station';

interface ICompProps {
  navigation: NavigationScreenProp<{}>;
  item: IStation;
}

class ListComponet extends Component<ICompProps> {
  public render() {
    const { item } = this.props;
    return (<View style={{ height: 400, flexDirection: 'column' }}>
        <View><Text style={{ fontWeight: 'bold' }}>{item.stationName}</Text></View>
        <View><View><Text>lat: {item.latitude}</Text><Text>long: {item.longitude}</Text><Text></Text></View><View></View></View>
        <View></View>
      </View>
    );
  }
}

export default ListComponet;
