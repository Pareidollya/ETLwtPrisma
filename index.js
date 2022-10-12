

const relacional = require('./service/relacional-service')
const dw = require('./service/dw-service')


async function main (){
    const gerarTempo = require('./src/GerarTempo')
    const loadAlunos = require('./src/LoadAlunos')

    //LOAD
    gerarTempo()  
    loadAlunos()

    const querySelect = await relacional.matriculas.findFirst({
        where: {
            mat_alu:  100,
          },
    })
    // console.log(querySelect)
}


main()