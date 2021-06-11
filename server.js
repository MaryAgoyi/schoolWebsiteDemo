const express =require('express');
const app =express();
const PORT =process.env.PORT || 5000;
const bodyParser=require('body-parser');
const request=require('request');
const { json, response } = require("express");
app.set("view engine", 'ejs');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());
app.get("/", (req, res)=>{
    res.render('index', {title:"ABC University"});
});
app.get('/aboutus', (req, res)=>{
    res.render("about", {title:"ABC Univerity"});
})

app.get('/dormitory', (req, res)=>{
    
    res.render("dormitory", {title:"ABC Dormitory"});
})
app.get('/transport', (req, res)=>{
    res.render("transport", {title:"ABC Transport"});
})
app.get('/library', (req, res)=>{
    res.render("library", {title:"ABC Library"});
})
app.get('/cafeteria', (req, res)=>{
    res.render("cafeteria", {title:"ABC Cafeteria"});
})
app.get('/recreation', (req, res)=>{
    res.render("recreation", {title:"ABC Recreation"});
})
app.get('/apply', (req, res)=>{
    res.render("apply", {title:"Apply now", msg: ""});
})

app.post('/applyform', (req, res)=>{
    const name= req.body.name;
    const captcha=req.body['g-recaptcha-response'];
    const secretKey='6Ld1KB0bAAAAANx7hYnJmpXGwW42r78dWhVnHdmR';
    const googleURL=`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captcha}`;
     fetch(googleURL, {
         method:'POST',
     })
  .then((response)=> response.json())
.then((captcha_response)=>{
  if(captcha_response.success==true){
  
    res.render("applydone", {title:"Apply now", msg: "" });
  }
 
  else{
    res.render("apply", {title:"Apply now", msg: "Captcha verification failed" });
    
  }
  
})
.catch((error)=>{
    return res.json({ error });
});
});



app.listen(PORT, ()=>{
        console.log(`server started at ${PORT}`);
         });