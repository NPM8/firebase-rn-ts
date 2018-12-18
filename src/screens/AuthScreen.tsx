// import fb from 'fb';
import { User } from 'firebase';
import * as React from 'react';
import { Component } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationScreenProp } from 'react-navigation';
import { fb } from '../data';

interface IComProps {
  navigation: NavigationScreenProp<{}>;
}

class AuthScreen extends Component<IComProps> {
  constructor(props: IComProps) {
    super(props);
  }

  public componentDidMount() {
    fb.auth().onAuthStateChanged((user: User) => {
      if (user) {
        this.props.navigation.navigate('home');
      } else {
        this.props.navigation.navigate('login');
      }
    });
  }

  public render() {
    return (
      <View>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
}

export default AuthScreen;
