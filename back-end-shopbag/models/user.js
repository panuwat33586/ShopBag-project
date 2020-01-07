module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define('user', {
        username: {
            type: DataTypes.STRING(255)
        },
        password: {
            type: DataTypes.STRING(255)
        },
        firstname: {
            type: DataTypes.STRING(100)
        },
        lastname: {
            type: DataTypes.STRING(100)
        },
        birthdate: {
            type: DataTypes.STRING(50),
            validate:{
                isDate:true
            }
        },
        gender: {
            type: DataTypes.ENUM("male", "female")
        },
        email: {
            type: DataTypes.STRING(200),
            validate: {
                isEmail: true
            }
        },
        phonenumber:{
             type:DataTypes.STRING(10),
             validate:{
                 len:[9,10]
             }
        },
        profile_img: {
            type: DataTypes.STRING(500)
        },
        role: {
            type: DataTypes.ENUM("admin", "user")
        }
    })
    user.associate=function(models){
        user.hasMany(models.product,{onDelete: 'CASCADE',foreignKey:'user_id'})
        user.hasMany(models.address,{onDelete: 'CASCADE',foreignKey:'user_id'})
        user.hasMany(models.order,{onDelete: 'CASCADE',foreignKey:'user_id'})
    }
    return user
}


