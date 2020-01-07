import React, { Component } from 'react'
import ModalAddProduct from './ModalAddProduct'
import {Row,Col,Divider, Button,Table,Avatar} from 'antd'
import Axios from '../../config/axios.setup'

export default class Selling extends Component {
    constructor(props){
        super(props)
        this.state={
            addedproduct:[]
        }
        this.fetchAddedProduct=this.fetchAddedProduct.bind(this)
    }
componentDidMount(){
    this.fetchAddedProduct()
}
fetchAddedProduct(){
    Axios.get('/addedproduct')
    .then(response=>{
         this.setState({
             addedproduct:response.data
         })
    })
    .catch(err=>{
        console.log(err)
    })
}
handleDeleteProduct(productid){
     Axios.delete(`/deleteproduct/${productid}`)
     .then(()=>{
         this.fetchAddedProduct()
     })
     .catch(err=>{
        console.log(err)
     })
}
    render() {
        const columns=[
            {
            title: 'Picture',
            dataIndex: 'product_image',
            key: 'Picture',
            render: text => <Avatar size={64} shape="square" src={text} />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'Name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'Quantity',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Selling price',
            dataIndex: 'price',
            key: 'Quantity',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'x',
            render: (productid) => <Button type='danger' onClick={()=>this.handleDeleteProduct(productid)}>Delete</Button>,
          },
    ]
        const data=this.state.addedproduct
        return (
            <>
              <Row>
              <Col>
              <h2>Selling</h2>
              </Col>
              </Row>
              <Row>
              <Divider/>
              </Row>
              <Row>
                 <ModalAddProduct fetchAddedProduct={this.fetchAddedProduct}/>  
              </Row>
              <Row style={{marginTop:'10px'}}>
              <Col>
              <h2>Product list</h2>
              </Col>
              </Row>
              <Row>
              <Divider/>
              </Row>
              <Row >
              <Table columns={columns} dataSource={data} />
              </Row>
            </>
        )
    }
}
