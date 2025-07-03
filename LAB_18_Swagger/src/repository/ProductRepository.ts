import { executarComandoSQL } from "../database/mysql";
import { Product } from "../model/Product";

export class ProductRepository{
    private static instance: ProductRepository;

    private constructor(){
        this.createTable()
    }

    static getInstance(){
        if(!this.instance){
            this.instance = new ProductRepository()
        }
        return this.instance
    }

    private async createTable() {
        const query = `CREATE TABLE IF NOT EXISTS Vendas.Product (
                            id INT AUTO_INCREMENT PRIMARY KEY, 
                            name VARCHAR(255) NOT NULL, 
                            price DECIMAL(10,2) NOT NULL
                        )`
        try {
            const resultado = await executarComandoSQL(query, []);
            console.log('Tabela Product criada com sucesso:', resultado);
        } catch (err) {
            console.error('Erro ao executar a query:', err);
        }
    }

    async insertProduct(name: string, price: number): Promise<Product>{
            const resultado = await executarComandoSQL(
                "INSERT INTO vendas.Product (name, price) VALUES (?, ?)",
                [name, price]
            );
            const newProduct = new Product(resultado.insertId, name, price)
            console.log('Produto inserido com sucesso:', newProduct);
            return newProduct
    }
    
}