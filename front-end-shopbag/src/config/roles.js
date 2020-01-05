// component's config object.
const components = {
    home: {
      component: 'Home',
      url: '/home',
    },
    signup: {
      component: 'Signup',
      url: '/signup',
    },
    maincategory: {
      component: 'MainCategory',
      url: '/maincategory',
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
      url: '/my-profile',
    }
  };
  
  export default {
    //role name as a key.
    admin: {
      routes: [...Object.values(components)],
    },
    user: {
        routes: [
            components.home,
            components.cart,
            components.maincategory,
            components.product,
            components.profile
        ]
    },
    guest: {
      routes: [
        components.home,
        components.signup,
        components.maincategory,
        components.product
      ]
    }
  }