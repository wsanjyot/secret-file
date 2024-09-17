import express from "express"
import bodyParser from "body-parser"
import {dirname} from "path"
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url))
 
var userIsAuthorised = false;

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({extended: true}))

function passwordCheck(req , res , next){
    const password = req.body["password"]
    if (password === "ILoveProgramming") {
        userIsAuthorised = true;
    }
    next();
}

app.use(passwordCheck);
 
app.get("/" , (req , res ) => {
    
    res.sendFile(__dirname + "/public/index.html" )
}
)

app.post("/check" , (req , res) => {
if (userIsAuthorised){
    res.sendFile(__dirname +"/public/secret.html" )
}
else{
    res.sendFile(__dirname + "/public/index.html")
    
}

  
})



  




app.listen(port, () => {
    console.log(`the server is running on ${port}`);
    
  
}
)