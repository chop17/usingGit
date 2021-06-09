const  express=require("express");
const app=express();
const bodyParser=require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
// app.get("/",(req,res)=>{res.send("<h1>wassup fucker😉</h1>")});

app.get("/",(req,res)=>{
    // res.send("<h1>wassup fucker😉</h1>");
    // res.sendFile(__dirname+"/index.css");
    res.sendFile(__dirname+"/index.html")});

app.post("/",function(req,res){
    let weight=parseFloat(req.body.weight);
    let height=parseFloat(req.body.height);

    let result=weight/(height*height);
    res.send("<strong>you asked for it </strong>"+result)
});

app.listen(80,()=>{console.log("server at 3000")});