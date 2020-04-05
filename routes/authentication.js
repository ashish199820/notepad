const router  = require("express").Router();
var User= require('../model/User');
//const registerValidation = require("../validation")
const bcrypt= require("bcryptjs")
const jwt  = require("jsonwebtoken");


router.post("/register",async(req,res)=>{
   console.log("here1.1");
   console.log(req.body)
   //email validate
 const emailexist = await User.findOne({email:req.body.email});
 if(emailexist) return res.send('Email already exist');
 console.log("here2");
///hash password
const salt = await bcrypt.genSalt(10);
const hashedpassword = await bcrypt.hash(req.body.password,salt);

console.log("password created");


    // const user = new User({
    //     name:req.body.name,
    //     email:req.body.email,
    //     password:hashedpassword
    // });
    // try{
        
    //     var result =await user.save();
    //     console.log("saved successfully");
    // res.send(result);
         
    // }catch(err){
    //      console.log(err);
    // }
    try{
     User.create({
         name:req.body.name,
        email:req.body.email,
        password:hashedpassword
    }).then((data,err)=>{
        if(err)
        {
            res.send({error:err})
        }
        else res.send(data);
    })
    }catch(err){
        console.log(error);
    }

});

router.post("/login",async(req,res)=>
{
   // res.send("hey there");
    const user = await User.findOne({email:req.body.email});
    if(!user) return res.send({'error':'user not found'});
    
    ///password
      const valid = await bcrypt.compare(req.body.password,user.password);
      if(!valid) res.send({"error":"login failed"});
      else{
      const token = jwt.sign({_id:user._id,name:user.name},process.env.SECRET,{expiresIn:'1d'});
      res.header('auth-token',token);
      res.header('Access-Control-Expose-Headers','auth-token').send({'result':'success'});/////////access-control-expose-header allow the defined header to be exposed
    }                                                          //////////////during cors requests and responses
      //res.header('auth-token',token);redirect("/api/posts/login")
})


module.exports=router;
