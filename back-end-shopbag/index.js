const express = require('express')
const app = express()
const cors = require('cors')

const bodyParser = require('body-parser')
const db = require('./models')

const productsService = require('./services/products')
const maincategoriesService = require('./services/maincategories')
const subcategoriesService = require('./services/subcategories')

// cors policy
app.use(cors())
// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

db.sequelize.sync({ alter: true }).then(() => {
  productsService(app, db)
  maincategoriesService(app, db)
  subcategoriesService(app, db)

  app.listen(8080, () => {
    console.log("Server is running on port 8080")
  })
})