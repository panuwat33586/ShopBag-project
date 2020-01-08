import React, { Component } from 'react'
import { Row, Col, Icon, Table, Button, Avatar } from 'antd'
import { connect } from 'react-redux'
import { Deleteitems } from '../Redux/actions/actions'
import {Purchase} from '../Redux/actions/actions'
import moment from 'moment';
import Axios from '../config/axios.setup'

class Cart extends Component {
handlePurchase(){
    let date=moment().format('Y-MM-DD')
      Axios.post('/order',{
          totalprice:this.props.totalprice,
          orderdate:date,
          cartitems:this.props.cart
      })
      .then(()=>{
          this.props.Purchase()
      })
      .catch(err=>{
          console.log(err)
      })
}
    render() {
        const columns = [
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
                render: text => <span>{text}</span>,
            },
            {
                title: 'Quantity',
                dataIndex: 'quantity',
                key: 'Quantity',
                render: text => <span>{text}</span>,
            },
            {
                title: 'Selling price',
                dataIndex: 'price',
                key: 'Selling price',
                render: text => <span>{text}</span>,
            },
            {
                title: 'Currency',
                dataIndex: 'currency',
                key: 'Currency',
                render: text => <span>{text}</span>,
            },
            {
                title: 'Action',
                dataIndex: 'id',
                key: 'x',
                render: (productid) => <Button type='danger' onClick={() => this.props.Deleteitems(productid)}>Delete</Button>,
            },
        ]
        return (
            <>
                <Row>
                    <Col><b style={{ fontSize: '30px' }}><Icon type="shopping-cart" /> Cart</b> </Col>
                </Row>
                <Row>
                    <Col> <Table columns={columns} dataSource={this.props.cart} /></Col>
                </Row>
                <Row type='flex' justify='end' gutter={[0,48]}>
                    <Col>
                        <b style={{ fontSize: '30px' }}>Total price :  {this.props.totalprice} </b>
                    </Col>
                </Row>
                <Row type='flex' justify='end' gutter={[0,48]}> 
                    <Col>
                        <Button type='danger' icon='dollar' onClick={()=>this.handlePurchase()} >Purchase</Button>
                    </Col>
                </Row>
            </>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        cart: state.cart.cartItems,
        totalprice: state.cart.totalprice
    }
}
const mapDispatchToProps = {
    Deleteitems: Deleteitems,
    Purchase:Purchase
}
export default connect(mapStateToProps, mapDispatchToProps)(Cart)

