import express from'express';

const app = express();
const PORT = 6000;

app.post('/users', (req, res, next) => {
    res.json({message: 'Users created'})
})

app.get('/users', (req, res) => {
    res.json({message: 'Users lists'})
})

app.patch('/users/:id', (req, res) => {
    const {id} = req.params
    res.json({message: `User ${id} updated`})
})

app.delete('/users/:id', (req, res) => {
    const {id} = req.params
    res.json({message: `User ${id} deleted`})
})

app.listen('/users/:id', (req, res) => {
    console.log(`Server running in PORT: ${PORT}`);
})