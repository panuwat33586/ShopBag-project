import React, { Component } from 'react'
import { Row, Col, Button, Card, Input, Avatar, Divider } from 'antd'
import Axios from '../config/axios.setup'
import CategorySelection from '../Components/Header/CategorySelection'
import { connect } from 'react-redux'
import { Additems } from '../Redux/actions/actions'


class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      maincategory: [],
      showmaincategory: [],
      showsubcategory: [],
      product: [],
      seller: [],
      quantity: 1
    }
  }
  componentDidMount() {
    Axios.get('/maincategorytag')
      .then(response => {
        this.setState({
          maincategory: response.data
        })
      })
      .catch(err => {
        console.log(err)
      });
    Axios.get(`${this.props.location.pathname}`)
      .then(response => {
        this.setState({
          product: response.data,
          showmaincategory: response.data.maincategorie,
          showsubcategory: response.data.subcategorie,
          seller: response.data.user
        })
      })
      .catch(err => {
        console.log(err)
      });
  }
  handleSetQuantity = (e) => {
    let quantityvalue = parseInt(e.target.value)
    if (e.target.value == 'minus') {
      this.setState({
        quantity: this.state.quantity - 1
      })
    }
    else if (e.target.value == 'plus') {
      this.setState({
        quantity: this.state.quantity + 1
      })
    }
    else if (!Number.isInteger(quantityvalue) || quantityvalue == 0) {
      this.setState({
        quantity: ''
      })
    }
    else if (Number.isInteger(quantityvalue)) {
      this.setState({
        quantity: quantityvalue
      })
    }
  }
  handleAddproduct = () => {
    if (this.props.user.role == 'user') {
      this.props.Additems(this.state.product, this.state.quantity)
    } else {
      return
    }
  }
  render() {
    const product = this.state.product
    return (
      <>
        <CategorySelection maincategories={this.state.maincategory} />
        <Row>
          <Col>
            <Button type='link' style={{ color: 'black' }} href={`/maincategory/${this.state.showmaincategory.id}`}><b>{this.state.showmaincategory.name} ></b></Button>
            <Button type='link' style={{ color: 'black' }}><b>{this.state.showsubcategory.name} ></b></Button>
            <Button type='link' style={{ color: 'black' }}><b>{product.name}</b></Button>
          </Col>
        </Row>
        <Row>
          <Card>
            <Row type='flex' jusify='center' align='middle' >
              <Col span={10}>
                <Card bordered={false} cover={<img alt={product.name} src={product.product_image} style={{ height: '70%', width: '70%' }} />} bodyStyle={{ padding: "0" }} />
              </Col>
              <Col span={14}>
                <Row type='flex' gutter={[0, 48]}>
                  <Col> <b><h2>{product.name}</h2></b></Col>
                </Row>
                <Row type='flex' gutter={[0, 48]}>
                  <Col> <h2 style={{ color: 'red' }}>{product.price} {product.currency}</h2></Col>
                </Row>
                <Row type='flex' gutter={[0, 48]}>
                  <Col style={{ marginRight: '50px' }}>
                    <h3>Quantity</h3>
                  </Col>
                  <Col>
                    <Button value='minus' onClick={(e) => this.handleSetQuantity(e)} disabled={(this.state.quantity == 1) ? true : false}>-</Button>
                  </Col>
                  <Col>
                    <Input defaultValue={1} value={this.state.quantity} style={{ width: '80px', textAlign: 'center' }} onChange={(e) => this.handleSetQuantity(e)} />
                  </Col>
                  <Col>
                    <Button value='plus' onClick={(e) => this.handleSetQuantity(e)} >+</Button>
                  </Col>
                </Row>
                <Row type='flex' justify='start' gutter={[8, 48]}>
                  <Col ><Button type='danger' icon='shopping-cart' ghost onClick={() => this.handleAddproduct()}>Add to Cart</Button> </Col>
                  <Col ><Button type='danger' icon='dollar' >Purchase</Button></Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Card >
            <Row type='flex' justify='start' align='middle' gutter={[16]}>
              <Col ><Avatar icon="user" /></Col>
              <Col>{this.state.seller.username}</Col>
              <Col><Divider type='vertical' style={{ color: 'black', height: '50px' }} /></Col>
              <Col></Col>
            </Row>
          </Card>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Card>
            <Row>
              <Col> <h3>Product Description</h3></Col>
            </Row>
            <Row>
              <Col><span>{product.description}</span></Col>
            </Row>
          </Card>
        </Row>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}
const mapDispatchToProps = {
  Additems: Additems
}
export default connect(mapStateToProps, mapDispatchToProps)(Product)
