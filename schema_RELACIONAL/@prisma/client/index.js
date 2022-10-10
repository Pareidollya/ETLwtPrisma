
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const { findSync } = require('./runtime')
const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "schema_RELACIONAL\\@prisma\\client",
    "@prisma\\client",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"test\",\"dbName\":null,\"fields\":[{\"name\":\"test_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"test\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"alunos\",\"dbName\":null,\"fields\":[{\"name\":\"mat_alu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"dat_entrada\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cod_curso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cotista\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cursos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cursos\",\"relationName\":\"alunosTocursos\",\"relationFromFields\":[\"cod_curso\"],\"relationToFields\":[\"cod_curso\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matriculas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"matriculas\",\"relationName\":\"alunosTomatriculas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"cursos\",\"dbName\":null,\"fields\":[{\"name\":\"cod_curso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nom_curso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cod_dpto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"departamentos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"departamentos\",\"relationName\":\"cursosTodepartamentos\",\"relationFromFields\":[\"cod_dpto\"],\"relationToFields\":[\"cod_dpto\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alunos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"alunos\",\"relationName\":\"alunosTocursos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matrizes_cursos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"matrizes_cursos\",\"relationName\":\"cursosTomatrizes_cursos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"departamentos\",\"dbName\":null,\"fields\":[{\"name\":\"cod_dpto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_dpto\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cursos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cursos\",\"relationName\":\"cursosTodepartamentos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"disciplinas\",\"dbName\":null,\"fields\":[{\"name\":\"cod_disc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nome_disc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"carga_horaria\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matriculas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"matriculas\",\"relationName\":\"disciplinasTomatriculas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"matrizes_cursos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"matrizes_cursos\",\"relationName\":\"disciplinasTomatrizes_cursos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"matriculas\",\"dbName\":null,\"fields\":[{\"name\":\"semestre\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"mat_alu\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cod_disc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"nota\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"faltas\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"status\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"alunos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"alunos\",\"relationName\":\"alunosTomatriculas\",\"relationFromFields\":[\"mat_alu\"],\"relationToFields\":[\"mat_alu\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disciplinas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"disciplinas\",\"relationName\":\"disciplinasTomatriculas\",\"relationFromFields\":[\"cod_disc\"],\"relationToFields\":[\"cod_disc\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"mat_alu\",\"semestre\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"matrizes_cursos\",\"dbName\":null,\"fields\":[{\"name\":\"cod_curso\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cod_disc\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"periodo\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"cursos\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"cursos\",\"relationName\":\"cursosTomatrizes_cursos\",\"relationFromFields\":[\"cod_curso\"],\"relationToFields\":[\"cod_curso\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"disciplinas\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"disciplinas\",\"relationName\":\"disciplinasTomatrizes_cursos\",\"relationFromFields\":[\"cod_disc\"],\"relationToFields\":[\"cod_disc\"],\"relationOnDelete\":\"NoAction\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"cod_curso\",\"cod_disc\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"test\",\"plural\":\"tests\",\"findUnique\":\"findUniquetest\",\"findFirst\":\"findFirsttest\",\"findMany\":\"findManytest\",\"create\":\"createOnetest\",\"createMany\":\"createManytest\",\"delete\":\"deleteOnetest\",\"update\":\"updateOnetest\",\"deleteMany\":\"deleteManytest\",\"updateMany\":\"updateManytest\",\"upsert\":\"upsertOnetest\",\"aggregate\":\"aggregatetest\",\"groupBy\":\"groupBytest\"},{\"model\":\"alunos\",\"plural\":\"alunos\",\"findUnique\":\"findUniquealunos\",\"findFirst\":\"findFirstalunos\",\"findMany\":\"findManyalunos\",\"create\":\"createOnealunos\",\"createMany\":\"createManyalunos\",\"delete\":\"deleteOnealunos\",\"update\":\"updateOnealunos\",\"deleteMany\":\"deleteManyalunos\",\"updateMany\":\"updateManyalunos\",\"upsert\":\"upsertOnealunos\",\"aggregate\":\"aggregatealunos\",\"groupBy\":\"groupByalunos\"},{\"model\":\"cursos\",\"plural\":\"cursos\",\"findUnique\":\"findUniquecursos\",\"findFirst\":\"findFirstcursos\",\"findMany\":\"findManycursos\",\"create\":\"createOnecursos\",\"createMany\":\"createManycursos\",\"delete\":\"deleteOnecursos\",\"update\":\"updateOnecursos\",\"deleteMany\":\"deleteManycursos\",\"updateMany\":\"updateManycursos\",\"upsert\":\"upsertOnecursos\",\"aggregate\":\"aggregatecursos\",\"groupBy\":\"groupBycursos\"},{\"model\":\"departamentos\",\"plural\":\"departamentos\",\"findUnique\":\"findUniquedepartamentos\",\"findFirst\":\"findFirstdepartamentos\",\"findMany\":\"findManydepartamentos\",\"create\":\"createOnedepartamentos\",\"createMany\":\"createManydepartamentos\",\"delete\":\"deleteOnedepartamentos\",\"update\":\"updateOnedepartamentos\",\"deleteMany\":\"deleteManydepartamentos\",\"updateMany\":\"updateManydepartamentos\",\"upsert\":\"upsertOnedepartamentos\",\"aggregate\":\"aggregatedepartamentos\",\"groupBy\":\"groupBydepartamentos\"},{\"model\":\"disciplinas\",\"plural\":\"disciplinas\",\"findUnique\":\"findUniquedisciplinas\",\"findFirst\":\"findFirstdisciplinas\",\"findMany\":\"findManydisciplinas\",\"create\":\"createOnedisciplinas\",\"createMany\":\"createManydisciplinas\",\"delete\":\"deleteOnedisciplinas\",\"update\":\"updateOnedisciplinas\",\"deleteMany\":\"deleteManydisciplinas\",\"updateMany\":\"updateManydisciplinas\",\"upsert\":\"upsertOnedisciplinas\",\"aggregate\":\"aggregatedisciplinas\",\"groupBy\":\"groupBydisciplinas\"},{\"model\":\"matriculas\",\"plural\":\"matriculas\",\"findUnique\":\"findUniquematriculas\",\"findFirst\":\"findFirstmatriculas\",\"findMany\":\"findManymatriculas\",\"create\":\"createOnematriculas\",\"createMany\":\"createManymatriculas\",\"delete\":\"deleteOnematriculas\",\"update\":\"updateOnematriculas\",\"deleteMany\":\"deleteManymatriculas\",\"updateMany\":\"updateManymatriculas\",\"upsert\":\"upsertOnematriculas\",\"aggregate\":\"aggregatematriculas\",\"groupBy\":\"groupBymatriculas\"},{\"model\":\"matrizes_cursos\",\"plural\":\"matrizes_cursos\",\"findUnique\":\"findUniquematrizes_cursos\",\"findFirst\":\"findFirstmatrizes_cursos\",\"findMany\":\"findManymatrizes_cursos\",\"create\":\"createOnematrizes_cursos\",\"createMany\":\"createManymatrizes_cursos\",\"delete\":\"deleteOnematrizes_cursos\",\"update\":\"updateOnematrizes_cursos\",\"deleteMany\":\"deleteManymatrizes_cursos\",\"updateMany\":\"updateManymatrizes_cursos\",\"upsert\":\"upsertOnematrizes_cursos\",\"aggregate\":\"aggregatematrizes_cursos\",\"groupBy\":\"groupBymatrizes_cursos\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\GIT\\ETLwtPrisma\\schema_RELACIONAL\\@prisma\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "..\\..\\..\\.env",
    "schemaEnvPath": "..\\..\\..\\.env"
  },
  "relativePath": "..\\..",
  "clientVersion": "4.4.0",
  "engineVersion": "2452cc6313d52b8b9a96999ac0e974d0aedf88db",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql"
}
config.document = dmmf
config.dirname = dirname




const { warnEnvConflicts } = require('./runtime/index')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "schema_RELACIONAL\\@prisma\\client\\query_engine-windows.dll.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "schema_RELACIONAL\\@prisma\\client\\schema.prisma")
