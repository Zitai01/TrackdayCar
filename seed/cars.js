const db = require('../db')
const { Car } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const cars = [
    {
      model: '2021 BMW M4 Competition',
      photo:
        'https://www.carscoops.com/wp-content/uploads/webp/2020/09/2021-bmw-m4-coupe-monaco-1024x555.webp',
      brand: 'BMW',
      price: 74700,
      Performance: '503hp 3830lbs 8-speed auto/manuel',
      Catagory: 'luxury sports car',
      intro: 'Great car!'
    },
    {
      model: 'Audi R8',
      photo:
        'https://www.audiusa.com/content/dam/nemo/us/models/R8/R8-Coupe/1920x1080-dimensions/1920x1080_200902_r8-rwd-3_NAR_v01-min.jpg?output-format=webp&downsize=1324px:*',
      brand: 'Audi',
      price: 142700,
      Performance: '602hp 3600lbs ',
      Catagory: 'super car',
      intro: 'Very nice car!'
    },
    {
      model: '2021 911 GT3',
      photo:
        'https://cdn.motor1.com/images/mgl/gmmnP/s1/2022-porsche-911-gt3-nose-headlights-on.jpg',
      brand: 'Porsche',
      price: 142700,
      Performance: '502hp 3164lbs DCT auto/manuel',
      Catagory: 'luxury sports car',
      intro: 'One of the bast track car!'
    },
    {
      model: '2021 Toyota Supra',
      photo:
        'https://www.motortrend.com/uploads/sites/5/2021/02/2021-Toyota-GR-Supra-3-0-Premium-26.jpg?fit=around%7C29:16',
      brand: 'Toyota',
      price: 43090,
      Performance: '382hp 3400lbs  auto transmission',
      Catagory: 'luxury sports car',
      intro: 'Great car!'
    }
  ]

  await Car.insertMany(cars)
  console.log('Cars created!')
  console.log()
}

const run = async () => {
  await main()
  db.close()
}

run()
