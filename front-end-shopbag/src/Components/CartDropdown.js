import React, { Component } from 'react'
import{Menu, Dropdown, Icon,Badge } from 'antd'

export default class CartDropdown extends Component {
     
    render() {
        const cart = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);
        return (
            <Dropdown overlay={cart}>
                <div>
            <a href="#">
                            <Badge count={1}>
                                <Icon type="shopping-cart" style={{ fontSize: '30px' }} />
                            </Badge>
            </a>
                        <b style={{ fontSize: '20px' }}>Cart</b>
                </div>
          </Dropdown>
        )
    }
}
