const express =require('express');
const app =express();
const PORT =process.env.PORT || 5000;

app.set("view engine", 'ejs');
app.use(express.static('public'));

app.get("/", (req, res)=>{
    res.render('index', {title:"ABC University"});
});


app.listen(PORT, ()=>{
        console.log(`server started at ${PORT}`);
         });