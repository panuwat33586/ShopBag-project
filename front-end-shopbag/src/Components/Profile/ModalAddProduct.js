import React, { Component } from 'react'
import { Modal, Button, Form, Input, InputNumber, Upload, Icon, Select } from 'antd'
import PriceInput from './PriceInput'
import Axios from '../../config/axios.setup'


const { Option } = Select;
class ModalAddProduct extends Component {
  constructor(props) {
    super(props)
    this.state = {
      maincategory: [{ id: 1, name: 'ELECTRONIC' }, { id: 2, name: 'HEALTH&BEAUTY' }, { id: 3, name: 'FASHION' }, { id: 4, name: 'SPORT' }],
      subcategory: [],
      visible: false,
      loading: false,
      fileList:[] 
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
      loading: true
    })
    this.props.form.validateFieldsAndScroll((err, value) => {
      if (!err) {
        let payload = new FormData()
        payload.append('name',value.productName)
        payload.append('description',value.productDescription)
        payload.append('price',value.price.number)
        payload.append('currency',value.price.currency)
        payload.append('quantity',value.quantity)
        payload.append('maincategoryid',value.maincategory)
        payload.append('subcategoryid',value.subcategory)
        payload.append('productphoto',this.state.fileList[0])
        Axios.post('/addproduct',payload)
          .then(() => {
            this.props.form.resetFields()
            this.props.fetchAddedProduct()
            this.setState({
              loading: false,
              visible: false
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
  handlefetchSubcatgory = (maincategoryid) => {
    Axios.get(`/maincategory/${maincategoryid}`)
      .then(response => {
        this.setState({
          subcategory: response.data[0].subcategories
        })
      })
      .catch(err => {
        console.log(err)
      })
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    const { loading } = this.state;
    const { fileList } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [...state.fileList, file],
        }));
        return false;
      },
      fileList,
    }
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
            <Upload {...props}>
                <Button>
                  <Icon type="upload" /> Select File
              </Button>
              </Upload>
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
                  {this.state.maincategory.map(maincategory =>
                    <Option onClick={() => this.handlefetchSubcatgory(maincategory.id)} value={maincategory.id}>{maincategory.name}</Option>
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
                <Select disabled={this.state.subcategory.length == 0 ? true : false}>
                  {this.state.subcategory.map(subcategory =>
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
