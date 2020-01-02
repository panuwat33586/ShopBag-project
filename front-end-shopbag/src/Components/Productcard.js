import React, { Component } from 'react'
import { Card, Col, Row } from 'antd'
import Axios from '../config/axios.setup'


export default class Productcard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount(){
      Axios.get('/allproduct')
      .then(response=>{
        this.setState({
          products:response.data
        })
      })
      .catch(err=>{
        console.log(err)
      })
    }
    render() {
        return (
            <Row gutter={[16, 48]}>
                <Col>
                    <Card title={this.props.maincategory.name} headStyle={{ border: 'none' }} style={{ height: '400px' }}>
                        <Row gutter={16}>
                            {
                                this.state.products.filter(product => product.maincategorie_id == this.props.maincategory.id).slice(0,4).map(product =>
                                    <Col span={6}>
                                        <Card cover={<img src={product.product_image} style={{ height: '300px', width: '300px' }} alt='bestseller1' />} bordered={false} bodyStyle={{ padding: "0" }} key={product.id} />
                                    </Col>
                                )}
                        </Row>
                    </Card>
                </Col>
            </Row>
        )
    }
}
