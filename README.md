# notepad
Notepad features using react-app

# starting app.
start mongodb server locally. 
mongoose URL as in app.js-> mongodb://localhost/notebook
npm install
npm start 

# Api

# react app  localhost:5000/

# registation: localhost:5000/auth/register
method:POST
body:{
  email:'',
  password:'',
  name:''
}
response-> new user object created in mongodb.

# login:  localhost:5000/auth/login
method:POST
body:{
  email:'',
  password:''
}
response-> JWT created on sever.

# Get notes-> localhost:5000/notes/getNotes
method:GET
header:{auth-token:JWT returned after login.}

# new notes-> localhost:5000/notes/newNotes
method:POST
body:{
    title:'',
    content:''
}
header:{auth-token: JWT}

# delete note ->localhost:5000/notes/delete
method:POST
body{
    ID:post_id
}
header:{auth-token:'JWT'}

# update note=>localhost:5000/notes/editNote
method:PUT
body:{
    title:'updated title',
    content:'new content',
    ID:'post_id'
}
header:{auth-token:'JWT'}

# mongoose model
  # notes schema
  mongoose.Schema({

    title:{
        type:String,
    },
    content:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    user:{
        type:mongoose.Schema.Types.ObjectId
    }
})
  # user schema
  ({
    name:{
        type:String,
        required:true,
        min:3
    },
    email:{
        type:String,
        required:true,
        min:3
    },
    password:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now
    }
    
});