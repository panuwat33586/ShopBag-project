import React, { Component } from 'react'
import { Modal, Row, Col, Input, Button, Form } from 'antd'
import Axios from '../../config/axios.setup'
import { connect } from 'react-redux'
import { login } from '../../Redux/actions/actions'
import jwtDecode from 'jwt-decode'
import {Link} from 'react-router-dom'

 class SignInModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false,
            username: '',
            password: '',
            notification: ''
        };
    }

    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleSignin = (e) => {
        e.preventDefault()
        const username = this.state.username
        const password = this.state.password
        Axios.post('/loginUser', { username, password })
            .then(result => {
                const user = jwtDecode(result.data.token)
                this.props.login(user, result.data.token)
                this.setState({
                    visible: false,
                });
                this.props.checklogin()
                window.location.reload(true);
            })
            .catch(err => {
                console.log(err.response)
                this.setState({
                    notification: err.response.data
                })
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
                            <Form onSubmit={(e)=>this.handleSignin(e)}>
                            <Row type='flex' align='middle' style={{ marginBottom: '10px' }}>
                                <Col span={24}>
                                    <Row style={{ marginBottom: '10px' }} >
                                        <Row>
                                            <Col>
                                                <span style={{ color: 'red' }}>{this.state.notification}</span>
                                            </Col>
                                        </Row>
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
                                            <span>forget your password</span>
                                        </Row>
                                        <Row >
                                            <Link to='/signup'>Signup for new account</Link>
                                        </Row>

                                    </Row>
                                </Col>
                            </Row>
                            <Row type='flex' align='bottom' justify='center' >
                                <Button type='primary' htmlType='submit'>Sign in</Button>
                            </Row>
                            </Form>
                        </Col>
                    </Row>
                </Modal>
            </>
        )
    }
}

const mapDispatchToProps = {
    login: login
  }

  export default connect(null, mapDispatchToProps)(SignInModal)
