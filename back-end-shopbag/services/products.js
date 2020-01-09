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
    app.get('/product/:productid', (req, res) => {
      db.product.findOne({
        attributes:['id','name','description','price','product_image','currency'],
        where:{id:req.params.productid},
        include:[{model:db.maincategorie,attributes:['id','name']},{model:db.subcategorie,attributes:['id','name']},{model:db.user,attributes:['id','username']}]
      })
        .then(result => {
          res.status(200).json(result)
        })
        .catch(err=>{
          res.status(400).json({message:err.message})
        })
    })  
  app.post('/addproduct', passport.authenticate('jwt', { session: false }),
    function (req, res) {
      if (!req.files) {
        res.send({
          status: false,
          message: 'No file uploaded'
        })
      } else {
        const picture = req.files.productphoto
        const pictureName = `${(new Date()).getTime()}.jpeg`;
        picture.mv('./upload/' + pictureName)

        res.send({
          status: true,
          message: 'File is uploaded',
          data: {
            name: pictureName,
            size: picture.size
          }
        })

        db.product.create({
          name:req.body.name,
          description:req.body.description,
          price:req.body.price,
          quantity:req.body.quantity,
          product_image:`http://localhost:8080/${pictureName}`,
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
    }
  )
  
app.get('/addedproduct',passport.authenticate('jwt', { session: false }),  
        function(req,res){
          db.product.findAll({
            attributes:['id','name','price','quantity','product_image','maincategorie_id','subcategorie_id'],
            where:{user_id:req.user.id}
          })
          .then(result=>{
            res.status(200).json(result)
          })
          .catch(err=>{
            res.status(400).json({ message: err.message })
          })
        }
  )
app.delete('/deleteproduct/:productid',passport.authenticate('jwt', { session: false }), 
        function(req,res){
          db.product.destroy({
            where:{id:req.params.productid,user_id:req.user.id}
          })
          .then(result=>{
            res.status(200).json({message:'product has been deleted'})
          })
          .catch(err=>{
            console.log(err)
            res.status(400).json({ message: err.message })
          })
        }

)

}



  