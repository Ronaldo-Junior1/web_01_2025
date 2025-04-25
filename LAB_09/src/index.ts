class Calculadora {
    PI: number = 3.14159;
    
    somar(a: number, b: number): number;
    somar(a: number, b: string): string;
    somar(a: string, b: string): string;
    
    somar(a: any, b: any): any {
        if(typeof a == 'number' && typeof b == 'number'){
            return a+b;
        }

        return a.toString() + b.toString();
    }
}

const calc = new Calculadora();

console.log(calc.somar(2,2))
console.log(calc.somar('IF','SP'))