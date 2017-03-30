import * as React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import { Button } from 'antd-mobile'
import { Link } from 'react-router-native'

export default class Login extends React.Component<any, any> {

  handleClick = () => {
    console.log("handleClick");

  }

  render() {
    return (
      <View>
        <Text style={styles.header}>
          hello plume2-rn-starter
        </Text>
        <Link to="/home/smile" ><Text>login</Text></Link>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
  }
})
