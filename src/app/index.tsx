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
  { path: '/login', component: Login },
  {
    path: '/Home', component: Home,
    routes: [
      { path: '/smile', component: Smile },
    ]
  },
  { path: '/setting', component: Home },
]

const AppRouter = () => (
  <NativeRouter>
    <View>
      {RouteWithSubRoutes(routes)}
    </View>
  </NativeRouter>
)

export default AppRouter