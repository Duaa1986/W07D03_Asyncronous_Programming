const express =require("express");
const fs = require("fs");
const axios = require("axios");
const { response } = require("express");

const app = express();
const port = 3000;
app.use(express.json());










app.listen(port,()=>{
    console.log(`the server run on http://localhost:${port}`)
      });