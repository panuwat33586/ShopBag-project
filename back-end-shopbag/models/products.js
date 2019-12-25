module.exports = (sequelize, DataTypes) => {
    const product = sequelize.define('product', {
      name: {
        type: DataTypes.STRING(100)
      },
       description:{
        type: DataTypes.STRING(1234)
       },
       price:{
         type:DataTypes.DECIMAL(10, 2) ,
         validate:{
           min: 0
         }
       },
       quantity:{
         type:DataTypes.INTEGER,
         validate:{
          min: 0
         }
       },
       product_image:{
         type:DataTypes.STRING(500)
       }
    })
  
    return product
  }