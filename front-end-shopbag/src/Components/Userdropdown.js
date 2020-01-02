import React, { Component } from 'react'
import { Menu, Dropdown,Button } from 'antd';
import jwtDecode from 'jwt-decode'

export default class Userdropdown extends Component {
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
    localStorage.removeItem('ACCESS_TOKEN')
    this.props.checklogout()
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
