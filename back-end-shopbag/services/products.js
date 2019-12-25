module.exports = (app, db) => {
    app.get('/products', (req, res) => {
      db.product.findAll()
        .then(result => {
          res.status(200).json(result)
        })
    })
    app.post('/products',(req,res)=>{
      db.product.create(
        {name:req.body.name,
         description:req.body.description,
         price:req.body.price,
         quantity:req.body.quantity,
         product_image:req.body.image,
         maincategorie_id:req.body.maincategory_id,
         subcategorie_id:req.body.subcategory_id
        }
        ).then(result=>{
          res.status(201).json(result)
        })
        .catch(err=>{
          res.status(400).json({message:err.message})
      })
    })
  }