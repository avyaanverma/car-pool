import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { log } from "console";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const userSchema = new mongoose.Schema ({
    name: String,
    phoneno: String,
    from: String,
    to: String,
    seatswanted: Number,


  });
const User = new mongoose.model("User", userSchema); 
mongoose.connect('mongodb+srv://jj:1Million$@cluster0.msnztf8.mongodb.net/avyaan?retryWrites=true&w=majority').then(console.log("connected"));



// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

let users=[]
 var AV = "" ;// ...................................support variable
app.set('view engine', 'ejs');

app.use(express.static('public'))  
app.get("/login" , (req,res)=>{
  res.render('login');
})
app.get("/about" , (req,res)=>{
  res.render('about');
})
app.get("/choose" , (req,res)=>{
  res.render('other/choose');
})
app.get("/join" , (req,res)=>{
  res.render('join');
})
app.get("/put" , (req,res)=>{
  res.render('putarequest');
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/adduser',  (req,res) =>{
  const user = req.body.name;
  console.log(req.body);

 AV= req.body.phoneno;  //..........................initialized
  // res.send(req.body)
  const userdata = {
    "name": req.body.name,
    "phoneno": req.body.phoneno,
    "from": req.body.from,
    "to": req.body.to,
    "date":Date.now().toString(),
  }
 // here..........................................................
 User.insertMany({ 
        name: req.body.name,
        phoneno:req.body.phoneno,
      from: req.body.from,
    to: req.body.to,
    date:Date.now().toString()
        });


 
  console.log(userdata);
  users.push(userdata);
  console.log(user);
  res.send('User added successfully'); // You should send a response to the client

})


app.get("/view" , async(req,res)=>{
const jj = await User.findOne({phoneno : AV});
 if(jj.length === 0){
  res.redirect("/choose");
 }
 console.log(jj);
 // jj[0] is the user object not any array..........
  // res.render('view',{ user: jj[0] });
 
})

app.get("/", auth, (req, res) => {
  console.log("main page");  
  res.render('index')
});


function auth(req,res,next){
    if(req.query.user === 'loggedin'){
        next()
    } else{
        app.use(loading)
        res.redirect("/login")

        // res.send("Please login")
    }
}

function loading(req,res,next){
  res.send("Loading..... Redirecting you to login page in 5 seconds")
  setTimeout(()=>{
    
  }, "5000");
  next();
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
