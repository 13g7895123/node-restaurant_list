const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const port = 3000

// route setting
// app.get('/', (req, res) => {
//   res.send('This is my first Express app')
// })
app.get('/', (req, res) => {
  res.render('index')
})


// create server
app.listen(port, () => {
  console.log(`server listen to http://localhost:${port}`)
})

// setting template engine
app.engine('handlebars', exphbs.engine('defaultLayout: main'))
app.set('view engine', 'handlebars')

app.use(express.static('public'))

