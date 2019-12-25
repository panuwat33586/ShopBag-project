import React, { Component } from 'react'
import CategorySelection from '../Components/CategorySelection'
import Axios from '../config/axios.setup'

import { Row, Col, Card, Menu, Input, Select, Divider, Pagination} from 'antd'
const { Search } = Input;
const { Option } = Select;
const { Meta } = Card;

export default class MainCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      maincategory: [{ id: 1, name: 'ELECTRONIC' }, { id: 2, name: 'HEALTH & BEAUTY' }, { id: 3, name: 'FASHION' }, { id: 4, name: 'SPORTS' }],
      minValue: 0,
      maxValue: 8,
      showproduct: [],
      showmaincategory: '',
      showsubcategory: []
     
    }
  }
  componentDidMount(){
    Axios.get(`${this.props.location.pathname}`)
    .then((response) => {
      this.setState({
        showmaincategory: response.data[0].name,
        showsubcategory:response.data[0].subcategories,
        products:response.data[0].products
      },
      ()=>{this.setState({
        showproduct: this.state.products.slice(this.state.minValue, this.state.maxValue)
      })})         
    })
    .catch(err => {
      console.error(err)
    })
  }
  handlePage = value => {
    console.log(value)
    if (value === 1) {
      this.setState({
        minValue: 0,
        maxValue: 8
      }, () => this.setState({
        showproduct: this.state.products.slice(this.state.minValue, this.state.maxValue)
      }));
    } else {
      this.setState((state) => {
        return {
          minValue: state.maxValue,
          maxValue: value * 8
        }
      }, () => {
        this.setState({
          showproduct: this.state.products.slice(this.state.minValue, this.state.maxValue)
        })
      });
    }
  };
  handleSelectSubCategory=(subcategoryid)=>{
    Axios.get(`/subcategories/${subcategoryid}`)
    .then((response)=>{
      this.setState(
        {products:response.data[0].products},
        ()=>{this.setState({
          showproduct: this.state.products.slice(this.state.minValue, this.state.maxValue)
        })})
    })
  }
  render() {
    return (
      <>
        <CategorySelection maincategories={this.state.maincategory} selectcategory={this.handleSelectCategory} />
        <Row type='flex' justify='start' gutter={[48, 40]}>
          <Col span={4}>
            <Row>
              <h2>{this.state.showmaincategory}</h2>
            </Row>
            <Row>
              <Menu selectedKeys={['1']}>
                {this.state.showsubcategory.map(subcategory =>
                  <Menu.Item onClick={()=>this.handleSelectSubCategory(subcategory.id)}>
                    <span>{subcategory.name}</span>
                  </Menu.Item>
                )}
              </Menu>
            </Row>
          </Col>
          <Col span={20}>
            <Card style={{ width: '100%' }}>
              <Row type='flex' justify='start' gutter={[16, 0]}>
                <Col>
                  <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                  />
                </Col>
                <Col>
                  <Select defaultValue="All">
                    <Option value="All">All</Option>
                {this.state.showsubcategory.map(subcategory=> <Option value={subcategory.name}>{subcategory.name}</Option>)}
                  </Select>
                </Col>
              </Row>
              <Row>
                <Divider> All</Divider>
              </Row>
              <Row type='flex' justify='start' gutter={[16, 16]} >
                {this.state.showproduct.map(product =>
                  <Col>
                    <Card cover={<img src={product.product_image} style={{ width: '250px', height: '250px' }} />} style={{ maxWidth: '250px' }} hoverable={true}>
                      <Meta title={product.name} description={product.price} />
                    </Card>
                  </Col>)}
              </Row>
            </Card>
            <Row type='flex' justify='center' style={{ marginTop: '50px' }}>
              <Pagination defaultCurrent={1} pageSize={8} total={this.state.products.length} onChange={(value) => this.handlePage(value)} />
            </Row>
          </Col>
        </Row>
      </>
    )
  }
}
