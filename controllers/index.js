const { Car, Comment } = require('../models')

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    console.log(req.body)
    await comment.save()
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const deleteComment = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Comment.findByIdAndDelete(id)
    if (deleted) {
      console.log(deleted)
      return res.status(200).send('Comment deleted')
    }
    throw new Error('Comment not found')
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const findCombyCarid = async (req, res) => {
  try {
    const { id } = req.params
    const comments = await Comment.find({ car_id: id })

    return res.status(201).json({
      comments
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createComment,
  deleteComment,
  findCombyCarid
}
