const relacional = require('../../service/relacional-service')
const dw = require('../../service/dw-service')

module.exports = async () => {
    const clear = async () => {
        const a = await dw.tempo.deleteMany({})
        console.log('Tabela tampo - cleared')
    }
    
    // console.log(resultQuery)
    // clear()

    const resultQuery = await dw.tempo.findMany({})

    for (let year = 2000; year <= 2025; year++) { //inserir anos
        const exists = resultQuery.find(({ ano }) => ano === year); //verificar se o ano existe

        if(exists == undefined){ //caso nao exista o ano na tabela, ele será adicionado
            
            for (let sem = 1; sem <= 2; sem++) { //inserir ano e semestres
                const insert = await dw.tempo.create({
                    data: {
                        ano: year,
                        semestre: sem,
                    },
                })
            }
        }
    }
    console.log('Tabla tempo - Loaded...')
}

