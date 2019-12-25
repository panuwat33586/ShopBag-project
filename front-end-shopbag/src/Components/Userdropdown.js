import React, { Component } from 'react'
import { Menu, Dropdown,Button } from 'antd';

export default class Userdropdown extends Component {
    render() {
        const menu = (
            <Menu>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        Profile
                </a>
                </Menu.Item>
                <Menu.Item>
                    <a target="_blank" rel="noopener noreferrer" href="#">
                        Sign Out
                </a>
                </Menu.Item>
            </Menu>
        );
        return (
            <Dropdown overlay={menu}>
                <Button type='link' style={{ color: 'grey' }} onClick={this.showModal}><b>Hello, User</b></Button>
            </Dropdown>
        )
    }
}
