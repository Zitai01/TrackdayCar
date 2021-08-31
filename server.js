const { Car, Comment } = require('./models')
const routes = require('./routers')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const logger = require('morgan')
const PORT = process.env.PORT || 3001
const db = require('./db')

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(logger('dev'))
app.use('/comments', routes)

app.get('/', (req, res) => {
  res.send('This is root!')
})
app.get('/api/cars', async (req, res) => {
  const cars = await Car.find()
  res.json(cars)
})
app.get('/api/comments', async (req, res) => {
  const comments = await Comment.find()
  res.json(comments)
})

app.get('/api/cars/:id', async (req, res) => {
  try {
    const { id } = req.params
    const car = await Car.findById(id)
    //res.json(car)
    if (!car) throw Error('Car not found')
    res.json(car)
  } catch (e) {
    console.log(e)
    res.send('Car not found!')
  }
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})