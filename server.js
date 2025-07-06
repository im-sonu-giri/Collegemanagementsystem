const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const{ sequelize, User, Student } = require('./models');
const authRoutes = require("./routes/auth.routes");
const studentRoutes = require('./routes/student.routes');

app.use('/api', authRoutes);
app.use('/api/students', studentRoutes);

const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
    app.listen(PORT, () => console.log(`server runnign on port ${PORT}`));
});