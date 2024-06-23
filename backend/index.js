// write basic express boilerplate code,
// with express.json() middleware

const express = require('express');
const { createTodo, updateTodo } = require('./types');
const { todo } = require('./db');
const app = express();
app.use(express.json());
const port = 3000;

app.post("/todo", async (req, res)=> {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs."
        })
        return;
    }

    //put it in mongodb;
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json({
        msg: "Todo created"
    })
})

app.get("/todos", async (req, res)=> {
    const todos = await todo.find();
    res.json({
        todos
    })
})

app.put("/completed", async (req, res)=> {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs."
        })
    }

    const id = updatePayload._id;

    //update in mongodb
    await todo.findByIdAndUpdate(id, {
        completed: true
    })

    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(port, ()=> {
    console.log(`app is listening on port ${port}`);
})