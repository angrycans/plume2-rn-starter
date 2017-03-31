import * as React from 'react'
import { Text, View, StyleSheet, ViewStyle, TextStyle } from 'react-native'
import { Button } from 'antd-mobile'

export default class Home extends React.Component<any, any> {

  handleClick = () => {
    console.log("handleClick", this.props);
  }

  render() {
    console.log("handleClick", this.props);
    return (

      <View style={styles.header}>
        <Text >home header </Text>
      </View>


    )
  }
}
const styles = StyleSheet.create({
  header: {
    marginTop: 100
  } as ViewStyle
})