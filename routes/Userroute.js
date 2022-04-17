import  express  from "express";
import User from "./../Database/models/User.js";

const routes=express.Router();


/*  GET :  RETURN ALL USERS   */
routes.get('/user',(req,res)=>{
    User.find().then((user)=> {res.json(user)})

})

/*  POST :  ADD A NEW USER TO THE DATABASE  */
routes.post('/users',(req,res)=>{
    User.create(req.body).then((user)=>{ 
    res.json({
            user:user,
            message: "user ajouté avec succes"
        })
    })
})

  /*  PUT : EDIT A USER BY ID  */ 
routes.put('/users/:id',(req,res)=>{
    User.findByIdAndUpdate({"_id":req.params.id}).then((user)=>{ 
    res.json(user)
    })
})

  /*  DELETE : REMOVE A USER BY ID  */
routes.delete('/user/:id',(req,res)=>{
    User.deleteOne({"_id":req.params.id}).then((user)=>{ 
    res.json(user)
    })
})


export default routes;