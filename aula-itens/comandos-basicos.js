// Variaveis e constantes
// Criar variaveis

let nomeDaVariavel = 'valor da variavel em string';
nomeDaVariavel = 10; // em numeric
nomeDaVariavel = 10.5; // em numeric com casas decimais
nomeDaVariavel = false; // em boolean
let idadeValor = 26;
nomeDaVariavel = {nome: "Andreo", "proficao": "professor", idade: idadeValor}
nomeDaVariavel = {"nome": "Andreo", "proficao": "professor", "idade": idadeValor}
nomeDaVariavel = {'nome': 'Andreo', 'proficao': 'professor', 'idade': idadeValor}
// observem que pra chave a aspa é opcional, e pro valor é obrigatorio
// tanto faz aspas simples ou duplas, mas mantenha sua escolha durante todo desenvolvimento

// para pegar um dado use . e o nome da chave quando for tipo objeto:
let nomeAndreo = nomeDaVariavel.nome;

// para pegar um item de lista ou tupla (tupla é uma lista imutavel)
let lista = [1,2,3];
let itemLista = lista.at(0); // todo primeiro item de lista é 0
// itemLista = 1

let tupla = (1,2,3);
let itemTupla = tupla.at(1);
// itemTupla = 2

// pode-se usar "literais" nas strings:
const nomeExemplo = 'Maria';
console.log(`Olá, ${nomeExemplo}!`);

// criar constantes

const nomeDaConstante = 20;

// a diferença entre let e const é que let permite mudança de valor, e const não

// condicionais exemplos

    let nota = 85;

    // Usando if e else para verificar se o aluno foi aprovado ou reprovado
    if (nota >= 60) {
        console.log("O aluno foi aprovado!");
    } else {
        console.log("O aluno foi reprovado.");
    }

    // Usando if, else if e else para determinar o nível de desempenho do aluno
    if (nota >= 90) {
        console.log("Desempenho: Excelente!");
    } else if (nota >= 70) {
        console.log("Desempenho: Bom!");
    } else if (nota >= 60) {
        console.log("Desempenho: Regular.");
    } else {
        console.log("Desempenho: Insuficiente.");
    }

    // Usando switch case para categorizar a nota em faixas
    let faixaDeNota;

    if (nota >= 90) {
        faixaDeNota = "A";
    } else if (nota >= 80) {
        faixaDeNota = "B";
    } else if (nota >= 70) {
        faixaDeNota = "C";
    } else if (nota >= 60) {
        faixaDeNota = "D";
    } else {
        faixaDeNota = "F";
    }

    switch (faixaDeNota) {
        case "A":
            console.log("Nota A: Parabéns! Você teve um excelente desempenho.");
            break;
        case "B":
            console.log("Nota B: Muito bom! Continue assim.");
            break;
        case "C":
            console.log("Nota C: Bom, mas pode melhorar.");
            break;
        case "D":
            console.log("Nota D: Regular, atenção para não cair de rendimento.");
            break;
        case "F":
            console.log("Nota F: Reprovado. É necessário mais esforço.");
            break;
        default:
            console.log("Nota inválida.");
    }

// Laços de repetição

    // Usando forEach para exibir os produtos no carrinho
        let carrinho = [
            { nome: "Camiseta", preco: 50 },
            { nome: "Calça", preco: 100 },
            { nome: "Tênis", preco: 200 },
            { nome: "Boné", preco: 30 }
        ];


        carrinho.forEach((produto) => {
            console.log(`Produto: ${produto.nome}, Preço: R$${produto.preco}`);
        });

    // Usando for para calcular o valor total do carrinho
        let total = 0;

        for (let i = 0; i < carrinho.length; i++) {
            total += carrinho[i].preco; // Soma o preço de cada item ao total
        }

        console.log(`Total do carrinho: R$${total}`);

    // Usando while para procurar um produto específico
        let encontrado = false;
        let index = 0;

        while (index < carrinho.length && !encontrado) {
            if (carrinho[index].nome === "Tênis") {
                console.log(`Produto encontrado: ${carrinho[index].nome}, Preço: R$${carrinho[index].preco}`);
                encontrado = true; // Define encontrado como verdadeiro e interrompe o laço
            }
            index++;
        }

        if (!encontrado) {
            console.log("Produto não encontrado.");
        }

    // Usando do...while para aplicar descontos até o total ficar abaixo do limite

        let limite = 300; // Valor limite para o total do carrinho
        let desconto = 0.1; // 10% de desconto aplicado a cada iteração
        let totalCarrinho = 400; // Total inicial do carrinho

        do {
            console.log(`Total antes do desconto: R$${totalCarrinho}`);
            totalCarrinho -= totalCarrinho * desconto; // Aplica 10% de desconto
            console.log(`Total com desconto: R$${totalCarrinho.toFixed(2)}`);
        } while (totalCarrinho > limite);

        console.log("Desconto suficiente aplicado para ficar abaixo do limite.");
