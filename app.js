const express= require("express")
const bodyparser=require("body-parser")



const app= express();
app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html")

})

app.post('/', function(req, res){
  console.log(req.body);
  res.redirect("/");
});



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}


app.listen(port, function() {
  console.log("Server started on port 3000");
});
