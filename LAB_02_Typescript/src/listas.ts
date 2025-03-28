let numbers: number[] = [1,23,4,567,89]

let nomes : string [] = ["Ana" , "João" , "Maria"];
let posJoao : number = nomes.indexOf("João")
console.log (posJoao)
nomes.splice (posJoao , posJoao)

console.log(nomes)

let idades : Array < number > = [20 , 30 , 40];

let misto : (number | string) [] = [1 , "dois" , 3 , "quatro"];

let fruits : string [] = ["Maçã","Banana"];
fruits.push("Laranja");
fruits.unshift("Uva");

fruits.pop();
fruits.shift();

console.log (fruits[0]); 
console.log (fruits.length);
