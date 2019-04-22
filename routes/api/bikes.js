const express = require('express');
const router = express.Router();

// Bike Item Model
const BikeItem = require('../../models/BikeItem.js');

// @route   GET api/bikes
// @desc    Get All Bike Items
// @access  Public
router.get('/', (req, res) => {
  BikeItem.find()
    .sort({ date: -1 })
    .then(bikeitems => res.json(bikeitems));
});

// @route   POST api/bikes
// @desc    Create An Bike Item
// @access  Public
router.post('/', (req, res) => {
  const newBikeItem = new BikeItem({
    name: req.body.name,
    type: req.body.type,
    frame: req.body.frame,
    transmission: req.body.transmission,
    brakes: req.body.brakes,
    suspension: req.body.suspension,
    build: req.body.build,
    userLocation: req.body.userLocation
  });

  newBikeItem.save().then(bikeitem => res.json(bikeitem));
});

// @route   DELETE api/bikes/:id
// @desc    Delete A Bike Item
// @access  Private
router.delete('/:id', (req, res) => {
  BikeItem.findById(req.params.id)
    .then(bikeitem => bikeitem.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
