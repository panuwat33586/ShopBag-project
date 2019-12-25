module.exports = (app, db) => {
    app.get('/maincategory/:maincategoryid', (req, res) => {
      db.maincategorie.findAll(
        {  
          where:{id:req.params.maincategoryid},
          include:[{model:db.subcategorie},{model:db.product}]
        }
        )
        .then(result => {
          res.status(200).json(result)
        })
        .catch(err=>{
          res.status(400).json({message:err.message})
        })
    })
    app.post('/maincategories',(req,res)=>{
      db.maincategorie.create(
        {name:req.body.name}
      )
      .then(result=>{
        res.status(201).json(result)
      })
      .catch(err=>{
        res.status(400).json({message:err.message})
    })
    })
  }