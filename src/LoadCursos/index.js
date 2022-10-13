const relacional = require('../../service/relacional-service')
const dw = require('../../service/dw-service')
const { cursos } = require('../../service/relacional-service')

module.exports = async () => {
    const clear = async () => {
        const a = await dw.cursos.deleteMany({})
        console.log('Tabela cursos - cleared')
    }
    const resultQueryDW = await dw.cursos.findMany({})
    //extract relacional
    const extrairCursos = await relacional.cursos.findMany({
        select: {
            cod_curso: true,
            nom_curso: true,
            cod_dpto: true
        },
    })

    const extrairDepartamentos = await relacional.departamentos.findMany({
        select: {
            cod_dpto: true,
            nome_dpto: true
        },
    })


    // clear()
    //load 

    extrairCursos.map((curso) => {
        const insert = async () => {
            const exists = resultQueryDW.find(({ cod_curso, nom_curso }) => cod_curso == curso.cod_curso && nom_curso == curso.nom_curso)

            if (exists == undefined || resultQueryDW.length == 0) {
                const getDpto = extrairDepartamentos.find(({ cod_dpto }) => cod_dpto == curso.cod_dpto)
                
                const insertCurso = await dw.cursos.create({
                    data: {
                        cod_curso: curso.cod_curso,
                        nom_curso: curso.nom_curso.replace('\n', ' '), //transform pois retorna > nom_dpto: 'Ciências\nda Computação'
                        nom_dpto: getDpto.nome_dpto.replace('\n', ' ') //transform pois retorna > nom_dpto: 'Dep. de\nHumanas'
                    }
                })
            }
        }
        insert()
    })
    console.log('Tabla Cursos - Loaded...')
}   