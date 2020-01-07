module.exports = (sequelize, DataTypes) => {
    const subcategorie = sequelize.define('subcategorie', {
      name: {
        type: DataTypes.STRING(50)
      }
    })
  
    subcategorie.associate=function(models){
        subcategorie.hasMany(models.product,{ onDelete: 'CASCADE',foreignKey: 'subcategorie_id' })
    }
    return subcategorie
  }