/*
    Todo {
        title: string,
        description: string,
        completed: boolean

    }
*/

const mongoose = require('mongoose');
const { number } = require('zod');
const mongodbURL = "mongodb+srv://ritesh:perspecta123@cluster0.vct5r3y.mongodb.net/todos";
mongoose.connect(mongodbURL)

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}