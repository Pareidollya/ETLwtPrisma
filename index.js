

const relacional = require('./service/relacional-service')
const dw = require('./service/dw-service')

//imports
const gerarTempo = require('./src/GerarTempo')
const loadAlunos = require('./src/LoadAlunos')
const LoadCursos = require('./src/LoadCursos')
const LoadDisciplinas = require('./src/LoadDisciplinas')
const LoadFacts = require('./src/LoadFacts')

async function main (){

    //LOAD
    gerarTempo()  
    loadAlunos()
    LoadCursos()
    LoadDisciplinas()

    LoadFacts()

    
    //selects
    const resultQueryDW = await dw.ft_matriculas.findMany({})
    console.log(resultQueryDW)

    const querySelect = await relacional.matriculas.findFirst({
        where: {
            mat_alu:  100,
          },
    })
    // console.log(querySelect)
}


main()