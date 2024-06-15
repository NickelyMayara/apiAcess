const express = require('express');
const cors = require('cors');
const app = express();
const port = 3333;

app.use(cors());

const users = [
    {
        "Usuario": "luis.marques@aluno.sesi.al.br",
        "Senha": "senha123"
    },
    {
        "Usuario": "Iguinho.professor@aluno.sesi.al.br",
        "Senha": "nota10"
    },
    {
        "Usuario": "Nickely.lopes@aluno.sesi.al.br",
        "Senha": "senha123"
    },
    {
        "Usuario": "kleiton.conceicao@aluno.sesi.al.br",
        "Senha": "senha123"
    },
    {
        "Usuario": "vivian.lima@aluno.sesi.al.br",
        "Senha": "senha123"
    }
];

app.get('/api/users', (req, res) => {
    res.json(users);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});