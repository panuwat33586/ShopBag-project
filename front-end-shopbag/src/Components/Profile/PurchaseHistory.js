import React, { Component } from 'react'
import {Row,Col,Divider,Button,Table} from 'antd'
import Axios from '../../config/axios.setup'

export default class PurchaseHistory extends Component {
    constructor(props){
        super(props)
        this.state={
            order:[]
        }
    }
    componentDidMount(){
        this.fetchOrderList()
    }
    handleCancleOrder(orderid){
        Axios.put(`/cancleorder/${orderid}`)
        .then(()=>{
            this.fetchOrderList()
        })
        .catch(err=>{
            console.log(err)
        })
    }
    fetchOrderList(){
        Axios.get('/order')
        .then(response=>{
            this.setState({
                order:response.data
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        const columns=[
            {
            title: 'Order id',
            dataIndex: 'id',
            key: 'Order id',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Order date',
            dataIndex: 'order_date',
            key: 'Order date',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Delivery date',
            dataIndex: 'delivery_date',
            key: 'Delivery date',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'Status',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Total price',
            dataIndex: 'total_price',
            key: 'Total price',
            render: text => <span>{text}</span>,
        },
        {
            title: 'Action',
            dataIndex: 'id',
            key: 'x',
            render: (orderid) => <Button type='danger'disabled={this.state.order.find(order=>order.id===orderid).status==='Cancled'?true:false} onClick={()=>this.handleCancleOrder(orderid)}>Cancle</Button>,
          },
    ]
        return (
            <>
               <Row>
              <Col>
              <h2>Purchase history</h2>
              </Col>
              </Row>
              <Row>
              <Divider/>
              </Row> 
              <Row>
              <Table columns={columns} dataSource={this.state.order} />
              </Row>  
            </>
        )
    }
}
