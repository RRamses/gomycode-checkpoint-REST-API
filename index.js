
import Database from "./Database/Database.js";
import User from "./Database/models/User.js";
import routes from "./routes/Userroute.js";
import express from 'express';
import bodyParser from 'body-parser';

const app=express()
const PORT=8000

/* connexion a la base de donnee*/
new Database()
/* */   
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended:true
    }))
app.use(routes)

app.listen(PORT,(err)=>{console.log(`le server tourne sur http://127.0.0.1:${PORT}`)})

/*User.create([
    {
        name:"harvey",
        lastname:"specter",
        age:27,
        ville:"manhatthan"
    },

    {
        name:"dona",
        lastname:"dona sait tout",
        age:27,
        ville:"manhattan"
    },

    {
        name:"persson",
        lastname:"emilie",
        age:27,
        ville:"manhattan"
    },
    {
        name:"hartman",
        lastname:"franck",
        age:30,
        ville:"lost-angeles"
    }

]) */