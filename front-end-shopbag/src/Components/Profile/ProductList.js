import React, { Component } from 'react'
import {Row,Col,Table,Avatar,Button,Divider} from 'antd'

export default class ProductList extends Component {
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
            title: 'Action',
            dataIndex: 'id',
            key: 'x',
            render: (productid) => <Button type='danger' onClick={()=>this.props.handleDeleteProduct(productid)}>Delete</Button>,
          },
    ]
        return (
            <>
            <Row style={{marginTop:'10px'}}>
              <Col>
              <h2>Product list</h2>
              </Col>
              </Row>
              <Row>
              <Divider/>
              </Row>
              <Row >
              <Table columns={columns} dataSource={this.props.data} />
              </Row>
            </>  
        )
    }
}
