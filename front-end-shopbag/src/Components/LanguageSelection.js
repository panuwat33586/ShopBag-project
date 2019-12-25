import React, { Component } from 'react'
import{Menu, Dropdown, Icon } from 'antd'

export default class LanguageSelection extends Component {
    langauages = (
        <Menu>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                    English
            </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                    ภาษาไทย
            </a>
            </Menu.Item>
            <Menu.Item>
                <a target="_blank" rel="noopener noreferrer" href="#">
                    日本語
            </a>
            </Menu.Item>
        </Menu>
    );
    render() {
        return (
            <Dropdown overlay={this.langauages}>
                            <h4 className="ant-dropdown-link" href="#">
                                EN <br />
                                <Icon type="global" />
                                <Icon type="down" />
                            </h4>
                        </Dropdown>
        )
    }
}
