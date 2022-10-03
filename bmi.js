const express=require("express");
const bodyParser=require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.get("/",function(req,res){
    res.sendFile(__dirname + "/ibmCalculator.html");
});
app.post("/",function(req,res){
    var weight=parseFloat(req.body.weight);
    var height=parseFloat(req.body.height);
    var bmi= weight / (height * height);
    res.send("Your BMI is " + bmi);
});
app.listen(3000,function(){
    console.log("Your server grt run on port no 3000");
});