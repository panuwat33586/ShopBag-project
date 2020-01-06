import React, { Component } from 'react'
import CategorySelection from '../Components/Header/CategorySelection'
import Axios from '../config/axios.setup'
import {Link} from 'react-router-dom'

import { Row, Col, Card, Menu, Input, Select, Divider, Pagination, Button } from 'antd'
const { Search } = Input;
const { Option } = Select;
const { Meta } = Card;

export default class MainCategory extends Component {
  constructor(props) {
    super(props)
    this.state = {
      products: [],
      maincategory: [],
      minValue: 0,
      maxValue: 8,
      showproduct: [],
      showmaincategory: [],
      showsubcategory: [],
      selectsubcategory: 'All',
      search: ''
    }
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.state !== this.state) {
  //     this.fetchData()
  //   }
  // }

  fetchData = () => {
    // console.log(`${this.props.location.pathname}`)
    Axios.get('/maincategorytag')
      .then(response => {
        this.setState({
          maincategory: response.data
        })
      })
      .catch(err => {
        console.log(err)
      });
    Axios.get(`${this.props.location.pathname}`)
      .then(response => {
        this.setState({
          showmaincategory: [{ id: response.data[0].id, name: response.data[0].name }],
          showsubcategory: response.data[0].subcategories,
          products: response.data[0].products
        },
          () => {
            this.setState({
              showproduct: this.state.products.slice(this.state.minValue, this.state.maxValue)
            })
          })
      })
      .catch(err => {
        console.error(err)
      })
  }

  componentWillReceiveProps(nextProps) {
    console.log(this.state.showproduct)

    setTimeout(() => {
      console.log(`${this.props.location.pathname}`)
      this.fetchData()
    }, 500)
  }

  componentDidMount() {
    // console.log(`${this.props.location.pathname}`)
    this.fetchData()
  }

  handleSliceproduct = () => {
    this.setState({
      showproduct: this.state.products.slice(this.state.minValue, this.state.maxValue)
    })
  }

  handlePage = value => {
    console.log(value)
    if (value === 1) {
      this.setState({
        minValue: 0,
        maxValue: 8
      }, () => this.handleSliceproduct());
    } else {
      this.setState((state) => {
        return {
          minValue: state.maxValue,
          maxValue: value * 8
        }
      }, () => this.handleSliceproduct());
    }
  };

  handleSelectMainCategory = (maincategoryid) => {
    Axios.get(`/allmaincategoryproduct/${maincategoryid}`)
      .then(response => {
        this.setState({
          products: response.data[0].products,
          selectsubcategory: 'All'
        }, () => this.handleSliceproduct())
      }).catch(err => {
        console.log(err)
      })
  }

  handleSelectSubCategory = (id, subcategoryname, maincategoryid) => {
    if (subcategoryname == 'All') {
      this.handleSelectMainCategory(maincategoryid)
    } else {
      Axios.get(`/subcategories/${id}`)
        .then(response => {
          this.setState(
            {
              products: response.data[0].products
            },
            () => {
              this.setState({
                selectsubcategory: subcategoryname,
                showproduct: this.state.products.slice(this.state.minValue, this.state.maxValue)
              })
            })
        })
        .catch(err =>
          console.log(err)
        )
    }

  }
  handleSearchitems = (e) => {
    this.setState({
      search: e.target.value
    }, () => {
      let product = this.state.products.map(product => product)
      this.setState({
        showproduct: product.filter(product => product.name.toLocaleLowerCase().includes(this.state.search.toLocaleLowerCase()))
      })
    })
  }

  render() {
    return (
      <>
        <CategorySelection maincategories={this.state.maincategory} />
        <Row type='flex' justify='start' gutter={[48, 40]}>
          <Col span={5}>
            <Row>
              {this.state.showmaincategory.map(maincategory => <Button type='link' onClick={() => this.handleSelectMainCategory(maincategory.id)}><h2>{maincategory.name}</h2></Button>)}
            </Row>
            <Row>
              <Menu>
                {this.state.showsubcategory.map(subcategory =>
                  <Menu.Item key={subcategory.id} onClick={() => { this.handleSelectSubCategory(subcategory.id, subcategory.name) }}>
                    <span>{subcategory.name}</span>
                  </Menu.Item>
                )}
              </Menu>
            </Row>
          </Col>
          <Col span={19}>
            <Card style={{ width: '100%' }}>
              <Row type='flex' justify='start' gutter={[16, 0]}>
                <Col>
                  <Search
                    placeholder="input items name"
                    onChange={e => this.handleSearchitems(e)}
                    style={{ width: 200 }}
                  />
                </Col>
                <Col span={5}>
                  <Select defaultValue='All' value={this.state.selectsubcategory} style={{ width: '200px' }} onChange={(value) => this.handleSelectSubCategory(value !== 'All' ? this.state.showsubcategory.find(subcategory => subcategory.name == value).id : '', value, this.state.showmaincategory[0].id)} >
                    <Option value="All">All</Option>
                    {this.state.showsubcategory.map(subcategory => <Option value={subcategory.name}>{subcategory.name}</Option>)}
                  </Select>
                </Col>
              </Row>
              <Row>
                <Divider>{this.state.selectsubcategory}</Divider>
              </Row>
              <Row type='flex' justify='start' gutter={[16, 16]} >
                {
                  this.state.showproduct.map(product =>
                    <Col>
                      <Link to={`/product/${product.id}`}>
                        <Card cover={<img src={product.product_image} style={{ width: '250px', height: '250px' }} />} style={{ maxWidth: '250px' }} hoverable={true}>
                          <Meta title={product.name} description={`${product.price} Baht`} />
                        </Card>
                      </Link>
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
