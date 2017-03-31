import React from 'react'
import { ViewStyle, Text } from 'react-native'
import {
  Scene,
  Router,
  Modal,
  ActionConst,
  Actions
} from 'react-native-router-flux';

import NavigationDrawer from './drawer'
import Login from './login'
import Home from './home'
import setting from './setting'
import Smile from './smile'

const getSceneStyle = (/* NavigationSceneRendererProps */ props, computedProps) => {
  const style = {
    flex: 1,
    backgroundColor: '#fff',
    shadowColor: null,
    shadowOffset: null,
    shadowOpacity: null,
    shadowRadius: null,
  } as ViewStyle;
  if (computedProps.isActive) {
    style.marginTop = computedProps.hideNavBar ? 0 : 64;
    style.marginBottom = computedProps.hideTabBar ? 0 : 50;
  }
  return style;
};

const AppRouter = () => (
  <Router getSceneStyle={getSceneStyle}>
    <Scene key="modal" component={Modal} >
      <Scene key="root" >
        <Scene key="login" component={Login} hideNavBar title="login" initial />
        <Scene key="drawer" component={NavigationDrawer} open={false} hideNavBar={false}>
          <Scene
            key="main"
          >
            <Scene key="home"
              component={Home}
              type={ActionConst.REPLACE}
              title="home"
              leftTitle="drawer" onLeft={() => Actions.refresh({ key: 'drawer', open: value => !value })}

              navigationBarStyle={{ backgroundColor: 'red' }}
              renderRightButton={() => <Text>Right</Text>}
              initial
            />
            <Scene key="setting"
              component={setting}
              type={ActionConst.REPLACE}
              title="setting"
              leftTitle="drawer" onLeft={() => Actions.refresh({ key: 'drawer', open: value => !value })}
              navigationBarStyle={{ backgroundColor: 'blue' }}
              renderRightButton={() => <Text>Right</Text>}
            />
          </Scene>
        </Scene>
      </Scene>

      <Scene key="error" component={Error} />
    </Scene>
  </Router >
)


const styles = ({
  container: {
    flex: 1, backgroundColor: 'transparent', justifyContent: 'center',
    alignItems: 'center',
  } as ViewStyle,
  tabBarStyle: {
    backgroundColor: '#eee',
  } as ViewStyle,
});
export default AppRouter