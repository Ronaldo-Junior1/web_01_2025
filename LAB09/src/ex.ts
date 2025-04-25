class Exercicio{
    static compararStrings(a:string,b:string) : boolean{
        if(a.trim().toUpperCase() == b.trim().toUpperCase()){
            return true;
        }
        return false;
    }
    

    static formatar(a: any): any{

        if(typeof a == 'boolean'){
            if(a){
                return 'Verdadeiro'
            }
            else{
                return 'Falso'
            }
        }
        else if(typeof a == 'number'){
            return a.toFixed(2)
        }
        const dia = a.getDate().toString().padStart(2,'0');
        const mes = a.getMonth().toString().padStart(2,'0');
        const ano = a.getFullYear().toString();
        return `${dia}/${mes}/${ano}`;
        
    }
}


console.log(Exercicio.compararStrings (" camelCase ", "camelo"));
console.log(Exercicio.formatar(10.23567));
console.log(Exercicio.formatar(new Date(2023,11,12)));