const relacional = require('../../service/relacional-service')
const dw = require('../../service/dw-service')

module.exports = async () => {
    const clear = async () => {
        const a = await dw.disciplinas.deleteMany({})
        console.log('Tabela disciplinas - cleared')
    }

    //extract
    const resultQueryDW = await dw.disciplinas.findMany({})
    const extractDisciplinas = await relacional.disciplinas.findMany({
        select:{
            cod_disc: true,
            nome_disc: true,
            carga_horaria: true,
        }
    })

    extractDisciplinas.map((disciplina) =>{
        const exists = resultQueryDW.find(({cod_disc}) => cod_disc == disciplina.cod_disc)

        if(exists == undefined || resultQueryDW.length == 0) {
            const inserir = async () =>{
                const insert = await dw.disciplinas.create({
                    data:{
                        cod_disc: disciplina.cod_disc,
                        nome_disc: disciplina.nome_disc,
                        horas: disciplina.carga_horaria
                    }
                })
            }
            inserir()
        }
    })
    console.log('Tabela disciplinas - Loaded...')
}