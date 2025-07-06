const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const{ sequelize } = require('./models');
const authRoutes = require("./routes/auth.routes");
const studentRoutes = require('./routes/student.routes');
