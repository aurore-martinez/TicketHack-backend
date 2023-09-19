var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
require('../models/connection');
const Trip = require ('../models/trips')
const Cart = require ('../models/carts')


// route pour ajouter mon trajet dans mon panier sur la page Cart


router.post('/', (req,res) => {
  Trip.findById(req.body.tripId).then(trip => { 
    if (trip)  {
      const addTocart = new Cart ({
      trip: trip._id,
    });

    addTocart.save().then(() => {
    res.json({ result: true});
    });
    } else {
      res.json({ result: false, error: 'Trip not found' });
    }
  })
});






module.exports = router;