import React, { Component } from 'react'
import { Modal,Button,Form, Input } from 'antd'

 class ModalAddProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
      handleOk = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    
      handleCancel = e => {
        console.log(e);
        this.setState({
          visible: false,
        });
      };
    render() {
        return (
            <>
               <Button type="dashed" style={{height:'200px', width:'200px'}} onClick={this.showModal}><span>+ Add Product</span></Button>   
                <Modal
                    title="Add Product"
                    visible={this.state.visible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <Form.Item label='Product name'>
                            <Input placeholder='Input product name'/>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        )
    }
}
export default Form.create()(ModalAddProduct);
