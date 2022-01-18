const express = require('express');
const router = express.Router();
const Person = require('../models/person.js');

router.get('/',async (req,res)=>{
    const people = await Person.find();
    res.json(people)
});
router.get('/:id',async (req,res)=>{
    const person = await Person.findById(req.params.id);
    res.json(person)
});

router.post('/', async(req,res)=>{
    const {name,gender,age}=req.body;
    const person = new Person({name,gender,age});
    await person.save();
    res.json({status:"Person Saved"})
});
router.put('/:id',async (req,res)=>{
    const {name,gender,age}=req.body;
    const newPerson = {name,gender,age};
    await Person.findByIdAndUpdate(req.params.id,newPerson)
    res.json({status:"Person Updated"})
});
router.delete('/:id',async (req,res)=>{
     await Person.findByIdAndDelete(req.params.id)
    res.json({status:"Person Deleted"})
});


module.exports=router;