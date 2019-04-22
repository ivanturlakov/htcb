const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const BikeItemSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    frame: {
      type: String,
      required: true
    },
    transmission: {
      type: String,
      required: true
    },
    brakes: {
        type: String,
        required: true
    },
    suspension: {
        type: String,
        required: true
    },
    build: {
        type: String,
        required: true
    },
    userLocation: {
        lat: {
          type: Number,
          required: false,
        },
        lng: {
          type: Number,
          required: false,
        }
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  
let BikeItem = mongoose.model('bikeitem', BikeItemSchema);
module.exports = BikeItem;