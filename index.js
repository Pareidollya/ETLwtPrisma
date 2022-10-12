

const relacional = require('./service/relacional-service')
const dw = require('./service/dw-service')
const { GerarTempo } = require('./src/GerarTempo')


let main = async () =>{
    const gerarTempo = require('./src/GerarTempo')
    gerarTempo()  

    const querySelect = await relacional.matriculas.findFirst({
        where: {
            mat_alu:  100,
          },
    })
    // console.log(querySelect)
}


main()