import * as React from 'react'
import { StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native'
import { Button, NavBar, Icon } from 'antd-mobile'

export default class Setting extends React.Component<any, any> {


  handleClick = () => {
    console.log("handleClick", this.props);
  }

  render() {

    return (
      <View style={styles.header}>

        <Text >my setting</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    marginTop: 100
  } as ViewStyle
})

