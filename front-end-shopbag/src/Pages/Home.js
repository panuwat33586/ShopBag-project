import React, { Component } from 'react'
import CategorySelection from '../Components/CategorySelection'
import PromotionCarousel from '../Components/PromotionCarousel';
import Productcard from '../Components/Productcard';




export default class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      maincategory:[{id:1,name:'ELECTRONIC'},{id:2,name:'HEALTH & BEAUTY'},{id:3,name:'FASHION'},{id:4,name:'SPORTS'}]
    }
  }
    render() {
        return ( 
          <>     
               <CategorySelection maincategories={this.state.maincategory} />   
               <PromotionCarousel />
              {this.state.maincategory.map(maincategory=><Productcard maincategory={maincategory}/>)}
         </>
        )
    }
}
