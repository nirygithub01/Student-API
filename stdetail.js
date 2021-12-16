/**Problem 1:
Build an API to create and retrieve college student details */


const express = require("express");
const app = express();
const port = 3000;


//const student = require("./studetail");

//middleware
app.use(express.json());

app.get("/student/getDetails", (req, res) => {
    res.json ({
    studentfirstName:"John",
    collegeName: "IIT",
    location: "Mumbai"

    });
 
    
});

app.post('/student/getDetails', (req, res) => {

const student ={
    studentfirstName:req.body.studentfirstName,
  //  college_Name: req.body.college_Name,
    //location: req.body.location
}

    console.log(req.body);
    res.send("student post request");
});
app.listen(port, () => {
    console.log("Server is running on this port")
    //res.send("Server is running on this port");
});