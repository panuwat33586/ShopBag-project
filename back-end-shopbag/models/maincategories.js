module.exports = (sequelize, DataTypes) => {
    const maincategorie = sequelize.define('maincategorie', {
      name: {
        type: DataTypes.STRING(50)
      }
    })
    maincategorie.associate=function(models){
        maincategorie.hasMany(models.subcategorie,{ foreignKey: 'maincategorie_id' })
        maincategorie.hasMany(models.product,{ foreignKey: 'maincategorie_id' })
    }
    return maincategorie
  }