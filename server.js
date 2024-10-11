const express = require('express')
const db = require('./db')
const plantController = require('./controllers/plantController')
const bodyParser = require('body-parser')
const logger = require('morgan')

// require() imports and middleware here ^ ///////

const PORT = process.env.PORT || 3001

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())

// app.use() middleware here ^ ///////////////////

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))

app.get('/', (req, res) => res.send('Welcome to our page!'))

app.get('/plants', plantController.getAllPlants)
app.get('/plants/:id', plantController.getPlantsById)
app.post('/plants', plantController.createPlant)


//Update and delete will need to be in a SHOW route because we are targeting 

app.put('/plants/:id', plantController.updatePlant)
app.delete('/plants/:id', plantController.deletePlant)

//Front End - More in Unit 3 & 4.
//axios.post('/localhost:3001/plants', req.body)