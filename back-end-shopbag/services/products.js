const passport = require('passport');
module.exports = (app, db) => {
    app.get('/allproduct', (req, res) => {
      db.product.findAll({
        attributes:['id','name','product_image','maincategorie_id'],
      })
        .then(result => {
          res.status(200).json(result)
        })
        .catch(err=>{
          res.status(400).json({message:err.message})
        })
    })
    app.get('/addproduct/', (req, res) => {
      db.product.findOne({
        attributes:['id','name','description','price','product_image'],
        where:{id:req.params.productid},
        include:[{model:db.maincategorie,attributes:['id','name']},{model:db.subcategorie,attributes:['id','name']}]
      })
        .then(result => {
          res.status(200).json(result)
        })
        .catch(err=>{
          res.status(400).json({message:err.message})
        })
    })
    app.post('/addproduct',passport.authenticate('jwt', { session: false }),
        function(req,res){
           db.product.create({
             name:req.body.name,
             description:req.body.description,
             price:req.body.price,
             quantity:req.body.quantity,
             product_image:req.body.product_image,
             maincategorie_id:req.body.maincategoryid,
             subcategorie_id:req.body.subcategoryid,
             currency:req.body.currency,
             user_id:req.user.id
           })
           .then(()=>{
             res.status(200).json('add complete adding product')
           })
           .catch(err=>{
             res.status(400).json({ message: err.message })
           })
       }
      )
  }