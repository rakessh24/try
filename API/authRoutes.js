const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/signup', authController.signup);
router.post('/login', authController.login);

module.exports = router;
const { users } = require('../models'); // Sesuaikan dengan struktur model Anda

const authController = {
  signup: async (req, res) => {
    console.log({ requestFromOutside: req.body });
    res.send('SignUp berhasil');
  },
  login: async (req, res) => {
    const { username, password } = req.body;
    const user = await users.findUnique({
      where: {
        username: username,
      },
    });

    if (!user) {
      return res.status(404).json({
        message: 'User not found',
      });
    }

    if (!user.password) {
      return res.status(404).json({
        message: 'Password not found',
      });
    }

    // Lakukan validasi password di sini

    res.send('Login berhasil');
  },
};

module.exports = authController;
