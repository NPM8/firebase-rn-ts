import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/HomeScreen';
import AuthScreen from '../screens/AuthScreen';
import LoginScreen from '../screens/LoginScreen';

export default createStackNavigator({
  home: { screen: HomeScreen },
  login: { screen: LoginScreen },
  sauth: { screen: AuthScreen },
});
