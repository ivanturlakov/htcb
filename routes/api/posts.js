const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

// Post Item Model
const PostItem = require('../../models/PostItem');

// @route   GET api/posts
// @desc    Get All Posts
// @access  Public
router.get('/', (req, res) => {
  PostItem.find()
    .sort({ date: -1 })
    .then(postitems => res.json(postitems));
});

// @route   POST api/posts
// @desc    Create An Post
// @access  Public
router.post('/', auth, (req, res) => {
  const newPostItem = new PostItem({
    name: req.body.name,
    category: req.body.category,
    content: req.body.content,
    img: req.body.img
  });

  newPostItem.save().then(postitem => res.json(postitem));
});

// @route   EDIT api/posts/:id
// @desc    Edit An Post Item
// @access  Public
router.put('/:id', auth, (req, res) => {
  PostItem.findOneAndUpdate(
    { _id: req.params.id },
    { $set: { 
      name: req.body.name,
      category: req.body.category,
      content: req.body.content,
      img: req.body.img || "https://www.syncron.com/wp-content/uploads/2017/03/img-placeholder.png"
     } }
  )
    .then(() => res.json({ success: true }))
    .catch(err => res.status(404).json({ success: false }));
});

// @route   DELETE api/posts/:id
// @desc    Delete A Post Item
// @access  Public
router.delete('/:id', auth, (req, res) => {
  PostItem.findById(req.params.id)
    .then(postitem => postitem.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
