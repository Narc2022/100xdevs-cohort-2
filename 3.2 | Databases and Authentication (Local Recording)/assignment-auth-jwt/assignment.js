const express = requre('express');
const jwt = require("jsonwebtoken");
const jsonPassword = "123456";


const app =express();

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
    //write logic here

}

