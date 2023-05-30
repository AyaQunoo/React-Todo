const PORT = process.env.PORT || 8000
const express = require('express');
const app = express();
const pool = require('./Database/connection')
const cors = require('cors')
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get('/todos', async (req, res) => {
    try {
        const todos = await pool.query('SELECT * FROM todos')
        res.json(todos.rows)
    } catch (err) {
        console.log(err);

    }
})
app.post('/new', async (req, res) => {
    const { title, progress, date } = req.body;
    try {
        const newTodo = await pool.query('INSERT INTO todos(title,progress,date) VALUES($1,$2,$3)', [title, progress, date])
        res.json(newTodo)
    } catch (err) {
        console.log(err);
    }
})
app.put('/todo/:id', async (req, res) => {
    const { id } = req.params;
    const { title, progress, date } = req.body;
    try {
        const editTodo = await pool.query('UPDATE todos SET  title = $1, progress = $2, date = $3 WHERE id = $4;', [title, progress, date, id])
        res.json(editTodo)
    } catch (err) {
        console.log(err);

    }
})
app.delete('/todo/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deleteTodo = await pool.query('DELETE FROM todos WHERE id=$1;', [id])
        res.json(deleteTodo)
    } catch (err) {
        console.log(err);

    }
})
app.listen(PORT, () => {
    console.log(`you are listening on port ${PORT}`)
})