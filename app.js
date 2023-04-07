const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// route setting
// app.get('/', (req, res) => {
//   res.render('index')
// })


// create server
app.listen(port, () => {
  console.log(`server listen to http://localhost:${port}`)
})

// setting template engine
app.engine('handlebars', exphbs.engine('defaultLayout: main'))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// import restaurant.json
const restaurant_list = require('./restaurant.json')

// route setting
app.get('/', (req, res) => {
  res.render('index', { restaurantList: restaurant_list.results })
})

// route setting for show: using params
app.get('/restaurants/:id', (req, res) => {
  console.log(req)
})

// route setting for show: using params
// app.get('/restaurants/:id', (req, res) => {
//   let restaurant = restaurant_list.results.find(restaurant => restaurant.id === req.params.id.toString())
//   res.render('show', { restaurant: restaurant })
// })

