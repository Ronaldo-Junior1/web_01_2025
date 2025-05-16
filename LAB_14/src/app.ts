import express, {Request, Response} from "express"

const app = express()
const PORT = process.env.PORT ?? 3000
app.use(express.json())

function helloWorld(req: Request, res: Response): void{
    res.status(200).send('Hello World!!!')
}

function filtrarProdutoPorId(req: Request, res: Response):void{
    try{
        let id = req.params.id
        res.status(200).json(
            {
                ID: id
            }
        )
    }catch(e: unknown){
        res.status(400).json(
            {
                Message: "Necessário informar ID"
            }
    )
    }
}

app.get('/api/hello', helloWorld)

app.listen(PORT, ()=> console.log(`API em execução no URL: http://localhost:${PORT}`))