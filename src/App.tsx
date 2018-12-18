import { AppLoading, Asset, Font } from 'expo';
import * as react from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import AppNavigator from './navigation/AppNavigator';

interface IPro {
  skipLoadingScreen: boolean;
}
export default class App extends react.Component<IPro> {
  public state = {
    isLoadingComplete: false,
  };
  constructor(props) {
    super(props);
  }

  public render() {
    // @ts-ignore
    return !this.state.isLoadingComplete && !this.props.skipLoadingScreen ? (
        <AppLoading
            startAsync={this._loadResourcesAsync}
            onError={this._handleLoadingError}
            onFinish={this._handleFinishLoading}
        />
    ) : (
        <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
            <AppNavigator/>
        </View>
    );
  }

  public _loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
                // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
                // We include SpaceMono because we use it in HomeScreen.js. Feel free
                // to remove this if you are not using it in your app
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
    return void 0;
  };

  public _handleLoadingError = (error: Error) => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
    console.warn(error);
  }

  public _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
