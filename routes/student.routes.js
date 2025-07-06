const express = require('express');
const router = express.Router();
const { Student } = require('../models');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/', authMiddleware, async (req, res) =>{
    const students = await Student.findAll();
    res.json(students);
});