// let numeros = [1,2,3,4,5,6,7,8];

// let pares = numeros.filter(n=> n % 2 === 0)

// console.log(pares);

// let valores = [10 , 25 , 30 , 45 , 50];

// let maioresQue30 = valores.filter(n => n > 30);
// console.log(maioresQue30)

// let palavras = ["sol","chuva","trovão","tempestade","vento"];

// let longas = palavras.filter(p=> p.length > 5);

// console.log(longas);

// type Pessoa1 = {
//     nome : string ;
//     idade : number ;
// };

// const pessoas1 : Pessoa1 [] = [
//     { nome : " Ana", idade : 30 } ,
//     { nome : "João", idade : 20 } ,
//     { nome : " Maria ", idade : 25 } ,
//     { nome : " Carlos ", idade : 15 }
// ];

// let maioresDeIdade = pessoas1.filter(pe => pe.idade >= 18)

// console.log(maioresDeIdade)
    
// type Produto1 = {
//     nome : string ;
//     estoque : number ;
// };
    
//     let produtos1 : Produto1 [] = [
//     { nome : " Camiseta ", estoque : 5 } ,
//     { nome : " Calça", estoque : 0 } ,
//     { nome : "Tênis", estoque : 2 } ,
//     { nome : " Boné", estoque : 0 }
// ];


// let disponiveis = produtos1.filter(prod => prod.estoque > 0);
// console.log(disponiveis)

// let nomes = ["Ana", "João", "Maria", "Carlos", "Amanda"];

// let comA = nomes.filter(names => names.startsWith("A"));
// console.log(comA)

// let valores = [10,null,25,undefined,40,null ];

// let filtrados = valores.filter(val => val !== null && val !==undefined);
// console.log(filtrados)

let palavras = ["javascript", "typescript", "java", "python", "csharp"];

let comJava = palavras.filter( p => p.includes("java"))

console.log(comJava)