const mongoose = require('mongoose')
const CarSchema = require('./car')
const CommentSchema = require('./comment')

const Car = mongoose.model('cars', CarSchema)
const Comment = mongoose.model('comments', CommentSchema)

module.exports = {
  Car,
  Comment
}
