const express =require("express");
const fs = require("fs");
const axios = require("axios");
const { response } = require("express");

const app = express();
const port = 3000;
app.use(express.json());

// 2) 
let content;
const readFile=()=>{
  fs.readFile("./data.txt",(err,data)=>{
    if (err)
      throw err;
    content=data.toString();
    console.log(content);  
})
};
readFile();

// 3)
const writeFile=()=>{
  fs.writeFile("./text.txt","A new file has been created",(err)=>{
    if (err)
      throw err
    console.log("File has been saved")
  })
};
writeFile();

//4)
const getPost=(id)=>{
  axios
  .get(`https://jsonplaceholder.typicode.com/posts/${id}/`)
  .then((response)=>{
    console.log(response.data)
  })
  .catch((err)=>{
    throw err
  })
}
getPost(1)
getPost(50)

// 5)

const getPostAsync = async (data) => {
  const response =await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/`)
  .then((response)=>{
    console.log(response.data)
  })
  .catch((err)=>{
    throw err
  })
};
//  practice //









app.listen(port,()=>{
    console.log(`the server run on http://localhost:${port}`)
      });