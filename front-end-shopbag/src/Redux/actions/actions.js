import { TOKEN } from '../../config/constants'

export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export const ADD_ITEMS='ADD_ITEMS'
export const DELETE_ITEMS='DELETE_ITEMS'

export function Additems(items,quantity){
    return{
        type:ADD_ITEMS,
        items:{...items,quantity:quantity},
    }
}

export function Deleteitems(productid){
    return{
        type:DELETE_ITEMS,
        productid:productid
    }
}

export function logoutUser() {
    localStorage.removeItem(TOKEN)
    return {
      type: LOGOUT_USER,
    }
  }
  
  function fetchLogin(token) {
    localStorage.setItem(TOKEN, token)
  }
  
  export function login(user, token) {
    fetchLogin(token)
    return {
      type: LOGIN_USER,
      ...user
    }
  }
  
  function fetchLogout() {
    localStorage.removeItem(TOKEN)
  }
  
  export function logout() {
    fetchLogout()
    return {
      type: LOGOUT_USER,
    }
  }