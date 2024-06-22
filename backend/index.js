// write basic express boilerplate code,
// with express.json() middleware

const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();
app.use(express.json());
const port = 8080;

app.post("/todos", (req, res)=> {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs."
        })
        return;
    }

    //put it in mongodb;
})

app.get("/todos", (req, res)=> {

})

app.put("/completed", (req, res)=> {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs."
        })
    }

})

app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`);
})