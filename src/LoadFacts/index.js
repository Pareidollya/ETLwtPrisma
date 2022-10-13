const relacional = require('../../service/relacional-service')
const dw = require('../../service/dw-service')
const { matriculas } = require('../../service/relacional-service')

module.exports = async () => {
    const clear = async () => {
        const a = await dw.matriculas.deleteMany({})
        console.log('Tabela matriculas - cleared')
    }

    //extracts
    const resultQueryDW = await dw.ft_matriculas.findMany({})
    const extractMatriculas = await relacional.matriculas.findMany({
        select:{
            semestre: true,
            mat_alu: true,
            cod_disc: true,
            nota: true,
            faltas: true,
            status: true,
            
        }
    })
    // const extractAlunosDW = await dw.alunos.findMany({})
    
    // const extractDisciplinasDW = await dw.disciplinas.findMany({})
    // const extractCursosDW = await dw.cursos.findMany({})
    
    //transform - adicionar tempo em alunos dw
    //irá retornar o id de data
    const getDateAluno = async (ano, semestre) =>{
        if(semestre < 1) semestre = 1
        else if(semestre > 2)  semestre = 2

        const data = await dw.tempo.findFirst({
            where:{
                ano: ano,
                semestre: semestre,
            }
        })
        return data.id_data
    }

    extractMatriculas.map((matricula) =>{
        const exists = resultQueryDW.find(({id_data, id_alu, id_disc, id_curso}) => id_data == matricula.id_data
                                                                                 && id_alu == matricula.id_alu 
                                                                                 && id_disc == matricula.id_disc
                                                                                 && id_curso == matricula.id_curso);

        if(exists == undefined || resultQueryDW.length == 0) {
            
            
            const inserir = async () =>{

                //extracts
                const alunoDW = await dw.alunos.findFirst({
                    where:{
                        mat_alu: matricula.mat_alu
                    }
                })
                    const alunoRel = await relacional.alunos.findFirst({ //para retornar a data
                        where:{
                            mat_alu: matricula.mat_alu
                        }
                    })
                    const dataID = await getDateAluno(alunoRel.dat_entrada.getFullYear(), matricula.semestre)

                const cursoDW = await dw.cursos.findFirst({
                    where:{
                        cod_curso: alunoDW.cod_curso
                    }
                })

                const disciplinaDW = await dw.disciplinas.findFirst({
                    where: {
                        cod_disc: matricula.cod_disc
                    }
                })
                
                //insert
                const insert = await dw.ft_matriculas.create({
                    data:{
                        id_alu: alunoDW.id_alu,
                        id_data: dataID,
                        id_curso: cursoDW.id_curso,
                        id_disc: disciplinaDW.id_disc,

                        nota: matricula.nota,
                        faltas: matricula.faltas,
                        status: matricula.status,
                        cotista: alunoRel.cotista,

                    }
                })

                // console.log(data)
                
            }
            inserir()
        }
    })
    console.log('Tabela matriculas - Loaded...')
}