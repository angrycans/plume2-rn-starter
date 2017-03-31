import * as React from 'react'
import { StyleSheet, Text, View, ViewStyle } from 'react-native'
import { Actions } from 'react-native-router-flux';

export default class SideMenu extends React.Component<any, any> {

  render() {
    //console.log("sidemenu =>this", this);
    const { drawer } = this.props;
    return (
      <View>
        <Text style={styles.header}>
          SideMenu
        </Text>
        <Text onPress={() => Actions.refresh({ key: 'drawer', open: false })}>close</Text>
        <Text onPress={() => { drawer.close(); Actions.home() }}>home</Text>
        <Text onPress={() => { drawer.close(); Actions.smile() }}>smile</Text>
        <Text onPress={() => { drawer.close(); Actions.setting() }}>setting</Text>
        <Text onPress={() => Actions.error("Error message")}>error</Text>
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
