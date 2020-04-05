const joi  = require('@hapi/joi');
////////validation
const registerValidation= data=>{
const Userschema=  {
    name:joi.string()
            .min(3).required(),
    email:joi.string().min(2).required(),
    password:joi.string().required()
}

return joi.valid(data,Userschema);
}
module.exports =registerValidation;
//exports.loginValidation = loginValidation;