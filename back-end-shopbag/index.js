const express = require('express')
const app = express()
const cors = require('cors')
const passport = require('passport');
const bodyParser = require('body-parser')
const db = require('./models')

const productsService = require('./services/products')
const maincategoriesService = require('./services/maincategories')
const subcategoriesService = require('./services/subcategories')
const userService=require('./services/user')

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
  userService(app,db)

  app.get('/protected', passport.authenticate('jwt', { session: false }),
    function (req, res) {
      res.send(req.user);
    });

  app.listen(8080, () => {
    console.log("Server is running on port 8080")
  })
})