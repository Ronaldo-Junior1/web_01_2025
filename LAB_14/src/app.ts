import express, {Request, Response} from "express"
import { Jogador } from "./Jogador"

const jogadores: Jogador[] = []
const app = express()
const PORT = process.env.PORT ?? 3000

app.use(express.json())

function todosJogadores(req: Request, res: Response): void {
    res.status(200).json(jogadores)
}

function filtrarPorId(req: Request, res: Response):void{
    try {
        const id = req.params.id;

        const jogador = jogadores.find(j => j.id === id);

        if (!jogador) {
            res.status(404).json({ message: "Jogador não encontrado" });
        }

        res.status(200).json(jogador);
    } catch (e: unknown) {
        res.status(400).json({ message: "Necessário informar ID válido" });
    }
}

function novoJogador(req: Request, res : Response):void{
    try{
        let data : any = req.body

        if(!data.id || !data.nome || !data.cpf || !data.email || !data.telefone || !data.posicao ){
            throw new Error("Jogador requer id,nome,cpf,email, telefone e posição")
        }

        const jogador = new Jogador(data.id,data.nome,data.cpf,data.email,data.telefone,data.posicao)
        jogadores.push(jogador)
        res.status(200).json(jogador)
    }catch(e: unknown){
        res.status(400).json({message: (e as Error).message})
    }
}


function editarJogador(req:Request, res: Response):void{
    try {
        const id = req.params.id;
        const data: any = req.body;

        const index = jogadores.findIndex(j => j.id === id);

        if (index === -1) {
            res.status(404).json({ message: "Jogador não encontrado" });
        }

        if (!data.nome || !data.cpf || !data.email || !data.telefone || !data.posicao) {
            res.status(400).json({ message: "Todos os campos são obrigatórios: nome, cpf, email, telefone, posicao" });
        }

        jogadores[index] = {
            id: id,
            nome: data.nome,
            cpf: data.cpf,
            email: data.email,
            telefone: data.telefone,
            posicao: data.posicao
        };

        res.status(200).json(jogadores[index]);
    } catch (e: unknown) {
        res.status(400).json({ message: "Erro ao editar jogador" });
    }
}

app.get('/api/jogador/:id', filtrarPorId)
app.get('/api/jogadores',todosJogadores)
app.put('/api/jogador/:id',editarJogador)
app.post('/api/jogador', novoJogador)
app.listen(PORT, ()=> console.log(`API em execução no URL: http://localhost:${PORT}`))