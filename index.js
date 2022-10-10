const { PrismaClientValidationError } = require('@prisma/client/runtime')

const relacional = require('./service/relacional-service')
const dw = require('./service/dw-service')

let a = await relacional.alunos.findFirst({})
console.log(a)