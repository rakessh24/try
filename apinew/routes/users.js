import express from 'express';

const router = express.Router();

const users = [
    {
        username:"bastian54",
        email:"bastian6549@gmail.com",
        password: "bas1234"
    }
]

router.get('/', (req, res) => {

    res.send(users);
});

router.post('/', (req, res) => {
    const user = req.body;

    console.log('user');
    users.push(user);

    res.send('User with the username ');
});

export default router;