import React, { Component } from 'react'
import { Row,Col,Table, Divider, Tag } from 'antd'
import Axios from '../../config/axios.setup'

export default class SellingOrder extends Component {
    
    componentDidMount(){
        Axios.get('cart')
        .then(response=>{
            console.log(response.data)
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render() {
        const columns = [
            {
              title: 'Name',
              dataIndex: 'name',
              key: 'name',
              render: text => <a>{text}</a>,
            },
            {
              title: 'Age',
              dataIndex: 'age',
              key: 'age',
            },
            {
              title: 'Address',
              dataIndex: 'address',
              key: 'address',
            },
            {
              title: 'Tags',
              key: 'tags',
              dataIndex: 'tags',
              render: tags => (
                <span>
                  {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                      color = 'volcano';
                    }
                    return (
                      <Tag color={color} key={tag}>
                        {tag.toUpperCase()}
                      </Tag>
                    );
                  })}
                </span>
              ),
            },
            {
              title: 'Action',
              key: 'action',
              render: (text, record) => (
                <span>
                  <a>Invite {record.name}</a>
                  <Divider type="vertical" />
                  <a>Delete</a>
                </span>
              ),
            },
          ];
          
          const data = [
            {
              key: '1',
              name: 'John Brown',
              age: 32,
              address: 'New York No. 1 Lake Park',
              tags: ['nice', 'developer'],
            },
            {
              key: '2',
              name: 'Jim Green',
              age: 42,
              address: 'London No. 1 Lake Park',
              tags: ['loser'],
            },
            {
              key: '3',
              name: 'Joe Black',
              age: 32,
              address: 'Sidney No. 1 Lake Park',
              tags: ['cool', 'teacher'],
            },
          ];
        return (
            <>
             <Row style={{marginTop:'10px'}}>
              <Col>
              <h2>Selling order</h2>
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
