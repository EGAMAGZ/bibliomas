
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Estudiantes
 * 
 */
export type Estudiantes = $Result.DefaultSelection<Prisma.$EstudiantesPayload>
/**
 * Model Bibliografias
 * 
 */
export type Bibliografias = $Result.DefaultSelection<Prisma.$BibliografiasPayload>
/**
 * Model Archivos
 * 
 */
export type Archivos = $Result.DefaultSelection<Prisma.$ArchivosPayload>
/**
 * Model Carpetas
 * 
 */
export type Carpetas = $Result.DefaultSelection<Prisma.$CarpetasPayload>
/**
 * Model GrupoConAcceso
 * 
 */
export type GrupoConAcceso = $Result.DefaultSelection<Prisma.$GrupoConAccesoPayload>
/**
 * Model Grupos
 * 
 */
export type Grupos = $Result.DefaultSelection<Prisma.$GruposPayload>
/**
 * Model Cambios
 * 
 */
export type Cambios = $Result.DefaultSelection<Prisma.$CambiosPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Estudiantes
 * const estudiantes = await prisma.estudiantes.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Estudiantes
   * const estudiantes = await prisma.estudiantes.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
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
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

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
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.estudiantes`: Exposes CRUD operations for the **Estudiantes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Estudiantes
    * const estudiantes = await prisma.estudiantes.findMany()
    * ```
    */
  get estudiantes(): Prisma.EstudiantesDelegate<ExtArgs>;

  /**
   * `prisma.bibliografias`: Exposes CRUD operations for the **Bibliografias** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Bibliografias
    * const bibliografias = await prisma.bibliografias.findMany()
    * ```
    */
  get bibliografias(): Prisma.BibliografiasDelegate<ExtArgs>;

  /**
   * `prisma.archivos`: Exposes CRUD operations for the **Archivos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Archivos
    * const archivos = await prisma.archivos.findMany()
    * ```
    */
  get archivos(): Prisma.ArchivosDelegate<ExtArgs>;

  /**
   * `prisma.carpetas`: Exposes CRUD operations for the **Carpetas** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carpetas
    * const carpetas = await prisma.carpetas.findMany()
    * ```
    */
  get carpetas(): Prisma.CarpetasDelegate<ExtArgs>;

  /**
   * `prisma.grupoConAcceso`: Exposes CRUD operations for the **GrupoConAcceso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GrupoConAccesos
    * const grupoConAccesos = await prisma.grupoConAcceso.findMany()
    * ```
    */
  get grupoConAcceso(): Prisma.GrupoConAccesoDelegate<ExtArgs>;

  /**
   * `prisma.grupos`: Exposes CRUD operations for the **Grupos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grupos
    * const grupos = await prisma.grupos.findMany()
    * ```
    */
  get grupos(): Prisma.GruposDelegate<ExtArgs>;

  /**
   * `prisma.cambios`: Exposes CRUD operations for the **Cambios** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cambios
    * const cambios = await prisma.cambios.findMany()
    * ```
    */
  get cambios(): Prisma.CambiosDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

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
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.5.2
   * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
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
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

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

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

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

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Estudiantes: 'Estudiantes',
    Bibliografias: 'Bibliografias',
    Archivos: 'Archivos',
    Carpetas: 'Carpetas',
    GrupoConAcceso: 'GrupoConAcceso',
    Grupos: 'Grupos',
    Cambios: 'Cambios'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'estudiantes' | 'bibliografias' | 'archivos' | 'carpetas' | 'grupoConAcceso' | 'grupos' | 'cambios'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Estudiantes: {
        payload: Prisma.$EstudiantesPayload<ExtArgs>
        fields: Prisma.EstudiantesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstudiantesFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstudiantesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstudiantesFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstudiantesPayload>
          }
          findFirst: {
            args: Prisma.EstudiantesFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstudiantesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstudiantesFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstudiantesPayload>
          }
          findMany: {
            args: Prisma.EstudiantesFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstudiantesPayload>[]
          }
          create: {
            args: Prisma.EstudiantesCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstudiantesPayload>
          }
          createMany: {
            args: Prisma.EstudiantesCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EstudiantesDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstudiantesPayload>
          }
          update: {
            args: Prisma.EstudiantesUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstudiantesPayload>
          }
          deleteMany: {
            args: Prisma.EstudiantesDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EstudiantesUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EstudiantesUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EstudiantesPayload>
          }
          aggregate: {
            args: Prisma.EstudiantesAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEstudiantes>
          }
          groupBy: {
            args: Prisma.EstudiantesGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EstudiantesGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstudiantesCountArgs<ExtArgs>,
            result: $Utils.Optional<EstudiantesCountAggregateOutputType> | number
          }
        }
      }
      Bibliografias: {
        payload: Prisma.$BibliografiasPayload<ExtArgs>
        fields: Prisma.BibliografiasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BibliografiasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BibliografiasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BibliografiasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BibliografiasPayload>
          }
          findFirst: {
            args: Prisma.BibliografiasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BibliografiasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BibliografiasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BibliografiasPayload>
          }
          findMany: {
            args: Prisma.BibliografiasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BibliografiasPayload>[]
          }
          create: {
            args: Prisma.BibliografiasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BibliografiasPayload>
          }
          createMany: {
            args: Prisma.BibliografiasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.BibliografiasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BibliografiasPayload>
          }
          update: {
            args: Prisma.BibliografiasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BibliografiasPayload>
          }
          deleteMany: {
            args: Prisma.BibliografiasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.BibliografiasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.BibliografiasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$BibliografiasPayload>
          }
          aggregate: {
            args: Prisma.BibliografiasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateBibliografias>
          }
          groupBy: {
            args: Prisma.BibliografiasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<BibliografiasGroupByOutputType>[]
          }
          count: {
            args: Prisma.BibliografiasCountArgs<ExtArgs>,
            result: $Utils.Optional<BibliografiasCountAggregateOutputType> | number
          }
        }
      }
      Archivos: {
        payload: Prisma.$ArchivosPayload<ExtArgs>
        fields: Prisma.ArchivosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArchivosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArchivosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivosPayload>
          }
          findFirst: {
            args: Prisma.ArchivosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArchivosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivosPayload>
          }
          findMany: {
            args: Prisma.ArchivosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivosPayload>[]
          }
          create: {
            args: Prisma.ArchivosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivosPayload>
          }
          createMany: {
            args: Prisma.ArchivosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArchivosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivosPayload>
          }
          update: {
            args: Prisma.ArchivosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivosPayload>
          }
          deleteMany: {
            args: Prisma.ArchivosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArchivosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArchivosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArchivosPayload>
          }
          aggregate: {
            args: Prisma.ArchivosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArchivos>
          }
          groupBy: {
            args: Prisma.ArchivosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArchivosGroupByOutputType>[]
          }
          count: {
            args: Prisma.ArchivosCountArgs<ExtArgs>,
            result: $Utils.Optional<ArchivosCountAggregateOutputType> | number
          }
        }
      }
      Carpetas: {
        payload: Prisma.$CarpetasPayload<ExtArgs>
        fields: Prisma.CarpetasFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarpetasFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarpetasPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarpetasFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarpetasPayload>
          }
          findFirst: {
            args: Prisma.CarpetasFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarpetasPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarpetasFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarpetasPayload>
          }
          findMany: {
            args: Prisma.CarpetasFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarpetasPayload>[]
          }
          create: {
            args: Prisma.CarpetasCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarpetasPayload>
          }
          createMany: {
            args: Prisma.CarpetasCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CarpetasDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarpetasPayload>
          }
          update: {
            args: Prisma.CarpetasUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarpetasPayload>
          }
          deleteMany: {
            args: Prisma.CarpetasDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CarpetasUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CarpetasUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CarpetasPayload>
          }
          aggregate: {
            args: Prisma.CarpetasAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCarpetas>
          }
          groupBy: {
            args: Prisma.CarpetasGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CarpetasGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarpetasCountArgs<ExtArgs>,
            result: $Utils.Optional<CarpetasCountAggregateOutputType> | number
          }
        }
      }
      GrupoConAcceso: {
        payload: Prisma.$GrupoConAccesoPayload<ExtArgs>
        fields: Prisma.GrupoConAccesoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GrupoConAccesoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoConAccesoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GrupoConAccesoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoConAccesoPayload>
          }
          findFirst: {
            args: Prisma.GrupoConAccesoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoConAccesoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GrupoConAccesoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoConAccesoPayload>
          }
          findMany: {
            args: Prisma.GrupoConAccesoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoConAccesoPayload>[]
          }
          create: {
            args: Prisma.GrupoConAccesoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoConAccesoPayload>
          }
          createMany: {
            args: Prisma.GrupoConAccesoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GrupoConAccesoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoConAccesoPayload>
          }
          update: {
            args: Prisma.GrupoConAccesoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoConAccesoPayload>
          }
          deleteMany: {
            args: Prisma.GrupoConAccesoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GrupoConAccesoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GrupoConAccesoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GrupoConAccesoPayload>
          }
          aggregate: {
            args: Prisma.GrupoConAccesoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGrupoConAcceso>
          }
          groupBy: {
            args: Prisma.GrupoConAccesoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GrupoConAccesoGroupByOutputType>[]
          }
          count: {
            args: Prisma.GrupoConAccesoCountArgs<ExtArgs>,
            result: $Utils.Optional<GrupoConAccesoCountAggregateOutputType> | number
          }
        }
      }
      Grupos: {
        payload: Prisma.$GruposPayload<ExtArgs>
        fields: Prisma.GruposFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GruposFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GruposFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload>
          }
          findFirst: {
            args: Prisma.GruposFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GruposFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload>
          }
          findMany: {
            args: Prisma.GruposFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload>[]
          }
          create: {
            args: Prisma.GruposCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload>
          }
          createMany: {
            args: Prisma.GruposCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GruposDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload>
          }
          update: {
            args: Prisma.GruposUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload>
          }
          deleteMany: {
            args: Prisma.GruposDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GruposUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GruposUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GruposPayload>
          }
          aggregate: {
            args: Prisma.GruposAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGrupos>
          }
          groupBy: {
            args: Prisma.GruposGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GruposGroupByOutputType>[]
          }
          count: {
            args: Prisma.GruposCountArgs<ExtArgs>,
            result: $Utils.Optional<GruposCountAggregateOutputType> | number
          }
        }
      }
      Cambios: {
        payload: Prisma.$CambiosPayload<ExtArgs>
        fields: Prisma.CambiosFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CambiosFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CambiosPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CambiosFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CambiosPayload>
          }
          findFirst: {
            args: Prisma.CambiosFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CambiosPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CambiosFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CambiosPayload>
          }
          findMany: {
            args: Prisma.CambiosFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CambiosPayload>[]
          }
          create: {
            args: Prisma.CambiosCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CambiosPayload>
          }
          createMany: {
            args: Prisma.CambiosCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CambiosDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CambiosPayload>
          }
          update: {
            args: Prisma.CambiosUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CambiosPayload>
          }
          deleteMany: {
            args: Prisma.CambiosDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CambiosUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CambiosUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CambiosPayload>
          }
          aggregate: {
            args: Prisma.CambiosAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCambios>
          }
          groupBy: {
            args: Prisma.CambiosGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CambiosGroupByOutputType>[]
          }
          count: {
            args: Prisma.CambiosCountArgs<ExtArgs>,
            result: $Utils.Optional<CambiosCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
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
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
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
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EstudiantesCountOutputType
   */

  export type EstudiantesCountOutputType = {
    Cambios: number
    Grupos: number
    GrupoConAcceso: number
    Carpetas: number
    Bibliografias: number
  }

  export type EstudiantesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cambios?: boolean | EstudiantesCountOutputTypeCountCambiosArgs
    Grupos?: boolean | EstudiantesCountOutputTypeCountGruposArgs
    GrupoConAcceso?: boolean | EstudiantesCountOutputTypeCountGrupoConAccesoArgs
    Carpetas?: boolean | EstudiantesCountOutputTypeCountCarpetasArgs
    Bibliografias?: boolean | EstudiantesCountOutputTypeCountBibliografiasArgs
  }

  // Custom InputTypes

  /**
   * EstudiantesCountOutputType without action
   */
  export type EstudiantesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstudiantesCountOutputType
     */
    select?: EstudiantesCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EstudiantesCountOutputType without action
   */
  export type EstudiantesCountOutputTypeCountCambiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CambiosWhereInput
  }


  /**
   * EstudiantesCountOutputType without action
   */
  export type EstudiantesCountOutputTypeCountGruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GruposWhereInput
  }


  /**
   * EstudiantesCountOutputType without action
   */
  export type EstudiantesCountOutputTypeCountGrupoConAccesoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrupoConAccesoWhereInput
  }


  /**
   * EstudiantesCountOutputType without action
   */
  export type EstudiantesCountOutputTypeCountCarpetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarpetasWhereInput
  }


  /**
   * EstudiantesCountOutputType without action
   */
  export type EstudiantesCountOutputTypeCountBibliografiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BibliografiasWhereInput
  }



  /**
   * Count Type BibliografiasCountOutputType
   */

  export type BibliografiasCountOutputType = {
    Archivos: number
  }

  export type BibliografiasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Archivos?: boolean | BibliografiasCountOutputTypeCountArchivosArgs
  }

  // Custom InputTypes

  /**
   * BibliografiasCountOutputType without action
   */
  export type BibliografiasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BibliografiasCountOutputType
     */
    select?: BibliografiasCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * BibliografiasCountOutputType without action
   */
  export type BibliografiasCountOutputTypeCountArchivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchivosWhereInput
  }



  /**
   * Count Type CarpetasCountOutputType
   */

  export type CarpetasCountOutputType = {
    Cambios: number
    Bibliografias: number
  }

  export type CarpetasCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cambios?: boolean | CarpetasCountOutputTypeCountCambiosArgs
    Bibliografias?: boolean | CarpetasCountOutputTypeCountBibliografiasArgs
  }

  // Custom InputTypes

  /**
   * CarpetasCountOutputType without action
   */
  export type CarpetasCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CarpetasCountOutputType
     */
    select?: CarpetasCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CarpetasCountOutputType without action
   */
  export type CarpetasCountOutputTypeCountCambiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CambiosWhereInput
  }


  /**
   * CarpetasCountOutputType without action
   */
  export type CarpetasCountOutputTypeCountBibliografiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BibliografiasWhereInput
  }



  /**
   * Count Type GruposCountOutputType
   */

  export type GruposCountOutputType = {
    Cambios: number
    Carpetas: number
    Bibliografias: number
    GrupoConAcceso: number
  }

  export type GruposCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cambios?: boolean | GruposCountOutputTypeCountCambiosArgs
    Carpetas?: boolean | GruposCountOutputTypeCountCarpetasArgs
    Bibliografias?: boolean | GruposCountOutputTypeCountBibliografiasArgs
    GrupoConAcceso?: boolean | GruposCountOutputTypeCountGrupoConAccesoArgs
  }

  // Custom InputTypes

  /**
   * GruposCountOutputType without action
   */
  export type GruposCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GruposCountOutputType
     */
    select?: GruposCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GruposCountOutputType without action
   */
  export type GruposCountOutputTypeCountCambiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CambiosWhereInput
  }


  /**
   * GruposCountOutputType without action
   */
  export type GruposCountOutputTypeCountCarpetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarpetasWhereInput
  }


  /**
   * GruposCountOutputType without action
   */
  export type GruposCountOutputTypeCountBibliografiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BibliografiasWhereInput
  }


  /**
   * GruposCountOutputType without action
   */
  export type GruposCountOutputTypeCountGrupoConAccesoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrupoConAccesoWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Estudiantes
   */

  export type AggregateEstudiantes = {
    _count: EstudiantesCountAggregateOutputType | null
    _avg: EstudiantesAvgAggregateOutputType | null
    _sum: EstudiantesSumAggregateOutputType | null
    _min: EstudiantesMinAggregateOutputType | null
    _max: EstudiantesMaxAggregateOutputType | null
  }

  export type EstudiantesAvgAggregateOutputType = {
    num_sub_est: number | null
  }

  export type EstudiantesSumAggregateOutputType = {
    num_sub_est: number | null
  }

  export type EstudiantesMinAggregateOutputType = {
    pk_id_est: string | null
    txt_user_est: string | null
    txt_email_est: string | null
    txt_pass_est: string | null
    num_sub_est: number | null
  }

  export type EstudiantesMaxAggregateOutputType = {
    pk_id_est: string | null
    txt_user_est: string | null
    txt_email_est: string | null
    txt_pass_est: string | null
    num_sub_est: number | null
  }

  export type EstudiantesCountAggregateOutputType = {
    pk_id_est: number
    txt_user_est: number
    txt_email_est: number
    txt_pass_est: number
    num_sub_est: number
    _all: number
  }


  export type EstudiantesAvgAggregateInputType = {
    num_sub_est?: true
  }

  export type EstudiantesSumAggregateInputType = {
    num_sub_est?: true
  }

  export type EstudiantesMinAggregateInputType = {
    pk_id_est?: true
    txt_user_est?: true
    txt_email_est?: true
    txt_pass_est?: true
    num_sub_est?: true
  }

  export type EstudiantesMaxAggregateInputType = {
    pk_id_est?: true
    txt_user_est?: true
    txt_email_est?: true
    txt_pass_est?: true
    num_sub_est?: true
  }

  export type EstudiantesCountAggregateInputType = {
    pk_id_est?: true
    txt_user_est?: true
    txt_email_est?: true
    txt_pass_est?: true
    num_sub_est?: true
    _all?: true
  }

  export type EstudiantesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiantes to aggregate.
     */
    where?: EstudiantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudiantesOrderByWithRelationInput | EstudiantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstudiantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Estudiantes
    **/
    _count?: true | EstudiantesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstudiantesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstudiantesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstudiantesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstudiantesMaxAggregateInputType
  }

  export type GetEstudiantesAggregateType<T extends EstudiantesAggregateArgs> = {
        [P in keyof T & keyof AggregateEstudiantes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstudiantes[P]>
      : GetScalarType<T[P], AggregateEstudiantes[P]>
  }




  export type EstudiantesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstudiantesWhereInput
    orderBy?: EstudiantesOrderByWithAggregationInput | EstudiantesOrderByWithAggregationInput[]
    by: EstudiantesScalarFieldEnum[] | EstudiantesScalarFieldEnum
    having?: EstudiantesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstudiantesCountAggregateInputType | true
    _avg?: EstudiantesAvgAggregateInputType
    _sum?: EstudiantesSumAggregateInputType
    _min?: EstudiantesMinAggregateInputType
    _max?: EstudiantesMaxAggregateInputType
  }

  export type EstudiantesGroupByOutputType = {
    pk_id_est: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est: number
    _count: EstudiantesCountAggregateOutputType | null
    _avg: EstudiantesAvgAggregateOutputType | null
    _sum: EstudiantesSumAggregateOutputType | null
    _min: EstudiantesMinAggregateOutputType | null
    _max: EstudiantesMaxAggregateOutputType | null
  }

  type GetEstudiantesGroupByPayload<T extends EstudiantesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstudiantesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstudiantesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstudiantesGroupByOutputType[P]>
            : GetScalarType<T[P], EstudiantesGroupByOutputType[P]>
        }
      >
    >


  export type EstudiantesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_id_est?: boolean
    txt_user_est?: boolean
    txt_email_est?: boolean
    txt_pass_est?: boolean
    num_sub_est?: boolean
    Cambios?: boolean | Estudiantes$CambiosArgs<ExtArgs>
    Grupos?: boolean | Estudiantes$GruposArgs<ExtArgs>
    GrupoConAcceso?: boolean | Estudiantes$GrupoConAccesoArgs<ExtArgs>
    Carpetas?: boolean | Estudiantes$CarpetasArgs<ExtArgs>
    Bibliografias?: boolean | Estudiantes$BibliografiasArgs<ExtArgs>
    _count?: boolean | EstudiantesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["estudiantes"]>

  export type EstudiantesSelectScalar = {
    pk_id_est?: boolean
    txt_user_est?: boolean
    txt_email_est?: boolean
    txt_pass_est?: boolean
    num_sub_est?: boolean
  }

  export type EstudiantesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Cambios?: boolean | Estudiantes$CambiosArgs<ExtArgs>
    Grupos?: boolean | Estudiantes$GruposArgs<ExtArgs>
    GrupoConAcceso?: boolean | Estudiantes$GrupoConAccesoArgs<ExtArgs>
    Carpetas?: boolean | Estudiantes$CarpetasArgs<ExtArgs>
    Bibliografias?: boolean | Estudiantes$BibliografiasArgs<ExtArgs>
    _count?: boolean | EstudiantesCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EstudiantesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estudiantes"
    objects: {
      Cambios: Prisma.$CambiosPayload<ExtArgs>[]
      Grupos: Prisma.$GruposPayload<ExtArgs>[]
      GrupoConAcceso: Prisma.$GrupoConAccesoPayload<ExtArgs>[]
      Carpetas: Prisma.$CarpetasPayload<ExtArgs>[]
      Bibliografias: Prisma.$BibliografiasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_id_est: string
      txt_user_est: string
      txt_email_est: string
      txt_pass_est: string
      num_sub_est: number
    }, ExtArgs["result"]["estudiantes"]>
    composites: {}
  }


  type EstudiantesGetPayload<S extends boolean | null | undefined | EstudiantesDefaultArgs> = $Result.GetResult<Prisma.$EstudiantesPayload, S>

  type EstudiantesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EstudiantesFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: EstudiantesCountAggregateInputType | true
    }

  export interface EstudiantesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Estudiantes'], meta: { name: 'Estudiantes' } }
    /**
     * Find zero or one Estudiantes that matches the filter.
     * @param {EstudiantesFindUniqueArgs} args - Arguments to find a Estudiantes
     * @example
     * // Get one Estudiantes
     * const estudiantes = await prisma.estudiantes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EstudiantesFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EstudiantesFindUniqueArgs<ExtArgs>>
    ): Prisma__EstudiantesClient<$Result.GetResult<Prisma.$EstudiantesPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Estudiantes that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EstudiantesFindUniqueOrThrowArgs} args - Arguments to find a Estudiantes
     * @example
     * // Get one Estudiantes
     * const estudiantes = await prisma.estudiantes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EstudiantesFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EstudiantesFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EstudiantesClient<$Result.GetResult<Prisma.$EstudiantesPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Estudiantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudiantesFindFirstArgs} args - Arguments to find a Estudiantes
     * @example
     * // Get one Estudiantes
     * const estudiantes = await prisma.estudiantes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EstudiantesFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EstudiantesFindFirstArgs<ExtArgs>>
    ): Prisma__EstudiantesClient<$Result.GetResult<Prisma.$EstudiantesPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Estudiantes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudiantesFindFirstOrThrowArgs} args - Arguments to find a Estudiantes
     * @example
     * // Get one Estudiantes
     * const estudiantes = await prisma.estudiantes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EstudiantesFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EstudiantesFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EstudiantesClient<$Result.GetResult<Prisma.$EstudiantesPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Estudiantes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudiantesFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Estudiantes
     * const estudiantes = await prisma.estudiantes.findMany()
     * 
     * // Get first 10 Estudiantes
     * const estudiantes = await prisma.estudiantes.findMany({ take: 10 })
     * 
     * // Only select the `pk_id_est`
     * const estudiantesWithPk_id_estOnly = await prisma.estudiantes.findMany({ select: { pk_id_est: true } })
     * 
    **/
    findMany<T extends EstudiantesFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstudiantesFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstudiantesPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Estudiantes.
     * @param {EstudiantesCreateArgs} args - Arguments to create a Estudiantes.
     * @example
     * // Create one Estudiantes
     * const Estudiantes = await prisma.estudiantes.create({
     *   data: {
     *     // ... data to create a Estudiantes
     *   }
     * })
     * 
    **/
    create<T extends EstudiantesCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EstudiantesCreateArgs<ExtArgs>>
    ): Prisma__EstudiantesClient<$Result.GetResult<Prisma.$EstudiantesPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Estudiantes.
     *     @param {EstudiantesCreateManyArgs} args - Arguments to create many Estudiantes.
     *     @example
     *     // Create many Estudiantes
     *     const estudiantes = await prisma.estudiantes.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EstudiantesCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstudiantesCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Estudiantes.
     * @param {EstudiantesDeleteArgs} args - Arguments to delete one Estudiantes.
     * @example
     * // Delete one Estudiantes
     * const Estudiantes = await prisma.estudiantes.delete({
     *   where: {
     *     // ... filter to delete one Estudiantes
     *   }
     * })
     * 
    **/
    delete<T extends EstudiantesDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EstudiantesDeleteArgs<ExtArgs>>
    ): Prisma__EstudiantesClient<$Result.GetResult<Prisma.$EstudiantesPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Estudiantes.
     * @param {EstudiantesUpdateArgs} args - Arguments to update one Estudiantes.
     * @example
     * // Update one Estudiantes
     * const estudiantes = await prisma.estudiantes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EstudiantesUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EstudiantesUpdateArgs<ExtArgs>>
    ): Prisma__EstudiantesClient<$Result.GetResult<Prisma.$EstudiantesPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Estudiantes.
     * @param {EstudiantesDeleteManyArgs} args - Arguments to filter Estudiantes to delete.
     * @example
     * // Delete a few Estudiantes
     * const { count } = await prisma.estudiantes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EstudiantesDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EstudiantesDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudiantesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Estudiantes
     * const estudiantes = await prisma.estudiantes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EstudiantesUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EstudiantesUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Estudiantes.
     * @param {EstudiantesUpsertArgs} args - Arguments to update or create a Estudiantes.
     * @example
     * // Update or create a Estudiantes
     * const estudiantes = await prisma.estudiantes.upsert({
     *   create: {
     *     // ... data to create a Estudiantes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Estudiantes we want to update
     *   }
     * })
    **/
    upsert<T extends EstudiantesUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EstudiantesUpsertArgs<ExtArgs>>
    ): Prisma__EstudiantesClient<$Result.GetResult<Prisma.$EstudiantesPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudiantesCountArgs} args - Arguments to filter Estudiantes to count.
     * @example
     * // Count the number of Estudiantes
     * const count = await prisma.estudiantes.count({
     *   where: {
     *     // ... the filter for the Estudiantes we want to count
     *   }
     * })
    **/
    count<T extends EstudiantesCountArgs>(
      args?: Subset<T, EstudiantesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstudiantesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudiantesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstudiantesAggregateArgs>(args: Subset<T, EstudiantesAggregateArgs>): Prisma.PrismaPromise<GetEstudiantesAggregateType<T>>

    /**
     * Group by Estudiantes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstudiantesGroupByArgs} args - Group by arguments.
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
      T extends EstudiantesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstudiantesGroupByArgs['orderBy'] }
        : { orderBy?: EstudiantesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, EstudiantesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstudiantesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Estudiantes model
   */
  readonly fields: EstudiantesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Estudiantes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstudiantesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Cambios<T extends Estudiantes$CambiosArgs<ExtArgs> = {}>(args?: Subset<T, Estudiantes$CambiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CambiosPayload<ExtArgs>, T, 'findMany'> | Null>;

    Grupos<T extends Estudiantes$GruposArgs<ExtArgs> = {}>(args?: Subset<T, Estudiantes$GruposArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findMany'> | Null>;

    GrupoConAcceso<T extends Estudiantes$GrupoConAccesoArgs<ExtArgs> = {}>(args?: Subset<T, Estudiantes$GrupoConAccesoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoConAccesoPayload<ExtArgs>, T, 'findMany'> | Null>;

    Carpetas<T extends Estudiantes$CarpetasArgs<ExtArgs> = {}>(args?: Subset<T, Estudiantes$CarpetasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarpetasPayload<ExtArgs>, T, 'findMany'> | Null>;

    Bibliografias<T extends Estudiantes$BibliografiasArgs<ExtArgs> = {}>(args?: Subset<T, Estudiantes$BibliografiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BibliografiasPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Estudiantes model
   */ 
  interface EstudiantesFieldRefs {
    readonly pk_id_est: FieldRef<"Estudiantes", 'String'>
    readonly txt_user_est: FieldRef<"Estudiantes", 'String'>
    readonly txt_email_est: FieldRef<"Estudiantes", 'String'>
    readonly txt_pass_est: FieldRef<"Estudiantes", 'String'>
    readonly num_sub_est: FieldRef<"Estudiantes", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Estudiantes findUnique
   */
  export type EstudiantesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiantes
     */
    select?: EstudiantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstudiantesInclude<ExtArgs> | null
    /**
     * Filter, which Estudiantes to fetch.
     */
    where: EstudiantesWhereUniqueInput
  }


  /**
   * Estudiantes findUniqueOrThrow
   */
  export type EstudiantesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiantes
     */
    select?: EstudiantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstudiantesInclude<ExtArgs> | null
    /**
     * Filter, which Estudiantes to fetch.
     */
    where: EstudiantesWhereUniqueInput
  }


  /**
   * Estudiantes findFirst
   */
  export type EstudiantesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiantes
     */
    select?: EstudiantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstudiantesInclude<ExtArgs> | null
    /**
     * Filter, which Estudiantes to fetch.
     */
    where?: EstudiantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudiantesOrderByWithRelationInput | EstudiantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudiantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudiantesScalarFieldEnum | EstudiantesScalarFieldEnum[]
  }


  /**
   * Estudiantes findFirstOrThrow
   */
  export type EstudiantesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiantes
     */
    select?: EstudiantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstudiantesInclude<ExtArgs> | null
    /**
     * Filter, which Estudiantes to fetch.
     */
    where?: EstudiantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudiantesOrderByWithRelationInput | EstudiantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Estudiantes.
     */
    cursor?: EstudiantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Estudiantes.
     */
    distinct?: EstudiantesScalarFieldEnum | EstudiantesScalarFieldEnum[]
  }


  /**
   * Estudiantes findMany
   */
  export type EstudiantesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiantes
     */
    select?: EstudiantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstudiantesInclude<ExtArgs> | null
    /**
     * Filter, which Estudiantes to fetch.
     */
    where?: EstudiantesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Estudiantes to fetch.
     */
    orderBy?: EstudiantesOrderByWithRelationInput | EstudiantesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Estudiantes.
     */
    cursor?: EstudiantesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Estudiantes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Estudiantes.
     */
    skip?: number
    distinct?: EstudiantesScalarFieldEnum | EstudiantesScalarFieldEnum[]
  }


  /**
   * Estudiantes create
   */
  export type EstudiantesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiantes
     */
    select?: EstudiantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstudiantesInclude<ExtArgs> | null
    /**
     * The data needed to create a Estudiantes.
     */
    data: XOR<EstudiantesCreateInput, EstudiantesUncheckedCreateInput>
  }


  /**
   * Estudiantes createMany
   */
  export type EstudiantesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Estudiantes.
     */
    data: EstudiantesCreateManyInput | EstudiantesCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Estudiantes update
   */
  export type EstudiantesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiantes
     */
    select?: EstudiantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstudiantesInclude<ExtArgs> | null
    /**
     * The data needed to update a Estudiantes.
     */
    data: XOR<EstudiantesUpdateInput, EstudiantesUncheckedUpdateInput>
    /**
     * Choose, which Estudiantes to update.
     */
    where: EstudiantesWhereUniqueInput
  }


  /**
   * Estudiantes updateMany
   */
  export type EstudiantesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Estudiantes.
     */
    data: XOR<EstudiantesUpdateManyMutationInput, EstudiantesUncheckedUpdateManyInput>
    /**
     * Filter which Estudiantes to update
     */
    where?: EstudiantesWhereInput
  }


  /**
   * Estudiantes upsert
   */
  export type EstudiantesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiantes
     */
    select?: EstudiantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstudiantesInclude<ExtArgs> | null
    /**
     * The filter to search for the Estudiantes to update in case it exists.
     */
    where: EstudiantesWhereUniqueInput
    /**
     * In case the Estudiantes found by the `where` argument doesn't exist, create a new Estudiantes with this data.
     */
    create: XOR<EstudiantesCreateInput, EstudiantesUncheckedCreateInput>
    /**
     * In case the Estudiantes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstudiantesUpdateInput, EstudiantesUncheckedUpdateInput>
  }


  /**
   * Estudiantes delete
   */
  export type EstudiantesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiantes
     */
    select?: EstudiantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstudiantesInclude<ExtArgs> | null
    /**
     * Filter which Estudiantes to delete.
     */
    where: EstudiantesWhereUniqueInput
  }


  /**
   * Estudiantes deleteMany
   */
  export type EstudiantesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Estudiantes to delete
     */
    where?: EstudiantesWhereInput
  }


  /**
   * Estudiantes.Cambios
   */
  export type Estudiantes$CambiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cambios
     */
    select?: CambiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CambiosInclude<ExtArgs> | null
    where?: CambiosWhereInput
    orderBy?: CambiosOrderByWithRelationInput | CambiosOrderByWithRelationInput[]
    cursor?: CambiosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CambiosScalarFieldEnum | CambiosScalarFieldEnum[]
  }


  /**
   * Estudiantes.Grupos
   */
  export type Estudiantes$GruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    where?: GruposWhereInput
    orderBy?: GruposOrderByWithRelationInput | GruposOrderByWithRelationInput[]
    cursor?: GruposWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GruposScalarFieldEnum | GruposScalarFieldEnum[]
  }


  /**
   * Estudiantes.GrupoConAcceso
   */
  export type Estudiantes$GrupoConAccesoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoConAcceso
     */
    select?: GrupoConAccesoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoConAccesoInclude<ExtArgs> | null
    where?: GrupoConAccesoWhereInput
    orderBy?: GrupoConAccesoOrderByWithRelationInput | GrupoConAccesoOrderByWithRelationInput[]
    cursor?: GrupoConAccesoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrupoConAccesoScalarFieldEnum | GrupoConAccesoScalarFieldEnum[]
  }


  /**
   * Estudiantes.Carpetas
   */
  export type Estudiantes$CarpetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpetas
     */
    select?: CarpetasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarpetasInclude<ExtArgs> | null
    where?: CarpetasWhereInput
    orderBy?: CarpetasOrderByWithRelationInput | CarpetasOrderByWithRelationInput[]
    cursor?: CarpetasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarpetasScalarFieldEnum | CarpetasScalarFieldEnum[]
  }


  /**
   * Estudiantes.Bibliografias
   */
  export type Estudiantes$BibliografiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliografias
     */
    select?: BibliografiasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BibliografiasInclude<ExtArgs> | null
    where?: BibliografiasWhereInput
    orderBy?: BibliografiasOrderByWithRelationInput | BibliografiasOrderByWithRelationInput[]
    cursor?: BibliografiasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BibliografiasScalarFieldEnum | BibliografiasScalarFieldEnum[]
  }


  /**
   * Estudiantes without action
   */
  export type EstudiantesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiantes
     */
    select?: EstudiantesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EstudiantesInclude<ExtArgs> | null
  }



  /**
   * Model Bibliografias
   */

  export type AggregateBibliografias = {
    _count: BibliografiasCountAggregateOutputType | null
    _avg: BibliografiasAvgAggregateOutputType | null
    _sum: BibliografiasSumAggregateOutputType | null
    _min: BibliografiasMinAggregateOutputType | null
    _max: BibliografiasMaxAggregateOutputType | null
  }

  export type BibliografiasAvgAggregateOutputType = {
    pk_id_biblio: number | null
    num_tip_biblio: number | null
    num_fmt_biblio: number | null
    num_edic_biblio: number | null
    num_volm_biblio: number | null
    num_npag_biblio: number | null
    fk_id_grup: number | null
    fk_id_carp: number | null
  }

  export type BibliografiasSumAggregateOutputType = {
    pk_id_biblio: number | null
    num_tip_biblio: number | null
    num_fmt_biblio: number | null
    num_edic_biblio: number | null
    num_volm_biblio: number | null
    num_npag_biblio: number | null
    fk_id_grup: number | null
    fk_id_carp: number | null
  }

  export type BibliografiasMinAggregateOutputType = {
    pk_id_biblio: number | null
    txt_tit_biblio: string | null
    num_tip_biblio: number | null
    num_fmt_biblio: number | null
    txt_fecha_biblio: Date | null
    txt_aut_biblio: string | null
    txt_edit_biblio: string | null
    txt_dir_biblio: string | null
    txt_pag_biblio: string | null
    num_edic_biblio: number | null
    num_volm_biblio: number | null
    num_npag_biblio: number | null
    txt_ubic_biblio: string | null
    fk_id_grup: number | null
    fk_id_carp: number | null
    fk_id_est: string | null
  }

  export type BibliografiasMaxAggregateOutputType = {
    pk_id_biblio: number | null
    txt_tit_biblio: string | null
    num_tip_biblio: number | null
    num_fmt_biblio: number | null
    txt_fecha_biblio: Date | null
    txt_aut_biblio: string | null
    txt_edit_biblio: string | null
    txt_dir_biblio: string | null
    txt_pag_biblio: string | null
    num_edic_biblio: number | null
    num_volm_biblio: number | null
    num_npag_biblio: number | null
    txt_ubic_biblio: string | null
    fk_id_grup: number | null
    fk_id_carp: number | null
    fk_id_est: string | null
  }

  export type BibliografiasCountAggregateOutputType = {
    pk_id_biblio: number
    txt_tit_biblio: number
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: number
    txt_aut_biblio: number
    txt_edit_biblio: number
    txt_dir_biblio: number
    txt_pag_biblio: number
    num_edic_biblio: number
    num_volm_biblio: number
    num_npag_biblio: number
    txt_ubic_biblio: number
    fk_id_grup: number
    fk_id_carp: number
    fk_id_est: number
    _all: number
  }


  export type BibliografiasAvgAggregateInputType = {
    pk_id_biblio?: true
    num_tip_biblio?: true
    num_fmt_biblio?: true
    num_edic_biblio?: true
    num_volm_biblio?: true
    num_npag_biblio?: true
    fk_id_grup?: true
    fk_id_carp?: true
  }

  export type BibliografiasSumAggregateInputType = {
    pk_id_biblio?: true
    num_tip_biblio?: true
    num_fmt_biblio?: true
    num_edic_biblio?: true
    num_volm_biblio?: true
    num_npag_biblio?: true
    fk_id_grup?: true
    fk_id_carp?: true
  }

  export type BibliografiasMinAggregateInputType = {
    pk_id_biblio?: true
    txt_tit_biblio?: true
    num_tip_biblio?: true
    num_fmt_biblio?: true
    txt_fecha_biblio?: true
    txt_aut_biblio?: true
    txt_edit_biblio?: true
    txt_dir_biblio?: true
    txt_pag_biblio?: true
    num_edic_biblio?: true
    num_volm_biblio?: true
    num_npag_biblio?: true
    txt_ubic_biblio?: true
    fk_id_grup?: true
    fk_id_carp?: true
    fk_id_est?: true
  }

  export type BibliografiasMaxAggregateInputType = {
    pk_id_biblio?: true
    txt_tit_biblio?: true
    num_tip_biblio?: true
    num_fmt_biblio?: true
    txt_fecha_biblio?: true
    txt_aut_biblio?: true
    txt_edit_biblio?: true
    txt_dir_biblio?: true
    txt_pag_biblio?: true
    num_edic_biblio?: true
    num_volm_biblio?: true
    num_npag_biblio?: true
    txt_ubic_biblio?: true
    fk_id_grup?: true
    fk_id_carp?: true
    fk_id_est?: true
  }

  export type BibliografiasCountAggregateInputType = {
    pk_id_biblio?: true
    txt_tit_biblio?: true
    num_tip_biblio?: true
    num_fmt_biblio?: true
    txt_fecha_biblio?: true
    txt_aut_biblio?: true
    txt_edit_biblio?: true
    txt_dir_biblio?: true
    txt_pag_biblio?: true
    num_edic_biblio?: true
    num_volm_biblio?: true
    num_npag_biblio?: true
    txt_ubic_biblio?: true
    fk_id_grup?: true
    fk_id_carp?: true
    fk_id_est?: true
    _all?: true
  }

  export type BibliografiasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bibliografias to aggregate.
     */
    where?: BibliografiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bibliografias to fetch.
     */
    orderBy?: BibliografiasOrderByWithRelationInput | BibliografiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BibliografiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bibliografias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bibliografias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Bibliografias
    **/
    _count?: true | BibliografiasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BibliografiasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BibliografiasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BibliografiasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BibliografiasMaxAggregateInputType
  }

  export type GetBibliografiasAggregateType<T extends BibliografiasAggregateArgs> = {
        [P in keyof T & keyof AggregateBibliografias]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBibliografias[P]>
      : GetScalarType<T[P], AggregateBibliografias[P]>
  }




  export type BibliografiasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BibliografiasWhereInput
    orderBy?: BibliografiasOrderByWithAggregationInput | BibliografiasOrderByWithAggregationInput[]
    by: BibliografiasScalarFieldEnum[] | BibliografiasScalarFieldEnum
    having?: BibliografiasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BibliografiasCountAggregateInputType | true
    _avg?: BibliografiasAvgAggregateInputType
    _sum?: BibliografiasSumAggregateInputType
    _min?: BibliografiasMinAggregateInputType
    _max?: BibliografiasMaxAggregateInputType
  }

  export type BibliografiasGroupByOutputType = {
    pk_id_biblio: number
    txt_tit_biblio: string
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: Date
    txt_aut_biblio: string
    txt_edit_biblio: string | null
    txt_dir_biblio: string | null
    txt_pag_biblio: string | null
    num_edic_biblio: number | null
    num_volm_biblio: number | null
    num_npag_biblio: number | null
    txt_ubic_biblio: string | null
    fk_id_grup: number
    fk_id_carp: number
    fk_id_est: string
    _count: BibliografiasCountAggregateOutputType | null
    _avg: BibliografiasAvgAggregateOutputType | null
    _sum: BibliografiasSumAggregateOutputType | null
    _min: BibliografiasMinAggregateOutputType | null
    _max: BibliografiasMaxAggregateOutputType | null
  }

  type GetBibliografiasGroupByPayload<T extends BibliografiasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BibliografiasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BibliografiasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BibliografiasGroupByOutputType[P]>
            : GetScalarType<T[P], BibliografiasGroupByOutputType[P]>
        }
      >
    >


  export type BibliografiasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_id_biblio?: boolean
    txt_tit_biblio?: boolean
    num_tip_biblio?: boolean
    num_fmt_biblio?: boolean
    txt_fecha_biblio?: boolean
    txt_aut_biblio?: boolean
    txt_edit_biblio?: boolean
    txt_dir_biblio?: boolean
    txt_pag_biblio?: boolean
    num_edic_biblio?: boolean
    num_volm_biblio?: boolean
    num_npag_biblio?: boolean
    txt_ubic_biblio?: boolean
    fk_id_grup?: boolean
    fk_id_carp?: boolean
    fk_id_est?: boolean
    Grupo?: boolean | GruposDefaultArgs<ExtArgs>
    Carpeta?: boolean | CarpetasDefaultArgs<ExtArgs>
    Estudiante?: boolean | EstudiantesDefaultArgs<ExtArgs>
    Archivos?: boolean | Bibliografias$ArchivosArgs<ExtArgs>
    _count?: boolean | BibliografiasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["bibliografias"]>

  export type BibliografiasSelectScalar = {
    pk_id_biblio?: boolean
    txt_tit_biblio?: boolean
    num_tip_biblio?: boolean
    num_fmt_biblio?: boolean
    txt_fecha_biblio?: boolean
    txt_aut_biblio?: boolean
    txt_edit_biblio?: boolean
    txt_dir_biblio?: boolean
    txt_pag_biblio?: boolean
    num_edic_biblio?: boolean
    num_volm_biblio?: boolean
    num_npag_biblio?: boolean
    txt_ubic_biblio?: boolean
    fk_id_grup?: boolean
    fk_id_carp?: boolean
    fk_id_est?: boolean
  }

  export type BibliografiasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Grupo?: boolean | GruposDefaultArgs<ExtArgs>
    Carpeta?: boolean | CarpetasDefaultArgs<ExtArgs>
    Estudiante?: boolean | EstudiantesDefaultArgs<ExtArgs>
    Archivos?: boolean | Bibliografias$ArchivosArgs<ExtArgs>
    _count?: boolean | BibliografiasCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $BibliografiasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bibliografias"
    objects: {
      Grupo: Prisma.$GruposPayload<ExtArgs>
      Carpeta: Prisma.$CarpetasPayload<ExtArgs>
      Estudiante: Prisma.$EstudiantesPayload<ExtArgs>
      Archivos: Prisma.$ArchivosPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_id_biblio: number
      txt_tit_biblio: string
      num_tip_biblio: number
      num_fmt_biblio: number
      txt_fecha_biblio: Date
      txt_aut_biblio: string
      txt_edit_biblio: string | null
      txt_dir_biblio: string | null
      txt_pag_biblio: string | null
      num_edic_biblio: number | null
      num_volm_biblio: number | null
      num_npag_biblio: number | null
      txt_ubic_biblio: string | null
      fk_id_grup: number
      fk_id_carp: number
      fk_id_est: string
    }, ExtArgs["result"]["bibliografias"]>
    composites: {}
  }


  type BibliografiasGetPayload<S extends boolean | null | undefined | BibliografiasDefaultArgs> = $Result.GetResult<Prisma.$BibliografiasPayload, S>

  type BibliografiasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<BibliografiasFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: BibliografiasCountAggregateInputType | true
    }

  export interface BibliografiasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Bibliografias'], meta: { name: 'Bibliografias' } }
    /**
     * Find zero or one Bibliografias that matches the filter.
     * @param {BibliografiasFindUniqueArgs} args - Arguments to find a Bibliografias
     * @example
     * // Get one Bibliografias
     * const bibliografias = await prisma.bibliografias.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends BibliografiasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, BibliografiasFindUniqueArgs<ExtArgs>>
    ): Prisma__BibliografiasClient<$Result.GetResult<Prisma.$BibliografiasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Bibliografias that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {BibliografiasFindUniqueOrThrowArgs} args - Arguments to find a Bibliografias
     * @example
     * // Get one Bibliografias
     * const bibliografias = await prisma.bibliografias.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends BibliografiasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BibliografiasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__BibliografiasClient<$Result.GetResult<Prisma.$BibliografiasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Bibliografias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibliografiasFindFirstArgs} args - Arguments to find a Bibliografias
     * @example
     * // Get one Bibliografias
     * const bibliografias = await prisma.bibliografias.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends BibliografiasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, BibliografiasFindFirstArgs<ExtArgs>>
    ): Prisma__BibliografiasClient<$Result.GetResult<Prisma.$BibliografiasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Bibliografias that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibliografiasFindFirstOrThrowArgs} args - Arguments to find a Bibliografias
     * @example
     * // Get one Bibliografias
     * const bibliografias = await prisma.bibliografias.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends BibliografiasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, BibliografiasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__BibliografiasClient<$Result.GetResult<Prisma.$BibliografiasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Bibliografias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibliografiasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Bibliografias
     * const bibliografias = await prisma.bibliografias.findMany()
     * 
     * // Get first 10 Bibliografias
     * const bibliografias = await prisma.bibliografias.findMany({ take: 10 })
     * 
     * // Only select the `pk_id_biblio`
     * const bibliografiasWithPk_id_biblioOnly = await prisma.bibliografias.findMany({ select: { pk_id_biblio: true } })
     * 
    **/
    findMany<T extends BibliografiasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BibliografiasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BibliografiasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Bibliografias.
     * @param {BibliografiasCreateArgs} args - Arguments to create a Bibliografias.
     * @example
     * // Create one Bibliografias
     * const Bibliografias = await prisma.bibliografias.create({
     *   data: {
     *     // ... data to create a Bibliografias
     *   }
     * })
     * 
    **/
    create<T extends BibliografiasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, BibliografiasCreateArgs<ExtArgs>>
    ): Prisma__BibliografiasClient<$Result.GetResult<Prisma.$BibliografiasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Bibliografias.
     *     @param {BibliografiasCreateManyArgs} args - Arguments to create many Bibliografias.
     *     @example
     *     // Create many Bibliografias
     *     const bibliografias = await prisma.bibliografias.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends BibliografiasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BibliografiasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Bibliografias.
     * @param {BibliografiasDeleteArgs} args - Arguments to delete one Bibliografias.
     * @example
     * // Delete one Bibliografias
     * const Bibliografias = await prisma.bibliografias.delete({
     *   where: {
     *     // ... filter to delete one Bibliografias
     *   }
     * })
     * 
    **/
    delete<T extends BibliografiasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, BibliografiasDeleteArgs<ExtArgs>>
    ): Prisma__BibliografiasClient<$Result.GetResult<Prisma.$BibliografiasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Bibliografias.
     * @param {BibliografiasUpdateArgs} args - Arguments to update one Bibliografias.
     * @example
     * // Update one Bibliografias
     * const bibliografias = await prisma.bibliografias.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends BibliografiasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, BibliografiasUpdateArgs<ExtArgs>>
    ): Prisma__BibliografiasClient<$Result.GetResult<Prisma.$BibliografiasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Bibliografias.
     * @param {BibliografiasDeleteManyArgs} args - Arguments to filter Bibliografias to delete.
     * @example
     * // Delete a few Bibliografias
     * const { count } = await prisma.bibliografias.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends BibliografiasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, BibliografiasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Bibliografias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibliografiasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Bibliografias
     * const bibliografias = await prisma.bibliografias.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends BibliografiasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, BibliografiasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Bibliografias.
     * @param {BibliografiasUpsertArgs} args - Arguments to update or create a Bibliografias.
     * @example
     * // Update or create a Bibliografias
     * const bibliografias = await prisma.bibliografias.upsert({
     *   create: {
     *     // ... data to create a Bibliografias
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Bibliografias we want to update
     *   }
     * })
    **/
    upsert<T extends BibliografiasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, BibliografiasUpsertArgs<ExtArgs>>
    ): Prisma__BibliografiasClient<$Result.GetResult<Prisma.$BibliografiasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Bibliografias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibliografiasCountArgs} args - Arguments to filter Bibliografias to count.
     * @example
     * // Count the number of Bibliografias
     * const count = await prisma.bibliografias.count({
     *   where: {
     *     // ... the filter for the Bibliografias we want to count
     *   }
     * })
    **/
    count<T extends BibliografiasCountArgs>(
      args?: Subset<T, BibliografiasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BibliografiasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Bibliografias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibliografiasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BibliografiasAggregateArgs>(args: Subset<T, BibliografiasAggregateArgs>): Prisma.PrismaPromise<GetBibliografiasAggregateType<T>>

    /**
     * Group by Bibliografias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BibliografiasGroupByArgs} args - Group by arguments.
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
      T extends BibliografiasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BibliografiasGroupByArgs['orderBy'] }
        : { orderBy?: BibliografiasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, BibliografiasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBibliografiasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Bibliografias model
   */
  readonly fields: BibliografiasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Bibliografias.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BibliografiasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Grupo<T extends GruposDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GruposDefaultArgs<ExtArgs>>): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Carpeta<T extends CarpetasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarpetasDefaultArgs<ExtArgs>>): Prisma__CarpetasClient<$Result.GetResult<Prisma.$CarpetasPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Estudiante<T extends EstudiantesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudiantesDefaultArgs<ExtArgs>>): Prisma__EstudiantesClient<$Result.GetResult<Prisma.$EstudiantesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Archivos<T extends Bibliografias$ArchivosArgs<ExtArgs> = {}>(args?: Subset<T, Bibliografias$ArchivosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivosPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Bibliografias model
   */ 
  interface BibliografiasFieldRefs {
    readonly pk_id_biblio: FieldRef<"Bibliografias", 'Int'>
    readonly txt_tit_biblio: FieldRef<"Bibliografias", 'String'>
    readonly num_tip_biblio: FieldRef<"Bibliografias", 'Int'>
    readonly num_fmt_biblio: FieldRef<"Bibliografias", 'Int'>
    readonly txt_fecha_biblio: FieldRef<"Bibliografias", 'DateTime'>
    readonly txt_aut_biblio: FieldRef<"Bibliografias", 'String'>
    readonly txt_edit_biblio: FieldRef<"Bibliografias", 'String'>
    readonly txt_dir_biblio: FieldRef<"Bibliografias", 'String'>
    readonly txt_pag_biblio: FieldRef<"Bibliografias", 'String'>
    readonly num_edic_biblio: FieldRef<"Bibliografias", 'Int'>
    readonly num_volm_biblio: FieldRef<"Bibliografias", 'Int'>
    readonly num_npag_biblio: FieldRef<"Bibliografias", 'Int'>
    readonly txt_ubic_biblio: FieldRef<"Bibliografias", 'String'>
    readonly fk_id_grup: FieldRef<"Bibliografias", 'Int'>
    readonly fk_id_carp: FieldRef<"Bibliografias", 'Int'>
    readonly fk_id_est: FieldRef<"Bibliografias", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Bibliografias findUnique
   */
  export type BibliografiasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliografias
     */
    select?: BibliografiasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BibliografiasInclude<ExtArgs> | null
    /**
     * Filter, which Bibliografias to fetch.
     */
    where: BibliografiasWhereUniqueInput
  }


  /**
   * Bibliografias findUniqueOrThrow
   */
  export type BibliografiasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliografias
     */
    select?: BibliografiasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BibliografiasInclude<ExtArgs> | null
    /**
     * Filter, which Bibliografias to fetch.
     */
    where: BibliografiasWhereUniqueInput
  }


  /**
   * Bibliografias findFirst
   */
  export type BibliografiasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliografias
     */
    select?: BibliografiasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BibliografiasInclude<ExtArgs> | null
    /**
     * Filter, which Bibliografias to fetch.
     */
    where?: BibliografiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bibliografias to fetch.
     */
    orderBy?: BibliografiasOrderByWithRelationInput | BibliografiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bibliografias.
     */
    cursor?: BibliografiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bibliografias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bibliografias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bibliografias.
     */
    distinct?: BibliografiasScalarFieldEnum | BibliografiasScalarFieldEnum[]
  }


  /**
   * Bibliografias findFirstOrThrow
   */
  export type BibliografiasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliografias
     */
    select?: BibliografiasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BibliografiasInclude<ExtArgs> | null
    /**
     * Filter, which Bibliografias to fetch.
     */
    where?: BibliografiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bibliografias to fetch.
     */
    orderBy?: BibliografiasOrderByWithRelationInput | BibliografiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Bibliografias.
     */
    cursor?: BibliografiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bibliografias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bibliografias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Bibliografias.
     */
    distinct?: BibliografiasScalarFieldEnum | BibliografiasScalarFieldEnum[]
  }


  /**
   * Bibliografias findMany
   */
  export type BibliografiasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliografias
     */
    select?: BibliografiasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BibliografiasInclude<ExtArgs> | null
    /**
     * Filter, which Bibliografias to fetch.
     */
    where?: BibliografiasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Bibliografias to fetch.
     */
    orderBy?: BibliografiasOrderByWithRelationInput | BibliografiasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Bibliografias.
     */
    cursor?: BibliografiasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Bibliografias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Bibliografias.
     */
    skip?: number
    distinct?: BibliografiasScalarFieldEnum | BibliografiasScalarFieldEnum[]
  }


  /**
   * Bibliografias create
   */
  export type BibliografiasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliografias
     */
    select?: BibliografiasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BibliografiasInclude<ExtArgs> | null
    /**
     * The data needed to create a Bibliografias.
     */
    data: XOR<BibliografiasCreateInput, BibliografiasUncheckedCreateInput>
  }


  /**
   * Bibliografias createMany
   */
  export type BibliografiasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Bibliografias.
     */
    data: BibliografiasCreateManyInput | BibliografiasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Bibliografias update
   */
  export type BibliografiasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliografias
     */
    select?: BibliografiasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BibliografiasInclude<ExtArgs> | null
    /**
     * The data needed to update a Bibliografias.
     */
    data: XOR<BibliografiasUpdateInput, BibliografiasUncheckedUpdateInput>
    /**
     * Choose, which Bibliografias to update.
     */
    where: BibliografiasWhereUniqueInput
  }


  /**
   * Bibliografias updateMany
   */
  export type BibliografiasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Bibliografias.
     */
    data: XOR<BibliografiasUpdateManyMutationInput, BibliografiasUncheckedUpdateManyInput>
    /**
     * Filter which Bibliografias to update
     */
    where?: BibliografiasWhereInput
  }


  /**
   * Bibliografias upsert
   */
  export type BibliografiasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliografias
     */
    select?: BibliografiasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BibliografiasInclude<ExtArgs> | null
    /**
     * The filter to search for the Bibliografias to update in case it exists.
     */
    where: BibliografiasWhereUniqueInput
    /**
     * In case the Bibliografias found by the `where` argument doesn't exist, create a new Bibliografias with this data.
     */
    create: XOR<BibliografiasCreateInput, BibliografiasUncheckedCreateInput>
    /**
     * In case the Bibliografias was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BibliografiasUpdateInput, BibliografiasUncheckedUpdateInput>
  }


  /**
   * Bibliografias delete
   */
  export type BibliografiasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliografias
     */
    select?: BibliografiasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BibliografiasInclude<ExtArgs> | null
    /**
     * Filter which Bibliografias to delete.
     */
    where: BibliografiasWhereUniqueInput
  }


  /**
   * Bibliografias deleteMany
   */
  export type BibliografiasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Bibliografias to delete
     */
    where?: BibliografiasWhereInput
  }


  /**
   * Bibliografias.Archivos
   */
  export type Bibliografias$ArchivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivos
     */
    select?: ArchivosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArchivosInclude<ExtArgs> | null
    where?: ArchivosWhereInput
    orderBy?: ArchivosOrderByWithRelationInput | ArchivosOrderByWithRelationInput[]
    cursor?: ArchivosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArchivosScalarFieldEnum | ArchivosScalarFieldEnum[]
  }


  /**
   * Bibliografias without action
   */
  export type BibliografiasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliografias
     */
    select?: BibliografiasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BibliografiasInclude<ExtArgs> | null
  }



  /**
   * Model Archivos
   */

  export type AggregateArchivos = {
    _count: ArchivosCountAggregateOutputType | null
    _avg: ArchivosAvgAggregateOutputType | null
    _sum: ArchivosSumAggregateOutputType | null
    _min: ArchivosMinAggregateOutputType | null
    _max: ArchivosMaxAggregateOutputType | null
  }

  export type ArchivosAvgAggregateOutputType = {
    pk_id_arch: number | null
    fk_id_biblio: number | null
  }

  export type ArchivosSumAggregateOutputType = {
    pk_id_arch: number | null
    fk_id_biblio: number | null
  }

  export type ArchivosMinAggregateOutputType = {
    pk_id_arch: number | null
    txt_dir_arch: string | null
    fk_id_biblio: number | null
  }

  export type ArchivosMaxAggregateOutputType = {
    pk_id_arch: number | null
    txt_dir_arch: string | null
    fk_id_biblio: number | null
  }

  export type ArchivosCountAggregateOutputType = {
    pk_id_arch: number
    txt_dir_arch: number
    fk_id_biblio: number
    _all: number
  }


  export type ArchivosAvgAggregateInputType = {
    pk_id_arch?: true
    fk_id_biblio?: true
  }

  export type ArchivosSumAggregateInputType = {
    pk_id_arch?: true
    fk_id_biblio?: true
  }

  export type ArchivosMinAggregateInputType = {
    pk_id_arch?: true
    txt_dir_arch?: true
    fk_id_biblio?: true
  }

  export type ArchivosMaxAggregateInputType = {
    pk_id_arch?: true
    txt_dir_arch?: true
    fk_id_biblio?: true
  }

  export type ArchivosCountAggregateInputType = {
    pk_id_arch?: true
    txt_dir_arch?: true
    fk_id_biblio?: true
    _all?: true
  }

  export type ArchivosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Archivos to aggregate.
     */
    where?: ArchivosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archivos to fetch.
     */
    orderBy?: ArchivosOrderByWithRelationInput | ArchivosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArchivosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Archivos
    **/
    _count?: true | ArchivosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArchivosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArchivosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArchivosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArchivosMaxAggregateInputType
  }

  export type GetArchivosAggregateType<T extends ArchivosAggregateArgs> = {
        [P in keyof T & keyof AggregateArchivos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArchivos[P]>
      : GetScalarType<T[P], AggregateArchivos[P]>
  }




  export type ArchivosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArchivosWhereInput
    orderBy?: ArchivosOrderByWithAggregationInput | ArchivosOrderByWithAggregationInput[]
    by: ArchivosScalarFieldEnum[] | ArchivosScalarFieldEnum
    having?: ArchivosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArchivosCountAggregateInputType | true
    _avg?: ArchivosAvgAggregateInputType
    _sum?: ArchivosSumAggregateInputType
    _min?: ArchivosMinAggregateInputType
    _max?: ArchivosMaxAggregateInputType
  }

  export type ArchivosGroupByOutputType = {
    pk_id_arch: number
    txt_dir_arch: string
    fk_id_biblio: number
    _count: ArchivosCountAggregateOutputType | null
    _avg: ArchivosAvgAggregateOutputType | null
    _sum: ArchivosSumAggregateOutputType | null
    _min: ArchivosMinAggregateOutputType | null
    _max: ArchivosMaxAggregateOutputType | null
  }

  type GetArchivosGroupByPayload<T extends ArchivosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArchivosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArchivosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArchivosGroupByOutputType[P]>
            : GetScalarType<T[P], ArchivosGroupByOutputType[P]>
        }
      >
    >


  export type ArchivosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_id_arch?: boolean
    txt_dir_arch?: boolean
    fk_id_biblio?: boolean
    Bibliografias?: boolean | BibliografiasDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["archivos"]>

  export type ArchivosSelectScalar = {
    pk_id_arch?: boolean
    txt_dir_arch?: boolean
    fk_id_biblio?: boolean
  }

  export type ArchivosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Bibliografias?: boolean | BibliografiasDefaultArgs<ExtArgs>
  }


  export type $ArchivosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Archivos"
    objects: {
      Bibliografias: Prisma.$BibliografiasPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_id_arch: number
      txt_dir_arch: string
      fk_id_biblio: number
    }, ExtArgs["result"]["archivos"]>
    composites: {}
  }


  type ArchivosGetPayload<S extends boolean | null | undefined | ArchivosDefaultArgs> = $Result.GetResult<Prisma.$ArchivosPayload, S>

  type ArchivosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArchivosFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ArchivosCountAggregateInputType | true
    }

  export interface ArchivosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Archivos'], meta: { name: 'Archivos' } }
    /**
     * Find zero or one Archivos that matches the filter.
     * @param {ArchivosFindUniqueArgs} args - Arguments to find a Archivos
     * @example
     * // Get one Archivos
     * const archivos = await prisma.archivos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArchivosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArchivosFindUniqueArgs<ExtArgs>>
    ): Prisma__ArchivosClient<$Result.GetResult<Prisma.$ArchivosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Archivos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArchivosFindUniqueOrThrowArgs} args - Arguments to find a Archivos
     * @example
     * // Get one Archivos
     * const archivos = await prisma.archivos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArchivosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArchivosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArchivosClient<$Result.GetResult<Prisma.$ArchivosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Archivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivosFindFirstArgs} args - Arguments to find a Archivos
     * @example
     * // Get one Archivos
     * const archivos = await prisma.archivos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArchivosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArchivosFindFirstArgs<ExtArgs>>
    ): Prisma__ArchivosClient<$Result.GetResult<Prisma.$ArchivosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Archivos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivosFindFirstOrThrowArgs} args - Arguments to find a Archivos
     * @example
     * // Get one Archivos
     * const archivos = await prisma.archivos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArchivosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArchivosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArchivosClient<$Result.GetResult<Prisma.$ArchivosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Archivos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Archivos
     * const archivos = await prisma.archivos.findMany()
     * 
     * // Get first 10 Archivos
     * const archivos = await prisma.archivos.findMany({ take: 10 })
     * 
     * // Only select the `pk_id_arch`
     * const archivosWithPk_id_archOnly = await prisma.archivos.findMany({ select: { pk_id_arch: true } })
     * 
    **/
    findMany<T extends ArchivosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArchivosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArchivosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Archivos.
     * @param {ArchivosCreateArgs} args - Arguments to create a Archivos.
     * @example
     * // Create one Archivos
     * const Archivos = await prisma.archivos.create({
     *   data: {
     *     // ... data to create a Archivos
     *   }
     * })
     * 
    **/
    create<T extends ArchivosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArchivosCreateArgs<ExtArgs>>
    ): Prisma__ArchivosClient<$Result.GetResult<Prisma.$ArchivosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Archivos.
     *     @param {ArchivosCreateManyArgs} args - Arguments to create many Archivos.
     *     @example
     *     // Create many Archivos
     *     const archivos = await prisma.archivos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArchivosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArchivosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Archivos.
     * @param {ArchivosDeleteArgs} args - Arguments to delete one Archivos.
     * @example
     * // Delete one Archivos
     * const Archivos = await prisma.archivos.delete({
     *   where: {
     *     // ... filter to delete one Archivos
     *   }
     * })
     * 
    **/
    delete<T extends ArchivosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArchivosDeleteArgs<ExtArgs>>
    ): Prisma__ArchivosClient<$Result.GetResult<Prisma.$ArchivosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Archivos.
     * @param {ArchivosUpdateArgs} args - Arguments to update one Archivos.
     * @example
     * // Update one Archivos
     * const archivos = await prisma.archivos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArchivosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArchivosUpdateArgs<ExtArgs>>
    ): Prisma__ArchivosClient<$Result.GetResult<Prisma.$ArchivosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Archivos.
     * @param {ArchivosDeleteManyArgs} args - Arguments to filter Archivos to delete.
     * @example
     * // Delete a few Archivos
     * const { count } = await prisma.archivos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArchivosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArchivosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Archivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Archivos
     * const archivos = await prisma.archivos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArchivosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArchivosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Archivos.
     * @param {ArchivosUpsertArgs} args - Arguments to update or create a Archivos.
     * @example
     * // Update or create a Archivos
     * const archivos = await prisma.archivos.upsert({
     *   create: {
     *     // ... data to create a Archivos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Archivos we want to update
     *   }
     * })
    **/
    upsert<T extends ArchivosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArchivosUpsertArgs<ExtArgs>>
    ): Prisma__ArchivosClient<$Result.GetResult<Prisma.$ArchivosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Archivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivosCountArgs} args - Arguments to filter Archivos to count.
     * @example
     * // Count the number of Archivos
     * const count = await prisma.archivos.count({
     *   where: {
     *     // ... the filter for the Archivos we want to count
     *   }
     * })
    **/
    count<T extends ArchivosCountArgs>(
      args?: Subset<T, ArchivosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArchivosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Archivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArchivosAggregateArgs>(args: Subset<T, ArchivosAggregateArgs>): Prisma.PrismaPromise<GetArchivosAggregateType<T>>

    /**
     * Group by Archivos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArchivosGroupByArgs} args - Group by arguments.
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
      T extends ArchivosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArchivosGroupByArgs['orderBy'] }
        : { orderBy?: ArchivosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ArchivosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArchivosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Archivos model
   */
  readonly fields: ArchivosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Archivos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArchivosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Bibliografias<T extends BibliografiasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BibliografiasDefaultArgs<ExtArgs>>): Prisma__BibliografiasClient<$Result.GetResult<Prisma.$BibliografiasPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Archivos model
   */ 
  interface ArchivosFieldRefs {
    readonly pk_id_arch: FieldRef<"Archivos", 'Int'>
    readonly txt_dir_arch: FieldRef<"Archivos", 'String'>
    readonly fk_id_biblio: FieldRef<"Archivos", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Archivos findUnique
   */
  export type ArchivosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivos
     */
    select?: ArchivosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArchivosInclude<ExtArgs> | null
    /**
     * Filter, which Archivos to fetch.
     */
    where: ArchivosWhereUniqueInput
  }


  /**
   * Archivos findUniqueOrThrow
   */
  export type ArchivosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivos
     */
    select?: ArchivosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArchivosInclude<ExtArgs> | null
    /**
     * Filter, which Archivos to fetch.
     */
    where: ArchivosWhereUniqueInput
  }


  /**
   * Archivos findFirst
   */
  export type ArchivosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivos
     */
    select?: ArchivosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArchivosInclude<ExtArgs> | null
    /**
     * Filter, which Archivos to fetch.
     */
    where?: ArchivosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archivos to fetch.
     */
    orderBy?: ArchivosOrderByWithRelationInput | ArchivosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Archivos.
     */
    cursor?: ArchivosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Archivos.
     */
    distinct?: ArchivosScalarFieldEnum | ArchivosScalarFieldEnum[]
  }


  /**
   * Archivos findFirstOrThrow
   */
  export type ArchivosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivos
     */
    select?: ArchivosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArchivosInclude<ExtArgs> | null
    /**
     * Filter, which Archivos to fetch.
     */
    where?: ArchivosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archivos to fetch.
     */
    orderBy?: ArchivosOrderByWithRelationInput | ArchivosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Archivos.
     */
    cursor?: ArchivosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archivos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Archivos.
     */
    distinct?: ArchivosScalarFieldEnum | ArchivosScalarFieldEnum[]
  }


  /**
   * Archivos findMany
   */
  export type ArchivosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivos
     */
    select?: ArchivosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArchivosInclude<ExtArgs> | null
    /**
     * Filter, which Archivos to fetch.
     */
    where?: ArchivosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Archivos to fetch.
     */
    orderBy?: ArchivosOrderByWithRelationInput | ArchivosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Archivos.
     */
    cursor?: ArchivosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Archivos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Archivos.
     */
    skip?: number
    distinct?: ArchivosScalarFieldEnum | ArchivosScalarFieldEnum[]
  }


  /**
   * Archivos create
   */
  export type ArchivosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivos
     */
    select?: ArchivosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArchivosInclude<ExtArgs> | null
    /**
     * The data needed to create a Archivos.
     */
    data: XOR<ArchivosCreateInput, ArchivosUncheckedCreateInput>
  }


  /**
   * Archivos createMany
   */
  export type ArchivosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Archivos.
     */
    data: ArchivosCreateManyInput | ArchivosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Archivos update
   */
  export type ArchivosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivos
     */
    select?: ArchivosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArchivosInclude<ExtArgs> | null
    /**
     * The data needed to update a Archivos.
     */
    data: XOR<ArchivosUpdateInput, ArchivosUncheckedUpdateInput>
    /**
     * Choose, which Archivos to update.
     */
    where: ArchivosWhereUniqueInput
  }


  /**
   * Archivos updateMany
   */
  export type ArchivosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Archivos.
     */
    data: XOR<ArchivosUpdateManyMutationInput, ArchivosUncheckedUpdateManyInput>
    /**
     * Filter which Archivos to update
     */
    where?: ArchivosWhereInput
  }


  /**
   * Archivos upsert
   */
  export type ArchivosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivos
     */
    select?: ArchivosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArchivosInclude<ExtArgs> | null
    /**
     * The filter to search for the Archivos to update in case it exists.
     */
    where: ArchivosWhereUniqueInput
    /**
     * In case the Archivos found by the `where` argument doesn't exist, create a new Archivos with this data.
     */
    create: XOR<ArchivosCreateInput, ArchivosUncheckedCreateInput>
    /**
     * In case the Archivos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArchivosUpdateInput, ArchivosUncheckedUpdateInput>
  }


  /**
   * Archivos delete
   */
  export type ArchivosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivos
     */
    select?: ArchivosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArchivosInclude<ExtArgs> | null
    /**
     * Filter which Archivos to delete.
     */
    where: ArchivosWhereUniqueInput
  }


  /**
   * Archivos deleteMany
   */
  export type ArchivosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Archivos to delete
     */
    where?: ArchivosWhereInput
  }


  /**
   * Archivos without action
   */
  export type ArchivosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Archivos
     */
    select?: ArchivosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArchivosInclude<ExtArgs> | null
  }



  /**
   * Model Carpetas
   */

  export type AggregateCarpetas = {
    _count: CarpetasCountAggregateOutputType | null
    _avg: CarpetasAvgAggregateOutputType | null
    _sum: CarpetasSumAggregateOutputType | null
    _min: CarpetasMinAggregateOutputType | null
    _max: CarpetasMaxAggregateOutputType | null
  }

  export type CarpetasAvgAggregateOutputType = {
    pk_id_carp: number | null
    fk_id_grup: number | null
  }

  export type CarpetasSumAggregateOutputType = {
    pk_id_carp: number | null
    fk_id_grup: number | null
  }

  export type CarpetasMinAggregateOutputType = {
    pk_id_carp: number | null
    txt_nom_carp: string | null
    fk_id_grup: number | null
    fk_id_est: string | null
  }

  export type CarpetasMaxAggregateOutputType = {
    pk_id_carp: number | null
    txt_nom_carp: string | null
    fk_id_grup: number | null
    fk_id_est: string | null
  }

  export type CarpetasCountAggregateOutputType = {
    pk_id_carp: number
    txt_nom_carp: number
    fk_id_grup: number
    fk_id_est: number
    _all: number
  }


  export type CarpetasAvgAggregateInputType = {
    pk_id_carp?: true
    fk_id_grup?: true
  }

  export type CarpetasSumAggregateInputType = {
    pk_id_carp?: true
    fk_id_grup?: true
  }

  export type CarpetasMinAggregateInputType = {
    pk_id_carp?: true
    txt_nom_carp?: true
    fk_id_grup?: true
    fk_id_est?: true
  }

  export type CarpetasMaxAggregateInputType = {
    pk_id_carp?: true
    txt_nom_carp?: true
    fk_id_grup?: true
    fk_id_est?: true
  }

  export type CarpetasCountAggregateInputType = {
    pk_id_carp?: true
    txt_nom_carp?: true
    fk_id_grup?: true
    fk_id_est?: true
    _all?: true
  }

  export type CarpetasAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carpetas to aggregate.
     */
    where?: CarpetasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carpetas to fetch.
     */
    orderBy?: CarpetasOrderByWithRelationInput | CarpetasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarpetasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carpetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carpetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carpetas
    **/
    _count?: true | CarpetasCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarpetasAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarpetasSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarpetasMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarpetasMaxAggregateInputType
  }

  export type GetCarpetasAggregateType<T extends CarpetasAggregateArgs> = {
        [P in keyof T & keyof AggregateCarpetas]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarpetas[P]>
      : GetScalarType<T[P], AggregateCarpetas[P]>
  }




  export type CarpetasGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarpetasWhereInput
    orderBy?: CarpetasOrderByWithAggregationInput | CarpetasOrderByWithAggregationInput[]
    by: CarpetasScalarFieldEnum[] | CarpetasScalarFieldEnum
    having?: CarpetasScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarpetasCountAggregateInputType | true
    _avg?: CarpetasAvgAggregateInputType
    _sum?: CarpetasSumAggregateInputType
    _min?: CarpetasMinAggregateInputType
    _max?: CarpetasMaxAggregateInputType
  }

  export type CarpetasGroupByOutputType = {
    pk_id_carp: number
    txt_nom_carp: string
    fk_id_grup: number
    fk_id_est: string
    _count: CarpetasCountAggregateOutputType | null
    _avg: CarpetasAvgAggregateOutputType | null
    _sum: CarpetasSumAggregateOutputType | null
    _min: CarpetasMinAggregateOutputType | null
    _max: CarpetasMaxAggregateOutputType | null
  }

  type GetCarpetasGroupByPayload<T extends CarpetasGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarpetasGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarpetasGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarpetasGroupByOutputType[P]>
            : GetScalarType<T[P], CarpetasGroupByOutputType[P]>
        }
      >
    >


  export type CarpetasSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_id_carp?: boolean
    txt_nom_carp?: boolean
    fk_id_grup?: boolean
    fk_id_est?: boolean
    Grupo?: boolean | GruposDefaultArgs<ExtArgs>
    Estudiante?: boolean | EstudiantesDefaultArgs<ExtArgs>
    Cambios?: boolean | Carpetas$CambiosArgs<ExtArgs>
    Bibliografias?: boolean | Carpetas$BibliografiasArgs<ExtArgs>
    _count?: boolean | CarpetasCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carpetas"]>

  export type CarpetasSelectScalar = {
    pk_id_carp?: boolean
    txt_nom_carp?: boolean
    fk_id_grup?: boolean
    fk_id_est?: boolean
  }

  export type CarpetasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Grupo?: boolean | GruposDefaultArgs<ExtArgs>
    Estudiante?: boolean | EstudiantesDefaultArgs<ExtArgs>
    Cambios?: boolean | Carpetas$CambiosArgs<ExtArgs>
    Bibliografias?: boolean | Carpetas$BibliografiasArgs<ExtArgs>
    _count?: boolean | CarpetasCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CarpetasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carpetas"
    objects: {
      Grupo: Prisma.$GruposPayload<ExtArgs>
      Estudiante: Prisma.$EstudiantesPayload<ExtArgs>
      Cambios: Prisma.$CambiosPayload<ExtArgs>[]
      Bibliografias: Prisma.$BibliografiasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_id_carp: number
      txt_nom_carp: string
      fk_id_grup: number
      fk_id_est: string
    }, ExtArgs["result"]["carpetas"]>
    composites: {}
  }


  type CarpetasGetPayload<S extends boolean | null | undefined | CarpetasDefaultArgs> = $Result.GetResult<Prisma.$CarpetasPayload, S>

  type CarpetasCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CarpetasFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CarpetasCountAggregateInputType | true
    }

  export interface CarpetasDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carpetas'], meta: { name: 'Carpetas' } }
    /**
     * Find zero or one Carpetas that matches the filter.
     * @param {CarpetasFindUniqueArgs} args - Arguments to find a Carpetas
     * @example
     * // Get one Carpetas
     * const carpetas = await prisma.carpetas.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CarpetasFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CarpetasFindUniqueArgs<ExtArgs>>
    ): Prisma__CarpetasClient<$Result.GetResult<Prisma.$CarpetasPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Carpetas that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CarpetasFindUniqueOrThrowArgs} args - Arguments to find a Carpetas
     * @example
     * // Get one Carpetas
     * const carpetas = await prisma.carpetas.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CarpetasFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarpetasFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CarpetasClient<$Result.GetResult<Prisma.$CarpetasPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Carpetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarpetasFindFirstArgs} args - Arguments to find a Carpetas
     * @example
     * // Get one Carpetas
     * const carpetas = await prisma.carpetas.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CarpetasFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CarpetasFindFirstArgs<ExtArgs>>
    ): Prisma__CarpetasClient<$Result.GetResult<Prisma.$CarpetasPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Carpetas that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarpetasFindFirstOrThrowArgs} args - Arguments to find a Carpetas
     * @example
     * // Get one Carpetas
     * const carpetas = await prisma.carpetas.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CarpetasFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CarpetasFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CarpetasClient<$Result.GetResult<Prisma.$CarpetasPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Carpetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarpetasFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carpetas
     * const carpetas = await prisma.carpetas.findMany()
     * 
     * // Get first 10 Carpetas
     * const carpetas = await prisma.carpetas.findMany({ take: 10 })
     * 
     * // Only select the `pk_id_carp`
     * const carpetasWithPk_id_carpOnly = await prisma.carpetas.findMany({ select: { pk_id_carp: true } })
     * 
    **/
    findMany<T extends CarpetasFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarpetasFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarpetasPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Carpetas.
     * @param {CarpetasCreateArgs} args - Arguments to create a Carpetas.
     * @example
     * // Create one Carpetas
     * const Carpetas = await prisma.carpetas.create({
     *   data: {
     *     // ... data to create a Carpetas
     *   }
     * })
     * 
    **/
    create<T extends CarpetasCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CarpetasCreateArgs<ExtArgs>>
    ): Prisma__CarpetasClient<$Result.GetResult<Prisma.$CarpetasPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Carpetas.
     *     @param {CarpetasCreateManyArgs} args - Arguments to create many Carpetas.
     *     @example
     *     // Create many Carpetas
     *     const carpetas = await prisma.carpetas.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CarpetasCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarpetasCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Carpetas.
     * @param {CarpetasDeleteArgs} args - Arguments to delete one Carpetas.
     * @example
     * // Delete one Carpetas
     * const Carpetas = await prisma.carpetas.delete({
     *   where: {
     *     // ... filter to delete one Carpetas
     *   }
     * })
     * 
    **/
    delete<T extends CarpetasDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CarpetasDeleteArgs<ExtArgs>>
    ): Prisma__CarpetasClient<$Result.GetResult<Prisma.$CarpetasPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Carpetas.
     * @param {CarpetasUpdateArgs} args - Arguments to update one Carpetas.
     * @example
     * // Update one Carpetas
     * const carpetas = await prisma.carpetas.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CarpetasUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CarpetasUpdateArgs<ExtArgs>>
    ): Prisma__CarpetasClient<$Result.GetResult<Prisma.$CarpetasPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Carpetas.
     * @param {CarpetasDeleteManyArgs} args - Arguments to filter Carpetas to delete.
     * @example
     * // Delete a few Carpetas
     * const { count } = await prisma.carpetas.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CarpetasDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CarpetasDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carpetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarpetasUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carpetas
     * const carpetas = await prisma.carpetas.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CarpetasUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CarpetasUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Carpetas.
     * @param {CarpetasUpsertArgs} args - Arguments to update or create a Carpetas.
     * @example
     * // Update or create a Carpetas
     * const carpetas = await prisma.carpetas.upsert({
     *   create: {
     *     // ... data to create a Carpetas
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carpetas we want to update
     *   }
     * })
    **/
    upsert<T extends CarpetasUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CarpetasUpsertArgs<ExtArgs>>
    ): Prisma__CarpetasClient<$Result.GetResult<Prisma.$CarpetasPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Carpetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarpetasCountArgs} args - Arguments to filter Carpetas to count.
     * @example
     * // Count the number of Carpetas
     * const count = await prisma.carpetas.count({
     *   where: {
     *     // ... the filter for the Carpetas we want to count
     *   }
     * })
    **/
    count<T extends CarpetasCountArgs>(
      args?: Subset<T, CarpetasCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarpetasCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carpetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarpetasAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarpetasAggregateArgs>(args: Subset<T, CarpetasAggregateArgs>): Prisma.PrismaPromise<GetCarpetasAggregateType<T>>

    /**
     * Group by Carpetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarpetasGroupByArgs} args - Group by arguments.
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
      T extends CarpetasGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarpetasGroupByArgs['orderBy'] }
        : { orderBy?: CarpetasGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CarpetasGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarpetasGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carpetas model
   */
  readonly fields: CarpetasFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carpetas.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarpetasClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Grupo<T extends GruposDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GruposDefaultArgs<ExtArgs>>): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Estudiante<T extends EstudiantesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudiantesDefaultArgs<ExtArgs>>): Prisma__EstudiantesClient<$Result.GetResult<Prisma.$EstudiantesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Cambios<T extends Carpetas$CambiosArgs<ExtArgs> = {}>(args?: Subset<T, Carpetas$CambiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CambiosPayload<ExtArgs>, T, 'findMany'> | Null>;

    Bibliografias<T extends Carpetas$BibliografiasArgs<ExtArgs> = {}>(args?: Subset<T, Carpetas$BibliografiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BibliografiasPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Carpetas model
   */ 
  interface CarpetasFieldRefs {
    readonly pk_id_carp: FieldRef<"Carpetas", 'Int'>
    readonly txt_nom_carp: FieldRef<"Carpetas", 'String'>
    readonly fk_id_grup: FieldRef<"Carpetas", 'Int'>
    readonly fk_id_est: FieldRef<"Carpetas", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Carpetas findUnique
   */
  export type CarpetasFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpetas
     */
    select?: CarpetasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarpetasInclude<ExtArgs> | null
    /**
     * Filter, which Carpetas to fetch.
     */
    where: CarpetasWhereUniqueInput
  }


  /**
   * Carpetas findUniqueOrThrow
   */
  export type CarpetasFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpetas
     */
    select?: CarpetasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarpetasInclude<ExtArgs> | null
    /**
     * Filter, which Carpetas to fetch.
     */
    where: CarpetasWhereUniqueInput
  }


  /**
   * Carpetas findFirst
   */
  export type CarpetasFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpetas
     */
    select?: CarpetasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarpetasInclude<ExtArgs> | null
    /**
     * Filter, which Carpetas to fetch.
     */
    where?: CarpetasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carpetas to fetch.
     */
    orderBy?: CarpetasOrderByWithRelationInput | CarpetasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carpetas.
     */
    cursor?: CarpetasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carpetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carpetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carpetas.
     */
    distinct?: CarpetasScalarFieldEnum | CarpetasScalarFieldEnum[]
  }


  /**
   * Carpetas findFirstOrThrow
   */
  export type CarpetasFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpetas
     */
    select?: CarpetasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarpetasInclude<ExtArgs> | null
    /**
     * Filter, which Carpetas to fetch.
     */
    where?: CarpetasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carpetas to fetch.
     */
    orderBy?: CarpetasOrderByWithRelationInput | CarpetasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carpetas.
     */
    cursor?: CarpetasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carpetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carpetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carpetas.
     */
    distinct?: CarpetasScalarFieldEnum | CarpetasScalarFieldEnum[]
  }


  /**
   * Carpetas findMany
   */
  export type CarpetasFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpetas
     */
    select?: CarpetasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarpetasInclude<ExtArgs> | null
    /**
     * Filter, which Carpetas to fetch.
     */
    where?: CarpetasWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carpetas to fetch.
     */
    orderBy?: CarpetasOrderByWithRelationInput | CarpetasOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carpetas.
     */
    cursor?: CarpetasWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carpetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carpetas.
     */
    skip?: number
    distinct?: CarpetasScalarFieldEnum | CarpetasScalarFieldEnum[]
  }


  /**
   * Carpetas create
   */
  export type CarpetasCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpetas
     */
    select?: CarpetasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarpetasInclude<ExtArgs> | null
    /**
     * The data needed to create a Carpetas.
     */
    data: XOR<CarpetasCreateInput, CarpetasUncheckedCreateInput>
  }


  /**
   * Carpetas createMany
   */
  export type CarpetasCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carpetas.
     */
    data: CarpetasCreateManyInput | CarpetasCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Carpetas update
   */
  export type CarpetasUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpetas
     */
    select?: CarpetasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarpetasInclude<ExtArgs> | null
    /**
     * The data needed to update a Carpetas.
     */
    data: XOR<CarpetasUpdateInput, CarpetasUncheckedUpdateInput>
    /**
     * Choose, which Carpetas to update.
     */
    where: CarpetasWhereUniqueInput
  }


  /**
   * Carpetas updateMany
   */
  export type CarpetasUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carpetas.
     */
    data: XOR<CarpetasUpdateManyMutationInput, CarpetasUncheckedUpdateManyInput>
    /**
     * Filter which Carpetas to update
     */
    where?: CarpetasWhereInput
  }


  /**
   * Carpetas upsert
   */
  export type CarpetasUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpetas
     */
    select?: CarpetasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarpetasInclude<ExtArgs> | null
    /**
     * The filter to search for the Carpetas to update in case it exists.
     */
    where: CarpetasWhereUniqueInput
    /**
     * In case the Carpetas found by the `where` argument doesn't exist, create a new Carpetas with this data.
     */
    create: XOR<CarpetasCreateInput, CarpetasUncheckedCreateInput>
    /**
     * In case the Carpetas was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarpetasUpdateInput, CarpetasUncheckedUpdateInput>
  }


  /**
   * Carpetas delete
   */
  export type CarpetasDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpetas
     */
    select?: CarpetasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarpetasInclude<ExtArgs> | null
    /**
     * Filter which Carpetas to delete.
     */
    where: CarpetasWhereUniqueInput
  }


  /**
   * Carpetas deleteMany
   */
  export type CarpetasDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carpetas to delete
     */
    where?: CarpetasWhereInput
  }


  /**
   * Carpetas.Cambios
   */
  export type Carpetas$CambiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cambios
     */
    select?: CambiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CambiosInclude<ExtArgs> | null
    where?: CambiosWhereInput
    orderBy?: CambiosOrderByWithRelationInput | CambiosOrderByWithRelationInput[]
    cursor?: CambiosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CambiosScalarFieldEnum | CambiosScalarFieldEnum[]
  }


  /**
   * Carpetas.Bibliografias
   */
  export type Carpetas$BibliografiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliografias
     */
    select?: BibliografiasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BibliografiasInclude<ExtArgs> | null
    where?: BibliografiasWhereInput
    orderBy?: BibliografiasOrderByWithRelationInput | BibliografiasOrderByWithRelationInput[]
    cursor?: BibliografiasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BibliografiasScalarFieldEnum | BibliografiasScalarFieldEnum[]
  }


  /**
   * Carpetas without action
   */
  export type CarpetasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpetas
     */
    select?: CarpetasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarpetasInclude<ExtArgs> | null
  }



  /**
   * Model GrupoConAcceso
   */

  export type AggregateGrupoConAcceso = {
    _count: GrupoConAccesoCountAggregateOutputType | null
    _avg: GrupoConAccesoAvgAggregateOutputType | null
    _sum: GrupoConAccesoSumAggregateOutputType | null
    _min: GrupoConAccesoMinAggregateOutputType | null
    _max: GrupoConAccesoMaxAggregateOutputType | null
  }

  export type GrupoConAccesoAvgAggregateOutputType = {
    fk_id_grup: number | null
  }

  export type GrupoConAccesoSumAggregateOutputType = {
    fk_id_grup: number | null
  }

  export type GrupoConAccesoMinAggregateOutputType = {
    fk_id_grup: number | null
    fk_id_est: string | null
  }

  export type GrupoConAccesoMaxAggregateOutputType = {
    fk_id_grup: number | null
    fk_id_est: string | null
  }

  export type GrupoConAccesoCountAggregateOutputType = {
    fk_id_grup: number
    fk_id_est: number
    _all: number
  }


  export type GrupoConAccesoAvgAggregateInputType = {
    fk_id_grup?: true
  }

  export type GrupoConAccesoSumAggregateInputType = {
    fk_id_grup?: true
  }

  export type GrupoConAccesoMinAggregateInputType = {
    fk_id_grup?: true
    fk_id_est?: true
  }

  export type GrupoConAccesoMaxAggregateInputType = {
    fk_id_grup?: true
    fk_id_est?: true
  }

  export type GrupoConAccesoCountAggregateInputType = {
    fk_id_grup?: true
    fk_id_est?: true
    _all?: true
  }

  export type GrupoConAccesoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrupoConAcceso to aggregate.
     */
    where?: GrupoConAccesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrupoConAccesos to fetch.
     */
    orderBy?: GrupoConAccesoOrderByWithRelationInput | GrupoConAccesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GrupoConAccesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrupoConAccesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrupoConAccesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GrupoConAccesos
    **/
    _count?: true | GrupoConAccesoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GrupoConAccesoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GrupoConAccesoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GrupoConAccesoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GrupoConAccesoMaxAggregateInputType
  }

  export type GetGrupoConAccesoAggregateType<T extends GrupoConAccesoAggregateArgs> = {
        [P in keyof T & keyof AggregateGrupoConAcceso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrupoConAcceso[P]>
      : GetScalarType<T[P], AggregateGrupoConAcceso[P]>
  }




  export type GrupoConAccesoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GrupoConAccesoWhereInput
    orderBy?: GrupoConAccesoOrderByWithAggregationInput | GrupoConAccesoOrderByWithAggregationInput[]
    by: GrupoConAccesoScalarFieldEnum[] | GrupoConAccesoScalarFieldEnum
    having?: GrupoConAccesoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GrupoConAccesoCountAggregateInputType | true
    _avg?: GrupoConAccesoAvgAggregateInputType
    _sum?: GrupoConAccesoSumAggregateInputType
    _min?: GrupoConAccesoMinAggregateInputType
    _max?: GrupoConAccesoMaxAggregateInputType
  }

  export type GrupoConAccesoGroupByOutputType = {
    fk_id_grup: number
    fk_id_est: string
    _count: GrupoConAccesoCountAggregateOutputType | null
    _avg: GrupoConAccesoAvgAggregateOutputType | null
    _sum: GrupoConAccesoSumAggregateOutputType | null
    _min: GrupoConAccesoMinAggregateOutputType | null
    _max: GrupoConAccesoMaxAggregateOutputType | null
  }

  type GetGrupoConAccesoGroupByPayload<T extends GrupoConAccesoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GrupoConAccesoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GrupoConAccesoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GrupoConAccesoGroupByOutputType[P]>
            : GetScalarType<T[P], GrupoConAccesoGroupByOutputType[P]>
        }
      >
    >


  export type GrupoConAccesoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    fk_id_grup?: boolean
    fk_id_est?: boolean
    Grupo?: boolean | GruposDefaultArgs<ExtArgs>
    Estudiante?: boolean | EstudiantesDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupoConAcceso"]>

  export type GrupoConAccesoSelectScalar = {
    fk_id_grup?: boolean
    fk_id_est?: boolean
  }

  export type GrupoConAccesoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Grupo?: boolean | GruposDefaultArgs<ExtArgs>
    Estudiante?: boolean | EstudiantesDefaultArgs<ExtArgs>
  }


  export type $GrupoConAccesoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GrupoConAcceso"
    objects: {
      Grupo: Prisma.$GruposPayload<ExtArgs>
      Estudiante: Prisma.$EstudiantesPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      fk_id_grup: number
      fk_id_est: string
    }, ExtArgs["result"]["grupoConAcceso"]>
    composites: {}
  }


  type GrupoConAccesoGetPayload<S extends boolean | null | undefined | GrupoConAccesoDefaultArgs> = $Result.GetResult<Prisma.$GrupoConAccesoPayload, S>

  type GrupoConAccesoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GrupoConAccesoFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: GrupoConAccesoCountAggregateInputType | true
    }

  export interface GrupoConAccesoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GrupoConAcceso'], meta: { name: 'GrupoConAcceso' } }
    /**
     * Find zero or one GrupoConAcceso that matches the filter.
     * @param {GrupoConAccesoFindUniqueArgs} args - Arguments to find a GrupoConAcceso
     * @example
     * // Get one GrupoConAcceso
     * const grupoConAcceso = await prisma.grupoConAcceso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GrupoConAccesoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GrupoConAccesoFindUniqueArgs<ExtArgs>>
    ): Prisma__GrupoConAccesoClient<$Result.GetResult<Prisma.$GrupoConAccesoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one GrupoConAcceso that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GrupoConAccesoFindUniqueOrThrowArgs} args - Arguments to find a GrupoConAcceso
     * @example
     * // Get one GrupoConAcceso
     * const grupoConAcceso = await prisma.grupoConAcceso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GrupoConAccesoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GrupoConAccesoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GrupoConAccesoClient<$Result.GetResult<Prisma.$GrupoConAccesoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first GrupoConAcceso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoConAccesoFindFirstArgs} args - Arguments to find a GrupoConAcceso
     * @example
     * // Get one GrupoConAcceso
     * const grupoConAcceso = await prisma.grupoConAcceso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GrupoConAccesoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GrupoConAccesoFindFirstArgs<ExtArgs>>
    ): Prisma__GrupoConAccesoClient<$Result.GetResult<Prisma.$GrupoConAccesoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first GrupoConAcceso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoConAccesoFindFirstOrThrowArgs} args - Arguments to find a GrupoConAcceso
     * @example
     * // Get one GrupoConAcceso
     * const grupoConAcceso = await prisma.grupoConAcceso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GrupoConAccesoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GrupoConAccesoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GrupoConAccesoClient<$Result.GetResult<Prisma.$GrupoConAccesoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more GrupoConAccesos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoConAccesoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GrupoConAccesos
     * const grupoConAccesos = await prisma.grupoConAcceso.findMany()
     * 
     * // Get first 10 GrupoConAccesos
     * const grupoConAccesos = await prisma.grupoConAcceso.findMany({ take: 10 })
     * 
     * // Only select the `fk_id_grup`
     * const grupoConAccesoWithFk_id_grupOnly = await prisma.grupoConAcceso.findMany({ select: { fk_id_grup: true } })
     * 
    **/
    findMany<T extends GrupoConAccesoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GrupoConAccesoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoConAccesoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a GrupoConAcceso.
     * @param {GrupoConAccesoCreateArgs} args - Arguments to create a GrupoConAcceso.
     * @example
     * // Create one GrupoConAcceso
     * const GrupoConAcceso = await prisma.grupoConAcceso.create({
     *   data: {
     *     // ... data to create a GrupoConAcceso
     *   }
     * })
     * 
    **/
    create<T extends GrupoConAccesoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GrupoConAccesoCreateArgs<ExtArgs>>
    ): Prisma__GrupoConAccesoClient<$Result.GetResult<Prisma.$GrupoConAccesoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many GrupoConAccesos.
     *     @param {GrupoConAccesoCreateManyArgs} args - Arguments to create many GrupoConAccesos.
     *     @example
     *     // Create many GrupoConAccesos
     *     const grupoConAcceso = await prisma.grupoConAcceso.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GrupoConAccesoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GrupoConAccesoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a GrupoConAcceso.
     * @param {GrupoConAccesoDeleteArgs} args - Arguments to delete one GrupoConAcceso.
     * @example
     * // Delete one GrupoConAcceso
     * const GrupoConAcceso = await prisma.grupoConAcceso.delete({
     *   where: {
     *     // ... filter to delete one GrupoConAcceso
     *   }
     * })
     * 
    **/
    delete<T extends GrupoConAccesoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GrupoConAccesoDeleteArgs<ExtArgs>>
    ): Prisma__GrupoConAccesoClient<$Result.GetResult<Prisma.$GrupoConAccesoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one GrupoConAcceso.
     * @param {GrupoConAccesoUpdateArgs} args - Arguments to update one GrupoConAcceso.
     * @example
     * // Update one GrupoConAcceso
     * const grupoConAcceso = await prisma.grupoConAcceso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GrupoConAccesoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GrupoConAccesoUpdateArgs<ExtArgs>>
    ): Prisma__GrupoConAccesoClient<$Result.GetResult<Prisma.$GrupoConAccesoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more GrupoConAccesos.
     * @param {GrupoConAccesoDeleteManyArgs} args - Arguments to filter GrupoConAccesos to delete.
     * @example
     * // Delete a few GrupoConAccesos
     * const { count } = await prisma.grupoConAcceso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GrupoConAccesoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GrupoConAccesoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GrupoConAccesos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoConAccesoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GrupoConAccesos
     * const grupoConAcceso = await prisma.grupoConAcceso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GrupoConAccesoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GrupoConAccesoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one GrupoConAcceso.
     * @param {GrupoConAccesoUpsertArgs} args - Arguments to update or create a GrupoConAcceso.
     * @example
     * // Update or create a GrupoConAcceso
     * const grupoConAcceso = await prisma.grupoConAcceso.upsert({
     *   create: {
     *     // ... data to create a GrupoConAcceso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GrupoConAcceso we want to update
     *   }
     * })
    **/
    upsert<T extends GrupoConAccesoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GrupoConAccesoUpsertArgs<ExtArgs>>
    ): Prisma__GrupoConAccesoClient<$Result.GetResult<Prisma.$GrupoConAccesoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of GrupoConAccesos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoConAccesoCountArgs} args - Arguments to filter GrupoConAccesos to count.
     * @example
     * // Count the number of GrupoConAccesos
     * const count = await prisma.grupoConAcceso.count({
     *   where: {
     *     // ... the filter for the GrupoConAccesos we want to count
     *   }
     * })
    **/
    count<T extends GrupoConAccesoCountArgs>(
      args?: Subset<T, GrupoConAccesoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GrupoConAccesoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GrupoConAcceso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoConAccesoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GrupoConAccesoAggregateArgs>(args: Subset<T, GrupoConAccesoAggregateArgs>): Prisma.PrismaPromise<GetGrupoConAccesoAggregateType<T>>

    /**
     * Group by GrupoConAcceso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GrupoConAccesoGroupByArgs} args - Group by arguments.
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
      T extends GrupoConAccesoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GrupoConAccesoGroupByArgs['orderBy'] }
        : { orderBy?: GrupoConAccesoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GrupoConAccesoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGrupoConAccesoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GrupoConAcceso model
   */
  readonly fields: GrupoConAccesoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GrupoConAcceso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GrupoConAccesoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Grupo<T extends GruposDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GruposDefaultArgs<ExtArgs>>): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Estudiante<T extends EstudiantesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudiantesDefaultArgs<ExtArgs>>): Prisma__EstudiantesClient<$Result.GetResult<Prisma.$EstudiantesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the GrupoConAcceso model
   */ 
  interface GrupoConAccesoFieldRefs {
    readonly fk_id_grup: FieldRef<"GrupoConAcceso", 'Int'>
    readonly fk_id_est: FieldRef<"GrupoConAcceso", 'String'>
  }
    

  // Custom InputTypes

  /**
   * GrupoConAcceso findUnique
   */
  export type GrupoConAccesoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoConAcceso
     */
    select?: GrupoConAccesoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoConAccesoInclude<ExtArgs> | null
    /**
     * Filter, which GrupoConAcceso to fetch.
     */
    where: GrupoConAccesoWhereUniqueInput
  }


  /**
   * GrupoConAcceso findUniqueOrThrow
   */
  export type GrupoConAccesoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoConAcceso
     */
    select?: GrupoConAccesoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoConAccesoInclude<ExtArgs> | null
    /**
     * Filter, which GrupoConAcceso to fetch.
     */
    where: GrupoConAccesoWhereUniqueInput
  }


  /**
   * GrupoConAcceso findFirst
   */
  export type GrupoConAccesoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoConAcceso
     */
    select?: GrupoConAccesoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoConAccesoInclude<ExtArgs> | null
    /**
     * Filter, which GrupoConAcceso to fetch.
     */
    where?: GrupoConAccesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrupoConAccesos to fetch.
     */
    orderBy?: GrupoConAccesoOrderByWithRelationInput | GrupoConAccesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrupoConAccesos.
     */
    cursor?: GrupoConAccesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrupoConAccesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrupoConAccesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrupoConAccesos.
     */
    distinct?: GrupoConAccesoScalarFieldEnum | GrupoConAccesoScalarFieldEnum[]
  }


  /**
   * GrupoConAcceso findFirstOrThrow
   */
  export type GrupoConAccesoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoConAcceso
     */
    select?: GrupoConAccesoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoConAccesoInclude<ExtArgs> | null
    /**
     * Filter, which GrupoConAcceso to fetch.
     */
    where?: GrupoConAccesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrupoConAccesos to fetch.
     */
    orderBy?: GrupoConAccesoOrderByWithRelationInput | GrupoConAccesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GrupoConAccesos.
     */
    cursor?: GrupoConAccesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrupoConAccesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrupoConAccesos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GrupoConAccesos.
     */
    distinct?: GrupoConAccesoScalarFieldEnum | GrupoConAccesoScalarFieldEnum[]
  }


  /**
   * GrupoConAcceso findMany
   */
  export type GrupoConAccesoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoConAcceso
     */
    select?: GrupoConAccesoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoConAccesoInclude<ExtArgs> | null
    /**
     * Filter, which GrupoConAccesos to fetch.
     */
    where?: GrupoConAccesoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GrupoConAccesos to fetch.
     */
    orderBy?: GrupoConAccesoOrderByWithRelationInput | GrupoConAccesoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GrupoConAccesos.
     */
    cursor?: GrupoConAccesoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GrupoConAccesos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GrupoConAccesos.
     */
    skip?: number
    distinct?: GrupoConAccesoScalarFieldEnum | GrupoConAccesoScalarFieldEnum[]
  }


  /**
   * GrupoConAcceso create
   */
  export type GrupoConAccesoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoConAcceso
     */
    select?: GrupoConAccesoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoConAccesoInclude<ExtArgs> | null
    /**
     * The data needed to create a GrupoConAcceso.
     */
    data: XOR<GrupoConAccesoCreateInput, GrupoConAccesoUncheckedCreateInput>
  }


  /**
   * GrupoConAcceso createMany
   */
  export type GrupoConAccesoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GrupoConAccesos.
     */
    data: GrupoConAccesoCreateManyInput | GrupoConAccesoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * GrupoConAcceso update
   */
  export type GrupoConAccesoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoConAcceso
     */
    select?: GrupoConAccesoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoConAccesoInclude<ExtArgs> | null
    /**
     * The data needed to update a GrupoConAcceso.
     */
    data: XOR<GrupoConAccesoUpdateInput, GrupoConAccesoUncheckedUpdateInput>
    /**
     * Choose, which GrupoConAcceso to update.
     */
    where: GrupoConAccesoWhereUniqueInput
  }


  /**
   * GrupoConAcceso updateMany
   */
  export type GrupoConAccesoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GrupoConAccesos.
     */
    data: XOR<GrupoConAccesoUpdateManyMutationInput, GrupoConAccesoUncheckedUpdateManyInput>
    /**
     * Filter which GrupoConAccesos to update
     */
    where?: GrupoConAccesoWhereInput
  }


  /**
   * GrupoConAcceso upsert
   */
  export type GrupoConAccesoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoConAcceso
     */
    select?: GrupoConAccesoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoConAccesoInclude<ExtArgs> | null
    /**
     * The filter to search for the GrupoConAcceso to update in case it exists.
     */
    where: GrupoConAccesoWhereUniqueInput
    /**
     * In case the GrupoConAcceso found by the `where` argument doesn't exist, create a new GrupoConAcceso with this data.
     */
    create: XOR<GrupoConAccesoCreateInput, GrupoConAccesoUncheckedCreateInput>
    /**
     * In case the GrupoConAcceso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GrupoConAccesoUpdateInput, GrupoConAccesoUncheckedUpdateInput>
  }


  /**
   * GrupoConAcceso delete
   */
  export type GrupoConAccesoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoConAcceso
     */
    select?: GrupoConAccesoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoConAccesoInclude<ExtArgs> | null
    /**
     * Filter which GrupoConAcceso to delete.
     */
    where: GrupoConAccesoWhereUniqueInput
  }


  /**
   * GrupoConAcceso deleteMany
   */
  export type GrupoConAccesoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GrupoConAccesos to delete
     */
    where?: GrupoConAccesoWhereInput
  }


  /**
   * GrupoConAcceso without action
   */
  export type GrupoConAccesoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoConAcceso
     */
    select?: GrupoConAccesoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoConAccesoInclude<ExtArgs> | null
  }



  /**
   * Model Grupos
   */

  export type AggregateGrupos = {
    _count: GruposCountAggregateOutputType | null
    _avg: GruposAvgAggregateOutputType | null
    _sum: GruposSumAggregateOutputType | null
    _min: GruposMinAggregateOutputType | null
    _max: GruposMaxAggregateOutputType | null
  }

  export type GruposAvgAggregateOutputType = {
    pk_id_grup: number | null
  }

  export type GruposSumAggregateOutputType = {
    pk_id_grup: number | null
  }

  export type GruposMinAggregateOutputType = {
    pk_id_grup: number | null
    txt_nom_grup: string | null
    fk_id_est: string | null
  }

  export type GruposMaxAggregateOutputType = {
    pk_id_grup: number | null
    txt_nom_grup: string | null
    fk_id_est: string | null
  }

  export type GruposCountAggregateOutputType = {
    pk_id_grup: number
    txt_nom_grup: number
    fk_id_est: number
    _all: number
  }


  export type GruposAvgAggregateInputType = {
    pk_id_grup?: true
  }

  export type GruposSumAggregateInputType = {
    pk_id_grup?: true
  }

  export type GruposMinAggregateInputType = {
    pk_id_grup?: true
    txt_nom_grup?: true
    fk_id_est?: true
  }

  export type GruposMaxAggregateInputType = {
    pk_id_grup?: true
    txt_nom_grup?: true
    fk_id_est?: true
  }

  export type GruposCountAggregateInputType = {
    pk_id_grup?: true
    txt_nom_grup?: true
    fk_id_est?: true
    _all?: true
  }

  export type GruposAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grupos to aggregate.
     */
    where?: GruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GruposOrderByWithRelationInput | GruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Grupos
    **/
    _count?: true | GruposCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GruposAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GruposSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GruposMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GruposMaxAggregateInputType
  }

  export type GetGruposAggregateType<T extends GruposAggregateArgs> = {
        [P in keyof T & keyof AggregateGrupos]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGrupos[P]>
      : GetScalarType<T[P], AggregateGrupos[P]>
  }




  export type GruposGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GruposWhereInput
    orderBy?: GruposOrderByWithAggregationInput | GruposOrderByWithAggregationInput[]
    by: GruposScalarFieldEnum[] | GruposScalarFieldEnum
    having?: GruposScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GruposCountAggregateInputType | true
    _avg?: GruposAvgAggregateInputType
    _sum?: GruposSumAggregateInputType
    _min?: GruposMinAggregateInputType
    _max?: GruposMaxAggregateInputType
  }

  export type GruposGroupByOutputType = {
    pk_id_grup: number
    txt_nom_grup: string
    fk_id_est: string
    _count: GruposCountAggregateOutputType | null
    _avg: GruposAvgAggregateOutputType | null
    _sum: GruposSumAggregateOutputType | null
    _min: GruposMinAggregateOutputType | null
    _max: GruposMaxAggregateOutputType | null
  }

  type GetGruposGroupByPayload<T extends GruposGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GruposGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GruposGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GruposGroupByOutputType[P]>
            : GetScalarType<T[P], GruposGroupByOutputType[P]>
        }
      >
    >


  export type GruposSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_id_grup?: boolean
    txt_nom_grup?: boolean
    fk_id_est?: boolean
    Estudiante?: boolean | EstudiantesDefaultArgs<ExtArgs>
    Cambios?: boolean | Grupos$CambiosArgs<ExtArgs>
    Carpetas?: boolean | Grupos$CarpetasArgs<ExtArgs>
    Bibliografias?: boolean | Grupos$BibliografiasArgs<ExtArgs>
    GrupoConAcceso?: boolean | Grupos$GrupoConAccesoArgs<ExtArgs>
    _count?: boolean | GruposCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupos"]>

  export type GruposSelectScalar = {
    pk_id_grup?: boolean
    txt_nom_grup?: boolean
    fk_id_est?: boolean
  }

  export type GruposInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estudiante?: boolean | EstudiantesDefaultArgs<ExtArgs>
    Cambios?: boolean | Grupos$CambiosArgs<ExtArgs>
    Carpetas?: boolean | Grupos$CarpetasArgs<ExtArgs>
    Bibliografias?: boolean | Grupos$BibliografiasArgs<ExtArgs>
    GrupoConAcceso?: boolean | Grupos$GrupoConAccesoArgs<ExtArgs>
    _count?: boolean | GruposCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GruposPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grupos"
    objects: {
      Estudiante: Prisma.$EstudiantesPayload<ExtArgs>
      Cambios: Prisma.$CambiosPayload<ExtArgs>[]
      Carpetas: Prisma.$CarpetasPayload<ExtArgs>[]
      Bibliografias: Prisma.$BibliografiasPayload<ExtArgs>[]
      GrupoConAcceso: Prisma.$GrupoConAccesoPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_id_grup: number
      txt_nom_grup: string
      fk_id_est: string
    }, ExtArgs["result"]["grupos"]>
    composites: {}
  }


  type GruposGetPayload<S extends boolean | null | undefined | GruposDefaultArgs> = $Result.GetResult<Prisma.$GruposPayload, S>

  type GruposCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GruposFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: GruposCountAggregateInputType | true
    }

  export interface GruposDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Grupos'], meta: { name: 'Grupos' } }
    /**
     * Find zero or one Grupos that matches the filter.
     * @param {GruposFindUniqueArgs} args - Arguments to find a Grupos
     * @example
     * // Get one Grupos
     * const grupos = await prisma.grupos.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GruposFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GruposFindUniqueArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Grupos that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GruposFindUniqueOrThrowArgs} args - Arguments to find a Grupos
     * @example
     * // Get one Grupos
     * const grupos = await prisma.grupos.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GruposFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GruposFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Grupos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GruposFindFirstArgs} args - Arguments to find a Grupos
     * @example
     * // Get one Grupos
     * const grupos = await prisma.grupos.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GruposFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GruposFindFirstArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Grupos that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GruposFindFirstOrThrowArgs} args - Arguments to find a Grupos
     * @example
     * // Get one Grupos
     * const grupos = await prisma.grupos.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GruposFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GruposFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Grupos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GruposFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Grupos
     * const grupos = await prisma.grupos.findMany()
     * 
     * // Get first 10 Grupos
     * const grupos = await prisma.grupos.findMany({ take: 10 })
     * 
     * // Only select the `pk_id_grup`
     * const gruposWithPk_id_grupOnly = await prisma.grupos.findMany({ select: { pk_id_grup: true } })
     * 
    **/
    findMany<T extends GruposFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GruposFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Grupos.
     * @param {GruposCreateArgs} args - Arguments to create a Grupos.
     * @example
     * // Create one Grupos
     * const Grupos = await prisma.grupos.create({
     *   data: {
     *     // ... data to create a Grupos
     *   }
     * })
     * 
    **/
    create<T extends GruposCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GruposCreateArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Grupos.
     *     @param {GruposCreateManyArgs} args - Arguments to create many Grupos.
     *     @example
     *     // Create many Grupos
     *     const grupos = await prisma.grupos.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GruposCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GruposCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Grupos.
     * @param {GruposDeleteArgs} args - Arguments to delete one Grupos.
     * @example
     * // Delete one Grupos
     * const Grupos = await prisma.grupos.delete({
     *   where: {
     *     // ... filter to delete one Grupos
     *   }
     * })
     * 
    **/
    delete<T extends GruposDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GruposDeleteArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Grupos.
     * @param {GruposUpdateArgs} args - Arguments to update one Grupos.
     * @example
     * // Update one Grupos
     * const grupos = await prisma.grupos.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GruposUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GruposUpdateArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Grupos.
     * @param {GruposDeleteManyArgs} args - Arguments to filter Grupos to delete.
     * @example
     * // Delete a few Grupos
     * const { count } = await prisma.grupos.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GruposDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GruposDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GruposUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Grupos
     * const grupos = await prisma.grupos.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GruposUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GruposUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Grupos.
     * @param {GruposUpsertArgs} args - Arguments to update or create a Grupos.
     * @example
     * // Update or create a Grupos
     * const grupos = await prisma.grupos.upsert({
     *   create: {
     *     // ... data to create a Grupos
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Grupos we want to update
     *   }
     * })
    **/
    upsert<T extends GruposUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GruposUpsertArgs<ExtArgs>>
    ): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GruposCountArgs} args - Arguments to filter Grupos to count.
     * @example
     * // Count the number of Grupos
     * const count = await prisma.grupos.count({
     *   where: {
     *     // ... the filter for the Grupos we want to count
     *   }
     * })
    **/
    count<T extends GruposCountArgs>(
      args?: Subset<T, GruposCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GruposCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GruposAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GruposAggregateArgs>(args: Subset<T, GruposAggregateArgs>): Prisma.PrismaPromise<GetGruposAggregateType<T>>

    /**
     * Group by Grupos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GruposGroupByArgs} args - Group by arguments.
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
      T extends GruposGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GruposGroupByArgs['orderBy'] }
        : { orderBy?: GruposGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, GruposGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGruposGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Grupos model
   */
  readonly fields: GruposFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Grupos.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GruposClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Estudiante<T extends EstudiantesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudiantesDefaultArgs<ExtArgs>>): Prisma__EstudiantesClient<$Result.GetResult<Prisma.$EstudiantesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Cambios<T extends Grupos$CambiosArgs<ExtArgs> = {}>(args?: Subset<T, Grupos$CambiosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CambiosPayload<ExtArgs>, T, 'findMany'> | Null>;

    Carpetas<T extends Grupos$CarpetasArgs<ExtArgs> = {}>(args?: Subset<T, Grupos$CarpetasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarpetasPayload<ExtArgs>, T, 'findMany'> | Null>;

    Bibliografias<T extends Grupos$BibliografiasArgs<ExtArgs> = {}>(args?: Subset<T, Grupos$BibliografiasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BibliografiasPayload<ExtArgs>, T, 'findMany'> | Null>;

    GrupoConAcceso<T extends Grupos$GrupoConAccesoArgs<ExtArgs> = {}>(args?: Subset<T, Grupos$GrupoConAccesoArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GrupoConAccesoPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Grupos model
   */ 
  interface GruposFieldRefs {
    readonly pk_id_grup: FieldRef<"Grupos", 'Int'>
    readonly txt_nom_grup: FieldRef<"Grupos", 'String'>
    readonly fk_id_est: FieldRef<"Grupos", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Grupos findUnique
   */
  export type GruposFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * Filter, which Grupos to fetch.
     */
    where: GruposWhereUniqueInput
  }


  /**
   * Grupos findUniqueOrThrow
   */
  export type GruposFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * Filter, which Grupos to fetch.
     */
    where: GruposWhereUniqueInput
  }


  /**
   * Grupos findFirst
   */
  export type GruposFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * Filter, which Grupos to fetch.
     */
    where?: GruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GruposOrderByWithRelationInput | GruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grupos.
     */
    cursor?: GruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grupos.
     */
    distinct?: GruposScalarFieldEnum | GruposScalarFieldEnum[]
  }


  /**
   * Grupos findFirstOrThrow
   */
  export type GruposFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * Filter, which Grupos to fetch.
     */
    where?: GruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GruposOrderByWithRelationInput | GruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Grupos.
     */
    cursor?: GruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Grupos.
     */
    distinct?: GruposScalarFieldEnum | GruposScalarFieldEnum[]
  }


  /**
   * Grupos findMany
   */
  export type GruposFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * Filter, which Grupos to fetch.
     */
    where?: GruposWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Grupos to fetch.
     */
    orderBy?: GruposOrderByWithRelationInput | GruposOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Grupos.
     */
    cursor?: GruposWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Grupos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Grupos.
     */
    skip?: number
    distinct?: GruposScalarFieldEnum | GruposScalarFieldEnum[]
  }


  /**
   * Grupos create
   */
  export type GruposCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * The data needed to create a Grupos.
     */
    data: XOR<GruposCreateInput, GruposUncheckedCreateInput>
  }


  /**
   * Grupos createMany
   */
  export type GruposCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Grupos.
     */
    data: GruposCreateManyInput | GruposCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Grupos update
   */
  export type GruposUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * The data needed to update a Grupos.
     */
    data: XOR<GruposUpdateInput, GruposUncheckedUpdateInput>
    /**
     * Choose, which Grupos to update.
     */
    where: GruposWhereUniqueInput
  }


  /**
   * Grupos updateMany
   */
  export type GruposUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Grupos.
     */
    data: XOR<GruposUpdateManyMutationInput, GruposUncheckedUpdateManyInput>
    /**
     * Filter which Grupos to update
     */
    where?: GruposWhereInput
  }


  /**
   * Grupos upsert
   */
  export type GruposUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * The filter to search for the Grupos to update in case it exists.
     */
    where: GruposWhereUniqueInput
    /**
     * In case the Grupos found by the `where` argument doesn't exist, create a new Grupos with this data.
     */
    create: XOR<GruposCreateInput, GruposUncheckedCreateInput>
    /**
     * In case the Grupos was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GruposUpdateInput, GruposUncheckedUpdateInput>
  }


  /**
   * Grupos delete
   */
  export type GruposDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
    /**
     * Filter which Grupos to delete.
     */
    where: GruposWhereUniqueInput
  }


  /**
   * Grupos deleteMany
   */
  export type GruposDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Grupos to delete
     */
    where?: GruposWhereInput
  }


  /**
   * Grupos.Cambios
   */
  export type Grupos$CambiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cambios
     */
    select?: CambiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CambiosInclude<ExtArgs> | null
    where?: CambiosWhereInput
    orderBy?: CambiosOrderByWithRelationInput | CambiosOrderByWithRelationInput[]
    cursor?: CambiosWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CambiosScalarFieldEnum | CambiosScalarFieldEnum[]
  }


  /**
   * Grupos.Carpetas
   */
  export type Grupos$CarpetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpetas
     */
    select?: CarpetasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CarpetasInclude<ExtArgs> | null
    where?: CarpetasWhereInput
    orderBy?: CarpetasOrderByWithRelationInput | CarpetasOrderByWithRelationInput[]
    cursor?: CarpetasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CarpetasScalarFieldEnum | CarpetasScalarFieldEnum[]
  }


  /**
   * Grupos.Bibliografias
   */
  export type Grupos$BibliografiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliografias
     */
    select?: BibliografiasSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: BibliografiasInclude<ExtArgs> | null
    where?: BibliografiasWhereInput
    orderBy?: BibliografiasOrderByWithRelationInput | BibliografiasOrderByWithRelationInput[]
    cursor?: BibliografiasWhereUniqueInput
    take?: number
    skip?: number
    distinct?: BibliografiasScalarFieldEnum | BibliografiasScalarFieldEnum[]
  }


  /**
   * Grupos.GrupoConAcceso
   */
  export type Grupos$GrupoConAccesoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GrupoConAcceso
     */
    select?: GrupoConAccesoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GrupoConAccesoInclude<ExtArgs> | null
    where?: GrupoConAccesoWhereInput
    orderBy?: GrupoConAccesoOrderByWithRelationInput | GrupoConAccesoOrderByWithRelationInput[]
    cursor?: GrupoConAccesoWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GrupoConAccesoScalarFieldEnum | GrupoConAccesoScalarFieldEnum[]
  }


  /**
   * Grupos without action
   */
  export type GruposDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Grupos
     */
    select?: GruposSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GruposInclude<ExtArgs> | null
  }



  /**
   * Model Cambios
   */

  export type AggregateCambios = {
    _count: CambiosCountAggregateOutputType | null
    _avg: CambiosAvgAggregateOutputType | null
    _sum: CambiosSumAggregateOutputType | null
    _min: CambiosMinAggregateOutputType | null
    _max: CambiosMaxAggregateOutputType | null
  }

  export type CambiosAvgAggregateOutputType = {
    pk_id_camb: number | null
    num_tip_camb: number | null
    fk_id_carp: number | null
    fk_id_grup: number | null
  }

  export type CambiosSumAggregateOutputType = {
    pk_id_camb: number | null
    num_tip_camb: number | null
    fk_id_carp: number | null
    fk_id_grup: number | null
  }

  export type CambiosMinAggregateOutputType = {
    pk_id_camb: number | null
    num_tip_camb: number | null
    txt_fecha_camb: Date | null
    fk_id_est: string | null
    fk_id_carp: number | null
    fk_id_grup: number | null
  }

  export type CambiosMaxAggregateOutputType = {
    pk_id_camb: number | null
    num_tip_camb: number | null
    txt_fecha_camb: Date | null
    fk_id_est: string | null
    fk_id_carp: number | null
    fk_id_grup: number | null
  }

  export type CambiosCountAggregateOutputType = {
    pk_id_camb: number
    num_tip_camb: number
    txt_fecha_camb: number
    fk_id_est: number
    fk_id_carp: number
    fk_id_grup: number
    _all: number
  }


  export type CambiosAvgAggregateInputType = {
    pk_id_camb?: true
    num_tip_camb?: true
    fk_id_carp?: true
    fk_id_grup?: true
  }

  export type CambiosSumAggregateInputType = {
    pk_id_camb?: true
    num_tip_camb?: true
    fk_id_carp?: true
    fk_id_grup?: true
  }

  export type CambiosMinAggregateInputType = {
    pk_id_camb?: true
    num_tip_camb?: true
    txt_fecha_camb?: true
    fk_id_est?: true
    fk_id_carp?: true
    fk_id_grup?: true
  }

  export type CambiosMaxAggregateInputType = {
    pk_id_camb?: true
    num_tip_camb?: true
    txt_fecha_camb?: true
    fk_id_est?: true
    fk_id_carp?: true
    fk_id_grup?: true
  }

  export type CambiosCountAggregateInputType = {
    pk_id_camb?: true
    num_tip_camb?: true
    txt_fecha_camb?: true
    fk_id_est?: true
    fk_id_carp?: true
    fk_id_grup?: true
    _all?: true
  }

  export type CambiosAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cambios to aggregate.
     */
    where?: CambiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cambios to fetch.
     */
    orderBy?: CambiosOrderByWithRelationInput | CambiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CambiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cambios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cambios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Cambios
    **/
    _count?: true | CambiosCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CambiosAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CambiosSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CambiosMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CambiosMaxAggregateInputType
  }

  export type GetCambiosAggregateType<T extends CambiosAggregateArgs> = {
        [P in keyof T & keyof AggregateCambios]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCambios[P]>
      : GetScalarType<T[P], AggregateCambios[P]>
  }




  export type CambiosGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CambiosWhereInput
    orderBy?: CambiosOrderByWithAggregationInput | CambiosOrderByWithAggregationInput[]
    by: CambiosScalarFieldEnum[] | CambiosScalarFieldEnum
    having?: CambiosScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CambiosCountAggregateInputType | true
    _avg?: CambiosAvgAggregateInputType
    _sum?: CambiosSumAggregateInputType
    _min?: CambiosMinAggregateInputType
    _max?: CambiosMaxAggregateInputType
  }

  export type CambiosGroupByOutputType = {
    pk_id_camb: number
    num_tip_camb: number
    txt_fecha_camb: Date
    fk_id_est: string
    fk_id_carp: number
    fk_id_grup: number
    _count: CambiosCountAggregateOutputType | null
    _avg: CambiosAvgAggregateOutputType | null
    _sum: CambiosSumAggregateOutputType | null
    _min: CambiosMinAggregateOutputType | null
    _max: CambiosMaxAggregateOutputType | null
  }

  type GetCambiosGroupByPayload<T extends CambiosGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CambiosGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CambiosGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CambiosGroupByOutputType[P]>
            : GetScalarType<T[P], CambiosGroupByOutputType[P]>
        }
      >
    >


  export type CambiosSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    pk_id_camb?: boolean
    num_tip_camb?: boolean
    txt_fecha_camb?: boolean
    fk_id_est?: boolean
    fk_id_carp?: boolean
    fk_id_grup?: boolean
    Estudiante?: boolean | EstudiantesDefaultArgs<ExtArgs>
    Carpeta?: boolean | CarpetasDefaultArgs<ExtArgs>
    Grupo?: boolean | GruposDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["cambios"]>

  export type CambiosSelectScalar = {
    pk_id_camb?: boolean
    num_tip_camb?: boolean
    txt_fecha_camb?: boolean
    fk_id_est?: boolean
    fk_id_carp?: boolean
    fk_id_grup?: boolean
  }

  export type CambiosInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Estudiante?: boolean | EstudiantesDefaultArgs<ExtArgs>
    Carpeta?: boolean | CarpetasDefaultArgs<ExtArgs>
    Grupo?: boolean | GruposDefaultArgs<ExtArgs>
  }


  export type $CambiosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Cambios"
    objects: {
      Estudiante: Prisma.$EstudiantesPayload<ExtArgs>
      Carpeta: Prisma.$CarpetasPayload<ExtArgs>
      Grupo: Prisma.$GruposPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_id_camb: number
      num_tip_camb: number
      txt_fecha_camb: Date
      fk_id_est: string
      fk_id_carp: number
      fk_id_grup: number
    }, ExtArgs["result"]["cambios"]>
    composites: {}
  }


  type CambiosGetPayload<S extends boolean | null | undefined | CambiosDefaultArgs> = $Result.GetResult<Prisma.$CambiosPayload, S>

  type CambiosCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CambiosFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: CambiosCountAggregateInputType | true
    }

  export interface CambiosDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Cambios'], meta: { name: 'Cambios' } }
    /**
     * Find zero or one Cambios that matches the filter.
     * @param {CambiosFindUniqueArgs} args - Arguments to find a Cambios
     * @example
     * // Get one Cambios
     * const cambios = await prisma.cambios.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CambiosFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CambiosFindUniqueArgs<ExtArgs>>
    ): Prisma__CambiosClient<$Result.GetResult<Prisma.$CambiosPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Cambios that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CambiosFindUniqueOrThrowArgs} args - Arguments to find a Cambios
     * @example
     * // Get one Cambios
     * const cambios = await prisma.cambios.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CambiosFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CambiosFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CambiosClient<$Result.GetResult<Prisma.$CambiosPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Cambios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CambiosFindFirstArgs} args - Arguments to find a Cambios
     * @example
     * // Get one Cambios
     * const cambios = await prisma.cambios.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CambiosFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CambiosFindFirstArgs<ExtArgs>>
    ): Prisma__CambiosClient<$Result.GetResult<Prisma.$CambiosPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Cambios that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CambiosFindFirstOrThrowArgs} args - Arguments to find a Cambios
     * @example
     * // Get one Cambios
     * const cambios = await prisma.cambios.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CambiosFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CambiosFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CambiosClient<$Result.GetResult<Prisma.$CambiosPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Cambios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CambiosFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cambios
     * const cambios = await prisma.cambios.findMany()
     * 
     * // Get first 10 Cambios
     * const cambios = await prisma.cambios.findMany({ take: 10 })
     * 
     * // Only select the `pk_id_camb`
     * const cambiosWithPk_id_cambOnly = await prisma.cambios.findMany({ select: { pk_id_camb: true } })
     * 
    **/
    findMany<T extends CambiosFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CambiosFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CambiosPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Cambios.
     * @param {CambiosCreateArgs} args - Arguments to create a Cambios.
     * @example
     * // Create one Cambios
     * const Cambios = await prisma.cambios.create({
     *   data: {
     *     // ... data to create a Cambios
     *   }
     * })
     * 
    **/
    create<T extends CambiosCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CambiosCreateArgs<ExtArgs>>
    ): Prisma__CambiosClient<$Result.GetResult<Prisma.$CambiosPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Cambios.
     *     @param {CambiosCreateManyArgs} args - Arguments to create many Cambios.
     *     @example
     *     // Create many Cambios
     *     const cambios = await prisma.cambios.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CambiosCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CambiosCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Cambios.
     * @param {CambiosDeleteArgs} args - Arguments to delete one Cambios.
     * @example
     * // Delete one Cambios
     * const Cambios = await prisma.cambios.delete({
     *   where: {
     *     // ... filter to delete one Cambios
     *   }
     * })
     * 
    **/
    delete<T extends CambiosDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CambiosDeleteArgs<ExtArgs>>
    ): Prisma__CambiosClient<$Result.GetResult<Prisma.$CambiosPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Cambios.
     * @param {CambiosUpdateArgs} args - Arguments to update one Cambios.
     * @example
     * // Update one Cambios
     * const cambios = await prisma.cambios.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CambiosUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CambiosUpdateArgs<ExtArgs>>
    ): Prisma__CambiosClient<$Result.GetResult<Prisma.$CambiosPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Cambios.
     * @param {CambiosDeleteManyArgs} args - Arguments to filter Cambios to delete.
     * @example
     * // Delete a few Cambios
     * const { count } = await prisma.cambios.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CambiosDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CambiosDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cambios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CambiosUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cambios
     * const cambios = await prisma.cambios.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CambiosUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CambiosUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Cambios.
     * @param {CambiosUpsertArgs} args - Arguments to update or create a Cambios.
     * @example
     * // Update or create a Cambios
     * const cambios = await prisma.cambios.upsert({
     *   create: {
     *     // ... data to create a Cambios
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cambios we want to update
     *   }
     * })
    **/
    upsert<T extends CambiosUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CambiosUpsertArgs<ExtArgs>>
    ): Prisma__CambiosClient<$Result.GetResult<Prisma.$CambiosPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Cambios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CambiosCountArgs} args - Arguments to filter Cambios to count.
     * @example
     * // Count the number of Cambios
     * const count = await prisma.cambios.count({
     *   where: {
     *     // ... the filter for the Cambios we want to count
     *   }
     * })
    **/
    count<T extends CambiosCountArgs>(
      args?: Subset<T, CambiosCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CambiosCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cambios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CambiosAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CambiosAggregateArgs>(args: Subset<T, CambiosAggregateArgs>): Prisma.PrismaPromise<GetCambiosAggregateType<T>>

    /**
     * Group by Cambios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CambiosGroupByArgs} args - Group by arguments.
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
      T extends CambiosGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CambiosGroupByArgs['orderBy'] }
        : { orderBy?: CambiosGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, CambiosGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCambiosGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Cambios model
   */
  readonly fields: CambiosFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Cambios.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CambiosClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Estudiante<T extends EstudiantesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstudiantesDefaultArgs<ExtArgs>>): Prisma__EstudiantesClient<$Result.GetResult<Prisma.$EstudiantesPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Carpeta<T extends CarpetasDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarpetasDefaultArgs<ExtArgs>>): Prisma__CarpetasClient<$Result.GetResult<Prisma.$CarpetasPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Grupo<T extends GruposDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GruposDefaultArgs<ExtArgs>>): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Cambios model
   */ 
  interface CambiosFieldRefs {
    readonly pk_id_camb: FieldRef<"Cambios", 'Int'>
    readonly num_tip_camb: FieldRef<"Cambios", 'Int'>
    readonly txt_fecha_camb: FieldRef<"Cambios", 'DateTime'>
    readonly fk_id_est: FieldRef<"Cambios", 'String'>
    readonly fk_id_carp: FieldRef<"Cambios", 'Int'>
    readonly fk_id_grup: FieldRef<"Cambios", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Cambios findUnique
   */
  export type CambiosFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cambios
     */
    select?: CambiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CambiosInclude<ExtArgs> | null
    /**
     * Filter, which Cambios to fetch.
     */
    where: CambiosWhereUniqueInput
  }


  /**
   * Cambios findUniqueOrThrow
   */
  export type CambiosFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cambios
     */
    select?: CambiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CambiosInclude<ExtArgs> | null
    /**
     * Filter, which Cambios to fetch.
     */
    where: CambiosWhereUniqueInput
  }


  /**
   * Cambios findFirst
   */
  export type CambiosFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cambios
     */
    select?: CambiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CambiosInclude<ExtArgs> | null
    /**
     * Filter, which Cambios to fetch.
     */
    where?: CambiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cambios to fetch.
     */
    orderBy?: CambiosOrderByWithRelationInput | CambiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cambios.
     */
    cursor?: CambiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cambios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cambios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cambios.
     */
    distinct?: CambiosScalarFieldEnum | CambiosScalarFieldEnum[]
  }


  /**
   * Cambios findFirstOrThrow
   */
  export type CambiosFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cambios
     */
    select?: CambiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CambiosInclude<ExtArgs> | null
    /**
     * Filter, which Cambios to fetch.
     */
    where?: CambiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cambios to fetch.
     */
    orderBy?: CambiosOrderByWithRelationInput | CambiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Cambios.
     */
    cursor?: CambiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cambios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cambios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Cambios.
     */
    distinct?: CambiosScalarFieldEnum | CambiosScalarFieldEnum[]
  }


  /**
   * Cambios findMany
   */
  export type CambiosFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cambios
     */
    select?: CambiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CambiosInclude<ExtArgs> | null
    /**
     * Filter, which Cambios to fetch.
     */
    where?: CambiosWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Cambios to fetch.
     */
    orderBy?: CambiosOrderByWithRelationInput | CambiosOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Cambios.
     */
    cursor?: CambiosWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Cambios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Cambios.
     */
    skip?: number
    distinct?: CambiosScalarFieldEnum | CambiosScalarFieldEnum[]
  }


  /**
   * Cambios create
   */
  export type CambiosCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cambios
     */
    select?: CambiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CambiosInclude<ExtArgs> | null
    /**
     * The data needed to create a Cambios.
     */
    data: XOR<CambiosCreateInput, CambiosUncheckedCreateInput>
  }


  /**
   * Cambios createMany
   */
  export type CambiosCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Cambios.
     */
    data: CambiosCreateManyInput | CambiosCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Cambios update
   */
  export type CambiosUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cambios
     */
    select?: CambiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CambiosInclude<ExtArgs> | null
    /**
     * The data needed to update a Cambios.
     */
    data: XOR<CambiosUpdateInput, CambiosUncheckedUpdateInput>
    /**
     * Choose, which Cambios to update.
     */
    where: CambiosWhereUniqueInput
  }


  /**
   * Cambios updateMany
   */
  export type CambiosUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Cambios.
     */
    data: XOR<CambiosUpdateManyMutationInput, CambiosUncheckedUpdateManyInput>
    /**
     * Filter which Cambios to update
     */
    where?: CambiosWhereInput
  }


  /**
   * Cambios upsert
   */
  export type CambiosUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cambios
     */
    select?: CambiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CambiosInclude<ExtArgs> | null
    /**
     * The filter to search for the Cambios to update in case it exists.
     */
    where: CambiosWhereUniqueInput
    /**
     * In case the Cambios found by the `where` argument doesn't exist, create a new Cambios with this data.
     */
    create: XOR<CambiosCreateInput, CambiosUncheckedCreateInput>
    /**
     * In case the Cambios was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CambiosUpdateInput, CambiosUncheckedUpdateInput>
  }


  /**
   * Cambios delete
   */
  export type CambiosDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cambios
     */
    select?: CambiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CambiosInclude<ExtArgs> | null
    /**
     * Filter which Cambios to delete.
     */
    where: CambiosWhereUniqueInput
  }


  /**
   * Cambios deleteMany
   */
  export type CambiosDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Cambios to delete
     */
    where?: CambiosWhereInput
  }


  /**
   * Cambios without action
   */
  export type CambiosDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Cambios
     */
    select?: CambiosSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CambiosInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EstudiantesScalarFieldEnum: {
    pk_id_est: 'pk_id_est',
    txt_user_est: 'txt_user_est',
    txt_email_est: 'txt_email_est',
    txt_pass_est: 'txt_pass_est',
    num_sub_est: 'num_sub_est'
  };

  export type EstudiantesScalarFieldEnum = (typeof EstudiantesScalarFieldEnum)[keyof typeof EstudiantesScalarFieldEnum]


  export const BibliografiasScalarFieldEnum: {
    pk_id_biblio: 'pk_id_biblio',
    txt_tit_biblio: 'txt_tit_biblio',
    num_tip_biblio: 'num_tip_biblio',
    num_fmt_biblio: 'num_fmt_biblio',
    txt_fecha_biblio: 'txt_fecha_biblio',
    txt_aut_biblio: 'txt_aut_biblio',
    txt_edit_biblio: 'txt_edit_biblio',
    txt_dir_biblio: 'txt_dir_biblio',
    txt_pag_biblio: 'txt_pag_biblio',
    num_edic_biblio: 'num_edic_biblio',
    num_volm_biblio: 'num_volm_biblio',
    num_npag_biblio: 'num_npag_biblio',
    txt_ubic_biblio: 'txt_ubic_biblio',
    fk_id_grup: 'fk_id_grup',
    fk_id_carp: 'fk_id_carp',
    fk_id_est: 'fk_id_est'
  };

  export type BibliografiasScalarFieldEnum = (typeof BibliografiasScalarFieldEnum)[keyof typeof BibliografiasScalarFieldEnum]


  export const ArchivosScalarFieldEnum: {
    pk_id_arch: 'pk_id_arch',
    txt_dir_arch: 'txt_dir_arch',
    fk_id_biblio: 'fk_id_biblio'
  };

  export type ArchivosScalarFieldEnum = (typeof ArchivosScalarFieldEnum)[keyof typeof ArchivosScalarFieldEnum]


  export const CarpetasScalarFieldEnum: {
    pk_id_carp: 'pk_id_carp',
    txt_nom_carp: 'txt_nom_carp',
    fk_id_grup: 'fk_id_grup',
    fk_id_est: 'fk_id_est'
  };

  export type CarpetasScalarFieldEnum = (typeof CarpetasScalarFieldEnum)[keyof typeof CarpetasScalarFieldEnum]


  export const GrupoConAccesoScalarFieldEnum: {
    fk_id_grup: 'fk_id_grup',
    fk_id_est: 'fk_id_est'
  };

  export type GrupoConAccesoScalarFieldEnum = (typeof GrupoConAccesoScalarFieldEnum)[keyof typeof GrupoConAccesoScalarFieldEnum]


  export const GruposScalarFieldEnum: {
    pk_id_grup: 'pk_id_grup',
    txt_nom_grup: 'txt_nom_grup',
    fk_id_est: 'fk_id_est'
  };

  export type GruposScalarFieldEnum = (typeof GruposScalarFieldEnum)[keyof typeof GruposScalarFieldEnum]


  export const CambiosScalarFieldEnum: {
    pk_id_camb: 'pk_id_camb',
    num_tip_camb: 'num_tip_camb',
    txt_fecha_camb: 'txt_fecha_camb',
    fk_id_est: 'fk_id_est',
    fk_id_carp: 'fk_id_carp',
    fk_id_grup: 'fk_id_grup'
  };

  export type CambiosScalarFieldEnum = (typeof CambiosScalarFieldEnum)[keyof typeof CambiosScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EstudiantesWhereInput = {
    AND?: EstudiantesWhereInput | EstudiantesWhereInput[]
    OR?: EstudiantesWhereInput[]
    NOT?: EstudiantesWhereInput | EstudiantesWhereInput[]
    pk_id_est?: StringFilter<"Estudiantes"> | string
    txt_user_est?: StringFilter<"Estudiantes"> | string
    txt_email_est?: StringFilter<"Estudiantes"> | string
    txt_pass_est?: StringFilter<"Estudiantes"> | string
    num_sub_est?: IntFilter<"Estudiantes"> | number
    Cambios?: CambiosListRelationFilter
    Grupos?: GruposListRelationFilter
    GrupoConAcceso?: GrupoConAccesoListRelationFilter
    Carpetas?: CarpetasListRelationFilter
    Bibliografias?: BibliografiasListRelationFilter
  }

  export type EstudiantesOrderByWithRelationInput = {
    pk_id_est?: SortOrder
    txt_user_est?: SortOrder
    txt_email_est?: SortOrder
    txt_pass_est?: SortOrder
    num_sub_est?: SortOrder
    Cambios?: CambiosOrderByRelationAggregateInput
    Grupos?: GruposOrderByRelationAggregateInput
    GrupoConAcceso?: GrupoConAccesoOrderByRelationAggregateInput
    Carpetas?: CarpetasOrderByRelationAggregateInput
    Bibliografias?: BibliografiasOrderByRelationAggregateInput
  }

  export type EstudiantesWhereUniqueInput = Prisma.AtLeast<{
    pk_id_est?: string
    txt_user_est?: string
    txt_email_est?: string
    AND?: EstudiantesWhereInput | EstudiantesWhereInput[]
    OR?: EstudiantesWhereInput[]
    NOT?: EstudiantesWhereInput | EstudiantesWhereInput[]
    txt_pass_est?: StringFilter<"Estudiantes"> | string
    num_sub_est?: IntFilter<"Estudiantes"> | number
    Cambios?: CambiosListRelationFilter
    Grupos?: GruposListRelationFilter
    GrupoConAcceso?: GrupoConAccesoListRelationFilter
    Carpetas?: CarpetasListRelationFilter
    Bibliografias?: BibliografiasListRelationFilter
  }, "pk_id_est" | "txt_user_est" | "txt_email_est">

  export type EstudiantesOrderByWithAggregationInput = {
    pk_id_est?: SortOrder
    txt_user_est?: SortOrder
    txt_email_est?: SortOrder
    txt_pass_est?: SortOrder
    num_sub_est?: SortOrder
    _count?: EstudiantesCountOrderByAggregateInput
    _avg?: EstudiantesAvgOrderByAggregateInput
    _max?: EstudiantesMaxOrderByAggregateInput
    _min?: EstudiantesMinOrderByAggregateInput
    _sum?: EstudiantesSumOrderByAggregateInput
  }

  export type EstudiantesScalarWhereWithAggregatesInput = {
    AND?: EstudiantesScalarWhereWithAggregatesInput | EstudiantesScalarWhereWithAggregatesInput[]
    OR?: EstudiantesScalarWhereWithAggregatesInput[]
    NOT?: EstudiantesScalarWhereWithAggregatesInput | EstudiantesScalarWhereWithAggregatesInput[]
    pk_id_est?: StringWithAggregatesFilter<"Estudiantes"> | string
    txt_user_est?: StringWithAggregatesFilter<"Estudiantes"> | string
    txt_email_est?: StringWithAggregatesFilter<"Estudiantes"> | string
    txt_pass_est?: StringWithAggregatesFilter<"Estudiantes"> | string
    num_sub_est?: IntWithAggregatesFilter<"Estudiantes"> | number
  }

  export type BibliografiasWhereInput = {
    AND?: BibliografiasWhereInput | BibliografiasWhereInput[]
    OR?: BibliografiasWhereInput[]
    NOT?: BibliografiasWhereInput | BibliografiasWhereInput[]
    pk_id_biblio?: IntFilter<"Bibliografias"> | number
    txt_tit_biblio?: StringFilter<"Bibliografias"> | string
    num_tip_biblio?: IntFilter<"Bibliografias"> | number
    num_fmt_biblio?: IntFilter<"Bibliografias"> | number
    txt_fecha_biblio?: DateTimeFilter<"Bibliografias"> | Date | string
    txt_aut_biblio?: StringFilter<"Bibliografias"> | string
    txt_edit_biblio?: StringNullableFilter<"Bibliografias"> | string | null
    txt_dir_biblio?: StringNullableFilter<"Bibliografias"> | string | null
    txt_pag_biblio?: StringNullableFilter<"Bibliografias"> | string | null
    num_edic_biblio?: IntNullableFilter<"Bibliografias"> | number | null
    num_volm_biblio?: IntNullableFilter<"Bibliografias"> | number | null
    num_npag_biblio?: IntNullableFilter<"Bibliografias"> | number | null
    txt_ubic_biblio?: StringNullableFilter<"Bibliografias"> | string | null
    fk_id_grup?: IntFilter<"Bibliografias"> | number
    fk_id_carp?: IntFilter<"Bibliografias"> | number
    fk_id_est?: StringFilter<"Bibliografias"> | string
    Grupo?: XOR<GruposRelationFilter, GruposWhereInput>
    Carpeta?: XOR<CarpetasRelationFilter, CarpetasWhereInput>
    Estudiante?: XOR<EstudiantesRelationFilter, EstudiantesWhereInput>
    Archivos?: ArchivosListRelationFilter
  }

  export type BibliografiasOrderByWithRelationInput = {
    pk_id_biblio?: SortOrder
    txt_tit_biblio?: SortOrder
    num_tip_biblio?: SortOrder
    num_fmt_biblio?: SortOrder
    txt_fecha_biblio?: SortOrder
    txt_aut_biblio?: SortOrder
    txt_edit_biblio?: SortOrderInput | SortOrder
    txt_dir_biblio?: SortOrderInput | SortOrder
    txt_pag_biblio?: SortOrderInput | SortOrder
    num_edic_biblio?: SortOrderInput | SortOrder
    num_volm_biblio?: SortOrderInput | SortOrder
    num_npag_biblio?: SortOrderInput | SortOrder
    txt_ubic_biblio?: SortOrderInput | SortOrder
    fk_id_grup?: SortOrder
    fk_id_carp?: SortOrder
    fk_id_est?: SortOrder
    Grupo?: GruposOrderByWithRelationInput
    Carpeta?: CarpetasOrderByWithRelationInput
    Estudiante?: EstudiantesOrderByWithRelationInput
    Archivos?: ArchivosOrderByRelationAggregateInput
  }

  export type BibliografiasWhereUniqueInput = Prisma.AtLeast<{
    pk_id_biblio?: number
    AND?: BibliografiasWhereInput | BibliografiasWhereInput[]
    OR?: BibliografiasWhereInput[]
    NOT?: BibliografiasWhereInput | BibliografiasWhereInput[]
    txt_tit_biblio?: StringFilter<"Bibliografias"> | string
    num_tip_biblio?: IntFilter<"Bibliografias"> | number
    num_fmt_biblio?: IntFilter<"Bibliografias"> | number
    txt_fecha_biblio?: DateTimeFilter<"Bibliografias"> | Date | string
    txt_aut_biblio?: StringFilter<"Bibliografias"> | string
    txt_edit_biblio?: StringNullableFilter<"Bibliografias"> | string | null
    txt_dir_biblio?: StringNullableFilter<"Bibliografias"> | string | null
    txt_pag_biblio?: StringNullableFilter<"Bibliografias"> | string | null
    num_edic_biblio?: IntNullableFilter<"Bibliografias"> | number | null
    num_volm_biblio?: IntNullableFilter<"Bibliografias"> | number | null
    num_npag_biblio?: IntNullableFilter<"Bibliografias"> | number | null
    txt_ubic_biblio?: StringNullableFilter<"Bibliografias"> | string | null
    fk_id_grup?: IntFilter<"Bibliografias"> | number
    fk_id_carp?: IntFilter<"Bibliografias"> | number
    fk_id_est?: StringFilter<"Bibliografias"> | string
    Grupo?: XOR<GruposRelationFilter, GruposWhereInput>
    Carpeta?: XOR<CarpetasRelationFilter, CarpetasWhereInput>
    Estudiante?: XOR<EstudiantesRelationFilter, EstudiantesWhereInput>
    Archivos?: ArchivosListRelationFilter
  }, "pk_id_biblio">

  export type BibliografiasOrderByWithAggregationInput = {
    pk_id_biblio?: SortOrder
    txt_tit_biblio?: SortOrder
    num_tip_biblio?: SortOrder
    num_fmt_biblio?: SortOrder
    txt_fecha_biblio?: SortOrder
    txt_aut_biblio?: SortOrder
    txt_edit_biblio?: SortOrderInput | SortOrder
    txt_dir_biblio?: SortOrderInput | SortOrder
    txt_pag_biblio?: SortOrderInput | SortOrder
    num_edic_biblio?: SortOrderInput | SortOrder
    num_volm_biblio?: SortOrderInput | SortOrder
    num_npag_biblio?: SortOrderInput | SortOrder
    txt_ubic_biblio?: SortOrderInput | SortOrder
    fk_id_grup?: SortOrder
    fk_id_carp?: SortOrder
    fk_id_est?: SortOrder
    _count?: BibliografiasCountOrderByAggregateInput
    _avg?: BibliografiasAvgOrderByAggregateInput
    _max?: BibliografiasMaxOrderByAggregateInput
    _min?: BibliografiasMinOrderByAggregateInput
    _sum?: BibliografiasSumOrderByAggregateInput
  }

  export type BibliografiasScalarWhereWithAggregatesInput = {
    AND?: BibliografiasScalarWhereWithAggregatesInput | BibliografiasScalarWhereWithAggregatesInput[]
    OR?: BibliografiasScalarWhereWithAggregatesInput[]
    NOT?: BibliografiasScalarWhereWithAggregatesInput | BibliografiasScalarWhereWithAggregatesInput[]
    pk_id_biblio?: IntWithAggregatesFilter<"Bibliografias"> | number
    txt_tit_biblio?: StringWithAggregatesFilter<"Bibliografias"> | string
    num_tip_biblio?: IntWithAggregatesFilter<"Bibliografias"> | number
    num_fmt_biblio?: IntWithAggregatesFilter<"Bibliografias"> | number
    txt_fecha_biblio?: DateTimeWithAggregatesFilter<"Bibliografias"> | Date | string
    txt_aut_biblio?: StringWithAggregatesFilter<"Bibliografias"> | string
    txt_edit_biblio?: StringNullableWithAggregatesFilter<"Bibliografias"> | string | null
    txt_dir_biblio?: StringNullableWithAggregatesFilter<"Bibliografias"> | string | null
    txt_pag_biblio?: StringNullableWithAggregatesFilter<"Bibliografias"> | string | null
    num_edic_biblio?: IntNullableWithAggregatesFilter<"Bibliografias"> | number | null
    num_volm_biblio?: IntNullableWithAggregatesFilter<"Bibliografias"> | number | null
    num_npag_biblio?: IntNullableWithAggregatesFilter<"Bibliografias"> | number | null
    txt_ubic_biblio?: StringNullableWithAggregatesFilter<"Bibliografias"> | string | null
    fk_id_grup?: IntWithAggregatesFilter<"Bibliografias"> | number
    fk_id_carp?: IntWithAggregatesFilter<"Bibliografias"> | number
    fk_id_est?: StringWithAggregatesFilter<"Bibliografias"> | string
  }

  export type ArchivosWhereInput = {
    AND?: ArchivosWhereInput | ArchivosWhereInput[]
    OR?: ArchivosWhereInput[]
    NOT?: ArchivosWhereInput | ArchivosWhereInput[]
    pk_id_arch?: IntFilter<"Archivos"> | number
    txt_dir_arch?: StringFilter<"Archivos"> | string
    fk_id_biblio?: IntFilter<"Archivos"> | number
    Bibliografias?: XOR<BibliografiasRelationFilter, BibliografiasWhereInput>
  }

  export type ArchivosOrderByWithRelationInput = {
    pk_id_arch?: SortOrder
    txt_dir_arch?: SortOrder
    fk_id_biblio?: SortOrder
    Bibliografias?: BibliografiasOrderByWithRelationInput
  }

  export type ArchivosWhereUniqueInput = Prisma.AtLeast<{
    pk_id_arch?: number
    AND?: ArchivosWhereInput | ArchivosWhereInput[]
    OR?: ArchivosWhereInput[]
    NOT?: ArchivosWhereInput | ArchivosWhereInput[]
    txt_dir_arch?: StringFilter<"Archivos"> | string
    fk_id_biblio?: IntFilter<"Archivos"> | number
    Bibliografias?: XOR<BibliografiasRelationFilter, BibliografiasWhereInput>
  }, "pk_id_arch">

  export type ArchivosOrderByWithAggregationInput = {
    pk_id_arch?: SortOrder
    txt_dir_arch?: SortOrder
    fk_id_biblio?: SortOrder
    _count?: ArchivosCountOrderByAggregateInput
    _avg?: ArchivosAvgOrderByAggregateInput
    _max?: ArchivosMaxOrderByAggregateInput
    _min?: ArchivosMinOrderByAggregateInput
    _sum?: ArchivosSumOrderByAggregateInput
  }

  export type ArchivosScalarWhereWithAggregatesInput = {
    AND?: ArchivosScalarWhereWithAggregatesInput | ArchivosScalarWhereWithAggregatesInput[]
    OR?: ArchivosScalarWhereWithAggregatesInput[]
    NOT?: ArchivosScalarWhereWithAggregatesInput | ArchivosScalarWhereWithAggregatesInput[]
    pk_id_arch?: IntWithAggregatesFilter<"Archivos"> | number
    txt_dir_arch?: StringWithAggregatesFilter<"Archivos"> | string
    fk_id_biblio?: IntWithAggregatesFilter<"Archivos"> | number
  }

  export type CarpetasWhereInput = {
    AND?: CarpetasWhereInput | CarpetasWhereInput[]
    OR?: CarpetasWhereInput[]
    NOT?: CarpetasWhereInput | CarpetasWhereInput[]
    pk_id_carp?: IntFilter<"Carpetas"> | number
    txt_nom_carp?: StringFilter<"Carpetas"> | string
    fk_id_grup?: IntFilter<"Carpetas"> | number
    fk_id_est?: StringFilter<"Carpetas"> | string
    Grupo?: XOR<GruposRelationFilter, GruposWhereInput>
    Estudiante?: XOR<EstudiantesRelationFilter, EstudiantesWhereInput>
    Cambios?: CambiosListRelationFilter
    Bibliografias?: BibliografiasListRelationFilter
  }

  export type CarpetasOrderByWithRelationInput = {
    pk_id_carp?: SortOrder
    txt_nom_carp?: SortOrder
    fk_id_grup?: SortOrder
    fk_id_est?: SortOrder
    Grupo?: GruposOrderByWithRelationInput
    Estudiante?: EstudiantesOrderByWithRelationInput
    Cambios?: CambiosOrderByRelationAggregateInput
    Bibliografias?: BibliografiasOrderByRelationAggregateInput
  }

  export type CarpetasWhereUniqueInput = Prisma.AtLeast<{
    pk_id_carp?: number
    AND?: CarpetasWhereInput | CarpetasWhereInput[]
    OR?: CarpetasWhereInput[]
    NOT?: CarpetasWhereInput | CarpetasWhereInput[]
    txt_nom_carp?: StringFilter<"Carpetas"> | string
    fk_id_grup?: IntFilter<"Carpetas"> | number
    fk_id_est?: StringFilter<"Carpetas"> | string
    Grupo?: XOR<GruposRelationFilter, GruposWhereInput>
    Estudiante?: XOR<EstudiantesRelationFilter, EstudiantesWhereInput>
    Cambios?: CambiosListRelationFilter
    Bibliografias?: BibliografiasListRelationFilter
  }, "pk_id_carp">

  export type CarpetasOrderByWithAggregationInput = {
    pk_id_carp?: SortOrder
    txt_nom_carp?: SortOrder
    fk_id_grup?: SortOrder
    fk_id_est?: SortOrder
    _count?: CarpetasCountOrderByAggregateInput
    _avg?: CarpetasAvgOrderByAggregateInput
    _max?: CarpetasMaxOrderByAggregateInput
    _min?: CarpetasMinOrderByAggregateInput
    _sum?: CarpetasSumOrderByAggregateInput
  }

  export type CarpetasScalarWhereWithAggregatesInput = {
    AND?: CarpetasScalarWhereWithAggregatesInput | CarpetasScalarWhereWithAggregatesInput[]
    OR?: CarpetasScalarWhereWithAggregatesInput[]
    NOT?: CarpetasScalarWhereWithAggregatesInput | CarpetasScalarWhereWithAggregatesInput[]
    pk_id_carp?: IntWithAggregatesFilter<"Carpetas"> | number
    txt_nom_carp?: StringWithAggregatesFilter<"Carpetas"> | string
    fk_id_grup?: IntWithAggregatesFilter<"Carpetas"> | number
    fk_id_est?: StringWithAggregatesFilter<"Carpetas"> | string
  }

  export type GrupoConAccesoWhereInput = {
    AND?: GrupoConAccesoWhereInput | GrupoConAccesoWhereInput[]
    OR?: GrupoConAccesoWhereInput[]
    NOT?: GrupoConAccesoWhereInput | GrupoConAccesoWhereInput[]
    fk_id_grup?: IntFilter<"GrupoConAcceso"> | number
    fk_id_est?: StringFilter<"GrupoConAcceso"> | string
    Grupo?: XOR<GruposRelationFilter, GruposWhereInput>
    Estudiante?: XOR<EstudiantesRelationFilter, EstudiantesWhereInput>
  }

  export type GrupoConAccesoOrderByWithRelationInput = {
    fk_id_grup?: SortOrder
    fk_id_est?: SortOrder
    Grupo?: GruposOrderByWithRelationInput
    Estudiante?: EstudiantesOrderByWithRelationInput
  }

  export type GrupoConAccesoWhereUniqueInput = Prisma.AtLeast<{
    fk_id_grup_fk_id_est?: GrupoConAccesoFk_id_grupFk_id_estCompoundUniqueInput
    AND?: GrupoConAccesoWhereInput | GrupoConAccesoWhereInput[]
    OR?: GrupoConAccesoWhereInput[]
    NOT?: GrupoConAccesoWhereInput | GrupoConAccesoWhereInput[]
    fk_id_grup?: IntFilter<"GrupoConAcceso"> | number
    fk_id_est?: StringFilter<"GrupoConAcceso"> | string
    Grupo?: XOR<GruposRelationFilter, GruposWhereInput>
    Estudiante?: XOR<EstudiantesRelationFilter, EstudiantesWhereInput>
  }, "fk_id_grup_fk_id_est">

  export type GrupoConAccesoOrderByWithAggregationInput = {
    fk_id_grup?: SortOrder
    fk_id_est?: SortOrder
    _count?: GrupoConAccesoCountOrderByAggregateInput
    _avg?: GrupoConAccesoAvgOrderByAggregateInput
    _max?: GrupoConAccesoMaxOrderByAggregateInput
    _min?: GrupoConAccesoMinOrderByAggregateInput
    _sum?: GrupoConAccesoSumOrderByAggregateInput
  }

  export type GrupoConAccesoScalarWhereWithAggregatesInput = {
    AND?: GrupoConAccesoScalarWhereWithAggregatesInput | GrupoConAccesoScalarWhereWithAggregatesInput[]
    OR?: GrupoConAccesoScalarWhereWithAggregatesInput[]
    NOT?: GrupoConAccesoScalarWhereWithAggregatesInput | GrupoConAccesoScalarWhereWithAggregatesInput[]
    fk_id_grup?: IntWithAggregatesFilter<"GrupoConAcceso"> | number
    fk_id_est?: StringWithAggregatesFilter<"GrupoConAcceso"> | string
  }

  export type GruposWhereInput = {
    AND?: GruposWhereInput | GruposWhereInput[]
    OR?: GruposWhereInput[]
    NOT?: GruposWhereInput | GruposWhereInput[]
    pk_id_grup?: IntFilter<"Grupos"> | number
    txt_nom_grup?: StringFilter<"Grupos"> | string
    fk_id_est?: StringFilter<"Grupos"> | string
    Estudiante?: XOR<EstudiantesRelationFilter, EstudiantesWhereInput>
    Cambios?: CambiosListRelationFilter
    Carpetas?: CarpetasListRelationFilter
    Bibliografias?: BibliografiasListRelationFilter
    GrupoConAcceso?: GrupoConAccesoListRelationFilter
  }

  export type GruposOrderByWithRelationInput = {
    pk_id_grup?: SortOrder
    txt_nom_grup?: SortOrder
    fk_id_est?: SortOrder
    Estudiante?: EstudiantesOrderByWithRelationInput
    Cambios?: CambiosOrderByRelationAggregateInput
    Carpetas?: CarpetasOrderByRelationAggregateInput
    Bibliografias?: BibliografiasOrderByRelationAggregateInput
    GrupoConAcceso?: GrupoConAccesoOrderByRelationAggregateInput
  }

  export type GruposWhereUniqueInput = Prisma.AtLeast<{
    pk_id_grup?: number
    AND?: GruposWhereInput | GruposWhereInput[]
    OR?: GruposWhereInput[]
    NOT?: GruposWhereInput | GruposWhereInput[]
    txt_nom_grup?: StringFilter<"Grupos"> | string
    fk_id_est?: StringFilter<"Grupos"> | string
    Estudiante?: XOR<EstudiantesRelationFilter, EstudiantesWhereInput>
    Cambios?: CambiosListRelationFilter
    Carpetas?: CarpetasListRelationFilter
    Bibliografias?: BibliografiasListRelationFilter
    GrupoConAcceso?: GrupoConAccesoListRelationFilter
  }, "pk_id_grup">

  export type GruposOrderByWithAggregationInput = {
    pk_id_grup?: SortOrder
    txt_nom_grup?: SortOrder
    fk_id_est?: SortOrder
    _count?: GruposCountOrderByAggregateInput
    _avg?: GruposAvgOrderByAggregateInput
    _max?: GruposMaxOrderByAggregateInput
    _min?: GruposMinOrderByAggregateInput
    _sum?: GruposSumOrderByAggregateInput
  }

  export type GruposScalarWhereWithAggregatesInput = {
    AND?: GruposScalarWhereWithAggregatesInput | GruposScalarWhereWithAggregatesInput[]
    OR?: GruposScalarWhereWithAggregatesInput[]
    NOT?: GruposScalarWhereWithAggregatesInput | GruposScalarWhereWithAggregatesInput[]
    pk_id_grup?: IntWithAggregatesFilter<"Grupos"> | number
    txt_nom_grup?: StringWithAggregatesFilter<"Grupos"> | string
    fk_id_est?: StringWithAggregatesFilter<"Grupos"> | string
  }

  export type CambiosWhereInput = {
    AND?: CambiosWhereInput | CambiosWhereInput[]
    OR?: CambiosWhereInput[]
    NOT?: CambiosWhereInput | CambiosWhereInput[]
    pk_id_camb?: IntFilter<"Cambios"> | number
    num_tip_camb?: IntFilter<"Cambios"> | number
    txt_fecha_camb?: DateTimeFilter<"Cambios"> | Date | string
    fk_id_est?: StringFilter<"Cambios"> | string
    fk_id_carp?: IntFilter<"Cambios"> | number
    fk_id_grup?: IntFilter<"Cambios"> | number
    Estudiante?: XOR<EstudiantesRelationFilter, EstudiantesWhereInput>
    Carpeta?: XOR<CarpetasRelationFilter, CarpetasWhereInput>
    Grupo?: XOR<GruposRelationFilter, GruposWhereInput>
  }

  export type CambiosOrderByWithRelationInput = {
    pk_id_camb?: SortOrder
    num_tip_camb?: SortOrder
    txt_fecha_camb?: SortOrder
    fk_id_est?: SortOrder
    fk_id_carp?: SortOrder
    fk_id_grup?: SortOrder
    Estudiante?: EstudiantesOrderByWithRelationInput
    Carpeta?: CarpetasOrderByWithRelationInput
    Grupo?: GruposOrderByWithRelationInput
  }

  export type CambiosWhereUniqueInput = Prisma.AtLeast<{
    pk_id_camb?: number
    AND?: CambiosWhereInput | CambiosWhereInput[]
    OR?: CambiosWhereInput[]
    NOT?: CambiosWhereInput | CambiosWhereInput[]
    num_tip_camb?: IntFilter<"Cambios"> | number
    txt_fecha_camb?: DateTimeFilter<"Cambios"> | Date | string
    fk_id_est?: StringFilter<"Cambios"> | string
    fk_id_carp?: IntFilter<"Cambios"> | number
    fk_id_grup?: IntFilter<"Cambios"> | number
    Estudiante?: XOR<EstudiantesRelationFilter, EstudiantesWhereInput>
    Carpeta?: XOR<CarpetasRelationFilter, CarpetasWhereInput>
    Grupo?: XOR<GruposRelationFilter, GruposWhereInput>
  }, "pk_id_camb">

  export type CambiosOrderByWithAggregationInput = {
    pk_id_camb?: SortOrder
    num_tip_camb?: SortOrder
    txt_fecha_camb?: SortOrder
    fk_id_est?: SortOrder
    fk_id_carp?: SortOrder
    fk_id_grup?: SortOrder
    _count?: CambiosCountOrderByAggregateInput
    _avg?: CambiosAvgOrderByAggregateInput
    _max?: CambiosMaxOrderByAggregateInput
    _min?: CambiosMinOrderByAggregateInput
    _sum?: CambiosSumOrderByAggregateInput
  }

  export type CambiosScalarWhereWithAggregatesInput = {
    AND?: CambiosScalarWhereWithAggregatesInput | CambiosScalarWhereWithAggregatesInput[]
    OR?: CambiosScalarWhereWithAggregatesInput[]
    NOT?: CambiosScalarWhereWithAggregatesInput | CambiosScalarWhereWithAggregatesInput[]
    pk_id_camb?: IntWithAggregatesFilter<"Cambios"> | number
    num_tip_camb?: IntWithAggregatesFilter<"Cambios"> | number
    txt_fecha_camb?: DateTimeWithAggregatesFilter<"Cambios"> | Date | string
    fk_id_est?: StringWithAggregatesFilter<"Cambios"> | string
    fk_id_carp?: IntWithAggregatesFilter<"Cambios"> | number
    fk_id_grup?: IntWithAggregatesFilter<"Cambios"> | number
  }

  export type EstudiantesCreateInput = {
    pk_id_est?: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est?: number
    Cambios?: CambiosCreateNestedManyWithoutEstudianteInput
    Grupos?: GruposCreateNestedManyWithoutEstudianteInput
    GrupoConAcceso?: GrupoConAccesoCreateNestedManyWithoutEstudianteInput
    Carpetas?: CarpetasCreateNestedManyWithoutEstudianteInput
    Bibliografias?: BibliografiasCreateNestedManyWithoutEstudianteInput
  }

  export type EstudiantesUncheckedCreateInput = {
    pk_id_est?: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est?: number
    Cambios?: CambiosUncheckedCreateNestedManyWithoutEstudianteInput
    Grupos?: GruposUncheckedCreateNestedManyWithoutEstudianteInput
    GrupoConAcceso?: GrupoConAccesoUncheckedCreateNestedManyWithoutEstudianteInput
    Carpetas?: CarpetasUncheckedCreateNestedManyWithoutEstudianteInput
    Bibliografias?: BibliografiasUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudiantesUpdateInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
    Cambios?: CambiosUpdateManyWithoutEstudianteNestedInput
    Grupos?: GruposUpdateManyWithoutEstudianteNestedInput
    GrupoConAcceso?: GrupoConAccesoUpdateManyWithoutEstudianteNestedInput
    Carpetas?: CarpetasUpdateManyWithoutEstudianteNestedInput
    Bibliografias?: BibliografiasUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudiantesUncheckedUpdateInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
    Cambios?: CambiosUncheckedUpdateManyWithoutEstudianteNestedInput
    Grupos?: GruposUncheckedUpdateManyWithoutEstudianteNestedInput
    GrupoConAcceso?: GrupoConAccesoUncheckedUpdateManyWithoutEstudianteNestedInput
    Carpetas?: CarpetasUncheckedUpdateManyWithoutEstudianteNestedInput
    Bibliografias?: BibliografiasUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudiantesCreateManyInput = {
    pk_id_est?: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est?: number
  }

  export type EstudiantesUpdateManyMutationInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
  }

  export type EstudiantesUncheckedUpdateManyInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
  }

  export type BibliografiasCreateInput = {
    txt_tit_biblio: string
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: Date | string
    txt_aut_biblio: string
    txt_edit_biblio?: string | null
    txt_dir_biblio?: string | null
    txt_pag_biblio?: string | null
    num_edic_biblio?: number | null
    num_volm_biblio?: number | null
    num_npag_biblio?: number | null
    txt_ubic_biblio?: string | null
    Grupo: GruposCreateNestedOneWithoutBibliografiasInput
    Carpeta: CarpetasCreateNestedOneWithoutBibliografiasInput
    Estudiante: EstudiantesCreateNestedOneWithoutBibliografiasInput
    Archivos?: ArchivosCreateNestedManyWithoutBibliografiasInput
  }

  export type BibliografiasUncheckedCreateInput = {
    pk_id_biblio?: number
    txt_tit_biblio: string
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: Date | string
    txt_aut_biblio: string
    txt_edit_biblio?: string | null
    txt_dir_biblio?: string | null
    txt_pag_biblio?: string | null
    num_edic_biblio?: number | null
    num_volm_biblio?: number | null
    num_npag_biblio?: number | null
    txt_ubic_biblio?: string | null
    fk_id_grup: number
    fk_id_carp: number
    fk_id_est: string
    Archivos?: ArchivosUncheckedCreateNestedManyWithoutBibliografiasInput
  }

  export type BibliografiasUpdateInput = {
    txt_tit_biblio?: StringFieldUpdateOperationsInput | string
    num_tip_biblio?: IntFieldUpdateOperationsInput | number
    num_fmt_biblio?: IntFieldUpdateOperationsInput | number
    txt_fecha_biblio?: DateTimeFieldUpdateOperationsInput | Date | string
    txt_aut_biblio?: StringFieldUpdateOperationsInput | string
    txt_edit_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_dir_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_pag_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    num_edic_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_volm_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_npag_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    txt_ubic_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    Grupo?: GruposUpdateOneRequiredWithoutBibliografiasNestedInput
    Carpeta?: CarpetasUpdateOneRequiredWithoutBibliografiasNestedInput
    Estudiante?: EstudiantesUpdateOneRequiredWithoutBibliografiasNestedInput
    Archivos?: ArchivosUpdateManyWithoutBibliografiasNestedInput
  }

  export type BibliografiasUncheckedUpdateInput = {
    pk_id_biblio?: IntFieldUpdateOperationsInput | number
    txt_tit_biblio?: StringFieldUpdateOperationsInput | string
    num_tip_biblio?: IntFieldUpdateOperationsInput | number
    num_fmt_biblio?: IntFieldUpdateOperationsInput | number
    txt_fecha_biblio?: DateTimeFieldUpdateOperationsInput | Date | string
    txt_aut_biblio?: StringFieldUpdateOperationsInput | string
    txt_edit_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_dir_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_pag_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    num_edic_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_volm_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_npag_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    txt_ubic_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_grup?: IntFieldUpdateOperationsInput | number
    fk_id_carp?: IntFieldUpdateOperationsInput | number
    fk_id_est?: StringFieldUpdateOperationsInput | string
    Archivos?: ArchivosUncheckedUpdateManyWithoutBibliografiasNestedInput
  }

  export type BibliografiasCreateManyInput = {
    pk_id_biblio?: number
    txt_tit_biblio: string
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: Date | string
    txt_aut_biblio: string
    txt_edit_biblio?: string | null
    txt_dir_biblio?: string | null
    txt_pag_biblio?: string | null
    num_edic_biblio?: number | null
    num_volm_biblio?: number | null
    num_npag_biblio?: number | null
    txt_ubic_biblio?: string | null
    fk_id_grup: number
    fk_id_carp: number
    fk_id_est: string
  }

  export type BibliografiasUpdateManyMutationInput = {
    txt_tit_biblio?: StringFieldUpdateOperationsInput | string
    num_tip_biblio?: IntFieldUpdateOperationsInput | number
    num_fmt_biblio?: IntFieldUpdateOperationsInput | number
    txt_fecha_biblio?: DateTimeFieldUpdateOperationsInput | Date | string
    txt_aut_biblio?: StringFieldUpdateOperationsInput | string
    txt_edit_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_dir_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_pag_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    num_edic_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_volm_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_npag_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    txt_ubic_biblio?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type BibliografiasUncheckedUpdateManyInput = {
    pk_id_biblio?: IntFieldUpdateOperationsInput | number
    txt_tit_biblio?: StringFieldUpdateOperationsInput | string
    num_tip_biblio?: IntFieldUpdateOperationsInput | number
    num_fmt_biblio?: IntFieldUpdateOperationsInput | number
    txt_fecha_biblio?: DateTimeFieldUpdateOperationsInput | Date | string
    txt_aut_biblio?: StringFieldUpdateOperationsInput | string
    txt_edit_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_dir_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_pag_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    num_edic_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_volm_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_npag_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    txt_ubic_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_grup?: IntFieldUpdateOperationsInput | number
    fk_id_carp?: IntFieldUpdateOperationsInput | number
    fk_id_est?: StringFieldUpdateOperationsInput | string
  }

  export type ArchivosCreateInput = {
    txt_dir_arch: string
    Bibliografias: BibliografiasCreateNestedOneWithoutArchivosInput
  }

  export type ArchivosUncheckedCreateInput = {
    pk_id_arch?: number
    txt_dir_arch: string
    fk_id_biblio: number
  }

  export type ArchivosUpdateInput = {
    txt_dir_arch?: StringFieldUpdateOperationsInput | string
    Bibliografias?: BibliografiasUpdateOneRequiredWithoutArchivosNestedInput
  }

  export type ArchivosUncheckedUpdateInput = {
    pk_id_arch?: IntFieldUpdateOperationsInput | number
    txt_dir_arch?: StringFieldUpdateOperationsInput | string
    fk_id_biblio?: IntFieldUpdateOperationsInput | number
  }

  export type ArchivosCreateManyInput = {
    pk_id_arch?: number
    txt_dir_arch: string
    fk_id_biblio: number
  }

  export type ArchivosUpdateManyMutationInput = {
    txt_dir_arch?: StringFieldUpdateOperationsInput | string
  }

  export type ArchivosUncheckedUpdateManyInput = {
    pk_id_arch?: IntFieldUpdateOperationsInput | number
    txt_dir_arch?: StringFieldUpdateOperationsInput | string
    fk_id_biblio?: IntFieldUpdateOperationsInput | number
  }

  export type CarpetasCreateInput = {
    txt_nom_carp: string
    Grupo: GruposCreateNestedOneWithoutCarpetasInput
    Estudiante: EstudiantesCreateNestedOneWithoutCarpetasInput
    Cambios?: CambiosCreateNestedManyWithoutCarpetaInput
    Bibliografias?: BibliografiasCreateNestedManyWithoutCarpetaInput
  }

  export type CarpetasUncheckedCreateInput = {
    pk_id_carp?: number
    txt_nom_carp: string
    fk_id_grup: number
    fk_id_est: string
    Cambios?: CambiosUncheckedCreateNestedManyWithoutCarpetaInput
    Bibliografias?: BibliografiasUncheckedCreateNestedManyWithoutCarpetaInput
  }

  export type CarpetasUpdateInput = {
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    Grupo?: GruposUpdateOneRequiredWithoutCarpetasNestedInput
    Estudiante?: EstudiantesUpdateOneRequiredWithoutCarpetasNestedInput
    Cambios?: CambiosUpdateManyWithoutCarpetaNestedInput
    Bibliografias?: BibliografiasUpdateManyWithoutCarpetaNestedInput
  }

  export type CarpetasUncheckedUpdateInput = {
    pk_id_carp?: IntFieldUpdateOperationsInput | number
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    fk_id_grup?: IntFieldUpdateOperationsInput | number
    fk_id_est?: StringFieldUpdateOperationsInput | string
    Cambios?: CambiosUncheckedUpdateManyWithoutCarpetaNestedInput
    Bibliografias?: BibliografiasUncheckedUpdateManyWithoutCarpetaNestedInput
  }

  export type CarpetasCreateManyInput = {
    pk_id_carp?: number
    txt_nom_carp: string
    fk_id_grup: number
    fk_id_est: string
  }

  export type CarpetasUpdateManyMutationInput = {
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
  }

  export type CarpetasUncheckedUpdateManyInput = {
    pk_id_carp?: IntFieldUpdateOperationsInput | number
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    fk_id_grup?: IntFieldUpdateOperationsInput | number
    fk_id_est?: StringFieldUpdateOperationsInput | string
  }

  export type GrupoConAccesoCreateInput = {
    Grupo: GruposCreateNestedOneWithoutGrupoConAccesoInput
    Estudiante: EstudiantesCreateNestedOneWithoutGrupoConAccesoInput
  }

  export type GrupoConAccesoUncheckedCreateInput = {
    fk_id_grup: number
    fk_id_est: string
  }

  export type GrupoConAccesoUpdateInput = {
    Grupo?: GruposUpdateOneRequiredWithoutGrupoConAccesoNestedInput
    Estudiante?: EstudiantesUpdateOneRequiredWithoutGrupoConAccesoNestedInput
  }

  export type GrupoConAccesoUncheckedUpdateInput = {
    fk_id_grup?: IntFieldUpdateOperationsInput | number
    fk_id_est?: StringFieldUpdateOperationsInput | string
  }

  export type GrupoConAccesoCreateManyInput = {
    fk_id_grup: number
    fk_id_est: string
  }

  export type GrupoConAccesoUpdateManyMutationInput = {

  }

  export type GrupoConAccesoUncheckedUpdateManyInput = {
    fk_id_grup?: IntFieldUpdateOperationsInput | number
    fk_id_est?: StringFieldUpdateOperationsInput | string
  }

  export type GruposCreateInput = {
    txt_nom_grup: string
    Estudiante: EstudiantesCreateNestedOneWithoutGruposInput
    Cambios?: CambiosCreateNestedManyWithoutGrupoInput
    Carpetas?: CarpetasCreateNestedManyWithoutGrupoInput
    Bibliografias?: BibliografiasCreateNestedManyWithoutGrupoInput
    GrupoConAcceso?: GrupoConAccesoCreateNestedManyWithoutGrupoInput
  }

  export type GruposUncheckedCreateInput = {
    pk_id_grup?: number
    txt_nom_grup: string
    fk_id_est: string
    Cambios?: CambiosUncheckedCreateNestedManyWithoutGrupoInput
    Carpetas?: CarpetasUncheckedCreateNestedManyWithoutGrupoInput
    Bibliografias?: BibliografiasUncheckedCreateNestedManyWithoutGrupoInput
    GrupoConAcceso?: GrupoConAccesoUncheckedCreateNestedManyWithoutGrupoInput
  }

  export type GruposUpdateInput = {
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
    Estudiante?: EstudiantesUpdateOneRequiredWithoutGruposNestedInput
    Cambios?: CambiosUpdateManyWithoutGrupoNestedInput
    Carpetas?: CarpetasUpdateManyWithoutGrupoNestedInput
    Bibliografias?: BibliografiasUpdateManyWithoutGrupoNestedInput
    GrupoConAcceso?: GrupoConAccesoUpdateManyWithoutGrupoNestedInput
  }

  export type GruposUncheckedUpdateInput = {
    pk_id_grup?: IntFieldUpdateOperationsInput | number
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
    fk_id_est?: StringFieldUpdateOperationsInput | string
    Cambios?: CambiosUncheckedUpdateManyWithoutGrupoNestedInput
    Carpetas?: CarpetasUncheckedUpdateManyWithoutGrupoNestedInput
    Bibliografias?: BibliografiasUncheckedUpdateManyWithoutGrupoNestedInput
    GrupoConAcceso?: GrupoConAccesoUncheckedUpdateManyWithoutGrupoNestedInput
  }

  export type GruposCreateManyInput = {
    pk_id_grup?: number
    txt_nom_grup: string
    fk_id_est: string
  }

  export type GruposUpdateManyMutationInput = {
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
  }

  export type GruposUncheckedUpdateManyInput = {
    pk_id_grup?: IntFieldUpdateOperationsInput | number
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
    fk_id_est?: StringFieldUpdateOperationsInput | string
  }

  export type CambiosCreateInput = {
    num_tip_camb: number
    txt_fecha_camb: Date | string
    Estudiante: EstudiantesCreateNestedOneWithoutCambiosInput
    Carpeta: CarpetasCreateNestedOneWithoutCambiosInput
    Grupo: GruposCreateNestedOneWithoutCambiosInput
  }

  export type CambiosUncheckedCreateInput = {
    pk_id_camb?: number
    num_tip_camb: number
    txt_fecha_camb: Date | string
    fk_id_est: string
    fk_id_carp: number
    fk_id_grup: number
  }

  export type CambiosUpdateInput = {
    num_tip_camb?: IntFieldUpdateOperationsInput | number
    txt_fecha_camb?: DateTimeFieldUpdateOperationsInput | Date | string
    Estudiante?: EstudiantesUpdateOneRequiredWithoutCambiosNestedInput
    Carpeta?: CarpetasUpdateOneRequiredWithoutCambiosNestedInput
    Grupo?: GruposUpdateOneRequiredWithoutCambiosNestedInput
  }

  export type CambiosUncheckedUpdateInput = {
    pk_id_camb?: IntFieldUpdateOperationsInput | number
    num_tip_camb?: IntFieldUpdateOperationsInput | number
    txt_fecha_camb?: DateTimeFieldUpdateOperationsInput | Date | string
    fk_id_est?: StringFieldUpdateOperationsInput | string
    fk_id_carp?: IntFieldUpdateOperationsInput | number
    fk_id_grup?: IntFieldUpdateOperationsInput | number
  }

  export type CambiosCreateManyInput = {
    pk_id_camb?: number
    num_tip_camb: number
    txt_fecha_camb: Date | string
    fk_id_est: string
    fk_id_carp: number
    fk_id_grup: number
  }

  export type CambiosUpdateManyMutationInput = {
    num_tip_camb?: IntFieldUpdateOperationsInput | number
    txt_fecha_camb?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CambiosUncheckedUpdateManyInput = {
    pk_id_camb?: IntFieldUpdateOperationsInput | number
    num_tip_camb?: IntFieldUpdateOperationsInput | number
    txt_fecha_camb?: DateTimeFieldUpdateOperationsInput | Date | string
    fk_id_est?: StringFieldUpdateOperationsInput | string
    fk_id_carp?: IntFieldUpdateOperationsInput | number
    fk_id_grup?: IntFieldUpdateOperationsInput | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type CambiosListRelationFilter = {
    every?: CambiosWhereInput
    some?: CambiosWhereInput
    none?: CambiosWhereInput
  }

  export type GruposListRelationFilter = {
    every?: GruposWhereInput
    some?: GruposWhereInput
    none?: GruposWhereInput
  }

  export type GrupoConAccesoListRelationFilter = {
    every?: GrupoConAccesoWhereInput
    some?: GrupoConAccesoWhereInput
    none?: GrupoConAccesoWhereInput
  }

  export type CarpetasListRelationFilter = {
    every?: CarpetasWhereInput
    some?: CarpetasWhereInput
    none?: CarpetasWhereInput
  }

  export type BibliografiasListRelationFilter = {
    every?: BibliografiasWhereInput
    some?: BibliografiasWhereInput
    none?: BibliografiasWhereInput
  }

  export type CambiosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GruposOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GrupoConAccesoOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CarpetasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BibliografiasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstudiantesCountOrderByAggregateInput = {
    pk_id_est?: SortOrder
    txt_user_est?: SortOrder
    txt_email_est?: SortOrder
    txt_pass_est?: SortOrder
    num_sub_est?: SortOrder
  }

  export type EstudiantesAvgOrderByAggregateInput = {
    num_sub_est?: SortOrder
  }

  export type EstudiantesMaxOrderByAggregateInput = {
    pk_id_est?: SortOrder
    txt_user_est?: SortOrder
    txt_email_est?: SortOrder
    txt_pass_est?: SortOrder
    num_sub_est?: SortOrder
  }

  export type EstudiantesMinOrderByAggregateInput = {
    pk_id_est?: SortOrder
    txt_user_est?: SortOrder
    txt_email_est?: SortOrder
    txt_pass_est?: SortOrder
    num_sub_est?: SortOrder
  }

  export type EstudiantesSumOrderByAggregateInput = {
    num_sub_est?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type GruposRelationFilter = {
    is?: GruposWhereInput
    isNot?: GruposWhereInput
  }

  export type CarpetasRelationFilter = {
    is?: CarpetasWhereInput
    isNot?: CarpetasWhereInput
  }

  export type EstudiantesRelationFilter = {
    is?: EstudiantesWhereInput
    isNot?: EstudiantesWhereInput
  }

  export type ArchivosListRelationFilter = {
    every?: ArchivosWhereInput
    some?: ArchivosWhereInput
    none?: ArchivosWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ArchivosOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BibliografiasCountOrderByAggregateInput = {
    pk_id_biblio?: SortOrder
    txt_tit_biblio?: SortOrder
    num_tip_biblio?: SortOrder
    num_fmt_biblio?: SortOrder
    txt_fecha_biblio?: SortOrder
    txt_aut_biblio?: SortOrder
    txt_edit_biblio?: SortOrder
    txt_dir_biblio?: SortOrder
    txt_pag_biblio?: SortOrder
    num_edic_biblio?: SortOrder
    num_volm_biblio?: SortOrder
    num_npag_biblio?: SortOrder
    txt_ubic_biblio?: SortOrder
    fk_id_grup?: SortOrder
    fk_id_carp?: SortOrder
    fk_id_est?: SortOrder
  }

  export type BibliografiasAvgOrderByAggregateInput = {
    pk_id_biblio?: SortOrder
    num_tip_biblio?: SortOrder
    num_fmt_biblio?: SortOrder
    num_edic_biblio?: SortOrder
    num_volm_biblio?: SortOrder
    num_npag_biblio?: SortOrder
    fk_id_grup?: SortOrder
    fk_id_carp?: SortOrder
  }

  export type BibliografiasMaxOrderByAggregateInput = {
    pk_id_biblio?: SortOrder
    txt_tit_biblio?: SortOrder
    num_tip_biblio?: SortOrder
    num_fmt_biblio?: SortOrder
    txt_fecha_biblio?: SortOrder
    txt_aut_biblio?: SortOrder
    txt_edit_biblio?: SortOrder
    txt_dir_biblio?: SortOrder
    txt_pag_biblio?: SortOrder
    num_edic_biblio?: SortOrder
    num_volm_biblio?: SortOrder
    num_npag_biblio?: SortOrder
    txt_ubic_biblio?: SortOrder
    fk_id_grup?: SortOrder
    fk_id_carp?: SortOrder
    fk_id_est?: SortOrder
  }

  export type BibliografiasMinOrderByAggregateInput = {
    pk_id_biblio?: SortOrder
    txt_tit_biblio?: SortOrder
    num_tip_biblio?: SortOrder
    num_fmt_biblio?: SortOrder
    txt_fecha_biblio?: SortOrder
    txt_aut_biblio?: SortOrder
    txt_edit_biblio?: SortOrder
    txt_dir_biblio?: SortOrder
    txt_pag_biblio?: SortOrder
    num_edic_biblio?: SortOrder
    num_volm_biblio?: SortOrder
    num_npag_biblio?: SortOrder
    txt_ubic_biblio?: SortOrder
    fk_id_grup?: SortOrder
    fk_id_carp?: SortOrder
    fk_id_est?: SortOrder
  }

  export type BibliografiasSumOrderByAggregateInput = {
    pk_id_biblio?: SortOrder
    num_tip_biblio?: SortOrder
    num_fmt_biblio?: SortOrder
    num_edic_biblio?: SortOrder
    num_volm_biblio?: SortOrder
    num_npag_biblio?: SortOrder
    fk_id_grup?: SortOrder
    fk_id_carp?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type BibliografiasRelationFilter = {
    is?: BibliografiasWhereInput
    isNot?: BibliografiasWhereInput
  }

  export type ArchivosCountOrderByAggregateInput = {
    pk_id_arch?: SortOrder
    txt_dir_arch?: SortOrder
    fk_id_biblio?: SortOrder
  }

  export type ArchivosAvgOrderByAggregateInput = {
    pk_id_arch?: SortOrder
    fk_id_biblio?: SortOrder
  }

  export type ArchivosMaxOrderByAggregateInput = {
    pk_id_arch?: SortOrder
    txt_dir_arch?: SortOrder
    fk_id_biblio?: SortOrder
  }

  export type ArchivosMinOrderByAggregateInput = {
    pk_id_arch?: SortOrder
    txt_dir_arch?: SortOrder
    fk_id_biblio?: SortOrder
  }

  export type ArchivosSumOrderByAggregateInput = {
    pk_id_arch?: SortOrder
    fk_id_biblio?: SortOrder
  }

  export type CarpetasCountOrderByAggregateInput = {
    pk_id_carp?: SortOrder
    txt_nom_carp?: SortOrder
    fk_id_grup?: SortOrder
    fk_id_est?: SortOrder
  }

  export type CarpetasAvgOrderByAggregateInput = {
    pk_id_carp?: SortOrder
    fk_id_grup?: SortOrder
  }

  export type CarpetasMaxOrderByAggregateInput = {
    pk_id_carp?: SortOrder
    txt_nom_carp?: SortOrder
    fk_id_grup?: SortOrder
    fk_id_est?: SortOrder
  }

  export type CarpetasMinOrderByAggregateInput = {
    pk_id_carp?: SortOrder
    txt_nom_carp?: SortOrder
    fk_id_grup?: SortOrder
    fk_id_est?: SortOrder
  }

  export type CarpetasSumOrderByAggregateInput = {
    pk_id_carp?: SortOrder
    fk_id_grup?: SortOrder
  }

  export type GrupoConAccesoFk_id_grupFk_id_estCompoundUniqueInput = {
    fk_id_grup: number
    fk_id_est: string
  }

  export type GrupoConAccesoCountOrderByAggregateInput = {
    fk_id_grup?: SortOrder
    fk_id_est?: SortOrder
  }

  export type GrupoConAccesoAvgOrderByAggregateInput = {
    fk_id_grup?: SortOrder
  }

  export type GrupoConAccesoMaxOrderByAggregateInput = {
    fk_id_grup?: SortOrder
    fk_id_est?: SortOrder
  }

  export type GrupoConAccesoMinOrderByAggregateInput = {
    fk_id_grup?: SortOrder
    fk_id_est?: SortOrder
  }

  export type GrupoConAccesoSumOrderByAggregateInput = {
    fk_id_grup?: SortOrder
  }

  export type GruposCountOrderByAggregateInput = {
    pk_id_grup?: SortOrder
    txt_nom_grup?: SortOrder
    fk_id_est?: SortOrder
  }

  export type GruposAvgOrderByAggregateInput = {
    pk_id_grup?: SortOrder
  }

  export type GruposMaxOrderByAggregateInput = {
    pk_id_grup?: SortOrder
    txt_nom_grup?: SortOrder
    fk_id_est?: SortOrder
  }

  export type GruposMinOrderByAggregateInput = {
    pk_id_grup?: SortOrder
    txt_nom_grup?: SortOrder
    fk_id_est?: SortOrder
  }

  export type GruposSumOrderByAggregateInput = {
    pk_id_grup?: SortOrder
  }

  export type CambiosCountOrderByAggregateInput = {
    pk_id_camb?: SortOrder
    num_tip_camb?: SortOrder
    txt_fecha_camb?: SortOrder
    fk_id_est?: SortOrder
    fk_id_carp?: SortOrder
    fk_id_grup?: SortOrder
  }

  export type CambiosAvgOrderByAggregateInput = {
    pk_id_camb?: SortOrder
    num_tip_camb?: SortOrder
    fk_id_carp?: SortOrder
    fk_id_grup?: SortOrder
  }

  export type CambiosMaxOrderByAggregateInput = {
    pk_id_camb?: SortOrder
    num_tip_camb?: SortOrder
    txt_fecha_camb?: SortOrder
    fk_id_est?: SortOrder
    fk_id_carp?: SortOrder
    fk_id_grup?: SortOrder
  }

  export type CambiosMinOrderByAggregateInput = {
    pk_id_camb?: SortOrder
    num_tip_camb?: SortOrder
    txt_fecha_camb?: SortOrder
    fk_id_est?: SortOrder
    fk_id_carp?: SortOrder
    fk_id_grup?: SortOrder
  }

  export type CambiosSumOrderByAggregateInput = {
    pk_id_camb?: SortOrder
    num_tip_camb?: SortOrder
    fk_id_carp?: SortOrder
    fk_id_grup?: SortOrder
  }

  export type CambiosCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<CambiosCreateWithoutEstudianteInput, CambiosUncheckedCreateWithoutEstudianteInput> | CambiosCreateWithoutEstudianteInput[] | CambiosUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CambiosCreateOrConnectWithoutEstudianteInput | CambiosCreateOrConnectWithoutEstudianteInput[]
    createMany?: CambiosCreateManyEstudianteInputEnvelope
    connect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
  }

  export type GruposCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<GruposCreateWithoutEstudianteInput, GruposUncheckedCreateWithoutEstudianteInput> | GruposCreateWithoutEstudianteInput[] | GruposUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutEstudianteInput | GruposCreateOrConnectWithoutEstudianteInput[]
    createMany?: GruposCreateManyEstudianteInputEnvelope
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
  }

  export type GrupoConAccesoCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<GrupoConAccesoCreateWithoutEstudianteInput, GrupoConAccesoUncheckedCreateWithoutEstudianteInput> | GrupoConAccesoCreateWithoutEstudianteInput[] | GrupoConAccesoUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: GrupoConAccesoCreateOrConnectWithoutEstudianteInput | GrupoConAccesoCreateOrConnectWithoutEstudianteInput[]
    createMany?: GrupoConAccesoCreateManyEstudianteInputEnvelope
    connect?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
  }

  export type CarpetasCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<CarpetasCreateWithoutEstudianteInput, CarpetasUncheckedCreateWithoutEstudianteInput> | CarpetasCreateWithoutEstudianteInput[] | CarpetasUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CarpetasCreateOrConnectWithoutEstudianteInput | CarpetasCreateOrConnectWithoutEstudianteInput[]
    createMany?: CarpetasCreateManyEstudianteInputEnvelope
    connect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
  }

  export type BibliografiasCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<BibliografiasCreateWithoutEstudianteInput, BibliografiasUncheckedCreateWithoutEstudianteInput> | BibliografiasCreateWithoutEstudianteInput[] | BibliografiasUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: BibliografiasCreateOrConnectWithoutEstudianteInput | BibliografiasCreateOrConnectWithoutEstudianteInput[]
    createMany?: BibliografiasCreateManyEstudianteInputEnvelope
    connect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
  }

  export type CambiosUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<CambiosCreateWithoutEstudianteInput, CambiosUncheckedCreateWithoutEstudianteInput> | CambiosCreateWithoutEstudianteInput[] | CambiosUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CambiosCreateOrConnectWithoutEstudianteInput | CambiosCreateOrConnectWithoutEstudianteInput[]
    createMany?: CambiosCreateManyEstudianteInputEnvelope
    connect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
  }

  export type GruposUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<GruposCreateWithoutEstudianteInput, GruposUncheckedCreateWithoutEstudianteInput> | GruposCreateWithoutEstudianteInput[] | GruposUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutEstudianteInput | GruposCreateOrConnectWithoutEstudianteInput[]
    createMany?: GruposCreateManyEstudianteInputEnvelope
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
  }

  export type GrupoConAccesoUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<GrupoConAccesoCreateWithoutEstudianteInput, GrupoConAccesoUncheckedCreateWithoutEstudianteInput> | GrupoConAccesoCreateWithoutEstudianteInput[] | GrupoConAccesoUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: GrupoConAccesoCreateOrConnectWithoutEstudianteInput | GrupoConAccesoCreateOrConnectWithoutEstudianteInput[]
    createMany?: GrupoConAccesoCreateManyEstudianteInputEnvelope
    connect?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
  }

  export type CarpetasUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<CarpetasCreateWithoutEstudianteInput, CarpetasUncheckedCreateWithoutEstudianteInput> | CarpetasCreateWithoutEstudianteInput[] | CarpetasUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CarpetasCreateOrConnectWithoutEstudianteInput | CarpetasCreateOrConnectWithoutEstudianteInput[]
    createMany?: CarpetasCreateManyEstudianteInputEnvelope
    connect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
  }

  export type BibliografiasUncheckedCreateNestedManyWithoutEstudianteInput = {
    create?: XOR<BibliografiasCreateWithoutEstudianteInput, BibliografiasUncheckedCreateWithoutEstudianteInput> | BibliografiasCreateWithoutEstudianteInput[] | BibliografiasUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: BibliografiasCreateOrConnectWithoutEstudianteInput | BibliografiasCreateOrConnectWithoutEstudianteInput[]
    createMany?: BibliografiasCreateManyEstudianteInputEnvelope
    connect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CambiosUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<CambiosCreateWithoutEstudianteInput, CambiosUncheckedCreateWithoutEstudianteInput> | CambiosCreateWithoutEstudianteInput[] | CambiosUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CambiosCreateOrConnectWithoutEstudianteInput | CambiosCreateOrConnectWithoutEstudianteInput[]
    upsert?: CambiosUpsertWithWhereUniqueWithoutEstudianteInput | CambiosUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: CambiosCreateManyEstudianteInputEnvelope
    set?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    disconnect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    delete?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    connect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    update?: CambiosUpdateWithWhereUniqueWithoutEstudianteInput | CambiosUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: CambiosUpdateManyWithWhereWithoutEstudianteInput | CambiosUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: CambiosScalarWhereInput | CambiosScalarWhereInput[]
  }

  export type GruposUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<GruposCreateWithoutEstudianteInput, GruposUncheckedCreateWithoutEstudianteInput> | GruposCreateWithoutEstudianteInput[] | GruposUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutEstudianteInput | GruposCreateOrConnectWithoutEstudianteInput[]
    upsert?: GruposUpsertWithWhereUniqueWithoutEstudianteInput | GruposUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: GruposCreateManyEstudianteInputEnvelope
    set?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    disconnect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    delete?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    update?: GruposUpdateWithWhereUniqueWithoutEstudianteInput | GruposUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: GruposUpdateManyWithWhereWithoutEstudianteInput | GruposUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: GruposScalarWhereInput | GruposScalarWhereInput[]
  }

  export type GrupoConAccesoUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<GrupoConAccesoCreateWithoutEstudianteInput, GrupoConAccesoUncheckedCreateWithoutEstudianteInput> | GrupoConAccesoCreateWithoutEstudianteInput[] | GrupoConAccesoUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: GrupoConAccesoCreateOrConnectWithoutEstudianteInput | GrupoConAccesoCreateOrConnectWithoutEstudianteInput[]
    upsert?: GrupoConAccesoUpsertWithWhereUniqueWithoutEstudianteInput | GrupoConAccesoUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: GrupoConAccesoCreateManyEstudianteInputEnvelope
    set?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    disconnect?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    delete?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    connect?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    update?: GrupoConAccesoUpdateWithWhereUniqueWithoutEstudianteInput | GrupoConAccesoUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: GrupoConAccesoUpdateManyWithWhereWithoutEstudianteInput | GrupoConAccesoUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: GrupoConAccesoScalarWhereInput | GrupoConAccesoScalarWhereInput[]
  }

  export type CarpetasUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<CarpetasCreateWithoutEstudianteInput, CarpetasUncheckedCreateWithoutEstudianteInput> | CarpetasCreateWithoutEstudianteInput[] | CarpetasUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CarpetasCreateOrConnectWithoutEstudianteInput | CarpetasCreateOrConnectWithoutEstudianteInput[]
    upsert?: CarpetasUpsertWithWhereUniqueWithoutEstudianteInput | CarpetasUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: CarpetasCreateManyEstudianteInputEnvelope
    set?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    disconnect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    delete?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    connect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    update?: CarpetasUpdateWithWhereUniqueWithoutEstudianteInput | CarpetasUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: CarpetasUpdateManyWithWhereWithoutEstudianteInput | CarpetasUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: CarpetasScalarWhereInput | CarpetasScalarWhereInput[]
  }

  export type BibliografiasUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<BibliografiasCreateWithoutEstudianteInput, BibliografiasUncheckedCreateWithoutEstudianteInput> | BibliografiasCreateWithoutEstudianteInput[] | BibliografiasUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: BibliografiasCreateOrConnectWithoutEstudianteInput | BibliografiasCreateOrConnectWithoutEstudianteInput[]
    upsert?: BibliografiasUpsertWithWhereUniqueWithoutEstudianteInput | BibliografiasUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: BibliografiasCreateManyEstudianteInputEnvelope
    set?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    disconnect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    delete?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    connect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    update?: BibliografiasUpdateWithWhereUniqueWithoutEstudianteInput | BibliografiasUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: BibliografiasUpdateManyWithWhereWithoutEstudianteInput | BibliografiasUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: BibliografiasScalarWhereInput | BibliografiasScalarWhereInput[]
  }

  export type CambiosUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<CambiosCreateWithoutEstudianteInput, CambiosUncheckedCreateWithoutEstudianteInput> | CambiosCreateWithoutEstudianteInput[] | CambiosUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CambiosCreateOrConnectWithoutEstudianteInput | CambiosCreateOrConnectWithoutEstudianteInput[]
    upsert?: CambiosUpsertWithWhereUniqueWithoutEstudianteInput | CambiosUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: CambiosCreateManyEstudianteInputEnvelope
    set?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    disconnect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    delete?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    connect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    update?: CambiosUpdateWithWhereUniqueWithoutEstudianteInput | CambiosUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: CambiosUpdateManyWithWhereWithoutEstudianteInput | CambiosUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: CambiosScalarWhereInput | CambiosScalarWhereInput[]
  }

  export type GruposUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<GruposCreateWithoutEstudianteInput, GruposUncheckedCreateWithoutEstudianteInput> | GruposCreateWithoutEstudianteInput[] | GruposUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: GruposCreateOrConnectWithoutEstudianteInput | GruposCreateOrConnectWithoutEstudianteInput[]
    upsert?: GruposUpsertWithWhereUniqueWithoutEstudianteInput | GruposUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: GruposCreateManyEstudianteInputEnvelope
    set?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    disconnect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    delete?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    connect?: GruposWhereUniqueInput | GruposWhereUniqueInput[]
    update?: GruposUpdateWithWhereUniqueWithoutEstudianteInput | GruposUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: GruposUpdateManyWithWhereWithoutEstudianteInput | GruposUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: GruposScalarWhereInput | GruposScalarWhereInput[]
  }

  export type GrupoConAccesoUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<GrupoConAccesoCreateWithoutEstudianteInput, GrupoConAccesoUncheckedCreateWithoutEstudianteInput> | GrupoConAccesoCreateWithoutEstudianteInput[] | GrupoConAccesoUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: GrupoConAccesoCreateOrConnectWithoutEstudianteInput | GrupoConAccesoCreateOrConnectWithoutEstudianteInput[]
    upsert?: GrupoConAccesoUpsertWithWhereUniqueWithoutEstudianteInput | GrupoConAccesoUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: GrupoConAccesoCreateManyEstudianteInputEnvelope
    set?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    disconnect?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    delete?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    connect?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    update?: GrupoConAccesoUpdateWithWhereUniqueWithoutEstudianteInput | GrupoConAccesoUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: GrupoConAccesoUpdateManyWithWhereWithoutEstudianteInput | GrupoConAccesoUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: GrupoConAccesoScalarWhereInput | GrupoConAccesoScalarWhereInput[]
  }

  export type CarpetasUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<CarpetasCreateWithoutEstudianteInput, CarpetasUncheckedCreateWithoutEstudianteInput> | CarpetasCreateWithoutEstudianteInput[] | CarpetasUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: CarpetasCreateOrConnectWithoutEstudianteInput | CarpetasCreateOrConnectWithoutEstudianteInput[]
    upsert?: CarpetasUpsertWithWhereUniqueWithoutEstudianteInput | CarpetasUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: CarpetasCreateManyEstudianteInputEnvelope
    set?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    disconnect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    delete?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    connect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    update?: CarpetasUpdateWithWhereUniqueWithoutEstudianteInput | CarpetasUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: CarpetasUpdateManyWithWhereWithoutEstudianteInput | CarpetasUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: CarpetasScalarWhereInput | CarpetasScalarWhereInput[]
  }

  export type BibliografiasUncheckedUpdateManyWithoutEstudianteNestedInput = {
    create?: XOR<BibliografiasCreateWithoutEstudianteInput, BibliografiasUncheckedCreateWithoutEstudianteInput> | BibliografiasCreateWithoutEstudianteInput[] | BibliografiasUncheckedCreateWithoutEstudianteInput[]
    connectOrCreate?: BibliografiasCreateOrConnectWithoutEstudianteInput | BibliografiasCreateOrConnectWithoutEstudianteInput[]
    upsert?: BibliografiasUpsertWithWhereUniqueWithoutEstudianteInput | BibliografiasUpsertWithWhereUniqueWithoutEstudianteInput[]
    createMany?: BibliografiasCreateManyEstudianteInputEnvelope
    set?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    disconnect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    delete?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    connect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    update?: BibliografiasUpdateWithWhereUniqueWithoutEstudianteInput | BibliografiasUpdateWithWhereUniqueWithoutEstudianteInput[]
    updateMany?: BibliografiasUpdateManyWithWhereWithoutEstudianteInput | BibliografiasUpdateManyWithWhereWithoutEstudianteInput[]
    deleteMany?: BibliografiasScalarWhereInput | BibliografiasScalarWhereInput[]
  }

  export type GruposCreateNestedOneWithoutBibliografiasInput = {
    create?: XOR<GruposCreateWithoutBibliografiasInput, GruposUncheckedCreateWithoutBibliografiasInput>
    connectOrCreate?: GruposCreateOrConnectWithoutBibliografiasInput
    connect?: GruposWhereUniqueInput
  }

  export type CarpetasCreateNestedOneWithoutBibliografiasInput = {
    create?: XOR<CarpetasCreateWithoutBibliografiasInput, CarpetasUncheckedCreateWithoutBibliografiasInput>
    connectOrCreate?: CarpetasCreateOrConnectWithoutBibliografiasInput
    connect?: CarpetasWhereUniqueInput
  }

  export type EstudiantesCreateNestedOneWithoutBibliografiasInput = {
    create?: XOR<EstudiantesCreateWithoutBibliografiasInput, EstudiantesUncheckedCreateWithoutBibliografiasInput>
    connectOrCreate?: EstudiantesCreateOrConnectWithoutBibliografiasInput
    connect?: EstudiantesWhereUniqueInput
  }

  export type ArchivosCreateNestedManyWithoutBibliografiasInput = {
    create?: XOR<ArchivosCreateWithoutBibliografiasInput, ArchivosUncheckedCreateWithoutBibliografiasInput> | ArchivosCreateWithoutBibliografiasInput[] | ArchivosUncheckedCreateWithoutBibliografiasInput[]
    connectOrCreate?: ArchivosCreateOrConnectWithoutBibliografiasInput | ArchivosCreateOrConnectWithoutBibliografiasInput[]
    createMany?: ArchivosCreateManyBibliografiasInputEnvelope
    connect?: ArchivosWhereUniqueInput | ArchivosWhereUniqueInput[]
  }

  export type ArchivosUncheckedCreateNestedManyWithoutBibliografiasInput = {
    create?: XOR<ArchivosCreateWithoutBibliografiasInput, ArchivosUncheckedCreateWithoutBibliografiasInput> | ArchivosCreateWithoutBibliografiasInput[] | ArchivosUncheckedCreateWithoutBibliografiasInput[]
    connectOrCreate?: ArchivosCreateOrConnectWithoutBibliografiasInput | ArchivosCreateOrConnectWithoutBibliografiasInput[]
    createMany?: ArchivosCreateManyBibliografiasInputEnvelope
    connect?: ArchivosWhereUniqueInput | ArchivosWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GruposUpdateOneRequiredWithoutBibliografiasNestedInput = {
    create?: XOR<GruposCreateWithoutBibliografiasInput, GruposUncheckedCreateWithoutBibliografiasInput>
    connectOrCreate?: GruposCreateOrConnectWithoutBibliografiasInput
    upsert?: GruposUpsertWithoutBibliografiasInput
    connect?: GruposWhereUniqueInput
    update?: XOR<XOR<GruposUpdateToOneWithWhereWithoutBibliografiasInput, GruposUpdateWithoutBibliografiasInput>, GruposUncheckedUpdateWithoutBibliografiasInput>
  }

  export type CarpetasUpdateOneRequiredWithoutBibliografiasNestedInput = {
    create?: XOR<CarpetasCreateWithoutBibliografiasInput, CarpetasUncheckedCreateWithoutBibliografiasInput>
    connectOrCreate?: CarpetasCreateOrConnectWithoutBibliografiasInput
    upsert?: CarpetasUpsertWithoutBibliografiasInput
    connect?: CarpetasWhereUniqueInput
    update?: XOR<XOR<CarpetasUpdateToOneWithWhereWithoutBibliografiasInput, CarpetasUpdateWithoutBibliografiasInput>, CarpetasUncheckedUpdateWithoutBibliografiasInput>
  }

  export type EstudiantesUpdateOneRequiredWithoutBibliografiasNestedInput = {
    create?: XOR<EstudiantesCreateWithoutBibliografiasInput, EstudiantesUncheckedCreateWithoutBibliografiasInput>
    connectOrCreate?: EstudiantesCreateOrConnectWithoutBibliografiasInput
    upsert?: EstudiantesUpsertWithoutBibliografiasInput
    connect?: EstudiantesWhereUniqueInput
    update?: XOR<XOR<EstudiantesUpdateToOneWithWhereWithoutBibliografiasInput, EstudiantesUpdateWithoutBibliografiasInput>, EstudiantesUncheckedUpdateWithoutBibliografiasInput>
  }

  export type ArchivosUpdateManyWithoutBibliografiasNestedInput = {
    create?: XOR<ArchivosCreateWithoutBibliografiasInput, ArchivosUncheckedCreateWithoutBibliografiasInput> | ArchivosCreateWithoutBibliografiasInput[] | ArchivosUncheckedCreateWithoutBibliografiasInput[]
    connectOrCreate?: ArchivosCreateOrConnectWithoutBibliografiasInput | ArchivosCreateOrConnectWithoutBibliografiasInput[]
    upsert?: ArchivosUpsertWithWhereUniqueWithoutBibliografiasInput | ArchivosUpsertWithWhereUniqueWithoutBibliografiasInput[]
    createMany?: ArchivosCreateManyBibliografiasInputEnvelope
    set?: ArchivosWhereUniqueInput | ArchivosWhereUniqueInput[]
    disconnect?: ArchivosWhereUniqueInput | ArchivosWhereUniqueInput[]
    delete?: ArchivosWhereUniqueInput | ArchivosWhereUniqueInput[]
    connect?: ArchivosWhereUniqueInput | ArchivosWhereUniqueInput[]
    update?: ArchivosUpdateWithWhereUniqueWithoutBibliografiasInput | ArchivosUpdateWithWhereUniqueWithoutBibliografiasInput[]
    updateMany?: ArchivosUpdateManyWithWhereWithoutBibliografiasInput | ArchivosUpdateManyWithWhereWithoutBibliografiasInput[]
    deleteMany?: ArchivosScalarWhereInput | ArchivosScalarWhereInput[]
  }

  export type ArchivosUncheckedUpdateManyWithoutBibliografiasNestedInput = {
    create?: XOR<ArchivosCreateWithoutBibliografiasInput, ArchivosUncheckedCreateWithoutBibliografiasInput> | ArchivosCreateWithoutBibliografiasInput[] | ArchivosUncheckedCreateWithoutBibliografiasInput[]
    connectOrCreate?: ArchivosCreateOrConnectWithoutBibliografiasInput | ArchivosCreateOrConnectWithoutBibliografiasInput[]
    upsert?: ArchivosUpsertWithWhereUniqueWithoutBibliografiasInput | ArchivosUpsertWithWhereUniqueWithoutBibliografiasInput[]
    createMany?: ArchivosCreateManyBibliografiasInputEnvelope
    set?: ArchivosWhereUniqueInput | ArchivosWhereUniqueInput[]
    disconnect?: ArchivosWhereUniqueInput | ArchivosWhereUniqueInput[]
    delete?: ArchivosWhereUniqueInput | ArchivosWhereUniqueInput[]
    connect?: ArchivosWhereUniqueInput | ArchivosWhereUniqueInput[]
    update?: ArchivosUpdateWithWhereUniqueWithoutBibliografiasInput | ArchivosUpdateWithWhereUniqueWithoutBibliografiasInput[]
    updateMany?: ArchivosUpdateManyWithWhereWithoutBibliografiasInput | ArchivosUpdateManyWithWhereWithoutBibliografiasInput[]
    deleteMany?: ArchivosScalarWhereInput | ArchivosScalarWhereInput[]
  }

  export type BibliografiasCreateNestedOneWithoutArchivosInput = {
    create?: XOR<BibliografiasCreateWithoutArchivosInput, BibliografiasUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: BibliografiasCreateOrConnectWithoutArchivosInput
    connect?: BibliografiasWhereUniqueInput
  }

  export type BibliografiasUpdateOneRequiredWithoutArchivosNestedInput = {
    create?: XOR<BibliografiasCreateWithoutArchivosInput, BibliografiasUncheckedCreateWithoutArchivosInput>
    connectOrCreate?: BibliografiasCreateOrConnectWithoutArchivosInput
    upsert?: BibliografiasUpsertWithoutArchivosInput
    connect?: BibliografiasWhereUniqueInput
    update?: XOR<XOR<BibliografiasUpdateToOneWithWhereWithoutArchivosInput, BibliografiasUpdateWithoutArchivosInput>, BibliografiasUncheckedUpdateWithoutArchivosInput>
  }

  export type GruposCreateNestedOneWithoutCarpetasInput = {
    create?: XOR<GruposCreateWithoutCarpetasInput, GruposUncheckedCreateWithoutCarpetasInput>
    connectOrCreate?: GruposCreateOrConnectWithoutCarpetasInput
    connect?: GruposWhereUniqueInput
  }

  export type EstudiantesCreateNestedOneWithoutCarpetasInput = {
    create?: XOR<EstudiantesCreateWithoutCarpetasInput, EstudiantesUncheckedCreateWithoutCarpetasInput>
    connectOrCreate?: EstudiantesCreateOrConnectWithoutCarpetasInput
    connect?: EstudiantesWhereUniqueInput
  }

  export type CambiosCreateNestedManyWithoutCarpetaInput = {
    create?: XOR<CambiosCreateWithoutCarpetaInput, CambiosUncheckedCreateWithoutCarpetaInput> | CambiosCreateWithoutCarpetaInput[] | CambiosUncheckedCreateWithoutCarpetaInput[]
    connectOrCreate?: CambiosCreateOrConnectWithoutCarpetaInput | CambiosCreateOrConnectWithoutCarpetaInput[]
    createMany?: CambiosCreateManyCarpetaInputEnvelope
    connect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
  }

  export type BibliografiasCreateNestedManyWithoutCarpetaInput = {
    create?: XOR<BibliografiasCreateWithoutCarpetaInput, BibliografiasUncheckedCreateWithoutCarpetaInput> | BibliografiasCreateWithoutCarpetaInput[] | BibliografiasUncheckedCreateWithoutCarpetaInput[]
    connectOrCreate?: BibliografiasCreateOrConnectWithoutCarpetaInput | BibliografiasCreateOrConnectWithoutCarpetaInput[]
    createMany?: BibliografiasCreateManyCarpetaInputEnvelope
    connect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
  }

  export type CambiosUncheckedCreateNestedManyWithoutCarpetaInput = {
    create?: XOR<CambiosCreateWithoutCarpetaInput, CambiosUncheckedCreateWithoutCarpetaInput> | CambiosCreateWithoutCarpetaInput[] | CambiosUncheckedCreateWithoutCarpetaInput[]
    connectOrCreate?: CambiosCreateOrConnectWithoutCarpetaInput | CambiosCreateOrConnectWithoutCarpetaInput[]
    createMany?: CambiosCreateManyCarpetaInputEnvelope
    connect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
  }

  export type BibliografiasUncheckedCreateNestedManyWithoutCarpetaInput = {
    create?: XOR<BibliografiasCreateWithoutCarpetaInput, BibliografiasUncheckedCreateWithoutCarpetaInput> | BibliografiasCreateWithoutCarpetaInput[] | BibliografiasUncheckedCreateWithoutCarpetaInput[]
    connectOrCreate?: BibliografiasCreateOrConnectWithoutCarpetaInput | BibliografiasCreateOrConnectWithoutCarpetaInput[]
    createMany?: BibliografiasCreateManyCarpetaInputEnvelope
    connect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
  }

  export type GruposUpdateOneRequiredWithoutCarpetasNestedInput = {
    create?: XOR<GruposCreateWithoutCarpetasInput, GruposUncheckedCreateWithoutCarpetasInput>
    connectOrCreate?: GruposCreateOrConnectWithoutCarpetasInput
    upsert?: GruposUpsertWithoutCarpetasInput
    connect?: GruposWhereUniqueInput
    update?: XOR<XOR<GruposUpdateToOneWithWhereWithoutCarpetasInput, GruposUpdateWithoutCarpetasInput>, GruposUncheckedUpdateWithoutCarpetasInput>
  }

  export type EstudiantesUpdateOneRequiredWithoutCarpetasNestedInput = {
    create?: XOR<EstudiantesCreateWithoutCarpetasInput, EstudiantesUncheckedCreateWithoutCarpetasInput>
    connectOrCreate?: EstudiantesCreateOrConnectWithoutCarpetasInput
    upsert?: EstudiantesUpsertWithoutCarpetasInput
    connect?: EstudiantesWhereUniqueInput
    update?: XOR<XOR<EstudiantesUpdateToOneWithWhereWithoutCarpetasInput, EstudiantesUpdateWithoutCarpetasInput>, EstudiantesUncheckedUpdateWithoutCarpetasInput>
  }

  export type CambiosUpdateManyWithoutCarpetaNestedInput = {
    create?: XOR<CambiosCreateWithoutCarpetaInput, CambiosUncheckedCreateWithoutCarpetaInput> | CambiosCreateWithoutCarpetaInput[] | CambiosUncheckedCreateWithoutCarpetaInput[]
    connectOrCreate?: CambiosCreateOrConnectWithoutCarpetaInput | CambiosCreateOrConnectWithoutCarpetaInput[]
    upsert?: CambiosUpsertWithWhereUniqueWithoutCarpetaInput | CambiosUpsertWithWhereUniqueWithoutCarpetaInput[]
    createMany?: CambiosCreateManyCarpetaInputEnvelope
    set?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    disconnect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    delete?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    connect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    update?: CambiosUpdateWithWhereUniqueWithoutCarpetaInput | CambiosUpdateWithWhereUniqueWithoutCarpetaInput[]
    updateMany?: CambiosUpdateManyWithWhereWithoutCarpetaInput | CambiosUpdateManyWithWhereWithoutCarpetaInput[]
    deleteMany?: CambiosScalarWhereInput | CambiosScalarWhereInput[]
  }

  export type BibliografiasUpdateManyWithoutCarpetaNestedInput = {
    create?: XOR<BibliografiasCreateWithoutCarpetaInput, BibliografiasUncheckedCreateWithoutCarpetaInput> | BibliografiasCreateWithoutCarpetaInput[] | BibliografiasUncheckedCreateWithoutCarpetaInput[]
    connectOrCreate?: BibliografiasCreateOrConnectWithoutCarpetaInput | BibliografiasCreateOrConnectWithoutCarpetaInput[]
    upsert?: BibliografiasUpsertWithWhereUniqueWithoutCarpetaInput | BibliografiasUpsertWithWhereUniqueWithoutCarpetaInput[]
    createMany?: BibliografiasCreateManyCarpetaInputEnvelope
    set?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    disconnect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    delete?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    connect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    update?: BibliografiasUpdateWithWhereUniqueWithoutCarpetaInput | BibliografiasUpdateWithWhereUniqueWithoutCarpetaInput[]
    updateMany?: BibliografiasUpdateManyWithWhereWithoutCarpetaInput | BibliografiasUpdateManyWithWhereWithoutCarpetaInput[]
    deleteMany?: BibliografiasScalarWhereInput | BibliografiasScalarWhereInput[]
  }

  export type CambiosUncheckedUpdateManyWithoutCarpetaNestedInput = {
    create?: XOR<CambiosCreateWithoutCarpetaInput, CambiosUncheckedCreateWithoutCarpetaInput> | CambiosCreateWithoutCarpetaInput[] | CambiosUncheckedCreateWithoutCarpetaInput[]
    connectOrCreate?: CambiosCreateOrConnectWithoutCarpetaInput | CambiosCreateOrConnectWithoutCarpetaInput[]
    upsert?: CambiosUpsertWithWhereUniqueWithoutCarpetaInput | CambiosUpsertWithWhereUniqueWithoutCarpetaInput[]
    createMany?: CambiosCreateManyCarpetaInputEnvelope
    set?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    disconnect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    delete?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    connect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    update?: CambiosUpdateWithWhereUniqueWithoutCarpetaInput | CambiosUpdateWithWhereUniqueWithoutCarpetaInput[]
    updateMany?: CambiosUpdateManyWithWhereWithoutCarpetaInput | CambiosUpdateManyWithWhereWithoutCarpetaInput[]
    deleteMany?: CambiosScalarWhereInput | CambiosScalarWhereInput[]
  }

  export type BibliografiasUncheckedUpdateManyWithoutCarpetaNestedInput = {
    create?: XOR<BibliografiasCreateWithoutCarpetaInput, BibliografiasUncheckedCreateWithoutCarpetaInput> | BibliografiasCreateWithoutCarpetaInput[] | BibliografiasUncheckedCreateWithoutCarpetaInput[]
    connectOrCreate?: BibliografiasCreateOrConnectWithoutCarpetaInput | BibliografiasCreateOrConnectWithoutCarpetaInput[]
    upsert?: BibliografiasUpsertWithWhereUniqueWithoutCarpetaInput | BibliografiasUpsertWithWhereUniqueWithoutCarpetaInput[]
    createMany?: BibliografiasCreateManyCarpetaInputEnvelope
    set?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    disconnect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    delete?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    connect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    update?: BibliografiasUpdateWithWhereUniqueWithoutCarpetaInput | BibliografiasUpdateWithWhereUniqueWithoutCarpetaInput[]
    updateMany?: BibliografiasUpdateManyWithWhereWithoutCarpetaInput | BibliografiasUpdateManyWithWhereWithoutCarpetaInput[]
    deleteMany?: BibliografiasScalarWhereInput | BibliografiasScalarWhereInput[]
  }

  export type GruposCreateNestedOneWithoutGrupoConAccesoInput = {
    create?: XOR<GruposCreateWithoutGrupoConAccesoInput, GruposUncheckedCreateWithoutGrupoConAccesoInput>
    connectOrCreate?: GruposCreateOrConnectWithoutGrupoConAccesoInput
    connect?: GruposWhereUniqueInput
  }

  export type EstudiantesCreateNestedOneWithoutGrupoConAccesoInput = {
    create?: XOR<EstudiantesCreateWithoutGrupoConAccesoInput, EstudiantesUncheckedCreateWithoutGrupoConAccesoInput>
    connectOrCreate?: EstudiantesCreateOrConnectWithoutGrupoConAccesoInput
    connect?: EstudiantesWhereUniqueInput
  }

  export type GruposUpdateOneRequiredWithoutGrupoConAccesoNestedInput = {
    create?: XOR<GruposCreateWithoutGrupoConAccesoInput, GruposUncheckedCreateWithoutGrupoConAccesoInput>
    connectOrCreate?: GruposCreateOrConnectWithoutGrupoConAccesoInput
    upsert?: GruposUpsertWithoutGrupoConAccesoInput
    connect?: GruposWhereUniqueInput
    update?: XOR<XOR<GruposUpdateToOneWithWhereWithoutGrupoConAccesoInput, GruposUpdateWithoutGrupoConAccesoInput>, GruposUncheckedUpdateWithoutGrupoConAccesoInput>
  }

  export type EstudiantesUpdateOneRequiredWithoutGrupoConAccesoNestedInput = {
    create?: XOR<EstudiantesCreateWithoutGrupoConAccesoInput, EstudiantesUncheckedCreateWithoutGrupoConAccesoInput>
    connectOrCreate?: EstudiantesCreateOrConnectWithoutGrupoConAccesoInput
    upsert?: EstudiantesUpsertWithoutGrupoConAccesoInput
    connect?: EstudiantesWhereUniqueInput
    update?: XOR<XOR<EstudiantesUpdateToOneWithWhereWithoutGrupoConAccesoInput, EstudiantesUpdateWithoutGrupoConAccesoInput>, EstudiantesUncheckedUpdateWithoutGrupoConAccesoInput>
  }

  export type EstudiantesCreateNestedOneWithoutGruposInput = {
    create?: XOR<EstudiantesCreateWithoutGruposInput, EstudiantesUncheckedCreateWithoutGruposInput>
    connectOrCreate?: EstudiantesCreateOrConnectWithoutGruposInput
    connect?: EstudiantesWhereUniqueInput
  }

  export type CambiosCreateNestedManyWithoutGrupoInput = {
    create?: XOR<CambiosCreateWithoutGrupoInput, CambiosUncheckedCreateWithoutGrupoInput> | CambiosCreateWithoutGrupoInput[] | CambiosUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: CambiosCreateOrConnectWithoutGrupoInput | CambiosCreateOrConnectWithoutGrupoInput[]
    createMany?: CambiosCreateManyGrupoInputEnvelope
    connect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
  }

  export type CarpetasCreateNestedManyWithoutGrupoInput = {
    create?: XOR<CarpetasCreateWithoutGrupoInput, CarpetasUncheckedCreateWithoutGrupoInput> | CarpetasCreateWithoutGrupoInput[] | CarpetasUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: CarpetasCreateOrConnectWithoutGrupoInput | CarpetasCreateOrConnectWithoutGrupoInput[]
    createMany?: CarpetasCreateManyGrupoInputEnvelope
    connect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
  }

  export type BibliografiasCreateNestedManyWithoutGrupoInput = {
    create?: XOR<BibliografiasCreateWithoutGrupoInput, BibliografiasUncheckedCreateWithoutGrupoInput> | BibliografiasCreateWithoutGrupoInput[] | BibliografiasUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: BibliografiasCreateOrConnectWithoutGrupoInput | BibliografiasCreateOrConnectWithoutGrupoInput[]
    createMany?: BibliografiasCreateManyGrupoInputEnvelope
    connect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
  }

  export type GrupoConAccesoCreateNestedManyWithoutGrupoInput = {
    create?: XOR<GrupoConAccesoCreateWithoutGrupoInput, GrupoConAccesoUncheckedCreateWithoutGrupoInput> | GrupoConAccesoCreateWithoutGrupoInput[] | GrupoConAccesoUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: GrupoConAccesoCreateOrConnectWithoutGrupoInput | GrupoConAccesoCreateOrConnectWithoutGrupoInput[]
    createMany?: GrupoConAccesoCreateManyGrupoInputEnvelope
    connect?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
  }

  export type CambiosUncheckedCreateNestedManyWithoutGrupoInput = {
    create?: XOR<CambiosCreateWithoutGrupoInput, CambiosUncheckedCreateWithoutGrupoInput> | CambiosCreateWithoutGrupoInput[] | CambiosUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: CambiosCreateOrConnectWithoutGrupoInput | CambiosCreateOrConnectWithoutGrupoInput[]
    createMany?: CambiosCreateManyGrupoInputEnvelope
    connect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
  }

  export type CarpetasUncheckedCreateNestedManyWithoutGrupoInput = {
    create?: XOR<CarpetasCreateWithoutGrupoInput, CarpetasUncheckedCreateWithoutGrupoInput> | CarpetasCreateWithoutGrupoInput[] | CarpetasUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: CarpetasCreateOrConnectWithoutGrupoInput | CarpetasCreateOrConnectWithoutGrupoInput[]
    createMany?: CarpetasCreateManyGrupoInputEnvelope
    connect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
  }

  export type BibliografiasUncheckedCreateNestedManyWithoutGrupoInput = {
    create?: XOR<BibliografiasCreateWithoutGrupoInput, BibliografiasUncheckedCreateWithoutGrupoInput> | BibliografiasCreateWithoutGrupoInput[] | BibliografiasUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: BibliografiasCreateOrConnectWithoutGrupoInput | BibliografiasCreateOrConnectWithoutGrupoInput[]
    createMany?: BibliografiasCreateManyGrupoInputEnvelope
    connect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
  }

  export type GrupoConAccesoUncheckedCreateNestedManyWithoutGrupoInput = {
    create?: XOR<GrupoConAccesoCreateWithoutGrupoInput, GrupoConAccesoUncheckedCreateWithoutGrupoInput> | GrupoConAccesoCreateWithoutGrupoInput[] | GrupoConAccesoUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: GrupoConAccesoCreateOrConnectWithoutGrupoInput | GrupoConAccesoCreateOrConnectWithoutGrupoInput[]
    createMany?: GrupoConAccesoCreateManyGrupoInputEnvelope
    connect?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
  }

  export type EstudiantesUpdateOneRequiredWithoutGruposNestedInput = {
    create?: XOR<EstudiantesCreateWithoutGruposInput, EstudiantesUncheckedCreateWithoutGruposInput>
    connectOrCreate?: EstudiantesCreateOrConnectWithoutGruposInput
    upsert?: EstudiantesUpsertWithoutGruposInput
    connect?: EstudiantesWhereUniqueInput
    update?: XOR<XOR<EstudiantesUpdateToOneWithWhereWithoutGruposInput, EstudiantesUpdateWithoutGruposInput>, EstudiantesUncheckedUpdateWithoutGruposInput>
  }

  export type CambiosUpdateManyWithoutGrupoNestedInput = {
    create?: XOR<CambiosCreateWithoutGrupoInput, CambiosUncheckedCreateWithoutGrupoInput> | CambiosCreateWithoutGrupoInput[] | CambiosUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: CambiosCreateOrConnectWithoutGrupoInput | CambiosCreateOrConnectWithoutGrupoInput[]
    upsert?: CambiosUpsertWithWhereUniqueWithoutGrupoInput | CambiosUpsertWithWhereUniqueWithoutGrupoInput[]
    createMany?: CambiosCreateManyGrupoInputEnvelope
    set?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    disconnect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    delete?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    connect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    update?: CambiosUpdateWithWhereUniqueWithoutGrupoInput | CambiosUpdateWithWhereUniqueWithoutGrupoInput[]
    updateMany?: CambiosUpdateManyWithWhereWithoutGrupoInput | CambiosUpdateManyWithWhereWithoutGrupoInput[]
    deleteMany?: CambiosScalarWhereInput | CambiosScalarWhereInput[]
  }

  export type CarpetasUpdateManyWithoutGrupoNestedInput = {
    create?: XOR<CarpetasCreateWithoutGrupoInput, CarpetasUncheckedCreateWithoutGrupoInput> | CarpetasCreateWithoutGrupoInput[] | CarpetasUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: CarpetasCreateOrConnectWithoutGrupoInput | CarpetasCreateOrConnectWithoutGrupoInput[]
    upsert?: CarpetasUpsertWithWhereUniqueWithoutGrupoInput | CarpetasUpsertWithWhereUniqueWithoutGrupoInput[]
    createMany?: CarpetasCreateManyGrupoInputEnvelope
    set?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    disconnect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    delete?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    connect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    update?: CarpetasUpdateWithWhereUniqueWithoutGrupoInput | CarpetasUpdateWithWhereUniqueWithoutGrupoInput[]
    updateMany?: CarpetasUpdateManyWithWhereWithoutGrupoInput | CarpetasUpdateManyWithWhereWithoutGrupoInput[]
    deleteMany?: CarpetasScalarWhereInput | CarpetasScalarWhereInput[]
  }

  export type BibliografiasUpdateManyWithoutGrupoNestedInput = {
    create?: XOR<BibliografiasCreateWithoutGrupoInput, BibliografiasUncheckedCreateWithoutGrupoInput> | BibliografiasCreateWithoutGrupoInput[] | BibliografiasUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: BibliografiasCreateOrConnectWithoutGrupoInput | BibliografiasCreateOrConnectWithoutGrupoInput[]
    upsert?: BibliografiasUpsertWithWhereUniqueWithoutGrupoInput | BibliografiasUpsertWithWhereUniqueWithoutGrupoInput[]
    createMany?: BibliografiasCreateManyGrupoInputEnvelope
    set?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    disconnect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    delete?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    connect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    update?: BibliografiasUpdateWithWhereUniqueWithoutGrupoInput | BibliografiasUpdateWithWhereUniqueWithoutGrupoInput[]
    updateMany?: BibliografiasUpdateManyWithWhereWithoutGrupoInput | BibliografiasUpdateManyWithWhereWithoutGrupoInput[]
    deleteMany?: BibliografiasScalarWhereInput | BibliografiasScalarWhereInput[]
  }

  export type GrupoConAccesoUpdateManyWithoutGrupoNestedInput = {
    create?: XOR<GrupoConAccesoCreateWithoutGrupoInput, GrupoConAccesoUncheckedCreateWithoutGrupoInput> | GrupoConAccesoCreateWithoutGrupoInput[] | GrupoConAccesoUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: GrupoConAccesoCreateOrConnectWithoutGrupoInput | GrupoConAccesoCreateOrConnectWithoutGrupoInput[]
    upsert?: GrupoConAccesoUpsertWithWhereUniqueWithoutGrupoInput | GrupoConAccesoUpsertWithWhereUniqueWithoutGrupoInput[]
    createMany?: GrupoConAccesoCreateManyGrupoInputEnvelope
    set?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    disconnect?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    delete?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    connect?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    update?: GrupoConAccesoUpdateWithWhereUniqueWithoutGrupoInput | GrupoConAccesoUpdateWithWhereUniqueWithoutGrupoInput[]
    updateMany?: GrupoConAccesoUpdateManyWithWhereWithoutGrupoInput | GrupoConAccesoUpdateManyWithWhereWithoutGrupoInput[]
    deleteMany?: GrupoConAccesoScalarWhereInput | GrupoConAccesoScalarWhereInput[]
  }

  export type CambiosUncheckedUpdateManyWithoutGrupoNestedInput = {
    create?: XOR<CambiosCreateWithoutGrupoInput, CambiosUncheckedCreateWithoutGrupoInput> | CambiosCreateWithoutGrupoInput[] | CambiosUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: CambiosCreateOrConnectWithoutGrupoInput | CambiosCreateOrConnectWithoutGrupoInput[]
    upsert?: CambiosUpsertWithWhereUniqueWithoutGrupoInput | CambiosUpsertWithWhereUniqueWithoutGrupoInput[]
    createMany?: CambiosCreateManyGrupoInputEnvelope
    set?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    disconnect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    delete?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    connect?: CambiosWhereUniqueInput | CambiosWhereUniqueInput[]
    update?: CambiosUpdateWithWhereUniqueWithoutGrupoInput | CambiosUpdateWithWhereUniqueWithoutGrupoInput[]
    updateMany?: CambiosUpdateManyWithWhereWithoutGrupoInput | CambiosUpdateManyWithWhereWithoutGrupoInput[]
    deleteMany?: CambiosScalarWhereInput | CambiosScalarWhereInput[]
  }

  export type CarpetasUncheckedUpdateManyWithoutGrupoNestedInput = {
    create?: XOR<CarpetasCreateWithoutGrupoInput, CarpetasUncheckedCreateWithoutGrupoInput> | CarpetasCreateWithoutGrupoInput[] | CarpetasUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: CarpetasCreateOrConnectWithoutGrupoInput | CarpetasCreateOrConnectWithoutGrupoInput[]
    upsert?: CarpetasUpsertWithWhereUniqueWithoutGrupoInput | CarpetasUpsertWithWhereUniqueWithoutGrupoInput[]
    createMany?: CarpetasCreateManyGrupoInputEnvelope
    set?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    disconnect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    delete?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    connect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    update?: CarpetasUpdateWithWhereUniqueWithoutGrupoInput | CarpetasUpdateWithWhereUniqueWithoutGrupoInput[]
    updateMany?: CarpetasUpdateManyWithWhereWithoutGrupoInput | CarpetasUpdateManyWithWhereWithoutGrupoInput[]
    deleteMany?: CarpetasScalarWhereInput | CarpetasScalarWhereInput[]
  }

  export type BibliografiasUncheckedUpdateManyWithoutGrupoNestedInput = {
    create?: XOR<BibliografiasCreateWithoutGrupoInput, BibliografiasUncheckedCreateWithoutGrupoInput> | BibliografiasCreateWithoutGrupoInput[] | BibliografiasUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: BibliografiasCreateOrConnectWithoutGrupoInput | BibliografiasCreateOrConnectWithoutGrupoInput[]
    upsert?: BibliografiasUpsertWithWhereUniqueWithoutGrupoInput | BibliografiasUpsertWithWhereUniqueWithoutGrupoInput[]
    createMany?: BibliografiasCreateManyGrupoInputEnvelope
    set?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    disconnect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    delete?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    connect?: BibliografiasWhereUniqueInput | BibliografiasWhereUniqueInput[]
    update?: BibliografiasUpdateWithWhereUniqueWithoutGrupoInput | BibliografiasUpdateWithWhereUniqueWithoutGrupoInput[]
    updateMany?: BibliografiasUpdateManyWithWhereWithoutGrupoInput | BibliografiasUpdateManyWithWhereWithoutGrupoInput[]
    deleteMany?: BibliografiasScalarWhereInput | BibliografiasScalarWhereInput[]
  }

  export type GrupoConAccesoUncheckedUpdateManyWithoutGrupoNestedInput = {
    create?: XOR<GrupoConAccesoCreateWithoutGrupoInput, GrupoConAccesoUncheckedCreateWithoutGrupoInput> | GrupoConAccesoCreateWithoutGrupoInput[] | GrupoConAccesoUncheckedCreateWithoutGrupoInput[]
    connectOrCreate?: GrupoConAccesoCreateOrConnectWithoutGrupoInput | GrupoConAccesoCreateOrConnectWithoutGrupoInput[]
    upsert?: GrupoConAccesoUpsertWithWhereUniqueWithoutGrupoInput | GrupoConAccesoUpsertWithWhereUniqueWithoutGrupoInput[]
    createMany?: GrupoConAccesoCreateManyGrupoInputEnvelope
    set?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    disconnect?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    delete?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    connect?: GrupoConAccesoWhereUniqueInput | GrupoConAccesoWhereUniqueInput[]
    update?: GrupoConAccesoUpdateWithWhereUniqueWithoutGrupoInput | GrupoConAccesoUpdateWithWhereUniqueWithoutGrupoInput[]
    updateMany?: GrupoConAccesoUpdateManyWithWhereWithoutGrupoInput | GrupoConAccesoUpdateManyWithWhereWithoutGrupoInput[]
    deleteMany?: GrupoConAccesoScalarWhereInput | GrupoConAccesoScalarWhereInput[]
  }

  export type EstudiantesCreateNestedOneWithoutCambiosInput = {
    create?: XOR<EstudiantesCreateWithoutCambiosInput, EstudiantesUncheckedCreateWithoutCambiosInput>
    connectOrCreate?: EstudiantesCreateOrConnectWithoutCambiosInput
    connect?: EstudiantesWhereUniqueInput
  }

  export type CarpetasCreateNestedOneWithoutCambiosInput = {
    create?: XOR<CarpetasCreateWithoutCambiosInput, CarpetasUncheckedCreateWithoutCambiosInput>
    connectOrCreate?: CarpetasCreateOrConnectWithoutCambiosInput
    connect?: CarpetasWhereUniqueInput
  }

  export type GruposCreateNestedOneWithoutCambiosInput = {
    create?: XOR<GruposCreateWithoutCambiosInput, GruposUncheckedCreateWithoutCambiosInput>
    connectOrCreate?: GruposCreateOrConnectWithoutCambiosInput
    connect?: GruposWhereUniqueInput
  }

  export type EstudiantesUpdateOneRequiredWithoutCambiosNestedInput = {
    create?: XOR<EstudiantesCreateWithoutCambiosInput, EstudiantesUncheckedCreateWithoutCambiosInput>
    connectOrCreate?: EstudiantesCreateOrConnectWithoutCambiosInput
    upsert?: EstudiantesUpsertWithoutCambiosInput
    connect?: EstudiantesWhereUniqueInput
    update?: XOR<XOR<EstudiantesUpdateToOneWithWhereWithoutCambiosInput, EstudiantesUpdateWithoutCambiosInput>, EstudiantesUncheckedUpdateWithoutCambiosInput>
  }

  export type CarpetasUpdateOneRequiredWithoutCambiosNestedInput = {
    create?: XOR<CarpetasCreateWithoutCambiosInput, CarpetasUncheckedCreateWithoutCambiosInput>
    connectOrCreate?: CarpetasCreateOrConnectWithoutCambiosInput
    upsert?: CarpetasUpsertWithoutCambiosInput
    connect?: CarpetasWhereUniqueInput
    update?: XOR<XOR<CarpetasUpdateToOneWithWhereWithoutCambiosInput, CarpetasUpdateWithoutCambiosInput>, CarpetasUncheckedUpdateWithoutCambiosInput>
  }

  export type GruposUpdateOneRequiredWithoutCambiosNestedInput = {
    create?: XOR<GruposCreateWithoutCambiosInput, GruposUncheckedCreateWithoutCambiosInput>
    connectOrCreate?: GruposCreateOrConnectWithoutCambiosInput
    upsert?: GruposUpsertWithoutCambiosInput
    connect?: GruposWhereUniqueInput
    update?: XOR<XOR<GruposUpdateToOneWithWhereWithoutCambiosInput, GruposUpdateWithoutCambiosInput>, GruposUncheckedUpdateWithoutCambiosInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CambiosCreateWithoutEstudianteInput = {
    num_tip_camb: number
    txt_fecha_camb: Date | string
    Carpeta: CarpetasCreateNestedOneWithoutCambiosInput
    Grupo: GruposCreateNestedOneWithoutCambiosInput
  }

  export type CambiosUncheckedCreateWithoutEstudianteInput = {
    pk_id_camb?: number
    num_tip_camb: number
    txt_fecha_camb: Date | string
    fk_id_carp: number
    fk_id_grup: number
  }

  export type CambiosCreateOrConnectWithoutEstudianteInput = {
    where: CambiosWhereUniqueInput
    create: XOR<CambiosCreateWithoutEstudianteInput, CambiosUncheckedCreateWithoutEstudianteInput>
  }

  export type CambiosCreateManyEstudianteInputEnvelope = {
    data: CambiosCreateManyEstudianteInput | CambiosCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type GruposCreateWithoutEstudianteInput = {
    txt_nom_grup: string
    Cambios?: CambiosCreateNestedManyWithoutGrupoInput
    Carpetas?: CarpetasCreateNestedManyWithoutGrupoInput
    Bibliografias?: BibliografiasCreateNestedManyWithoutGrupoInput
    GrupoConAcceso?: GrupoConAccesoCreateNestedManyWithoutGrupoInput
  }

  export type GruposUncheckedCreateWithoutEstudianteInput = {
    pk_id_grup?: number
    txt_nom_grup: string
    Cambios?: CambiosUncheckedCreateNestedManyWithoutGrupoInput
    Carpetas?: CarpetasUncheckedCreateNestedManyWithoutGrupoInput
    Bibliografias?: BibliografiasUncheckedCreateNestedManyWithoutGrupoInput
    GrupoConAcceso?: GrupoConAccesoUncheckedCreateNestedManyWithoutGrupoInput
  }

  export type GruposCreateOrConnectWithoutEstudianteInput = {
    where: GruposWhereUniqueInput
    create: XOR<GruposCreateWithoutEstudianteInput, GruposUncheckedCreateWithoutEstudianteInput>
  }

  export type GruposCreateManyEstudianteInputEnvelope = {
    data: GruposCreateManyEstudianteInput | GruposCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type GrupoConAccesoCreateWithoutEstudianteInput = {
    Grupo: GruposCreateNestedOneWithoutGrupoConAccesoInput
  }

  export type GrupoConAccesoUncheckedCreateWithoutEstudianteInput = {
    fk_id_grup: number
  }

  export type GrupoConAccesoCreateOrConnectWithoutEstudianteInput = {
    where: GrupoConAccesoWhereUniqueInput
    create: XOR<GrupoConAccesoCreateWithoutEstudianteInput, GrupoConAccesoUncheckedCreateWithoutEstudianteInput>
  }

  export type GrupoConAccesoCreateManyEstudianteInputEnvelope = {
    data: GrupoConAccesoCreateManyEstudianteInput | GrupoConAccesoCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type CarpetasCreateWithoutEstudianteInput = {
    txt_nom_carp: string
    Grupo: GruposCreateNestedOneWithoutCarpetasInput
    Cambios?: CambiosCreateNestedManyWithoutCarpetaInput
    Bibliografias?: BibliografiasCreateNestedManyWithoutCarpetaInput
  }

  export type CarpetasUncheckedCreateWithoutEstudianteInput = {
    pk_id_carp?: number
    txt_nom_carp: string
    fk_id_grup: number
    Cambios?: CambiosUncheckedCreateNestedManyWithoutCarpetaInput
    Bibliografias?: BibliografiasUncheckedCreateNestedManyWithoutCarpetaInput
  }

  export type CarpetasCreateOrConnectWithoutEstudianteInput = {
    where: CarpetasWhereUniqueInput
    create: XOR<CarpetasCreateWithoutEstudianteInput, CarpetasUncheckedCreateWithoutEstudianteInput>
  }

  export type CarpetasCreateManyEstudianteInputEnvelope = {
    data: CarpetasCreateManyEstudianteInput | CarpetasCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type BibliografiasCreateWithoutEstudianteInput = {
    txt_tit_biblio: string
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: Date | string
    txt_aut_biblio: string
    txt_edit_biblio?: string | null
    txt_dir_biblio?: string | null
    txt_pag_biblio?: string | null
    num_edic_biblio?: number | null
    num_volm_biblio?: number | null
    num_npag_biblio?: number | null
    txt_ubic_biblio?: string | null
    Grupo: GruposCreateNestedOneWithoutBibliografiasInput
    Carpeta: CarpetasCreateNestedOneWithoutBibliografiasInput
    Archivos?: ArchivosCreateNestedManyWithoutBibliografiasInput
  }

  export type BibliografiasUncheckedCreateWithoutEstudianteInput = {
    pk_id_biblio?: number
    txt_tit_biblio: string
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: Date | string
    txt_aut_biblio: string
    txt_edit_biblio?: string | null
    txt_dir_biblio?: string | null
    txt_pag_biblio?: string | null
    num_edic_biblio?: number | null
    num_volm_biblio?: number | null
    num_npag_biblio?: number | null
    txt_ubic_biblio?: string | null
    fk_id_grup: number
    fk_id_carp: number
    Archivos?: ArchivosUncheckedCreateNestedManyWithoutBibliografiasInput
  }

  export type BibliografiasCreateOrConnectWithoutEstudianteInput = {
    where: BibliografiasWhereUniqueInput
    create: XOR<BibliografiasCreateWithoutEstudianteInput, BibliografiasUncheckedCreateWithoutEstudianteInput>
  }

  export type BibliografiasCreateManyEstudianteInputEnvelope = {
    data: BibliografiasCreateManyEstudianteInput | BibliografiasCreateManyEstudianteInput[]
    skipDuplicates?: boolean
  }

  export type CambiosUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: CambiosWhereUniqueInput
    update: XOR<CambiosUpdateWithoutEstudianteInput, CambiosUncheckedUpdateWithoutEstudianteInput>
    create: XOR<CambiosCreateWithoutEstudianteInput, CambiosUncheckedCreateWithoutEstudianteInput>
  }

  export type CambiosUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: CambiosWhereUniqueInput
    data: XOR<CambiosUpdateWithoutEstudianteInput, CambiosUncheckedUpdateWithoutEstudianteInput>
  }

  export type CambiosUpdateManyWithWhereWithoutEstudianteInput = {
    where: CambiosScalarWhereInput
    data: XOR<CambiosUpdateManyMutationInput, CambiosUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type CambiosScalarWhereInput = {
    AND?: CambiosScalarWhereInput | CambiosScalarWhereInput[]
    OR?: CambiosScalarWhereInput[]
    NOT?: CambiosScalarWhereInput | CambiosScalarWhereInput[]
    pk_id_camb?: IntFilter<"Cambios"> | number
    num_tip_camb?: IntFilter<"Cambios"> | number
    txt_fecha_camb?: DateTimeFilter<"Cambios"> | Date | string
    fk_id_est?: StringFilter<"Cambios"> | string
    fk_id_carp?: IntFilter<"Cambios"> | number
    fk_id_grup?: IntFilter<"Cambios"> | number
  }

  export type GruposUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: GruposWhereUniqueInput
    update: XOR<GruposUpdateWithoutEstudianteInput, GruposUncheckedUpdateWithoutEstudianteInput>
    create: XOR<GruposCreateWithoutEstudianteInput, GruposUncheckedCreateWithoutEstudianteInput>
  }

  export type GruposUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: GruposWhereUniqueInput
    data: XOR<GruposUpdateWithoutEstudianteInput, GruposUncheckedUpdateWithoutEstudianteInput>
  }

  export type GruposUpdateManyWithWhereWithoutEstudianteInput = {
    where: GruposScalarWhereInput
    data: XOR<GruposUpdateManyMutationInput, GruposUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type GruposScalarWhereInput = {
    AND?: GruposScalarWhereInput | GruposScalarWhereInput[]
    OR?: GruposScalarWhereInput[]
    NOT?: GruposScalarWhereInput | GruposScalarWhereInput[]
    pk_id_grup?: IntFilter<"Grupos"> | number
    txt_nom_grup?: StringFilter<"Grupos"> | string
    fk_id_est?: StringFilter<"Grupos"> | string
  }

  export type GrupoConAccesoUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: GrupoConAccesoWhereUniqueInput
    update: XOR<GrupoConAccesoUpdateWithoutEstudianteInput, GrupoConAccesoUncheckedUpdateWithoutEstudianteInput>
    create: XOR<GrupoConAccesoCreateWithoutEstudianteInput, GrupoConAccesoUncheckedCreateWithoutEstudianteInput>
  }

  export type GrupoConAccesoUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: GrupoConAccesoWhereUniqueInput
    data: XOR<GrupoConAccesoUpdateWithoutEstudianteInput, GrupoConAccesoUncheckedUpdateWithoutEstudianteInput>
  }

  export type GrupoConAccesoUpdateManyWithWhereWithoutEstudianteInput = {
    where: GrupoConAccesoScalarWhereInput
    data: XOR<GrupoConAccesoUpdateManyMutationInput, GrupoConAccesoUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type GrupoConAccesoScalarWhereInput = {
    AND?: GrupoConAccesoScalarWhereInput | GrupoConAccesoScalarWhereInput[]
    OR?: GrupoConAccesoScalarWhereInput[]
    NOT?: GrupoConAccesoScalarWhereInput | GrupoConAccesoScalarWhereInput[]
    fk_id_grup?: IntFilter<"GrupoConAcceso"> | number
    fk_id_est?: StringFilter<"GrupoConAcceso"> | string
  }

  export type CarpetasUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: CarpetasWhereUniqueInput
    update: XOR<CarpetasUpdateWithoutEstudianteInput, CarpetasUncheckedUpdateWithoutEstudianteInput>
    create: XOR<CarpetasCreateWithoutEstudianteInput, CarpetasUncheckedCreateWithoutEstudianteInput>
  }

  export type CarpetasUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: CarpetasWhereUniqueInput
    data: XOR<CarpetasUpdateWithoutEstudianteInput, CarpetasUncheckedUpdateWithoutEstudianteInput>
  }

  export type CarpetasUpdateManyWithWhereWithoutEstudianteInput = {
    where: CarpetasScalarWhereInput
    data: XOR<CarpetasUpdateManyMutationInput, CarpetasUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type CarpetasScalarWhereInput = {
    AND?: CarpetasScalarWhereInput | CarpetasScalarWhereInput[]
    OR?: CarpetasScalarWhereInput[]
    NOT?: CarpetasScalarWhereInput | CarpetasScalarWhereInput[]
    pk_id_carp?: IntFilter<"Carpetas"> | number
    txt_nom_carp?: StringFilter<"Carpetas"> | string
    fk_id_grup?: IntFilter<"Carpetas"> | number
    fk_id_est?: StringFilter<"Carpetas"> | string
  }

  export type BibliografiasUpsertWithWhereUniqueWithoutEstudianteInput = {
    where: BibliografiasWhereUniqueInput
    update: XOR<BibliografiasUpdateWithoutEstudianteInput, BibliografiasUncheckedUpdateWithoutEstudianteInput>
    create: XOR<BibliografiasCreateWithoutEstudianteInput, BibliografiasUncheckedCreateWithoutEstudianteInput>
  }

  export type BibliografiasUpdateWithWhereUniqueWithoutEstudianteInput = {
    where: BibliografiasWhereUniqueInput
    data: XOR<BibliografiasUpdateWithoutEstudianteInput, BibliografiasUncheckedUpdateWithoutEstudianteInput>
  }

  export type BibliografiasUpdateManyWithWhereWithoutEstudianteInput = {
    where: BibliografiasScalarWhereInput
    data: XOR<BibliografiasUpdateManyMutationInput, BibliografiasUncheckedUpdateManyWithoutEstudianteInput>
  }

  export type BibliografiasScalarWhereInput = {
    AND?: BibliografiasScalarWhereInput | BibliografiasScalarWhereInput[]
    OR?: BibliografiasScalarWhereInput[]
    NOT?: BibliografiasScalarWhereInput | BibliografiasScalarWhereInput[]
    pk_id_biblio?: IntFilter<"Bibliografias"> | number
    txt_tit_biblio?: StringFilter<"Bibliografias"> | string
    num_tip_biblio?: IntFilter<"Bibliografias"> | number
    num_fmt_biblio?: IntFilter<"Bibliografias"> | number
    txt_fecha_biblio?: DateTimeFilter<"Bibliografias"> | Date | string
    txt_aut_biblio?: StringFilter<"Bibliografias"> | string
    txt_edit_biblio?: StringNullableFilter<"Bibliografias"> | string | null
    txt_dir_biblio?: StringNullableFilter<"Bibliografias"> | string | null
    txt_pag_biblio?: StringNullableFilter<"Bibliografias"> | string | null
    num_edic_biblio?: IntNullableFilter<"Bibliografias"> | number | null
    num_volm_biblio?: IntNullableFilter<"Bibliografias"> | number | null
    num_npag_biblio?: IntNullableFilter<"Bibliografias"> | number | null
    txt_ubic_biblio?: StringNullableFilter<"Bibliografias"> | string | null
    fk_id_grup?: IntFilter<"Bibliografias"> | number
    fk_id_carp?: IntFilter<"Bibliografias"> | number
    fk_id_est?: StringFilter<"Bibliografias"> | string
  }

  export type GruposCreateWithoutBibliografiasInput = {
    txt_nom_grup: string
    Estudiante: EstudiantesCreateNestedOneWithoutGruposInput
    Cambios?: CambiosCreateNestedManyWithoutGrupoInput
    Carpetas?: CarpetasCreateNestedManyWithoutGrupoInput
    GrupoConAcceso?: GrupoConAccesoCreateNestedManyWithoutGrupoInput
  }

  export type GruposUncheckedCreateWithoutBibliografiasInput = {
    pk_id_grup?: number
    txt_nom_grup: string
    fk_id_est: string
    Cambios?: CambiosUncheckedCreateNestedManyWithoutGrupoInput
    Carpetas?: CarpetasUncheckedCreateNestedManyWithoutGrupoInput
    GrupoConAcceso?: GrupoConAccesoUncheckedCreateNestedManyWithoutGrupoInput
  }

  export type GruposCreateOrConnectWithoutBibliografiasInput = {
    where: GruposWhereUniqueInput
    create: XOR<GruposCreateWithoutBibliografiasInput, GruposUncheckedCreateWithoutBibliografiasInput>
  }

  export type CarpetasCreateWithoutBibliografiasInput = {
    txt_nom_carp: string
    Grupo: GruposCreateNestedOneWithoutCarpetasInput
    Estudiante: EstudiantesCreateNestedOneWithoutCarpetasInput
    Cambios?: CambiosCreateNestedManyWithoutCarpetaInput
  }

  export type CarpetasUncheckedCreateWithoutBibliografiasInput = {
    pk_id_carp?: number
    txt_nom_carp: string
    fk_id_grup: number
    fk_id_est: string
    Cambios?: CambiosUncheckedCreateNestedManyWithoutCarpetaInput
  }

  export type CarpetasCreateOrConnectWithoutBibliografiasInput = {
    where: CarpetasWhereUniqueInput
    create: XOR<CarpetasCreateWithoutBibliografiasInput, CarpetasUncheckedCreateWithoutBibliografiasInput>
  }

  export type EstudiantesCreateWithoutBibliografiasInput = {
    pk_id_est?: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est?: number
    Cambios?: CambiosCreateNestedManyWithoutEstudianteInput
    Grupos?: GruposCreateNestedManyWithoutEstudianteInput
    GrupoConAcceso?: GrupoConAccesoCreateNestedManyWithoutEstudianteInput
    Carpetas?: CarpetasCreateNestedManyWithoutEstudianteInput
  }

  export type EstudiantesUncheckedCreateWithoutBibliografiasInput = {
    pk_id_est?: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est?: number
    Cambios?: CambiosUncheckedCreateNestedManyWithoutEstudianteInput
    Grupos?: GruposUncheckedCreateNestedManyWithoutEstudianteInput
    GrupoConAcceso?: GrupoConAccesoUncheckedCreateNestedManyWithoutEstudianteInput
    Carpetas?: CarpetasUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudiantesCreateOrConnectWithoutBibliografiasInput = {
    where: EstudiantesWhereUniqueInput
    create: XOR<EstudiantesCreateWithoutBibliografiasInput, EstudiantesUncheckedCreateWithoutBibliografiasInput>
  }

  export type ArchivosCreateWithoutBibliografiasInput = {
    txt_dir_arch: string
  }

  export type ArchivosUncheckedCreateWithoutBibliografiasInput = {
    pk_id_arch?: number
    txt_dir_arch: string
  }

  export type ArchivosCreateOrConnectWithoutBibliografiasInput = {
    where: ArchivosWhereUniqueInput
    create: XOR<ArchivosCreateWithoutBibliografiasInput, ArchivosUncheckedCreateWithoutBibliografiasInput>
  }

  export type ArchivosCreateManyBibliografiasInputEnvelope = {
    data: ArchivosCreateManyBibliografiasInput | ArchivosCreateManyBibliografiasInput[]
    skipDuplicates?: boolean
  }

  export type GruposUpsertWithoutBibliografiasInput = {
    update: XOR<GruposUpdateWithoutBibliografiasInput, GruposUncheckedUpdateWithoutBibliografiasInput>
    create: XOR<GruposCreateWithoutBibliografiasInput, GruposUncheckedCreateWithoutBibliografiasInput>
    where?: GruposWhereInput
  }

  export type GruposUpdateToOneWithWhereWithoutBibliografiasInput = {
    where?: GruposWhereInput
    data: XOR<GruposUpdateWithoutBibliografiasInput, GruposUncheckedUpdateWithoutBibliografiasInput>
  }

  export type GruposUpdateWithoutBibliografiasInput = {
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
    Estudiante?: EstudiantesUpdateOneRequiredWithoutGruposNestedInput
    Cambios?: CambiosUpdateManyWithoutGrupoNestedInput
    Carpetas?: CarpetasUpdateManyWithoutGrupoNestedInput
    GrupoConAcceso?: GrupoConAccesoUpdateManyWithoutGrupoNestedInput
  }

  export type GruposUncheckedUpdateWithoutBibliografiasInput = {
    pk_id_grup?: IntFieldUpdateOperationsInput | number
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
    fk_id_est?: StringFieldUpdateOperationsInput | string
    Cambios?: CambiosUncheckedUpdateManyWithoutGrupoNestedInput
    Carpetas?: CarpetasUncheckedUpdateManyWithoutGrupoNestedInput
    GrupoConAcceso?: GrupoConAccesoUncheckedUpdateManyWithoutGrupoNestedInput
  }

  export type CarpetasUpsertWithoutBibliografiasInput = {
    update: XOR<CarpetasUpdateWithoutBibliografiasInput, CarpetasUncheckedUpdateWithoutBibliografiasInput>
    create: XOR<CarpetasCreateWithoutBibliografiasInput, CarpetasUncheckedCreateWithoutBibliografiasInput>
    where?: CarpetasWhereInput
  }

  export type CarpetasUpdateToOneWithWhereWithoutBibliografiasInput = {
    where?: CarpetasWhereInput
    data: XOR<CarpetasUpdateWithoutBibliografiasInput, CarpetasUncheckedUpdateWithoutBibliografiasInput>
  }

  export type CarpetasUpdateWithoutBibliografiasInput = {
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    Grupo?: GruposUpdateOneRequiredWithoutCarpetasNestedInput
    Estudiante?: EstudiantesUpdateOneRequiredWithoutCarpetasNestedInput
    Cambios?: CambiosUpdateManyWithoutCarpetaNestedInput
  }

  export type CarpetasUncheckedUpdateWithoutBibliografiasInput = {
    pk_id_carp?: IntFieldUpdateOperationsInput | number
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    fk_id_grup?: IntFieldUpdateOperationsInput | number
    fk_id_est?: StringFieldUpdateOperationsInput | string
    Cambios?: CambiosUncheckedUpdateManyWithoutCarpetaNestedInput
  }

  export type EstudiantesUpsertWithoutBibliografiasInput = {
    update: XOR<EstudiantesUpdateWithoutBibliografiasInput, EstudiantesUncheckedUpdateWithoutBibliografiasInput>
    create: XOR<EstudiantesCreateWithoutBibliografiasInput, EstudiantesUncheckedCreateWithoutBibliografiasInput>
    where?: EstudiantesWhereInput
  }

  export type EstudiantesUpdateToOneWithWhereWithoutBibliografiasInput = {
    where?: EstudiantesWhereInput
    data: XOR<EstudiantesUpdateWithoutBibliografiasInput, EstudiantesUncheckedUpdateWithoutBibliografiasInput>
  }

  export type EstudiantesUpdateWithoutBibliografiasInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
    Cambios?: CambiosUpdateManyWithoutEstudianteNestedInput
    Grupos?: GruposUpdateManyWithoutEstudianteNestedInput
    GrupoConAcceso?: GrupoConAccesoUpdateManyWithoutEstudianteNestedInput
    Carpetas?: CarpetasUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudiantesUncheckedUpdateWithoutBibliografiasInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
    Cambios?: CambiosUncheckedUpdateManyWithoutEstudianteNestedInput
    Grupos?: GruposUncheckedUpdateManyWithoutEstudianteNestedInput
    GrupoConAcceso?: GrupoConAccesoUncheckedUpdateManyWithoutEstudianteNestedInput
    Carpetas?: CarpetasUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type ArchivosUpsertWithWhereUniqueWithoutBibliografiasInput = {
    where: ArchivosWhereUniqueInput
    update: XOR<ArchivosUpdateWithoutBibliografiasInput, ArchivosUncheckedUpdateWithoutBibliografiasInput>
    create: XOR<ArchivosCreateWithoutBibliografiasInput, ArchivosUncheckedCreateWithoutBibliografiasInput>
  }

  export type ArchivosUpdateWithWhereUniqueWithoutBibliografiasInput = {
    where: ArchivosWhereUniqueInput
    data: XOR<ArchivosUpdateWithoutBibliografiasInput, ArchivosUncheckedUpdateWithoutBibliografiasInput>
  }

  export type ArchivosUpdateManyWithWhereWithoutBibliografiasInput = {
    where: ArchivosScalarWhereInput
    data: XOR<ArchivosUpdateManyMutationInput, ArchivosUncheckedUpdateManyWithoutBibliografiasInput>
  }

  export type ArchivosScalarWhereInput = {
    AND?: ArchivosScalarWhereInput | ArchivosScalarWhereInput[]
    OR?: ArchivosScalarWhereInput[]
    NOT?: ArchivosScalarWhereInput | ArchivosScalarWhereInput[]
    pk_id_arch?: IntFilter<"Archivos"> | number
    txt_dir_arch?: StringFilter<"Archivos"> | string
    fk_id_biblio?: IntFilter<"Archivos"> | number
  }

  export type BibliografiasCreateWithoutArchivosInput = {
    txt_tit_biblio: string
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: Date | string
    txt_aut_biblio: string
    txt_edit_biblio?: string | null
    txt_dir_biblio?: string | null
    txt_pag_biblio?: string | null
    num_edic_biblio?: number | null
    num_volm_biblio?: number | null
    num_npag_biblio?: number | null
    txt_ubic_biblio?: string | null
    Grupo: GruposCreateNestedOneWithoutBibliografiasInput
    Carpeta: CarpetasCreateNestedOneWithoutBibliografiasInput
    Estudiante: EstudiantesCreateNestedOneWithoutBibliografiasInput
  }

  export type BibliografiasUncheckedCreateWithoutArchivosInput = {
    pk_id_biblio?: number
    txt_tit_biblio: string
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: Date | string
    txt_aut_biblio: string
    txt_edit_biblio?: string | null
    txt_dir_biblio?: string | null
    txt_pag_biblio?: string | null
    num_edic_biblio?: number | null
    num_volm_biblio?: number | null
    num_npag_biblio?: number | null
    txt_ubic_biblio?: string | null
    fk_id_grup: number
    fk_id_carp: number
    fk_id_est: string
  }

  export type BibliografiasCreateOrConnectWithoutArchivosInput = {
    where: BibliografiasWhereUniqueInput
    create: XOR<BibliografiasCreateWithoutArchivosInput, BibliografiasUncheckedCreateWithoutArchivosInput>
  }

  export type BibliografiasUpsertWithoutArchivosInput = {
    update: XOR<BibliografiasUpdateWithoutArchivosInput, BibliografiasUncheckedUpdateWithoutArchivosInput>
    create: XOR<BibliografiasCreateWithoutArchivosInput, BibliografiasUncheckedCreateWithoutArchivosInput>
    where?: BibliografiasWhereInput
  }

  export type BibliografiasUpdateToOneWithWhereWithoutArchivosInput = {
    where?: BibliografiasWhereInput
    data: XOR<BibliografiasUpdateWithoutArchivosInput, BibliografiasUncheckedUpdateWithoutArchivosInput>
  }

  export type BibliografiasUpdateWithoutArchivosInput = {
    txt_tit_biblio?: StringFieldUpdateOperationsInput | string
    num_tip_biblio?: IntFieldUpdateOperationsInput | number
    num_fmt_biblio?: IntFieldUpdateOperationsInput | number
    txt_fecha_biblio?: DateTimeFieldUpdateOperationsInput | Date | string
    txt_aut_biblio?: StringFieldUpdateOperationsInput | string
    txt_edit_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_dir_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_pag_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    num_edic_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_volm_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_npag_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    txt_ubic_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    Grupo?: GruposUpdateOneRequiredWithoutBibliografiasNestedInput
    Carpeta?: CarpetasUpdateOneRequiredWithoutBibliografiasNestedInput
    Estudiante?: EstudiantesUpdateOneRequiredWithoutBibliografiasNestedInput
  }

  export type BibliografiasUncheckedUpdateWithoutArchivosInput = {
    pk_id_biblio?: IntFieldUpdateOperationsInput | number
    txt_tit_biblio?: StringFieldUpdateOperationsInput | string
    num_tip_biblio?: IntFieldUpdateOperationsInput | number
    num_fmt_biblio?: IntFieldUpdateOperationsInput | number
    txt_fecha_biblio?: DateTimeFieldUpdateOperationsInput | Date | string
    txt_aut_biblio?: StringFieldUpdateOperationsInput | string
    txt_edit_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_dir_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_pag_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    num_edic_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_volm_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_npag_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    txt_ubic_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_grup?: IntFieldUpdateOperationsInput | number
    fk_id_carp?: IntFieldUpdateOperationsInput | number
    fk_id_est?: StringFieldUpdateOperationsInput | string
  }

  export type GruposCreateWithoutCarpetasInput = {
    txt_nom_grup: string
    Estudiante: EstudiantesCreateNestedOneWithoutGruposInput
    Cambios?: CambiosCreateNestedManyWithoutGrupoInput
    Bibliografias?: BibliografiasCreateNestedManyWithoutGrupoInput
    GrupoConAcceso?: GrupoConAccesoCreateNestedManyWithoutGrupoInput
  }

  export type GruposUncheckedCreateWithoutCarpetasInput = {
    pk_id_grup?: number
    txt_nom_grup: string
    fk_id_est: string
    Cambios?: CambiosUncheckedCreateNestedManyWithoutGrupoInput
    Bibliografias?: BibliografiasUncheckedCreateNestedManyWithoutGrupoInput
    GrupoConAcceso?: GrupoConAccesoUncheckedCreateNestedManyWithoutGrupoInput
  }

  export type GruposCreateOrConnectWithoutCarpetasInput = {
    where: GruposWhereUniqueInput
    create: XOR<GruposCreateWithoutCarpetasInput, GruposUncheckedCreateWithoutCarpetasInput>
  }

  export type EstudiantesCreateWithoutCarpetasInput = {
    pk_id_est?: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est?: number
    Cambios?: CambiosCreateNestedManyWithoutEstudianteInput
    Grupos?: GruposCreateNestedManyWithoutEstudianteInput
    GrupoConAcceso?: GrupoConAccesoCreateNestedManyWithoutEstudianteInput
    Bibliografias?: BibliografiasCreateNestedManyWithoutEstudianteInput
  }

  export type EstudiantesUncheckedCreateWithoutCarpetasInput = {
    pk_id_est?: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est?: number
    Cambios?: CambiosUncheckedCreateNestedManyWithoutEstudianteInput
    Grupos?: GruposUncheckedCreateNestedManyWithoutEstudianteInput
    GrupoConAcceso?: GrupoConAccesoUncheckedCreateNestedManyWithoutEstudianteInput
    Bibliografias?: BibliografiasUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudiantesCreateOrConnectWithoutCarpetasInput = {
    where: EstudiantesWhereUniqueInput
    create: XOR<EstudiantesCreateWithoutCarpetasInput, EstudiantesUncheckedCreateWithoutCarpetasInput>
  }

  export type CambiosCreateWithoutCarpetaInput = {
    num_tip_camb: number
    txt_fecha_camb: Date | string
    Estudiante: EstudiantesCreateNestedOneWithoutCambiosInput
    Grupo: GruposCreateNestedOneWithoutCambiosInput
  }

  export type CambiosUncheckedCreateWithoutCarpetaInput = {
    pk_id_camb?: number
    num_tip_camb: number
    txt_fecha_camb: Date | string
    fk_id_est: string
    fk_id_grup: number
  }

  export type CambiosCreateOrConnectWithoutCarpetaInput = {
    where: CambiosWhereUniqueInput
    create: XOR<CambiosCreateWithoutCarpetaInput, CambiosUncheckedCreateWithoutCarpetaInput>
  }

  export type CambiosCreateManyCarpetaInputEnvelope = {
    data: CambiosCreateManyCarpetaInput | CambiosCreateManyCarpetaInput[]
    skipDuplicates?: boolean
  }

  export type BibliografiasCreateWithoutCarpetaInput = {
    txt_tit_biblio: string
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: Date | string
    txt_aut_biblio: string
    txt_edit_biblio?: string | null
    txt_dir_biblio?: string | null
    txt_pag_biblio?: string | null
    num_edic_biblio?: number | null
    num_volm_biblio?: number | null
    num_npag_biblio?: number | null
    txt_ubic_biblio?: string | null
    Grupo: GruposCreateNestedOneWithoutBibliografiasInput
    Estudiante: EstudiantesCreateNestedOneWithoutBibliografiasInput
    Archivos?: ArchivosCreateNestedManyWithoutBibliografiasInput
  }

  export type BibliografiasUncheckedCreateWithoutCarpetaInput = {
    pk_id_biblio?: number
    txt_tit_biblio: string
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: Date | string
    txt_aut_biblio: string
    txt_edit_biblio?: string | null
    txt_dir_biblio?: string | null
    txt_pag_biblio?: string | null
    num_edic_biblio?: number | null
    num_volm_biblio?: number | null
    num_npag_biblio?: number | null
    txt_ubic_biblio?: string | null
    fk_id_grup: number
    fk_id_est: string
    Archivos?: ArchivosUncheckedCreateNestedManyWithoutBibliografiasInput
  }

  export type BibliografiasCreateOrConnectWithoutCarpetaInput = {
    where: BibliografiasWhereUniqueInput
    create: XOR<BibliografiasCreateWithoutCarpetaInput, BibliografiasUncheckedCreateWithoutCarpetaInput>
  }

  export type BibliografiasCreateManyCarpetaInputEnvelope = {
    data: BibliografiasCreateManyCarpetaInput | BibliografiasCreateManyCarpetaInput[]
    skipDuplicates?: boolean
  }

  export type GruposUpsertWithoutCarpetasInput = {
    update: XOR<GruposUpdateWithoutCarpetasInput, GruposUncheckedUpdateWithoutCarpetasInput>
    create: XOR<GruposCreateWithoutCarpetasInput, GruposUncheckedCreateWithoutCarpetasInput>
    where?: GruposWhereInput
  }

  export type GruposUpdateToOneWithWhereWithoutCarpetasInput = {
    where?: GruposWhereInput
    data: XOR<GruposUpdateWithoutCarpetasInput, GruposUncheckedUpdateWithoutCarpetasInput>
  }

  export type GruposUpdateWithoutCarpetasInput = {
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
    Estudiante?: EstudiantesUpdateOneRequiredWithoutGruposNestedInput
    Cambios?: CambiosUpdateManyWithoutGrupoNestedInput
    Bibliografias?: BibliografiasUpdateManyWithoutGrupoNestedInput
    GrupoConAcceso?: GrupoConAccesoUpdateManyWithoutGrupoNestedInput
  }

  export type GruposUncheckedUpdateWithoutCarpetasInput = {
    pk_id_grup?: IntFieldUpdateOperationsInput | number
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
    fk_id_est?: StringFieldUpdateOperationsInput | string
    Cambios?: CambiosUncheckedUpdateManyWithoutGrupoNestedInput
    Bibliografias?: BibliografiasUncheckedUpdateManyWithoutGrupoNestedInput
    GrupoConAcceso?: GrupoConAccesoUncheckedUpdateManyWithoutGrupoNestedInput
  }

  export type EstudiantesUpsertWithoutCarpetasInput = {
    update: XOR<EstudiantesUpdateWithoutCarpetasInput, EstudiantesUncheckedUpdateWithoutCarpetasInput>
    create: XOR<EstudiantesCreateWithoutCarpetasInput, EstudiantesUncheckedCreateWithoutCarpetasInput>
    where?: EstudiantesWhereInput
  }

  export type EstudiantesUpdateToOneWithWhereWithoutCarpetasInput = {
    where?: EstudiantesWhereInput
    data: XOR<EstudiantesUpdateWithoutCarpetasInput, EstudiantesUncheckedUpdateWithoutCarpetasInput>
  }

  export type EstudiantesUpdateWithoutCarpetasInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
    Cambios?: CambiosUpdateManyWithoutEstudianteNestedInput
    Grupos?: GruposUpdateManyWithoutEstudianteNestedInput
    GrupoConAcceso?: GrupoConAccesoUpdateManyWithoutEstudianteNestedInput
    Bibliografias?: BibliografiasUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudiantesUncheckedUpdateWithoutCarpetasInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
    Cambios?: CambiosUncheckedUpdateManyWithoutEstudianteNestedInput
    Grupos?: GruposUncheckedUpdateManyWithoutEstudianteNestedInput
    GrupoConAcceso?: GrupoConAccesoUncheckedUpdateManyWithoutEstudianteNestedInput
    Bibliografias?: BibliografiasUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type CambiosUpsertWithWhereUniqueWithoutCarpetaInput = {
    where: CambiosWhereUniqueInput
    update: XOR<CambiosUpdateWithoutCarpetaInput, CambiosUncheckedUpdateWithoutCarpetaInput>
    create: XOR<CambiosCreateWithoutCarpetaInput, CambiosUncheckedCreateWithoutCarpetaInput>
  }

  export type CambiosUpdateWithWhereUniqueWithoutCarpetaInput = {
    where: CambiosWhereUniqueInput
    data: XOR<CambiosUpdateWithoutCarpetaInput, CambiosUncheckedUpdateWithoutCarpetaInput>
  }

  export type CambiosUpdateManyWithWhereWithoutCarpetaInput = {
    where: CambiosScalarWhereInput
    data: XOR<CambiosUpdateManyMutationInput, CambiosUncheckedUpdateManyWithoutCarpetaInput>
  }

  export type BibliografiasUpsertWithWhereUniqueWithoutCarpetaInput = {
    where: BibliografiasWhereUniqueInput
    update: XOR<BibliografiasUpdateWithoutCarpetaInput, BibliografiasUncheckedUpdateWithoutCarpetaInput>
    create: XOR<BibliografiasCreateWithoutCarpetaInput, BibliografiasUncheckedCreateWithoutCarpetaInput>
  }

  export type BibliografiasUpdateWithWhereUniqueWithoutCarpetaInput = {
    where: BibliografiasWhereUniqueInput
    data: XOR<BibliografiasUpdateWithoutCarpetaInput, BibliografiasUncheckedUpdateWithoutCarpetaInput>
  }

  export type BibliografiasUpdateManyWithWhereWithoutCarpetaInput = {
    where: BibliografiasScalarWhereInput
    data: XOR<BibliografiasUpdateManyMutationInput, BibliografiasUncheckedUpdateManyWithoutCarpetaInput>
  }

  export type GruposCreateWithoutGrupoConAccesoInput = {
    txt_nom_grup: string
    Estudiante: EstudiantesCreateNestedOneWithoutGruposInput
    Cambios?: CambiosCreateNestedManyWithoutGrupoInput
    Carpetas?: CarpetasCreateNestedManyWithoutGrupoInput
    Bibliografias?: BibliografiasCreateNestedManyWithoutGrupoInput
  }

  export type GruposUncheckedCreateWithoutGrupoConAccesoInput = {
    pk_id_grup?: number
    txt_nom_grup: string
    fk_id_est: string
    Cambios?: CambiosUncheckedCreateNestedManyWithoutGrupoInput
    Carpetas?: CarpetasUncheckedCreateNestedManyWithoutGrupoInput
    Bibliografias?: BibliografiasUncheckedCreateNestedManyWithoutGrupoInput
  }

  export type GruposCreateOrConnectWithoutGrupoConAccesoInput = {
    where: GruposWhereUniqueInput
    create: XOR<GruposCreateWithoutGrupoConAccesoInput, GruposUncheckedCreateWithoutGrupoConAccesoInput>
  }

  export type EstudiantesCreateWithoutGrupoConAccesoInput = {
    pk_id_est?: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est?: number
    Cambios?: CambiosCreateNestedManyWithoutEstudianteInput
    Grupos?: GruposCreateNestedManyWithoutEstudianteInput
    Carpetas?: CarpetasCreateNestedManyWithoutEstudianteInput
    Bibliografias?: BibliografiasCreateNestedManyWithoutEstudianteInput
  }

  export type EstudiantesUncheckedCreateWithoutGrupoConAccesoInput = {
    pk_id_est?: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est?: number
    Cambios?: CambiosUncheckedCreateNestedManyWithoutEstudianteInput
    Grupos?: GruposUncheckedCreateNestedManyWithoutEstudianteInput
    Carpetas?: CarpetasUncheckedCreateNestedManyWithoutEstudianteInput
    Bibliografias?: BibliografiasUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudiantesCreateOrConnectWithoutGrupoConAccesoInput = {
    where: EstudiantesWhereUniqueInput
    create: XOR<EstudiantesCreateWithoutGrupoConAccesoInput, EstudiantesUncheckedCreateWithoutGrupoConAccesoInput>
  }

  export type GruposUpsertWithoutGrupoConAccesoInput = {
    update: XOR<GruposUpdateWithoutGrupoConAccesoInput, GruposUncheckedUpdateWithoutGrupoConAccesoInput>
    create: XOR<GruposCreateWithoutGrupoConAccesoInput, GruposUncheckedCreateWithoutGrupoConAccesoInput>
    where?: GruposWhereInput
  }

  export type GruposUpdateToOneWithWhereWithoutGrupoConAccesoInput = {
    where?: GruposWhereInput
    data: XOR<GruposUpdateWithoutGrupoConAccesoInput, GruposUncheckedUpdateWithoutGrupoConAccesoInput>
  }

  export type GruposUpdateWithoutGrupoConAccesoInput = {
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
    Estudiante?: EstudiantesUpdateOneRequiredWithoutGruposNestedInput
    Cambios?: CambiosUpdateManyWithoutGrupoNestedInput
    Carpetas?: CarpetasUpdateManyWithoutGrupoNestedInput
    Bibliografias?: BibliografiasUpdateManyWithoutGrupoNestedInput
  }

  export type GruposUncheckedUpdateWithoutGrupoConAccesoInput = {
    pk_id_grup?: IntFieldUpdateOperationsInput | number
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
    fk_id_est?: StringFieldUpdateOperationsInput | string
    Cambios?: CambiosUncheckedUpdateManyWithoutGrupoNestedInput
    Carpetas?: CarpetasUncheckedUpdateManyWithoutGrupoNestedInput
    Bibliografias?: BibliografiasUncheckedUpdateManyWithoutGrupoNestedInput
  }

  export type EstudiantesUpsertWithoutGrupoConAccesoInput = {
    update: XOR<EstudiantesUpdateWithoutGrupoConAccesoInput, EstudiantesUncheckedUpdateWithoutGrupoConAccesoInput>
    create: XOR<EstudiantesCreateWithoutGrupoConAccesoInput, EstudiantesUncheckedCreateWithoutGrupoConAccesoInput>
    where?: EstudiantesWhereInput
  }

  export type EstudiantesUpdateToOneWithWhereWithoutGrupoConAccesoInput = {
    where?: EstudiantesWhereInput
    data: XOR<EstudiantesUpdateWithoutGrupoConAccesoInput, EstudiantesUncheckedUpdateWithoutGrupoConAccesoInput>
  }

  export type EstudiantesUpdateWithoutGrupoConAccesoInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
    Cambios?: CambiosUpdateManyWithoutEstudianteNestedInput
    Grupos?: GruposUpdateManyWithoutEstudianteNestedInput
    Carpetas?: CarpetasUpdateManyWithoutEstudianteNestedInput
    Bibliografias?: BibliografiasUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudiantesUncheckedUpdateWithoutGrupoConAccesoInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
    Cambios?: CambiosUncheckedUpdateManyWithoutEstudianteNestedInput
    Grupos?: GruposUncheckedUpdateManyWithoutEstudianteNestedInput
    Carpetas?: CarpetasUncheckedUpdateManyWithoutEstudianteNestedInput
    Bibliografias?: BibliografiasUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudiantesCreateWithoutGruposInput = {
    pk_id_est?: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est?: number
    Cambios?: CambiosCreateNestedManyWithoutEstudianteInput
    GrupoConAcceso?: GrupoConAccesoCreateNestedManyWithoutEstudianteInput
    Carpetas?: CarpetasCreateNestedManyWithoutEstudianteInput
    Bibliografias?: BibliografiasCreateNestedManyWithoutEstudianteInput
  }

  export type EstudiantesUncheckedCreateWithoutGruposInput = {
    pk_id_est?: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est?: number
    Cambios?: CambiosUncheckedCreateNestedManyWithoutEstudianteInput
    GrupoConAcceso?: GrupoConAccesoUncheckedCreateNestedManyWithoutEstudianteInput
    Carpetas?: CarpetasUncheckedCreateNestedManyWithoutEstudianteInput
    Bibliografias?: BibliografiasUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudiantesCreateOrConnectWithoutGruposInput = {
    where: EstudiantesWhereUniqueInput
    create: XOR<EstudiantesCreateWithoutGruposInput, EstudiantesUncheckedCreateWithoutGruposInput>
  }

  export type CambiosCreateWithoutGrupoInput = {
    num_tip_camb: number
    txt_fecha_camb: Date | string
    Estudiante: EstudiantesCreateNestedOneWithoutCambiosInput
    Carpeta: CarpetasCreateNestedOneWithoutCambiosInput
  }

  export type CambiosUncheckedCreateWithoutGrupoInput = {
    pk_id_camb?: number
    num_tip_camb: number
    txt_fecha_camb: Date | string
    fk_id_est: string
    fk_id_carp: number
  }

  export type CambiosCreateOrConnectWithoutGrupoInput = {
    where: CambiosWhereUniqueInput
    create: XOR<CambiosCreateWithoutGrupoInput, CambiosUncheckedCreateWithoutGrupoInput>
  }

  export type CambiosCreateManyGrupoInputEnvelope = {
    data: CambiosCreateManyGrupoInput | CambiosCreateManyGrupoInput[]
    skipDuplicates?: boolean
  }

  export type CarpetasCreateWithoutGrupoInput = {
    txt_nom_carp: string
    Estudiante: EstudiantesCreateNestedOneWithoutCarpetasInput
    Cambios?: CambiosCreateNestedManyWithoutCarpetaInput
    Bibliografias?: BibliografiasCreateNestedManyWithoutCarpetaInput
  }

  export type CarpetasUncheckedCreateWithoutGrupoInput = {
    pk_id_carp?: number
    txt_nom_carp: string
    fk_id_est: string
    Cambios?: CambiosUncheckedCreateNestedManyWithoutCarpetaInput
    Bibliografias?: BibliografiasUncheckedCreateNestedManyWithoutCarpetaInput
  }

  export type CarpetasCreateOrConnectWithoutGrupoInput = {
    where: CarpetasWhereUniqueInput
    create: XOR<CarpetasCreateWithoutGrupoInput, CarpetasUncheckedCreateWithoutGrupoInput>
  }

  export type CarpetasCreateManyGrupoInputEnvelope = {
    data: CarpetasCreateManyGrupoInput | CarpetasCreateManyGrupoInput[]
    skipDuplicates?: boolean
  }

  export type BibliografiasCreateWithoutGrupoInput = {
    txt_tit_biblio: string
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: Date | string
    txt_aut_biblio: string
    txt_edit_biblio?: string | null
    txt_dir_biblio?: string | null
    txt_pag_biblio?: string | null
    num_edic_biblio?: number | null
    num_volm_biblio?: number | null
    num_npag_biblio?: number | null
    txt_ubic_biblio?: string | null
    Carpeta: CarpetasCreateNestedOneWithoutBibliografiasInput
    Estudiante: EstudiantesCreateNestedOneWithoutBibliografiasInput
    Archivos?: ArchivosCreateNestedManyWithoutBibliografiasInput
  }

  export type BibliografiasUncheckedCreateWithoutGrupoInput = {
    pk_id_biblio?: number
    txt_tit_biblio: string
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: Date | string
    txt_aut_biblio: string
    txt_edit_biblio?: string | null
    txt_dir_biblio?: string | null
    txt_pag_biblio?: string | null
    num_edic_biblio?: number | null
    num_volm_biblio?: number | null
    num_npag_biblio?: number | null
    txt_ubic_biblio?: string | null
    fk_id_carp: number
    fk_id_est: string
    Archivos?: ArchivosUncheckedCreateNestedManyWithoutBibliografiasInput
  }

  export type BibliografiasCreateOrConnectWithoutGrupoInput = {
    where: BibliografiasWhereUniqueInput
    create: XOR<BibliografiasCreateWithoutGrupoInput, BibliografiasUncheckedCreateWithoutGrupoInput>
  }

  export type BibliografiasCreateManyGrupoInputEnvelope = {
    data: BibliografiasCreateManyGrupoInput | BibliografiasCreateManyGrupoInput[]
    skipDuplicates?: boolean
  }

  export type GrupoConAccesoCreateWithoutGrupoInput = {
    Estudiante: EstudiantesCreateNestedOneWithoutGrupoConAccesoInput
  }

  export type GrupoConAccesoUncheckedCreateWithoutGrupoInput = {
    fk_id_est: string
  }

  export type GrupoConAccesoCreateOrConnectWithoutGrupoInput = {
    where: GrupoConAccesoWhereUniqueInput
    create: XOR<GrupoConAccesoCreateWithoutGrupoInput, GrupoConAccesoUncheckedCreateWithoutGrupoInput>
  }

  export type GrupoConAccesoCreateManyGrupoInputEnvelope = {
    data: GrupoConAccesoCreateManyGrupoInput | GrupoConAccesoCreateManyGrupoInput[]
    skipDuplicates?: boolean
  }

  export type EstudiantesUpsertWithoutGruposInput = {
    update: XOR<EstudiantesUpdateWithoutGruposInput, EstudiantesUncheckedUpdateWithoutGruposInput>
    create: XOR<EstudiantesCreateWithoutGruposInput, EstudiantesUncheckedCreateWithoutGruposInput>
    where?: EstudiantesWhereInput
  }

  export type EstudiantesUpdateToOneWithWhereWithoutGruposInput = {
    where?: EstudiantesWhereInput
    data: XOR<EstudiantesUpdateWithoutGruposInput, EstudiantesUncheckedUpdateWithoutGruposInput>
  }

  export type EstudiantesUpdateWithoutGruposInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
    Cambios?: CambiosUpdateManyWithoutEstudianteNestedInput
    GrupoConAcceso?: GrupoConAccesoUpdateManyWithoutEstudianteNestedInput
    Carpetas?: CarpetasUpdateManyWithoutEstudianteNestedInput
    Bibliografias?: BibliografiasUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudiantesUncheckedUpdateWithoutGruposInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
    Cambios?: CambiosUncheckedUpdateManyWithoutEstudianteNestedInput
    GrupoConAcceso?: GrupoConAccesoUncheckedUpdateManyWithoutEstudianteNestedInput
    Carpetas?: CarpetasUncheckedUpdateManyWithoutEstudianteNestedInput
    Bibliografias?: BibliografiasUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type CambiosUpsertWithWhereUniqueWithoutGrupoInput = {
    where: CambiosWhereUniqueInput
    update: XOR<CambiosUpdateWithoutGrupoInput, CambiosUncheckedUpdateWithoutGrupoInput>
    create: XOR<CambiosCreateWithoutGrupoInput, CambiosUncheckedCreateWithoutGrupoInput>
  }

  export type CambiosUpdateWithWhereUniqueWithoutGrupoInput = {
    where: CambiosWhereUniqueInput
    data: XOR<CambiosUpdateWithoutGrupoInput, CambiosUncheckedUpdateWithoutGrupoInput>
  }

  export type CambiosUpdateManyWithWhereWithoutGrupoInput = {
    where: CambiosScalarWhereInput
    data: XOR<CambiosUpdateManyMutationInput, CambiosUncheckedUpdateManyWithoutGrupoInput>
  }

  export type CarpetasUpsertWithWhereUniqueWithoutGrupoInput = {
    where: CarpetasWhereUniqueInput
    update: XOR<CarpetasUpdateWithoutGrupoInput, CarpetasUncheckedUpdateWithoutGrupoInput>
    create: XOR<CarpetasCreateWithoutGrupoInput, CarpetasUncheckedCreateWithoutGrupoInput>
  }

  export type CarpetasUpdateWithWhereUniqueWithoutGrupoInput = {
    where: CarpetasWhereUniqueInput
    data: XOR<CarpetasUpdateWithoutGrupoInput, CarpetasUncheckedUpdateWithoutGrupoInput>
  }

  export type CarpetasUpdateManyWithWhereWithoutGrupoInput = {
    where: CarpetasScalarWhereInput
    data: XOR<CarpetasUpdateManyMutationInput, CarpetasUncheckedUpdateManyWithoutGrupoInput>
  }

  export type BibliografiasUpsertWithWhereUniqueWithoutGrupoInput = {
    where: BibliografiasWhereUniqueInput
    update: XOR<BibliografiasUpdateWithoutGrupoInput, BibliografiasUncheckedUpdateWithoutGrupoInput>
    create: XOR<BibliografiasCreateWithoutGrupoInput, BibliografiasUncheckedCreateWithoutGrupoInput>
  }

  export type BibliografiasUpdateWithWhereUniqueWithoutGrupoInput = {
    where: BibliografiasWhereUniqueInput
    data: XOR<BibliografiasUpdateWithoutGrupoInput, BibliografiasUncheckedUpdateWithoutGrupoInput>
  }

  export type BibliografiasUpdateManyWithWhereWithoutGrupoInput = {
    where: BibliografiasScalarWhereInput
    data: XOR<BibliografiasUpdateManyMutationInput, BibliografiasUncheckedUpdateManyWithoutGrupoInput>
  }

  export type GrupoConAccesoUpsertWithWhereUniqueWithoutGrupoInput = {
    where: GrupoConAccesoWhereUniqueInput
    update: XOR<GrupoConAccesoUpdateWithoutGrupoInput, GrupoConAccesoUncheckedUpdateWithoutGrupoInput>
    create: XOR<GrupoConAccesoCreateWithoutGrupoInput, GrupoConAccesoUncheckedCreateWithoutGrupoInput>
  }

  export type GrupoConAccesoUpdateWithWhereUniqueWithoutGrupoInput = {
    where: GrupoConAccesoWhereUniqueInput
    data: XOR<GrupoConAccesoUpdateWithoutGrupoInput, GrupoConAccesoUncheckedUpdateWithoutGrupoInput>
  }

  export type GrupoConAccesoUpdateManyWithWhereWithoutGrupoInput = {
    where: GrupoConAccesoScalarWhereInput
    data: XOR<GrupoConAccesoUpdateManyMutationInput, GrupoConAccesoUncheckedUpdateManyWithoutGrupoInput>
  }

  export type EstudiantesCreateWithoutCambiosInput = {
    pk_id_est?: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est?: number
    Grupos?: GruposCreateNestedManyWithoutEstudianteInput
    GrupoConAcceso?: GrupoConAccesoCreateNestedManyWithoutEstudianteInput
    Carpetas?: CarpetasCreateNestedManyWithoutEstudianteInput
    Bibliografias?: BibliografiasCreateNestedManyWithoutEstudianteInput
  }

  export type EstudiantesUncheckedCreateWithoutCambiosInput = {
    pk_id_est?: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est?: number
    Grupos?: GruposUncheckedCreateNestedManyWithoutEstudianteInput
    GrupoConAcceso?: GrupoConAccesoUncheckedCreateNestedManyWithoutEstudianteInput
    Carpetas?: CarpetasUncheckedCreateNestedManyWithoutEstudianteInput
    Bibliografias?: BibliografiasUncheckedCreateNestedManyWithoutEstudianteInput
  }

  export type EstudiantesCreateOrConnectWithoutCambiosInput = {
    where: EstudiantesWhereUniqueInput
    create: XOR<EstudiantesCreateWithoutCambiosInput, EstudiantesUncheckedCreateWithoutCambiosInput>
  }

  export type CarpetasCreateWithoutCambiosInput = {
    txt_nom_carp: string
    Grupo: GruposCreateNestedOneWithoutCarpetasInput
    Estudiante: EstudiantesCreateNestedOneWithoutCarpetasInput
    Bibliografias?: BibliografiasCreateNestedManyWithoutCarpetaInput
  }

  export type CarpetasUncheckedCreateWithoutCambiosInput = {
    pk_id_carp?: number
    txt_nom_carp: string
    fk_id_grup: number
    fk_id_est: string
    Bibliografias?: BibliografiasUncheckedCreateNestedManyWithoutCarpetaInput
  }

  export type CarpetasCreateOrConnectWithoutCambiosInput = {
    where: CarpetasWhereUniqueInput
    create: XOR<CarpetasCreateWithoutCambiosInput, CarpetasUncheckedCreateWithoutCambiosInput>
  }

  export type GruposCreateWithoutCambiosInput = {
    txt_nom_grup: string
    Estudiante: EstudiantesCreateNestedOneWithoutGruposInput
    Carpetas?: CarpetasCreateNestedManyWithoutGrupoInput
    Bibliografias?: BibliografiasCreateNestedManyWithoutGrupoInput
    GrupoConAcceso?: GrupoConAccesoCreateNestedManyWithoutGrupoInput
  }

  export type GruposUncheckedCreateWithoutCambiosInput = {
    pk_id_grup?: number
    txt_nom_grup: string
    fk_id_est: string
    Carpetas?: CarpetasUncheckedCreateNestedManyWithoutGrupoInput
    Bibliografias?: BibliografiasUncheckedCreateNestedManyWithoutGrupoInput
    GrupoConAcceso?: GrupoConAccesoUncheckedCreateNestedManyWithoutGrupoInput
  }

  export type GruposCreateOrConnectWithoutCambiosInput = {
    where: GruposWhereUniqueInput
    create: XOR<GruposCreateWithoutCambiosInput, GruposUncheckedCreateWithoutCambiosInput>
  }

  export type EstudiantesUpsertWithoutCambiosInput = {
    update: XOR<EstudiantesUpdateWithoutCambiosInput, EstudiantesUncheckedUpdateWithoutCambiosInput>
    create: XOR<EstudiantesCreateWithoutCambiosInput, EstudiantesUncheckedCreateWithoutCambiosInput>
    where?: EstudiantesWhereInput
  }

  export type EstudiantesUpdateToOneWithWhereWithoutCambiosInput = {
    where?: EstudiantesWhereInput
    data: XOR<EstudiantesUpdateWithoutCambiosInput, EstudiantesUncheckedUpdateWithoutCambiosInput>
  }

  export type EstudiantesUpdateWithoutCambiosInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
    Grupos?: GruposUpdateManyWithoutEstudianteNestedInput
    GrupoConAcceso?: GrupoConAccesoUpdateManyWithoutEstudianteNestedInput
    Carpetas?: CarpetasUpdateManyWithoutEstudianteNestedInput
    Bibliografias?: BibliografiasUpdateManyWithoutEstudianteNestedInput
  }

  export type EstudiantesUncheckedUpdateWithoutCambiosInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
    Grupos?: GruposUncheckedUpdateManyWithoutEstudianteNestedInput
    GrupoConAcceso?: GrupoConAccesoUncheckedUpdateManyWithoutEstudianteNestedInput
    Carpetas?: CarpetasUncheckedUpdateManyWithoutEstudianteNestedInput
    Bibliografias?: BibliografiasUncheckedUpdateManyWithoutEstudianteNestedInput
  }

  export type CarpetasUpsertWithoutCambiosInput = {
    update: XOR<CarpetasUpdateWithoutCambiosInput, CarpetasUncheckedUpdateWithoutCambiosInput>
    create: XOR<CarpetasCreateWithoutCambiosInput, CarpetasUncheckedCreateWithoutCambiosInput>
    where?: CarpetasWhereInput
  }

  export type CarpetasUpdateToOneWithWhereWithoutCambiosInput = {
    where?: CarpetasWhereInput
    data: XOR<CarpetasUpdateWithoutCambiosInput, CarpetasUncheckedUpdateWithoutCambiosInput>
  }

  export type CarpetasUpdateWithoutCambiosInput = {
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    Grupo?: GruposUpdateOneRequiredWithoutCarpetasNestedInput
    Estudiante?: EstudiantesUpdateOneRequiredWithoutCarpetasNestedInput
    Bibliografias?: BibliografiasUpdateManyWithoutCarpetaNestedInput
  }

  export type CarpetasUncheckedUpdateWithoutCambiosInput = {
    pk_id_carp?: IntFieldUpdateOperationsInput | number
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    fk_id_grup?: IntFieldUpdateOperationsInput | number
    fk_id_est?: StringFieldUpdateOperationsInput | string
    Bibliografias?: BibliografiasUncheckedUpdateManyWithoutCarpetaNestedInput
  }

  export type GruposUpsertWithoutCambiosInput = {
    update: XOR<GruposUpdateWithoutCambiosInput, GruposUncheckedUpdateWithoutCambiosInput>
    create: XOR<GruposCreateWithoutCambiosInput, GruposUncheckedCreateWithoutCambiosInput>
    where?: GruposWhereInput
  }

  export type GruposUpdateToOneWithWhereWithoutCambiosInput = {
    where?: GruposWhereInput
    data: XOR<GruposUpdateWithoutCambiosInput, GruposUncheckedUpdateWithoutCambiosInput>
  }

  export type GruposUpdateWithoutCambiosInput = {
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
    Estudiante?: EstudiantesUpdateOneRequiredWithoutGruposNestedInput
    Carpetas?: CarpetasUpdateManyWithoutGrupoNestedInput
    Bibliografias?: BibliografiasUpdateManyWithoutGrupoNestedInput
    GrupoConAcceso?: GrupoConAccesoUpdateManyWithoutGrupoNestedInput
  }

  export type GruposUncheckedUpdateWithoutCambiosInput = {
    pk_id_grup?: IntFieldUpdateOperationsInput | number
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
    fk_id_est?: StringFieldUpdateOperationsInput | string
    Carpetas?: CarpetasUncheckedUpdateManyWithoutGrupoNestedInput
    Bibliografias?: BibliografiasUncheckedUpdateManyWithoutGrupoNestedInput
    GrupoConAcceso?: GrupoConAccesoUncheckedUpdateManyWithoutGrupoNestedInput
  }

  export type CambiosCreateManyEstudianteInput = {
    pk_id_camb?: number
    num_tip_camb: number
    txt_fecha_camb: Date | string
    fk_id_carp: number
    fk_id_grup: number
  }

  export type GruposCreateManyEstudianteInput = {
    pk_id_grup?: number
    txt_nom_grup: string
  }

  export type GrupoConAccesoCreateManyEstudianteInput = {
    fk_id_grup: number
  }

  export type CarpetasCreateManyEstudianteInput = {
    pk_id_carp?: number
    txt_nom_carp: string
    fk_id_grup: number
  }

  export type BibliografiasCreateManyEstudianteInput = {
    pk_id_biblio?: number
    txt_tit_biblio: string
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: Date | string
    txt_aut_biblio: string
    txt_edit_biblio?: string | null
    txt_dir_biblio?: string | null
    txt_pag_biblio?: string | null
    num_edic_biblio?: number | null
    num_volm_biblio?: number | null
    num_npag_biblio?: number | null
    txt_ubic_biblio?: string | null
    fk_id_grup: number
    fk_id_carp: number
  }

  export type CambiosUpdateWithoutEstudianteInput = {
    num_tip_camb?: IntFieldUpdateOperationsInput | number
    txt_fecha_camb?: DateTimeFieldUpdateOperationsInput | Date | string
    Carpeta?: CarpetasUpdateOneRequiredWithoutCambiosNestedInput
    Grupo?: GruposUpdateOneRequiredWithoutCambiosNestedInput
  }

  export type CambiosUncheckedUpdateWithoutEstudianteInput = {
    pk_id_camb?: IntFieldUpdateOperationsInput | number
    num_tip_camb?: IntFieldUpdateOperationsInput | number
    txt_fecha_camb?: DateTimeFieldUpdateOperationsInput | Date | string
    fk_id_carp?: IntFieldUpdateOperationsInput | number
    fk_id_grup?: IntFieldUpdateOperationsInput | number
  }

  export type CambiosUncheckedUpdateManyWithoutEstudianteInput = {
    pk_id_camb?: IntFieldUpdateOperationsInput | number
    num_tip_camb?: IntFieldUpdateOperationsInput | number
    txt_fecha_camb?: DateTimeFieldUpdateOperationsInput | Date | string
    fk_id_carp?: IntFieldUpdateOperationsInput | number
    fk_id_grup?: IntFieldUpdateOperationsInput | number
  }

  export type GruposUpdateWithoutEstudianteInput = {
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
    Cambios?: CambiosUpdateManyWithoutGrupoNestedInput
    Carpetas?: CarpetasUpdateManyWithoutGrupoNestedInput
    Bibliografias?: BibliografiasUpdateManyWithoutGrupoNestedInput
    GrupoConAcceso?: GrupoConAccesoUpdateManyWithoutGrupoNestedInput
  }

  export type GruposUncheckedUpdateWithoutEstudianteInput = {
    pk_id_grup?: IntFieldUpdateOperationsInput | number
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
    Cambios?: CambiosUncheckedUpdateManyWithoutGrupoNestedInput
    Carpetas?: CarpetasUncheckedUpdateManyWithoutGrupoNestedInput
    Bibliografias?: BibliografiasUncheckedUpdateManyWithoutGrupoNestedInput
    GrupoConAcceso?: GrupoConAccesoUncheckedUpdateManyWithoutGrupoNestedInput
  }

  export type GruposUncheckedUpdateManyWithoutEstudianteInput = {
    pk_id_grup?: IntFieldUpdateOperationsInput | number
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
  }

  export type GrupoConAccesoUpdateWithoutEstudianteInput = {
    Grupo?: GruposUpdateOneRequiredWithoutGrupoConAccesoNestedInput
  }

  export type GrupoConAccesoUncheckedUpdateWithoutEstudianteInput = {
    fk_id_grup?: IntFieldUpdateOperationsInput | number
  }

  export type GrupoConAccesoUncheckedUpdateManyWithoutEstudianteInput = {
    fk_id_grup?: IntFieldUpdateOperationsInput | number
  }

  export type CarpetasUpdateWithoutEstudianteInput = {
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    Grupo?: GruposUpdateOneRequiredWithoutCarpetasNestedInput
    Cambios?: CambiosUpdateManyWithoutCarpetaNestedInput
    Bibliografias?: BibliografiasUpdateManyWithoutCarpetaNestedInput
  }

  export type CarpetasUncheckedUpdateWithoutEstudianteInput = {
    pk_id_carp?: IntFieldUpdateOperationsInput | number
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    fk_id_grup?: IntFieldUpdateOperationsInput | number
    Cambios?: CambiosUncheckedUpdateManyWithoutCarpetaNestedInput
    Bibliografias?: BibliografiasUncheckedUpdateManyWithoutCarpetaNestedInput
  }

  export type CarpetasUncheckedUpdateManyWithoutEstudianteInput = {
    pk_id_carp?: IntFieldUpdateOperationsInput | number
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    fk_id_grup?: IntFieldUpdateOperationsInput | number
  }

  export type BibliografiasUpdateWithoutEstudianteInput = {
    txt_tit_biblio?: StringFieldUpdateOperationsInput | string
    num_tip_biblio?: IntFieldUpdateOperationsInput | number
    num_fmt_biblio?: IntFieldUpdateOperationsInput | number
    txt_fecha_biblio?: DateTimeFieldUpdateOperationsInput | Date | string
    txt_aut_biblio?: StringFieldUpdateOperationsInput | string
    txt_edit_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_dir_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_pag_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    num_edic_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_volm_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_npag_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    txt_ubic_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    Grupo?: GruposUpdateOneRequiredWithoutBibliografiasNestedInput
    Carpeta?: CarpetasUpdateOneRequiredWithoutBibliografiasNestedInput
    Archivos?: ArchivosUpdateManyWithoutBibliografiasNestedInput
  }

  export type BibliografiasUncheckedUpdateWithoutEstudianteInput = {
    pk_id_biblio?: IntFieldUpdateOperationsInput | number
    txt_tit_biblio?: StringFieldUpdateOperationsInput | string
    num_tip_biblio?: IntFieldUpdateOperationsInput | number
    num_fmt_biblio?: IntFieldUpdateOperationsInput | number
    txt_fecha_biblio?: DateTimeFieldUpdateOperationsInput | Date | string
    txt_aut_biblio?: StringFieldUpdateOperationsInput | string
    txt_edit_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_dir_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_pag_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    num_edic_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_volm_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_npag_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    txt_ubic_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_grup?: IntFieldUpdateOperationsInput | number
    fk_id_carp?: IntFieldUpdateOperationsInput | number
    Archivos?: ArchivosUncheckedUpdateManyWithoutBibliografiasNestedInput
  }

  export type BibliografiasUncheckedUpdateManyWithoutEstudianteInput = {
    pk_id_biblio?: IntFieldUpdateOperationsInput | number
    txt_tit_biblio?: StringFieldUpdateOperationsInput | string
    num_tip_biblio?: IntFieldUpdateOperationsInput | number
    num_fmt_biblio?: IntFieldUpdateOperationsInput | number
    txt_fecha_biblio?: DateTimeFieldUpdateOperationsInput | Date | string
    txt_aut_biblio?: StringFieldUpdateOperationsInput | string
    txt_edit_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_dir_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_pag_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    num_edic_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_volm_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_npag_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    txt_ubic_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_grup?: IntFieldUpdateOperationsInput | number
    fk_id_carp?: IntFieldUpdateOperationsInput | number
  }

  export type ArchivosCreateManyBibliografiasInput = {
    pk_id_arch?: number
    txt_dir_arch: string
  }

  export type ArchivosUpdateWithoutBibliografiasInput = {
    txt_dir_arch?: StringFieldUpdateOperationsInput | string
  }

  export type ArchivosUncheckedUpdateWithoutBibliografiasInput = {
    pk_id_arch?: IntFieldUpdateOperationsInput | number
    txt_dir_arch?: StringFieldUpdateOperationsInput | string
  }

  export type ArchivosUncheckedUpdateManyWithoutBibliografiasInput = {
    pk_id_arch?: IntFieldUpdateOperationsInput | number
    txt_dir_arch?: StringFieldUpdateOperationsInput | string
  }

  export type CambiosCreateManyCarpetaInput = {
    pk_id_camb?: number
    num_tip_camb: number
    txt_fecha_camb: Date | string
    fk_id_est: string
    fk_id_grup: number
  }

  export type BibliografiasCreateManyCarpetaInput = {
    pk_id_biblio?: number
    txt_tit_biblio: string
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: Date | string
    txt_aut_biblio: string
    txt_edit_biblio?: string | null
    txt_dir_biblio?: string | null
    txt_pag_biblio?: string | null
    num_edic_biblio?: number | null
    num_volm_biblio?: number | null
    num_npag_biblio?: number | null
    txt_ubic_biblio?: string | null
    fk_id_grup: number
    fk_id_est: string
  }

  export type CambiosUpdateWithoutCarpetaInput = {
    num_tip_camb?: IntFieldUpdateOperationsInput | number
    txt_fecha_camb?: DateTimeFieldUpdateOperationsInput | Date | string
    Estudiante?: EstudiantesUpdateOneRequiredWithoutCambiosNestedInput
    Grupo?: GruposUpdateOneRequiredWithoutCambiosNestedInput
  }

  export type CambiosUncheckedUpdateWithoutCarpetaInput = {
    pk_id_camb?: IntFieldUpdateOperationsInput | number
    num_tip_camb?: IntFieldUpdateOperationsInput | number
    txt_fecha_camb?: DateTimeFieldUpdateOperationsInput | Date | string
    fk_id_est?: StringFieldUpdateOperationsInput | string
    fk_id_grup?: IntFieldUpdateOperationsInput | number
  }

  export type CambiosUncheckedUpdateManyWithoutCarpetaInput = {
    pk_id_camb?: IntFieldUpdateOperationsInput | number
    num_tip_camb?: IntFieldUpdateOperationsInput | number
    txt_fecha_camb?: DateTimeFieldUpdateOperationsInput | Date | string
    fk_id_est?: StringFieldUpdateOperationsInput | string
    fk_id_grup?: IntFieldUpdateOperationsInput | number
  }

  export type BibliografiasUpdateWithoutCarpetaInput = {
    txt_tit_biblio?: StringFieldUpdateOperationsInput | string
    num_tip_biblio?: IntFieldUpdateOperationsInput | number
    num_fmt_biblio?: IntFieldUpdateOperationsInput | number
    txt_fecha_biblio?: DateTimeFieldUpdateOperationsInput | Date | string
    txt_aut_biblio?: StringFieldUpdateOperationsInput | string
    txt_edit_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_dir_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_pag_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    num_edic_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_volm_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_npag_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    txt_ubic_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    Grupo?: GruposUpdateOneRequiredWithoutBibliografiasNestedInput
    Estudiante?: EstudiantesUpdateOneRequiredWithoutBibliografiasNestedInput
    Archivos?: ArchivosUpdateManyWithoutBibliografiasNestedInput
  }

  export type BibliografiasUncheckedUpdateWithoutCarpetaInput = {
    pk_id_biblio?: IntFieldUpdateOperationsInput | number
    txt_tit_biblio?: StringFieldUpdateOperationsInput | string
    num_tip_biblio?: IntFieldUpdateOperationsInput | number
    num_fmt_biblio?: IntFieldUpdateOperationsInput | number
    txt_fecha_biblio?: DateTimeFieldUpdateOperationsInput | Date | string
    txt_aut_biblio?: StringFieldUpdateOperationsInput | string
    txt_edit_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_dir_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_pag_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    num_edic_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_volm_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_npag_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    txt_ubic_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_grup?: IntFieldUpdateOperationsInput | number
    fk_id_est?: StringFieldUpdateOperationsInput | string
    Archivos?: ArchivosUncheckedUpdateManyWithoutBibliografiasNestedInput
  }

  export type BibliografiasUncheckedUpdateManyWithoutCarpetaInput = {
    pk_id_biblio?: IntFieldUpdateOperationsInput | number
    txt_tit_biblio?: StringFieldUpdateOperationsInput | string
    num_tip_biblio?: IntFieldUpdateOperationsInput | number
    num_fmt_biblio?: IntFieldUpdateOperationsInput | number
    txt_fecha_biblio?: DateTimeFieldUpdateOperationsInput | Date | string
    txt_aut_biblio?: StringFieldUpdateOperationsInput | string
    txt_edit_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_dir_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_pag_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    num_edic_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_volm_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_npag_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    txt_ubic_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_grup?: IntFieldUpdateOperationsInput | number
    fk_id_est?: StringFieldUpdateOperationsInput | string
  }

  export type CambiosCreateManyGrupoInput = {
    pk_id_camb?: number
    num_tip_camb: number
    txt_fecha_camb: Date | string
    fk_id_est: string
    fk_id_carp: number
  }

  export type CarpetasCreateManyGrupoInput = {
    pk_id_carp?: number
    txt_nom_carp: string
    fk_id_est: string
  }

  export type BibliografiasCreateManyGrupoInput = {
    pk_id_biblio?: number
    txt_tit_biblio: string
    num_tip_biblio: number
    num_fmt_biblio: number
    txt_fecha_biblio: Date | string
    txt_aut_biblio: string
    txt_edit_biblio?: string | null
    txt_dir_biblio?: string | null
    txt_pag_biblio?: string | null
    num_edic_biblio?: number | null
    num_volm_biblio?: number | null
    num_npag_biblio?: number | null
    txt_ubic_biblio?: string | null
    fk_id_carp: number
    fk_id_est: string
  }

  export type GrupoConAccesoCreateManyGrupoInput = {
    fk_id_est: string
  }

  export type CambiosUpdateWithoutGrupoInput = {
    num_tip_camb?: IntFieldUpdateOperationsInput | number
    txt_fecha_camb?: DateTimeFieldUpdateOperationsInput | Date | string
    Estudiante?: EstudiantesUpdateOneRequiredWithoutCambiosNestedInput
    Carpeta?: CarpetasUpdateOneRequiredWithoutCambiosNestedInput
  }

  export type CambiosUncheckedUpdateWithoutGrupoInput = {
    pk_id_camb?: IntFieldUpdateOperationsInput | number
    num_tip_camb?: IntFieldUpdateOperationsInput | number
    txt_fecha_camb?: DateTimeFieldUpdateOperationsInput | Date | string
    fk_id_est?: StringFieldUpdateOperationsInput | string
    fk_id_carp?: IntFieldUpdateOperationsInput | number
  }

  export type CambiosUncheckedUpdateManyWithoutGrupoInput = {
    pk_id_camb?: IntFieldUpdateOperationsInput | number
    num_tip_camb?: IntFieldUpdateOperationsInput | number
    txt_fecha_camb?: DateTimeFieldUpdateOperationsInput | Date | string
    fk_id_est?: StringFieldUpdateOperationsInput | string
    fk_id_carp?: IntFieldUpdateOperationsInput | number
  }

  export type CarpetasUpdateWithoutGrupoInput = {
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    Estudiante?: EstudiantesUpdateOneRequiredWithoutCarpetasNestedInput
    Cambios?: CambiosUpdateManyWithoutCarpetaNestedInput
    Bibliografias?: BibliografiasUpdateManyWithoutCarpetaNestedInput
  }

  export type CarpetasUncheckedUpdateWithoutGrupoInput = {
    pk_id_carp?: IntFieldUpdateOperationsInput | number
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    fk_id_est?: StringFieldUpdateOperationsInput | string
    Cambios?: CambiosUncheckedUpdateManyWithoutCarpetaNestedInput
    Bibliografias?: BibliografiasUncheckedUpdateManyWithoutCarpetaNestedInput
  }

  export type CarpetasUncheckedUpdateManyWithoutGrupoInput = {
    pk_id_carp?: IntFieldUpdateOperationsInput | number
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    fk_id_est?: StringFieldUpdateOperationsInput | string
  }

  export type BibliografiasUpdateWithoutGrupoInput = {
    txt_tit_biblio?: StringFieldUpdateOperationsInput | string
    num_tip_biblio?: IntFieldUpdateOperationsInput | number
    num_fmt_biblio?: IntFieldUpdateOperationsInput | number
    txt_fecha_biblio?: DateTimeFieldUpdateOperationsInput | Date | string
    txt_aut_biblio?: StringFieldUpdateOperationsInput | string
    txt_edit_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_dir_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_pag_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    num_edic_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_volm_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_npag_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    txt_ubic_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    Carpeta?: CarpetasUpdateOneRequiredWithoutBibliografiasNestedInput
    Estudiante?: EstudiantesUpdateOneRequiredWithoutBibliografiasNestedInput
    Archivos?: ArchivosUpdateManyWithoutBibliografiasNestedInput
  }

  export type BibliografiasUncheckedUpdateWithoutGrupoInput = {
    pk_id_biblio?: IntFieldUpdateOperationsInput | number
    txt_tit_biblio?: StringFieldUpdateOperationsInput | string
    num_tip_biblio?: IntFieldUpdateOperationsInput | number
    num_fmt_biblio?: IntFieldUpdateOperationsInput | number
    txt_fecha_biblio?: DateTimeFieldUpdateOperationsInput | Date | string
    txt_aut_biblio?: StringFieldUpdateOperationsInput | string
    txt_edit_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_dir_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_pag_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    num_edic_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_volm_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_npag_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    txt_ubic_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_carp?: IntFieldUpdateOperationsInput | number
    fk_id_est?: StringFieldUpdateOperationsInput | string
    Archivos?: ArchivosUncheckedUpdateManyWithoutBibliografiasNestedInput
  }

  export type BibliografiasUncheckedUpdateManyWithoutGrupoInput = {
    pk_id_biblio?: IntFieldUpdateOperationsInput | number
    txt_tit_biblio?: StringFieldUpdateOperationsInput | string
    num_tip_biblio?: IntFieldUpdateOperationsInput | number
    num_fmt_biblio?: IntFieldUpdateOperationsInput | number
    txt_fecha_biblio?: DateTimeFieldUpdateOperationsInput | Date | string
    txt_aut_biblio?: StringFieldUpdateOperationsInput | string
    txt_edit_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_dir_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    txt_pag_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    num_edic_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_volm_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    num_npag_biblio?: NullableIntFieldUpdateOperationsInput | number | null
    txt_ubic_biblio?: NullableStringFieldUpdateOperationsInput | string | null
    fk_id_carp?: IntFieldUpdateOperationsInput | number
    fk_id_est?: StringFieldUpdateOperationsInput | string
  }

  export type GrupoConAccesoUpdateWithoutGrupoInput = {
    Estudiante?: EstudiantesUpdateOneRequiredWithoutGrupoConAccesoNestedInput
  }

  export type GrupoConAccesoUncheckedUpdateWithoutGrupoInput = {
    fk_id_est?: StringFieldUpdateOperationsInput | string
  }

  export type GrupoConAccesoUncheckedUpdateManyWithoutGrupoInput = {
    fk_id_est?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EstudiantesCountOutputTypeDefaultArgs instead
     */
    export type EstudiantesCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EstudiantesCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BibliografiasCountOutputTypeDefaultArgs instead
     */
    export type BibliografiasCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BibliografiasCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarpetasCountOutputTypeDefaultArgs instead
     */
    export type CarpetasCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarpetasCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GruposCountOutputTypeDefaultArgs instead
     */
    export type GruposCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GruposCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EstudiantesDefaultArgs instead
     */
    export type EstudiantesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EstudiantesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use BibliografiasDefaultArgs instead
     */
    export type BibliografiasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = BibliografiasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArchivosDefaultArgs instead
     */
    export type ArchivosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArchivosDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CarpetasDefaultArgs instead
     */
    export type CarpetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CarpetasDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GrupoConAccesoDefaultArgs instead
     */
    export type GrupoConAccesoArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GrupoConAccesoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GruposDefaultArgs instead
     */
    export type GruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GruposDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CambiosDefaultArgs instead
     */
    export type CambiosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CambiosDefaultArgs<ExtArgs>

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