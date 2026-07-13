const express = require('express');
const cors = require('cors');
require('dotenv').config();

const { createAdmin } = require('/controllers/adminController');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Backend Node.js rodando com sucesso!');
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});