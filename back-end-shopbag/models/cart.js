module.exports = (sequelize, DataTypes) => {
    const cart = sequelize.define('cart', {
      quantity: {
        type: DataTypes.INTEGER,
        validate:{
            min: 0
          }  
      },
    })
    return cart
  }