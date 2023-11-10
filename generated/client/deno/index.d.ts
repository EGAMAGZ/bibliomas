
/**
 * Client
**/

import * as runtime from '.././runtime/library.d.ts';
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
 * Model Grupos
 * 
 */
export type Grupos = $Result.DefaultSelection<Prisma.$GruposPayload>

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
   * `prisma.grupos`: Exposes CRUD operations for the **Grupos** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Grupos
    * const grupos = await prisma.grupos.findMany()
    * ```
    */
  get grupos(): Prisma.GruposDelegate<ExtArgs>;
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
    Grupos: 'Grupos'
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
      modelProps: 'estudiantes' | 'bibliografias' | 'archivos' | 'carpetas' | 'grupos'
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
   * Count Type GruposCountOutputType
   */

  export type GruposCountOutputType = {
    Carpetas: number
  }

  export type GruposCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carpetas?: boolean | GruposCountOutputTypeCountCarpetasArgs
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
  export type GruposCountOutputTypeCountCarpetasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarpetasWhereInput
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
  }, ExtArgs["result"]["estudiantes"]>

  export type EstudiantesSelectScalar = {
    pk_id_est?: boolean
    txt_user_est?: boolean
    txt_email_est?: boolean
    txt_pass_est?: boolean
    num_sub_est?: boolean
  }


  export type $EstudiantesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Estudiantes"
    objects: {}
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
   * Estudiantes without action
   */
  export type EstudiantesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Estudiantes
     */
    select?: EstudiantesSelect<ExtArgs> | null
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
  }

  export type BibliografiasSumAggregateOutputType = {
    pk_id_biblio: number | null
    num_tip_biblio: number | null
    num_fmt_biblio: number | null
    num_edic_biblio: number | null
    num_volm_biblio: number | null
    num_npag_biblio: number | null
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
    _all: number
  }


  export type BibliografiasAvgAggregateInputType = {
    pk_id_biblio?: true
    num_tip_biblio?: true
    num_fmt_biblio?: true
    num_edic_biblio?: true
    num_volm_biblio?: true
    num_npag_biblio?: true
  }

  export type BibliografiasSumAggregateInputType = {
    pk_id_biblio?: true
    num_tip_biblio?: true
    num_fmt_biblio?: true
    num_edic_biblio?: true
    num_volm_biblio?: true
    num_npag_biblio?: true
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
  }


  export type $BibliografiasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Bibliografias"
    objects: {}
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
   * Bibliografias without action
   */
  export type BibliografiasDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Bibliografias
     */
    select?: BibliografiasSelect<ExtArgs> | null
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
  }

  export type ArchivosSumAggregateOutputType = {
    pk_id_arch: number | null
  }

  export type ArchivosMinAggregateOutputType = {
    pk_id_arch: number | null
    txt_dir_arch: string | null
  }

  export type ArchivosMaxAggregateOutputType = {
    pk_id_arch: number | null
    txt_dir_arch: string | null
  }

  export type ArchivosCountAggregateOutputType = {
    pk_id_arch: number
    txt_dir_arch: number
    _all: number
  }


  export type ArchivosAvgAggregateInputType = {
    pk_id_arch?: true
  }

  export type ArchivosSumAggregateInputType = {
    pk_id_arch?: true
  }

  export type ArchivosMinAggregateInputType = {
    pk_id_arch?: true
    txt_dir_arch?: true
  }

  export type ArchivosMaxAggregateInputType = {
    pk_id_arch?: true
    txt_dir_arch?: true
  }

  export type ArchivosCountAggregateInputType = {
    pk_id_arch?: true
    txt_dir_arch?: true
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
  }, ExtArgs["result"]["archivos"]>

  export type ArchivosSelectScalar = {
    pk_id_arch?: boolean
    txt_dir_arch?: boolean
  }


  export type $ArchivosPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Archivos"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      pk_id_arch: number
      txt_dir_arch: string
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
    gruposPk_id_grup: number | null
  }

  export type CarpetasSumAggregateOutputType = {
    pk_id_carp: number | null
    gruposPk_id_grup: number | null
  }

  export type CarpetasMinAggregateOutputType = {
    pk_id_carp: number | null
    txt_nom_carp: string | null
    gruposPk_id_grup: number | null
  }

  export type CarpetasMaxAggregateOutputType = {
    pk_id_carp: number | null
    txt_nom_carp: string | null
    gruposPk_id_grup: number | null
  }

  export type CarpetasCountAggregateOutputType = {
    pk_id_carp: number
    txt_nom_carp: number
    gruposPk_id_grup: number
    _all: number
  }


  export type CarpetasAvgAggregateInputType = {
    pk_id_carp?: true
    gruposPk_id_grup?: true
  }

  export type CarpetasSumAggregateInputType = {
    pk_id_carp?: true
    gruposPk_id_grup?: true
  }

  export type CarpetasMinAggregateInputType = {
    pk_id_carp?: true
    txt_nom_carp?: true
    gruposPk_id_grup?: true
  }

  export type CarpetasMaxAggregateInputType = {
    pk_id_carp?: true
    txt_nom_carp?: true
    gruposPk_id_grup?: true
  }

  export type CarpetasCountAggregateInputType = {
    pk_id_carp?: true
    txt_nom_carp?: true
    gruposPk_id_grup?: true
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
    gruposPk_id_grup: number
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
    gruposPk_id_grup?: boolean
    Grupos?: boolean | GruposDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carpetas"]>

  export type CarpetasSelectScalar = {
    pk_id_carp?: boolean
    txt_nom_carp?: boolean
    gruposPk_id_grup?: boolean
  }

  export type CarpetasInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Grupos?: boolean | GruposDefaultArgs<ExtArgs>
  }


  export type $CarpetasPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carpetas"
    objects: {
      Grupos: Prisma.$GruposPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_id_carp: number
      txt_nom_carp: string
      gruposPk_id_grup: number
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

    Grupos<T extends GruposDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GruposDefaultArgs<ExtArgs>>): Prisma__GruposClient<$Result.GetResult<Prisma.$GruposPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
    readonly gruposPk_id_grup: FieldRef<"Carpetas", 'Int'>
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
  }

  export type GruposMaxAggregateOutputType = {
    pk_id_grup: number | null
    txt_nom_grup: string | null
  }

  export type GruposCountAggregateOutputType = {
    pk_id_grup: number
    txt_nom_grup: number
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
  }

  export type GruposMaxAggregateInputType = {
    pk_id_grup?: true
    txt_nom_grup?: true
  }

  export type GruposCountAggregateInputType = {
    pk_id_grup?: true
    txt_nom_grup?: true
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
    Carpetas?: boolean | Grupos$CarpetasArgs<ExtArgs>
    _count?: boolean | GruposCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["grupos"]>

  export type GruposSelectScalar = {
    pk_id_grup?: boolean
    txt_nom_grup?: boolean
  }

  export type GruposInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Carpetas?: boolean | Grupos$CarpetasArgs<ExtArgs>
    _count?: boolean | GruposCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GruposPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Grupos"
    objects: {
      Carpetas: Prisma.$CarpetasPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      pk_id_grup: number
      txt_nom_grup: string
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

    Carpetas<T extends Grupos$CarpetasArgs<ExtArgs> = {}>(args?: Subset<T, Grupos$CarpetasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarpetasPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    txt_ubic_biblio: 'txt_ubic_biblio'
  };

  export type BibliografiasScalarFieldEnum = (typeof BibliografiasScalarFieldEnum)[keyof typeof BibliografiasScalarFieldEnum]


  export const ArchivosScalarFieldEnum: {
    pk_id_arch: 'pk_id_arch',
    txt_dir_arch: 'txt_dir_arch'
  };

  export type ArchivosScalarFieldEnum = (typeof ArchivosScalarFieldEnum)[keyof typeof ArchivosScalarFieldEnum]


  export const CarpetasScalarFieldEnum: {
    pk_id_carp: 'pk_id_carp',
    txt_nom_carp: 'txt_nom_carp',
    gruposPk_id_grup: 'gruposPk_id_grup'
  };

  export type CarpetasScalarFieldEnum = (typeof CarpetasScalarFieldEnum)[keyof typeof CarpetasScalarFieldEnum]


  export const GruposScalarFieldEnum: {
    pk_id_grup: 'pk_id_grup',
    txt_nom_grup: 'txt_nom_grup'
  };

  export type GruposScalarFieldEnum = (typeof GruposScalarFieldEnum)[keyof typeof GruposScalarFieldEnum]


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
  }

  export type EstudiantesOrderByWithRelationInput = {
    pk_id_est?: SortOrder
    txt_user_est?: SortOrder
    txt_email_est?: SortOrder
    txt_pass_est?: SortOrder
    num_sub_est?: SortOrder
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
  }

  export type ArchivosWhereInput = {
    AND?: ArchivosWhereInput | ArchivosWhereInput[]
    OR?: ArchivosWhereInput[]
    NOT?: ArchivosWhereInput | ArchivosWhereInput[]
    pk_id_arch?: IntFilter<"Archivos"> | number
    txt_dir_arch?: StringFilter<"Archivos"> | string
  }

  export type ArchivosOrderByWithRelationInput = {
    pk_id_arch?: SortOrder
    txt_dir_arch?: SortOrder
  }

  export type ArchivosWhereUniqueInput = Prisma.AtLeast<{
    pk_id_arch?: number
    AND?: ArchivosWhereInput | ArchivosWhereInput[]
    OR?: ArchivosWhereInput[]
    NOT?: ArchivosWhereInput | ArchivosWhereInput[]
    txt_dir_arch?: StringFilter<"Archivos"> | string
  }, "pk_id_arch">

  export type ArchivosOrderByWithAggregationInput = {
    pk_id_arch?: SortOrder
    txt_dir_arch?: SortOrder
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
  }

  export type CarpetasWhereInput = {
    AND?: CarpetasWhereInput | CarpetasWhereInput[]
    OR?: CarpetasWhereInput[]
    NOT?: CarpetasWhereInput | CarpetasWhereInput[]
    pk_id_carp?: IntFilter<"Carpetas"> | number
    txt_nom_carp?: StringFilter<"Carpetas"> | string
    gruposPk_id_grup?: IntFilter<"Carpetas"> | number
    Grupos?: XOR<GruposRelationFilter, GruposWhereInput>
  }

  export type CarpetasOrderByWithRelationInput = {
    pk_id_carp?: SortOrder
    txt_nom_carp?: SortOrder
    gruposPk_id_grup?: SortOrder
    Grupos?: GruposOrderByWithRelationInput
  }

  export type CarpetasWhereUniqueInput = Prisma.AtLeast<{
    pk_id_carp?: number
    gruposPk_id_grup?: number
    AND?: CarpetasWhereInput | CarpetasWhereInput[]
    OR?: CarpetasWhereInput[]
    NOT?: CarpetasWhereInput | CarpetasWhereInput[]
    txt_nom_carp?: StringFilter<"Carpetas"> | string
    Grupos?: XOR<GruposRelationFilter, GruposWhereInput>
  }, "pk_id_carp" | "gruposPk_id_grup">

  export type CarpetasOrderByWithAggregationInput = {
    pk_id_carp?: SortOrder
    txt_nom_carp?: SortOrder
    gruposPk_id_grup?: SortOrder
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
    gruposPk_id_grup?: IntWithAggregatesFilter<"Carpetas"> | number
  }

  export type GruposWhereInput = {
    AND?: GruposWhereInput | GruposWhereInput[]
    OR?: GruposWhereInput[]
    NOT?: GruposWhereInput | GruposWhereInput[]
    pk_id_grup?: IntFilter<"Grupos"> | number
    txt_nom_grup?: StringFilter<"Grupos"> | string
    Carpetas?: CarpetasListRelationFilter
  }

  export type GruposOrderByWithRelationInput = {
    pk_id_grup?: SortOrder
    txt_nom_grup?: SortOrder
    Carpetas?: CarpetasOrderByRelationAggregateInput
  }

  export type GruposWhereUniqueInput = Prisma.AtLeast<{
    pk_id_grup?: number
    AND?: GruposWhereInput | GruposWhereInput[]
    OR?: GruposWhereInput[]
    NOT?: GruposWhereInput | GruposWhereInput[]
    txt_nom_grup?: StringFilter<"Grupos"> | string
    Carpetas?: CarpetasListRelationFilter
  }, "pk_id_grup">

  export type GruposOrderByWithAggregationInput = {
    pk_id_grup?: SortOrder
    txt_nom_grup?: SortOrder
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
  }

  export type EstudiantesCreateInput = {
    pk_id_est?: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est?: number
  }

  export type EstudiantesUncheckedCreateInput = {
    pk_id_est?: string
    txt_user_est: string
    txt_email_est: string
    txt_pass_est: string
    num_sub_est?: number
  }

  export type EstudiantesUpdateInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
  }

  export type EstudiantesUncheckedUpdateInput = {
    pk_id_est?: StringFieldUpdateOperationsInput | string
    txt_user_est?: StringFieldUpdateOperationsInput | string
    txt_email_est?: StringFieldUpdateOperationsInput | string
    txt_pass_est?: StringFieldUpdateOperationsInput | string
    num_sub_est?: IntFieldUpdateOperationsInput | number
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
  }

  export type ArchivosCreateInput = {
    txt_dir_arch: string
  }

  export type ArchivosUncheckedCreateInput = {
    pk_id_arch?: number
    txt_dir_arch: string
  }

  export type ArchivosUpdateInput = {
    txt_dir_arch?: StringFieldUpdateOperationsInput | string
  }

  export type ArchivosUncheckedUpdateInput = {
    pk_id_arch?: IntFieldUpdateOperationsInput | number
    txt_dir_arch?: StringFieldUpdateOperationsInput | string
  }

  export type ArchivosCreateManyInput = {
    pk_id_arch?: number
    txt_dir_arch: string
  }

  export type ArchivosUpdateManyMutationInput = {
    txt_dir_arch?: StringFieldUpdateOperationsInput | string
  }

  export type ArchivosUncheckedUpdateManyInput = {
    pk_id_arch?: IntFieldUpdateOperationsInput | number
    txt_dir_arch?: StringFieldUpdateOperationsInput | string
  }

  export type CarpetasCreateInput = {
    txt_nom_carp: string
    Grupos: GruposCreateNestedOneWithoutCarpetasInput
  }

  export type CarpetasUncheckedCreateInput = {
    pk_id_carp?: number
    txt_nom_carp: string
    gruposPk_id_grup: number
  }

  export type CarpetasUpdateInput = {
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    Grupos?: GruposUpdateOneRequiredWithoutCarpetasNestedInput
  }

  export type CarpetasUncheckedUpdateInput = {
    pk_id_carp?: IntFieldUpdateOperationsInput | number
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    gruposPk_id_grup?: IntFieldUpdateOperationsInput | number
  }

  export type CarpetasCreateManyInput = {
    pk_id_carp?: number
    txt_nom_carp: string
    gruposPk_id_grup: number
  }

  export type CarpetasUpdateManyMutationInput = {
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
  }

  export type CarpetasUncheckedUpdateManyInput = {
    pk_id_carp?: IntFieldUpdateOperationsInput | number
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
    gruposPk_id_grup?: IntFieldUpdateOperationsInput | number
  }

  export type GruposCreateInput = {
    txt_nom_grup: string
    Carpetas?: CarpetasCreateNestedManyWithoutGruposInput
  }

  export type GruposUncheckedCreateInput = {
    pk_id_grup?: number
    txt_nom_grup: string
    Carpetas?: CarpetasUncheckedCreateNestedManyWithoutGruposInput
  }

  export type GruposUpdateInput = {
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
    Carpetas?: CarpetasUpdateManyWithoutGruposNestedInput
  }

  export type GruposUncheckedUpdateInput = {
    pk_id_grup?: IntFieldUpdateOperationsInput | number
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
    Carpetas?: CarpetasUncheckedUpdateManyWithoutGruposNestedInput
  }

  export type GruposCreateManyInput = {
    pk_id_grup?: number
    txt_nom_grup: string
  }

  export type GruposUpdateManyMutationInput = {
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
  }

  export type GruposUncheckedUpdateManyInput = {
    pk_id_grup?: IntFieldUpdateOperationsInput | number
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
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
  }

  export type BibliografiasAvgOrderByAggregateInput = {
    pk_id_biblio?: SortOrder
    num_tip_biblio?: SortOrder
    num_fmt_biblio?: SortOrder
    num_edic_biblio?: SortOrder
    num_volm_biblio?: SortOrder
    num_npag_biblio?: SortOrder
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
  }

  export type BibliografiasSumOrderByAggregateInput = {
    pk_id_biblio?: SortOrder
    num_tip_biblio?: SortOrder
    num_fmt_biblio?: SortOrder
    num_edic_biblio?: SortOrder
    num_volm_biblio?: SortOrder
    num_npag_biblio?: SortOrder
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

  export type ArchivosCountOrderByAggregateInput = {
    pk_id_arch?: SortOrder
    txt_dir_arch?: SortOrder
  }

  export type ArchivosAvgOrderByAggregateInput = {
    pk_id_arch?: SortOrder
  }

  export type ArchivosMaxOrderByAggregateInput = {
    pk_id_arch?: SortOrder
    txt_dir_arch?: SortOrder
  }

  export type ArchivosMinOrderByAggregateInput = {
    pk_id_arch?: SortOrder
    txt_dir_arch?: SortOrder
  }

  export type ArchivosSumOrderByAggregateInput = {
    pk_id_arch?: SortOrder
  }

  export type GruposRelationFilter = {
    is?: GruposWhereInput
    isNot?: GruposWhereInput
  }

  export type CarpetasCountOrderByAggregateInput = {
    pk_id_carp?: SortOrder
    txt_nom_carp?: SortOrder
    gruposPk_id_grup?: SortOrder
  }

  export type CarpetasAvgOrderByAggregateInput = {
    pk_id_carp?: SortOrder
    gruposPk_id_grup?: SortOrder
  }

  export type CarpetasMaxOrderByAggregateInput = {
    pk_id_carp?: SortOrder
    txt_nom_carp?: SortOrder
    gruposPk_id_grup?: SortOrder
  }

  export type CarpetasMinOrderByAggregateInput = {
    pk_id_carp?: SortOrder
    txt_nom_carp?: SortOrder
    gruposPk_id_grup?: SortOrder
  }

  export type CarpetasSumOrderByAggregateInput = {
    pk_id_carp?: SortOrder
    gruposPk_id_grup?: SortOrder
  }

  export type CarpetasListRelationFilter = {
    every?: CarpetasWhereInput
    some?: CarpetasWhereInput
    none?: CarpetasWhereInput
  }

  export type CarpetasOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GruposCountOrderByAggregateInput = {
    pk_id_grup?: SortOrder
    txt_nom_grup?: SortOrder
  }

  export type GruposAvgOrderByAggregateInput = {
    pk_id_grup?: SortOrder
  }

  export type GruposMaxOrderByAggregateInput = {
    pk_id_grup?: SortOrder
    txt_nom_grup?: SortOrder
  }

  export type GruposMinOrderByAggregateInput = {
    pk_id_grup?: SortOrder
    txt_nom_grup?: SortOrder
  }

  export type GruposSumOrderByAggregateInput = {
    pk_id_grup?: SortOrder
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

  export type GruposCreateNestedOneWithoutCarpetasInput = {
    create?: XOR<GruposCreateWithoutCarpetasInput, GruposUncheckedCreateWithoutCarpetasInput>
    connectOrCreate?: GruposCreateOrConnectWithoutCarpetasInput
    connect?: GruposWhereUniqueInput
  }

  export type GruposUpdateOneRequiredWithoutCarpetasNestedInput = {
    create?: XOR<GruposCreateWithoutCarpetasInput, GruposUncheckedCreateWithoutCarpetasInput>
    connectOrCreate?: GruposCreateOrConnectWithoutCarpetasInput
    upsert?: GruposUpsertWithoutCarpetasInput
    connect?: GruposWhereUniqueInput
    update?: XOR<XOR<GruposUpdateToOneWithWhereWithoutCarpetasInput, GruposUpdateWithoutCarpetasInput>, GruposUncheckedUpdateWithoutCarpetasInput>
  }

  export type CarpetasCreateNestedManyWithoutGruposInput = {
    create?: XOR<CarpetasCreateWithoutGruposInput, CarpetasUncheckedCreateWithoutGruposInput> | CarpetasCreateWithoutGruposInput[] | CarpetasUncheckedCreateWithoutGruposInput[]
    connectOrCreate?: CarpetasCreateOrConnectWithoutGruposInput | CarpetasCreateOrConnectWithoutGruposInput[]
    createMany?: CarpetasCreateManyGruposInputEnvelope
    connect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
  }

  export type CarpetasUncheckedCreateNestedManyWithoutGruposInput = {
    create?: XOR<CarpetasCreateWithoutGruposInput, CarpetasUncheckedCreateWithoutGruposInput> | CarpetasCreateWithoutGruposInput[] | CarpetasUncheckedCreateWithoutGruposInput[]
    connectOrCreate?: CarpetasCreateOrConnectWithoutGruposInput | CarpetasCreateOrConnectWithoutGruposInput[]
    createMany?: CarpetasCreateManyGruposInputEnvelope
    connect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
  }

  export type CarpetasUpdateManyWithoutGruposNestedInput = {
    create?: XOR<CarpetasCreateWithoutGruposInput, CarpetasUncheckedCreateWithoutGruposInput> | CarpetasCreateWithoutGruposInput[] | CarpetasUncheckedCreateWithoutGruposInput[]
    connectOrCreate?: CarpetasCreateOrConnectWithoutGruposInput | CarpetasCreateOrConnectWithoutGruposInput[]
    upsert?: CarpetasUpsertWithWhereUniqueWithoutGruposInput | CarpetasUpsertWithWhereUniqueWithoutGruposInput[]
    createMany?: CarpetasCreateManyGruposInputEnvelope
    set?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    disconnect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    delete?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    connect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    update?: CarpetasUpdateWithWhereUniqueWithoutGruposInput | CarpetasUpdateWithWhereUniqueWithoutGruposInput[]
    updateMany?: CarpetasUpdateManyWithWhereWithoutGruposInput | CarpetasUpdateManyWithWhereWithoutGruposInput[]
    deleteMany?: CarpetasScalarWhereInput | CarpetasScalarWhereInput[]
  }

  export type CarpetasUncheckedUpdateManyWithoutGruposNestedInput = {
    create?: XOR<CarpetasCreateWithoutGruposInput, CarpetasUncheckedCreateWithoutGruposInput> | CarpetasCreateWithoutGruposInput[] | CarpetasUncheckedCreateWithoutGruposInput[]
    connectOrCreate?: CarpetasCreateOrConnectWithoutGruposInput | CarpetasCreateOrConnectWithoutGruposInput[]
    upsert?: CarpetasUpsertWithWhereUniqueWithoutGruposInput | CarpetasUpsertWithWhereUniqueWithoutGruposInput[]
    createMany?: CarpetasCreateManyGruposInputEnvelope
    set?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    disconnect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    delete?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    connect?: CarpetasWhereUniqueInput | CarpetasWhereUniqueInput[]
    update?: CarpetasUpdateWithWhereUniqueWithoutGruposInput | CarpetasUpdateWithWhereUniqueWithoutGruposInput[]
    updateMany?: CarpetasUpdateManyWithWhereWithoutGruposInput | CarpetasUpdateManyWithWhereWithoutGruposInput[]
    deleteMany?: CarpetasScalarWhereInput | CarpetasScalarWhereInput[]
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

  export type GruposCreateWithoutCarpetasInput = {
    txt_nom_grup: string
  }

  export type GruposUncheckedCreateWithoutCarpetasInput = {
    pk_id_grup?: number
    txt_nom_grup: string
  }

  export type GruposCreateOrConnectWithoutCarpetasInput = {
    where: GruposWhereUniqueInput
    create: XOR<GruposCreateWithoutCarpetasInput, GruposUncheckedCreateWithoutCarpetasInput>
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
  }

  export type GruposUncheckedUpdateWithoutCarpetasInput = {
    pk_id_grup?: IntFieldUpdateOperationsInput | number
    txt_nom_grup?: StringFieldUpdateOperationsInput | string
  }

  export type CarpetasCreateWithoutGruposInput = {
    txt_nom_carp: string
  }

  export type CarpetasUncheckedCreateWithoutGruposInput = {
    pk_id_carp?: number
    txt_nom_carp: string
  }

  export type CarpetasCreateOrConnectWithoutGruposInput = {
    where: CarpetasWhereUniqueInput
    create: XOR<CarpetasCreateWithoutGruposInput, CarpetasUncheckedCreateWithoutGruposInput>
  }

  export type CarpetasCreateManyGruposInputEnvelope = {
    data: CarpetasCreateManyGruposInput | CarpetasCreateManyGruposInput[]
    skipDuplicates?: boolean
  }

  export type CarpetasUpsertWithWhereUniqueWithoutGruposInput = {
    where: CarpetasWhereUniqueInput
    update: XOR<CarpetasUpdateWithoutGruposInput, CarpetasUncheckedUpdateWithoutGruposInput>
    create: XOR<CarpetasCreateWithoutGruposInput, CarpetasUncheckedCreateWithoutGruposInput>
  }

  export type CarpetasUpdateWithWhereUniqueWithoutGruposInput = {
    where: CarpetasWhereUniqueInput
    data: XOR<CarpetasUpdateWithoutGruposInput, CarpetasUncheckedUpdateWithoutGruposInput>
  }

  export type CarpetasUpdateManyWithWhereWithoutGruposInput = {
    where: CarpetasScalarWhereInput
    data: XOR<CarpetasUpdateManyMutationInput, CarpetasUncheckedUpdateManyWithoutGruposInput>
  }

  export type CarpetasScalarWhereInput = {
    AND?: CarpetasScalarWhereInput | CarpetasScalarWhereInput[]
    OR?: CarpetasScalarWhereInput[]
    NOT?: CarpetasScalarWhereInput | CarpetasScalarWhereInput[]
    pk_id_carp?: IntFilter<"Carpetas"> | number
    txt_nom_carp?: StringFilter<"Carpetas"> | string
    gruposPk_id_grup?: IntFilter<"Carpetas"> | number
  }

  export type CarpetasCreateManyGruposInput = {
    pk_id_carp?: number
    txt_nom_carp: string
  }

  export type CarpetasUpdateWithoutGruposInput = {
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
  }

  export type CarpetasUncheckedUpdateWithoutGruposInput = {
    pk_id_carp?: IntFieldUpdateOperationsInput | number
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
  }

  export type CarpetasUncheckedUpdateManyWithoutGruposInput = {
    pk_id_carp?: IntFieldUpdateOperationsInput | number
    txt_nom_carp?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
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
     * @deprecated Use GruposDefaultArgs instead
     */
    export type GruposArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GruposDefaultArgs<ExtArgs>

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