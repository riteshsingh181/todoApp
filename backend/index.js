// write basic express boilerplate code,
// with express.json() middleware

const express = require('express');
const app = express();
app.use(express.json());
const port = 8080;

//body {
    // title: String,
    // description: String;
//}

app.post("/todos", (req, res)=> {
    const {todos} = req.query;
})

app.get("/todos", (req, res)=> {

})

app.put("/completed", (req, res)=> {

})

app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`);
})