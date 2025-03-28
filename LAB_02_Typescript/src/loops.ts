
for(let i = 0; i < 5; i++){
    console.log(`Iteração ${i}`);
}

let contador = 0;
while(contador < 5){
    console.log(`Iteração ${contador}`);
    contador++;
}


let num = 5;
do{
    console.log(`Número: ${num}`);
    num++;
}while(num<5);


const numeros = [10,20,30,40];

for(const num of numeros){
    console.log(`Número: ${num}`);
}


const pessoa = {nome: "Alice", Idade: 24, cidade:"Itapeva"};
for(const chave in pessoa){
    
}