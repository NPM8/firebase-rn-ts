import react from 'react';
import {
  Text, TextStyle,
  View, ViewStyle,
} from 'react-native';
import MyButtonHandler from '../components/MyButtonHandler';
import { mainColor } from '../constants/Colors';
import Colors from '../constants/Colors';
import { NavigationScreenProp } from 'react-navigation';

interface ICompProps {
  navigation: NavigationScreenProp<{}>;
}

export default class HomeScreen extends react.Component<ICompProps> {
  public static navigationOptions = {
    header: null,
  };

  constructor(props: ICompProps) {
    super(props);
    this.handelStartPress = this.handelStartPress.bind(this);
  }

  public handelStartPress() {
    const { navigate } = this.props.navigation;

    navigate('main');
  }

  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.titleMain} >
          <Text style={styles.titleText} >Firebase App</Text>
          <Text style={styles.subTitle}> firebase auth </Text>
          <Text style={styles.subTitle}> firebase db </Text>
        </View>
        <View style={styles.secButtonView}>
          <View style={styles.buttonView}>
            <MyButtonHandler
              handleOnPress={
                this.handelStartPress
              }
              buttonStyle={
                styles.button
              }> START </MyButtonHandler>
          </View>
        </View>
      </View>
    );
  }

}

interface IStyles {
  container: ViewStyle;
  titleMain: ViewStyle;
  titleText: TextStyle;
  subTitle: TextStyle;
  buttonView: ViewStyle;
  secButtonView: ViewStyle;
  button: ViewStyle;
}

const styles: IStyles = {
  container:  {
    flex: 1,
    backgroundColor: Colors.mainColor,
    flexDirection: 'column',
  },
  titleMain: {
    flex: 1,
    backgroundColor: mainColor,
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
  subTitle: {
    width: 200,
    fontSize: 14,
    color: '#fff',
    alignSelf: 'center',
    textAlign: 'center',
  },
  buttonView: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  secButtonView: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  button: {
    // flex: 1
    height: 50,
    justifyContent: 'center',
  },
};
