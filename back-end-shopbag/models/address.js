module.exports = (sequelize, DataTypes) => {
    const address = sequelize.define('address', {
      address:{
          type:DataTypes.STRING(500)
      }
    })
    address.associate=function(models){
        address.belongsTo(models.user,{foreignKey:'user_id'})
    }
    return address
  }