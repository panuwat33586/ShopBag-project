import React, { Component } from 'react'
import{Menu, Dropdown, Icon,Badge, Empty } from 'antd'

export default class CartDropdown extends Component {
  renderitem(){
    if(localStorage.getItem('ACCESS_TOKEN')!==null){
     return(<Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
        1st menu item
      </a>
    </Menu.Item>
  </Menu>)
  }else{
      return(<Menu image={Empty.PRESENTED_IMAGE_SIMPLE}>
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
                            <Badge count={0}>
                                <Icon type="shopping-cart" style={{ fontSize: '30px' }} />
                            </Badge>
            </a>
                        <b style={{ fontSize: '20px' }}>Cart</b>
                </div>
          </Dropdown>
        )
    }
}
