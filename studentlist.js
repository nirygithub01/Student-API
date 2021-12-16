const express = require('express');
const app = express();
const port = 3000;


app.listen(port, (req, res) => {
   
    console.log("Server is running on this port number")
});

app.use(express.json());

app.get("/", (req, res) => {

    res.json(
        {
            "result":[
                "Rajesh",
                "Ramesh",
                "Sayali",
                "Sanjana"
                
                ]  
              
          }
    )
    res.send("api is created");
});
app.post("/", (req, res) => {
    console.log(req.body);
  res.send("server has found")
})
