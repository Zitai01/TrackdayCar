const { Schema } = require('mongoose')

const Comment = new Schema(
  {
    username: { type: String, required: true },
    comments: { type: String, required: true },
    title: { type: String, required: true },
    car_id: { type: Object, required: true }
  },
  { timestamps: true }
)

module.exports = Comment
