module.exports = (sequelize, DataTypes) => {
    const maincategorie = sequelize.define('maincategorie', {
      name: {
        type: DataTypes.STRING(50)
      },
      icon:{
        type:DataTypes.STRING(20)
      }
    })
    maincategorie.associate=function(models){
        maincategorie.hasMany(models.subcategorie,{onDelete: 'CASCADE', foreignKey: 'maincategorie_id' })
        maincategorie.hasMany(models.product,{onDelete: 'CASCADE', foreignKey: 'maincategorie_id' })
    }
    return maincategorie
  }