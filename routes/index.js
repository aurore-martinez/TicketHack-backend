var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
require('../models/connection');
const Trip = require ('../models/trips')
const {checkbody} = require('../modules/checkBody')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});




/* POST/ AFFICHER TRIPS selon departure, arrival. */
router.post('/trips', function(req, res, next) {


  Trip.find({ departure: req.body.departure, arrival :req.body.arrival }).then(tripFound =>{
    if(tripFound.length > 0)  {
      res.json ({result : true, allTrips : tripFound })
    } else {
      res.json ({result : false, error : "Trip not found"})
    }
  })
})









module.exports = router;

/*
HOMEPAGE :

1) GET /trips AFFICHER LES TRIPS

  1.1) L'utilisateur entre une requête (trip) dans les inputs  
  1.2) Au clic sur le btn search, récupérer et afficher (GET) tous les trips qui correspondent à la requête (content-right)


FIN :
- AJOUTER FUNCTION CHECKBODY.JS pour vérifier que les champs sont bien et correctement remplis

*/