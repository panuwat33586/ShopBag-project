import React, { Component } from 'react'
import {Row,Col, Divider,Avatar} from 'antd'

export default class MyAccount extends Component {
    render() {
        return (
            <>
              <Row>
              <Col>
              <h2>Personal Information</h2>
              </Col>
              </Row>
              <Row>
              <Divider/>
              </Row>
              <Row type='flex' justify='space-between' align='top'>
              <Col span={15}>  
               <h3>Account name : User</h3>
              <h3>First name : User</h3>
              <h3>Last name : User</h3>
              <h3>Email : User.Email</h3>
              <h3>Tel No. : User.Phone</h3>
              <h3>Gender : User.gender</h3>
              <h3>Birthdate : User.Birthdate</h3>
              <h3>Address : User.address</h3>
              </Col>
              <Col span={4}>
                <Divider type='vertical'/>
              </Col>
              <Col span={5}>
              <Avatar size={70} icon='user'/>
              </Col>
              </Row> 
            </>
        )
    }
}
