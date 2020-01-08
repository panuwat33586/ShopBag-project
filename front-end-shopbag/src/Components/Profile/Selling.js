import React, { Component } from 'react'
import ModalAddProduct from './ModalAddProduct'
import {Row,Col,Divider,Tabs } from 'antd'
import ProductList from './ProductList'
import SellingOrder from './SellingOrder'
import Axios from '../../config/axios.setup'
const { TabPane } = Tabs;

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
              <Tabs defaultActiveKey="1">
                  <TabPane tab="Product list" key="1" >
                       <ProductList data={this.state.addedproduct} handleDeleteProduct={this.handleDeleteProduct} fetchAddedProduct={this.fetchAddedProduct}/>
                  </TabPane>
                  <TabPane tab='Selling order' key='2'>
                         <SellingOrder/>
                  </TabPane>
              </Tabs>
             
            </>
        )
    }
}
