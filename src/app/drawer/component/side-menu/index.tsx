import * as React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import { Actions } from 'react-native-router-flux';


export default class SideMenu extends React.Component<any, any> {

  render() {
    return (
      <View>
        <Text style={styles.header}>
          SideMenu
        </Text>
        <Text onPress={() => Actions.refresh({ key: 'drawer', open: false })}>close</Text>
        <Text onPress={Actions.home}>go to home</Text>
        <Text onPress={Actions.setting}>go to settings</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    marginTop: 10
  } as ViewStyle
})
