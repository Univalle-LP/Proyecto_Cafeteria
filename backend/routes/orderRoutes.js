const express = require('express');
const router = express.Router();

router.post('/', (req,res)=>{
    res.send('Pedido creado');
});

module.exports = router;