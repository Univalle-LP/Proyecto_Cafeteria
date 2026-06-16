const express = require('express');
const router = express.Router();

router.post('/register', (req,res)=>{
    res.send('Registro de usuario');
});

router.post('/login', (req,res)=>{
    res.send('Login de usuario');
});

module.exports = router;