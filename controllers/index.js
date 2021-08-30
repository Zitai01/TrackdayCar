const { Car, Comment } = require('../models')

const createComment = async (req, res) => {
  try {
    const comment = await new Comment(req.body)
    await comment.save()
    return res.status(201).json({
      comment
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createComment
}
