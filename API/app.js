
const express = require('express');
const r = express();
const port = 4000;
const bodyparser = require('body-parser');
const path = require('path');
const prisma = require('./prisma/prismaClient'); // Sesuaikan dengan path sesuai struktur proyek

r.use(bodyparser.json())



r.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '', 'index.html'));
})

r.post('/', async (req, res) => {
    try {
        const { username, email, password } = req.body;
    
        // Simpan data ke database menggunakan Prisma
        const createUser = await prisma.user.create({
          data: {
            username: username,
            email: email,
            password: password, // Perlu dienkripsi di aplikasi produksi
          },
        });
    
        console.log('Created user:', createUser);
        res.send('SignUp berhasil');
      } catch (error) {
        console.error('Error during signup:', error);
        res.status(500).send('Internal Server Error');
      }
    });


r.use('/login', async (req, res) => {
    console.log({requestFromOutside: req.body})
        res.send('SignUp berhasil')
    
})

r.listen(port, () => {
    console.log(`Berjalan di port ${port}`)
})