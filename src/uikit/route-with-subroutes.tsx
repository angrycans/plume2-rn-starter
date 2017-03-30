/**
 * react-router routeWithSubRoutes 封装
 */

import React from 'react'
import { Route } from 'react-router-native'

type TFnComponent = (...params: Array<any>) => any;

export interface IRoute {
  path: string;
  strict?: boolean;
  exact?: boolean;
  component?: React.ComponentClass<any> | TFnComponent;
  routes?: Array<IRoute>;
}

export default function routeWithSubRoutes(routes: Array<IRoute>) {
  //console.log("routes=>",routes);
  return routes.map((route, index) => {
    //dev check
    if (__DEV__) {
      if (route.component == undefined) {
        throw new Error(`${route.path} can not find component or asyncComponent`)
      }
    }

    if (route.component) {
      return (
        <Route
          key={index}
          exact={route.exact}
          path={route.path}
          strict={route.strict}
          render={(props) => <route.component {...props} routes={route.routes} />}
        />
      )
    } 
  })
}