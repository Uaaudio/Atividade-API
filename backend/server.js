const bodyParser = require("body-parser");
const express = require("express")
const app = express();
const path = require("path");
const port = 3001;
const connection = require("../backend/database/db")
const UserModel = require("./database/User"); // Importa meu user Database



// Database conection test.

connection
    .authenticate()
    .then(() =>{
        console.log("Conexão feita !")
    })
    .catch((msgErro)=>{
        console.log(msgErro)


    })


app.set("view engine" ,"ejs") // Define meu Ejs como Engine
app.set("views", path.join(__dirname, "../views")); // Define minha pasta das views (Deixei Default)
app.use(express.static("public")) //Define minha pasta de estaticos.

app.use(bodyParser.urlencoded({extended : false}));




app.get("/",(req,res) =>{
    res.render("register")
})
app.get("/home",(req,res)=>{
    res.render("homepage")
})

app.post("/registeruser",(req,res) =>{
    var username = req.body.username;
    var useremail = req.body.useremail;
    var userpassword = req.body.userpassword
    

    UserModel.create({

       name:username,
       email:useremail ,
       password:userpassword


    }).then(()=>{
        res.redirect("/home")

    })

    

})




app.listen(port,function(req,res){
    console.log("Aplicação abriu")
})