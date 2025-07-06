const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const {User } = require("../models");
require('dotenv').config();

router.post('/login', async(req, res) => {
    const{ username, password } = req.body;
}) 