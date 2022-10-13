const relacional = require('../../service/relacional-service')
const dw = require('../../service/dw-service')

module.exports = async () => {
    const clear = async () => {
        const a = await dw.alunos.deleteMany({})
        console.log('Tabela alunos - cleared')
    }

    // clear()
    
    //extrair os alunos 
    const extractAlunos = await relacional.alunos.findMany({
        select:{
            mat_alu: true,
            cotista: true,
            cod_curso: true,
        }
    })
    // console.log(extractAlunos)

    //load Alunos
    const resultQueryDW = await dw.alunos.findMany({})
    // console.log(resultQueryDW)

    extractAlunos.map((aluno) => {
        const exists = resultQueryDW.find(({mat_alu}) => mat_alu == aluno.mat_alu)
        // console.log(exists)

        if(exists == undefined || resultQueryDW.length == 0) {
            const inserir = async () =>{
                const insert = await dw.alunos.create({
                    data:{
                        mat_alu: aluno.mat_alu,
                        cotista: aluno.cotista,
                        cod_curso: aluno.cod_curso
                    }
                })
            }
            inserir()
        } 
    })
    

   
    console.log('Tabla Alunos - Loaded...')
}

