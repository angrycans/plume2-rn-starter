import * as React from 'react'
import { View, Text, ViewStyle, Animated, Dimensions } from "react-native";
import { Actions } from "react-native-router-flux";

var {
  height: deviceHeight
} = Dimensions.get("window");

export default class ShowError extends React.Component<any, any> {

  constructor(props) {
    super(props);

    this.state = {
      offset: new Animated.Value(-deviceHeight)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: 0
    }).start();
  }

  closeModal() {
    Animated.timing(this.state.offset, {
      duration: 150,
      toValue: -deviceHeight
    }).start(Actions.pop);
  }

  render() {
    return (
      <Animated.View style={[styles.container, { backgroundColor: "rgba(52,52,52,0.5)" },
      { transform: [{ translateY: this.state.offset }] }]}>
        <View style={{
          width: 250,
          height: 250,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white"
        }}>
          <Text>{this.props.data}</Text>
          <Text onPress={this.closeModal.bind(this)}>Close</Text>
        </View>
      </Animated.View>
    );
  }
}

const styles = ({
  container: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
  } as ViewStyle
});

