

const relacional = require('./service/relacional-service')
const dw = require('./service/dw-service')

//imports
const gerarTempo = require('./src/GerarTempo')
const loadAlunos = require('./src/LoadAlunos')
const LoadCursos = require('./src/LoadCursos')
const LoadDisciplinas = require('./src/LoadDisciplinas')
const LoadFacts = require('./src/LoadFacts')

async function main (){
    //CLEAR
    const clear = async () => {
        const matriculas = await dw.ft_matriculas.deleteMany({})
        const alunos = await dw.alunos.deleteMany({})
        const tempo = await dw.tempo.deleteMany({})
        const cursos = await dw.cursos.deleteMany({})
        const disciplinas = await dw.disciplinas.deleteMany({})
        
    }

    // clear()
    //LOAD
    await gerarTempo()  
    await loadAlunos()
    await LoadCursos()
    await LoadDisciplinas()

    await LoadFacts()

    
    //selects
    const resultQueryDW = await dw.ft_matriculas.findMany({})
    // console.log(resultQueryDW)

    const querySelect = await relacional.matriculas.findFirst({
        where: {
            mat_alu:  100,
          },
    })
    // console.log(querySelect)


}
main()

// TRUNCATE TABLE alunos CASCADE
// TRUNCATE TABLE cursos CASCADE
// TRUNCATE TABLE disciplinas cascade
// TRUNCATE TABLE tempo cascade
// TRUNCATE TABLE ft_matriculas cascade

// select * from ft_matriculas
// select * from alunos
// select * from tempo
// select * from cursos
// select * from disciplinas