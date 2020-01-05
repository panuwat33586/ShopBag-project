import React, { Component } from 'react'
import { Menu, Dropdown, Icon, Badge, Empty, Row, Col, Avatar, Card, Button } from 'antd'
import { connect } from 'react-redux'
import {Deleteitems} from '../../Redux/actions/actions'


class CartDropdown extends Component {

  renderitem() {
    if (this.props.isLogin == true && this.props.cart.length !==0) {
      return (<Menu>
        { this.props.cart.map(
          item =>
            <Menu.Item>
              <Row type='flex' align='middle' gutter={[16]}>
                <Col>
                  <Avatar src={item.product_image} />
                </Col>
                <Col>
                  <Row>  <span>{item.name}</span></Row>
                  <Row>  <span>{item.price}</span></Row>
                </Col>
                <Col><span>X {item.quantity}</span></Col>
                <Col><Button type='danger' shape='circle' ghost onClick={()=>this.props.Deleteitems(item.id)}>X</Button></Col>
              </Row>
            </Menu.Item>)}
      </Menu>
      )
    } else if(this.props.isLogin == true && this.props.cart.length ==0){
      return (<Menu image={Empty.PRESENTED_IMAGE_SIMPLE}>
        <Empty>
          <span>no product in cart</span>
        </Empty>
      </Menu>)
    }
    else {
      return (<Menu image={Empty.PRESENTED_IMAGE_SIMPLE}>
        <Empty>
          <span>Please sign in</span>
        </Empty>
      </Menu>)
    }
  }

  render() {
    return (
      <Dropdown overlay={this.renderitem()}>
        <div>
          <a href="#">
            <Badge count={this.props.isLogin==false?0:this.props.cart.length}>
              {console.log(this.props.cart)}
              <Icon type="shopping-cart" style={{ fontSize: '30px' }} />
            </Badge>
          </a>
          <b style={{ fontSize: '20px' }}>Cart</b>
        </div>
      </Dropdown>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    cart: state.cart.cartItems
  }
}
const mapDispatchToProps = {
  Deleteitems:Deleteitems
}
export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown)
