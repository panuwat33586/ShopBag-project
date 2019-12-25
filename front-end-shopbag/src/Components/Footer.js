import React, { Component } from 'react'
import { Card, Row, Col, Button,Icon } from 'antd'


export default class Footer extends Component {
    render() {
        return (
            <Card style={{ width: '100vw',height:'300px', backgroundColor: '#32AFD6' }}>
                <Row type='flex' align='top' justify='space-around'>
                    <Col>
                        <Row>
                            <Button size='small' type='link' ghost>Help & Contact</Button>
                        </Row>
                        <Row>
                            <Button size='small' type='link' ghost>Seller Information center</Button>
                        </Row>
                        <Row>
                            <Button size='small' type='link' ghost>How to order your items</Button>
                        </Row>
                        <Row>
                            <Button size='small' type='link' ghost>Shipping</Button>
                        </Row>
                        <Row>
                            <Button size='small' type='link' ghost>Contact us</Button>
                        </Row>
                    </Col> 
                    <Col>
                    <Row>
                            <Button size='small' type='link' ghost>About SHOPBAG</Button>
                        </Row>
                        <Row>
                            <Button size='small' type='link' ghost>About us</Button>
                        </Row>
                        <Row>
                            <Button size='small' type='link' ghost>Working with us</Button>
                        </Row>
                        <Row>
                            <Button size='small' type='link' ghost>Advertise with us</Button>
                        </Row>
                        <Row>
                            <Button size='small' type='link' ghost>Our policy</Button>
                        </Row>
                        <Row>
                            <Button size='small' type='link' ghost>Private policy</Button>
                        </Row>
                    </Col>
                    <Col>
                    <Row>
                        <p style={{color:'#FDFDFD'}}>Payment</p>
                    </Row>
                    <Row>  
                         <img src='https://drive.google.com/uc?id=1RWK3YUDRYWGU0LGnSO_SxY_jY4Nxz5km' style={{width:'300px', height:'80px'}} alt='payment logo'/>
                    </Row>
                    <Row>
                    <p style={{color:'#FDFDFD'}}>Shipping services</p>
                    </Row>
                     <Row>
                    <img src='https://drive.google.com/uc?id=1VA2U39KEfkSnR1aAbTIdIqw9U3hqnF06' style={{width:'300px', height:'80px'}} alt='shipping services logo'/>
                     </Row>
                    </Col>
                    <Col>
                    <Row> 
                        <p style={{color:'#FDFDFD'}}>Follow us</p>
                        </Row>
                        <Row>
                        <Icon type="facebook" style={{fontSize:'30px'}} /> 
                        <Icon type="twitter" style={{fontSize:'30px'}} /> 
                        <Icon type="instagram" style={{fontSize:'30px'}}/>
                        <Icon type="wechat" style={{fontSize:'30px'}} /> 
                        </Row>
                   
                    </Col>
                </Row>
            </Card>
        )
    }
}
