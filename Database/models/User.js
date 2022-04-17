import mongoose  from "mongoose"

let usershema=new mongoose.Schema({
    name:{type:'String'},
    lastname:{type:'string'},
    age:{type:'number'},
    ville:{type:'string'}

})

const User=mongoose.model('user',usershema)

export default User;