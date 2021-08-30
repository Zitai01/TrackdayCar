const db = require('../db')
const { Comment } = require('../models')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const comment1 = {
    username: 'Tai',
    comments: 'My first track day car, love it, a little bit heavy.',
    title: 'Lovely bucket seats',
    car_id: `612d0b07abbff5c917db2362`
  }
  await Comment.create(comment1)
  console.log('comments created!')
}

const run = async () => {
  await main()
  db.close()
}

run()
