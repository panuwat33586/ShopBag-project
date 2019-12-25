module.exports = (app, db) => {
    app.get('/subcategories/:subcategoryid', (req, res) => {
      db.subcategorie.findAll({
        where:{id:req.params.subcategoryid},
        include:[{model:db.product,attributes:['id','name','price','product_image']}]
      })
        .then(result => {
          res.status(200).json(result)
        })
    })
    app.post('/subcategories',(req,res)=>{
      db.subcategorie.create(
        {
          name:req.body.name,
          maincategorie_id:req.body.maincategory_id,
        }
      )
      .then(result=>{
        res.status(201).json(result)
      })
      .catch(err=>{
        res.status(400).json({message:err.message})
    })
    })
  }