import * as React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import { Button } from 'antd-mobile'
import { Actions } from 'react-native-router-flux';


export default class Login extends React.Component<any, any> {

  render() {
    return (
      <View>
        <Text style={styles.header}>
          hello plume2-rn-starter
        </Text>
        <Text onPress={Actions.drawer}>go to home</Text>

      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    marginTop: 100
  }
})
