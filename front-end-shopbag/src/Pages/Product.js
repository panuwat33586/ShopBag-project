import React, { Component } from 'react'
import {Row,Col, Button,Card, Carousel} from 'antd'



export default class Product extends Component {
    render() {
        return (
          <>
              <Row gutter={[0, 40]}>
                <Col>
                <Button type='link' style={{color:'black'}}><b>Main Category ></b></Button> 
                <Button type='link' style={{color:'black'}}><b>Sub Category ></b></Button>
                <Button type='link' style={{color:'black'}}><b>Product name</b></Button>
                </Col>    
              </Row>
              <Row>
                <Card>
                  <Row>
                    <Col span={14}>
                      <Carousel autoplay > 
                        <Card bordered={false} cover={<img alt="product" src="https://drive.google.com/uc?id=1v-QWGntLUwnQBYdWN6NgR7WZhqkSHp5m" />} bodyStyle={{ padding: "0"}}/>
                        <Card bordered={false} cover={<img alt="product" src="https://www.gamingdose.com/wp-content/uploads/2018/12/switching-it-up.jpg" />} bodyStyle={{ padding: "0"}}/>
                        <Card bordered={false} cover={<img alt="product" src="https://www.techoffside.com/wp-content/uploads/2019/09/tos-28.jpg" />} bodyStyle={{ padding: "0"}}/>
                      </Carousel>
                    </Col>
                    <Col span={18}>            
                    </Col>
                  </Row>
                </Card>
              </Row>
              </>
        )
    }
}
