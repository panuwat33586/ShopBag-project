export const ADD_ITEMS='ADD_ITEMS'
export const DELETE_ITEMS='DELETE_ITEMS'

export function Additems(items,quantity){
    return{
        type:ADD_ITEMS,
        items:{...items,quantity:quantity}
    }
}

export function Deleteitems(productid){
    return{
        type:DELETE_ITEMS,
        productid:productid
    }
}