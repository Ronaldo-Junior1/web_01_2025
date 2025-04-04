const mensagem1 = (f: string): string => f;

const soma1 = (a:number,b:number):void =>console.log(a+b);

const saudacao1 = (nome:string = "visitante"):string => `Olá ${nome}`;

const multiplicar1 = (a:number, b?:number): number => b !== undefined ? a*b : a;