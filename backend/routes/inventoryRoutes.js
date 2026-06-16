const express = require('express');
const router = express.Router();

router.put('/stock', (req,res)=>{
    res.send('Stock actualizado');
});

module.exports = router;