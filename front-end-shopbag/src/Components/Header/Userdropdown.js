import React, { Component } from 'react'
import { Menu, Dropdown,Button } from 'antd';
import { connect } from 'react-redux'
import jwtDecode from 'jwt-decode'
import {logout} from '../../Redux/actions/actions'
import {Purchase} from '../../Redux/actions/actions'
import {Link} from 'react-router-dom'

 class Userdropdown extends Component {
    constructor(props){
        super(props)
        this.state={
            name:''
        }
    }
componentDidMount(){
    const user =jwtDecode(localStorage.getItem('ACCESS_TOKEN'))
    this.setState({
        name:user.name
    })
}   
  handleSignout = () => {
    this.props.logout()
    this.props.checklogout()
    this.props.Purchase()
    window.location.replace ( "/home" );
}
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <Link   to ="/profile">
                        Profile
                </Link>
                </Menu.Item>
                <Menu.Item onClick={()=>this.handleSignout()}>
                    <a   href="#">
                        Sign Out
                </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <Dropdown overlay={menu}>
    <Button type='link' style={{ color: 'grey' }} ><b>{`Hello, ${this.state.name}`}</b></Button>
            </Dropdown>
        )
    }
}

const mapDispatchToProps = {
    logout: logout,
    Purchase:Purchase
  }

  export default connect(null, mapDispatchToProps)(Userdropdown)