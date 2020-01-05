module.exports = (sequelize, DataTypes) => {
    const order = sequelize.define('order', {
      order_date: {
        type: DataTypes.STRING(50)
      },
      delivery_date:{
        type:DataTypes.STRING(20),
        validate:{
            isDate:true
        }
      },
      status:{
        type:DataTypes.STRING(50),
      },
      total_price:{
        type:DataTypes.DECIMAL(10, 2) ,
         validate:{
           min: 0
         }
      }
    })
    order.associate=function(models){
        order.belongsTo(models.user,{foreignKey:'user_id'})
        order.belongsToMany(models.product,{through:models.cart,foreignKey:'order_id'})
    }
    return order
  }