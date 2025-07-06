const express = require('express');
const router = express.Router();
const { Student } = require('../models');
const authMiddleware = require('../middleware/auth.middleware');

router.get('/', authMiddleware, async (req, res) =>{
    const students = await Student.findAll();
    res.json(students);

});

router.post('/', authMiddleware, async (req, res) => {
    const student = await Student.create(req.body);
    req.json(student);
});

router.put('/:id', authMiddleware, async (req, res) =>{
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).send("Student not found");
    await student.update(req.body);
    res.json(student);
});

router.delete('/:id', authMiddleware, async (req,res) =>{
    const student = await Student.findByPk(req.params.id);
    if (!student) return res.status(404).send('student not found');
    await student.destroy();
    res.send('Deleted');
});