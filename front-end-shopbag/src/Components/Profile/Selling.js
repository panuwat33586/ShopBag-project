import React, { Component } from 'react'
import ModalAddProduct from './ModalAddProduct'
import {Row,Col,Divider, Button,Table} from 'antd'

export default class Selling extends Component {
    constructor(props){
        super(props)
        this.state={
            products:[ {
                'key': '1',
                'Picture': 'John Brown',
                'Name': 32,
                'Quantity': 'New York No. 1 Lake Park',
                'Selling price': 'nice'
              }]
        }
    }
    render() {
        const columns=[
            {
            title: 'Picture',
            dataIndex: 'Picture',
            key: 'Picture',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Name',
            dataIndex: 'Name',
            key: 'Name',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Quantity',
            dataIndex: 'Quantity',
            key: 'Quantity',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Selling price',
            dataIndex: 'Selling price',
            key: 'Quantity',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Action',
            dataIndex: '',
            key: 'x',
            render: () => <Button type='danger'>Delete</Button>,
          },
    ]
        const data=this.state.products
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
                 <ModalAddProduct/>  
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
