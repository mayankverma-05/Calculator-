
const express = require("express");
const app = express();

app.use(express.json());

app.post("/calculate", (req,res)=>{
    let expression = req.body.expression;

    try{
        let result = eval(expression);
        res.json({result: result});
    }
    catch{
        res.json({result:"Error"});
    }
});

app.listen(3000,()=>{
    console.log("Server running on port 3000");
});
