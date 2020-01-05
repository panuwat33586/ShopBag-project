import React, { Component } from 'react'
import { Row, Col, Input, Button, Form, DatePicker, Radio } from 'antd'
import CategorySelection from '../Components/CategorySelection'
import Axios from '../config/axios.setup'


class SignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            maincategory: [],
            isDirty: false
        }
    }
    componentDidMount() {
        Axios.get('/maincategorytag')
            .then(response => {
                this.setState({
                    maincategory: response.data
                })
            })
            .catch(err => {
                console.log(err)
            });
    }
    handleDirtyBlur = e => {
        const { value } = e.target
        this.setState({ isDirty: this.state.isDirty || !!value })
    }

    compareToFirstPassword = (rule, value, callback) => {
        const { form } = this.props
        if (value && value !== form.getFieldValue('password')) {
            callback('Password and Confirm password are not the same')
        } else {
            callback()
        }
    }

    compareToSecondPassword = (rule, value, callback) => {
        const { form } = this.props
        if (value && this.state.isDirty) {
            form.validateFields(['confirm'], { force: true });
        }
        callback()
    }
    submitForm = (e) => {
        e.preventDefault();
        this.props.form.validateFieldsAndScroll((err, value) => {
            console.log(value)
          if (!err) {
            Axios.post('/registerUser', {
              firstname:value.firstname,
              lastname:value.lastname,
              birthdate:value.birthdate,
              gender:value.gender,
              phonenumber:value.phonenumber,
              username: value.username,
              password: value.password,
              email:value.email,
            })
              .then(result => {
                console.log(result)
              })
              .catch(err => {
                console.error(err)
              })
            this.props.form.resetFields()
            window.location.replace ( "/home" );
          }
        })
      }
    render() {
        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 24 },
                md:  {span: 9}
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 24},
                md: { span: 15 }
            },
        };
        const { getFieldDecorator } = this.props.form
        return (
            <>
                <CategorySelection maincategories={this.state.maincategory} />
                <Row gutter={[0, 40]}>
                    <Col >
                        <Row><h1>Welcome to SHOPBAG</h1></Row>
                        <Row style={{ marginBottom: '20px' }}><h3>Please input your information below</h3></Row>
                        <Row type='flex' justify='start' style={{ marginBottom: '20px' }}>
                            <Form layout='horizontal' {...formItemLayout} style={{ width: '40%' }} onSubmit={this.submitForm}>
                                <Form.Item label="Firstname">
                                    {getFieldDecorator('firstname', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your firstname'
                                            }
                                        ]
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="Lastname">
                                    {getFieldDecorator('lastname', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your lastname'
                                            }
                                        ]
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="Birth date">
                                    {getFieldDecorator('birthdate', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please select your birth date'
                                            }
                                        ]
                                    })(<DatePicker />)}
                                </Form.Item>
                                <Form.Item label="Gender">
                                    {getFieldDecorator('gender', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please select gender'
                                            }
                                        ]
                                    })(<Radio.Group>
                                        <Radio value='male'>Male</Radio>
                                        <Radio value='female'>Female</Radio>
                                    </Radio.Group>)}
                                </Form.Item>
                                <Form.Item label="Email">
                                    {getFieldDecorator('email', {
                                        rules: [
                                            {
                                                type: 'email',
                                                message: 'The input is not valid E-mail!',
                                            },
                                            {
                                                required: true,
                                                message: 'Please input your E-mail!',
                                            },
                                        ],
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="Phone number">
                                    {getFieldDecorator('phonenumber', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input your phone number'
                                            }
                                        ]
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="Username">
                                    {getFieldDecorator('username', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input username'
                                            }
                                        ]
                                    })(<Input />)}
                                </Form.Item>
                                <Form.Item label="Password">
                                    {getFieldDecorator('password', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please input password'
                                            },
                                            {
                                                validator: this.compareToSecondPassword
                                            }
                                        ]
                                    })(<Input.Password />)}
                                </Form.Item>
                                <Form.Item label="Confirm password">
                                    {getFieldDecorator('confirm', {
                                        rules: [
                                            {
                                                required: true,
                                                message: 'Please confirm password'
                                            },
                                            {
                                                validator: this.compareToFirstPassword,
                                            }
                                        ]
                                    })(<Input.Password onBlur={this.handleDirtyBlur} />)}
                                </Form.Item>
                        <Row type='flex' justify='end'>
                            <Col md={8} sm={12} xs={24}>
                                <Form.Item>
                                    <Button block type="primary" htmlType="submit"  style={{width:'200px'}}>
                                        Create Account
                    </Button>
                                </Form.Item>
                            </Col>
                        </Row>
                            </Form>
                        </Row>
                    </Col>

                </Row>
            </>
        )
    }
}
export default Form.create()(SignUp);