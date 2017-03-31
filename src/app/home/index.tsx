import * as React from 'react'
import { Text, View, ViewStyle, TextStyle } from 'react-native'
import { Button } from 'antd-mobile'

export default class Home extends React.Component<any, any> {

  handleClick = () => {
    console.log("handleClick", this.props);
  }

  render() {
    console.log("handleClick", this.props);
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text style={styles.textStyle}>home header </Text>
        </View>

      </View>
    )
  }
}

const styles = {
  ViewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'

  } as ViewStyle,
  textStyle: {
    fontSize: 20
  } as TextStyle
};

