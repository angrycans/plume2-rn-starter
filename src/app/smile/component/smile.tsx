import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Relax } from 'plume2'
import { Loading, noop } from 'uikit'
import {Button} from 'antd-mobile'

@Relax
export default class Smile extends React.Component<any, any> {
  props: {
    relaxProps?: {
      loading: boolean;
      count: number;
      increment: () => void;
    }
  };

  static relaxProps = {
    count: 'count',
    loading: 'loading',
    increment: noop,
  };

  render() {
    const { count, loading, increment } = this.props.relaxProps
    console.log("this.props.relaxProps",this.props.relaxProps.count);
    //如果是loading，显示loading
    if (loading) {
      return <Loading />
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text} onPress={increment}>
          {`${count}`}
        </Text>
        <Button>test</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  } as React.ViewStyle,
  text: {
    fontSize: 16,
    fontWeight: 'bold'
  } as React.TextStyle
})