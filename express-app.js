const express = require('express')
const mustacheExpress = require('mustache-express')
const data = require('./data') //so I don't need to use .js?

const app = express()
// This is the folder for the static assets : like css, js, images, etc...
app.use(express.static('public'))

// These 3 lines, establish that we are using the mustache template engine
// as well as the mustache templates are located int he views folder
app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

//TODO:
//- save the data to the project ----DONE!

//registering a route at localhost:3000/
app.get('/', function(req, res) {
  res.render('directory', data)
})

app.get('/people/:name', (req, res) => {
  const requestName = req.params.name

  const foundUser = data.users.find(user => user.username === requestName)

  res.render('people', foundUser)
})

// actually starting the server
app.listen(3000, function() {
  console.log('Successfully started express application!')
})
