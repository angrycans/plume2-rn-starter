import React from 'react'
import { StyleSheet, Text, AppRegistry, View, ViewStyle } from 'react-native'
import { NativeRouter, Route, Link } from 'react-router-native'
import { RouteWithSubRoutes } from 'uikit'

import Login from './login'
import Home from './home'
import Smile from './smile'

////////////////////////////////////////////////////////////
// then our route config
const routes = [
  { path: '/', exact: true, component: Login },
  { path: '/smile', component: Smile },
  {
    path: '/home', component: Home,
    routes: [
      { path: 'home/smile', component: Smile },
    ]
  },
  { path: '/setting', component: Home },
]

const AppRouter = () => (
  <NativeRouter>
    <View style={{ flex: 1 }}>
      {RouteWithSubRoutes(routes)}
    </View>
  </NativeRouter>
)

export default AppRouter