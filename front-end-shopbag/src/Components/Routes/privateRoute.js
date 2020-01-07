import React, { Component } from 'react'
import * as allRoutes from './index'
import rolesConfig from '../../config/roles'
import { Route, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import store from "../../Redux/store/store";
import { LOGOUT_USER } from '../../Redux/actions/actions'

class PrivateRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      allowedRoutes: [],
      redirectRoute: []
    }
  }

  componentWillMount() {
    let role = this.props.role || 'guest'
    if (role) {
      this.setState({
        allowedRoutes: rolesConfig[role].routes,
        redirectRoute: [rolesConfig[role].redirect]
      })
    } else {
      store.dispatch({ type: LOGOUT_USER })
    }
  }

  render() {
    return (
      <>
        {this.state.allowedRoutes.map(route =>
          < Route
            path={route.url}
            component={allRoutes[route.component]}
            key={route.url}
          />
        )}
        {this.state.redirectRoute.map(url =>
          <Redirect to={url} />
        )}
      </>
    )
  }
}

export default withRouter(PrivateRoute);

