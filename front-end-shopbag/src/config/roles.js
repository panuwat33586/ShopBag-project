// component's config object.
const components = {
    home: {
      component: 'Home',
      url: '/home',
    },
    signup: {
      component: 'SignUp',
      url: '/signup',
    },
    maincategory: {
      component: 'MainCategory',
      url: '/maincategory/:id',
    },
    product: {
      component: 'Product',
      url: '/product',
    },
    cart: {
      component: 'Cart',
      url: '/cart',
    },
    profile: {
      component: 'Profile',
      url: '/profile',
    },
  };
  
  export default {
    //role name as a key.
    admin: {
      routes: [...Object.values(components)],
      redirect:'/home'
    },
    user: {
        routes: [
            components.home,
            components.cart,
            components.maincategory,
            components.product,
            components.profile
        ],
        redirect:'/home'
    },
    guest: {
      routes: [
        components.home,
        components.signup,
        components.maincategory,
        components.product
      ],
      redirect:'/home'
    }
  }