import { PureComponent as Component } from 'react';
import * as React from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

// @ts-ignore
const styles = StyleSheet.create({
  button: {
    width: 250,
    height: 40,
    backgroundColor: '#777777',
    padding: 5,
    alignSelf: 'center',
  },
  text: {
    color: '#000',
    fontSize: 18,
    alignSelf: 'center',
    textAlign: 'center',
  },
});

interface ICompProps {
  children: string;
  textStyle?: TextStyle;
  buttonStyle?: ViewStyle;
  handleOnPress: (event: GestureResponderEvent | void) => void;
}

class MyButtonHandler extends Component <ICompProps> {
  static defaultProps = {
    textStyle: styles.text,
    buttonStyle: styles.button,
  };

  constructor(props: ICompProps) {
    super(props);
  }

  public render() {
    const { textStyle, buttonStyle, handleOnPress, children } = this.props;
    return (
      <TouchableOpacity style={buttonStyle} onPress={handleOnPress}>
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

export default MyButtonHandler;
