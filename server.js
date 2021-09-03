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

app.post('/postcar', async (req, res) => {
  try {
    const car = await new Car(req.body)
    console.log(req.body)
    await car.save()
    return res.status(201).json({
      car
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
})

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
