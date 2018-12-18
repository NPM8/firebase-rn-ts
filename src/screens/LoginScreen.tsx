import * as React from 'react';
import { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import MyButtonHandler from '../components/MyButtonHandler';
import { fb } from '../data';
import Colors from '../constants/Colors';
import { NavigationScreenProp } from 'react-navigation';
import { FirebaseError } from 'firebase';

interface ICompState {
  login: string;
  password: string;
  errorMsg: string;
}

interface ICompProps {
  navigation: NavigationScreenProp<{}>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff4056',
    flexDirection: 'column',
  },
  titleMain: {
    flex: 1,
    backgroundColor: Colors.mainColor,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  titleText: {
    width: 200,
    fontSize: 24,
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
  },
  inputMain: {
    flex: 2,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    paddingLeft: 40,
    paddingRight: 40,
  },
  inputLogin: {
    width: 250,
    height: 50,
    fontSize: 18,
    color: Colors.mainColor,
    borderBottomColor: Colors.mainColor,
    borderBottomWidth: 2,
    padding: 10,
    alignSelf: 'center',
  },
});

class LoginScreen extends Component<ICompProps, ICompState> {

  constructor(props: ICompProps) {
    super(props);
    this.state = {
      login: '',
      password: '',
      errorMsg: '',
    };
    this.handleOnChangeLogin = this.handleOnChangeLogin.bind(this);
    this.handleOnChangePsswd = this.handleOnChangePsswd.bind(this);
    this.handleRegisterPress = this.handleRegisterPress.bind(this);
  }

  public render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled >
        <View style={styles.titleMain} >
          <Text style={styles.titleText} >Register User App</Text>
        </View>
        <View style={styles.inputMain}>
          <View style={{ width: 300, alignSelf: 'center' }}>
            <TextInput
              style={styles.inputLogin}
              placeholder="Login"
              textContentType="username"
              onChangeText={this.handleOnChangeLogin}
            />
            <TextInput
              style={styles.inputLogin}
              placeholder="Password"
              textContentType="password"
              onChangeText={this.handleOnChangePsswd}
            />
          </View>
          <MyButtonHandler handleOnPress={this.handleLogInPress}>Log in</MyButtonHandler>
          <MyButtonHandler handleOnPress={this.handleRegisterPress}>Register</MyButtonHandler>
        </View>

      </KeyboardAvoidingView>
    );
  }

  public handleOnChangeLogin(text: string) {
    this.setState({ login: text });
  }

  public handleOnChangePsswd(text: string) {
    this.setState({ password: text });
  }

  public handleLogInPress() {
    fb.auth()
            .signInWithEmailAndPassword(this.state.login, this.state.password)
            .then(() => this.props.navigation.navigate('sauth'))
            .catch((error: FirebaseError) => this.setState({ errorMsg: error.message }));
  }

  public handleRegisterPress() {
    fb.auth()
            .createUserWithEmailAndPassword(this.state.login, this.state.password)
            .then(() => this.props.navigation.navigate('sauth'))
            .catch((error: FirebaseError) => this.setState({ errorMsg: error.message }));
  }
}

export default LoginScreen;
