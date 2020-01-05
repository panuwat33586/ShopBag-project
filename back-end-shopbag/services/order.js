const passport = require('passport');

module.exports=(app,db)=>{
    app.post('/order',passport.authenticate('jwt',{session:false}),
      function(req,res){
           db.order.create({
               status:'Ordering',
               total_price:req.body.total_price,
               user_id:req.user.id
           })
           .then(async()=>{
               let order= 
               await db.order.findOne({
                   where:{user_id:req.user.id,status:'Ordering'}
               })
               db.cart.create({
                   quantity:req.body.quantity,
                   order_id:order.id,
                   product_id:req.body.product_id
               })
           })
           .catch(err=>{
               res.status(400).json({message:err.message})
           })
       }
    )
}