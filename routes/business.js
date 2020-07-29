const router = require('express').Router();
const Business = require('../model/Business');
const verify = require('./verifyToken');


router.get('/find', verify, async (req,res) =>{
    //Get all business
    const business = await Business.find({ name: { $regex: req.body.name, $options: 'i'}});
    res.json(business);
});

router.get('/all', verify, async (req,res) =>{
    //Get all business
    const business = await Business.find({});
    res.json(business);
});

router.post('/new', verify, async (req,res) => {
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

router.post('/delete', verify, async (req,res) => {
    
    try {
        const result = await Business.deleteOne({ _id: req.body._id});
        res.send({result});
    } catch (err) {
        res.status(400).send(err);
    }
});

router.post('/update', verify, async (req,res) => {

    const business = new Business({
        _id: req.body._id,
        name: req.body.name,
        adress: req.body.adress,
        phone: req.body.phone,
        email: req.body.email
    });

    try {
        const result = await business.updateOne(business);
        res.send({result});
    } catch (err){
        res.status(400).send(err);
    }
});

module.exports = router;