import React, { Component } from 'react'
import { Modal, Button, Form, Input, InputNumber, Upload, Icon, Select } from 'antd'
import PriceInput from './PriceInput'
import Axios from '../../config/axios.setup'
import axios from '../../config/axios.setup';

const { Option } = Select;
class ModalAddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      maincategory:[{id:1,name:'ELECTRONIC'},{id:2,name:'HEALTH&BEAUTY'},{id:3,name:'FASHION'},{id:4,name:'SPORT'}],
      subcategory:[],
      visible: false,
      loading:false,
    }
  }
  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  submitForm = (e) => {
    e.preventDefault();
    this.setState({
      loading:true
    })
    this.props.form.validateFieldsAndScroll((err, value) => {
        if(!err){
           Axios.post('/addproduct',{
            name:value.productName,
            description:value.productDescription,
            price:value.price.number,
            currency:value.price.currency,
            quantity:value.quantity,
            maincategoryid:value.maincategory,
            subcategoryid:value.subcategory,
           })
           .then(result => {
             this.props.form.resetFields()
            this.setState({
              loading:false,
              visible:false
            }) 
          })
          .catch(err => {
              console.error(err)
            })
        }
        
    })
  }

  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  checkPrice = (rule, value, callback) => {
    if (value.number > 0) {
      return callback();
    }
    callback('Price must greater than 0');
  };
  handlefetchSubcatgory=(maincategoryid)=>{
    Axios.get(`/maincategory/${maincategoryid}`)
    .then(response=>{
      this.setState({
        subcategory:response.data[0].subcategories
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    const {  loading } = this.state;
    return (
      <>
        <Button type="dashed" style={{ height: '200px', width: '200px' }} onClick={this.showModal}><span>+ Add Product</span></Button>
        <Modal
          title="Add Product"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="cancle" onClick={this.handleCancel}>
              Cancle
            </Button>,
            <Button key="submit" type="danger" htmlType="submit" loading={loading} onClick={this.submitForm}>
              Add
            </Button>,
          ]}
        >
          <Form layout='vertical' onSubmit={this.submitForm}>
            <Form.Item >
              {getFieldDecorator('product-image', {
                valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
              })(
                <Upload.Dragger name="files" action="/upload.do">
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">Click or drag image to this area to upload</p>
                  <p className="ant-upload-hint">Support for a single upload</p>
                </Upload.Dragger>,
              )}
            </Form.Item>
            <Form.Item label='Product name'>
              {getFieldDecorator('productName', {
                rules: [
                  {
                    required: true,
                    message: 'Please input Product name',
                  },
                ],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Quantity">
              {getFieldDecorator('quantity', { initialValue: 1 })(<InputNumber min={1} />)}
            </Form.Item>
            <Form.Item label="Price">
              {getFieldDecorator('price', {
                initialValue: { number: 0, currency: 'Baht' },
                rules: [{ validator: this.checkPrice }],
              })(<PriceInput />)}
            </Form.Item>
            <Form.Item label='Category'>
              {getFieldDecorator('maincategory', {
                rules: [
                  {
                    required: true,
                    message: 'Please select Category',
                  },
                ],
              })
              (<Select>
              {this.state.maincategory.map(maincategory=>
              <Option onClick={()=>this.handlefetchSubcatgory(maincategory.id)} value={maincategory.id}>{maincategory.name}</Option>
              )}
            </Select>)}
            </Form.Item>
            <Form.Item label='Sub category'>
              {getFieldDecorator('subcategory', {
                rules: [
                  {
                    required: true,
                    message: 'Please select Subcategory',
                  },
                ],
              })(
              <Select disabled={this.state.subcategory.length==0?true:false}>
                {this.state.subcategory.map(subcategory=> 
                <Option value={subcategory.id}>{subcategory.name}</Option>)}
            </Select>)}
            </Form.Item>
            <Form.Item label='Product description'>
              {getFieldDecorator('productDescription', {
                rules: [
                  {
                    required: false,
                  },
                ],
              })(<Input.TextArea autoSize={true} />)}
            </Form.Item>
          </Form>
        </Modal>
      </>
    )
  }
}
export default Form.create()(ModalAddProduct);
