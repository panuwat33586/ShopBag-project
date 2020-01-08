const passport = require('passport');


module.exports=(app,db)=>{
    app.get('/cart',passport.authenticate('jwt', { session: false }),
     function(req,res){
           db.product.findAll({
               where:{user_id:req.user.id},
               include:[{model:db.order}]
           })
           .then(result=>{
               res.status(201).json(result)
           })
           .catch(err=>{
               res.status(400).json({message:err.message})
           }) 
    })
}