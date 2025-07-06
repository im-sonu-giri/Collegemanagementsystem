const express = require('express');
const router = express.Router();
const { Student } = require('../models');
const authMiddleware = require('../middleware/auth.middleware');