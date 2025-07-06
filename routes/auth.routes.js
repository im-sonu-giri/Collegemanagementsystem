const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {User } = require("../models");
require('dotenv').config();

router.post('/login', async(req, res) => {
    const{ username, password } = req.body;
    const user = await User.findOne({where: {username }});
    if(!user || user.password != password){
        return res.status(401).json({message: 'Invalid Credentials'});
    }
    const token = jwt.sign({ id:user.id }, process.env.JWT_SECRET,
        {expiresIn: '1h'});
    res.json({ token });
}) ;
module.exports = router;