const { Schema } = require('mongoose')

const Car = new Schema(
  {
    model: { type: String, required: true },
    photo: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    Performance: { type: String, required: true },
    Catagory: { type: String, required: true },
    intro: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = Car
