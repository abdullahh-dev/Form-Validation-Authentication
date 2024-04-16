const express = require('express');
const app = express();
require('dotenv').config();
const userRouter = require('./routes/userRoutes');
const db = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT;
const DB_URL = process.env.DB;

app.use(express.json());
app.use(cors());
app.use('/api/users', userRouter);

app.listen(PORT, () => {
  console.log(`Server is Live on PORT ${PORT}`);
});
