import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'
import CategorySelection from '../Components/CategorySelection'


export default class SignUp extends Component {
    render() {
        return (
            <>
            <CategorySelection/>
                        <Row gutter={[0, 40]}>
                            <Col >
                                <Row><h1>Welcome to SHOPBAG</h1></Row>
                                <Row style={{ marginBottom: '20px' }}><h3>Please input your information below</h3></Row>
                                <Row type='flex' style={{ width: '50%', marginBottom: '20px' }}>
                                    <Col span={5}> <h3>First name</h3></Col>
                                    <Col span={19}> <Input placeholder="Please enter your First name" /></Col>
                                </Row>
                                <Row type='flex' style={{ width: '50%', marginBottom: '20px' }}>
                                    <Col span={5}> <h3>Last name</h3></Col>
                                    <Col span={19}> <Input placeholder="Please enter your Last name" /></Col>
                                </Row>
                                <Row type='flex' style={{ width: '50%', marginBottom: '20px' }}>
                                    <Col span={5}> <h3>Password</h3></Col>
                                    <Col span={19}> <Input.Password placeholder="Please enter your password" /></Col>
                                </Row>
                                <Row type='flex' style={{ width: '50%', marginBottom: '20px' }}>
                                    <Col span={5}> <h3>Confirm Password</h3></Col>
                                    <Col span={19}> <Input.Password placeholder="Please enter confirm your password" /></Col>
                                </Row>
                            </Col>
                            <Row type='flex' justify='end' style={{ width: '70%', marginBottom: '20px' }}>
                                <Button size='large' type='primary'>Create Account</Button>
                            </Row>
                        </Row>
                        </>
        )
    }
}
