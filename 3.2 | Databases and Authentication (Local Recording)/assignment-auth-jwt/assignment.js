const express = require('express');
const jwt = require("jsonwebtoken");
const jsonPassword = "123456";


const app = express();
app.use(express.json());
//In memory database 
const ALL_USERS = [
    {
        username:"sac@gmail.com",
        name:"sac singh",
        password:"1234"
    },
    {
        username:"sac1@gmail.com",
        name:"sac1 singh",
        password:"345678"
    },
    {
        username:"sac22@gmail.com",
        name:"sac22 singh",
        password:"234567"
    }
]

function userExists(username,password){
    console.log('userExists username', username)
    console.log('userExists password', password)
    //write logic here
    let userExists = false;
    for (let i = 0; i < ALL_USERS.length; i++) {
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            userExists = true;
            console.log('userExists', userExists)
        }
    }
    return userExists

}

app.post("/signin",function(req,res){
     const username = req.body.username;
     const password = req.body.password;

     if(!userExists(username,password)){
      return res.status(403).json({
        message:"user doesn't exist in our memory db"
      })
     }

     var token = jwt.sign({username:username},jsonPassword);
     return res.json({
        token,
     })
})
// 1:15
app.get("/users",function(req,res){
    const token = req.headers.authorization;
    try {
        const decoded = jwt.verify(token,jsonPassword);
        const username = decoded.username;
        return res.json({...userExists,username});
    } catch (error) {
        return res.status(403).json({
            msg:"Invalid Token"
        })
    }

})

app.listen(3001)
