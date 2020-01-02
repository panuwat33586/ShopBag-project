import React, { Component } from 'react'
import CategorySelection from '../Components/CategorySelection'
import PromotionCarousel from '../Components/PromotionCarousel';
import Productcard from '../Components/Productcard';
import Axios from '../config/axios.setup'

export default class Home extends Component {
  componentDidMount(){
    Axios.get('/maincategorytag')
    .then(response=>{
      this.setState({
        maincategory:response.data
      })
    })
    .catch(err=>{
      console.log(err)
    })
  }
  constructor(props){
    super(props)
    this.state={
      maincategory:[]
    }
  }
    render() {
        return ( 
          <>     
               <CategorySelection maincategories={this.state.maincategory} />   
               <PromotionCarousel />
              {this.state.maincategory.map(maincategory=><Productcard maincategory={maincategory} key={maincategory.id}/>)}
         </>
        )
    }
}
