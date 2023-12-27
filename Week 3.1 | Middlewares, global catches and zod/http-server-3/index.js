const express = require('express');
const app = express();

app.get('/health-checkup',function(req,res){
    const kidneyId = req.query.kidneyId;
    const username = req.headers;
    const password = req.headers.password;

    console.log('username', username);
    console.log('password', password);

    if(username != "sachin" && password !="pass"){
      res.status(400).json({
        msg:"User doesn't exist"
      });
      return;
    }

    if(kidneyId !=1 && kidneyId !=2){
      res.status(411).json({
        msg:"wrong input"
      })
      return;
    } res.send("Your heart is healthy")


});

app.put('/replace-kidney',function(){

});

app.listen(3000)