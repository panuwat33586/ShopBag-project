import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import {Row,Col} from 'antd'
import { Redirect } from 'react-router'
import Home from './Pages/Home'
import SignUp from './Pages/SignUp';
import Product from './Pages/Product';
import MainCategory from './Pages/MainCategory';
import Topnavbar from './Components/Topnavbar';
import Footer from './Components/Footer';


function App() {
  return (
    <Row style={{ height: '100%', width: '100%' }}>
      <Row style={{ marginLeft: '10%', marginRight: '10%', marginBottom: '50px', height: '100%' }}>
        <Col>
          <Topnavbar />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/signup' component={SignUp} />
            <Route path='/maincategory' component={MainCategory} />
            <Route  path='/product' component={Product} />
            <Redirect to='/' />
          </Switch>
        </Col>
      </Row>
      <Row type='flex' align='bottom' style={{ width: '100vw' }}>
        <Footer />
      </Row>
    </Row>

  );
}

export default App;
