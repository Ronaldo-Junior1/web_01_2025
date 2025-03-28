//Exercicio 1
let idade2: number[] = [10,15,20,8,17,25];
for(let i = 0; i<idade2.length; i++){
    if(idade2[i] >= 12 && idade2[i]<18){
        console.log(`Idade: ${idade2[i]} || Adolescente`);
    }
    else if(idade2[i] >=18){
        console.log(`Idade: ${idade2[i]} || Adulto`);
    }
    else{
        console.log(`Idade: ${idade2[i]} || Criança`);
    }
}

//Exercicio 2
let nomes2: string[] = ["Carlos","Ana","Pedro","Mariana"];
let posPedro : number = nomes2.indexOf("Pedro");
nomes2.splice(posPedro,posPedro);
nomes2.push("João");
nomes2.unshift("Beatriz");

console.log(nomes2);
console.log(`O total de nomes é ${nomes2.length}`);

//Exericio 3
let listaMista : (number | string) [] = [1 , "Maça" , 2 , "Banana", 3 ,"Laranja"];
let numeros3: number[] = [];
let frutas: string[] = [];

for (let i = 0; i < listaMista.length; i++) {
    if (typeof listaMista[i] === 'number') {
      numeros3.push(listaMista[i] as number);
    } else if (typeof listaMista[i] === 'string') {
      frutas.push(listaMista[i] as string);
    }
}

console.log("Números:", numeros3);
console.log("Frutas:", frutas);