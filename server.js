const express = require("express");
const app = express();

app.use(express.json());

app.post("/calculate", (req, res) => {
    let expression = req.body.expression;

    try {
        let result = eval(expression);
        res.json({ result: result });
    } catch {
        res.json({ result: "Error" });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server running on port " + PORT);
});
