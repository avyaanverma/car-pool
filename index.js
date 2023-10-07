import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import { log } from "console";

import bodyParser from "body-parser";

const app = express();
const port = 3000;


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

let users=[]
 
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
  // res.send(req.body)
  const userdata = {
    "name": req.body.name,
    "phoneno": req.body.phoneno,
    "from": req.body.from,
    "to": req.body.to,
    "date":Date.now().toString(),
  }
  console.log(userdata);
  users.push(userdata);
  console.log(user);
  res.send('User added successfully'); // You should send a response to the client

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
