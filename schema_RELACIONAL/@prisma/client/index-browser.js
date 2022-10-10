
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.4.0
 * Query Engine version: 2452cc6313d52b8b9a96999ac0e974d0aedf88db
 */
Prisma.prismaVersion = {
  client: "4.4.0",
  engine: "2452cc6313d52b8b9a96999ac0e974d0aedf88db"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AlunosScalarFieldEnum = makeEnum({
  mat_alu: 'mat_alu',
  nome: 'nome',
  dat_entrada: 'dat_entrada',
  cod_curso: 'cod_curso',
  cotista: 'cotista'
});

exports.Prisma.CursosScalarFieldEnum = makeEnum({
  cod_curso: 'cod_curso',
  nom_curso: 'nom_curso',
  cod_dpto: 'cod_dpto'
});

exports.Prisma.DepartamentosScalarFieldEnum = makeEnum({
  cod_dpto: 'cod_dpto',
  nome_dpto: 'nome_dpto'
});

exports.Prisma.DisciplinasScalarFieldEnum = makeEnum({
  cod_disc: 'cod_disc',
  nome_disc: 'nome_disc',
  carga_horaria: 'carga_horaria'
});

exports.Prisma.MatriculasScalarFieldEnum = makeEnum({
  semestre: 'semestre',
  mat_alu: 'mat_alu',
  cod_disc: 'cod_disc',
  nota: 'nota',
  faltas: 'faltas',
  status: 'status'
});

exports.Prisma.Matrizes_cursosScalarFieldEnum = makeEnum({
  cod_curso: 'cod_curso',
  cod_disc: 'cod_disc',
  periodo: 'periodo'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TestScalarFieldEnum = makeEnum({
  test_id: 'test_id',
  test: 'test'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  test: 'test',
  alunos: 'alunos',
  cursos: 'cursos',
  departamentos: 'departamentos',
  disciplinas: 'disciplinas',
  matriculas: 'matriculas',
  matrizes_cursos: 'matrizes_cursos'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
