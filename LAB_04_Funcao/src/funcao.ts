function mensagem(f:string):string{
    return f;
}

function soma(a: number, b:number):void{
    console.log(a + b);
}

function saudacao(nome:string = "visitante"):String{
    return `Ola, ${nome}!`
}

function multiplicar(a:number, b?:number):number{
    return b !== undefined ? a * b : a;
}