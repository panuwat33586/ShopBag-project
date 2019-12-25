import React, { Component } from 'react'
import {Modal,Row,Col,Input,Button} from 'antd'


export default class SignInModal extends Component {
    constructor(props){
        super(props)
        this.state = { visible: false };
    }
    
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleSignin = e => {
        console.log(e);
        this.setState({
            visible: false,
        });
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
                <Row type='flex' align='top' style={{marginBottom:'10px'}}>
                <img src='https://drive.google.com/uc?id=1PjvmChcgEnR-zCOh5828o2bkPP-oWaXV' alt='SHOPBAG Logo' />
                </Row>
                <Row type='flex' align='middle' style={{marginBottom:'10px'}}>
                    <Col  span={24}>
                    <Row style={{marginBottom:'10px'}} >
                        <Row gutter={[16, 24]}>
                            <Col>
                            <b>Email or Username</b>
                            </Col>
                            </Row>
                        <Row gutter={[16, 24]}>
                            <Col>
                            <Input placeholder="Enter Email or Username" />
                            </Col>               
                            </Row>
                    </Row>
                    <Row style={{marginBottom:'10px'}}>
                    <Row gutter={[16, 24]}>
                            <Col>
                            <b>Password</b>
                            </Col>
                            </Row>
                        <Row gutter={[16, 24]}>
                            <Col>
                            <Input.Password placeholder="Enter Email or Username" />
                            </Col>               
                            </Row>
                    </Row>
                    <Row style={{marginBottom:'10px'}}>
                        <Row >
                            <a href='#'>forget your password</a> 
                        </Row>
                        <Row >
                            <a  href='/signup'>Signup for new account</a>
                        </Row>
       
                    </Row>
                    </Col>
                </Row>
                <Row  type='flex' align='bottom' justify='center' >
                       <Button type='primary'>Sign in</Button>
                </Row>
            </Col>
            </Row>
          </Modal>
          </>
        )
    }
}
