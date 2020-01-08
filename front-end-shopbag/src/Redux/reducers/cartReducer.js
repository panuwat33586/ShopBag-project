import {ADD_ITEMS} from '../actions/actions'
import {DELETE_ITEMS} from '../actions/actions'

const initialState=
{
    cartItems:[],
    total:0
}

function cartReducers(state=initialState,action){
        switch (action.type) {
            case ADD_ITEMS:
                let input = action.items
                let oldtotal=0
                let oldcart = state.cartItems
                let isHave = false
                let newcart = oldcart.filter((item) => {
                    if (item.id === input.id) {
                        item.quantity += input.quantity
                        isHave = true
                    }
                    oldtotal+=item.quantity
                    return true
                })
                return{
                    ...state,
                      cartItems:isHave ? newcart : [
                         ...state.cartItems,action.items
                      ]
                      ,total:oldcart.length === 0 ? input.quantity : state.total+=input.quantity
                }
            case  DELETE_ITEMS:{
                let old = state.cartItems
                let oldtotal =state.total
                oldtotal-=old.filter(item=>item.id==action.productid)[0].quantity
                return{
                    ...state,
                    cartItems:old.filter(item=>item.id!==action.productid),
                    total:oldtotal
                }
            }
            default:
                return{
                    ...state
                }
        }
}

export default cartReducers