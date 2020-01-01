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
       },
       sell:{
         type:DataTypes.INTEGER,
         validate:{
          min: 0
        }
       },
       liked:{
         type:DataTypes.INTEGER,
         validate:{
          min: 0
        }
       }
    })
  
    product.associate=function(models){
         product.belongsTo(models.maincategorie,{ foreignKey: 'maincategorie_id' })
         product.belongsTo(models.subcategorie,{ foreignKey: 'subcategorie_id' })
         product.belongsTo(models.user,{foreignKey:'user_id'})
    }
    return product
  }