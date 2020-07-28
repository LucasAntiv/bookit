const router = require('express').Router();
const Business = require('../model/Business');
const verify = require('./verifyToken');

router.get('/business/all', verify, async (req,res) =>{
    //Get all business
    const business = await Business.find({});
    res.json(business);
});


router.post('/business/new', verify, async (req,res) => {
    //Set a new business
    const business = new Business({
        name: req.body.name,
        adress: req.body.adress,
        phone: req.body.phone,
        email: req.body.email
    });

    try {
        const savedBusiness = await business.save();
        res.send({business: business._id});
    } catch (err) {
        res.status(400).send(err);
    }

});

module.exports = router;