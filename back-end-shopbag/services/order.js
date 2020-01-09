const passport = require('passport');

module.exports = (app, db) => {
    app.post('/order', passport.authenticate('jwt', { session: false }),
        function (req, res) {
            db.order.create({
                status: 'Ordering',
                total_price: req.body.totalprice,
                user_id: req.user.id,
                order_date:req.body.orderdate
            })
                .then(async () => {
                    let order =
                        await db.order.findOne({
                            where: { user_id: req.user.id, status: 'Ordering' },
                            order: [ [ 'createdAt', 'DESC' ]]
                        })
                    try {
                        for (item of req.body.cartitems) {
                            await db.cart.create({
                                quantity: item.quantity,
                                order_id: order.id,
                                product_id: item.id
                            })
                        }
                    }
                    catch(error){
                        res.status(400).json({message:'Cannot insert'})
                     }
                     res.status(200).json({message:'Purchase Completed'})
                })
                .catch(err => {
                    res.status(400).json({ message: err.message })
                })
        }
    )
    
    app.get('/order',passport.authenticate('jwt', { session: false }),
          function(req,res){
               db.order.findAll({
                   where:{
                       user_id:req.user.id
                   }
               })
               .then(result=>{
                   res.status(201).json(result)
               })
               .catch(err => {
                res.status(400).json({ message: err.message })
            })
          }
    
    )
   
    app.put('/cancleorder/:orderid',passport.authenticate('jwt', { session: false }),
    function(req,res){
        db.order.update(
            {status:'Cancled'},
           {where:{id:req.params.orderid,user_id:req.user.id}} 
        )
        .then(result=>{
            res.status(200).json('completed status')
        })
        .catch(err=>{
            res.status(400).json({messgae:err.message})
        })
    }
    )
}