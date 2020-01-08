import { ADD_ITEMS } from '../actions/actions'
import { DELETE_ITEMS } from '../actions/actions'
import { PURCHASE } from '../actions/actions'

const initialState =
{
    cartItems: [],
    total: 0,
    totalprice: 0
}

function cartReducers(state = initialState, action) {
    switch (action.type) {
        case ADD_ITEMS:
            let input = action.items
            let oldcart = state.cartItems
            let isHave = false
            let totalprice = input.price * input.quantity
            let oldtotalprice = state.totalprice
            let newcart = oldcart.filter((item) => {
                if (item.id === input.id) {
                    item.quantity += input.quantity
                    isHave = true
                }
                return true
            })
            return {
                ...state,
                cartItems: isHave ? newcart : [
                    ...state.cartItems, action.items
                ]
                , total: oldcart.length === 0 ? input.quantity : state.total += input.quantity,
                totalprice: oldtotalprice + totalprice
            }
        case DELETE_ITEMS: {
            let old = state.cartItems
            let olditem = old.filter(item => item.id == action.productid)[0]
            let oldtotal = state.total
            oldtotal -= olditem.quantity
            let oldtotalprice = state.totalprice
            let removeitemtotalprice = olditem.quantity * olditem.price
            oldtotalprice -= removeitemtotalprice
            return {
                ...state,
                cartItems: old.filter(item => item.id !== action.productid),
                total: oldtotal,
                totalprice: oldtotalprice
            }
        }
        case PURCHASE: {
            return {
                ...state,
                cartItems: [],
                total: 0,
                totalprice: 0
            }
        }
        default:
            return {
                ...state
            }
    }
}

export default cartReducers