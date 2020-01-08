import React, { Component } from 'react'
import { Row, Col, Divider, Avatar } from 'antd'
import Axios from '../../config/axios.setup'

export default class MyAccount extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: []
    }
  }
  componentDidMount() {
    Axios.get('/user-profile')
      .then(response => {
        this.setState({
          user: response.data
        }, () => console.log(this.state.user))
      })
  }
  render() {
    const user = this.state.user
    return (
      <>
        <Row>
          <Col>
            <h2>Personal Information</h2>
          </Col>
        </Row>
        <Row>
          <Divider />
        </Row>
        <Row type='flex' justify='space-between' align='top'>
          <Col span={15}>
            <h3>Account name : {user.username}</h3>
            <h3>First name : {user.firstname}</h3>
            <h3>Last name : {user.lastname}</h3>
            <h3>Email : {user.email}</h3>
            <h3>Tel No. : {user.phonenumber}</h3>
            <h3>Gender : {user.gender}</h3>
            <h3>Birthdate : {user.birthdate}</h3>
          </Col>
          <Col span={4}>
            <Divider type='vertical' />
          </Col>
          <Col span={5}>
            <Avatar size={70} icon='user' />
          </Col>
        </Row>
      </>
    )
  }
}
