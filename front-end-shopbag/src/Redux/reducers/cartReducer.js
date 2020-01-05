import {ADD_ITEMS} from '../actions/actions'
import {DELETE_ITEMS} from '../actions/actions'

const initialState=
{
    cartItems:[]
}

function cartReducers(state=initialState,action){
        switch (action.type) {
            case ADD_ITEMS:
                return{
                    ...state,
                      cartItems:[
                         ...state.cartItems,action.items
                      ]
                }
            case  DELETE_ITEMS:{
                return{
                    ...state,
                    cartItems:state.cartItems.filter(item=>item.id!==action.productid)
                }
            }
            default:
                return{
                    ...state
                }
        }
}

export default cartReducers