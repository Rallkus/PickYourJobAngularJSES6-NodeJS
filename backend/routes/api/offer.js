var mongoose = require('mongoose');
var router = require('express').Router();
var Offer = mongoose.model('Offer');


router.get('/', function(req, res, next) {
  Offer.find().then(function(offer){
  res.json({offer: offer});
}).catch(next);
});

router.get('/:id', function(req, res, next) {
  Offer.findById(req.params.id).then(function(ofertas){
    if(!ofertas){ return res.sendStatus(401); }
  return res.json({ofertas: ofertas});
}).catch(next);
});
      
module.exports = router;
