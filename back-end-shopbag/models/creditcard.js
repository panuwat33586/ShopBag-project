module.exports = (sequelize, DataTypes) => {
    const creditcard = sequelize.define('creditcard', {
      cardnumber: {
        type: DataTypes.STRING(50),
        validate:{
        isCreditCard:true
        }
      },
      cardholder:{
          type:DataTypes.STRING(100)
      },
      expiredate:{
         type:DataTypes.STRING(20),
         validate:{
            len:[5]
         }
      },
      cvv:{
          type:DataTypes.STRING(10),
          validate:{
            len:[3]
          }
      }
    })
   

    return creditcard
  }