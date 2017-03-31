import * as React from 'react'
import { StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native'
import { Button, NavBar, Icon } from 'antd-mobile'

export default class Setting extends React.Component<any, any> {


  handleClick = () => {
    console.log("handleClick", this.props);
  }

  render() {

    return (
      <View>

        <Text >my setting</Text>

      </View>
    )
  }
}


