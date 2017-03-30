import * as React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import {Button} from 'antd-mobile'

export default class Login extends React.Component<any, any> {

  handleClick=()=>{
    console.log("handleClick");
  }

  render() {
    return (
      <View>
      <Text style={styles.header}>
        Login view
      </Text>
      <Button type="primary" size="small" onClick={this.handleClick}>login</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  },

})
