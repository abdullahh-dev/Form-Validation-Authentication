const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const PORT = process.env.PORT;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Listening'); 
});

app.post('/api/users/createUser', (req, res) => {});

app.listen(PORT, () => {
  console.log(`Server is Live on PORT ${PORT}`);
});
