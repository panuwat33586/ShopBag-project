import React, { Component } from 'react'
import { Modal, Row, Col, Input, Button } from 'antd'
import Axios from '../config/axios.setup'


export default class SignInModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            username: '',
            password: ''
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleSignin = () => {
        const username = this.state.username
        const password = this.state.password
        Axios.post('/loginUser', { username, password })
            .then(result => {
                this.setState({
                    visible: false,
                });
                localStorage.setItem("ACCESS_TOKEN", result.data.token);
                this.props.checklogin()
            })
            .catch(err => {
                console.error(err);
            })
    };
    handleClose = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };


    render() {
        return (
            <>
                <Button type='link' style={{ color: 'grey' }} onClick={this.showModal}><b>Hello, sign in</b></Button>
                <Modal
                    centered
                    visible={this.state.visible}
                    onOk={this.handleSignin}
                    onCancel={this.handleClose}
                    footer={null}
                >

                    <Row type='flex' justify='center'   >
                        <Col>
                            <Row type='flex' align='top' style={{ marginBottom: '10px' }}>
                                <img src='https://drive.google.com/uc?id=1PjvmChcgEnR-zCOh5828o2bkPP-oWaXV' alt='SHOPBAG Logo' />
                            </Row>
                            <Row type='flex' align='middle' style={{ marginBottom: '10px' }}>
                                <Col span={24}>
                                    <Row style={{ marginBottom: '10px' }} >
                                        <Row gutter={[16, 24]}>
                                            <Col>
                                                <b>Username</b>
                                            </Col>
                                        </Row>
                                        <Row gutter={[16, 24]}>
                                            <Col>
                                                <Input placeholder="Username" onChange={e => this.setState({ username: e.target.value })} />
                                            </Col>
                                        </Row>
                                    </Row>
                                    <Row style={{ marginBottom: '10px' }}>
                                        <Row gutter={[16, 24]}>
                                            <Col>
                                                <b>Password</b>
                                            </Col>
                                        </Row>
                                        <Row gutter={[16, 24]}>
                                            <Col>
                                                <Input.Password placeholder="Password" onChange={e => this.setState({ password: e.target.value })} />
                                            </Col>
                                        </Row>
                                    </Row>
                                    <Row style={{ marginBottom: '10px' }}>
                                        <Row >
                                            <a href='#'>forget your password</a>
                                        </Row>
                                        <Row >
                                            <a href='/signup'>Signup for new account</a>
                                        </Row>

                                    </Row>
                                </Col>
                            </Row>
                            <Row type='flex' align='bottom' justify='center' >
                                <Button type='primary' onClick={()=>this.handleSignin()}>Sign in</Button>
                            </Row>
                        </Col>
                    </Row>
                </Modal>
            </>
        )
    }
}
