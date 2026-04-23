const mongoose = require('mongoose'); 


const userSchema = new mongoose.Schema(
{
    username:{
    type: String, 
    require: true, 
    unique: true, 
    trim: true
}, 

email:{
    type: String, 
    require: true, 
    unique: true, 
    trim: true, 
    match: /.+\@.+\..+/
}, 

password:{
    type: String, 
    require: true, 
    minlength: 8, 
    match: [
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).+$/,
    "Password must include uppercase, lowercase, number, and special character"
  ]
}, 

firstName:{
    type: String, 
    require: true, 
    trim: true
}, 

LastName:{
    type: String, 
    require: true, 
    trim: true
}, 





}
)