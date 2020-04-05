const router = require('express').Router();
const mongoose = require('mongoose');
const isAuth = require('./isAuth');
const Users = require('../model/User');
const Notes = require('../model/notesModel');




router.get('/getNote',isAuth,async(req,res)=>{
  let userID = req.user._id;
  console.log('here')
  Notes.find({user:userID}).then((data,err)=>{
      if(err)
        res.send({'error':'error fetching'})
      res.send(data);
  })
});


router.post('/newNote',isAuth,(req,res)=>{

   try{
    Notes.create({ 
        title:req.body.title,
        content:req.body.content,
        user:req.user._id
    }).then((data,err)=>{
        if(err) res.send({'error':err})
        res.send(data);
    })
    
   }catch(err){
       console.log(err);
   }
    
});


router.put('/editNote',isAuth,async(req,res)=>{
    console.log('into the put request',req.body)
const result =await Notes.findOneAndUpdate({_id:req.body.ID},{title:req.body.title,content:req.body.content},{new:true})
res.send(result);
});

router.post('/delete',isAuth,(req,res)=>{
    console.log(req.body.ID)
    Notes.findOneAndDelete({_id:req.body.ID}).then((data,err)=>{
        if(err) res.send({'error':err});
        res.send(data);
    })
});

module.exports= router;