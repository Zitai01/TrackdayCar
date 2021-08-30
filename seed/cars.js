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
      model: '2021 Audi R8',
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
        'https://media.ed.edmunds-media.com/toyota/gr-supra/2021/oem/2021_toyota_gr-supra_coupe_20_fq_oem_5_1600.jpg',
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
