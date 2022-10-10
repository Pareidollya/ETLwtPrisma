
/**
 * Client
**/

import * as runtime from './runtime/index';
declare const prisma: unique symbol
export type PrismaPromise<A> = Promise<A> & {[prisma]: true}
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};


/**
 * Model test
 * 
 */
export type test = {
  test_id: number
  test: number
}

/**
 * Model alunos
 * 
 */
export type alunos = {
  mat_alu: number
  nome: string
  dat_entrada: Date
  cod_curso: number
  cotista: string
}

/**
 * Model cursos
 * 
 */
export type cursos = {
  cod_curso: number
  nom_curso: string
  cod_dpto: number
}

/**
 * Model departamentos
 * 
 */
export type departamentos = {
  cod_dpto: number
  nome_dpto: string
}

/**
 * Model disciplinas
 * 
 */
export type disciplinas = {
  cod_disc: number
  nome_disc: string
  carga_horaria: number
}

/**
 * Model matriculas
 * 
 */
export type matriculas = {
  semestre: number
  mat_alu: number
  cod_disc: number
  nota: number | null
  faltas: number | null
  status: string | null
}

/**
 * Model matrizes_cursos
 * 
 */
export type matrizes_cursos = {
  cod_curso: number
  cod_disc: number
  periodo: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tests
 * const tests = await prisma.test.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
      /**
       * @private
       */
      private fetcher;
      /**
       * @private
       */
      private readonly dmmf;
      /**
       * @private
       */
      private connectionPromise?;
      /**
       * @private
       */
      private disconnectionPromise?;
      /**
       * @private
       */
      private readonly engineConfig;
      /**
       * @private
       */
      private readonly measurePerformance;

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tests
   * const tests = await prisma.test.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>;

      /**
   * `prisma.test`: Exposes CRUD operations for the **test** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tests
    * const tests = await prisma.test.findMany()
    * ```
    */
  get test(): Prisma.testDelegate<GlobalReject>;

  /**
   * `prisma.alunos`: Exposes CRUD operations for the **alunos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.alunos.findMany()
    * ```
    */
  get alunos(): Prisma.alunosDelegate<GlobalReject>;

  /**
   * `prisma.cursos`: Exposes CRUD operations for the **cursos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cursos
    * const cursos = await prisma.cursos.findMany()
    * ```
    */
  get cursos(): Prisma.cursosDelegate<GlobalReject>;

  /**
   * `prisma.departamentos`: Exposes CRUD operations for the **departamentos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departamentos
    * const departamentos = await prisma.departamentos.findMany()
    * ```
    */
  get departamentos(): Prisma.departamentosDelegate<GlobalReject>;

  /**
   * `prisma.disciplinas`: Exposes CRUD operations for the **disciplinas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Disciplinas
    * const disciplinas = await prisma.disciplinas.findMany()
    * ```
    */
  get disciplinas(): Prisma.disciplinasDelegate<GlobalReject>;

  /**
   * `prisma.matriculas`: Exposes CRUD operations for the **matriculas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matriculas
    * const matriculas = await prisma.matriculas.findMany()
    * ```
    */
  get matriculas(): Prisma.matriculasDelegate<GlobalReject>;

  /**
   * `prisma.matrizes_cursos`: Exposes CRUD operations for the **matrizes_cursos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Matrizes_cursos
    * const matrizes_cursos = await prisma.matrizes_cursos.findMany()
    * ```
    */
  get matrizes_cursos(): Prisma.matrizes_cursosDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export import Metrics = runtime.Metrics
  export import Metric = runtime.Metric
  export import MetricHistogram = runtime.MetricHistogram
  export import MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
   * Prisma Client JS version: 4.4.0
   * Query Engine version: 2452cc6313d52b8b9a96999ac0e974d0aedf88db
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = {
    [key in keyof T]: T[key] extends false | undefined | null ? never : key
  }[keyof T]

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Exact<A, W = unknown> = 
  W extends unknown ? A extends Narrowable ? Cast<A, W> : Cast<
  {[K in keyof A]: K extends keyof W ? Exact<A[K], W[K]> : never},
  {[K in keyof W]: K extends keyof A ? Exact<A[K], W[K]> : W[K]}>
  : never;

  type Narrowable = string | number | boolean | bigint;

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: Exact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export import FieldRef = runtime.FieldRef

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>

  class PrismaClientFetcher {
    private readonly prisma;
    private readonly debug;
    private readonly hooks?;
    constructor(prisma: PrismaClient<any, any>, debug?: boolean, hooks?: Hooks | undefined);
    request<T>(document: any, dataPath?: string[], rootField?: string, typeName?: string, isList?: boolean, callsite?: string): Promise<T>;
    sanitizeMessage(message: string): string;
    protected unpack(document: any, data: any, path: string[], rootField?: string, isList?: boolean): any;
  }

  export const ModelName: {
    test: 'test',
    alunos: 'alunos',
    cursos: 'cursos',
    departamentos: 'departamentos',
    disciplinas: 'disciplinas',
    matriculas: 'matriculas',
    matrizes_cursos: 'matrizes_cursos'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  export type Hooks = {
    beforeRequest?: (options: { query: string, path: string[], rootField?: string, typeName?: string, document: any }) => any
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed in to the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AlunosCountOutputType
   */


  export type AlunosCountOutputType = {
    matriculas: number
  }

  export type AlunosCountOutputTypeSelect = {
    matriculas?: boolean
  }

  export type AlunosCountOutputTypeGetPayload<
    S extends boolean | null | undefined | AlunosCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? AlunosCountOutputType
    : S extends undefined
    ? never
    : S extends AlunosCountOutputTypeArgs
    ?'include' extends U
    ? AlunosCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof AlunosCountOutputType ? AlunosCountOutputType[P] : never
  } 
    : AlunosCountOutputType
  : AlunosCountOutputType




  // Custom InputTypes

  /**
   * AlunosCountOutputType without action
   */
  export type AlunosCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AlunosCountOutputType
     * 
    **/
    select?: AlunosCountOutputTypeSelect | null
  }



  /**
   * Count Type CursosCountOutputType
   */


  export type CursosCountOutputType = {
    alunos: number
    matrizes_cursos: number
  }

  export type CursosCountOutputTypeSelect = {
    alunos?: boolean
    matrizes_cursos?: boolean
  }

  export type CursosCountOutputTypeGetPayload<
    S extends boolean | null | undefined | CursosCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? CursosCountOutputType
    : S extends undefined
    ? never
    : S extends CursosCountOutputTypeArgs
    ?'include' extends U
    ? CursosCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof CursosCountOutputType ? CursosCountOutputType[P] : never
  } 
    : CursosCountOutputType
  : CursosCountOutputType




  // Custom InputTypes

  /**
   * CursosCountOutputType without action
   */
  export type CursosCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the CursosCountOutputType
     * 
    **/
    select?: CursosCountOutputTypeSelect | null
  }



  /**
   * Count Type DepartamentosCountOutputType
   */


  export type DepartamentosCountOutputType = {
    cursos: number
  }

  export type DepartamentosCountOutputTypeSelect = {
    cursos?: boolean
  }

  export type DepartamentosCountOutputTypeGetPayload<
    S extends boolean | null | undefined | DepartamentosCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? DepartamentosCountOutputType
    : S extends undefined
    ? never
    : S extends DepartamentosCountOutputTypeArgs
    ?'include' extends U
    ? DepartamentosCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof DepartamentosCountOutputType ? DepartamentosCountOutputType[P] : never
  } 
    : DepartamentosCountOutputType
  : DepartamentosCountOutputType




  // Custom InputTypes

  /**
   * DepartamentosCountOutputType without action
   */
  export type DepartamentosCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DepartamentosCountOutputType
     * 
    **/
    select?: DepartamentosCountOutputTypeSelect | null
  }



  /**
   * Count Type DisciplinasCountOutputType
   */


  export type DisciplinasCountOutputType = {
    matriculas: number
    matrizes_cursos: number
  }

  export type DisciplinasCountOutputTypeSelect = {
    matriculas?: boolean
    matrizes_cursos?: boolean
  }

  export type DisciplinasCountOutputTypeGetPayload<
    S extends boolean | null | undefined | DisciplinasCountOutputTypeArgs,
    U = keyof S
      > = S extends true
        ? DisciplinasCountOutputType
    : S extends undefined
    ? never
    : S extends DisciplinasCountOutputTypeArgs
    ?'include' extends U
    ? DisciplinasCountOutputType 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof DisciplinasCountOutputType ? DisciplinasCountOutputType[P] : never
  } 
    : DisciplinasCountOutputType
  : DisciplinasCountOutputType




  // Custom InputTypes

  /**
   * DisciplinasCountOutputType without action
   */
  export type DisciplinasCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the DisciplinasCountOutputType
     * 
    **/
    select?: DisciplinasCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model test
   */


  export type AggregateTest = {
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  export type TestAvgAggregateOutputType = {
    test_id: number | null
    test: number | null
  }

  export type TestSumAggregateOutputType = {
    test_id: number | null
    test: number | null
  }

  export type TestMinAggregateOutputType = {
    test_id: number | null
    test: number | null
  }

  export type TestMaxAggregateOutputType = {
    test_id: number | null
    test: number | null
  }

  export type TestCountAggregateOutputType = {
    test_id: number
    test: number
    _all: number
  }


  export type TestAvgAggregateInputType = {
    test_id?: true
    test?: true
  }

  export type TestSumAggregateInputType = {
    test_id?: true
    test?: true
  }

  export type TestMinAggregateInputType = {
    test_id?: true
    test?: true
  }

  export type TestMaxAggregateInputType = {
    test_id?: true
    test?: true
  }

  export type TestCountAggregateInputType = {
    test_id?: true
    test?: true
    _all?: true
  }

  export type TestAggregateArgs = {
    /**
     * Filter which test to aggregate.
     * 
    **/
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     * 
    **/
    orderBy?: Enumerable<testOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tests
    **/
    _count?: true | TestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TestAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TestSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TestMaxAggregateInputType
  }

  export type GetTestAggregateType<T extends TestAggregateArgs> = {
        [P in keyof T & keyof AggregateTest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTest[P]>
      : GetScalarType<T[P], AggregateTest[P]>
  }




  export type TestGroupByArgs = {
    where?: testWhereInput
    orderBy?: Enumerable<testOrderByWithAggregationInput>
    by: Array<TestScalarFieldEnum>
    having?: testScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TestCountAggregateInputType | true
    _avg?: TestAvgAggregateInputType
    _sum?: TestSumAggregateInputType
    _min?: TestMinAggregateInputType
    _max?: TestMaxAggregateInputType
  }


  export type TestGroupByOutputType = {
    test_id: number
    test: number
    _count: TestCountAggregateOutputType | null
    _avg: TestAvgAggregateOutputType | null
    _sum: TestSumAggregateOutputType | null
    _min: TestMinAggregateOutputType | null
    _max: TestMaxAggregateOutputType | null
  }

  type GetTestGroupByPayload<T extends TestGroupByArgs> = PrismaPromise<
    Array<
      PickArray<TestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TestGroupByOutputType[P]>
            : GetScalarType<T[P], TestGroupByOutputType[P]>
        }
      >
    >


  export type testSelect = {
    test_id?: boolean
    test?: boolean
  }

  export type testGetPayload<
    S extends boolean | null | undefined | testArgs,
    U = keyof S
      > = S extends true
        ? test
    : S extends undefined
    ? never
    : S extends testArgs | testFindManyArgs
    ?'include' extends U
    ? test 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
    P extends keyof test ? test[P] : never
  } 
    : test
  : test


  type testCountArgs = Merge<
    Omit<testFindManyArgs, 'select' | 'include'> & {
      select?: TestCountAggregateInputType | true
    }
  >

  export interface testDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Test that matches the filter.
     * @param {testFindUniqueArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends testFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, testFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'test'> extends True ? CheckSelect<T, Prisma__testClient<test>, Prisma__testClient<testGetPayload<T>>> : CheckSelect<T, Prisma__testClient<test | null, null>, Prisma__testClient<testGetPayload<T> | null, null>>

    /**
     * Find the first Test that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindFirstArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends testFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, testFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'test'> extends True ? CheckSelect<T, Prisma__testClient<test>, Prisma__testClient<testGetPayload<T>>> : CheckSelect<T, Prisma__testClient<test | null, null>, Prisma__testClient<testGetPayload<T> | null, null>>

    /**
     * Find zero or more Tests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tests
     * const tests = await prisma.test.findMany()
     * 
     * // Get first 10 Tests
     * const tests = await prisma.test.findMany({ take: 10 })
     * 
     * // Only select the `test_id`
     * const testWithTest_idOnly = await prisma.test.findMany({ select: { test_id: true } })
     * 
    **/
    findMany<T extends testFindManyArgs>(
      args?: SelectSubset<T, testFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<test>>, PrismaPromise<Array<testGetPayload<T>>>>

    /**
     * Create a Test.
     * @param {testCreateArgs} args - Arguments to create a Test.
     * @example
     * // Create one Test
     * const Test = await prisma.test.create({
     *   data: {
     *     // ... data to create a Test
     *   }
     * })
     * 
    **/
    create<T extends testCreateArgs>(
      args: SelectSubset<T, testCreateArgs>
    ): CheckSelect<T, Prisma__testClient<test>, Prisma__testClient<testGetPayload<T>>>

    /**
     * Create many Tests.
     *     @param {testCreateManyArgs} args - Arguments to create many Tests.
     *     @example
     *     // Create many Tests
     *     const test = await prisma.test.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends testCreateManyArgs>(
      args?: SelectSubset<T, testCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Test.
     * @param {testDeleteArgs} args - Arguments to delete one Test.
     * @example
     * // Delete one Test
     * const Test = await prisma.test.delete({
     *   where: {
     *     // ... filter to delete one Test
     *   }
     * })
     * 
    **/
    delete<T extends testDeleteArgs>(
      args: SelectSubset<T, testDeleteArgs>
    ): CheckSelect<T, Prisma__testClient<test>, Prisma__testClient<testGetPayload<T>>>

    /**
     * Update one Test.
     * @param {testUpdateArgs} args - Arguments to update one Test.
     * @example
     * // Update one Test
     * const test = await prisma.test.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends testUpdateArgs>(
      args: SelectSubset<T, testUpdateArgs>
    ): CheckSelect<T, Prisma__testClient<test>, Prisma__testClient<testGetPayload<T>>>

    /**
     * Delete zero or more Tests.
     * @param {testDeleteManyArgs} args - Arguments to filter Tests to delete.
     * @example
     * // Delete a few Tests
     * const { count } = await prisma.test.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends testDeleteManyArgs>(
      args?: SelectSubset<T, testDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tests
     * const test = await prisma.test.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends testUpdateManyArgs>(
      args: SelectSubset<T, testUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Test.
     * @param {testUpsertArgs} args - Arguments to update or create a Test.
     * @example
     * // Update or create a Test
     * const test = await prisma.test.upsert({
     *   create: {
     *     // ... data to create a Test
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Test we want to update
     *   }
     * })
    **/
    upsert<T extends testUpsertArgs>(
      args: SelectSubset<T, testUpsertArgs>
    ): CheckSelect<T, Prisma__testClient<test>, Prisma__testClient<testGetPayload<T>>>

    /**
     * Find one Test that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {testFindUniqueOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends testFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, testFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__testClient<test>, Prisma__testClient<testGetPayload<T>>>

    /**
     * Find the first Test that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testFindFirstOrThrowArgs} args - Arguments to find a Test
     * @example
     * // Get one Test
     * const test = await prisma.test.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends testFindFirstOrThrowArgs>(
      args?: SelectSubset<T, testFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__testClient<test>, Prisma__testClient<testGetPayload<T>>>

    /**
     * Count the number of Tests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {testCountArgs} args - Arguments to filter Tests to count.
     * @example
     * // Count the number of Tests
     * const count = await prisma.test.count({
     *   where: {
     *     // ... the filter for the Tests we want to count
     *   }
     * })
    **/
    count<T extends testCountArgs>(
      args?: Subset<T, testCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TestAggregateArgs>(args: Subset<T, TestAggregateArgs>): PrismaPromise<GetTestAggregateType<T>>

    /**
     * Group by Test.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TestGroupByArgs['orderBy'] }
        : { orderBy?: TestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTestGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for test.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__testClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * test base type for findUnique actions
   */
  export type testFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the test
     * 
    **/
    select?: testSelect | null
    /**
     * Filter, which test to fetch.
     * 
    **/
    where: testWhereUniqueInput
  }

  /**
   * test: findUnique
   */
  export interface testFindUniqueArgs extends testFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * test base type for findFirst actions
   */
  export type testFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the test
     * 
    **/
    select?: testSelect | null
    /**
     * Filter, which test to fetch.
     * 
    **/
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     * 
    **/
    orderBy?: Enumerable<testOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tests.
     * 
    **/
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tests.
     * 
    **/
    distinct?: Enumerable<TestScalarFieldEnum>
  }

  /**
   * test: findFirst
   */
  export interface testFindFirstArgs extends testFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * test findMany
   */
  export type testFindManyArgs = {
    /**
     * Select specific fields to fetch from the test
     * 
    **/
    select?: testSelect | null
    /**
     * Filter, which tests to fetch.
     * 
    **/
    where?: testWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tests to fetch.
     * 
    **/
    orderBy?: Enumerable<testOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tests.
     * 
    **/
    cursor?: testWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tests from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tests.
     * 
    **/
    skip?: number
    distinct?: Enumerable<TestScalarFieldEnum>
  }


  /**
   * test create
   */
  export type testCreateArgs = {
    /**
     * Select specific fields to fetch from the test
     * 
    **/
    select?: testSelect | null
    /**
     * The data needed to create a test.
     * 
    **/
    data: XOR<testCreateInput, testUncheckedCreateInput>
  }


  /**
   * test createMany
   */
  export type testCreateManyArgs = {
    /**
     * The data used to create many tests.
     * 
    **/
    data: Enumerable<testCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * test update
   */
  export type testUpdateArgs = {
    /**
     * Select specific fields to fetch from the test
     * 
    **/
    select?: testSelect | null
    /**
     * The data needed to update a test.
     * 
    **/
    data: XOR<testUpdateInput, testUncheckedUpdateInput>
    /**
     * Choose, which test to update.
     * 
    **/
    where: testWhereUniqueInput
  }


  /**
   * test updateMany
   */
  export type testUpdateManyArgs = {
    /**
     * The data used to update tests.
     * 
    **/
    data: XOR<testUpdateManyMutationInput, testUncheckedUpdateManyInput>
    /**
     * Filter which tests to update
     * 
    **/
    where?: testWhereInput
  }


  /**
   * test upsert
   */
  export type testUpsertArgs = {
    /**
     * Select specific fields to fetch from the test
     * 
    **/
    select?: testSelect | null
    /**
     * The filter to search for the test to update in case it exists.
     * 
    **/
    where: testWhereUniqueInput
    /**
     * In case the test found by the `where` argument doesn't exist, create a new test with this data.
     * 
    **/
    create: XOR<testCreateInput, testUncheckedCreateInput>
    /**
     * In case the test was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<testUpdateInput, testUncheckedUpdateInput>
  }


  /**
   * test delete
   */
  export type testDeleteArgs = {
    /**
     * Select specific fields to fetch from the test
     * 
    **/
    select?: testSelect | null
    /**
     * Filter which test to delete.
     * 
    **/
    where: testWhereUniqueInput
  }


  /**
   * test deleteMany
   */
  export type testDeleteManyArgs = {
    /**
     * Filter which tests to delete
     * 
    **/
    where?: testWhereInput
  }


  /**
   * test: findUniqueOrThrow
   */
  export type testFindUniqueOrThrowArgs = testFindUniqueArgsBase
      

  /**
   * test: findFirstOrThrow
   */
  export type testFindFirstOrThrowArgs = testFindFirstArgsBase
      

  /**
   * test without action
   */
  export type testArgs = {
    /**
     * Select specific fields to fetch from the test
     * 
    **/
    select?: testSelect | null
  }



  /**
   * Model alunos
   */


  export type AggregateAlunos = {
    _count: AlunosCountAggregateOutputType | null
    _avg: AlunosAvgAggregateOutputType | null
    _sum: AlunosSumAggregateOutputType | null
    _min: AlunosMinAggregateOutputType | null
    _max: AlunosMaxAggregateOutputType | null
  }

  export type AlunosAvgAggregateOutputType = {
    mat_alu: number | null
    cod_curso: number | null
  }

  export type AlunosSumAggregateOutputType = {
    mat_alu: number | null
    cod_curso: number | null
  }

  export type AlunosMinAggregateOutputType = {
    mat_alu: number | null
    nome: string | null
    dat_entrada: Date | null
    cod_curso: number | null
    cotista: string | null
  }

  export type AlunosMaxAggregateOutputType = {
    mat_alu: number | null
    nome: string | null
    dat_entrada: Date | null
    cod_curso: number | null
    cotista: string | null
  }

  export type AlunosCountAggregateOutputType = {
    mat_alu: number
    nome: number
    dat_entrada: number
    cod_curso: number
    cotista: number
    _all: number
  }


  export type AlunosAvgAggregateInputType = {
    mat_alu?: true
    cod_curso?: true
  }

  export type AlunosSumAggregateInputType = {
    mat_alu?: true
    cod_curso?: true
  }

  export type AlunosMinAggregateInputType = {
    mat_alu?: true
    nome?: true
    dat_entrada?: true
    cod_curso?: true
    cotista?: true
  }

  export type AlunosMaxAggregateInputType = {
    mat_alu?: true
    nome?: true
    dat_entrada?: true
    cod_curso?: true
    cotista?: true
  }

  export type AlunosCountAggregateInputType = {
    mat_alu?: true
    nome?: true
    dat_entrada?: true
    cod_curso?: true
    cotista?: true
    _all?: true
  }

  export type AlunosAggregateArgs = {
    /**
     * Filter which alunos to aggregate.
     * 
    **/
    where?: alunosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunos to fetch.
     * 
    **/
    orderBy?: Enumerable<alunosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: alunosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned alunos
    **/
    _count?: true | AlunosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlunosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlunosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunosMaxAggregateInputType
  }

  export type GetAlunosAggregateType<T extends AlunosAggregateArgs> = {
        [P in keyof T & keyof AggregateAlunos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlunos[P]>
      : GetScalarType<T[P], AggregateAlunos[P]>
  }




  export type AlunosGroupByArgs = {
    where?: alunosWhereInput
    orderBy?: Enumerable<alunosOrderByWithAggregationInput>
    by: Array<AlunosScalarFieldEnum>
    having?: alunosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunosCountAggregateInputType | true
    _avg?: AlunosAvgAggregateInputType
    _sum?: AlunosSumAggregateInputType
    _min?: AlunosMinAggregateInputType
    _max?: AlunosMaxAggregateInputType
  }


  export type AlunosGroupByOutputType = {
    mat_alu: number
    nome: string
    dat_entrada: Date
    cod_curso: number
    cotista: string
    _count: AlunosCountAggregateOutputType | null
    _avg: AlunosAvgAggregateOutputType | null
    _sum: AlunosSumAggregateOutputType | null
    _min: AlunosMinAggregateOutputType | null
    _max: AlunosMaxAggregateOutputType | null
  }

  type GetAlunosGroupByPayload<T extends AlunosGroupByArgs> = PrismaPromise<
    Array<
      PickArray<AlunosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunosGroupByOutputType[P]>
            : GetScalarType<T[P], AlunosGroupByOutputType[P]>
        }
      >
    >


  export type alunosSelect = {
    mat_alu?: boolean
    nome?: boolean
    dat_entrada?: boolean
    cod_curso?: boolean
    cotista?: boolean
    cursos?: boolean | cursosArgs
    matriculas?: boolean | matriculasFindManyArgs
    _count?: boolean | AlunosCountOutputTypeArgs
  }

  export type alunosInclude = {
    cursos?: boolean | cursosArgs
    matriculas?: boolean | matriculasFindManyArgs
    _count?: boolean | AlunosCountOutputTypeArgs
  }

  export type alunosGetPayload<
    S extends boolean | null | undefined | alunosArgs,
    U = keyof S
      > = S extends true
        ? alunos
    : S extends undefined
    ? never
    : S extends alunosArgs | alunosFindManyArgs
    ?'include' extends U
    ? alunos  & {
    [P in TrueKeys<S['include']>]:
        P extends 'cursos' ? cursosGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'matriculas' ? Array < matriculasGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? AlunosCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'cursos' ? cursosGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'matriculas' ? Array < matriculasGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? AlunosCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof alunos ? alunos[P] : never
  } 
    : alunos
  : alunos


  type alunosCountArgs = Merge<
    Omit<alunosFindManyArgs, 'select' | 'include'> & {
      select?: AlunosCountAggregateInputType | true
    }
  >

  export interface alunosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Alunos that matches the filter.
     * @param {alunosFindUniqueArgs} args - Arguments to find a Alunos
     * @example
     * // Get one Alunos
     * const alunos = await prisma.alunos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends alunosFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, alunosFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'alunos'> extends True ? CheckSelect<T, Prisma__alunosClient<alunos>, Prisma__alunosClient<alunosGetPayload<T>>> : CheckSelect<T, Prisma__alunosClient<alunos | null, null>, Prisma__alunosClient<alunosGetPayload<T> | null, null>>

    /**
     * Find the first Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosFindFirstArgs} args - Arguments to find a Alunos
     * @example
     * // Get one Alunos
     * const alunos = await prisma.alunos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends alunosFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, alunosFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'alunos'> extends True ? CheckSelect<T, Prisma__alunosClient<alunos>, Prisma__alunosClient<alunosGetPayload<T>>> : CheckSelect<T, Prisma__alunosClient<alunos | null, null>, Prisma__alunosClient<alunosGetPayload<T> | null, null>>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.alunos.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.alunos.findMany({ take: 10 })
     * 
     * // Only select the `mat_alu`
     * const alunosWithMat_aluOnly = await prisma.alunos.findMany({ select: { mat_alu: true } })
     * 
    **/
    findMany<T extends alunosFindManyArgs>(
      args?: SelectSubset<T, alunosFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<alunos>>, PrismaPromise<Array<alunosGetPayload<T>>>>

    /**
     * Create a Alunos.
     * @param {alunosCreateArgs} args - Arguments to create a Alunos.
     * @example
     * // Create one Alunos
     * const Alunos = await prisma.alunos.create({
     *   data: {
     *     // ... data to create a Alunos
     *   }
     * })
     * 
    **/
    create<T extends alunosCreateArgs>(
      args: SelectSubset<T, alunosCreateArgs>
    ): CheckSelect<T, Prisma__alunosClient<alunos>, Prisma__alunosClient<alunosGetPayload<T>>>

    /**
     * Create many Alunos.
     *     @param {alunosCreateManyArgs} args - Arguments to create many Alunos.
     *     @example
     *     // Create many Alunos
     *     const alunos = await prisma.alunos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends alunosCreateManyArgs>(
      args?: SelectSubset<T, alunosCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Alunos.
     * @param {alunosDeleteArgs} args - Arguments to delete one Alunos.
     * @example
     * // Delete one Alunos
     * const Alunos = await prisma.alunos.delete({
     *   where: {
     *     // ... filter to delete one Alunos
     *   }
     * })
     * 
    **/
    delete<T extends alunosDeleteArgs>(
      args: SelectSubset<T, alunosDeleteArgs>
    ): CheckSelect<T, Prisma__alunosClient<alunos>, Prisma__alunosClient<alunosGetPayload<T>>>

    /**
     * Update one Alunos.
     * @param {alunosUpdateArgs} args - Arguments to update one Alunos.
     * @example
     * // Update one Alunos
     * const alunos = await prisma.alunos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends alunosUpdateArgs>(
      args: SelectSubset<T, alunosUpdateArgs>
    ): CheckSelect<T, Prisma__alunosClient<alunos>, Prisma__alunosClient<alunosGetPayload<T>>>

    /**
     * Delete zero or more Alunos.
     * @param {alunosDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.alunos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends alunosDeleteManyArgs>(
      args?: SelectSubset<T, alunosDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const alunos = await prisma.alunos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends alunosUpdateManyArgs>(
      args: SelectSubset<T, alunosUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Alunos.
     * @param {alunosUpsertArgs} args - Arguments to update or create a Alunos.
     * @example
     * // Update or create a Alunos
     * const alunos = await prisma.alunos.upsert({
     *   create: {
     *     // ... data to create a Alunos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alunos we want to update
     *   }
     * })
    **/
    upsert<T extends alunosUpsertArgs>(
      args: SelectSubset<T, alunosUpsertArgs>
    ): CheckSelect<T, Prisma__alunosClient<alunos>, Prisma__alunosClient<alunosGetPayload<T>>>

    /**
     * Find one Alunos that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {alunosFindUniqueOrThrowArgs} args - Arguments to find a Alunos
     * @example
     * // Get one Alunos
     * const alunos = await prisma.alunos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends alunosFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, alunosFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__alunosClient<alunos>, Prisma__alunosClient<alunosGetPayload<T>>>

    /**
     * Find the first Alunos that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosFindFirstOrThrowArgs} args - Arguments to find a Alunos
     * @example
     * // Get one Alunos
     * const alunos = await prisma.alunos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends alunosFindFirstOrThrowArgs>(
      args?: SelectSubset<T, alunosFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__alunosClient<alunos>, Prisma__alunosClient<alunosGetPayload<T>>>

    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {alunosCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.alunos.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends alunosCountArgs>(
      args?: Subset<T, alunosCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlunosAggregateArgs>(args: Subset<T, AlunosAggregateArgs>): PrismaPromise<GetAlunosAggregateType<T>>

    /**
     * Group by Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlunosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunosGroupByArgs['orderBy'] }
        : { orderBy?: AlunosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlunosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunosGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for alunos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__alunosClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    cursos<T extends cursosArgs = {}>(args?: Subset<T, cursosArgs>): CheckSelect<T, Prisma__cursosClient<cursos | Null>, Prisma__cursosClient<cursosGetPayload<T> | Null>>;

    matriculas<T extends matriculasFindManyArgs = {}>(args?: Subset<T, matriculasFindManyArgs>): CheckSelect<T, PrismaPromise<Array<matriculas>| Null>, PrismaPromise<Array<matriculasGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * alunos base type for findUnique actions
   */
  export type alunosFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the alunos
     * 
    **/
    select?: alunosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: alunosInclude | null
    /**
     * Filter, which alunos to fetch.
     * 
    **/
    where: alunosWhereUniqueInput
  }

  /**
   * alunos: findUnique
   */
  export interface alunosFindUniqueArgs extends alunosFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * alunos base type for findFirst actions
   */
  export type alunosFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the alunos
     * 
    **/
    select?: alunosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: alunosInclude | null
    /**
     * Filter, which alunos to fetch.
     * 
    **/
    where?: alunosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunos to fetch.
     * 
    **/
    orderBy?: Enumerable<alunosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for alunos.
     * 
    **/
    cursor?: alunosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of alunos.
     * 
    **/
    distinct?: Enumerable<AlunosScalarFieldEnum>
  }

  /**
   * alunos: findFirst
   */
  export interface alunosFindFirstArgs extends alunosFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * alunos findMany
   */
  export type alunosFindManyArgs = {
    /**
     * Select specific fields to fetch from the alunos
     * 
    **/
    select?: alunosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: alunosInclude | null
    /**
     * Filter, which alunos to fetch.
     * 
    **/
    where?: alunosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of alunos to fetch.
     * 
    **/
    orderBy?: Enumerable<alunosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing alunos.
     * 
    **/
    cursor?: alunosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` alunos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` alunos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<AlunosScalarFieldEnum>
  }


  /**
   * alunos create
   */
  export type alunosCreateArgs = {
    /**
     * Select specific fields to fetch from the alunos
     * 
    **/
    select?: alunosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: alunosInclude | null
    /**
     * The data needed to create a alunos.
     * 
    **/
    data: XOR<alunosCreateInput, alunosUncheckedCreateInput>
  }


  /**
   * alunos createMany
   */
  export type alunosCreateManyArgs = {
    /**
     * The data used to create many alunos.
     * 
    **/
    data: Enumerable<alunosCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * alunos update
   */
  export type alunosUpdateArgs = {
    /**
     * Select specific fields to fetch from the alunos
     * 
    **/
    select?: alunosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: alunosInclude | null
    /**
     * The data needed to update a alunos.
     * 
    **/
    data: XOR<alunosUpdateInput, alunosUncheckedUpdateInput>
    /**
     * Choose, which alunos to update.
     * 
    **/
    where: alunosWhereUniqueInput
  }


  /**
   * alunos updateMany
   */
  export type alunosUpdateManyArgs = {
    /**
     * The data used to update alunos.
     * 
    **/
    data: XOR<alunosUpdateManyMutationInput, alunosUncheckedUpdateManyInput>
    /**
     * Filter which alunos to update
     * 
    **/
    where?: alunosWhereInput
  }


  /**
   * alunos upsert
   */
  export type alunosUpsertArgs = {
    /**
     * Select specific fields to fetch from the alunos
     * 
    **/
    select?: alunosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: alunosInclude | null
    /**
     * The filter to search for the alunos to update in case it exists.
     * 
    **/
    where: alunosWhereUniqueInput
    /**
     * In case the alunos found by the `where` argument doesn't exist, create a new alunos with this data.
     * 
    **/
    create: XOR<alunosCreateInput, alunosUncheckedCreateInput>
    /**
     * In case the alunos was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<alunosUpdateInput, alunosUncheckedUpdateInput>
  }


  /**
   * alunos delete
   */
  export type alunosDeleteArgs = {
    /**
     * Select specific fields to fetch from the alunos
     * 
    **/
    select?: alunosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: alunosInclude | null
    /**
     * Filter which alunos to delete.
     * 
    **/
    where: alunosWhereUniqueInput
  }


  /**
   * alunos deleteMany
   */
  export type alunosDeleteManyArgs = {
    /**
     * Filter which alunos to delete
     * 
    **/
    where?: alunosWhereInput
  }


  /**
   * alunos: findUniqueOrThrow
   */
  export type alunosFindUniqueOrThrowArgs = alunosFindUniqueArgsBase
      

  /**
   * alunos: findFirstOrThrow
   */
  export type alunosFindFirstOrThrowArgs = alunosFindFirstArgsBase
      

  /**
   * alunos without action
   */
  export type alunosArgs = {
    /**
     * Select specific fields to fetch from the alunos
     * 
    **/
    select?: alunosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: alunosInclude | null
  }



  /**
   * Model cursos
   */


  export type AggregateCursos = {
    _count: CursosCountAggregateOutputType | null
    _avg: CursosAvgAggregateOutputType | null
    _sum: CursosSumAggregateOutputType | null
    _min: CursosMinAggregateOutputType | null
    _max: CursosMaxAggregateOutputType | null
  }

  export type CursosAvgAggregateOutputType = {
    cod_curso: number | null
    cod_dpto: number | null
  }

  export type CursosSumAggregateOutputType = {
    cod_curso: number | null
    cod_dpto: number | null
  }

  export type CursosMinAggregateOutputType = {
    cod_curso: number | null
    nom_curso: string | null
    cod_dpto: number | null
  }

  export type CursosMaxAggregateOutputType = {
    cod_curso: number | null
    nom_curso: string | null
    cod_dpto: number | null
  }

  export type CursosCountAggregateOutputType = {
    cod_curso: number
    nom_curso: number
    cod_dpto: number
    _all: number
  }


  export type CursosAvgAggregateInputType = {
    cod_curso?: true
    cod_dpto?: true
  }

  export type CursosSumAggregateInputType = {
    cod_curso?: true
    cod_dpto?: true
  }

  export type CursosMinAggregateInputType = {
    cod_curso?: true
    nom_curso?: true
    cod_dpto?: true
  }

  export type CursosMaxAggregateInputType = {
    cod_curso?: true
    nom_curso?: true
    cod_dpto?: true
  }

  export type CursosCountAggregateInputType = {
    cod_curso?: true
    nom_curso?: true
    cod_dpto?: true
    _all?: true
  }

  export type CursosAggregateArgs = {
    /**
     * Filter which cursos to aggregate.
     * 
    **/
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     * 
    **/
    orderBy?: Enumerable<cursosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cursos
    **/
    _count?: true | CursosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CursosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CursosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CursosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CursosMaxAggregateInputType
  }

  export type GetCursosAggregateType<T extends CursosAggregateArgs> = {
        [P in keyof T & keyof AggregateCursos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCursos[P]>
      : GetScalarType<T[P], AggregateCursos[P]>
  }




  export type CursosGroupByArgs = {
    where?: cursosWhereInput
    orderBy?: Enumerable<cursosOrderByWithAggregationInput>
    by: Array<CursosScalarFieldEnum>
    having?: cursosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CursosCountAggregateInputType | true
    _avg?: CursosAvgAggregateInputType
    _sum?: CursosSumAggregateInputType
    _min?: CursosMinAggregateInputType
    _max?: CursosMaxAggregateInputType
  }


  export type CursosGroupByOutputType = {
    cod_curso: number
    nom_curso: string
    cod_dpto: number
    _count: CursosCountAggregateOutputType | null
    _avg: CursosAvgAggregateOutputType | null
    _sum: CursosSumAggregateOutputType | null
    _min: CursosMinAggregateOutputType | null
    _max: CursosMaxAggregateOutputType | null
  }

  type GetCursosGroupByPayload<T extends CursosGroupByArgs> = PrismaPromise<
    Array<
      PickArray<CursosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CursosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CursosGroupByOutputType[P]>
            : GetScalarType<T[P], CursosGroupByOutputType[P]>
        }
      >
    >


  export type cursosSelect = {
    cod_curso?: boolean
    nom_curso?: boolean
    cod_dpto?: boolean
    departamentos?: boolean | departamentosArgs
    alunos?: boolean | alunosFindManyArgs
    matrizes_cursos?: boolean | matrizes_cursosFindManyArgs
    _count?: boolean | CursosCountOutputTypeArgs
  }

  export type cursosInclude = {
    departamentos?: boolean | departamentosArgs
    alunos?: boolean | alunosFindManyArgs
    matrizes_cursos?: boolean | matrizes_cursosFindManyArgs
    _count?: boolean | CursosCountOutputTypeArgs
  }

  export type cursosGetPayload<
    S extends boolean | null | undefined | cursosArgs,
    U = keyof S
      > = S extends true
        ? cursos
    : S extends undefined
    ? never
    : S extends cursosArgs | cursosFindManyArgs
    ?'include' extends U
    ? cursos  & {
    [P in TrueKeys<S['include']>]:
        P extends 'departamentos' ? departamentosGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'alunos' ? Array < alunosGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'matrizes_cursos' ? Array < matrizes_cursosGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? CursosCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'departamentos' ? departamentosGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'alunos' ? Array < alunosGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'matrizes_cursos' ? Array < matrizes_cursosGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? CursosCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof cursos ? cursos[P] : never
  } 
    : cursos
  : cursos


  type cursosCountArgs = Merge<
    Omit<cursosFindManyArgs, 'select' | 'include'> & {
      select?: CursosCountAggregateInputType | true
    }
  >

  export interface cursosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Cursos that matches the filter.
     * @param {cursosFindUniqueArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends cursosFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, cursosFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'cursos'> extends True ? CheckSelect<T, Prisma__cursosClient<cursos>, Prisma__cursosClient<cursosGetPayload<T>>> : CheckSelect<T, Prisma__cursosClient<cursos | null, null>, Prisma__cursosClient<cursosGetPayload<T> | null, null>>

    /**
     * Find the first Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosFindFirstArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends cursosFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, cursosFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'cursos'> extends True ? CheckSelect<T, Prisma__cursosClient<cursos>, Prisma__cursosClient<cursosGetPayload<T>>> : CheckSelect<T, Prisma__cursosClient<cursos | null, null>, Prisma__cursosClient<cursosGetPayload<T> | null, null>>

    /**
     * Find zero or more Cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cursos
     * const cursos = await prisma.cursos.findMany()
     * 
     * // Get first 10 Cursos
     * const cursos = await prisma.cursos.findMany({ take: 10 })
     * 
     * // Only select the `cod_curso`
     * const cursosWithCod_cursoOnly = await prisma.cursos.findMany({ select: { cod_curso: true } })
     * 
    **/
    findMany<T extends cursosFindManyArgs>(
      args?: SelectSubset<T, cursosFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<cursos>>, PrismaPromise<Array<cursosGetPayload<T>>>>

    /**
     * Create a Cursos.
     * @param {cursosCreateArgs} args - Arguments to create a Cursos.
     * @example
     * // Create one Cursos
     * const Cursos = await prisma.cursos.create({
     *   data: {
     *     // ... data to create a Cursos
     *   }
     * })
     * 
    **/
    create<T extends cursosCreateArgs>(
      args: SelectSubset<T, cursosCreateArgs>
    ): CheckSelect<T, Prisma__cursosClient<cursos>, Prisma__cursosClient<cursosGetPayload<T>>>

    /**
     * Create many Cursos.
     *     @param {cursosCreateManyArgs} args - Arguments to create many Cursos.
     *     @example
     *     // Create many Cursos
     *     const cursos = await prisma.cursos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends cursosCreateManyArgs>(
      args?: SelectSubset<T, cursosCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Cursos.
     * @param {cursosDeleteArgs} args - Arguments to delete one Cursos.
     * @example
     * // Delete one Cursos
     * const Cursos = await prisma.cursos.delete({
     *   where: {
     *     // ... filter to delete one Cursos
     *   }
     * })
     * 
    **/
    delete<T extends cursosDeleteArgs>(
      args: SelectSubset<T, cursosDeleteArgs>
    ): CheckSelect<T, Prisma__cursosClient<cursos>, Prisma__cursosClient<cursosGetPayload<T>>>

    /**
     * Update one Cursos.
     * @param {cursosUpdateArgs} args - Arguments to update one Cursos.
     * @example
     * // Update one Cursos
     * const cursos = await prisma.cursos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends cursosUpdateArgs>(
      args: SelectSubset<T, cursosUpdateArgs>
    ): CheckSelect<T, Prisma__cursosClient<cursos>, Prisma__cursosClient<cursosGetPayload<T>>>

    /**
     * Delete zero or more Cursos.
     * @param {cursosDeleteManyArgs} args - Arguments to filter Cursos to delete.
     * @example
     * // Delete a few Cursos
     * const { count } = await prisma.cursos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends cursosDeleteManyArgs>(
      args?: SelectSubset<T, cursosDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cursos
     * const cursos = await prisma.cursos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends cursosUpdateManyArgs>(
      args: SelectSubset<T, cursosUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Cursos.
     * @param {cursosUpsertArgs} args - Arguments to update or create a Cursos.
     * @example
     * // Update or create a Cursos
     * const cursos = await prisma.cursos.upsert({
     *   create: {
     *     // ... data to create a Cursos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cursos we want to update
     *   }
     * })
    **/
    upsert<T extends cursosUpsertArgs>(
      args: SelectSubset<T, cursosUpsertArgs>
    ): CheckSelect<T, Prisma__cursosClient<cursos>, Prisma__cursosClient<cursosGetPayload<T>>>

    /**
     * Find one Cursos that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {cursosFindUniqueOrThrowArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends cursosFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, cursosFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__cursosClient<cursos>, Prisma__cursosClient<cursosGetPayload<T>>>

    /**
     * Find the first Cursos that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosFindFirstOrThrowArgs} args - Arguments to find a Cursos
     * @example
     * // Get one Cursos
     * const cursos = await prisma.cursos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends cursosFindFirstOrThrowArgs>(
      args?: SelectSubset<T, cursosFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__cursosClient<cursos>, Prisma__cursosClient<cursosGetPayload<T>>>

    /**
     * Count the number of Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cursosCountArgs} args - Arguments to filter Cursos to count.
     * @example
     * // Count the number of Cursos
     * const count = await prisma.cursos.count({
     *   where: {
     *     // ... the filter for the Cursos we want to count
     *   }
     * })
    **/
    count<T extends cursosCountArgs>(
      args?: Subset<T, cursosCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CursosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CursosAggregateArgs>(args: Subset<T, CursosAggregateArgs>): PrismaPromise<GetCursosAggregateType<T>>

    /**
     * Group by Cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CursosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CursosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CursosGroupByArgs['orderBy'] }
        : { orderBy?: CursosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CursosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCursosGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for cursos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__cursosClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    departamentos<T extends departamentosArgs = {}>(args?: Subset<T, departamentosArgs>): CheckSelect<T, Prisma__departamentosClient<departamentos | Null>, Prisma__departamentosClient<departamentosGetPayload<T> | Null>>;

    alunos<T extends alunosFindManyArgs = {}>(args?: Subset<T, alunosFindManyArgs>): CheckSelect<T, PrismaPromise<Array<alunos>| Null>, PrismaPromise<Array<alunosGetPayload<T>>| Null>>;

    matrizes_cursos<T extends matrizes_cursosFindManyArgs = {}>(args?: Subset<T, matrizes_cursosFindManyArgs>): CheckSelect<T, PrismaPromise<Array<matrizes_cursos>| Null>, PrismaPromise<Array<matrizes_cursosGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * cursos base type for findUnique actions
   */
  export type cursosFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the cursos
     * 
    **/
    select?: cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cursosInclude | null
    /**
     * Filter, which cursos to fetch.
     * 
    **/
    where: cursosWhereUniqueInput
  }

  /**
   * cursos: findUnique
   */
  export interface cursosFindUniqueArgs extends cursosFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cursos base type for findFirst actions
   */
  export type cursosFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the cursos
     * 
    **/
    select?: cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cursosInclude | null
    /**
     * Filter, which cursos to fetch.
     * 
    **/
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     * 
    **/
    orderBy?: Enumerable<cursosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cursos.
     * 
    **/
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cursos.
     * 
    **/
    distinct?: Enumerable<CursosScalarFieldEnum>
  }

  /**
   * cursos: findFirst
   */
  export interface cursosFindFirstArgs extends cursosFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * cursos findMany
   */
  export type cursosFindManyArgs = {
    /**
     * Select specific fields to fetch from the cursos
     * 
    **/
    select?: cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cursosInclude | null
    /**
     * Filter, which cursos to fetch.
     * 
    **/
    where?: cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cursos to fetch.
     * 
    **/
    orderBy?: Enumerable<cursosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cursos.
     * 
    **/
    cursor?: cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cursos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cursos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<CursosScalarFieldEnum>
  }


  /**
   * cursos create
   */
  export type cursosCreateArgs = {
    /**
     * Select specific fields to fetch from the cursos
     * 
    **/
    select?: cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cursosInclude | null
    /**
     * The data needed to create a cursos.
     * 
    **/
    data: XOR<cursosCreateInput, cursosUncheckedCreateInput>
  }


  /**
   * cursos createMany
   */
  export type cursosCreateManyArgs = {
    /**
     * The data used to create many cursos.
     * 
    **/
    data: Enumerable<cursosCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * cursos update
   */
  export type cursosUpdateArgs = {
    /**
     * Select specific fields to fetch from the cursos
     * 
    **/
    select?: cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cursosInclude | null
    /**
     * The data needed to update a cursos.
     * 
    **/
    data: XOR<cursosUpdateInput, cursosUncheckedUpdateInput>
    /**
     * Choose, which cursos to update.
     * 
    **/
    where: cursosWhereUniqueInput
  }


  /**
   * cursos updateMany
   */
  export type cursosUpdateManyArgs = {
    /**
     * The data used to update cursos.
     * 
    **/
    data: XOR<cursosUpdateManyMutationInput, cursosUncheckedUpdateManyInput>
    /**
     * Filter which cursos to update
     * 
    **/
    where?: cursosWhereInput
  }


  /**
   * cursos upsert
   */
  export type cursosUpsertArgs = {
    /**
     * Select specific fields to fetch from the cursos
     * 
    **/
    select?: cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cursosInclude | null
    /**
     * The filter to search for the cursos to update in case it exists.
     * 
    **/
    where: cursosWhereUniqueInput
    /**
     * In case the cursos found by the `where` argument doesn't exist, create a new cursos with this data.
     * 
    **/
    create: XOR<cursosCreateInput, cursosUncheckedCreateInput>
    /**
     * In case the cursos was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<cursosUpdateInput, cursosUncheckedUpdateInput>
  }


  /**
   * cursos delete
   */
  export type cursosDeleteArgs = {
    /**
     * Select specific fields to fetch from the cursos
     * 
    **/
    select?: cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cursosInclude | null
    /**
     * Filter which cursos to delete.
     * 
    **/
    where: cursosWhereUniqueInput
  }


  /**
   * cursos deleteMany
   */
  export type cursosDeleteManyArgs = {
    /**
     * Filter which cursos to delete
     * 
    **/
    where?: cursosWhereInput
  }


  /**
   * cursos: findUniqueOrThrow
   */
  export type cursosFindUniqueOrThrowArgs = cursosFindUniqueArgsBase
      

  /**
   * cursos: findFirstOrThrow
   */
  export type cursosFindFirstOrThrowArgs = cursosFindFirstArgsBase
      

  /**
   * cursos without action
   */
  export type cursosArgs = {
    /**
     * Select specific fields to fetch from the cursos
     * 
    **/
    select?: cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: cursosInclude | null
  }



  /**
   * Model departamentos
   */


  export type AggregateDepartamentos = {
    _count: DepartamentosCountAggregateOutputType | null
    _avg: DepartamentosAvgAggregateOutputType | null
    _sum: DepartamentosSumAggregateOutputType | null
    _min: DepartamentosMinAggregateOutputType | null
    _max: DepartamentosMaxAggregateOutputType | null
  }

  export type DepartamentosAvgAggregateOutputType = {
    cod_dpto: number | null
  }

  export type DepartamentosSumAggregateOutputType = {
    cod_dpto: number | null
  }

  export type DepartamentosMinAggregateOutputType = {
    cod_dpto: number | null
    nome_dpto: string | null
  }

  export type DepartamentosMaxAggregateOutputType = {
    cod_dpto: number | null
    nome_dpto: string | null
  }

  export type DepartamentosCountAggregateOutputType = {
    cod_dpto: number
    nome_dpto: number
    _all: number
  }


  export type DepartamentosAvgAggregateInputType = {
    cod_dpto?: true
  }

  export type DepartamentosSumAggregateInputType = {
    cod_dpto?: true
  }

  export type DepartamentosMinAggregateInputType = {
    cod_dpto?: true
    nome_dpto?: true
  }

  export type DepartamentosMaxAggregateInputType = {
    cod_dpto?: true
    nome_dpto?: true
  }

  export type DepartamentosCountAggregateInputType = {
    cod_dpto?: true
    nome_dpto?: true
    _all?: true
  }

  export type DepartamentosAggregateArgs = {
    /**
     * Filter which departamentos to aggregate.
     * 
    **/
    where?: departamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departamentos to fetch.
     * 
    **/
    orderBy?: Enumerable<departamentosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: departamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departamentos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departamentos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned departamentos
    **/
    _count?: true | DepartamentosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DepartamentosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DepartamentosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartamentosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartamentosMaxAggregateInputType
  }

  export type GetDepartamentosAggregateType<T extends DepartamentosAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartamentos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartamentos[P]>
      : GetScalarType<T[P], AggregateDepartamentos[P]>
  }




  export type DepartamentosGroupByArgs = {
    where?: departamentosWhereInput
    orderBy?: Enumerable<departamentosOrderByWithAggregationInput>
    by: Array<DepartamentosScalarFieldEnum>
    having?: departamentosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartamentosCountAggregateInputType | true
    _avg?: DepartamentosAvgAggregateInputType
    _sum?: DepartamentosSumAggregateInputType
    _min?: DepartamentosMinAggregateInputType
    _max?: DepartamentosMaxAggregateInputType
  }


  export type DepartamentosGroupByOutputType = {
    cod_dpto: number
    nome_dpto: string
    _count: DepartamentosCountAggregateOutputType | null
    _avg: DepartamentosAvgAggregateOutputType | null
    _sum: DepartamentosSumAggregateOutputType | null
    _min: DepartamentosMinAggregateOutputType | null
    _max: DepartamentosMaxAggregateOutputType | null
  }

  type GetDepartamentosGroupByPayload<T extends DepartamentosGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DepartamentosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartamentosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartamentosGroupByOutputType[P]>
            : GetScalarType<T[P], DepartamentosGroupByOutputType[P]>
        }
      >
    >


  export type departamentosSelect = {
    cod_dpto?: boolean
    nome_dpto?: boolean
    cursos?: boolean | cursosFindManyArgs
    _count?: boolean | DepartamentosCountOutputTypeArgs
  }

  export type departamentosInclude = {
    cursos?: boolean | cursosFindManyArgs
    _count?: boolean | DepartamentosCountOutputTypeArgs
  }

  export type departamentosGetPayload<
    S extends boolean | null | undefined | departamentosArgs,
    U = keyof S
      > = S extends true
        ? departamentos
    : S extends undefined
    ? never
    : S extends departamentosArgs | departamentosFindManyArgs
    ?'include' extends U
    ? departamentos  & {
    [P in TrueKeys<S['include']>]:
        P extends 'cursos' ? Array < cursosGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? DepartamentosCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'cursos' ? Array < cursosGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? DepartamentosCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof departamentos ? departamentos[P] : never
  } 
    : departamentos
  : departamentos


  type departamentosCountArgs = Merge<
    Omit<departamentosFindManyArgs, 'select' | 'include'> & {
      select?: DepartamentosCountAggregateInputType | true
    }
  >

  export interface departamentosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Departamentos that matches the filter.
     * @param {departamentosFindUniqueArgs} args - Arguments to find a Departamentos
     * @example
     * // Get one Departamentos
     * const departamentos = await prisma.departamentos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends departamentosFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, departamentosFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'departamentos'> extends True ? CheckSelect<T, Prisma__departamentosClient<departamentos>, Prisma__departamentosClient<departamentosGetPayload<T>>> : CheckSelect<T, Prisma__departamentosClient<departamentos | null, null>, Prisma__departamentosClient<departamentosGetPayload<T> | null, null>>

    /**
     * Find the first Departamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamentosFindFirstArgs} args - Arguments to find a Departamentos
     * @example
     * // Get one Departamentos
     * const departamentos = await prisma.departamentos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends departamentosFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, departamentosFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'departamentos'> extends True ? CheckSelect<T, Prisma__departamentosClient<departamentos>, Prisma__departamentosClient<departamentosGetPayload<T>>> : CheckSelect<T, Prisma__departamentosClient<departamentos | null, null>, Prisma__departamentosClient<departamentosGetPayload<T> | null, null>>

    /**
     * Find zero or more Departamentos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamentosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departamentos
     * const departamentos = await prisma.departamentos.findMany()
     * 
     * // Get first 10 Departamentos
     * const departamentos = await prisma.departamentos.findMany({ take: 10 })
     * 
     * // Only select the `cod_dpto`
     * const departamentosWithCod_dptoOnly = await prisma.departamentos.findMany({ select: { cod_dpto: true } })
     * 
    **/
    findMany<T extends departamentosFindManyArgs>(
      args?: SelectSubset<T, departamentosFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<departamentos>>, PrismaPromise<Array<departamentosGetPayload<T>>>>

    /**
     * Create a Departamentos.
     * @param {departamentosCreateArgs} args - Arguments to create a Departamentos.
     * @example
     * // Create one Departamentos
     * const Departamentos = await prisma.departamentos.create({
     *   data: {
     *     // ... data to create a Departamentos
     *   }
     * })
     * 
    **/
    create<T extends departamentosCreateArgs>(
      args: SelectSubset<T, departamentosCreateArgs>
    ): CheckSelect<T, Prisma__departamentosClient<departamentos>, Prisma__departamentosClient<departamentosGetPayload<T>>>

    /**
     * Create many Departamentos.
     *     @param {departamentosCreateManyArgs} args - Arguments to create many Departamentos.
     *     @example
     *     // Create many Departamentos
     *     const departamentos = await prisma.departamentos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends departamentosCreateManyArgs>(
      args?: SelectSubset<T, departamentosCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Departamentos.
     * @param {departamentosDeleteArgs} args - Arguments to delete one Departamentos.
     * @example
     * // Delete one Departamentos
     * const Departamentos = await prisma.departamentos.delete({
     *   where: {
     *     // ... filter to delete one Departamentos
     *   }
     * })
     * 
    **/
    delete<T extends departamentosDeleteArgs>(
      args: SelectSubset<T, departamentosDeleteArgs>
    ): CheckSelect<T, Prisma__departamentosClient<departamentos>, Prisma__departamentosClient<departamentosGetPayload<T>>>

    /**
     * Update one Departamentos.
     * @param {departamentosUpdateArgs} args - Arguments to update one Departamentos.
     * @example
     * // Update one Departamentos
     * const departamentos = await prisma.departamentos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends departamentosUpdateArgs>(
      args: SelectSubset<T, departamentosUpdateArgs>
    ): CheckSelect<T, Prisma__departamentosClient<departamentos>, Prisma__departamentosClient<departamentosGetPayload<T>>>

    /**
     * Delete zero or more Departamentos.
     * @param {departamentosDeleteManyArgs} args - Arguments to filter Departamentos to delete.
     * @example
     * // Delete a few Departamentos
     * const { count } = await prisma.departamentos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends departamentosDeleteManyArgs>(
      args?: SelectSubset<T, departamentosDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamentosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departamentos
     * const departamentos = await prisma.departamentos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends departamentosUpdateManyArgs>(
      args: SelectSubset<T, departamentosUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Departamentos.
     * @param {departamentosUpsertArgs} args - Arguments to update or create a Departamentos.
     * @example
     * // Update or create a Departamentos
     * const departamentos = await prisma.departamentos.upsert({
     *   create: {
     *     // ... data to create a Departamentos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Departamentos we want to update
     *   }
     * })
    **/
    upsert<T extends departamentosUpsertArgs>(
      args: SelectSubset<T, departamentosUpsertArgs>
    ): CheckSelect<T, Prisma__departamentosClient<departamentos>, Prisma__departamentosClient<departamentosGetPayload<T>>>

    /**
     * Find one Departamentos that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {departamentosFindUniqueOrThrowArgs} args - Arguments to find a Departamentos
     * @example
     * // Get one Departamentos
     * const departamentos = await prisma.departamentos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends departamentosFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, departamentosFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__departamentosClient<departamentos>, Prisma__departamentosClient<departamentosGetPayload<T>>>

    /**
     * Find the first Departamentos that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamentosFindFirstOrThrowArgs} args - Arguments to find a Departamentos
     * @example
     * // Get one Departamentos
     * const departamentos = await prisma.departamentos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends departamentosFindFirstOrThrowArgs>(
      args?: SelectSubset<T, departamentosFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__departamentosClient<departamentos>, Prisma__departamentosClient<departamentosGetPayload<T>>>

    /**
     * Count the number of Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {departamentosCountArgs} args - Arguments to filter Departamentos to count.
     * @example
     * // Count the number of Departamentos
     * const count = await prisma.departamentos.count({
     *   where: {
     *     // ... the filter for the Departamentos we want to count
     *   }
     * })
    **/
    count<T extends departamentosCountArgs>(
      args?: Subset<T, departamentosCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartamentosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DepartamentosAggregateArgs>(args: Subset<T, DepartamentosAggregateArgs>): PrismaPromise<GetDepartamentosAggregateType<T>>

    /**
     * Group by Departamentos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartamentosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DepartamentosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartamentosGroupByArgs['orderBy'] }
        : { orderBy?: DepartamentosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DepartamentosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartamentosGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for departamentos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__departamentosClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    cursos<T extends cursosFindManyArgs = {}>(args?: Subset<T, cursosFindManyArgs>): CheckSelect<T, PrismaPromise<Array<cursos>| Null>, PrismaPromise<Array<cursosGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * departamentos base type for findUnique actions
   */
  export type departamentosFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the departamentos
     * 
    **/
    select?: departamentosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: departamentosInclude | null
    /**
     * Filter, which departamentos to fetch.
     * 
    **/
    where: departamentosWhereUniqueInput
  }

  /**
   * departamentos: findUnique
   */
  export interface departamentosFindUniqueArgs extends departamentosFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * departamentos base type for findFirst actions
   */
  export type departamentosFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the departamentos
     * 
    **/
    select?: departamentosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: departamentosInclude | null
    /**
     * Filter, which departamentos to fetch.
     * 
    **/
    where?: departamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departamentos to fetch.
     * 
    **/
    orderBy?: Enumerable<departamentosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for departamentos.
     * 
    **/
    cursor?: departamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departamentos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departamentos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of departamentos.
     * 
    **/
    distinct?: Enumerable<DepartamentosScalarFieldEnum>
  }

  /**
   * departamentos: findFirst
   */
  export interface departamentosFindFirstArgs extends departamentosFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * departamentos findMany
   */
  export type departamentosFindManyArgs = {
    /**
     * Select specific fields to fetch from the departamentos
     * 
    **/
    select?: departamentosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: departamentosInclude | null
    /**
     * Filter, which departamentos to fetch.
     * 
    **/
    where?: departamentosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of departamentos to fetch.
     * 
    **/
    orderBy?: Enumerable<departamentosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing departamentos.
     * 
    **/
    cursor?: departamentosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` departamentos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` departamentos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DepartamentosScalarFieldEnum>
  }


  /**
   * departamentos create
   */
  export type departamentosCreateArgs = {
    /**
     * Select specific fields to fetch from the departamentos
     * 
    **/
    select?: departamentosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: departamentosInclude | null
    /**
     * The data needed to create a departamentos.
     * 
    **/
    data: XOR<departamentosCreateInput, departamentosUncheckedCreateInput>
  }


  /**
   * departamentos createMany
   */
  export type departamentosCreateManyArgs = {
    /**
     * The data used to create many departamentos.
     * 
    **/
    data: Enumerable<departamentosCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * departamentos update
   */
  export type departamentosUpdateArgs = {
    /**
     * Select specific fields to fetch from the departamentos
     * 
    **/
    select?: departamentosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: departamentosInclude | null
    /**
     * The data needed to update a departamentos.
     * 
    **/
    data: XOR<departamentosUpdateInput, departamentosUncheckedUpdateInput>
    /**
     * Choose, which departamentos to update.
     * 
    **/
    where: departamentosWhereUniqueInput
  }


  /**
   * departamentos updateMany
   */
  export type departamentosUpdateManyArgs = {
    /**
     * The data used to update departamentos.
     * 
    **/
    data: XOR<departamentosUpdateManyMutationInput, departamentosUncheckedUpdateManyInput>
    /**
     * Filter which departamentos to update
     * 
    **/
    where?: departamentosWhereInput
  }


  /**
   * departamentos upsert
   */
  export type departamentosUpsertArgs = {
    /**
     * Select specific fields to fetch from the departamentos
     * 
    **/
    select?: departamentosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: departamentosInclude | null
    /**
     * The filter to search for the departamentos to update in case it exists.
     * 
    **/
    where: departamentosWhereUniqueInput
    /**
     * In case the departamentos found by the `where` argument doesn't exist, create a new departamentos with this data.
     * 
    **/
    create: XOR<departamentosCreateInput, departamentosUncheckedCreateInput>
    /**
     * In case the departamentos was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<departamentosUpdateInput, departamentosUncheckedUpdateInput>
  }


  /**
   * departamentos delete
   */
  export type departamentosDeleteArgs = {
    /**
     * Select specific fields to fetch from the departamentos
     * 
    **/
    select?: departamentosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: departamentosInclude | null
    /**
     * Filter which departamentos to delete.
     * 
    **/
    where: departamentosWhereUniqueInput
  }


  /**
   * departamentos deleteMany
   */
  export type departamentosDeleteManyArgs = {
    /**
     * Filter which departamentos to delete
     * 
    **/
    where?: departamentosWhereInput
  }


  /**
   * departamentos: findUniqueOrThrow
   */
  export type departamentosFindUniqueOrThrowArgs = departamentosFindUniqueArgsBase
      

  /**
   * departamentos: findFirstOrThrow
   */
  export type departamentosFindFirstOrThrowArgs = departamentosFindFirstArgsBase
      

  /**
   * departamentos without action
   */
  export type departamentosArgs = {
    /**
     * Select specific fields to fetch from the departamentos
     * 
    **/
    select?: departamentosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: departamentosInclude | null
  }



  /**
   * Model disciplinas
   */


  export type AggregateDisciplinas = {
    _count: DisciplinasCountAggregateOutputType | null
    _avg: DisciplinasAvgAggregateOutputType | null
    _sum: DisciplinasSumAggregateOutputType | null
    _min: DisciplinasMinAggregateOutputType | null
    _max: DisciplinasMaxAggregateOutputType | null
  }

  export type DisciplinasAvgAggregateOutputType = {
    cod_disc: number | null
    carga_horaria: number | null
  }

  export type DisciplinasSumAggregateOutputType = {
    cod_disc: number | null
    carga_horaria: number | null
  }

  export type DisciplinasMinAggregateOutputType = {
    cod_disc: number | null
    nome_disc: string | null
    carga_horaria: number | null
  }

  export type DisciplinasMaxAggregateOutputType = {
    cod_disc: number | null
    nome_disc: string | null
    carga_horaria: number | null
  }

  export type DisciplinasCountAggregateOutputType = {
    cod_disc: number
    nome_disc: number
    carga_horaria: number
    _all: number
  }


  export type DisciplinasAvgAggregateInputType = {
    cod_disc?: true
    carga_horaria?: true
  }

  export type DisciplinasSumAggregateInputType = {
    cod_disc?: true
    carga_horaria?: true
  }

  export type DisciplinasMinAggregateInputType = {
    cod_disc?: true
    nome_disc?: true
    carga_horaria?: true
  }

  export type DisciplinasMaxAggregateInputType = {
    cod_disc?: true
    nome_disc?: true
    carga_horaria?: true
  }

  export type DisciplinasCountAggregateInputType = {
    cod_disc?: true
    nome_disc?: true
    carga_horaria?: true
    _all?: true
  }

  export type DisciplinasAggregateArgs = {
    /**
     * Filter which disciplinas to aggregate.
     * 
    **/
    where?: disciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     * 
    **/
    orderBy?: Enumerable<disciplinasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: disciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned disciplinas
    **/
    _count?: true | DisciplinasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DisciplinasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DisciplinasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DisciplinasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DisciplinasMaxAggregateInputType
  }

  export type GetDisciplinasAggregateType<T extends DisciplinasAggregateArgs> = {
        [P in keyof T & keyof AggregateDisciplinas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDisciplinas[P]>
      : GetScalarType<T[P], AggregateDisciplinas[P]>
  }




  export type DisciplinasGroupByArgs = {
    where?: disciplinasWhereInput
    orderBy?: Enumerable<disciplinasOrderByWithAggregationInput>
    by: Array<DisciplinasScalarFieldEnum>
    having?: disciplinasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DisciplinasCountAggregateInputType | true
    _avg?: DisciplinasAvgAggregateInputType
    _sum?: DisciplinasSumAggregateInputType
    _min?: DisciplinasMinAggregateInputType
    _max?: DisciplinasMaxAggregateInputType
  }


  export type DisciplinasGroupByOutputType = {
    cod_disc: number
    nome_disc: string
    carga_horaria: number
    _count: DisciplinasCountAggregateOutputType | null
    _avg: DisciplinasAvgAggregateOutputType | null
    _sum: DisciplinasSumAggregateOutputType | null
    _min: DisciplinasMinAggregateOutputType | null
    _max: DisciplinasMaxAggregateOutputType | null
  }

  type GetDisciplinasGroupByPayload<T extends DisciplinasGroupByArgs> = PrismaPromise<
    Array<
      PickArray<DisciplinasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DisciplinasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DisciplinasGroupByOutputType[P]>
            : GetScalarType<T[P], DisciplinasGroupByOutputType[P]>
        }
      >
    >


  export type disciplinasSelect = {
    cod_disc?: boolean
    nome_disc?: boolean
    carga_horaria?: boolean
    matriculas?: boolean | matriculasFindManyArgs
    matrizes_cursos?: boolean | matrizes_cursosFindManyArgs
    _count?: boolean | DisciplinasCountOutputTypeArgs
  }

  export type disciplinasInclude = {
    matriculas?: boolean | matriculasFindManyArgs
    matrizes_cursos?: boolean | matrizes_cursosFindManyArgs
    _count?: boolean | DisciplinasCountOutputTypeArgs
  }

  export type disciplinasGetPayload<
    S extends boolean | null | undefined | disciplinasArgs,
    U = keyof S
      > = S extends true
        ? disciplinas
    : S extends undefined
    ? never
    : S extends disciplinasArgs | disciplinasFindManyArgs
    ?'include' extends U
    ? disciplinas  & {
    [P in TrueKeys<S['include']>]:
        P extends 'matriculas' ? Array < matriculasGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends 'matrizes_cursos' ? Array < matrizes_cursosGetPayload<Exclude<S['include'], undefined | null>[P]>>  :
        P extends '_count' ? DisciplinasCountOutputTypeGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'matriculas' ? Array < matriculasGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends 'matrizes_cursos' ? Array < matrizes_cursosGetPayload<Exclude<S['select'], undefined | null>[P]>>  :
        P extends '_count' ? DisciplinasCountOutputTypeGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof disciplinas ? disciplinas[P] : never
  } 
    : disciplinas
  : disciplinas


  type disciplinasCountArgs = Merge<
    Omit<disciplinasFindManyArgs, 'select' | 'include'> & {
      select?: DisciplinasCountAggregateInputType | true
    }
  >

  export interface disciplinasDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Disciplinas that matches the filter.
     * @param {disciplinasFindUniqueArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends disciplinasFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, disciplinasFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'disciplinas'> extends True ? CheckSelect<T, Prisma__disciplinasClient<disciplinas>, Prisma__disciplinasClient<disciplinasGetPayload<T>>> : CheckSelect<T, Prisma__disciplinasClient<disciplinas | null, null>, Prisma__disciplinasClient<disciplinasGetPayload<T> | null, null>>

    /**
     * Find the first Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasFindFirstArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends disciplinasFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, disciplinasFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'disciplinas'> extends True ? CheckSelect<T, Prisma__disciplinasClient<disciplinas>, Prisma__disciplinasClient<disciplinasGetPayload<T>>> : CheckSelect<T, Prisma__disciplinasClient<disciplinas | null, null>, Prisma__disciplinasClient<disciplinasGetPayload<T> | null, null>>

    /**
     * Find zero or more Disciplinas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Disciplinas
     * const disciplinas = await prisma.disciplinas.findMany()
     * 
     * // Get first 10 Disciplinas
     * const disciplinas = await prisma.disciplinas.findMany({ take: 10 })
     * 
     * // Only select the `cod_disc`
     * const disciplinasWithCod_discOnly = await prisma.disciplinas.findMany({ select: { cod_disc: true } })
     * 
    **/
    findMany<T extends disciplinasFindManyArgs>(
      args?: SelectSubset<T, disciplinasFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<disciplinas>>, PrismaPromise<Array<disciplinasGetPayload<T>>>>

    /**
     * Create a Disciplinas.
     * @param {disciplinasCreateArgs} args - Arguments to create a Disciplinas.
     * @example
     * // Create one Disciplinas
     * const Disciplinas = await prisma.disciplinas.create({
     *   data: {
     *     // ... data to create a Disciplinas
     *   }
     * })
     * 
    **/
    create<T extends disciplinasCreateArgs>(
      args: SelectSubset<T, disciplinasCreateArgs>
    ): CheckSelect<T, Prisma__disciplinasClient<disciplinas>, Prisma__disciplinasClient<disciplinasGetPayload<T>>>

    /**
     * Create many Disciplinas.
     *     @param {disciplinasCreateManyArgs} args - Arguments to create many Disciplinas.
     *     @example
     *     // Create many Disciplinas
     *     const disciplinas = await prisma.disciplinas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends disciplinasCreateManyArgs>(
      args?: SelectSubset<T, disciplinasCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Disciplinas.
     * @param {disciplinasDeleteArgs} args - Arguments to delete one Disciplinas.
     * @example
     * // Delete one Disciplinas
     * const Disciplinas = await prisma.disciplinas.delete({
     *   where: {
     *     // ... filter to delete one Disciplinas
     *   }
     * })
     * 
    **/
    delete<T extends disciplinasDeleteArgs>(
      args: SelectSubset<T, disciplinasDeleteArgs>
    ): CheckSelect<T, Prisma__disciplinasClient<disciplinas>, Prisma__disciplinasClient<disciplinasGetPayload<T>>>

    /**
     * Update one Disciplinas.
     * @param {disciplinasUpdateArgs} args - Arguments to update one Disciplinas.
     * @example
     * // Update one Disciplinas
     * const disciplinas = await prisma.disciplinas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends disciplinasUpdateArgs>(
      args: SelectSubset<T, disciplinasUpdateArgs>
    ): CheckSelect<T, Prisma__disciplinasClient<disciplinas>, Prisma__disciplinasClient<disciplinasGetPayload<T>>>

    /**
     * Delete zero or more Disciplinas.
     * @param {disciplinasDeleteManyArgs} args - Arguments to filter Disciplinas to delete.
     * @example
     * // Delete a few Disciplinas
     * const { count } = await prisma.disciplinas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends disciplinasDeleteManyArgs>(
      args?: SelectSubset<T, disciplinasDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Disciplinas
     * const disciplinas = await prisma.disciplinas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends disciplinasUpdateManyArgs>(
      args: SelectSubset<T, disciplinasUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Disciplinas.
     * @param {disciplinasUpsertArgs} args - Arguments to update or create a Disciplinas.
     * @example
     * // Update or create a Disciplinas
     * const disciplinas = await prisma.disciplinas.upsert({
     *   create: {
     *     // ... data to create a Disciplinas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Disciplinas we want to update
     *   }
     * })
    **/
    upsert<T extends disciplinasUpsertArgs>(
      args: SelectSubset<T, disciplinasUpsertArgs>
    ): CheckSelect<T, Prisma__disciplinasClient<disciplinas>, Prisma__disciplinasClient<disciplinasGetPayload<T>>>

    /**
     * Find one Disciplinas that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {disciplinasFindUniqueOrThrowArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends disciplinasFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, disciplinasFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__disciplinasClient<disciplinas>, Prisma__disciplinasClient<disciplinasGetPayload<T>>>

    /**
     * Find the first Disciplinas that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasFindFirstOrThrowArgs} args - Arguments to find a Disciplinas
     * @example
     * // Get one Disciplinas
     * const disciplinas = await prisma.disciplinas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends disciplinasFindFirstOrThrowArgs>(
      args?: SelectSubset<T, disciplinasFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__disciplinasClient<disciplinas>, Prisma__disciplinasClient<disciplinasGetPayload<T>>>

    /**
     * Count the number of Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {disciplinasCountArgs} args - Arguments to filter Disciplinas to count.
     * @example
     * // Count the number of Disciplinas
     * const count = await prisma.disciplinas.count({
     *   where: {
     *     // ... the filter for the Disciplinas we want to count
     *   }
     * })
    **/
    count<T extends disciplinasCountArgs>(
      args?: Subset<T, disciplinasCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DisciplinasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DisciplinasAggregateArgs>(args: Subset<T, DisciplinasAggregateArgs>): PrismaPromise<GetDisciplinasAggregateType<T>>

    /**
     * Group by Disciplinas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DisciplinasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DisciplinasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DisciplinasGroupByArgs['orderBy'] }
        : { orderBy?: DisciplinasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DisciplinasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDisciplinasGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for disciplinas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__disciplinasClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    matriculas<T extends matriculasFindManyArgs = {}>(args?: Subset<T, matriculasFindManyArgs>): CheckSelect<T, PrismaPromise<Array<matriculas>| Null>, PrismaPromise<Array<matriculasGetPayload<T>>| Null>>;

    matrizes_cursos<T extends matrizes_cursosFindManyArgs = {}>(args?: Subset<T, matrizes_cursosFindManyArgs>): CheckSelect<T, PrismaPromise<Array<matrizes_cursos>| Null>, PrismaPromise<Array<matrizes_cursosGetPayload<T>>| Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * disciplinas base type for findUnique actions
   */
  export type disciplinasFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the disciplinas
     * 
    **/
    select?: disciplinasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: disciplinasInclude | null
    /**
     * Filter, which disciplinas to fetch.
     * 
    **/
    where: disciplinasWhereUniqueInput
  }

  /**
   * disciplinas: findUnique
   */
  export interface disciplinasFindUniqueArgs extends disciplinasFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * disciplinas base type for findFirst actions
   */
  export type disciplinasFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the disciplinas
     * 
    **/
    select?: disciplinasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: disciplinasInclude | null
    /**
     * Filter, which disciplinas to fetch.
     * 
    **/
    where?: disciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     * 
    **/
    orderBy?: Enumerable<disciplinasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for disciplinas.
     * 
    **/
    cursor?: disciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of disciplinas.
     * 
    **/
    distinct?: Enumerable<DisciplinasScalarFieldEnum>
  }

  /**
   * disciplinas: findFirst
   */
  export interface disciplinasFindFirstArgs extends disciplinasFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * disciplinas findMany
   */
  export type disciplinasFindManyArgs = {
    /**
     * Select specific fields to fetch from the disciplinas
     * 
    **/
    select?: disciplinasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: disciplinasInclude | null
    /**
     * Filter, which disciplinas to fetch.
     * 
    **/
    where?: disciplinasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of disciplinas to fetch.
     * 
    **/
    orderBy?: Enumerable<disciplinasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing disciplinas.
     * 
    **/
    cursor?: disciplinasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` disciplinas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` disciplinas.
     * 
    **/
    skip?: number
    distinct?: Enumerable<DisciplinasScalarFieldEnum>
  }


  /**
   * disciplinas create
   */
  export type disciplinasCreateArgs = {
    /**
     * Select specific fields to fetch from the disciplinas
     * 
    **/
    select?: disciplinasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: disciplinasInclude | null
    /**
     * The data needed to create a disciplinas.
     * 
    **/
    data: XOR<disciplinasCreateInput, disciplinasUncheckedCreateInput>
  }


  /**
   * disciplinas createMany
   */
  export type disciplinasCreateManyArgs = {
    /**
     * The data used to create many disciplinas.
     * 
    **/
    data: Enumerable<disciplinasCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * disciplinas update
   */
  export type disciplinasUpdateArgs = {
    /**
     * Select specific fields to fetch from the disciplinas
     * 
    **/
    select?: disciplinasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: disciplinasInclude | null
    /**
     * The data needed to update a disciplinas.
     * 
    **/
    data: XOR<disciplinasUpdateInput, disciplinasUncheckedUpdateInput>
    /**
     * Choose, which disciplinas to update.
     * 
    **/
    where: disciplinasWhereUniqueInput
  }


  /**
   * disciplinas updateMany
   */
  export type disciplinasUpdateManyArgs = {
    /**
     * The data used to update disciplinas.
     * 
    **/
    data: XOR<disciplinasUpdateManyMutationInput, disciplinasUncheckedUpdateManyInput>
    /**
     * Filter which disciplinas to update
     * 
    **/
    where?: disciplinasWhereInput
  }


  /**
   * disciplinas upsert
   */
  export type disciplinasUpsertArgs = {
    /**
     * Select specific fields to fetch from the disciplinas
     * 
    **/
    select?: disciplinasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: disciplinasInclude | null
    /**
     * The filter to search for the disciplinas to update in case it exists.
     * 
    **/
    where: disciplinasWhereUniqueInput
    /**
     * In case the disciplinas found by the `where` argument doesn't exist, create a new disciplinas with this data.
     * 
    **/
    create: XOR<disciplinasCreateInput, disciplinasUncheckedCreateInput>
    /**
     * In case the disciplinas was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<disciplinasUpdateInput, disciplinasUncheckedUpdateInput>
  }


  /**
   * disciplinas delete
   */
  export type disciplinasDeleteArgs = {
    /**
     * Select specific fields to fetch from the disciplinas
     * 
    **/
    select?: disciplinasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: disciplinasInclude | null
    /**
     * Filter which disciplinas to delete.
     * 
    **/
    where: disciplinasWhereUniqueInput
  }


  /**
   * disciplinas deleteMany
   */
  export type disciplinasDeleteManyArgs = {
    /**
     * Filter which disciplinas to delete
     * 
    **/
    where?: disciplinasWhereInput
  }


  /**
   * disciplinas: findUniqueOrThrow
   */
  export type disciplinasFindUniqueOrThrowArgs = disciplinasFindUniqueArgsBase
      

  /**
   * disciplinas: findFirstOrThrow
   */
  export type disciplinasFindFirstOrThrowArgs = disciplinasFindFirstArgsBase
      

  /**
   * disciplinas without action
   */
  export type disciplinasArgs = {
    /**
     * Select specific fields to fetch from the disciplinas
     * 
    **/
    select?: disciplinasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: disciplinasInclude | null
  }



  /**
   * Model matriculas
   */


  export type AggregateMatriculas = {
    _count: MatriculasCountAggregateOutputType | null
    _avg: MatriculasAvgAggregateOutputType | null
    _sum: MatriculasSumAggregateOutputType | null
    _min: MatriculasMinAggregateOutputType | null
    _max: MatriculasMaxAggregateOutputType | null
  }

  export type MatriculasAvgAggregateOutputType = {
    semestre: number | null
    mat_alu: number | null
    cod_disc: number | null
    nota: number | null
    faltas: number | null
  }

  export type MatriculasSumAggregateOutputType = {
    semestre: number | null
    mat_alu: number | null
    cod_disc: number | null
    nota: number | null
    faltas: number | null
  }

  export type MatriculasMinAggregateOutputType = {
    semestre: number | null
    mat_alu: number | null
    cod_disc: number | null
    nota: number | null
    faltas: number | null
    status: string | null
  }

  export type MatriculasMaxAggregateOutputType = {
    semestre: number | null
    mat_alu: number | null
    cod_disc: number | null
    nota: number | null
    faltas: number | null
    status: string | null
  }

  export type MatriculasCountAggregateOutputType = {
    semestre: number
    mat_alu: number
    cod_disc: number
    nota: number
    faltas: number
    status: number
    _all: number
  }


  export type MatriculasAvgAggregateInputType = {
    semestre?: true
    mat_alu?: true
    cod_disc?: true
    nota?: true
    faltas?: true
  }

  export type MatriculasSumAggregateInputType = {
    semestre?: true
    mat_alu?: true
    cod_disc?: true
    nota?: true
    faltas?: true
  }

  export type MatriculasMinAggregateInputType = {
    semestre?: true
    mat_alu?: true
    cod_disc?: true
    nota?: true
    faltas?: true
    status?: true
  }

  export type MatriculasMaxAggregateInputType = {
    semestre?: true
    mat_alu?: true
    cod_disc?: true
    nota?: true
    faltas?: true
    status?: true
  }

  export type MatriculasCountAggregateInputType = {
    semestre?: true
    mat_alu?: true
    cod_disc?: true
    nota?: true
    faltas?: true
    status?: true
    _all?: true
  }

  export type MatriculasAggregateArgs = {
    /**
     * Filter which matriculas to aggregate.
     * 
    **/
    where?: matriculasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matriculas to fetch.
     * 
    **/
    orderBy?: Enumerable<matriculasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: matriculasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matriculas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matriculas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned matriculas
    **/
    _count?: true | MatriculasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MatriculasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MatriculasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MatriculasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MatriculasMaxAggregateInputType
  }

  export type GetMatriculasAggregateType<T extends MatriculasAggregateArgs> = {
        [P in keyof T & keyof AggregateMatriculas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatriculas[P]>
      : GetScalarType<T[P], AggregateMatriculas[P]>
  }




  export type MatriculasGroupByArgs = {
    where?: matriculasWhereInput
    orderBy?: Enumerable<matriculasOrderByWithAggregationInput>
    by: Array<MatriculasScalarFieldEnum>
    having?: matriculasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MatriculasCountAggregateInputType | true
    _avg?: MatriculasAvgAggregateInputType
    _sum?: MatriculasSumAggregateInputType
    _min?: MatriculasMinAggregateInputType
    _max?: MatriculasMaxAggregateInputType
  }


  export type MatriculasGroupByOutputType = {
    semestre: number
    mat_alu: number
    cod_disc: number
    nota: number | null
    faltas: number | null
    status: string | null
    _count: MatriculasCountAggregateOutputType | null
    _avg: MatriculasAvgAggregateOutputType | null
    _sum: MatriculasSumAggregateOutputType | null
    _min: MatriculasMinAggregateOutputType | null
    _max: MatriculasMaxAggregateOutputType | null
  }

  type GetMatriculasGroupByPayload<T extends MatriculasGroupByArgs> = PrismaPromise<
    Array<
      PickArray<MatriculasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MatriculasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MatriculasGroupByOutputType[P]>
            : GetScalarType<T[P], MatriculasGroupByOutputType[P]>
        }
      >
    >


  export type matriculasSelect = {
    semestre?: boolean
    mat_alu?: boolean
    cod_disc?: boolean
    nota?: boolean
    faltas?: boolean
    status?: boolean
    alunos?: boolean | alunosArgs
    disciplinas?: boolean | disciplinasArgs
  }

  export type matriculasInclude = {
    alunos?: boolean | alunosArgs
    disciplinas?: boolean | disciplinasArgs
  }

  export type matriculasGetPayload<
    S extends boolean | null | undefined | matriculasArgs,
    U = keyof S
      > = S extends true
        ? matriculas
    : S extends undefined
    ? never
    : S extends matriculasArgs | matriculasFindManyArgs
    ?'include' extends U
    ? matriculas  & {
    [P in TrueKeys<S['include']>]:
        P extends 'alunos' ? alunosGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'disciplinas' ? disciplinasGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'alunos' ? alunosGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'disciplinas' ? disciplinasGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof matriculas ? matriculas[P] : never
  } 
    : matriculas
  : matriculas


  type matriculasCountArgs = Merge<
    Omit<matriculasFindManyArgs, 'select' | 'include'> & {
      select?: MatriculasCountAggregateInputType | true
    }
  >

  export interface matriculasDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Matriculas that matches the filter.
     * @param {matriculasFindUniqueArgs} args - Arguments to find a Matriculas
     * @example
     * // Get one Matriculas
     * const matriculas = await prisma.matriculas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends matriculasFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, matriculasFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'matriculas'> extends True ? CheckSelect<T, Prisma__matriculasClient<matriculas>, Prisma__matriculasClient<matriculasGetPayload<T>>> : CheckSelect<T, Prisma__matriculasClient<matriculas | null, null>, Prisma__matriculasClient<matriculasGetPayload<T> | null, null>>

    /**
     * Find the first Matriculas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matriculasFindFirstArgs} args - Arguments to find a Matriculas
     * @example
     * // Get one Matriculas
     * const matriculas = await prisma.matriculas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends matriculasFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, matriculasFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'matriculas'> extends True ? CheckSelect<T, Prisma__matriculasClient<matriculas>, Prisma__matriculasClient<matriculasGetPayload<T>>> : CheckSelect<T, Prisma__matriculasClient<matriculas | null, null>, Prisma__matriculasClient<matriculasGetPayload<T> | null, null>>

    /**
     * Find zero or more Matriculas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matriculasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matriculas
     * const matriculas = await prisma.matriculas.findMany()
     * 
     * // Get first 10 Matriculas
     * const matriculas = await prisma.matriculas.findMany({ take: 10 })
     * 
     * // Only select the `semestre`
     * const matriculasWithSemestreOnly = await prisma.matriculas.findMany({ select: { semestre: true } })
     * 
    **/
    findMany<T extends matriculasFindManyArgs>(
      args?: SelectSubset<T, matriculasFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<matriculas>>, PrismaPromise<Array<matriculasGetPayload<T>>>>

    /**
     * Create a Matriculas.
     * @param {matriculasCreateArgs} args - Arguments to create a Matriculas.
     * @example
     * // Create one Matriculas
     * const Matriculas = await prisma.matriculas.create({
     *   data: {
     *     // ... data to create a Matriculas
     *   }
     * })
     * 
    **/
    create<T extends matriculasCreateArgs>(
      args: SelectSubset<T, matriculasCreateArgs>
    ): CheckSelect<T, Prisma__matriculasClient<matriculas>, Prisma__matriculasClient<matriculasGetPayload<T>>>

    /**
     * Create many Matriculas.
     *     @param {matriculasCreateManyArgs} args - Arguments to create many Matriculas.
     *     @example
     *     // Create many Matriculas
     *     const matriculas = await prisma.matriculas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends matriculasCreateManyArgs>(
      args?: SelectSubset<T, matriculasCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Matriculas.
     * @param {matriculasDeleteArgs} args - Arguments to delete one Matriculas.
     * @example
     * // Delete one Matriculas
     * const Matriculas = await prisma.matriculas.delete({
     *   where: {
     *     // ... filter to delete one Matriculas
     *   }
     * })
     * 
    **/
    delete<T extends matriculasDeleteArgs>(
      args: SelectSubset<T, matriculasDeleteArgs>
    ): CheckSelect<T, Prisma__matriculasClient<matriculas>, Prisma__matriculasClient<matriculasGetPayload<T>>>

    /**
     * Update one Matriculas.
     * @param {matriculasUpdateArgs} args - Arguments to update one Matriculas.
     * @example
     * // Update one Matriculas
     * const matriculas = await prisma.matriculas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends matriculasUpdateArgs>(
      args: SelectSubset<T, matriculasUpdateArgs>
    ): CheckSelect<T, Prisma__matriculasClient<matriculas>, Prisma__matriculasClient<matriculasGetPayload<T>>>

    /**
     * Delete zero or more Matriculas.
     * @param {matriculasDeleteManyArgs} args - Arguments to filter Matriculas to delete.
     * @example
     * // Delete a few Matriculas
     * const { count } = await prisma.matriculas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends matriculasDeleteManyArgs>(
      args?: SelectSubset<T, matriculasDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matriculasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matriculas
     * const matriculas = await prisma.matriculas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends matriculasUpdateManyArgs>(
      args: SelectSubset<T, matriculasUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Matriculas.
     * @param {matriculasUpsertArgs} args - Arguments to update or create a Matriculas.
     * @example
     * // Update or create a Matriculas
     * const matriculas = await prisma.matriculas.upsert({
     *   create: {
     *     // ... data to create a Matriculas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matriculas we want to update
     *   }
     * })
    **/
    upsert<T extends matriculasUpsertArgs>(
      args: SelectSubset<T, matriculasUpsertArgs>
    ): CheckSelect<T, Prisma__matriculasClient<matriculas>, Prisma__matriculasClient<matriculasGetPayload<T>>>

    /**
     * Find one Matriculas that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {matriculasFindUniqueOrThrowArgs} args - Arguments to find a Matriculas
     * @example
     * // Get one Matriculas
     * const matriculas = await prisma.matriculas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends matriculasFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, matriculasFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__matriculasClient<matriculas>, Prisma__matriculasClient<matriculasGetPayload<T>>>

    /**
     * Find the first Matriculas that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matriculasFindFirstOrThrowArgs} args - Arguments to find a Matriculas
     * @example
     * // Get one Matriculas
     * const matriculas = await prisma.matriculas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends matriculasFindFirstOrThrowArgs>(
      args?: SelectSubset<T, matriculasFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__matriculasClient<matriculas>, Prisma__matriculasClient<matriculasGetPayload<T>>>

    /**
     * Count the number of Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matriculasCountArgs} args - Arguments to filter Matriculas to count.
     * @example
     * // Count the number of Matriculas
     * const count = await prisma.matriculas.count({
     *   where: {
     *     // ... the filter for the Matriculas we want to count
     *   }
     * })
    **/
    count<T extends matriculasCountArgs>(
      args?: Subset<T, matriculasCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MatriculasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MatriculasAggregateArgs>(args: Subset<T, MatriculasAggregateArgs>): PrismaPromise<GetMatriculasAggregateType<T>>

    /**
     * Group by Matriculas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MatriculasGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MatriculasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MatriculasGroupByArgs['orderBy'] }
        : { orderBy?: MatriculasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MatriculasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatriculasGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for matriculas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__matriculasClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    alunos<T extends alunosArgs = {}>(args?: Subset<T, alunosArgs>): CheckSelect<T, Prisma__alunosClient<alunos | Null>, Prisma__alunosClient<alunosGetPayload<T> | Null>>;

    disciplinas<T extends disciplinasArgs = {}>(args?: Subset<T, disciplinasArgs>): CheckSelect<T, Prisma__disciplinasClient<disciplinas | Null>, Prisma__disciplinasClient<disciplinasGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * matriculas base type for findUnique actions
   */
  export type matriculasFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the matriculas
     * 
    **/
    select?: matriculasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matriculasInclude | null
    /**
     * Filter, which matriculas to fetch.
     * 
    **/
    where: matriculasWhereUniqueInput
  }

  /**
   * matriculas: findUnique
   */
  export interface matriculasFindUniqueArgs extends matriculasFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * matriculas base type for findFirst actions
   */
  export type matriculasFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the matriculas
     * 
    **/
    select?: matriculasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matriculasInclude | null
    /**
     * Filter, which matriculas to fetch.
     * 
    **/
    where?: matriculasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matriculas to fetch.
     * 
    **/
    orderBy?: Enumerable<matriculasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matriculas.
     * 
    **/
    cursor?: matriculasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matriculas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matriculas.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matriculas.
     * 
    **/
    distinct?: Enumerable<MatriculasScalarFieldEnum>
  }

  /**
   * matriculas: findFirst
   */
  export interface matriculasFindFirstArgs extends matriculasFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * matriculas findMany
   */
  export type matriculasFindManyArgs = {
    /**
     * Select specific fields to fetch from the matriculas
     * 
    **/
    select?: matriculasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matriculasInclude | null
    /**
     * Filter, which matriculas to fetch.
     * 
    **/
    where?: matriculasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matriculas to fetch.
     * 
    **/
    orderBy?: Enumerable<matriculasOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing matriculas.
     * 
    **/
    cursor?: matriculasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matriculas from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matriculas.
     * 
    **/
    skip?: number
    distinct?: Enumerable<MatriculasScalarFieldEnum>
  }


  /**
   * matriculas create
   */
  export type matriculasCreateArgs = {
    /**
     * Select specific fields to fetch from the matriculas
     * 
    **/
    select?: matriculasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matriculasInclude | null
    /**
     * The data needed to create a matriculas.
     * 
    **/
    data: XOR<matriculasCreateInput, matriculasUncheckedCreateInput>
  }


  /**
   * matriculas createMany
   */
  export type matriculasCreateManyArgs = {
    /**
     * The data used to create many matriculas.
     * 
    **/
    data: Enumerable<matriculasCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * matriculas update
   */
  export type matriculasUpdateArgs = {
    /**
     * Select specific fields to fetch from the matriculas
     * 
    **/
    select?: matriculasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matriculasInclude | null
    /**
     * The data needed to update a matriculas.
     * 
    **/
    data: XOR<matriculasUpdateInput, matriculasUncheckedUpdateInput>
    /**
     * Choose, which matriculas to update.
     * 
    **/
    where: matriculasWhereUniqueInput
  }


  /**
   * matriculas updateMany
   */
  export type matriculasUpdateManyArgs = {
    /**
     * The data used to update matriculas.
     * 
    **/
    data: XOR<matriculasUpdateManyMutationInput, matriculasUncheckedUpdateManyInput>
    /**
     * Filter which matriculas to update
     * 
    **/
    where?: matriculasWhereInput
  }


  /**
   * matriculas upsert
   */
  export type matriculasUpsertArgs = {
    /**
     * Select specific fields to fetch from the matriculas
     * 
    **/
    select?: matriculasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matriculasInclude | null
    /**
     * The filter to search for the matriculas to update in case it exists.
     * 
    **/
    where: matriculasWhereUniqueInput
    /**
     * In case the matriculas found by the `where` argument doesn't exist, create a new matriculas with this data.
     * 
    **/
    create: XOR<matriculasCreateInput, matriculasUncheckedCreateInput>
    /**
     * In case the matriculas was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<matriculasUpdateInput, matriculasUncheckedUpdateInput>
  }


  /**
   * matriculas delete
   */
  export type matriculasDeleteArgs = {
    /**
     * Select specific fields to fetch from the matriculas
     * 
    **/
    select?: matriculasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matriculasInclude | null
    /**
     * Filter which matriculas to delete.
     * 
    **/
    where: matriculasWhereUniqueInput
  }


  /**
   * matriculas deleteMany
   */
  export type matriculasDeleteManyArgs = {
    /**
     * Filter which matriculas to delete
     * 
    **/
    where?: matriculasWhereInput
  }


  /**
   * matriculas: findUniqueOrThrow
   */
  export type matriculasFindUniqueOrThrowArgs = matriculasFindUniqueArgsBase
      

  /**
   * matriculas: findFirstOrThrow
   */
  export type matriculasFindFirstOrThrowArgs = matriculasFindFirstArgsBase
      

  /**
   * matriculas without action
   */
  export type matriculasArgs = {
    /**
     * Select specific fields to fetch from the matriculas
     * 
    **/
    select?: matriculasSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matriculasInclude | null
  }



  /**
   * Model matrizes_cursos
   */


  export type AggregateMatrizes_cursos = {
    _count: Matrizes_cursosCountAggregateOutputType | null
    _avg: Matrizes_cursosAvgAggregateOutputType | null
    _sum: Matrizes_cursosSumAggregateOutputType | null
    _min: Matrizes_cursosMinAggregateOutputType | null
    _max: Matrizes_cursosMaxAggregateOutputType | null
  }

  export type Matrizes_cursosAvgAggregateOutputType = {
    cod_curso: number | null
    cod_disc: number | null
    periodo: number | null
  }

  export type Matrizes_cursosSumAggregateOutputType = {
    cod_curso: number | null
    cod_disc: number | null
    periodo: number | null
  }

  export type Matrizes_cursosMinAggregateOutputType = {
    cod_curso: number | null
    cod_disc: number | null
    periodo: number | null
  }

  export type Matrizes_cursosMaxAggregateOutputType = {
    cod_curso: number | null
    cod_disc: number | null
    periodo: number | null
  }

  export type Matrizes_cursosCountAggregateOutputType = {
    cod_curso: number
    cod_disc: number
    periodo: number
    _all: number
  }


  export type Matrizes_cursosAvgAggregateInputType = {
    cod_curso?: true
    cod_disc?: true
    periodo?: true
  }

  export type Matrizes_cursosSumAggregateInputType = {
    cod_curso?: true
    cod_disc?: true
    periodo?: true
  }

  export type Matrizes_cursosMinAggregateInputType = {
    cod_curso?: true
    cod_disc?: true
    periodo?: true
  }

  export type Matrizes_cursosMaxAggregateInputType = {
    cod_curso?: true
    cod_disc?: true
    periodo?: true
  }

  export type Matrizes_cursosCountAggregateInputType = {
    cod_curso?: true
    cod_disc?: true
    periodo?: true
    _all?: true
  }

  export type Matrizes_cursosAggregateArgs = {
    /**
     * Filter which matrizes_cursos to aggregate.
     * 
    **/
    where?: matrizes_cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matrizes_cursos to fetch.
     * 
    **/
    orderBy?: Enumerable<matrizes_cursosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     * 
    **/
    cursor?: matrizes_cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matrizes_cursos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matrizes_cursos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned matrizes_cursos
    **/
    _count?: true | Matrizes_cursosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Matrizes_cursosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Matrizes_cursosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Matrizes_cursosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Matrizes_cursosMaxAggregateInputType
  }

  export type GetMatrizes_cursosAggregateType<T extends Matrizes_cursosAggregateArgs> = {
        [P in keyof T & keyof AggregateMatrizes_cursos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMatrizes_cursos[P]>
      : GetScalarType<T[P], AggregateMatrizes_cursos[P]>
  }




  export type Matrizes_cursosGroupByArgs = {
    where?: matrizes_cursosWhereInput
    orderBy?: Enumerable<matrizes_cursosOrderByWithAggregationInput>
    by: Array<Matrizes_cursosScalarFieldEnum>
    having?: matrizes_cursosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Matrizes_cursosCountAggregateInputType | true
    _avg?: Matrizes_cursosAvgAggregateInputType
    _sum?: Matrizes_cursosSumAggregateInputType
    _min?: Matrizes_cursosMinAggregateInputType
    _max?: Matrizes_cursosMaxAggregateInputType
  }


  export type Matrizes_cursosGroupByOutputType = {
    cod_curso: number
    cod_disc: number
    periodo: number
    _count: Matrizes_cursosCountAggregateOutputType | null
    _avg: Matrizes_cursosAvgAggregateOutputType | null
    _sum: Matrizes_cursosSumAggregateOutputType | null
    _min: Matrizes_cursosMinAggregateOutputType | null
    _max: Matrizes_cursosMaxAggregateOutputType | null
  }

  type GetMatrizes_cursosGroupByPayload<T extends Matrizes_cursosGroupByArgs> = PrismaPromise<
    Array<
      PickArray<Matrizes_cursosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Matrizes_cursosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Matrizes_cursosGroupByOutputType[P]>
            : GetScalarType<T[P], Matrizes_cursosGroupByOutputType[P]>
        }
      >
    >


  export type matrizes_cursosSelect = {
    cod_curso?: boolean
    cod_disc?: boolean
    periodo?: boolean
    cursos?: boolean | cursosArgs
    disciplinas?: boolean | disciplinasArgs
  }

  export type matrizes_cursosInclude = {
    cursos?: boolean | cursosArgs
    disciplinas?: boolean | disciplinasArgs
  }

  export type matrizes_cursosGetPayload<
    S extends boolean | null | undefined | matrizes_cursosArgs,
    U = keyof S
      > = S extends true
        ? matrizes_cursos
    : S extends undefined
    ? never
    : S extends matrizes_cursosArgs | matrizes_cursosFindManyArgs
    ?'include' extends U
    ? matrizes_cursos  & {
    [P in TrueKeys<S['include']>]:
        P extends 'cursos' ? cursosGetPayload<Exclude<S['include'], undefined | null>[P]> :
        P extends 'disciplinas' ? disciplinasGetPayload<Exclude<S['include'], undefined | null>[P]> :  never
  } 
    : 'select' extends U
    ? {
    [P in TrueKeys<S['select']>]:
        P extends 'cursos' ? cursosGetPayload<Exclude<S['select'], undefined | null>[P]> :
        P extends 'disciplinas' ? disciplinasGetPayload<Exclude<S['select'], undefined | null>[P]> :  P extends keyof matrizes_cursos ? matrizes_cursos[P] : never
  } 
    : matrizes_cursos
  : matrizes_cursos


  type matrizes_cursosCountArgs = Merge<
    Omit<matrizes_cursosFindManyArgs, 'select' | 'include'> & {
      select?: Matrizes_cursosCountAggregateInputType | true
    }
  >

  export interface matrizes_cursosDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {
    /**
     * Find zero or one Matrizes_cursos that matches the filter.
     * @param {matrizes_cursosFindUniqueArgs} args - Arguments to find a Matrizes_cursos
     * @example
     * // Get one Matrizes_cursos
     * const matrizes_cursos = await prisma.matrizes_cursos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends matrizes_cursosFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, matrizes_cursosFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'matrizes_cursos'> extends True ? CheckSelect<T, Prisma__matrizes_cursosClient<matrizes_cursos>, Prisma__matrizes_cursosClient<matrizes_cursosGetPayload<T>>> : CheckSelect<T, Prisma__matrizes_cursosClient<matrizes_cursos | null, null>, Prisma__matrizes_cursosClient<matrizes_cursosGetPayload<T> | null, null>>

    /**
     * Find the first Matrizes_cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matrizes_cursosFindFirstArgs} args - Arguments to find a Matrizes_cursos
     * @example
     * // Get one Matrizes_cursos
     * const matrizes_cursos = await prisma.matrizes_cursos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends matrizes_cursosFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, matrizes_cursosFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'matrizes_cursos'> extends True ? CheckSelect<T, Prisma__matrizes_cursosClient<matrizes_cursos>, Prisma__matrizes_cursosClient<matrizes_cursosGetPayload<T>>> : CheckSelect<T, Prisma__matrizes_cursosClient<matrizes_cursos | null, null>, Prisma__matrizes_cursosClient<matrizes_cursosGetPayload<T> | null, null>>

    /**
     * Find zero or more Matrizes_cursos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matrizes_cursosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Matrizes_cursos
     * const matrizes_cursos = await prisma.matrizes_cursos.findMany()
     * 
     * // Get first 10 Matrizes_cursos
     * const matrizes_cursos = await prisma.matrizes_cursos.findMany({ take: 10 })
     * 
     * // Only select the `cod_curso`
     * const matrizes_cursosWithCod_cursoOnly = await prisma.matrizes_cursos.findMany({ select: { cod_curso: true } })
     * 
    **/
    findMany<T extends matrizes_cursosFindManyArgs>(
      args?: SelectSubset<T, matrizes_cursosFindManyArgs>
    ): CheckSelect<T, PrismaPromise<Array<matrizes_cursos>>, PrismaPromise<Array<matrizes_cursosGetPayload<T>>>>

    /**
     * Create a Matrizes_cursos.
     * @param {matrizes_cursosCreateArgs} args - Arguments to create a Matrizes_cursos.
     * @example
     * // Create one Matrizes_cursos
     * const Matrizes_cursos = await prisma.matrizes_cursos.create({
     *   data: {
     *     // ... data to create a Matrizes_cursos
     *   }
     * })
     * 
    **/
    create<T extends matrizes_cursosCreateArgs>(
      args: SelectSubset<T, matrizes_cursosCreateArgs>
    ): CheckSelect<T, Prisma__matrizes_cursosClient<matrizes_cursos>, Prisma__matrizes_cursosClient<matrizes_cursosGetPayload<T>>>

    /**
     * Create many Matrizes_cursos.
     *     @param {matrizes_cursosCreateManyArgs} args - Arguments to create many Matrizes_cursos.
     *     @example
     *     // Create many Matrizes_cursos
     *     const matrizes_cursos = await prisma.matrizes_cursos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends matrizes_cursosCreateManyArgs>(
      args?: SelectSubset<T, matrizes_cursosCreateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Delete a Matrizes_cursos.
     * @param {matrizes_cursosDeleteArgs} args - Arguments to delete one Matrizes_cursos.
     * @example
     * // Delete one Matrizes_cursos
     * const Matrizes_cursos = await prisma.matrizes_cursos.delete({
     *   where: {
     *     // ... filter to delete one Matrizes_cursos
     *   }
     * })
     * 
    **/
    delete<T extends matrizes_cursosDeleteArgs>(
      args: SelectSubset<T, matrizes_cursosDeleteArgs>
    ): CheckSelect<T, Prisma__matrizes_cursosClient<matrizes_cursos>, Prisma__matrizes_cursosClient<matrizes_cursosGetPayload<T>>>

    /**
     * Update one Matrizes_cursos.
     * @param {matrizes_cursosUpdateArgs} args - Arguments to update one Matrizes_cursos.
     * @example
     * // Update one Matrizes_cursos
     * const matrizes_cursos = await prisma.matrizes_cursos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends matrizes_cursosUpdateArgs>(
      args: SelectSubset<T, matrizes_cursosUpdateArgs>
    ): CheckSelect<T, Prisma__matrizes_cursosClient<matrizes_cursos>, Prisma__matrizes_cursosClient<matrizes_cursosGetPayload<T>>>

    /**
     * Delete zero or more Matrizes_cursos.
     * @param {matrizes_cursosDeleteManyArgs} args - Arguments to filter Matrizes_cursos to delete.
     * @example
     * // Delete a few Matrizes_cursos
     * const { count } = await prisma.matrizes_cursos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends matrizes_cursosDeleteManyArgs>(
      args?: SelectSubset<T, matrizes_cursosDeleteManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Update zero or more Matrizes_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matrizes_cursosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Matrizes_cursos
     * const matrizes_cursos = await prisma.matrizes_cursos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends matrizes_cursosUpdateManyArgs>(
      args: SelectSubset<T, matrizes_cursosUpdateManyArgs>
    ): PrismaPromise<BatchPayload>

    /**
     * Create or update one Matrizes_cursos.
     * @param {matrizes_cursosUpsertArgs} args - Arguments to update or create a Matrizes_cursos.
     * @example
     * // Update or create a Matrizes_cursos
     * const matrizes_cursos = await prisma.matrizes_cursos.upsert({
     *   create: {
     *     // ... data to create a Matrizes_cursos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Matrizes_cursos we want to update
     *   }
     * })
    **/
    upsert<T extends matrizes_cursosUpsertArgs>(
      args: SelectSubset<T, matrizes_cursosUpsertArgs>
    ): CheckSelect<T, Prisma__matrizes_cursosClient<matrizes_cursos>, Prisma__matrizes_cursosClient<matrizes_cursosGetPayload<T>>>

    /**
     * Find one Matrizes_cursos that matches the filter or throw
     * `NotFoundError` if no matches were found.
     * @param {matrizes_cursosFindUniqueOrThrowArgs} args - Arguments to find a Matrizes_cursos
     * @example
     * // Get one Matrizes_cursos
     * const matrizes_cursos = await prisma.matrizes_cursos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends matrizes_cursosFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, matrizes_cursosFindUniqueOrThrowArgs>
    ): CheckSelect<T, Prisma__matrizes_cursosClient<matrizes_cursos>, Prisma__matrizes_cursosClient<matrizes_cursosGetPayload<T>>>

    /**
     * Find the first Matrizes_cursos that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matrizes_cursosFindFirstOrThrowArgs} args - Arguments to find a Matrizes_cursos
     * @example
     * // Get one Matrizes_cursos
     * const matrizes_cursos = await prisma.matrizes_cursos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends matrizes_cursosFindFirstOrThrowArgs>(
      args?: SelectSubset<T, matrizes_cursosFindFirstOrThrowArgs>
    ): CheckSelect<T, Prisma__matrizes_cursosClient<matrizes_cursos>, Prisma__matrizes_cursosClient<matrizes_cursosGetPayload<T>>>

    /**
     * Count the number of Matrizes_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {matrizes_cursosCountArgs} args - Arguments to filter Matrizes_cursos to count.
     * @example
     * // Count the number of Matrizes_cursos
     * const count = await prisma.matrizes_cursos.count({
     *   where: {
     *     // ... the filter for the Matrizes_cursos we want to count
     *   }
     * })
    **/
    count<T extends matrizes_cursosCountArgs>(
      args?: Subset<T, matrizes_cursosCountArgs>,
    ): PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Matrizes_cursosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Matrizes_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Matrizes_cursosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Matrizes_cursosAggregateArgs>(args: Subset<T, Matrizes_cursosAggregateArgs>): PrismaPromise<GetMatrizes_cursosAggregateType<T>>

    /**
     * Group by Matrizes_cursos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Matrizes_cursosGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Matrizes_cursosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Matrizes_cursosGroupByArgs['orderBy'] }
        : { orderBy?: Matrizes_cursosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Matrizes_cursosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMatrizes_cursosGroupByPayload<T> : PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for matrizes_cursos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__matrizes_cursosClient<T, Null = never> implements PrismaPromise<T> {
    [prisma]: true;
    private readonly _dmmf;
    private readonly _fetcher;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    constructor(_dmmf: runtime.DMMFClass, _fetcher: PrismaClientFetcher, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);
    readonly [Symbol.toStringTag]: 'PrismaClientPromise';

    cursos<T extends cursosArgs = {}>(args?: Subset<T, cursosArgs>): CheckSelect<T, Prisma__cursosClient<cursos | Null>, Prisma__cursosClient<cursosGetPayload<T> | Null>>;

    disciplinas<T extends disciplinasArgs = {}>(args?: Subset<T, disciplinasArgs>): CheckSelect<T, Prisma__disciplinasClient<disciplinas | Null>, Prisma__disciplinasClient<disciplinasGetPayload<T> | Null>>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * matrizes_cursos base type for findUnique actions
   */
  export type matrizes_cursosFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the matrizes_cursos
     * 
    **/
    select?: matrizes_cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matrizes_cursosInclude | null
    /**
     * Filter, which matrizes_cursos to fetch.
     * 
    **/
    where: matrizes_cursosWhereUniqueInput
  }

  /**
   * matrizes_cursos: findUnique
   */
  export interface matrizes_cursosFindUniqueArgs extends matrizes_cursosFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * matrizes_cursos base type for findFirst actions
   */
  export type matrizes_cursosFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the matrizes_cursos
     * 
    **/
    select?: matrizes_cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matrizes_cursosInclude | null
    /**
     * Filter, which matrizes_cursos to fetch.
     * 
    **/
    where?: matrizes_cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matrizes_cursos to fetch.
     * 
    **/
    orderBy?: Enumerable<matrizes_cursosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for matrizes_cursos.
     * 
    **/
    cursor?: matrizes_cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matrizes_cursos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matrizes_cursos.
     * 
    **/
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of matrizes_cursos.
     * 
    **/
    distinct?: Enumerable<Matrizes_cursosScalarFieldEnum>
  }

  /**
   * matrizes_cursos: findFirst
   */
  export interface matrizes_cursosFindFirstArgs extends matrizes_cursosFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * matrizes_cursos findMany
   */
  export type matrizes_cursosFindManyArgs = {
    /**
     * Select specific fields to fetch from the matrizes_cursos
     * 
    **/
    select?: matrizes_cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matrizes_cursosInclude | null
    /**
     * Filter, which matrizes_cursos to fetch.
     * 
    **/
    where?: matrizes_cursosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of matrizes_cursos to fetch.
     * 
    **/
    orderBy?: Enumerable<matrizes_cursosOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing matrizes_cursos.
     * 
    **/
    cursor?: matrizes_cursosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` matrizes_cursos from the position of the cursor.
     * 
    **/
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` matrizes_cursos.
     * 
    **/
    skip?: number
    distinct?: Enumerable<Matrizes_cursosScalarFieldEnum>
  }


  /**
   * matrizes_cursos create
   */
  export type matrizes_cursosCreateArgs = {
    /**
     * Select specific fields to fetch from the matrizes_cursos
     * 
    **/
    select?: matrizes_cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matrizes_cursosInclude | null
    /**
     * The data needed to create a matrizes_cursos.
     * 
    **/
    data: XOR<matrizes_cursosCreateInput, matrizes_cursosUncheckedCreateInput>
  }


  /**
   * matrizes_cursos createMany
   */
  export type matrizes_cursosCreateManyArgs = {
    /**
     * The data used to create many matrizes_cursos.
     * 
    **/
    data: Enumerable<matrizes_cursosCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * matrizes_cursos update
   */
  export type matrizes_cursosUpdateArgs = {
    /**
     * Select specific fields to fetch from the matrizes_cursos
     * 
    **/
    select?: matrizes_cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matrizes_cursosInclude | null
    /**
     * The data needed to update a matrizes_cursos.
     * 
    **/
    data: XOR<matrizes_cursosUpdateInput, matrizes_cursosUncheckedUpdateInput>
    /**
     * Choose, which matrizes_cursos to update.
     * 
    **/
    where: matrizes_cursosWhereUniqueInput
  }


  /**
   * matrizes_cursos updateMany
   */
  export type matrizes_cursosUpdateManyArgs = {
    /**
     * The data used to update matrizes_cursos.
     * 
    **/
    data: XOR<matrizes_cursosUpdateManyMutationInput, matrizes_cursosUncheckedUpdateManyInput>
    /**
     * Filter which matrizes_cursos to update
     * 
    **/
    where?: matrizes_cursosWhereInput
  }


  /**
   * matrizes_cursos upsert
   */
  export type matrizes_cursosUpsertArgs = {
    /**
     * Select specific fields to fetch from the matrizes_cursos
     * 
    **/
    select?: matrizes_cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matrizes_cursosInclude | null
    /**
     * The filter to search for the matrizes_cursos to update in case it exists.
     * 
    **/
    where: matrizes_cursosWhereUniqueInput
    /**
     * In case the matrizes_cursos found by the `where` argument doesn't exist, create a new matrizes_cursos with this data.
     * 
    **/
    create: XOR<matrizes_cursosCreateInput, matrizes_cursosUncheckedCreateInput>
    /**
     * In case the matrizes_cursos was found with the provided `where` argument, update it with this data.
     * 
    **/
    update: XOR<matrizes_cursosUpdateInput, matrizes_cursosUncheckedUpdateInput>
  }


  /**
   * matrizes_cursos delete
   */
  export type matrizes_cursosDeleteArgs = {
    /**
     * Select specific fields to fetch from the matrizes_cursos
     * 
    **/
    select?: matrizes_cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matrizes_cursosInclude | null
    /**
     * Filter which matrizes_cursos to delete.
     * 
    **/
    where: matrizes_cursosWhereUniqueInput
  }


  /**
   * matrizes_cursos deleteMany
   */
  export type matrizes_cursosDeleteManyArgs = {
    /**
     * Filter which matrizes_cursos to delete
     * 
    **/
    where?: matrizes_cursosWhereInput
  }


  /**
   * matrizes_cursos: findUniqueOrThrow
   */
  export type matrizes_cursosFindUniqueOrThrowArgs = matrizes_cursosFindUniqueArgsBase
      

  /**
   * matrizes_cursos: findFirstOrThrow
   */
  export type matrizes_cursosFindFirstOrThrowArgs = matrizes_cursosFindFirstArgsBase
      

  /**
   * matrizes_cursos without action
   */
  export type matrizes_cursosArgs = {
    /**
     * Select specific fields to fetch from the matrizes_cursos
     * 
    **/
    select?: matrizes_cursosSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     * 
    **/
    include?: matrizes_cursosInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AlunosScalarFieldEnum: {
    mat_alu: 'mat_alu',
    nome: 'nome',
    dat_entrada: 'dat_entrada',
    cod_curso: 'cod_curso',
    cotista: 'cotista'
  };

  export type AlunosScalarFieldEnum = (typeof AlunosScalarFieldEnum)[keyof typeof AlunosScalarFieldEnum]


  export const CursosScalarFieldEnum: {
    cod_curso: 'cod_curso',
    nom_curso: 'nom_curso',
    cod_dpto: 'cod_dpto'
  };

  export type CursosScalarFieldEnum = (typeof CursosScalarFieldEnum)[keyof typeof CursosScalarFieldEnum]


  export const DepartamentosScalarFieldEnum: {
    cod_dpto: 'cod_dpto',
    nome_dpto: 'nome_dpto'
  };

  export type DepartamentosScalarFieldEnum = (typeof DepartamentosScalarFieldEnum)[keyof typeof DepartamentosScalarFieldEnum]


  export const DisciplinasScalarFieldEnum: {
    cod_disc: 'cod_disc',
    nome_disc: 'nome_disc',
    carga_horaria: 'carga_horaria'
  };

  export type DisciplinasScalarFieldEnum = (typeof DisciplinasScalarFieldEnum)[keyof typeof DisciplinasScalarFieldEnum]


  export const MatriculasScalarFieldEnum: {
    semestre: 'semestre',
    mat_alu: 'mat_alu',
    cod_disc: 'cod_disc',
    nota: 'nota',
    faltas: 'faltas',
    status: 'status'
  };

  export type MatriculasScalarFieldEnum = (typeof MatriculasScalarFieldEnum)[keyof typeof MatriculasScalarFieldEnum]


  export const Matrizes_cursosScalarFieldEnum: {
    cod_curso: 'cod_curso',
    cod_disc: 'cod_disc',
    periodo: 'periodo'
  };

  export type Matrizes_cursosScalarFieldEnum = (typeof Matrizes_cursosScalarFieldEnum)[keyof typeof Matrizes_cursosScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TestScalarFieldEnum: {
    test_id: 'test_id',
    test: 'test'
  };

  export type TestScalarFieldEnum = (typeof TestScalarFieldEnum)[keyof typeof TestScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  /**
   * Deep Input Types
   */


  export type testWhereInput = {
    AND?: Enumerable<testWhereInput>
    OR?: Enumerable<testWhereInput>
    NOT?: Enumerable<testWhereInput>
    test_id?: IntFilter | number
    test?: IntFilter | number
  }

  export type testOrderByWithRelationInput = {
    test_id?: SortOrder
    test?: SortOrder
  }

  export type testWhereUniqueInput = {
    test_id?: number
  }

  export type testOrderByWithAggregationInput = {
    test_id?: SortOrder
    test?: SortOrder
    _count?: testCountOrderByAggregateInput
    _avg?: testAvgOrderByAggregateInput
    _max?: testMaxOrderByAggregateInput
    _min?: testMinOrderByAggregateInput
    _sum?: testSumOrderByAggregateInput
  }

  export type testScalarWhereWithAggregatesInput = {
    AND?: Enumerable<testScalarWhereWithAggregatesInput>
    OR?: Enumerable<testScalarWhereWithAggregatesInput>
    NOT?: Enumerable<testScalarWhereWithAggregatesInput>
    test_id?: IntWithAggregatesFilter | number
    test?: IntWithAggregatesFilter | number
  }

  export type alunosWhereInput = {
    AND?: Enumerable<alunosWhereInput>
    OR?: Enumerable<alunosWhereInput>
    NOT?: Enumerable<alunosWhereInput>
    mat_alu?: IntFilter | number
    nome?: StringFilter | string
    dat_entrada?: DateTimeFilter | Date | string
    cod_curso?: IntFilter | number
    cotista?: StringFilter | string
    cursos?: XOR<CursosRelationFilter, cursosWhereInput>
    matriculas?: MatriculasListRelationFilter
  }

  export type alunosOrderByWithRelationInput = {
    mat_alu?: SortOrder
    nome?: SortOrder
    dat_entrada?: SortOrder
    cod_curso?: SortOrder
    cotista?: SortOrder
    cursos?: cursosOrderByWithRelationInput
    matriculas?: matriculasOrderByRelationAggregateInput
  }

  export type alunosWhereUniqueInput = {
    mat_alu?: number
  }

  export type alunosOrderByWithAggregationInput = {
    mat_alu?: SortOrder
    nome?: SortOrder
    dat_entrada?: SortOrder
    cod_curso?: SortOrder
    cotista?: SortOrder
    _count?: alunosCountOrderByAggregateInput
    _avg?: alunosAvgOrderByAggregateInput
    _max?: alunosMaxOrderByAggregateInput
    _min?: alunosMinOrderByAggregateInput
    _sum?: alunosSumOrderByAggregateInput
  }

  export type alunosScalarWhereWithAggregatesInput = {
    AND?: Enumerable<alunosScalarWhereWithAggregatesInput>
    OR?: Enumerable<alunosScalarWhereWithAggregatesInput>
    NOT?: Enumerable<alunosScalarWhereWithAggregatesInput>
    mat_alu?: IntWithAggregatesFilter | number
    nome?: StringWithAggregatesFilter | string
    dat_entrada?: DateTimeWithAggregatesFilter | Date | string
    cod_curso?: IntWithAggregatesFilter | number
    cotista?: StringWithAggregatesFilter | string
  }

  export type cursosWhereInput = {
    AND?: Enumerable<cursosWhereInput>
    OR?: Enumerable<cursosWhereInput>
    NOT?: Enumerable<cursosWhereInput>
    cod_curso?: IntFilter | number
    nom_curso?: StringFilter | string
    cod_dpto?: IntFilter | number
    departamentos?: XOR<DepartamentosRelationFilter, departamentosWhereInput>
    alunos?: AlunosListRelationFilter
    matrizes_cursos?: Matrizes_cursosListRelationFilter
  }

  export type cursosOrderByWithRelationInput = {
    cod_curso?: SortOrder
    nom_curso?: SortOrder
    cod_dpto?: SortOrder
    departamentos?: departamentosOrderByWithRelationInput
    alunos?: alunosOrderByRelationAggregateInput
    matrizes_cursos?: matrizes_cursosOrderByRelationAggregateInput
  }

  export type cursosWhereUniqueInput = {
    cod_curso?: number
  }

  export type cursosOrderByWithAggregationInput = {
    cod_curso?: SortOrder
    nom_curso?: SortOrder
    cod_dpto?: SortOrder
    _count?: cursosCountOrderByAggregateInput
    _avg?: cursosAvgOrderByAggregateInput
    _max?: cursosMaxOrderByAggregateInput
    _min?: cursosMinOrderByAggregateInput
    _sum?: cursosSumOrderByAggregateInput
  }

  export type cursosScalarWhereWithAggregatesInput = {
    AND?: Enumerable<cursosScalarWhereWithAggregatesInput>
    OR?: Enumerable<cursosScalarWhereWithAggregatesInput>
    NOT?: Enumerable<cursosScalarWhereWithAggregatesInput>
    cod_curso?: IntWithAggregatesFilter | number
    nom_curso?: StringWithAggregatesFilter | string
    cod_dpto?: IntWithAggregatesFilter | number
  }

  export type departamentosWhereInput = {
    AND?: Enumerable<departamentosWhereInput>
    OR?: Enumerable<departamentosWhereInput>
    NOT?: Enumerable<departamentosWhereInput>
    cod_dpto?: IntFilter | number
    nome_dpto?: StringFilter | string
    cursos?: CursosListRelationFilter
  }

  export type departamentosOrderByWithRelationInput = {
    cod_dpto?: SortOrder
    nome_dpto?: SortOrder
    cursos?: cursosOrderByRelationAggregateInput
  }

  export type departamentosWhereUniqueInput = {
    cod_dpto?: number
  }

  export type departamentosOrderByWithAggregationInput = {
    cod_dpto?: SortOrder
    nome_dpto?: SortOrder
    _count?: departamentosCountOrderByAggregateInput
    _avg?: departamentosAvgOrderByAggregateInput
    _max?: departamentosMaxOrderByAggregateInput
    _min?: departamentosMinOrderByAggregateInput
    _sum?: departamentosSumOrderByAggregateInput
  }

  export type departamentosScalarWhereWithAggregatesInput = {
    AND?: Enumerable<departamentosScalarWhereWithAggregatesInput>
    OR?: Enumerable<departamentosScalarWhereWithAggregatesInput>
    NOT?: Enumerable<departamentosScalarWhereWithAggregatesInput>
    cod_dpto?: IntWithAggregatesFilter | number
    nome_dpto?: StringWithAggregatesFilter | string
  }

  export type disciplinasWhereInput = {
    AND?: Enumerable<disciplinasWhereInput>
    OR?: Enumerable<disciplinasWhereInput>
    NOT?: Enumerable<disciplinasWhereInput>
    cod_disc?: IntFilter | number
    nome_disc?: StringFilter | string
    carga_horaria?: IntFilter | number
    matriculas?: MatriculasListRelationFilter
    matrizes_cursos?: Matrizes_cursosListRelationFilter
  }

  export type disciplinasOrderByWithRelationInput = {
    cod_disc?: SortOrder
    nome_disc?: SortOrder
    carga_horaria?: SortOrder
    matriculas?: matriculasOrderByRelationAggregateInput
    matrizes_cursos?: matrizes_cursosOrderByRelationAggregateInput
  }

  export type disciplinasWhereUniqueInput = {
    cod_disc?: number
  }

  export type disciplinasOrderByWithAggregationInput = {
    cod_disc?: SortOrder
    nome_disc?: SortOrder
    carga_horaria?: SortOrder
    _count?: disciplinasCountOrderByAggregateInput
    _avg?: disciplinasAvgOrderByAggregateInput
    _max?: disciplinasMaxOrderByAggregateInput
    _min?: disciplinasMinOrderByAggregateInput
    _sum?: disciplinasSumOrderByAggregateInput
  }

  export type disciplinasScalarWhereWithAggregatesInput = {
    AND?: Enumerable<disciplinasScalarWhereWithAggregatesInput>
    OR?: Enumerable<disciplinasScalarWhereWithAggregatesInput>
    NOT?: Enumerable<disciplinasScalarWhereWithAggregatesInput>
    cod_disc?: IntWithAggregatesFilter | number
    nome_disc?: StringWithAggregatesFilter | string
    carga_horaria?: IntWithAggregatesFilter | number
  }

  export type matriculasWhereInput = {
    AND?: Enumerable<matriculasWhereInput>
    OR?: Enumerable<matriculasWhereInput>
    NOT?: Enumerable<matriculasWhereInput>
    semestre?: IntFilter | number
    mat_alu?: IntFilter | number
    cod_disc?: IntFilter | number
    nota?: IntNullableFilter | number | null
    faltas?: IntNullableFilter | number | null
    status?: StringNullableFilter | string | null
    alunos?: XOR<AlunosRelationFilter, alunosWhereInput>
    disciplinas?: XOR<DisciplinasRelationFilter, disciplinasWhereInput>
  }

  export type matriculasOrderByWithRelationInput = {
    semestre?: SortOrder
    mat_alu?: SortOrder
    cod_disc?: SortOrder
    nota?: SortOrder
    faltas?: SortOrder
    status?: SortOrder
    alunos?: alunosOrderByWithRelationInput
    disciplinas?: disciplinasOrderByWithRelationInput
  }

  export type matriculasWhereUniqueInput = {
    mat_alu_semestre?: matriculasMat_aluSemestreCompoundUniqueInput
  }

  export type matriculasOrderByWithAggregationInput = {
    semestre?: SortOrder
    mat_alu?: SortOrder
    cod_disc?: SortOrder
    nota?: SortOrder
    faltas?: SortOrder
    status?: SortOrder
    _count?: matriculasCountOrderByAggregateInput
    _avg?: matriculasAvgOrderByAggregateInput
    _max?: matriculasMaxOrderByAggregateInput
    _min?: matriculasMinOrderByAggregateInput
    _sum?: matriculasSumOrderByAggregateInput
  }

  export type matriculasScalarWhereWithAggregatesInput = {
    AND?: Enumerable<matriculasScalarWhereWithAggregatesInput>
    OR?: Enumerable<matriculasScalarWhereWithAggregatesInput>
    NOT?: Enumerable<matriculasScalarWhereWithAggregatesInput>
    semestre?: IntWithAggregatesFilter | number
    mat_alu?: IntWithAggregatesFilter | number
    cod_disc?: IntWithAggregatesFilter | number
    nota?: IntNullableWithAggregatesFilter | number | null
    faltas?: IntNullableWithAggregatesFilter | number | null
    status?: StringNullableWithAggregatesFilter | string | null
  }

  export type matrizes_cursosWhereInput = {
    AND?: Enumerable<matrizes_cursosWhereInput>
    OR?: Enumerable<matrizes_cursosWhereInput>
    NOT?: Enumerable<matrizes_cursosWhereInput>
    cod_curso?: IntFilter | number
    cod_disc?: IntFilter | number
    periodo?: IntFilter | number
    cursos?: XOR<CursosRelationFilter, cursosWhereInput>
    disciplinas?: XOR<DisciplinasRelationFilter, disciplinasWhereInput>
  }

  export type matrizes_cursosOrderByWithRelationInput = {
    cod_curso?: SortOrder
    cod_disc?: SortOrder
    periodo?: SortOrder
    cursos?: cursosOrderByWithRelationInput
    disciplinas?: disciplinasOrderByWithRelationInput
  }

  export type matrizes_cursosWhereUniqueInput = {
    cod_curso_cod_disc?: matrizes_cursosCod_cursoCod_discCompoundUniqueInput
  }

  export type matrizes_cursosOrderByWithAggregationInput = {
    cod_curso?: SortOrder
    cod_disc?: SortOrder
    periodo?: SortOrder
    _count?: matrizes_cursosCountOrderByAggregateInput
    _avg?: matrizes_cursosAvgOrderByAggregateInput
    _max?: matrizes_cursosMaxOrderByAggregateInput
    _min?: matrizes_cursosMinOrderByAggregateInput
    _sum?: matrizes_cursosSumOrderByAggregateInput
  }

  export type matrizes_cursosScalarWhereWithAggregatesInput = {
    AND?: Enumerable<matrizes_cursosScalarWhereWithAggregatesInput>
    OR?: Enumerable<matrizes_cursosScalarWhereWithAggregatesInput>
    NOT?: Enumerable<matrizes_cursosScalarWhereWithAggregatesInput>
    cod_curso?: IntWithAggregatesFilter | number
    cod_disc?: IntWithAggregatesFilter | number
    periodo?: IntWithAggregatesFilter | number
  }

  export type testCreateInput = {
    test_id: number
    test: number
  }

  export type testUncheckedCreateInput = {
    test_id: number
    test: number
  }

  export type testUpdateInput = {
    test_id?: IntFieldUpdateOperationsInput | number
    test?: IntFieldUpdateOperationsInput | number
  }

  export type testUncheckedUpdateInput = {
    test_id?: IntFieldUpdateOperationsInput | number
    test?: IntFieldUpdateOperationsInput | number
  }

  export type testCreateManyInput = {
    test_id: number
    test: number
  }

  export type testUpdateManyMutationInput = {
    test_id?: IntFieldUpdateOperationsInput | number
    test?: IntFieldUpdateOperationsInput | number
  }

  export type testUncheckedUpdateManyInput = {
    test_id?: IntFieldUpdateOperationsInput | number
    test?: IntFieldUpdateOperationsInput | number
  }

  export type alunosCreateInput = {
    mat_alu: number
    nome: string
    dat_entrada: Date | string
    cotista: string
    cursos: cursosCreateNestedOneWithoutAlunosInput
    matriculas?: matriculasCreateNestedManyWithoutAlunosInput
  }

  export type alunosUncheckedCreateInput = {
    mat_alu: number
    nome: string
    dat_entrada: Date | string
    cod_curso: number
    cotista: string
    matriculas?: matriculasUncheckedCreateNestedManyWithoutAlunosInput
  }

  export type alunosUpdateInput = {
    mat_alu?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dat_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    cotista?: StringFieldUpdateOperationsInput | string
    cursos?: cursosUpdateOneRequiredWithoutAlunosNestedInput
    matriculas?: matriculasUpdateManyWithoutAlunosNestedInput
  }

  export type alunosUncheckedUpdateInput = {
    mat_alu?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dat_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    cod_curso?: IntFieldUpdateOperationsInput | number
    cotista?: StringFieldUpdateOperationsInput | string
    matriculas?: matriculasUncheckedUpdateManyWithoutAlunosNestedInput
  }

  export type alunosCreateManyInput = {
    mat_alu: number
    nome: string
    dat_entrada: Date | string
    cod_curso: number
    cotista: string
  }

  export type alunosUpdateManyMutationInput = {
    mat_alu?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dat_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    cotista?: StringFieldUpdateOperationsInput | string
  }

  export type alunosUncheckedUpdateManyInput = {
    mat_alu?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dat_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    cod_curso?: IntFieldUpdateOperationsInput | number
    cotista?: StringFieldUpdateOperationsInput | string
  }

  export type cursosCreateInput = {
    cod_curso: number
    nom_curso: string
    departamentos: departamentosCreateNestedOneWithoutCursosInput
    alunos?: alunosCreateNestedManyWithoutCursosInput
    matrizes_cursos?: matrizes_cursosCreateNestedManyWithoutCursosInput
  }

  export type cursosUncheckedCreateInput = {
    cod_curso: number
    nom_curso: string
    cod_dpto: number
    alunos?: alunosUncheckedCreateNestedManyWithoutCursosInput
    matrizes_cursos?: matrizes_cursosUncheckedCreateNestedManyWithoutCursosInput
  }

  export type cursosUpdateInput = {
    cod_curso?: IntFieldUpdateOperationsInput | number
    nom_curso?: StringFieldUpdateOperationsInput | string
    departamentos?: departamentosUpdateOneRequiredWithoutCursosNestedInput
    alunos?: alunosUpdateManyWithoutCursosNestedInput
    matrizes_cursos?: matrizes_cursosUpdateManyWithoutCursosNestedInput
  }

  export type cursosUncheckedUpdateInput = {
    cod_curso?: IntFieldUpdateOperationsInput | number
    nom_curso?: StringFieldUpdateOperationsInput | string
    cod_dpto?: IntFieldUpdateOperationsInput | number
    alunos?: alunosUncheckedUpdateManyWithoutCursosNestedInput
    matrizes_cursos?: matrizes_cursosUncheckedUpdateManyWithoutCursosNestedInput
  }

  export type cursosCreateManyInput = {
    cod_curso: number
    nom_curso: string
    cod_dpto: number
  }

  export type cursosUpdateManyMutationInput = {
    cod_curso?: IntFieldUpdateOperationsInput | number
    nom_curso?: StringFieldUpdateOperationsInput | string
  }

  export type cursosUncheckedUpdateManyInput = {
    cod_curso?: IntFieldUpdateOperationsInput | number
    nom_curso?: StringFieldUpdateOperationsInput | string
    cod_dpto?: IntFieldUpdateOperationsInput | number
  }

  export type departamentosCreateInput = {
    cod_dpto: number
    nome_dpto: string
    cursos?: cursosCreateNestedManyWithoutDepartamentosInput
  }

  export type departamentosUncheckedCreateInput = {
    cod_dpto: number
    nome_dpto: string
    cursos?: cursosUncheckedCreateNestedManyWithoutDepartamentosInput
  }

  export type departamentosUpdateInput = {
    cod_dpto?: IntFieldUpdateOperationsInput | number
    nome_dpto?: StringFieldUpdateOperationsInput | string
    cursos?: cursosUpdateManyWithoutDepartamentosNestedInput
  }

  export type departamentosUncheckedUpdateInput = {
    cod_dpto?: IntFieldUpdateOperationsInput | number
    nome_dpto?: StringFieldUpdateOperationsInput | string
    cursos?: cursosUncheckedUpdateManyWithoutDepartamentosNestedInput
  }

  export type departamentosCreateManyInput = {
    cod_dpto: number
    nome_dpto: string
  }

  export type departamentosUpdateManyMutationInput = {
    cod_dpto?: IntFieldUpdateOperationsInput | number
    nome_dpto?: StringFieldUpdateOperationsInput | string
  }

  export type departamentosUncheckedUpdateManyInput = {
    cod_dpto?: IntFieldUpdateOperationsInput | number
    nome_dpto?: StringFieldUpdateOperationsInput | string
  }

  export type disciplinasCreateInput = {
    cod_disc: number
    nome_disc: string
    carga_horaria: number
    matriculas?: matriculasCreateNestedManyWithoutDisciplinasInput
    matrizes_cursos?: matrizes_cursosCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasUncheckedCreateInput = {
    cod_disc: number
    nome_disc: string
    carga_horaria: number
    matriculas?: matriculasUncheckedCreateNestedManyWithoutDisciplinasInput
    matrizes_cursos?: matrizes_cursosUncheckedCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasUpdateInput = {
    cod_disc?: IntFieldUpdateOperationsInput | number
    nome_disc?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    matriculas?: matriculasUpdateManyWithoutDisciplinasNestedInput
    matrizes_cursos?: matrizes_cursosUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasUncheckedUpdateInput = {
    cod_disc?: IntFieldUpdateOperationsInput | number
    nome_disc?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    matriculas?: matriculasUncheckedUpdateManyWithoutDisciplinasNestedInput
    matrizes_cursos?: matrizes_cursosUncheckedUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasCreateManyInput = {
    cod_disc: number
    nome_disc: string
    carga_horaria: number
  }

  export type disciplinasUpdateManyMutationInput = {
    cod_disc?: IntFieldUpdateOperationsInput | number
    nome_disc?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
  }

  export type disciplinasUncheckedUpdateManyInput = {
    cod_disc?: IntFieldUpdateOperationsInput | number
    nome_disc?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
  }

  export type matriculasCreateInput = {
    semestre: number
    nota?: number | null
    faltas?: number | null
    status?: string | null
    alunos: alunosCreateNestedOneWithoutMatriculasInput
    disciplinas: disciplinasCreateNestedOneWithoutMatriculasInput
  }

  export type matriculasUncheckedCreateInput = {
    semestre: number
    mat_alu: number
    cod_disc: number
    nota?: number | null
    faltas?: number | null
    status?: string | null
  }

  export type matriculasUpdateInput = {
    semestre?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    alunos?: alunosUpdateOneRequiredWithoutMatriculasNestedInput
    disciplinas?: disciplinasUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type matriculasUncheckedUpdateInput = {
    semestre?: IntFieldUpdateOperationsInput | number
    mat_alu?: IntFieldUpdateOperationsInput | number
    cod_disc?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type matriculasCreateManyInput = {
    semestre: number
    mat_alu: number
    cod_disc: number
    nota?: number | null
    faltas?: number | null
    status?: string | null
  }

  export type matriculasUpdateManyMutationInput = {
    semestre?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type matriculasUncheckedUpdateManyInput = {
    semestre?: IntFieldUpdateOperationsInput | number
    mat_alu?: IntFieldUpdateOperationsInput | number
    cod_disc?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type matrizes_cursosCreateInput = {
    periodo: number
    cursos: cursosCreateNestedOneWithoutMatrizes_cursosInput
    disciplinas: disciplinasCreateNestedOneWithoutMatrizes_cursosInput
  }

  export type matrizes_cursosUncheckedCreateInput = {
    cod_curso: number
    cod_disc: number
    periodo: number
  }

  export type matrizes_cursosUpdateInput = {
    periodo?: IntFieldUpdateOperationsInput | number
    cursos?: cursosUpdateOneRequiredWithoutMatrizes_cursosNestedInput
    disciplinas?: disciplinasUpdateOneRequiredWithoutMatrizes_cursosNestedInput
  }

  export type matrizes_cursosUncheckedUpdateInput = {
    cod_curso?: IntFieldUpdateOperationsInput | number
    cod_disc?: IntFieldUpdateOperationsInput | number
    periodo?: IntFieldUpdateOperationsInput | number
  }

  export type matrizes_cursosCreateManyInput = {
    cod_curso: number
    cod_disc: number
    periodo: number
  }

  export type matrizes_cursosUpdateManyMutationInput = {
    periodo?: IntFieldUpdateOperationsInput | number
  }

  export type matrizes_cursosUncheckedUpdateManyInput = {
    cod_curso?: IntFieldUpdateOperationsInput | number
    cod_disc?: IntFieldUpdateOperationsInput | number
    periodo?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type testCountOrderByAggregateInput = {
    test_id?: SortOrder
    test?: SortOrder
  }

  export type testAvgOrderByAggregateInput = {
    test_id?: SortOrder
    test?: SortOrder
  }

  export type testMaxOrderByAggregateInput = {
    test_id?: SortOrder
    test?: SortOrder
  }

  export type testMinOrderByAggregateInput = {
    test_id?: SortOrder
    test?: SortOrder
  }

  export type testSumOrderByAggregateInput = {
    test_id?: SortOrder
    test?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type CursosRelationFilter = {
    is?: cursosWhereInput
    isNot?: cursosWhereInput
  }

  export type MatriculasListRelationFilter = {
    every?: matriculasWhereInput
    some?: matriculasWhereInput
    none?: matriculasWhereInput
  }

  export type matriculasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type alunosCountOrderByAggregateInput = {
    mat_alu?: SortOrder
    nome?: SortOrder
    dat_entrada?: SortOrder
    cod_curso?: SortOrder
    cotista?: SortOrder
  }

  export type alunosAvgOrderByAggregateInput = {
    mat_alu?: SortOrder
    cod_curso?: SortOrder
  }

  export type alunosMaxOrderByAggregateInput = {
    mat_alu?: SortOrder
    nome?: SortOrder
    dat_entrada?: SortOrder
    cod_curso?: SortOrder
    cotista?: SortOrder
  }

  export type alunosMinOrderByAggregateInput = {
    mat_alu?: SortOrder
    nome?: SortOrder
    dat_entrada?: SortOrder
    cod_curso?: SortOrder
    cotista?: SortOrder
  }

  export type alunosSumOrderByAggregateInput = {
    mat_alu?: SortOrder
    cod_curso?: SortOrder
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type DepartamentosRelationFilter = {
    is?: departamentosWhereInput
    isNot?: departamentosWhereInput
  }

  export type AlunosListRelationFilter = {
    every?: alunosWhereInput
    some?: alunosWhereInput
    none?: alunosWhereInput
  }

  export type Matrizes_cursosListRelationFilter = {
    every?: matrizes_cursosWhereInput
    some?: matrizes_cursosWhereInput
    none?: matrizes_cursosWhereInput
  }

  export type alunosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type matrizes_cursosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cursosCountOrderByAggregateInput = {
    cod_curso?: SortOrder
    nom_curso?: SortOrder
    cod_dpto?: SortOrder
  }

  export type cursosAvgOrderByAggregateInput = {
    cod_curso?: SortOrder
    cod_dpto?: SortOrder
  }

  export type cursosMaxOrderByAggregateInput = {
    cod_curso?: SortOrder
    nom_curso?: SortOrder
    cod_dpto?: SortOrder
  }

  export type cursosMinOrderByAggregateInput = {
    cod_curso?: SortOrder
    nom_curso?: SortOrder
    cod_dpto?: SortOrder
  }

  export type cursosSumOrderByAggregateInput = {
    cod_curso?: SortOrder
    cod_dpto?: SortOrder
  }

  export type CursosListRelationFilter = {
    every?: cursosWhereInput
    some?: cursosWhereInput
    none?: cursosWhereInput
  }

  export type cursosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type departamentosCountOrderByAggregateInput = {
    cod_dpto?: SortOrder
    nome_dpto?: SortOrder
  }

  export type departamentosAvgOrderByAggregateInput = {
    cod_dpto?: SortOrder
  }

  export type departamentosMaxOrderByAggregateInput = {
    cod_dpto?: SortOrder
    nome_dpto?: SortOrder
  }

  export type departamentosMinOrderByAggregateInput = {
    cod_dpto?: SortOrder
    nome_dpto?: SortOrder
  }

  export type departamentosSumOrderByAggregateInput = {
    cod_dpto?: SortOrder
  }

  export type disciplinasCountOrderByAggregateInput = {
    cod_disc?: SortOrder
    nome_disc?: SortOrder
    carga_horaria?: SortOrder
  }

  export type disciplinasAvgOrderByAggregateInput = {
    cod_disc?: SortOrder
    carga_horaria?: SortOrder
  }

  export type disciplinasMaxOrderByAggregateInput = {
    cod_disc?: SortOrder
    nome_disc?: SortOrder
    carga_horaria?: SortOrder
  }

  export type disciplinasMinOrderByAggregateInput = {
    cod_disc?: SortOrder
    nome_disc?: SortOrder
    carga_horaria?: SortOrder
  }

  export type disciplinasSumOrderByAggregateInput = {
    cod_disc?: SortOrder
    carga_horaria?: SortOrder
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type AlunosRelationFilter = {
    is?: alunosWhereInput
    isNot?: alunosWhereInput
  }

  export type DisciplinasRelationFilter = {
    is?: disciplinasWhereInput
    isNot?: disciplinasWhereInput
  }

  export type matriculasMat_aluSemestreCompoundUniqueInput = {
    mat_alu: number
    semestre: number
  }

  export type matriculasCountOrderByAggregateInput = {
    semestre?: SortOrder
    mat_alu?: SortOrder
    cod_disc?: SortOrder
    nota?: SortOrder
    faltas?: SortOrder
    status?: SortOrder
  }

  export type matriculasAvgOrderByAggregateInput = {
    semestre?: SortOrder
    mat_alu?: SortOrder
    cod_disc?: SortOrder
    nota?: SortOrder
    faltas?: SortOrder
  }

  export type matriculasMaxOrderByAggregateInput = {
    semestre?: SortOrder
    mat_alu?: SortOrder
    cod_disc?: SortOrder
    nota?: SortOrder
    faltas?: SortOrder
    status?: SortOrder
  }

  export type matriculasMinOrderByAggregateInput = {
    semestre?: SortOrder
    mat_alu?: SortOrder
    cod_disc?: SortOrder
    nota?: SortOrder
    faltas?: SortOrder
    status?: SortOrder
  }

  export type matriculasSumOrderByAggregateInput = {
    semestre?: SortOrder
    mat_alu?: SortOrder
    cod_disc?: SortOrder
    nota?: SortOrder
    faltas?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type matrizes_cursosCod_cursoCod_discCompoundUniqueInput = {
    cod_curso: number
    cod_disc: number
  }

  export type matrizes_cursosCountOrderByAggregateInput = {
    cod_curso?: SortOrder
    cod_disc?: SortOrder
    periodo?: SortOrder
  }

  export type matrizes_cursosAvgOrderByAggregateInput = {
    cod_curso?: SortOrder
    cod_disc?: SortOrder
    periodo?: SortOrder
  }

  export type matrizes_cursosMaxOrderByAggregateInput = {
    cod_curso?: SortOrder
    cod_disc?: SortOrder
    periodo?: SortOrder
  }

  export type matrizes_cursosMinOrderByAggregateInput = {
    cod_curso?: SortOrder
    cod_disc?: SortOrder
    periodo?: SortOrder
  }

  export type matrizes_cursosSumOrderByAggregateInput = {
    cod_curso?: SortOrder
    cod_disc?: SortOrder
    periodo?: SortOrder
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type cursosCreateNestedOneWithoutAlunosInput = {
    create?: XOR<cursosCreateWithoutAlunosInput, cursosUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: cursosCreateOrConnectWithoutAlunosInput
    connect?: cursosWhereUniqueInput
  }

  export type matriculasCreateNestedManyWithoutAlunosInput = {
    create?: XOR<Enumerable<matriculasCreateWithoutAlunosInput>, Enumerable<matriculasUncheckedCreateWithoutAlunosInput>>
    connectOrCreate?: Enumerable<matriculasCreateOrConnectWithoutAlunosInput>
    createMany?: matriculasCreateManyAlunosInputEnvelope
    connect?: Enumerable<matriculasWhereUniqueInput>
  }

  export type matriculasUncheckedCreateNestedManyWithoutAlunosInput = {
    create?: XOR<Enumerable<matriculasCreateWithoutAlunosInput>, Enumerable<matriculasUncheckedCreateWithoutAlunosInput>>
    connectOrCreate?: Enumerable<matriculasCreateOrConnectWithoutAlunosInput>
    createMany?: matriculasCreateManyAlunosInputEnvelope
    connect?: Enumerable<matriculasWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type cursosUpdateOneRequiredWithoutAlunosNestedInput = {
    create?: XOR<cursosCreateWithoutAlunosInput, cursosUncheckedCreateWithoutAlunosInput>
    connectOrCreate?: cursosCreateOrConnectWithoutAlunosInput
    upsert?: cursosUpsertWithoutAlunosInput
    connect?: cursosWhereUniqueInput
    update?: XOR<cursosUpdateWithoutAlunosInput, cursosUncheckedUpdateWithoutAlunosInput>
  }

  export type matriculasUpdateManyWithoutAlunosNestedInput = {
    create?: XOR<Enumerable<matriculasCreateWithoutAlunosInput>, Enumerable<matriculasUncheckedCreateWithoutAlunosInput>>
    connectOrCreate?: Enumerable<matriculasCreateOrConnectWithoutAlunosInput>
    upsert?: Enumerable<matriculasUpsertWithWhereUniqueWithoutAlunosInput>
    createMany?: matriculasCreateManyAlunosInputEnvelope
    set?: Enumerable<matriculasWhereUniqueInput>
    disconnect?: Enumerable<matriculasWhereUniqueInput>
    delete?: Enumerable<matriculasWhereUniqueInput>
    connect?: Enumerable<matriculasWhereUniqueInput>
    update?: Enumerable<matriculasUpdateWithWhereUniqueWithoutAlunosInput>
    updateMany?: Enumerable<matriculasUpdateManyWithWhereWithoutAlunosInput>
    deleteMany?: Enumerable<matriculasScalarWhereInput>
  }

  export type matriculasUncheckedUpdateManyWithoutAlunosNestedInput = {
    create?: XOR<Enumerable<matriculasCreateWithoutAlunosInput>, Enumerable<matriculasUncheckedCreateWithoutAlunosInput>>
    connectOrCreate?: Enumerable<matriculasCreateOrConnectWithoutAlunosInput>
    upsert?: Enumerable<matriculasUpsertWithWhereUniqueWithoutAlunosInput>
    createMany?: matriculasCreateManyAlunosInputEnvelope
    set?: Enumerable<matriculasWhereUniqueInput>
    disconnect?: Enumerable<matriculasWhereUniqueInput>
    delete?: Enumerable<matriculasWhereUniqueInput>
    connect?: Enumerable<matriculasWhereUniqueInput>
    update?: Enumerable<matriculasUpdateWithWhereUniqueWithoutAlunosInput>
    updateMany?: Enumerable<matriculasUpdateManyWithWhereWithoutAlunosInput>
    deleteMany?: Enumerable<matriculasScalarWhereInput>
  }

  export type departamentosCreateNestedOneWithoutCursosInput = {
    create?: XOR<departamentosCreateWithoutCursosInput, departamentosUncheckedCreateWithoutCursosInput>
    connectOrCreate?: departamentosCreateOrConnectWithoutCursosInput
    connect?: departamentosWhereUniqueInput
  }

  export type alunosCreateNestedManyWithoutCursosInput = {
    create?: XOR<Enumerable<alunosCreateWithoutCursosInput>, Enumerable<alunosUncheckedCreateWithoutCursosInput>>
    connectOrCreate?: Enumerable<alunosCreateOrConnectWithoutCursosInput>
    createMany?: alunosCreateManyCursosInputEnvelope
    connect?: Enumerable<alunosWhereUniqueInput>
  }

  export type matrizes_cursosCreateNestedManyWithoutCursosInput = {
    create?: XOR<Enumerable<matrizes_cursosCreateWithoutCursosInput>, Enumerable<matrizes_cursosUncheckedCreateWithoutCursosInput>>
    connectOrCreate?: Enumerable<matrizes_cursosCreateOrConnectWithoutCursosInput>
    createMany?: matrizes_cursosCreateManyCursosInputEnvelope
    connect?: Enumerable<matrizes_cursosWhereUniqueInput>
  }

  export type alunosUncheckedCreateNestedManyWithoutCursosInput = {
    create?: XOR<Enumerable<alunosCreateWithoutCursosInput>, Enumerable<alunosUncheckedCreateWithoutCursosInput>>
    connectOrCreate?: Enumerable<alunosCreateOrConnectWithoutCursosInput>
    createMany?: alunosCreateManyCursosInputEnvelope
    connect?: Enumerable<alunosWhereUniqueInput>
  }

  export type matrizes_cursosUncheckedCreateNestedManyWithoutCursosInput = {
    create?: XOR<Enumerable<matrizes_cursosCreateWithoutCursosInput>, Enumerable<matrizes_cursosUncheckedCreateWithoutCursosInput>>
    connectOrCreate?: Enumerable<matrizes_cursosCreateOrConnectWithoutCursosInput>
    createMany?: matrizes_cursosCreateManyCursosInputEnvelope
    connect?: Enumerable<matrizes_cursosWhereUniqueInput>
  }

  export type departamentosUpdateOneRequiredWithoutCursosNestedInput = {
    create?: XOR<departamentosCreateWithoutCursosInput, departamentosUncheckedCreateWithoutCursosInput>
    connectOrCreate?: departamentosCreateOrConnectWithoutCursosInput
    upsert?: departamentosUpsertWithoutCursosInput
    connect?: departamentosWhereUniqueInput
    update?: XOR<departamentosUpdateWithoutCursosInput, departamentosUncheckedUpdateWithoutCursosInput>
  }

  export type alunosUpdateManyWithoutCursosNestedInput = {
    create?: XOR<Enumerable<alunosCreateWithoutCursosInput>, Enumerable<alunosUncheckedCreateWithoutCursosInput>>
    connectOrCreate?: Enumerable<alunosCreateOrConnectWithoutCursosInput>
    upsert?: Enumerable<alunosUpsertWithWhereUniqueWithoutCursosInput>
    createMany?: alunosCreateManyCursosInputEnvelope
    set?: Enumerable<alunosWhereUniqueInput>
    disconnect?: Enumerable<alunosWhereUniqueInput>
    delete?: Enumerable<alunosWhereUniqueInput>
    connect?: Enumerable<alunosWhereUniqueInput>
    update?: Enumerable<alunosUpdateWithWhereUniqueWithoutCursosInput>
    updateMany?: Enumerable<alunosUpdateManyWithWhereWithoutCursosInput>
    deleteMany?: Enumerable<alunosScalarWhereInput>
  }

  export type matrizes_cursosUpdateManyWithoutCursosNestedInput = {
    create?: XOR<Enumerable<matrizes_cursosCreateWithoutCursosInput>, Enumerable<matrizes_cursosUncheckedCreateWithoutCursosInput>>
    connectOrCreate?: Enumerable<matrizes_cursosCreateOrConnectWithoutCursosInput>
    upsert?: Enumerable<matrizes_cursosUpsertWithWhereUniqueWithoutCursosInput>
    createMany?: matrizes_cursosCreateManyCursosInputEnvelope
    set?: Enumerable<matrizes_cursosWhereUniqueInput>
    disconnect?: Enumerable<matrizes_cursosWhereUniqueInput>
    delete?: Enumerable<matrizes_cursosWhereUniqueInput>
    connect?: Enumerable<matrizes_cursosWhereUniqueInput>
    update?: Enumerable<matrizes_cursosUpdateWithWhereUniqueWithoutCursosInput>
    updateMany?: Enumerable<matrizes_cursosUpdateManyWithWhereWithoutCursosInput>
    deleteMany?: Enumerable<matrizes_cursosScalarWhereInput>
  }

  export type alunosUncheckedUpdateManyWithoutCursosNestedInput = {
    create?: XOR<Enumerable<alunosCreateWithoutCursosInput>, Enumerable<alunosUncheckedCreateWithoutCursosInput>>
    connectOrCreate?: Enumerable<alunosCreateOrConnectWithoutCursosInput>
    upsert?: Enumerable<alunosUpsertWithWhereUniqueWithoutCursosInput>
    createMany?: alunosCreateManyCursosInputEnvelope
    set?: Enumerable<alunosWhereUniqueInput>
    disconnect?: Enumerable<alunosWhereUniqueInput>
    delete?: Enumerable<alunosWhereUniqueInput>
    connect?: Enumerable<alunosWhereUniqueInput>
    update?: Enumerable<alunosUpdateWithWhereUniqueWithoutCursosInput>
    updateMany?: Enumerable<alunosUpdateManyWithWhereWithoutCursosInput>
    deleteMany?: Enumerable<alunosScalarWhereInput>
  }

  export type matrizes_cursosUncheckedUpdateManyWithoutCursosNestedInput = {
    create?: XOR<Enumerable<matrizes_cursosCreateWithoutCursosInput>, Enumerable<matrizes_cursosUncheckedCreateWithoutCursosInput>>
    connectOrCreate?: Enumerable<matrizes_cursosCreateOrConnectWithoutCursosInput>
    upsert?: Enumerable<matrizes_cursosUpsertWithWhereUniqueWithoutCursosInput>
    createMany?: matrizes_cursosCreateManyCursosInputEnvelope
    set?: Enumerable<matrizes_cursosWhereUniqueInput>
    disconnect?: Enumerable<matrizes_cursosWhereUniqueInput>
    delete?: Enumerable<matrizes_cursosWhereUniqueInput>
    connect?: Enumerable<matrizes_cursosWhereUniqueInput>
    update?: Enumerable<matrizes_cursosUpdateWithWhereUniqueWithoutCursosInput>
    updateMany?: Enumerable<matrizes_cursosUpdateManyWithWhereWithoutCursosInput>
    deleteMany?: Enumerable<matrizes_cursosScalarWhereInput>
  }

  export type cursosCreateNestedManyWithoutDepartamentosInput = {
    create?: XOR<Enumerable<cursosCreateWithoutDepartamentosInput>, Enumerable<cursosUncheckedCreateWithoutDepartamentosInput>>
    connectOrCreate?: Enumerable<cursosCreateOrConnectWithoutDepartamentosInput>
    createMany?: cursosCreateManyDepartamentosInputEnvelope
    connect?: Enumerable<cursosWhereUniqueInput>
  }

  export type cursosUncheckedCreateNestedManyWithoutDepartamentosInput = {
    create?: XOR<Enumerable<cursosCreateWithoutDepartamentosInput>, Enumerable<cursosUncheckedCreateWithoutDepartamentosInput>>
    connectOrCreate?: Enumerable<cursosCreateOrConnectWithoutDepartamentosInput>
    createMany?: cursosCreateManyDepartamentosInputEnvelope
    connect?: Enumerable<cursosWhereUniqueInput>
  }

  export type cursosUpdateManyWithoutDepartamentosNestedInput = {
    create?: XOR<Enumerable<cursosCreateWithoutDepartamentosInput>, Enumerable<cursosUncheckedCreateWithoutDepartamentosInput>>
    connectOrCreate?: Enumerable<cursosCreateOrConnectWithoutDepartamentosInput>
    upsert?: Enumerable<cursosUpsertWithWhereUniqueWithoutDepartamentosInput>
    createMany?: cursosCreateManyDepartamentosInputEnvelope
    set?: Enumerable<cursosWhereUniqueInput>
    disconnect?: Enumerable<cursosWhereUniqueInput>
    delete?: Enumerable<cursosWhereUniqueInput>
    connect?: Enumerable<cursosWhereUniqueInput>
    update?: Enumerable<cursosUpdateWithWhereUniqueWithoutDepartamentosInput>
    updateMany?: Enumerable<cursosUpdateManyWithWhereWithoutDepartamentosInput>
    deleteMany?: Enumerable<cursosScalarWhereInput>
  }

  export type cursosUncheckedUpdateManyWithoutDepartamentosNestedInput = {
    create?: XOR<Enumerable<cursosCreateWithoutDepartamentosInput>, Enumerable<cursosUncheckedCreateWithoutDepartamentosInput>>
    connectOrCreate?: Enumerable<cursosCreateOrConnectWithoutDepartamentosInput>
    upsert?: Enumerable<cursosUpsertWithWhereUniqueWithoutDepartamentosInput>
    createMany?: cursosCreateManyDepartamentosInputEnvelope
    set?: Enumerable<cursosWhereUniqueInput>
    disconnect?: Enumerable<cursosWhereUniqueInput>
    delete?: Enumerable<cursosWhereUniqueInput>
    connect?: Enumerable<cursosWhereUniqueInput>
    update?: Enumerable<cursosUpdateWithWhereUniqueWithoutDepartamentosInput>
    updateMany?: Enumerable<cursosUpdateManyWithWhereWithoutDepartamentosInput>
    deleteMany?: Enumerable<cursosScalarWhereInput>
  }

  export type matriculasCreateNestedManyWithoutDisciplinasInput = {
    create?: XOR<Enumerable<matriculasCreateWithoutDisciplinasInput>, Enumerable<matriculasUncheckedCreateWithoutDisciplinasInput>>
    connectOrCreate?: Enumerable<matriculasCreateOrConnectWithoutDisciplinasInput>
    createMany?: matriculasCreateManyDisciplinasInputEnvelope
    connect?: Enumerable<matriculasWhereUniqueInput>
  }

  export type matrizes_cursosCreateNestedManyWithoutDisciplinasInput = {
    create?: XOR<Enumerable<matrizes_cursosCreateWithoutDisciplinasInput>, Enumerable<matrizes_cursosUncheckedCreateWithoutDisciplinasInput>>
    connectOrCreate?: Enumerable<matrizes_cursosCreateOrConnectWithoutDisciplinasInput>
    createMany?: matrizes_cursosCreateManyDisciplinasInputEnvelope
    connect?: Enumerable<matrizes_cursosWhereUniqueInput>
  }

  export type matriculasUncheckedCreateNestedManyWithoutDisciplinasInput = {
    create?: XOR<Enumerable<matriculasCreateWithoutDisciplinasInput>, Enumerable<matriculasUncheckedCreateWithoutDisciplinasInput>>
    connectOrCreate?: Enumerable<matriculasCreateOrConnectWithoutDisciplinasInput>
    createMany?: matriculasCreateManyDisciplinasInputEnvelope
    connect?: Enumerable<matriculasWhereUniqueInput>
  }

  export type matrizes_cursosUncheckedCreateNestedManyWithoutDisciplinasInput = {
    create?: XOR<Enumerable<matrizes_cursosCreateWithoutDisciplinasInput>, Enumerable<matrizes_cursosUncheckedCreateWithoutDisciplinasInput>>
    connectOrCreate?: Enumerable<matrizes_cursosCreateOrConnectWithoutDisciplinasInput>
    createMany?: matrizes_cursosCreateManyDisciplinasInputEnvelope
    connect?: Enumerable<matrizes_cursosWhereUniqueInput>
  }

  export type matriculasUpdateManyWithoutDisciplinasNestedInput = {
    create?: XOR<Enumerable<matriculasCreateWithoutDisciplinasInput>, Enumerable<matriculasUncheckedCreateWithoutDisciplinasInput>>
    connectOrCreate?: Enumerable<matriculasCreateOrConnectWithoutDisciplinasInput>
    upsert?: Enumerable<matriculasUpsertWithWhereUniqueWithoutDisciplinasInput>
    createMany?: matriculasCreateManyDisciplinasInputEnvelope
    set?: Enumerable<matriculasWhereUniqueInput>
    disconnect?: Enumerable<matriculasWhereUniqueInput>
    delete?: Enumerable<matriculasWhereUniqueInput>
    connect?: Enumerable<matriculasWhereUniqueInput>
    update?: Enumerable<matriculasUpdateWithWhereUniqueWithoutDisciplinasInput>
    updateMany?: Enumerable<matriculasUpdateManyWithWhereWithoutDisciplinasInput>
    deleteMany?: Enumerable<matriculasScalarWhereInput>
  }

  export type matrizes_cursosUpdateManyWithoutDisciplinasNestedInput = {
    create?: XOR<Enumerable<matrizes_cursosCreateWithoutDisciplinasInput>, Enumerable<matrizes_cursosUncheckedCreateWithoutDisciplinasInput>>
    connectOrCreate?: Enumerable<matrizes_cursosCreateOrConnectWithoutDisciplinasInput>
    upsert?: Enumerable<matrizes_cursosUpsertWithWhereUniqueWithoutDisciplinasInput>
    createMany?: matrizes_cursosCreateManyDisciplinasInputEnvelope
    set?: Enumerable<matrizes_cursosWhereUniqueInput>
    disconnect?: Enumerable<matrizes_cursosWhereUniqueInput>
    delete?: Enumerable<matrizes_cursosWhereUniqueInput>
    connect?: Enumerable<matrizes_cursosWhereUniqueInput>
    update?: Enumerable<matrizes_cursosUpdateWithWhereUniqueWithoutDisciplinasInput>
    updateMany?: Enumerable<matrizes_cursosUpdateManyWithWhereWithoutDisciplinasInput>
    deleteMany?: Enumerable<matrizes_cursosScalarWhereInput>
  }

  export type matriculasUncheckedUpdateManyWithoutDisciplinasNestedInput = {
    create?: XOR<Enumerable<matriculasCreateWithoutDisciplinasInput>, Enumerable<matriculasUncheckedCreateWithoutDisciplinasInput>>
    connectOrCreate?: Enumerable<matriculasCreateOrConnectWithoutDisciplinasInput>
    upsert?: Enumerable<matriculasUpsertWithWhereUniqueWithoutDisciplinasInput>
    createMany?: matriculasCreateManyDisciplinasInputEnvelope
    set?: Enumerable<matriculasWhereUniqueInput>
    disconnect?: Enumerable<matriculasWhereUniqueInput>
    delete?: Enumerable<matriculasWhereUniqueInput>
    connect?: Enumerable<matriculasWhereUniqueInput>
    update?: Enumerable<matriculasUpdateWithWhereUniqueWithoutDisciplinasInput>
    updateMany?: Enumerable<matriculasUpdateManyWithWhereWithoutDisciplinasInput>
    deleteMany?: Enumerable<matriculasScalarWhereInput>
  }

  export type matrizes_cursosUncheckedUpdateManyWithoutDisciplinasNestedInput = {
    create?: XOR<Enumerable<matrizes_cursosCreateWithoutDisciplinasInput>, Enumerable<matrizes_cursosUncheckedCreateWithoutDisciplinasInput>>
    connectOrCreate?: Enumerable<matrizes_cursosCreateOrConnectWithoutDisciplinasInput>
    upsert?: Enumerable<matrizes_cursosUpsertWithWhereUniqueWithoutDisciplinasInput>
    createMany?: matrizes_cursosCreateManyDisciplinasInputEnvelope
    set?: Enumerable<matrizes_cursosWhereUniqueInput>
    disconnect?: Enumerable<matrizes_cursosWhereUniqueInput>
    delete?: Enumerable<matrizes_cursosWhereUniqueInput>
    connect?: Enumerable<matrizes_cursosWhereUniqueInput>
    update?: Enumerable<matrizes_cursosUpdateWithWhereUniqueWithoutDisciplinasInput>
    updateMany?: Enumerable<matrizes_cursosUpdateManyWithWhereWithoutDisciplinasInput>
    deleteMany?: Enumerable<matrizes_cursosScalarWhereInput>
  }

  export type alunosCreateNestedOneWithoutMatriculasInput = {
    create?: XOR<alunosCreateWithoutMatriculasInput, alunosUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: alunosCreateOrConnectWithoutMatriculasInput
    connect?: alunosWhereUniqueInput
  }

  export type disciplinasCreateNestedOneWithoutMatriculasInput = {
    create?: XOR<disciplinasCreateWithoutMatriculasInput, disciplinasUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: disciplinasCreateOrConnectWithoutMatriculasInput
    connect?: disciplinasWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type alunosUpdateOneRequiredWithoutMatriculasNestedInput = {
    create?: XOR<alunosCreateWithoutMatriculasInput, alunosUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: alunosCreateOrConnectWithoutMatriculasInput
    upsert?: alunosUpsertWithoutMatriculasInput
    connect?: alunosWhereUniqueInput
    update?: XOR<alunosUpdateWithoutMatriculasInput, alunosUncheckedUpdateWithoutMatriculasInput>
  }

  export type disciplinasUpdateOneRequiredWithoutMatriculasNestedInput = {
    create?: XOR<disciplinasCreateWithoutMatriculasInput, disciplinasUncheckedCreateWithoutMatriculasInput>
    connectOrCreate?: disciplinasCreateOrConnectWithoutMatriculasInput
    upsert?: disciplinasUpsertWithoutMatriculasInput
    connect?: disciplinasWhereUniqueInput
    update?: XOR<disciplinasUpdateWithoutMatriculasInput, disciplinasUncheckedUpdateWithoutMatriculasInput>
  }

  export type cursosCreateNestedOneWithoutMatrizes_cursosInput = {
    create?: XOR<cursosCreateWithoutMatrizes_cursosInput, cursosUncheckedCreateWithoutMatrizes_cursosInput>
    connectOrCreate?: cursosCreateOrConnectWithoutMatrizes_cursosInput
    connect?: cursosWhereUniqueInput
  }

  export type disciplinasCreateNestedOneWithoutMatrizes_cursosInput = {
    create?: XOR<disciplinasCreateWithoutMatrizes_cursosInput, disciplinasUncheckedCreateWithoutMatrizes_cursosInput>
    connectOrCreate?: disciplinasCreateOrConnectWithoutMatrizes_cursosInput
    connect?: disciplinasWhereUniqueInput
  }

  export type cursosUpdateOneRequiredWithoutMatrizes_cursosNestedInput = {
    create?: XOR<cursosCreateWithoutMatrizes_cursosInput, cursosUncheckedCreateWithoutMatrizes_cursosInput>
    connectOrCreate?: cursosCreateOrConnectWithoutMatrizes_cursosInput
    upsert?: cursosUpsertWithoutMatrizes_cursosInput
    connect?: cursosWhereUniqueInput
    update?: XOR<cursosUpdateWithoutMatrizes_cursosInput, cursosUncheckedUpdateWithoutMatrizes_cursosInput>
  }

  export type disciplinasUpdateOneRequiredWithoutMatrizes_cursosNestedInput = {
    create?: XOR<disciplinasCreateWithoutMatrizes_cursosInput, disciplinasUncheckedCreateWithoutMatrizes_cursosInput>
    connectOrCreate?: disciplinasCreateOrConnectWithoutMatrizes_cursosInput
    upsert?: disciplinasUpsertWithoutMatrizes_cursosInput
    connect?: disciplinasWhereUniqueInput
    update?: XOR<disciplinasUpdateWithoutMatrizes_cursosInput, disciplinasUncheckedUpdateWithoutMatrizes_cursosInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type cursosCreateWithoutAlunosInput = {
    cod_curso: number
    nom_curso: string
    departamentos: departamentosCreateNestedOneWithoutCursosInput
    matrizes_cursos?: matrizes_cursosCreateNestedManyWithoutCursosInput
  }

  export type cursosUncheckedCreateWithoutAlunosInput = {
    cod_curso: number
    nom_curso: string
    cod_dpto: number
    matrizes_cursos?: matrizes_cursosUncheckedCreateNestedManyWithoutCursosInput
  }

  export type cursosCreateOrConnectWithoutAlunosInput = {
    where: cursosWhereUniqueInput
    create: XOR<cursosCreateWithoutAlunosInput, cursosUncheckedCreateWithoutAlunosInput>
  }

  export type matriculasCreateWithoutAlunosInput = {
    semestre: number
    nota?: number | null
    faltas?: number | null
    status?: string | null
    disciplinas: disciplinasCreateNestedOneWithoutMatriculasInput
  }

  export type matriculasUncheckedCreateWithoutAlunosInput = {
    semestre: number
    cod_disc: number
    nota?: number | null
    faltas?: number | null
    status?: string | null
  }

  export type matriculasCreateOrConnectWithoutAlunosInput = {
    where: matriculasWhereUniqueInput
    create: XOR<matriculasCreateWithoutAlunosInput, matriculasUncheckedCreateWithoutAlunosInput>
  }

  export type matriculasCreateManyAlunosInputEnvelope = {
    data: Enumerable<matriculasCreateManyAlunosInput>
    skipDuplicates?: boolean
  }

  export type cursosUpsertWithoutAlunosInput = {
    update: XOR<cursosUpdateWithoutAlunosInput, cursosUncheckedUpdateWithoutAlunosInput>
    create: XOR<cursosCreateWithoutAlunosInput, cursosUncheckedCreateWithoutAlunosInput>
  }

  export type cursosUpdateWithoutAlunosInput = {
    cod_curso?: IntFieldUpdateOperationsInput | number
    nom_curso?: StringFieldUpdateOperationsInput | string
    departamentos?: departamentosUpdateOneRequiredWithoutCursosNestedInput
    matrizes_cursos?: matrizes_cursosUpdateManyWithoutCursosNestedInput
  }

  export type cursosUncheckedUpdateWithoutAlunosInput = {
    cod_curso?: IntFieldUpdateOperationsInput | number
    nom_curso?: StringFieldUpdateOperationsInput | string
    cod_dpto?: IntFieldUpdateOperationsInput | number
    matrizes_cursos?: matrizes_cursosUncheckedUpdateManyWithoutCursosNestedInput
  }

  export type matriculasUpsertWithWhereUniqueWithoutAlunosInput = {
    where: matriculasWhereUniqueInput
    update: XOR<matriculasUpdateWithoutAlunosInput, matriculasUncheckedUpdateWithoutAlunosInput>
    create: XOR<matriculasCreateWithoutAlunosInput, matriculasUncheckedCreateWithoutAlunosInput>
  }

  export type matriculasUpdateWithWhereUniqueWithoutAlunosInput = {
    where: matriculasWhereUniqueInput
    data: XOR<matriculasUpdateWithoutAlunosInput, matriculasUncheckedUpdateWithoutAlunosInput>
  }

  export type matriculasUpdateManyWithWhereWithoutAlunosInput = {
    where: matriculasScalarWhereInput
    data: XOR<matriculasUpdateManyMutationInput, matriculasUncheckedUpdateManyWithoutMatriculasInput>
  }

  export type matriculasScalarWhereInput = {
    AND?: Enumerable<matriculasScalarWhereInput>
    OR?: Enumerable<matriculasScalarWhereInput>
    NOT?: Enumerable<matriculasScalarWhereInput>
    semestre?: IntFilter | number
    mat_alu?: IntFilter | number
    cod_disc?: IntFilter | number
    nota?: IntNullableFilter | number | null
    faltas?: IntNullableFilter | number | null
    status?: StringNullableFilter | string | null
  }

  export type departamentosCreateWithoutCursosInput = {
    cod_dpto: number
    nome_dpto: string
  }

  export type departamentosUncheckedCreateWithoutCursosInput = {
    cod_dpto: number
    nome_dpto: string
  }

  export type departamentosCreateOrConnectWithoutCursosInput = {
    where: departamentosWhereUniqueInput
    create: XOR<departamentosCreateWithoutCursosInput, departamentosUncheckedCreateWithoutCursosInput>
  }

  export type alunosCreateWithoutCursosInput = {
    mat_alu: number
    nome: string
    dat_entrada: Date | string
    cotista: string
    matriculas?: matriculasCreateNestedManyWithoutAlunosInput
  }

  export type alunosUncheckedCreateWithoutCursosInput = {
    mat_alu: number
    nome: string
    dat_entrada: Date | string
    cotista: string
    matriculas?: matriculasUncheckedCreateNestedManyWithoutAlunosInput
  }

  export type alunosCreateOrConnectWithoutCursosInput = {
    where: alunosWhereUniqueInput
    create: XOR<alunosCreateWithoutCursosInput, alunosUncheckedCreateWithoutCursosInput>
  }

  export type alunosCreateManyCursosInputEnvelope = {
    data: Enumerable<alunosCreateManyCursosInput>
    skipDuplicates?: boolean
  }

  export type matrizes_cursosCreateWithoutCursosInput = {
    periodo: number
    disciplinas: disciplinasCreateNestedOneWithoutMatrizes_cursosInput
  }

  export type matrizes_cursosUncheckedCreateWithoutCursosInput = {
    cod_disc: number
    periodo: number
  }

  export type matrizes_cursosCreateOrConnectWithoutCursosInput = {
    where: matrizes_cursosWhereUniqueInput
    create: XOR<matrizes_cursosCreateWithoutCursosInput, matrizes_cursosUncheckedCreateWithoutCursosInput>
  }

  export type matrizes_cursosCreateManyCursosInputEnvelope = {
    data: Enumerable<matrizes_cursosCreateManyCursosInput>
    skipDuplicates?: boolean
  }

  export type departamentosUpsertWithoutCursosInput = {
    update: XOR<departamentosUpdateWithoutCursosInput, departamentosUncheckedUpdateWithoutCursosInput>
    create: XOR<departamentosCreateWithoutCursosInput, departamentosUncheckedCreateWithoutCursosInput>
  }

  export type departamentosUpdateWithoutCursosInput = {
    cod_dpto?: IntFieldUpdateOperationsInput | number
    nome_dpto?: StringFieldUpdateOperationsInput | string
  }

  export type departamentosUncheckedUpdateWithoutCursosInput = {
    cod_dpto?: IntFieldUpdateOperationsInput | number
    nome_dpto?: StringFieldUpdateOperationsInput | string
  }

  export type alunosUpsertWithWhereUniqueWithoutCursosInput = {
    where: alunosWhereUniqueInput
    update: XOR<alunosUpdateWithoutCursosInput, alunosUncheckedUpdateWithoutCursosInput>
    create: XOR<alunosCreateWithoutCursosInput, alunosUncheckedCreateWithoutCursosInput>
  }

  export type alunosUpdateWithWhereUniqueWithoutCursosInput = {
    where: alunosWhereUniqueInput
    data: XOR<alunosUpdateWithoutCursosInput, alunosUncheckedUpdateWithoutCursosInput>
  }

  export type alunosUpdateManyWithWhereWithoutCursosInput = {
    where: alunosScalarWhereInput
    data: XOR<alunosUpdateManyMutationInput, alunosUncheckedUpdateManyWithoutAlunosInput>
  }

  export type alunosScalarWhereInput = {
    AND?: Enumerable<alunosScalarWhereInput>
    OR?: Enumerable<alunosScalarWhereInput>
    NOT?: Enumerable<alunosScalarWhereInput>
    mat_alu?: IntFilter | number
    nome?: StringFilter | string
    dat_entrada?: DateTimeFilter | Date | string
    cod_curso?: IntFilter | number
    cotista?: StringFilter | string
  }

  export type matrizes_cursosUpsertWithWhereUniqueWithoutCursosInput = {
    where: matrizes_cursosWhereUniqueInput
    update: XOR<matrizes_cursosUpdateWithoutCursosInput, matrizes_cursosUncheckedUpdateWithoutCursosInput>
    create: XOR<matrizes_cursosCreateWithoutCursosInput, matrizes_cursosUncheckedCreateWithoutCursosInput>
  }

  export type matrizes_cursosUpdateWithWhereUniqueWithoutCursosInput = {
    where: matrizes_cursosWhereUniqueInput
    data: XOR<matrizes_cursosUpdateWithoutCursosInput, matrizes_cursosUncheckedUpdateWithoutCursosInput>
  }

  export type matrizes_cursosUpdateManyWithWhereWithoutCursosInput = {
    where: matrizes_cursosScalarWhereInput
    data: XOR<matrizes_cursosUpdateManyMutationInput, matrizes_cursosUncheckedUpdateManyWithoutMatrizes_cursosInput>
  }

  export type matrizes_cursosScalarWhereInput = {
    AND?: Enumerable<matrizes_cursosScalarWhereInput>
    OR?: Enumerable<matrizes_cursosScalarWhereInput>
    NOT?: Enumerable<matrizes_cursosScalarWhereInput>
    cod_curso?: IntFilter | number
    cod_disc?: IntFilter | number
    periodo?: IntFilter | number
  }

  export type cursosCreateWithoutDepartamentosInput = {
    cod_curso: number
    nom_curso: string
    alunos?: alunosCreateNestedManyWithoutCursosInput
    matrizes_cursos?: matrizes_cursosCreateNestedManyWithoutCursosInput
  }

  export type cursosUncheckedCreateWithoutDepartamentosInput = {
    cod_curso: number
    nom_curso: string
    alunos?: alunosUncheckedCreateNestedManyWithoutCursosInput
    matrizes_cursos?: matrizes_cursosUncheckedCreateNestedManyWithoutCursosInput
  }

  export type cursosCreateOrConnectWithoutDepartamentosInput = {
    where: cursosWhereUniqueInput
    create: XOR<cursosCreateWithoutDepartamentosInput, cursosUncheckedCreateWithoutDepartamentosInput>
  }

  export type cursosCreateManyDepartamentosInputEnvelope = {
    data: Enumerable<cursosCreateManyDepartamentosInput>
    skipDuplicates?: boolean
  }

  export type cursosUpsertWithWhereUniqueWithoutDepartamentosInput = {
    where: cursosWhereUniqueInput
    update: XOR<cursosUpdateWithoutDepartamentosInput, cursosUncheckedUpdateWithoutDepartamentosInput>
    create: XOR<cursosCreateWithoutDepartamentosInput, cursosUncheckedCreateWithoutDepartamentosInput>
  }

  export type cursosUpdateWithWhereUniqueWithoutDepartamentosInput = {
    where: cursosWhereUniqueInput
    data: XOR<cursosUpdateWithoutDepartamentosInput, cursosUncheckedUpdateWithoutDepartamentosInput>
  }

  export type cursosUpdateManyWithWhereWithoutDepartamentosInput = {
    where: cursosScalarWhereInput
    data: XOR<cursosUpdateManyMutationInput, cursosUncheckedUpdateManyWithoutCursosInput>
  }

  export type cursosScalarWhereInput = {
    AND?: Enumerable<cursosScalarWhereInput>
    OR?: Enumerable<cursosScalarWhereInput>
    NOT?: Enumerable<cursosScalarWhereInput>
    cod_curso?: IntFilter | number
    nom_curso?: StringFilter | string
    cod_dpto?: IntFilter | number
  }

  export type matriculasCreateWithoutDisciplinasInput = {
    semestre: number
    nota?: number | null
    faltas?: number | null
    status?: string | null
    alunos: alunosCreateNestedOneWithoutMatriculasInput
  }

  export type matriculasUncheckedCreateWithoutDisciplinasInput = {
    semestre: number
    mat_alu: number
    nota?: number | null
    faltas?: number | null
    status?: string | null
  }

  export type matriculasCreateOrConnectWithoutDisciplinasInput = {
    where: matriculasWhereUniqueInput
    create: XOR<matriculasCreateWithoutDisciplinasInput, matriculasUncheckedCreateWithoutDisciplinasInput>
  }

  export type matriculasCreateManyDisciplinasInputEnvelope = {
    data: Enumerable<matriculasCreateManyDisciplinasInput>
    skipDuplicates?: boolean
  }

  export type matrizes_cursosCreateWithoutDisciplinasInput = {
    periodo: number
    cursos: cursosCreateNestedOneWithoutMatrizes_cursosInput
  }

  export type matrizes_cursosUncheckedCreateWithoutDisciplinasInput = {
    cod_curso: number
    periodo: number
  }

  export type matrizes_cursosCreateOrConnectWithoutDisciplinasInput = {
    where: matrizes_cursosWhereUniqueInput
    create: XOR<matrizes_cursosCreateWithoutDisciplinasInput, matrizes_cursosUncheckedCreateWithoutDisciplinasInput>
  }

  export type matrizes_cursosCreateManyDisciplinasInputEnvelope = {
    data: Enumerable<matrizes_cursosCreateManyDisciplinasInput>
    skipDuplicates?: boolean
  }

  export type matriculasUpsertWithWhereUniqueWithoutDisciplinasInput = {
    where: matriculasWhereUniqueInput
    update: XOR<matriculasUpdateWithoutDisciplinasInput, matriculasUncheckedUpdateWithoutDisciplinasInput>
    create: XOR<matriculasCreateWithoutDisciplinasInput, matriculasUncheckedCreateWithoutDisciplinasInput>
  }

  export type matriculasUpdateWithWhereUniqueWithoutDisciplinasInput = {
    where: matriculasWhereUniqueInput
    data: XOR<matriculasUpdateWithoutDisciplinasInput, matriculasUncheckedUpdateWithoutDisciplinasInput>
  }

  export type matriculasUpdateManyWithWhereWithoutDisciplinasInput = {
    where: matriculasScalarWhereInput
    data: XOR<matriculasUpdateManyMutationInput, matriculasUncheckedUpdateManyWithoutMatriculasInput>
  }

  export type matrizes_cursosUpsertWithWhereUniqueWithoutDisciplinasInput = {
    where: matrizes_cursosWhereUniqueInput
    update: XOR<matrizes_cursosUpdateWithoutDisciplinasInput, matrizes_cursosUncheckedUpdateWithoutDisciplinasInput>
    create: XOR<matrizes_cursosCreateWithoutDisciplinasInput, matrizes_cursosUncheckedCreateWithoutDisciplinasInput>
  }

  export type matrizes_cursosUpdateWithWhereUniqueWithoutDisciplinasInput = {
    where: matrizes_cursosWhereUniqueInput
    data: XOR<matrizes_cursosUpdateWithoutDisciplinasInput, matrizes_cursosUncheckedUpdateWithoutDisciplinasInput>
  }

  export type matrizes_cursosUpdateManyWithWhereWithoutDisciplinasInput = {
    where: matrizes_cursosScalarWhereInput
    data: XOR<matrizes_cursosUpdateManyMutationInput, matrizes_cursosUncheckedUpdateManyWithoutMatrizes_cursosInput>
  }

  export type alunosCreateWithoutMatriculasInput = {
    mat_alu: number
    nome: string
    dat_entrada: Date | string
    cotista: string
    cursos: cursosCreateNestedOneWithoutAlunosInput
  }

  export type alunosUncheckedCreateWithoutMatriculasInput = {
    mat_alu: number
    nome: string
    dat_entrada: Date | string
    cod_curso: number
    cotista: string
  }

  export type alunosCreateOrConnectWithoutMatriculasInput = {
    where: alunosWhereUniqueInput
    create: XOR<alunosCreateWithoutMatriculasInput, alunosUncheckedCreateWithoutMatriculasInput>
  }

  export type disciplinasCreateWithoutMatriculasInput = {
    cod_disc: number
    nome_disc: string
    carga_horaria: number
    matrizes_cursos?: matrizes_cursosCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasUncheckedCreateWithoutMatriculasInput = {
    cod_disc: number
    nome_disc: string
    carga_horaria: number
    matrizes_cursos?: matrizes_cursosUncheckedCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasCreateOrConnectWithoutMatriculasInput = {
    where: disciplinasWhereUniqueInput
    create: XOR<disciplinasCreateWithoutMatriculasInput, disciplinasUncheckedCreateWithoutMatriculasInput>
  }

  export type alunosUpsertWithoutMatriculasInput = {
    update: XOR<alunosUpdateWithoutMatriculasInput, alunosUncheckedUpdateWithoutMatriculasInput>
    create: XOR<alunosCreateWithoutMatriculasInput, alunosUncheckedCreateWithoutMatriculasInput>
  }

  export type alunosUpdateWithoutMatriculasInput = {
    mat_alu?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dat_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    cotista?: StringFieldUpdateOperationsInput | string
    cursos?: cursosUpdateOneRequiredWithoutAlunosNestedInput
  }

  export type alunosUncheckedUpdateWithoutMatriculasInput = {
    mat_alu?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dat_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    cod_curso?: IntFieldUpdateOperationsInput | number
    cotista?: StringFieldUpdateOperationsInput | string
  }

  export type disciplinasUpsertWithoutMatriculasInput = {
    update: XOR<disciplinasUpdateWithoutMatriculasInput, disciplinasUncheckedUpdateWithoutMatriculasInput>
    create: XOR<disciplinasCreateWithoutMatriculasInput, disciplinasUncheckedCreateWithoutMatriculasInput>
  }

  export type disciplinasUpdateWithoutMatriculasInput = {
    cod_disc?: IntFieldUpdateOperationsInput | number
    nome_disc?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    matrizes_cursos?: matrizes_cursosUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasUncheckedUpdateWithoutMatriculasInput = {
    cod_disc?: IntFieldUpdateOperationsInput | number
    nome_disc?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    matrizes_cursos?: matrizes_cursosUncheckedUpdateManyWithoutDisciplinasNestedInput
  }

  export type cursosCreateWithoutMatrizes_cursosInput = {
    cod_curso: number
    nom_curso: string
    departamentos: departamentosCreateNestedOneWithoutCursosInput
    alunos?: alunosCreateNestedManyWithoutCursosInput
  }

  export type cursosUncheckedCreateWithoutMatrizes_cursosInput = {
    cod_curso: number
    nom_curso: string
    cod_dpto: number
    alunos?: alunosUncheckedCreateNestedManyWithoutCursosInput
  }

  export type cursosCreateOrConnectWithoutMatrizes_cursosInput = {
    where: cursosWhereUniqueInput
    create: XOR<cursosCreateWithoutMatrizes_cursosInput, cursosUncheckedCreateWithoutMatrizes_cursosInput>
  }

  export type disciplinasCreateWithoutMatrizes_cursosInput = {
    cod_disc: number
    nome_disc: string
    carga_horaria: number
    matriculas?: matriculasCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasUncheckedCreateWithoutMatrizes_cursosInput = {
    cod_disc: number
    nome_disc: string
    carga_horaria: number
    matriculas?: matriculasUncheckedCreateNestedManyWithoutDisciplinasInput
  }

  export type disciplinasCreateOrConnectWithoutMatrizes_cursosInput = {
    where: disciplinasWhereUniqueInput
    create: XOR<disciplinasCreateWithoutMatrizes_cursosInput, disciplinasUncheckedCreateWithoutMatrizes_cursosInput>
  }

  export type cursosUpsertWithoutMatrizes_cursosInput = {
    update: XOR<cursosUpdateWithoutMatrizes_cursosInput, cursosUncheckedUpdateWithoutMatrizes_cursosInput>
    create: XOR<cursosCreateWithoutMatrizes_cursosInput, cursosUncheckedCreateWithoutMatrizes_cursosInput>
  }

  export type cursosUpdateWithoutMatrizes_cursosInput = {
    cod_curso?: IntFieldUpdateOperationsInput | number
    nom_curso?: StringFieldUpdateOperationsInput | string
    departamentos?: departamentosUpdateOneRequiredWithoutCursosNestedInput
    alunos?: alunosUpdateManyWithoutCursosNestedInput
  }

  export type cursosUncheckedUpdateWithoutMatrizes_cursosInput = {
    cod_curso?: IntFieldUpdateOperationsInput | number
    nom_curso?: StringFieldUpdateOperationsInput | string
    cod_dpto?: IntFieldUpdateOperationsInput | number
    alunos?: alunosUncheckedUpdateManyWithoutCursosNestedInput
  }

  export type disciplinasUpsertWithoutMatrizes_cursosInput = {
    update: XOR<disciplinasUpdateWithoutMatrizes_cursosInput, disciplinasUncheckedUpdateWithoutMatrizes_cursosInput>
    create: XOR<disciplinasCreateWithoutMatrizes_cursosInput, disciplinasUncheckedCreateWithoutMatrizes_cursosInput>
  }

  export type disciplinasUpdateWithoutMatrizes_cursosInput = {
    cod_disc?: IntFieldUpdateOperationsInput | number
    nome_disc?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    matriculas?: matriculasUpdateManyWithoutDisciplinasNestedInput
  }

  export type disciplinasUncheckedUpdateWithoutMatrizes_cursosInput = {
    cod_disc?: IntFieldUpdateOperationsInput | number
    nome_disc?: StringFieldUpdateOperationsInput | string
    carga_horaria?: IntFieldUpdateOperationsInput | number
    matriculas?: matriculasUncheckedUpdateManyWithoutDisciplinasNestedInput
  }

  export type matriculasCreateManyAlunosInput = {
    semestre: number
    cod_disc: number
    nota?: number | null
    faltas?: number | null
    status?: string | null
  }

  export type matriculasUpdateWithoutAlunosInput = {
    semestre?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    disciplinas?: disciplinasUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type matriculasUncheckedUpdateWithoutAlunosInput = {
    semestre?: IntFieldUpdateOperationsInput | number
    cod_disc?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type matriculasUncheckedUpdateManyWithoutMatriculasInput = {
    semestre?: IntFieldUpdateOperationsInput | number
    cod_disc?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type alunosCreateManyCursosInput = {
    mat_alu: number
    nome: string
    dat_entrada: Date | string
    cotista: string
  }

  export type matrizes_cursosCreateManyCursosInput = {
    cod_disc: number
    periodo: number
  }

  export type alunosUpdateWithoutCursosInput = {
    mat_alu?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dat_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    cotista?: StringFieldUpdateOperationsInput | string
    matriculas?: matriculasUpdateManyWithoutAlunosNestedInput
  }

  export type alunosUncheckedUpdateWithoutCursosInput = {
    mat_alu?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dat_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    cotista?: StringFieldUpdateOperationsInput | string
    matriculas?: matriculasUncheckedUpdateManyWithoutAlunosNestedInput
  }

  export type alunosUncheckedUpdateManyWithoutAlunosInput = {
    mat_alu?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dat_entrada?: DateTimeFieldUpdateOperationsInput | Date | string
    cotista?: StringFieldUpdateOperationsInput | string
  }

  export type matrizes_cursosUpdateWithoutCursosInput = {
    periodo?: IntFieldUpdateOperationsInput | number
    disciplinas?: disciplinasUpdateOneRequiredWithoutMatrizes_cursosNestedInput
  }

  export type matrizes_cursosUncheckedUpdateWithoutCursosInput = {
    cod_disc?: IntFieldUpdateOperationsInput | number
    periodo?: IntFieldUpdateOperationsInput | number
  }

  export type matrizes_cursosUncheckedUpdateManyWithoutMatrizes_cursosInput = {
    cod_disc?: IntFieldUpdateOperationsInput | number
    periodo?: IntFieldUpdateOperationsInput | number
  }

  export type cursosCreateManyDepartamentosInput = {
    cod_curso: number
    nom_curso: string
  }

  export type cursosUpdateWithoutDepartamentosInput = {
    cod_curso?: IntFieldUpdateOperationsInput | number
    nom_curso?: StringFieldUpdateOperationsInput | string
    alunos?: alunosUpdateManyWithoutCursosNestedInput
    matrizes_cursos?: matrizes_cursosUpdateManyWithoutCursosNestedInput
  }

  export type cursosUncheckedUpdateWithoutDepartamentosInput = {
    cod_curso?: IntFieldUpdateOperationsInput | number
    nom_curso?: StringFieldUpdateOperationsInput | string
    alunos?: alunosUncheckedUpdateManyWithoutCursosNestedInput
    matrizes_cursos?: matrizes_cursosUncheckedUpdateManyWithoutCursosNestedInput
  }

  export type cursosUncheckedUpdateManyWithoutCursosInput = {
    cod_curso?: IntFieldUpdateOperationsInput | number
    nom_curso?: StringFieldUpdateOperationsInput | string
  }

  export type matriculasCreateManyDisciplinasInput = {
    semestre: number
    mat_alu: number
    nota?: number | null
    faltas?: number | null
    status?: string | null
  }

  export type matrizes_cursosCreateManyDisciplinasInput = {
    cod_curso: number
    periodo: number
  }

  export type matriculasUpdateWithoutDisciplinasInput = {
    semestre?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    alunos?: alunosUpdateOneRequiredWithoutMatriculasNestedInput
  }

  export type matriculasUncheckedUpdateWithoutDisciplinasInput = {
    semestre?: IntFieldUpdateOperationsInput | number
    mat_alu?: IntFieldUpdateOperationsInput | number
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    faltas?: NullableIntFieldUpdateOperationsInput | number | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type matrizes_cursosUpdateWithoutDisciplinasInput = {
    periodo?: IntFieldUpdateOperationsInput | number
    cursos?: cursosUpdateOneRequiredWithoutMatrizes_cursosNestedInput
  }

  export type matrizes_cursosUncheckedUpdateWithoutDisciplinasInput = {
    cod_curso?: IntFieldUpdateOperationsInput | number
    periodo?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}