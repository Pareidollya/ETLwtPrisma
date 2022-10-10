
const relacional = require('./service/relacional-service')
const dw = require('./service/dw-service')

let main = async () =>{
    
    // insert into DEPARTAMENTOS (COD_DPTO, NOME_DPTO) values (111, 'Dep. de Exatas');
    // const dep = await relacional.departamentos.create({
    //     data:{
    //         cod_dpto: 114,
    //         nome_dpto:'Test insert com prisma'
    //     }
    // })
    
    // const insert = await relacional.alunos.create({
    //     data:{
    //         mat_alu: 205,
    //         nome: 'Test insert com prisma',
    //         dat_entrada: '2020-02-02T00:00:00.000Z',
    //         cod_curso: 22,
    //         cotista: 's'
    //     }
    // })

    // const queryInsert = await relacional.matriculas.create({
    //     data:{
    //         semestre: 1,
    //         mat_alu: 205,
    //         cod_disc: 1301,
    //         nota: 10,
    //         faltas: 0,
    //         status:'A'
    //     }
    // })

    const querySelect = await relacional.matriculas.findMany()
    console.log(querySelect)
}


main()