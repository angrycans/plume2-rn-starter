import * as React from 'react'
import { StyleSheet, Text, View, ViewStyle, TextStyle } from 'react-native'
import { Button, NavBar, Icon } from 'antd-mobile'
import { RouteWithSubRoutes, IRoute } from 'uikit'

export default class Home extends React.Component<any, any> {
  props: {
    routes: Array<IRoute>
  }

  handleClick = () => {
    console.log("handleClick", this.props);
  }

  render() {
    console.log("handleClick", this.props);
    return (
      <View>
        <View style={styles.ViewStyle}>
          <Text style={styles.textStyle}>header</Text>
        </View>

        {RouteWithSubRoutes(this.props.routes)}
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

