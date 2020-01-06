import React, { Component } from 'react'
import {  Input, Select } from 'antd';

const { Option } = Select;

export default class PriceInput extends Component {
    handleNumberChange = e => {
        const number = parseInt(e.target.value || 0, 10);
        if (isNaN(number)) {
          return;
        }
        this.triggerChange({ number });
      };
    
      handleCurrencyChange = currency => {
        this.triggerChange({ currency });
      };
    
      triggerChange = changedValue => {
        const { onChange, value } = this.props;
        if (onChange) {
          onChange({
            ...value,
            ...changedValue,
          });
        }
      };
    render() {
        const { size, value } = this.props;
        return (
            <span>
            <Input
              type="text"
              size={size}
              value={value.number}
              onChange={this.handleNumberChange}
              style={{ width: '65%', marginRight: '3%' }}
            />
            <Select
              value={value.currency}
              size={size}
              style={{ width: '32%' }}
              onChange={this.handleCurrencyChange}
            >
              <Option value="rmb">Baht</Option>
              <Option value="dollar">Dollar</Option>
            </Select>
          </span>
        )
    }
}
