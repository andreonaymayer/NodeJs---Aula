# NodeJs - Aula

## iniciando o projeto nodeJs com express

Vamos seguir o passo a passo para instalar o VS Code e o Node.js no Windows e depois criar uma API usando Express.js com os endpoints conforme solicitado.

### 1. Instalando o VS Code
1. Acesse o site [Visual Studio Code](https://code.visualstudio.com/).
2. Clique no botão "Download for Windows".
3. Após o download, abra o instalador e siga as instruções para instalar o VS Code.

### 2. Instalando o Node.js
1. Acesse o site [Node.js](https://nodejs.org/).
2. Baixe a versão recomendada para o Windows e instale o Node.js.
3. Para confirmar a instalação, abra o prompt de comando e digite:
   ```sh
   node -v
   npm -v
   ```
   Isso deve mostrar as versões do Node.js e npm instaladas.

### 3. Criando um Projeto Node.js com Express
1. Abra o VS Code e o terminal integrado.
2. Crie uma pasta para o projeto e inicie um novo projeto:
   ```sh
   mkdir meu-projeto
   cd meu-projeto
   npm init -y
   ```
3. Instale o Express:
   ```sh
   npm install express
   ```

### 4. Criando o Servidor com Endpoints
1. Crie um arquivo `index.js` na pasta do projeto.
2. Adicione o seguinte código no `index.js`:

```javascript
// Importa o módulo Express
const express = require('express');

// Cria uma aplicação Express
const app = express();

// Define a porta do servidor
const PORT = 3000;

// Middleware para processar JSON no corpo das requisições
app.use(express.json());

// Endpoint GET para retornar uma mensagem
app.get('/items', (req, res) => {
    // Lê um cabeçalho da requisição
    const clientName = req.header('Client-Name');
    res.json({ message: 'List of items', client: clientName });
});

// Endpoint POST para criar um novo item
app.post('/items', (req, res) => {
    // Lê o corpo da requisição
    const newItem = req.body;
    res.status(201).json({ message: 'Item created', item: newItem });
});

// Endpoint PUT para atualizar um item (com ID como parâmetro de URL)
app.put('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const updatedItem = req.body;
    res.json({ message: `Item ${itemId} updated`, item: updatedItem });
});

// Endpoint PATCH para atualizar parcialmente um item
app.patch('/items/:id', (req, res) => {
    const itemId = req.params.id;
    const patchData = req.body;
    res.json({ message: `Item ${itemId} partially updated`, changes: patchData });
});

// Endpoint DELETE para remover um item
app.delete('/items/:id', (req, res) => {
    const itemId = req.params.id;
    res.json({ message: `Item ${itemId} deleted` });
});

// Inicia o servidor na porta definida
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
```

### 5. Executando o Servidor
No terminal do VS Code, execute:
```sh
node index.js
```

Agora o servidor está rodando na porta `3000`, e você pode testar os endpoints utilizando uma ferramenta como [Postman](https://www.postman.com/) ou o [Insomnia](https://insomnia.rest/).

### Explicação dos Endpoints
- **GET `/items`**: Retorna uma lista de itens e lê um cabeçalho opcional chamado `Client-Name`.
- **POST `/items`**: Recebe dados no corpo da requisição para criar um novo item.
- **PUT `/items/:id`**: Atualiza completamente um item específico identificado pelo `id`.
- **PATCH `/items/:id`**: Faz uma atualização parcial de um item específico.
- **DELETE `/items/:id`**: Remove um item específico identificado pelo `id`. 

Esses exemplos incluem:
- Leitura de cabeçalho (`Client-Name` no GET).
- Recebimento de corpo da requisição (POST, PUT e PATCH).
- Parâmetros na URL (`:id` para PUT, PATCH, DELETE). 

Essas são as instruções para criar e testar sua API básica em Node.js com Express!

## Mais informações sobre js

### 1. **Declaração de Variáveis**
   - Em JavaScript, usamos `let`, `const` e `var` para declarar variáveis.
   - **`let`**: para variáveis cujo valor pode mudar.
   - **`const`**: para variáveis cujo valor não muda (constantes).
   - **`var`**: modo antigo de declarar variáveis (não é recomendável, pois tem escopo diferente).

   ```javascript
   let idade = 25;    // Pode ser alterado
   const nome = "João"; // Valor fixo, não pode ser alterado
   ```

### 2. **Tipos de Dados**
   - JavaScript é uma linguagem dinâmica, então o tipo de dado é atribuído automaticamente. Principais tipos:
     - **Number**: números (inteiros e decimais).
     - **String**: texto (sempre entre aspas).
     - **Boolean**: `true` ou `false`.
     - **Array**: lista de valores, como `[1, 2, 3]`.
     - **Object**: estrutura de dados mais complexa com chave e valor, como `{ nome: "João", idade: 25 }`.
   - Exemplo de como inicializar diferentes tipos:
     ```javascript
     let numero = 42;
     let texto = "Olá, mundo!";
     let verdade = true;
     let lista = [1, 2, 3];
     let pessoa = { nome: "Maria", idade: 30 };
     ```

### 3. **Operadores Básicos**
   - **Aritméticos**: `+`, `-`, `*`, `/`, `%` (módulo para resto).
   - **Comparação**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`.
     - **`==`** verifica valor, **`===`** verifica valor e tipo (recomendado usar `===` para evitar erros).
   - **Lógicos**: `&&` (E), `||` (OU), `!` (NÃO).

   ```javascript
   let a = 10;
   let b = 20;

   console.log(a + b);  // 30
   console.log(a === b); // false, pois 10 não é igual a 20
   ```

### 4. **Funções**
   - Funções são blocos de código que executam uma tarefa específica.
   - **Funções Declarativas**: usando `function`:
     ```javascript
     function soma(x, y) {
         return x + y;
     }

     console.log(soma(5, 3)); // 8
     ```
   - **Funções de Expressão (funções anônimas)**:
     ```javascript
     const multiplica = function(x, y) {
         return x * y;
     };

     console.log(multiplica(4, 2)); // 8
     ```
   - **Arrow Functions (ES6)**: uma sintaxe mais curta.
     ```javascript
     const divide = (x, y) => x / y;

     console.log(divide(10, 2)); // 5
     ```

### 5. **Manipulação de Arrays e Objetos**
   - **Métodos de Array**: `push` (adiciona), `pop` (remove o último), `shift` (remove o primeiro), `unshift` (adiciona no início), `map`, `filter`, `reduce` (para transformar arrays).
   - **Acessar objetos**: usando a notação de ponto (`objeto.propriedade`) ou colchetes (`objeto["propriedade"]`).

   ```javascript
   let frutas = ["maçã", "banana"];
   frutas.push("laranja"); // ["maçã", "banana", "laranja"]

   let pessoa = { nome: "Ana", idade: 25 };
   console.log(pessoa.nome); // "Ana"
   ```

### 6. **Template Literals (ES6)**
   - Facilita a criação de strings com variáveis usando crases e `${}`:
   ```javascript
   let nome = "Carlos";
   let mensagem = `Olá, ${nome}! Bem-vindo ao JavaScript.`;
   console.log(mensagem); // "Olá, Carlos! Bem-vindo ao JavaScript."
   ```

### 7. **Escopo e Contexto**
   - **Escopo** define onde uma variável está acessível. `let` e `const` têm escopo de bloco `{}`, enquanto `var` tem escopo de função.
   - **Contexto (this)**: `this` refere-se ao objeto no qual uma função foi chamada. Em objetos, `this` se refere ao próprio objeto.

### 8. **Tratamento de Erros (Try...Catch)**
   - `try...catch` é usado para lidar com erros sem parar a execução do programa.
   ```javascript
   try {
       let resultado = 10 / 0; // Operação incorreta, mas sem erro em JS
       console.log(resultado);
   } catch (error) {
       console.log("Ocorreu um erro:", error);
   }
   ```

### 9. **Asynchronous Programming (Async e Await)**
   - Permite tratar funções assíncronas, como operações de rede. Começar entendendo **promises** é útil, mas `async` e `await` simplificam o código.
   ```javascript
   async function buscarDados() {
       try {
           let resposta = await fetch("https://api.example.com/data");
           let dados = await resposta.json();
           console.log(dados);
       } catch (erro) {
           console.log("Erro ao buscar dados:", erro);
       }
   }
   buscarDados();
   ```

Esses são os comandos e conceitos básicos de JavaScript que ajudam muito a ter uma boa base para avançar na linguagem!