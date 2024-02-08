const express = require("express");
const mainRouter = require("./routes/index");
const app = express();

app.use("/api/v1", mainRouter);

// syntax app.use(path, callback)

// /api/v1/user/signup
// /api/v1/user/signin
// /api/v1/user/changepass

// /api/v1/account/transferMoney
// /api/v1/account/balance
//
