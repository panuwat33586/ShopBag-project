import React, { Component } from 'react'
import CategorySelection from '../Components/Header/CategorySelection'
import Axios from '../config/axios.setup'
import MyAccount from '../Components/Profile/MyAccount'
import PurchaseHistory from '../Components/Profile/PurchaseHistory'
import Selling from '../Components/Profile/Selling'
import {Row,Col, Avatar, Button, Divider, Menu, Icon,Card} from 'antd'

export default class Profile extends Component {
    constructor(props){
        super(props)
        this.state={
            maincategory:[],
            selectedcategory:"Selling"
        }
    }
    componentDidMount(){
        Axios.get('/maincategorytag')
    .then(response=>{
      this.setState({
        maincategory:response.data
      })
    })
    .catch(err=>{
      console.log(err)
    });
    }
    renderSelectedCategory(){
           switch (this.state.selectedcategory){
               case "My Account":
                   return <MyAccount/>
               case "Purchase History":
                   return <PurchaseHistory/>
               case "Selling":
                   return <Selling/>
               default:
                   break;
           }
    }
    handleSelectCategory=(e)=>{
        this.setState({
            selectedcategory:e.key
        })
    }
    render() {
        return (
            <>
               <CategorySelection maincategories={this.state.maincategory}/> 
               <Row type='flex' justify='start' gutter={[48, 0]}>
                   <Col span={6}>
                   <Row type='flex' gutter={[16, 0]}>
                       <Col>
                       <Avatar size={70} icon='user'/>
                       </Col>
                       <Col>
                         <Row>
                            <h1 style={{marginBottom:'0'}}>User</h1>
                            <Button type='link' icon='edit' style={{padding:'0'}}>Edit</Button>
                         </Row>
                       </Col>
                   </Row>
                   <Row>
                       <Col><Divider/></Col>
                   </Row>
                   <Row>
                       <Menu defaultSelectedKeys={"Selling"} onClick={(e)=>this.handleSelectCategory(e)}>
                         <Menu.Item key="My Account"> 
                             <Icon type="user"/>My Account
                         </Menu.Item>
                         <Menu.Item key="Purchase History"> 
                         <Icon type="history" /> Purchase History
                         </Menu.Item>
                         <Menu.Item key="Selling"> 
                         <Icon type="dollar" />Selling
                         </Menu.Item>                                   
                       </Menu>
                   </Row>         
                   </Col>
                   <Col span={18}>
                     <Card>
                         {this.renderSelectedCategory()}
                     </Card>
                   </Col>
               </Row>
            </>
        )
    }
}
