import React, { Component } from 'react'
import './App.css';
import {  Switch } from 'react-router-dom'
import {Row,Col} from 'antd'
import Topnavbar from './Components/Header/Topnavbar';
import Footer from './Components/Footer';
import { connect } from 'react-redux'
import PrivateRoute from './Components/Routes/privateRoute';

class App extends Component {
  render() {
    const role = this.props.user.role
    return (
      <Row style={{ height: '100%', width: '100%' }}>
      <Row style={{ marginLeft: '10%', marginRight: '10%', marginBottom: '50px', height: '100%' }}>
        <Col>
          <Topnavbar />
          <Switch>
          <PrivateRoute handleAppLogin={this.login} role={role} />
          </Switch>
        </Col>
      </Row>
      <Row type='flex' align='bottom' style={{ width: '100vw' }}>
        <Footer />
      </Row>
    </Row>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps, null)(App)