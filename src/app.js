const express=require("express");
const app=express();
const hbs=require("hbs");
const path=require("path");
const port =8000;
const template_path=path.join(__dirname,"../src/templates/views")
const partial_path=path.join(__dirname,"../templates/partials")
const static_path=path.join(__dirname,"../public");
app.set('view engine', 'hbs');
app.set('views',template_path);
app.engine('html', require('hbs').__express);
app.use(express.static(static_path));

app.get("",(req,res)=>{
res.render('index');
})
app.get("/about",(req,res)=>{
res.render("about");
})
app.get("/weather",(req,res)=>{
    res.render("weather");
    })
app.get("*",(req,res)=>{
    res.render("404error");
    })
app.listen(port,()=>{
    console.log(`listening to port ${port}`);
});