const relacional = require('../../service/relacional-service')
const dw = require('../../service/dw-service')

export default async function GerarTempo(){
    //função para carregar na tabela tempo
    for (let ano = 2000; ano < 2023; ano++) { //inserir anos
        for (let sem = 0  ; sem < 2; sem++){ //inserir semestres do ano 
            const exist = await dw.tempo.findUnique({
                where: {
                    ano: i,
                    semestre: sem
                }
            })
            
            
        }
    }
}