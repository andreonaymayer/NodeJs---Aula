# NodeJs - Aula
 
## Mais informações sobre js

Sim, além de condicionais e laços, há alguns outros conceitos e comandos básicos que são essenciais para entender bem o JavaScript e iniciar com uma base sólida. Vou listar os principais:

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