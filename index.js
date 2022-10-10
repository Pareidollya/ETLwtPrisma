
const relacional = require('./service/relacional-service')
const dw = require('./service/dw-service')

let a = async () =>{
    const cu = await relacional.alunos.findFirst()
    const xota = await dw.alunos.findFirst()
    console.log(cu)
    console.log(xota)
}


a()