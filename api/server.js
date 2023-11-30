const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000; // Altere para a porta desejada ou use variável de ambiente

app.use(bodyParser.json());

// Dados de exemplo
let produtos = [
  {
    id: 1,
    nome: "Produto 1",
    descricao: "Descrição do Produto 1",
    precoInicial: 50.0,
    precoComDesconto: 45.0,
  },
  {
    id: 2,
    nome: "Produto 2",
    descricao: "Descrição do Produto 2",
    precoInicial: 30.0,
    precoComDesconto: 28.5,
  },
];

// Rota para obter todos os produtos
app.get("/api/produtos", (req, res) => {
  res.json(produtos);
});

// Rota para obter um produto específico pelo ID
app.get("/api/produtos/:id", (req, res) => {
  const produtoId = parseInt(req.params.id);
  const produto = produtos.find((p) => p.id === produtoId);

  if (!produto) {
    res.status(404).json({ mensagem: "Produto não encontrado" });
  } else {
    res.json(produto);
  }
});

// Rota para adicionar um novo produto
app.post("/api/produtos", (req, res) => {
  const novoProduto = req.body;
  novoProduto.id = produtos.length + 1;
  produtos.push(novoProduto);

  res.status(201).json(novoProduto);
});

// Rota para atualizar um produto existente
app.put("/api/produtos/:id", (req, res) => {
  const produtoId = parseInt(req.params.id);
  const index = produtos.findIndex((p) => p.id === produtoId);

  if (index === -1) {
    res.status(404).json({ mensagem: "Produto não encontrado" });
  } else {
    produtos[index] = { ...produtos[index], ...req.body };
    res.json(produtos[index]);
  }
});

// Rota para excluir um produto
app.delete("/api/produtos/:id", (req, res) => {
  const produtoId = parseInt(req.params.id);
  produtos = produtos.filter((p) => p.id !== produtoId);
  res.json({ mensagem: "Produto excluído com sucesso" });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}/api/produtos/`);
});
