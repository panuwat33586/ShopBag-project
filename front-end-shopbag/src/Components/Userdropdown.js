import React, { Component } from 'react'
import { Menu, Dropdown,Button } from 'antd';
import { connect } from 'react-redux'
import jwtDecode from 'jwt-decode'
import {logout} from '../Redux/actions/actions'

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
    window.location.reload(true);
}
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a  rel="noopener noreferrer" href="#">
                        Profile
                </a>
                </Menu.Item>
                <Menu.Item onClick={()=>this.handleSignout()}>
                    <a  rel="noopener noreferrer" href="#">
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
    logout: logout
  }

  export default connect(null, mapDispatchToProps)(Userdropdown)