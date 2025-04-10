type Tarefa = {
    descricao:  string;
    prioridade: number;
    concluida: boolean;
}

const tarefas : Tarefa [] = [
{ descricao : "Fazer relatório", prioridade : 2, concluida : false } ,
{ descricao : "Enviar e-mail", prioridade : 3 , concluida : false } ,
{ descricao : "Reunião com equipe", prioridade : 1 , concluida : false }
];

function imprimirTarefa ( descricao : string , indice : number , totalTarefas :
number ) : void {
    console.log ( `Tarefa concluída: ${ descricao }`) ;
    console.log ( `Progresso : ${indice + 1}/ ${ totalTarefas }`) ;
}


function executarTarefas(tarefas: Tarefa[], callback:(descricao: string, indice: number, total: number) => void, intervalo: number): void{
    tarefas.sort((a, b) => a.prioridade - b.prioridade);

    let indice = 0;

    const id = setInterval(() => {
        if (indice >= tarefas.length) {
            clearInterval(id);
            return;
        }

        const tarefa = tarefas[indice];
        const descricaoLimpa = tarefa.descricao.trim();

        if (descricaoLimpa === "Cancelar") {
            console.log("Execução interrompida por tarefa 'Cancelar'.");
            clearInterval(id);
            return;
        }

        tarefa.concluida = true;
        callback(descricaoLimpa, indice, tarefas.length);
        indice++;
    }, intervalo);
}

executarTarefas( tarefas , imprimirTarefa , 1500);