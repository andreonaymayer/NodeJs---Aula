// Importa a função get clubes do service.js
import {ClubesService} from './service.js';

// Importa o módulo Express
import express from 'express';

// Cria uma aplicação Express
const app = express();

// Define a porta do servidor
const PORT = 3001;
const service = new ClubesService();

// Middleware para processar JSON no corpo das requisições
app.use(express.json());

// Endpoint pra listar todos clubes
app.get('/', async (req, res) => {
    res.json(await service.getClubes());
});

// Endpoint pra listar um clube pelo id
app.get('/futebol/clube/:id', (req, res) => {
    // Lê um cabeçalho da requisição
    const idDoClube = req.params.id;

    res.json({message: 'List of items', client: clientName});
});

// Endpoint POST para criar um novo clube
app.post('/futebol/clube', (req, res) => {
    // Lê o corpo da requisição
    const newItem = req.body;
    res.status(201).json({message: 'Item created', item: newItem});
});

// Endpoint PUT para atualizar um item (com ID como parâmetro de URL)
app.put('/futebol/clube/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    res.json({message: `Item ${itemId} updated`, item: updatedItem});
});

// Endpoint PATCH para atualizar parcialmente um item
app.patch('/futebol/clube/:id', (req, res) => {
    const itemId = req.params.id;
    const patchData = req.body;
    res.json({message: `Item ${itemId} partially updated`, changes: patchData});
});

// Endpoint DELETE para remover um item
app.delete('/futebol/clube/:id', (req, res) => {
    const itemId = req.params.id;
    res.json({message: `Item ${itemId} deleted`});
});

// Inicia o servidor na porta definida
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
