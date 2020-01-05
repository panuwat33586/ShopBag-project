import React, { Component } from 'react'
import { Row, Col, Input, Button } from 'antd'
import SignInModal from './SignInModal';
import Userdropdown from './Userdropdown';
import CartDropdown from './CartDropdown';
import LanguageSelection from './LanguageSelection';
import {connect} from 'react-redux'

const { Search } = Input;

 class Topnavbar extends Component {
    constructor(props){
        super(props)
        this.state={
           isLogin:false
        }
    }
componentDidMount(){
    if(this.props.user.role=='user'){
        this.setState({
            isLogin:true
        })
    }else{
        this.setState({
            isLogin:false
        })
    }
}
    
    changeAfterlogin=()=>{
        switch (this.state.isLogin){
          case false:
              return <SignInModal checklogin={this.handleChecklogin}/>
           case true:
               return <Userdropdown checklogout={this.handleChecklogout}/>
        }
            
    }

    handleChecklogin=()=>{
        this.setState({
            isLogin:true
        })
    }

    handleChecklogout=()=>{
        this.setState({
            isLogin:false
        })
    }
    render() {
        return (
            <Row gutter={[0,40]}>
                <Col> 
                <Row type='flex' justify='space-around' align='middle' style={{ height: '180px' }}>
                    <Col>
                        <img src='https://drive.google.com/uc?id=1PjvmChcgEnR-zCOh5828o2bkPP-oWaXV' alt='SHOPBAG Logo' />
                    </Col>
                    <Col span={13}>
                        <Search placeholder="search" size='large' enterButton />
                    </Col>
                    <Col>
                        <LanguageSelection />
                    </Col>
                    <Col>
                        <Row>   
                            {this.changeAfterlogin()}
                        </Row>
                        <Row>
                            <Col>
                                <Button type='link' style={{ color: 'black' }}><b>Account & Order</b></Button>
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <CartDropdown isLogin={this.state.isLogin}/>
                    </Col>
                </Row>
                <hr />
                </Col>
            </Row>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      user: state.user
    }
  }
  
  export default connect(mapStateToProps, null)(Topnavbar)
