import { Component } from 'react';
import * as React from 'react';
import { FlatList } from 'react-native';
import { database } from '../data';
import { Reference } from '@firebase/database';
import { NavigationScreenProp } from 'react-navigation';
import ListComponet from '../components/ListComponet';



interface ICompState {
  data: any[];
}

interface ICompProps {
  navigation: NavigationScreenProp<{}>;
}
class MainScreen extends Component<ICompProps, ICompState> {

  public stations: Reference;
  constructor(props: ICompProps) {
    super(props);
    this.stations = database().child('stations_big');
  }

  public componentDidMount(): void {
    this.stations.on('value', (elements) => {
      console.log(elements);
      let data: any[];
      data = [];
      elements.forEach((item) => data.push(item));
      this.setState({ data });
    });
  }

  public render() {
    return (
      <FlatList data={this.state.data} renderItem={item => <ListComponet
        item={item.item}
        key={item.item.key}/>}/>
    );
  }
}

export default MainScreen;
