const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {User } = require("../models");
require('dotenv').config();
const bcrypt = require('bcrypt')

router.post('/login', async(req, res) => {
    console.log('requestbody:', req.body);
    const{ username, password } = req.body;

    const user = await User.findOne({ where: { username }});
    if(!user) {
        return res.status(401).json({ message: 'Invalid Credential'})
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid) {
        return res.status(401).json({message: 'Invalid Credentials'});
    }
    const token = jwt.sign({ id:user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token });
}) ;
module.exports = router;