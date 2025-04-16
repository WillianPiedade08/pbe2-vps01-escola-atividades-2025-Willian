
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Aluno
 * 
 */
export type Aluno = $Result.DefaultSelection<Prisma.$AlunoPayload>
/**
 * Model Telefone
 * 
 */
export type Telefone = $Result.DefaultSelection<Prisma.$TelefonePayload>
/**
 * Model Atividade
 * 
 */
export type Atividade = $Result.DefaultSelection<Prisma.$AtividadePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Alunos
 * const alunos = await prisma.aluno.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Alunos
   * const alunos = await prisma.aluno.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.aluno`: Exposes CRUD operations for the **Aluno** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alunos
    * const alunos = await prisma.aluno.findMany()
    * ```
    */
  get aluno(): Prisma.AlunoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telefone`: Exposes CRUD operations for the **Telefone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Telefones
    * const telefones = await prisma.telefone.findMany()
    * ```
    */
  get telefone(): Prisma.TelefoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.atividade`: Exposes CRUD operations for the **Atividade** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Atividades
    * const atividades = await prisma.atividade.findMany()
    * ```
    */
  get atividade(): Prisma.AtividadeDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Aluno: 'Aluno',
    Telefone: 'Telefone',
    Atividade: 'Atividade'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "aluno" | "telefone" | "atividade"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Aluno: {
        payload: Prisma.$AlunoPayload<ExtArgs>
        fields: Prisma.AlunoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlunoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlunoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findFirst: {
            args: Prisma.AlunoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlunoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          findMany: {
            args: Prisma.AlunoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>[]
          }
          create: {
            args: Prisma.AlunoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          createMany: {
            args: Prisma.AlunoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AlunoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          update: {
            args: Prisma.AlunoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          deleteMany: {
            args: Prisma.AlunoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlunoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AlunoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlunoPayload>
          }
          aggregate: {
            args: Prisma.AlunoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAluno>
          }
          groupBy: {
            args: Prisma.AlunoGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlunoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlunoCountArgs<ExtArgs>
            result: $Utils.Optional<AlunoCountAggregateOutputType> | number
          }
        }
      }
      Telefone: {
        payload: Prisma.$TelefonePayload<ExtArgs>
        fields: Prisma.TelefoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelefoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelefoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          findFirst: {
            args: Prisma.TelefoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelefoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          findMany: {
            args: Prisma.TelefoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>[]
          }
          create: {
            args: Prisma.TelefoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          createMany: {
            args: Prisma.TelefoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.TelefoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          update: {
            args: Prisma.TelefoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          deleteMany: {
            args: Prisma.TelefoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelefoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TelefoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelefonePayload>
          }
          aggregate: {
            args: Prisma.TelefoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelefone>
          }
          groupBy: {
            args: Prisma.TelefoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelefoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelefoneCountArgs<ExtArgs>
            result: $Utils.Optional<TelefoneCountAggregateOutputType> | number
          }
        }
      }
      Atividade: {
        payload: Prisma.$AtividadePayload<ExtArgs>
        fields: Prisma.AtividadeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AtividadeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AtividadeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          findFirst: {
            args: Prisma.AtividadeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AtividadeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          findMany: {
            args: Prisma.AtividadeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>[]
          }
          create: {
            args: Prisma.AtividadeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          createMany: {
            args: Prisma.AtividadeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AtividadeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          update: {
            args: Prisma.AtividadeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          deleteMany: {
            args: Prisma.AtividadeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AtividadeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AtividadeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AtividadePayload>
          }
          aggregate: {
            args: Prisma.AtividadeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAtividade>
          }
          groupBy: {
            args: Prisma.AtividadeGroupByArgs<ExtArgs>
            result: $Utils.Optional<AtividadeGroupByOutputType>[]
          }
          count: {
            args: Prisma.AtividadeCountArgs<ExtArgs>
            result: $Utils.Optional<AtividadeCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    aluno?: AlunoOmit
    telefone?: TelefoneOmit
    atividade?: AtividadeOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type AlunoCountOutputType
   */

  export type AlunoCountOutputType = {
    telefones: number
    atividades: number
  }

  export type AlunoCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telefones?: boolean | AlunoCountOutputTypeCountTelefonesArgs
    atividades?: boolean | AlunoCountOutputTypeCountAtividadesArgs
  }

  // Custom InputTypes
  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlunoCountOutputType
     */
    select?: AlunoCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountTelefonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelefoneWhereInput
  }

  /**
   * AlunoCountOutputType without action
   */
  export type AlunoCountOutputTypeCountAtividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Aluno
   */

  export type AggregateAluno = {
    _count: AlunoCountAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  export type AlunoMinAggregateOutputType = {
    ra: string | null
    nome: string | null
    email: string | null
  }

  export type AlunoMaxAggregateOutputType = {
    ra: string | null
    nome: string | null
    email: string | null
  }

  export type AlunoCountAggregateOutputType = {
    ra: number
    nome: number
    email: number
    _all: number
  }


  export type AlunoMinAggregateInputType = {
    ra?: true
    nome?: true
    email?: true
  }

  export type AlunoMaxAggregateInputType = {
    ra?: true
    nome?: true
    email?: true
  }

  export type AlunoCountAggregateInputType = {
    ra?: true
    nome?: true
    email?: true
    _all?: true
  }

  export type AlunoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Aluno to aggregate.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alunos
    **/
    _count?: true | AlunoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlunoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlunoMaxAggregateInputType
  }

  export type GetAlunoAggregateType<T extends AlunoAggregateArgs> = {
        [P in keyof T & keyof AggregateAluno]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAluno[P]>
      : GetScalarType<T[P], AggregateAluno[P]>
  }




  export type AlunoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlunoWhereInput
    orderBy?: AlunoOrderByWithAggregationInput | AlunoOrderByWithAggregationInput[]
    by: AlunoScalarFieldEnum[] | AlunoScalarFieldEnum
    having?: AlunoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlunoCountAggregateInputType | true
    _min?: AlunoMinAggregateInputType
    _max?: AlunoMaxAggregateInputType
  }

  export type AlunoGroupByOutputType = {
    ra: string
    nome: string
    email: string
    _count: AlunoCountAggregateOutputType | null
    _min: AlunoMinAggregateOutputType | null
    _max: AlunoMaxAggregateOutputType | null
  }

  type GetAlunoGroupByPayload<T extends AlunoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlunoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlunoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlunoGroupByOutputType[P]>
            : GetScalarType<T[P], AlunoGroupByOutputType[P]>
        }
      >
    >


  export type AlunoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    ra?: boolean
    nome?: boolean
    email?: boolean
    telefones?: boolean | Aluno$telefonesArgs<ExtArgs>
    atividades?: boolean | Aluno$atividadesArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["aluno"]>



  export type AlunoSelectScalar = {
    ra?: boolean
    nome?: boolean
    email?: boolean
  }

  export type AlunoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"ra" | "nome" | "email", ExtArgs["result"]["aluno"]>
  export type AlunoInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telefones?: boolean | Aluno$telefonesArgs<ExtArgs>
    atividades?: boolean | Aluno$atividadesArgs<ExtArgs>
    _count?: boolean | AlunoCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $AlunoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Aluno"
    objects: {
      telefones: Prisma.$TelefonePayload<ExtArgs>[]
      atividades: Prisma.$AtividadePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      ra: string
      nome: string
      email: string
    }, ExtArgs["result"]["aluno"]>
    composites: {}
  }

  type AlunoGetPayload<S extends boolean | null | undefined | AlunoDefaultArgs> = $Result.GetResult<Prisma.$AlunoPayload, S>

  type AlunoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlunoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlunoCountAggregateInputType | true
    }

  export interface AlunoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Aluno'], meta: { name: 'Aluno' } }
    /**
     * Find zero or one Aluno that matches the filter.
     * @param {AlunoFindUniqueArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlunoFindUniqueArgs>(args: SelectSubset<T, AlunoFindUniqueArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Aluno that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlunoFindUniqueOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlunoFindUniqueOrThrowArgs>(args: SelectSubset<T, AlunoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlunoFindFirstArgs>(args?: SelectSubset<T, AlunoFindFirstArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Aluno that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindFirstOrThrowArgs} args - Arguments to find a Aluno
     * @example
     * // Get one Aluno
     * const aluno = await prisma.aluno.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlunoFindFirstOrThrowArgs>(args?: SelectSubset<T, AlunoFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alunos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alunos
     * const alunos = await prisma.aluno.findMany()
     * 
     * // Get first 10 Alunos
     * const alunos = await prisma.aluno.findMany({ take: 10 })
     * 
     * // Only select the `ra`
     * const alunoWithRaOnly = await prisma.aluno.findMany({ select: { ra: true } })
     * 
     */
    findMany<T extends AlunoFindManyArgs>(args?: SelectSubset<T, AlunoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Aluno.
     * @param {AlunoCreateArgs} args - Arguments to create a Aluno.
     * @example
     * // Create one Aluno
     * const Aluno = await prisma.aluno.create({
     *   data: {
     *     // ... data to create a Aluno
     *   }
     * })
     * 
     */
    create<T extends AlunoCreateArgs>(args: SelectSubset<T, AlunoCreateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alunos.
     * @param {AlunoCreateManyArgs} args - Arguments to create many Alunos.
     * @example
     * // Create many Alunos
     * const aluno = await prisma.aluno.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlunoCreateManyArgs>(args?: SelectSubset<T, AlunoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Aluno.
     * @param {AlunoDeleteArgs} args - Arguments to delete one Aluno.
     * @example
     * // Delete one Aluno
     * const Aluno = await prisma.aluno.delete({
     *   where: {
     *     // ... filter to delete one Aluno
     *   }
     * })
     * 
     */
    delete<T extends AlunoDeleteArgs>(args: SelectSubset<T, AlunoDeleteArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Aluno.
     * @param {AlunoUpdateArgs} args - Arguments to update one Aluno.
     * @example
     * // Update one Aluno
     * const aluno = await prisma.aluno.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlunoUpdateArgs>(args: SelectSubset<T, AlunoUpdateArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alunos.
     * @param {AlunoDeleteManyArgs} args - Arguments to filter Alunos to delete.
     * @example
     * // Delete a few Alunos
     * const { count } = await prisma.aluno.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlunoDeleteManyArgs>(args?: SelectSubset<T, AlunoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alunos
     * const aluno = await prisma.aluno.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlunoUpdateManyArgs>(args: SelectSubset<T, AlunoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Aluno.
     * @param {AlunoUpsertArgs} args - Arguments to update or create a Aluno.
     * @example
     * // Update or create a Aluno
     * const aluno = await prisma.aluno.upsert({
     *   create: {
     *     // ... data to create a Aluno
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Aluno we want to update
     *   }
     * })
     */
    upsert<T extends AlunoUpsertArgs>(args: SelectSubset<T, AlunoUpsertArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alunos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoCountArgs} args - Arguments to filter Alunos to count.
     * @example
     * // Count the number of Alunos
     * const count = await prisma.aluno.count({
     *   where: {
     *     // ... the filter for the Alunos we want to count
     *   }
     * })
    **/
    count<T extends AlunoCountArgs>(
      args?: Subset<T, AlunoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlunoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlunoAggregateArgs>(args: Subset<T, AlunoAggregateArgs>): Prisma.PrismaPromise<GetAlunoAggregateType<T>>

    /**
     * Group by Aluno.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlunoGroupByArgs} args - Group by arguments.
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
      T extends AlunoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlunoGroupByArgs['orderBy'] }
        : { orderBy?: AlunoGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlunoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlunoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Aluno model
   */
  readonly fields: AlunoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Aluno.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlunoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    telefones<T extends Aluno$telefonesArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$telefonesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    atividades<T extends Aluno$atividadesArgs<ExtArgs> = {}>(args?: Subset<T, Aluno$atividadesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Aluno model
   */
  interface AlunoFieldRefs {
    readonly ra: FieldRef<"Aluno", 'String'>
    readonly nome: FieldRef<"Aluno", 'String'>
    readonly email: FieldRef<"Aluno", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Aluno findUnique
   */
  export type AlunoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findUniqueOrThrow
   */
  export type AlunoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno findFirst
   */
  export type AlunoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findFirstOrThrow
   */
  export type AlunoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Aluno to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alunos.
     */
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno findMany
   */
  export type AlunoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter, which Alunos to fetch.
     */
    where?: AlunoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alunos to fetch.
     */
    orderBy?: AlunoOrderByWithRelationInput | AlunoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alunos.
     */
    cursor?: AlunoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alunos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alunos.
     */
    skip?: number
    distinct?: AlunoScalarFieldEnum | AlunoScalarFieldEnum[]
  }

  /**
   * Aluno create
   */
  export type AlunoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to create a Aluno.
     */
    data: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
  }

  /**
   * Aluno createMany
   */
  export type AlunoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alunos.
     */
    data: AlunoCreateManyInput | AlunoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Aluno update
   */
  export type AlunoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The data needed to update a Aluno.
     */
    data: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
    /**
     * Choose, which Aluno to update.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno updateMany
   */
  export type AlunoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alunos.
     */
    data: XOR<AlunoUpdateManyMutationInput, AlunoUncheckedUpdateManyInput>
    /**
     * Filter which Alunos to update
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to update.
     */
    limit?: number
  }

  /**
   * Aluno upsert
   */
  export type AlunoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * The filter to search for the Aluno to update in case it exists.
     */
    where: AlunoWhereUniqueInput
    /**
     * In case the Aluno found by the `where` argument doesn't exist, create a new Aluno with this data.
     */
    create: XOR<AlunoCreateInput, AlunoUncheckedCreateInput>
    /**
     * In case the Aluno was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlunoUpdateInput, AlunoUncheckedUpdateInput>
  }

  /**
   * Aluno delete
   */
  export type AlunoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
    /**
     * Filter which Aluno to delete.
     */
    where: AlunoWhereUniqueInput
  }

  /**
   * Aluno deleteMany
   */
  export type AlunoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alunos to delete
     */
    where?: AlunoWhereInput
    /**
     * Limit how many Alunos to delete.
     */
    limit?: number
  }

  /**
   * Aluno.telefones
   */
  export type Aluno$telefonesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    where?: TelefoneWhereInput
    orderBy?: TelefoneOrderByWithRelationInput | TelefoneOrderByWithRelationInput[]
    cursor?: TelefoneWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TelefoneScalarFieldEnum | TelefoneScalarFieldEnum[]
  }

  /**
   * Aluno.atividades
   */
  export type Aluno$atividadesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    cursor?: AtividadeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Aluno without action
   */
  export type AlunoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Aluno
     */
    select?: AlunoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Aluno
     */
    omit?: AlunoOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlunoInclude<ExtArgs> | null
  }


  /**
   * Model Telefone
   */

  export type AggregateTelefone = {
    _count: TelefoneCountAggregateOutputType | null
    _avg: TelefoneAvgAggregateOutputType | null
    _sum: TelefoneSumAggregateOutputType | null
    _min: TelefoneMinAggregateOutputType | null
    _max: TelefoneMaxAggregateOutputType | null
  }

  export type TelefoneAvgAggregateOutputType = {
    id: number | null
  }

  export type TelefoneSumAggregateOutputType = {
    id: number | null
  }

  export type TelefoneMinAggregateOutputType = {
    id: number | null
    alunoRa: string | null
    numero: string | null
    tipo: string | null
  }

  export type TelefoneMaxAggregateOutputType = {
    id: number | null
    alunoRa: string | null
    numero: string | null
    tipo: string | null
  }

  export type TelefoneCountAggregateOutputType = {
    id: number
    alunoRa: number
    numero: number
    tipo: number
    _all: number
  }


  export type TelefoneAvgAggregateInputType = {
    id?: true
  }

  export type TelefoneSumAggregateInputType = {
    id?: true
  }

  export type TelefoneMinAggregateInputType = {
    id?: true
    alunoRa?: true
    numero?: true
    tipo?: true
  }

  export type TelefoneMaxAggregateInputType = {
    id?: true
    alunoRa?: true
    numero?: true
    tipo?: true
  }

  export type TelefoneCountAggregateInputType = {
    id?: true
    alunoRa?: true
    numero?: true
    tipo?: true
    _all?: true
  }

  export type TelefoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telefone to aggregate.
     */
    where?: TelefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefones to fetch.
     */
    orderBy?: TelefoneOrderByWithRelationInput | TelefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Telefones
    **/
    _count?: true | TelefoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelefoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelefoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelefoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelefoneMaxAggregateInputType
  }

  export type GetTelefoneAggregateType<T extends TelefoneAggregateArgs> = {
        [P in keyof T & keyof AggregateTelefone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelefone[P]>
      : GetScalarType<T[P], AggregateTelefone[P]>
  }




  export type TelefoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelefoneWhereInput
    orderBy?: TelefoneOrderByWithAggregationInput | TelefoneOrderByWithAggregationInput[]
    by: TelefoneScalarFieldEnum[] | TelefoneScalarFieldEnum
    having?: TelefoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelefoneCountAggregateInputType | true
    _avg?: TelefoneAvgAggregateInputType
    _sum?: TelefoneSumAggregateInputType
    _min?: TelefoneMinAggregateInputType
    _max?: TelefoneMaxAggregateInputType
  }

  export type TelefoneGroupByOutputType = {
    id: number
    alunoRa: string
    numero: string
    tipo: string
    _count: TelefoneCountAggregateOutputType | null
    _avg: TelefoneAvgAggregateOutputType | null
    _sum: TelefoneSumAggregateOutputType | null
    _min: TelefoneMinAggregateOutputType | null
    _max: TelefoneMaxAggregateOutputType | null
  }

  type GetTelefoneGroupByPayload<T extends TelefoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelefoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelefoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelefoneGroupByOutputType[P]>
            : GetScalarType<T[P], TelefoneGroupByOutputType[P]>
        }
      >
    >


  export type TelefoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alunoRa?: boolean
    numero?: boolean
    tipo?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["telefone"]>



  export type TelefoneSelectScalar = {
    id?: boolean
    alunoRa?: boolean
    numero?: boolean
    tipo?: boolean
  }

  export type TelefoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alunoRa" | "numero" | "tipo", ExtArgs["result"]["telefone"]>
  export type TelefoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }

  export type $TelefonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Telefone"
    objects: {
      aluno: Prisma.$AlunoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      alunoRa: string
      numero: string
      tipo: string
    }, ExtArgs["result"]["telefone"]>
    composites: {}
  }

  type TelefoneGetPayload<S extends boolean | null | undefined | TelefoneDefaultArgs> = $Result.GetResult<Prisma.$TelefonePayload, S>

  type TelefoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelefoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelefoneCountAggregateInputType | true
    }

  export interface TelefoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Telefone'], meta: { name: 'Telefone' } }
    /**
     * Find zero or one Telefone that matches the filter.
     * @param {TelefoneFindUniqueArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelefoneFindUniqueArgs>(args: SelectSubset<T, TelefoneFindUniqueArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Telefone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelefoneFindUniqueOrThrowArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelefoneFindUniqueOrThrowArgs>(args: SelectSubset<T, TelefoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telefone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneFindFirstArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelefoneFindFirstArgs>(args?: SelectSubset<T, TelefoneFindFirstArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telefone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneFindFirstOrThrowArgs} args - Arguments to find a Telefone
     * @example
     * // Get one Telefone
     * const telefone = await prisma.telefone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelefoneFindFirstOrThrowArgs>(args?: SelectSubset<T, TelefoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Telefones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Telefones
     * const telefones = await prisma.telefone.findMany()
     * 
     * // Get first 10 Telefones
     * const telefones = await prisma.telefone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telefoneWithIdOnly = await prisma.telefone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelefoneFindManyArgs>(args?: SelectSubset<T, TelefoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Telefone.
     * @param {TelefoneCreateArgs} args - Arguments to create a Telefone.
     * @example
     * // Create one Telefone
     * const Telefone = await prisma.telefone.create({
     *   data: {
     *     // ... data to create a Telefone
     *   }
     * })
     * 
     */
    create<T extends TelefoneCreateArgs>(args: SelectSubset<T, TelefoneCreateArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Telefones.
     * @param {TelefoneCreateManyArgs} args - Arguments to create many Telefones.
     * @example
     * // Create many Telefones
     * const telefone = await prisma.telefone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelefoneCreateManyArgs>(args?: SelectSubset<T, TelefoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Telefone.
     * @param {TelefoneDeleteArgs} args - Arguments to delete one Telefone.
     * @example
     * // Delete one Telefone
     * const Telefone = await prisma.telefone.delete({
     *   where: {
     *     // ... filter to delete one Telefone
     *   }
     * })
     * 
     */
    delete<T extends TelefoneDeleteArgs>(args: SelectSubset<T, TelefoneDeleteArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Telefone.
     * @param {TelefoneUpdateArgs} args - Arguments to update one Telefone.
     * @example
     * // Update one Telefone
     * const telefone = await prisma.telefone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelefoneUpdateArgs>(args: SelectSubset<T, TelefoneUpdateArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Telefones.
     * @param {TelefoneDeleteManyArgs} args - Arguments to filter Telefones to delete.
     * @example
     * // Delete a few Telefones
     * const { count } = await prisma.telefone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelefoneDeleteManyArgs>(args?: SelectSubset<T, TelefoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Telefones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Telefones
     * const telefone = await prisma.telefone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelefoneUpdateManyArgs>(args: SelectSubset<T, TelefoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Telefone.
     * @param {TelefoneUpsertArgs} args - Arguments to update or create a Telefone.
     * @example
     * // Update or create a Telefone
     * const telefone = await prisma.telefone.upsert({
     *   create: {
     *     // ... data to create a Telefone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Telefone we want to update
     *   }
     * })
     */
    upsert<T extends TelefoneUpsertArgs>(args: SelectSubset<T, TelefoneUpsertArgs<ExtArgs>>): Prisma__TelefoneClient<$Result.GetResult<Prisma.$TelefonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Telefones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneCountArgs} args - Arguments to filter Telefones to count.
     * @example
     * // Count the number of Telefones
     * const count = await prisma.telefone.count({
     *   where: {
     *     // ... the filter for the Telefones we want to count
     *   }
     * })
    **/
    count<T extends TelefoneCountArgs>(
      args?: Subset<T, TelefoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelefoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Telefone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TelefoneAggregateArgs>(args: Subset<T, TelefoneAggregateArgs>): Prisma.PrismaPromise<GetTelefoneAggregateType<T>>

    /**
     * Group by Telefone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelefoneGroupByArgs} args - Group by arguments.
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
      T extends TelefoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelefoneGroupByArgs['orderBy'] }
        : { orderBy?: TelefoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TelefoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelefoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Telefone model
   */
  readonly fields: TelefoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Telefone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelefoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends AlunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunoDefaultArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Telefone model
   */
  interface TelefoneFieldRefs {
    readonly id: FieldRef<"Telefone", 'Int'>
    readonly alunoRa: FieldRef<"Telefone", 'String'>
    readonly numero: FieldRef<"Telefone", 'String'>
    readonly tipo: FieldRef<"Telefone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Telefone findUnique
   */
  export type TelefoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter, which Telefone to fetch.
     */
    where: TelefoneWhereUniqueInput
  }

  /**
   * Telefone findUniqueOrThrow
   */
  export type TelefoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter, which Telefone to fetch.
     */
    where: TelefoneWhereUniqueInput
  }

  /**
   * Telefone findFirst
   */
  export type TelefoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter, which Telefone to fetch.
     */
    where?: TelefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefones to fetch.
     */
    orderBy?: TelefoneOrderByWithRelationInput | TelefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telefones.
     */
    cursor?: TelefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telefones.
     */
    distinct?: TelefoneScalarFieldEnum | TelefoneScalarFieldEnum[]
  }

  /**
   * Telefone findFirstOrThrow
   */
  export type TelefoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter, which Telefone to fetch.
     */
    where?: TelefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefones to fetch.
     */
    orderBy?: TelefoneOrderByWithRelationInput | TelefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telefones.
     */
    cursor?: TelefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telefones.
     */
    distinct?: TelefoneScalarFieldEnum | TelefoneScalarFieldEnum[]
  }

  /**
   * Telefone findMany
   */
  export type TelefoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter, which Telefones to fetch.
     */
    where?: TelefoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telefones to fetch.
     */
    orderBy?: TelefoneOrderByWithRelationInput | TelefoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Telefones.
     */
    cursor?: TelefoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telefones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telefones.
     */
    skip?: number
    distinct?: TelefoneScalarFieldEnum | TelefoneScalarFieldEnum[]
  }

  /**
   * Telefone create
   */
  export type TelefoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Telefone.
     */
    data: XOR<TelefoneCreateInput, TelefoneUncheckedCreateInput>
  }

  /**
   * Telefone createMany
   */
  export type TelefoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Telefones.
     */
    data: TelefoneCreateManyInput | TelefoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Telefone update
   */
  export type TelefoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Telefone.
     */
    data: XOR<TelefoneUpdateInput, TelefoneUncheckedUpdateInput>
    /**
     * Choose, which Telefone to update.
     */
    where: TelefoneWhereUniqueInput
  }

  /**
   * Telefone updateMany
   */
  export type TelefoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Telefones.
     */
    data: XOR<TelefoneUpdateManyMutationInput, TelefoneUncheckedUpdateManyInput>
    /**
     * Filter which Telefones to update
     */
    where?: TelefoneWhereInput
    /**
     * Limit how many Telefones to update.
     */
    limit?: number
  }

  /**
   * Telefone upsert
   */
  export type TelefoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Telefone to update in case it exists.
     */
    where: TelefoneWhereUniqueInput
    /**
     * In case the Telefone found by the `where` argument doesn't exist, create a new Telefone with this data.
     */
    create: XOR<TelefoneCreateInput, TelefoneUncheckedCreateInput>
    /**
     * In case the Telefone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelefoneUpdateInput, TelefoneUncheckedUpdateInput>
  }

  /**
   * Telefone delete
   */
  export type TelefoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
    /**
     * Filter which Telefone to delete.
     */
    where: TelefoneWhereUniqueInput
  }

  /**
   * Telefone deleteMany
   */
  export type TelefoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telefones to delete
     */
    where?: TelefoneWhereInput
    /**
     * Limit how many Telefones to delete.
     */
    limit?: number
  }

  /**
   * Telefone without action
   */
  export type TelefoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telefone
     */
    select?: TelefoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telefone
     */
    omit?: TelefoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelefoneInclude<ExtArgs> | null
  }


  /**
   * Model Atividade
   */

  export type AggregateAtividade = {
    _count: AtividadeCountAggregateOutputType | null
    _avg: AtividadeAvgAggregateOutputType | null
    _sum: AtividadeSumAggregateOutputType | null
    _min: AtividadeMinAggregateOutputType | null
    _max: AtividadeMaxAggregateOutputType | null
  }

  export type AtividadeAvgAggregateOutputType = {
    id: number | null
    nota: number | null
    peso: number | null
    parcial: number | null
  }

  export type AtividadeSumAggregateOutputType = {
    id: number | null
    nota: number | null
    peso: number | null
    parcial: number | null
  }

  export type AtividadeMinAggregateOutputType = {
    id: number | null
    nome: string | null
    alunoRa: string | null
    dataInicio: Date | null
    dataEntrega: Date | null
    nota: number | null
    peso: number | null
    parcial: number | null
  }

  export type AtividadeMaxAggregateOutputType = {
    id: number | null
    nome: string | null
    alunoRa: string | null
    dataInicio: Date | null
    dataEntrega: Date | null
    nota: number | null
    peso: number | null
    parcial: number | null
  }

  export type AtividadeCountAggregateOutputType = {
    id: number
    nome: number
    alunoRa: number
    dataInicio: number
    dataEntrega: number
    nota: number
    peso: number
    parcial: number
    _all: number
  }


  export type AtividadeAvgAggregateInputType = {
    id?: true
    nota?: true
    peso?: true
    parcial?: true
  }

  export type AtividadeSumAggregateInputType = {
    id?: true
    nota?: true
    peso?: true
    parcial?: true
  }

  export type AtividadeMinAggregateInputType = {
    id?: true
    nome?: true
    alunoRa?: true
    dataInicio?: true
    dataEntrega?: true
    nota?: true
    peso?: true
    parcial?: true
  }

  export type AtividadeMaxAggregateInputType = {
    id?: true
    nome?: true
    alunoRa?: true
    dataInicio?: true
    dataEntrega?: true
    nota?: true
    peso?: true
    parcial?: true
  }

  export type AtividadeCountAggregateInputType = {
    id?: true
    nome?: true
    alunoRa?: true
    dataInicio?: true
    dataEntrega?: true
    nota?: true
    peso?: true
    parcial?: true
    _all?: true
  }

  export type AtividadeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atividade to aggregate.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Atividades
    **/
    _count?: true | AtividadeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AtividadeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AtividadeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AtividadeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AtividadeMaxAggregateInputType
  }

  export type GetAtividadeAggregateType<T extends AtividadeAggregateArgs> = {
        [P in keyof T & keyof AggregateAtividade]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAtividade[P]>
      : GetScalarType<T[P], AggregateAtividade[P]>
  }




  export type AtividadeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AtividadeWhereInput
    orderBy?: AtividadeOrderByWithAggregationInput | AtividadeOrderByWithAggregationInput[]
    by: AtividadeScalarFieldEnum[] | AtividadeScalarFieldEnum
    having?: AtividadeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AtividadeCountAggregateInputType | true
    _avg?: AtividadeAvgAggregateInputType
    _sum?: AtividadeSumAggregateInputType
    _min?: AtividadeMinAggregateInputType
    _max?: AtividadeMaxAggregateInputType
  }

  export type AtividadeGroupByOutputType = {
    id: number
    nome: string
    alunoRa: string
    dataInicio: Date
    dataEntrega: Date | null
    nota: number | null
    peso: number
    parcial: number | null
    _count: AtividadeCountAggregateOutputType | null
    _avg: AtividadeAvgAggregateOutputType | null
    _sum: AtividadeSumAggregateOutputType | null
    _min: AtividadeMinAggregateOutputType | null
    _max: AtividadeMaxAggregateOutputType | null
  }

  type GetAtividadeGroupByPayload<T extends AtividadeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AtividadeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AtividadeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AtividadeGroupByOutputType[P]>
            : GetScalarType<T[P], AtividadeGroupByOutputType[P]>
        }
      >
    >


  export type AtividadeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nome?: boolean
    alunoRa?: boolean
    dataInicio?: boolean
    dataEntrega?: boolean
    nota?: boolean
    peso?: boolean
    parcial?: boolean
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["atividade"]>



  export type AtividadeSelectScalar = {
    id?: boolean
    nome?: boolean
    alunoRa?: boolean
    dataInicio?: boolean
    dataEntrega?: boolean
    nota?: boolean
    peso?: boolean
    parcial?: boolean
  }

  export type AtividadeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nome" | "alunoRa" | "dataInicio" | "dataEntrega" | "nota" | "peso" | "parcial", ExtArgs["result"]["atividade"]>
  export type AtividadeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    aluno?: boolean | AlunoDefaultArgs<ExtArgs>
  }

  export type $AtividadePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Atividade"
    objects: {
      aluno: Prisma.$AlunoPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nome: string
      alunoRa: string
      dataInicio: Date
      dataEntrega: Date | null
      nota: number | null
      peso: number
      parcial: number | null
    }, ExtArgs["result"]["atividade"]>
    composites: {}
  }

  type AtividadeGetPayload<S extends boolean | null | undefined | AtividadeDefaultArgs> = $Result.GetResult<Prisma.$AtividadePayload, S>

  type AtividadeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AtividadeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AtividadeCountAggregateInputType | true
    }

  export interface AtividadeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Atividade'], meta: { name: 'Atividade' } }
    /**
     * Find zero or one Atividade that matches the filter.
     * @param {AtividadeFindUniqueArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AtividadeFindUniqueArgs>(args: SelectSubset<T, AtividadeFindUniqueArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Atividade that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AtividadeFindUniqueOrThrowArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AtividadeFindUniqueOrThrowArgs>(args: SelectSubset<T, AtividadeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atividade that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeFindFirstArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AtividadeFindFirstArgs>(args?: SelectSubset<T, AtividadeFindFirstArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Atividade that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeFindFirstOrThrowArgs} args - Arguments to find a Atividade
     * @example
     * // Get one Atividade
     * const atividade = await prisma.atividade.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AtividadeFindFirstOrThrowArgs>(args?: SelectSubset<T, AtividadeFindFirstOrThrowArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Atividades that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Atividades
     * const atividades = await prisma.atividade.findMany()
     * 
     * // Get first 10 Atividades
     * const atividades = await prisma.atividade.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const atividadeWithIdOnly = await prisma.atividade.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AtividadeFindManyArgs>(args?: SelectSubset<T, AtividadeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Atividade.
     * @param {AtividadeCreateArgs} args - Arguments to create a Atividade.
     * @example
     * // Create one Atividade
     * const Atividade = await prisma.atividade.create({
     *   data: {
     *     // ... data to create a Atividade
     *   }
     * })
     * 
     */
    create<T extends AtividadeCreateArgs>(args: SelectSubset<T, AtividadeCreateArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Atividades.
     * @param {AtividadeCreateManyArgs} args - Arguments to create many Atividades.
     * @example
     * // Create many Atividades
     * const atividade = await prisma.atividade.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AtividadeCreateManyArgs>(args?: SelectSubset<T, AtividadeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Atividade.
     * @param {AtividadeDeleteArgs} args - Arguments to delete one Atividade.
     * @example
     * // Delete one Atividade
     * const Atividade = await prisma.atividade.delete({
     *   where: {
     *     // ... filter to delete one Atividade
     *   }
     * })
     * 
     */
    delete<T extends AtividadeDeleteArgs>(args: SelectSubset<T, AtividadeDeleteArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Atividade.
     * @param {AtividadeUpdateArgs} args - Arguments to update one Atividade.
     * @example
     * // Update one Atividade
     * const atividade = await prisma.atividade.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AtividadeUpdateArgs>(args: SelectSubset<T, AtividadeUpdateArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Atividades.
     * @param {AtividadeDeleteManyArgs} args - Arguments to filter Atividades to delete.
     * @example
     * // Delete a few Atividades
     * const { count } = await prisma.atividade.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AtividadeDeleteManyArgs>(args?: SelectSubset<T, AtividadeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Atividades
     * const atividade = await prisma.atividade.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AtividadeUpdateManyArgs>(args: SelectSubset<T, AtividadeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Atividade.
     * @param {AtividadeUpsertArgs} args - Arguments to update or create a Atividade.
     * @example
     * // Update or create a Atividade
     * const atividade = await prisma.atividade.upsert({
     *   create: {
     *     // ... data to create a Atividade
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Atividade we want to update
     *   }
     * })
     */
    upsert<T extends AtividadeUpsertArgs>(args: SelectSubset<T, AtividadeUpsertArgs<ExtArgs>>): Prisma__AtividadeClient<$Result.GetResult<Prisma.$AtividadePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Atividades.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeCountArgs} args - Arguments to filter Atividades to count.
     * @example
     * // Count the number of Atividades
     * const count = await prisma.atividade.count({
     *   where: {
     *     // ... the filter for the Atividades we want to count
     *   }
     * })
    **/
    count<T extends AtividadeCountArgs>(
      args?: Subset<T, AtividadeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AtividadeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Atividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AtividadeAggregateArgs>(args: Subset<T, AtividadeAggregateArgs>): Prisma.PrismaPromise<GetAtividadeAggregateType<T>>

    /**
     * Group by Atividade.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AtividadeGroupByArgs} args - Group by arguments.
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
      T extends AtividadeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AtividadeGroupByArgs['orderBy'] }
        : { orderBy?: AtividadeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AtividadeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAtividadeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Atividade model
   */
  readonly fields: AtividadeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Atividade.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AtividadeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    aluno<T extends AlunoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlunoDefaultArgs<ExtArgs>>): Prisma__AlunoClient<$Result.GetResult<Prisma.$AlunoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Atividade model
   */
  interface AtividadeFieldRefs {
    readonly id: FieldRef<"Atividade", 'Int'>
    readonly nome: FieldRef<"Atividade", 'String'>
    readonly alunoRa: FieldRef<"Atividade", 'String'>
    readonly dataInicio: FieldRef<"Atividade", 'DateTime'>
    readonly dataEntrega: FieldRef<"Atividade", 'DateTime'>
    readonly nota: FieldRef<"Atividade", 'Int'>
    readonly peso: FieldRef<"Atividade", 'Float'>
    readonly parcial: FieldRef<"Atividade", 'Float'>
  }
    

  // Custom InputTypes
  /**
   * Atividade findUnique
   */
  export type AtividadeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade findUniqueOrThrow
   */
  export type AtividadeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade findFirst
   */
  export type AtividadeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atividades.
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atividades.
     */
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Atividade findFirstOrThrow
   */
  export type AtividadeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividade to fetch.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Atividades.
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Atividades.
     */
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Atividade findMany
   */
  export type AtividadeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter, which Atividades to fetch.
     */
    where?: AtividadeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Atividades to fetch.
     */
    orderBy?: AtividadeOrderByWithRelationInput | AtividadeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Atividades.
     */
    cursor?: AtividadeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Atividades from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Atividades.
     */
    skip?: number
    distinct?: AtividadeScalarFieldEnum | AtividadeScalarFieldEnum[]
  }

  /**
   * Atividade create
   */
  export type AtividadeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * The data needed to create a Atividade.
     */
    data: XOR<AtividadeCreateInput, AtividadeUncheckedCreateInput>
  }

  /**
   * Atividade createMany
   */
  export type AtividadeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Atividades.
     */
    data: AtividadeCreateManyInput | AtividadeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Atividade update
   */
  export type AtividadeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * The data needed to update a Atividade.
     */
    data: XOR<AtividadeUpdateInput, AtividadeUncheckedUpdateInput>
    /**
     * Choose, which Atividade to update.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade updateMany
   */
  export type AtividadeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Atividades.
     */
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyInput>
    /**
     * Filter which Atividades to update
     */
    where?: AtividadeWhereInput
    /**
     * Limit how many Atividades to update.
     */
    limit?: number
  }

  /**
   * Atividade upsert
   */
  export type AtividadeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * The filter to search for the Atividade to update in case it exists.
     */
    where: AtividadeWhereUniqueInput
    /**
     * In case the Atividade found by the `where` argument doesn't exist, create a new Atividade with this data.
     */
    create: XOR<AtividadeCreateInput, AtividadeUncheckedCreateInput>
    /**
     * In case the Atividade was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AtividadeUpdateInput, AtividadeUncheckedUpdateInput>
  }

  /**
   * Atividade delete
   */
  export type AtividadeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
    /**
     * Filter which Atividade to delete.
     */
    where: AtividadeWhereUniqueInput
  }

  /**
   * Atividade deleteMany
   */
  export type AtividadeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Atividades to delete
     */
    where?: AtividadeWhereInput
    /**
     * Limit how many Atividades to delete.
     */
    limit?: number
  }

  /**
   * Atividade without action
   */
  export type AtividadeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Atividade
     */
    select?: AtividadeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Atividade
     */
    omit?: AtividadeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AtividadeInclude<ExtArgs> | null
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


  export const AlunoScalarFieldEnum: {
    ra: 'ra',
    nome: 'nome',
    email: 'email'
  };

  export type AlunoScalarFieldEnum = (typeof AlunoScalarFieldEnum)[keyof typeof AlunoScalarFieldEnum]


  export const TelefoneScalarFieldEnum: {
    id: 'id',
    alunoRa: 'alunoRa',
    numero: 'numero',
    tipo: 'tipo'
  };

  export type TelefoneScalarFieldEnum = (typeof TelefoneScalarFieldEnum)[keyof typeof TelefoneScalarFieldEnum]


  export const AtividadeScalarFieldEnum: {
    id: 'id',
    nome: 'nome',
    alunoRa: 'alunoRa',
    dataInicio: 'dataInicio',
    dataEntrega: 'dataEntrega',
    nota: 'nota',
    peso: 'peso',
    parcial: 'parcial'
  };

  export type AtividadeScalarFieldEnum = (typeof AtividadeScalarFieldEnum)[keyof typeof AtividadeScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const AlunoOrderByRelevanceFieldEnum: {
    ra: 'ra',
    nome: 'nome',
    email: 'email'
  };

  export type AlunoOrderByRelevanceFieldEnum = (typeof AlunoOrderByRelevanceFieldEnum)[keyof typeof AlunoOrderByRelevanceFieldEnum]


  export const TelefoneOrderByRelevanceFieldEnum: {
    alunoRa: 'alunoRa',
    numero: 'numero',
    tipo: 'tipo'
  };

  export type TelefoneOrderByRelevanceFieldEnum = (typeof TelefoneOrderByRelevanceFieldEnum)[keyof typeof TelefoneOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const AtividadeOrderByRelevanceFieldEnum: {
    nome: 'nome',
    alunoRa: 'alunoRa'
  };

  export type AtividadeOrderByRelevanceFieldEnum = (typeof AtividadeOrderByRelevanceFieldEnum)[keyof typeof AtividadeOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type AlunoWhereInput = {
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    ra?: StringFilter<"Aluno"> | string
    nome?: StringFilter<"Aluno"> | string
    email?: StringFilter<"Aluno"> | string
    telefones?: TelefoneListRelationFilter
    atividades?: AtividadeListRelationFilter
  }

  export type AlunoOrderByWithRelationInput = {
    ra?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    telefones?: TelefoneOrderByRelationAggregateInput
    atividades?: AtividadeOrderByRelationAggregateInput
    _relevance?: AlunoOrderByRelevanceInput
  }

  export type AlunoWhereUniqueInput = Prisma.AtLeast<{
    ra?: string
    email?: string
    AND?: AlunoWhereInput | AlunoWhereInput[]
    OR?: AlunoWhereInput[]
    NOT?: AlunoWhereInput | AlunoWhereInput[]
    nome?: StringFilter<"Aluno"> | string
    telefones?: TelefoneListRelationFilter
    atividades?: AtividadeListRelationFilter
  }, "ra" | "email">

  export type AlunoOrderByWithAggregationInput = {
    ra?: SortOrder
    nome?: SortOrder
    email?: SortOrder
    _count?: AlunoCountOrderByAggregateInput
    _max?: AlunoMaxOrderByAggregateInput
    _min?: AlunoMinOrderByAggregateInput
  }

  export type AlunoScalarWhereWithAggregatesInput = {
    AND?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    OR?: AlunoScalarWhereWithAggregatesInput[]
    NOT?: AlunoScalarWhereWithAggregatesInput | AlunoScalarWhereWithAggregatesInput[]
    ra?: StringWithAggregatesFilter<"Aluno"> | string
    nome?: StringWithAggregatesFilter<"Aluno"> | string
    email?: StringWithAggregatesFilter<"Aluno"> | string
  }

  export type TelefoneWhereInput = {
    AND?: TelefoneWhereInput | TelefoneWhereInput[]
    OR?: TelefoneWhereInput[]
    NOT?: TelefoneWhereInput | TelefoneWhereInput[]
    id?: IntFilter<"Telefone"> | number
    alunoRa?: StringFilter<"Telefone"> | string
    numero?: StringFilter<"Telefone"> | string
    tipo?: StringFilter<"Telefone"> | string
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }

  export type TelefoneOrderByWithRelationInput = {
    id?: SortOrder
    alunoRa?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
    aluno?: AlunoOrderByWithRelationInput
    _relevance?: TelefoneOrderByRelevanceInput
  }

  export type TelefoneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TelefoneWhereInput | TelefoneWhereInput[]
    OR?: TelefoneWhereInput[]
    NOT?: TelefoneWhereInput | TelefoneWhereInput[]
    alunoRa?: StringFilter<"Telefone"> | string
    numero?: StringFilter<"Telefone"> | string
    tipo?: StringFilter<"Telefone"> | string
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }, "id">

  export type TelefoneOrderByWithAggregationInput = {
    id?: SortOrder
    alunoRa?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
    _count?: TelefoneCountOrderByAggregateInput
    _avg?: TelefoneAvgOrderByAggregateInput
    _max?: TelefoneMaxOrderByAggregateInput
    _min?: TelefoneMinOrderByAggregateInput
    _sum?: TelefoneSumOrderByAggregateInput
  }

  export type TelefoneScalarWhereWithAggregatesInput = {
    AND?: TelefoneScalarWhereWithAggregatesInput | TelefoneScalarWhereWithAggregatesInput[]
    OR?: TelefoneScalarWhereWithAggregatesInput[]
    NOT?: TelefoneScalarWhereWithAggregatesInput | TelefoneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Telefone"> | number
    alunoRa?: StringWithAggregatesFilter<"Telefone"> | string
    numero?: StringWithAggregatesFilter<"Telefone"> | string
    tipo?: StringWithAggregatesFilter<"Telefone"> | string
  }

  export type AtividadeWhereInput = {
    AND?: AtividadeWhereInput | AtividadeWhereInput[]
    OR?: AtividadeWhereInput[]
    NOT?: AtividadeWhereInput | AtividadeWhereInput[]
    id?: IntFilter<"Atividade"> | number
    nome?: StringFilter<"Atividade"> | string
    alunoRa?: StringFilter<"Atividade"> | string
    dataInicio?: DateTimeFilter<"Atividade"> | Date | string
    dataEntrega?: DateTimeNullableFilter<"Atividade"> | Date | string | null
    nota?: IntNullableFilter<"Atividade"> | number | null
    peso?: FloatFilter<"Atividade"> | number
    parcial?: FloatNullableFilter<"Atividade"> | number | null
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }

  export type AtividadeOrderByWithRelationInput = {
    id?: SortOrder
    nome?: SortOrder
    alunoRa?: SortOrder
    dataInicio?: SortOrder
    dataEntrega?: SortOrderInput | SortOrder
    nota?: SortOrderInput | SortOrder
    peso?: SortOrder
    parcial?: SortOrderInput | SortOrder
    aluno?: AlunoOrderByWithRelationInput
    _relevance?: AtividadeOrderByRelevanceInput
  }

  export type AtividadeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AtividadeWhereInput | AtividadeWhereInput[]
    OR?: AtividadeWhereInput[]
    NOT?: AtividadeWhereInput | AtividadeWhereInput[]
    nome?: StringFilter<"Atividade"> | string
    alunoRa?: StringFilter<"Atividade"> | string
    dataInicio?: DateTimeFilter<"Atividade"> | Date | string
    dataEntrega?: DateTimeNullableFilter<"Atividade"> | Date | string | null
    nota?: IntNullableFilter<"Atividade"> | number | null
    peso?: FloatFilter<"Atividade"> | number
    parcial?: FloatNullableFilter<"Atividade"> | number | null
    aluno?: XOR<AlunoScalarRelationFilter, AlunoWhereInput>
  }, "id">

  export type AtividadeOrderByWithAggregationInput = {
    id?: SortOrder
    nome?: SortOrder
    alunoRa?: SortOrder
    dataInicio?: SortOrder
    dataEntrega?: SortOrderInput | SortOrder
    nota?: SortOrderInput | SortOrder
    peso?: SortOrder
    parcial?: SortOrderInput | SortOrder
    _count?: AtividadeCountOrderByAggregateInput
    _avg?: AtividadeAvgOrderByAggregateInput
    _max?: AtividadeMaxOrderByAggregateInput
    _min?: AtividadeMinOrderByAggregateInput
    _sum?: AtividadeSumOrderByAggregateInput
  }

  export type AtividadeScalarWhereWithAggregatesInput = {
    AND?: AtividadeScalarWhereWithAggregatesInput | AtividadeScalarWhereWithAggregatesInput[]
    OR?: AtividadeScalarWhereWithAggregatesInput[]
    NOT?: AtividadeScalarWhereWithAggregatesInput | AtividadeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Atividade"> | number
    nome?: StringWithAggregatesFilter<"Atividade"> | string
    alunoRa?: StringWithAggregatesFilter<"Atividade"> | string
    dataInicio?: DateTimeWithAggregatesFilter<"Atividade"> | Date | string
    dataEntrega?: DateTimeNullableWithAggregatesFilter<"Atividade"> | Date | string | null
    nota?: IntNullableWithAggregatesFilter<"Atividade"> | number | null
    peso?: FloatWithAggregatesFilter<"Atividade"> | number
    parcial?: FloatNullableWithAggregatesFilter<"Atividade"> | number | null
  }

  export type AlunoCreateInput = {
    ra?: string
    nome: string
    email: string
    telefones?: TelefoneCreateNestedManyWithoutAlunoInput
    atividades?: AtividadeCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateInput = {
    ra?: string
    nome: string
    email: string
    telefones?: TelefoneUncheckedCreateNestedManyWithoutAlunoInput
    atividades?: AtividadeUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUpdateInput = {
    ra?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefones?: TelefoneUpdateManyWithoutAlunoNestedInput
    atividades?: AtividadeUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateInput = {
    ra?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefones?: TelefoneUncheckedUpdateManyWithoutAlunoNestedInput
    atividades?: AtividadeUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateManyInput = {
    ra?: string
    nome: string
    email: string
  }

  export type AlunoUpdateManyMutationInput = {
    ra?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AlunoUncheckedUpdateManyInput = {
    ra?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type TelefoneCreateInput = {
    numero: string
    tipo: string
    aluno: AlunoCreateNestedOneWithoutTelefonesInput
  }

  export type TelefoneUncheckedCreateInput = {
    id?: number
    alunoRa: string
    numero: string
    tipo: string
  }

  export type TelefoneUpdateInput = {
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    aluno?: AlunoUpdateOneRequiredWithoutTelefonesNestedInput
  }

  export type TelefoneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoRa?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type TelefoneCreateManyInput = {
    id?: number
    alunoRa: string
    numero: string
    tipo: string
  }

  export type TelefoneUpdateManyMutationInput = {
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type TelefoneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    alunoRa?: StringFieldUpdateOperationsInput | string
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeCreateInput = {
    nome: string
    dataInicio: Date | string
    dataEntrega?: Date | string | null
    nota?: number | null
    peso: number
    parcial?: number | null
    aluno: AlunoCreateNestedOneWithoutAtividadesInput
  }

  export type AtividadeUncheckedCreateInput = {
    id?: number
    nome: string
    alunoRa: string
    dataInicio: Date | string
    dataEntrega?: Date | string | null
    nota?: number | null
    peso: number
    parcial?: number | null
  }

  export type AtividadeUpdateInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    peso?: FloatFieldUpdateOperationsInput | number
    parcial?: NullableFloatFieldUpdateOperationsInput | number | null
    aluno?: AlunoUpdateOneRequiredWithoutAtividadesNestedInput
  }

  export type AtividadeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    alunoRa?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    peso?: FloatFieldUpdateOperationsInput | number
    parcial?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AtividadeCreateManyInput = {
    id?: number
    nome: string
    alunoRa: string
    dataInicio: Date | string
    dataEntrega?: Date | string | null
    nota?: number | null
    peso: number
    parcial?: number | null
  }

  export type AtividadeUpdateManyMutationInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    peso?: FloatFieldUpdateOperationsInput | number
    parcial?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AtividadeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    alunoRa?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    peso?: FloatFieldUpdateOperationsInput | number
    parcial?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type TelefoneListRelationFilter = {
    every?: TelefoneWhereInput
    some?: TelefoneWhereInput
    none?: TelefoneWhereInput
  }

  export type AtividadeListRelationFilter = {
    every?: AtividadeWhereInput
    some?: AtividadeWhereInput
    none?: AtividadeWhereInput
  }

  export type TelefoneOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AtividadeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlunoOrderByRelevanceInput = {
    fields: AlunoOrderByRelevanceFieldEnum | AlunoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AlunoCountOrderByAggregateInput = {
    ra?: SortOrder
    nome?: SortOrder
    email?: SortOrder
  }

  export type AlunoMaxOrderByAggregateInput = {
    ra?: SortOrder
    nome?: SortOrder
    email?: SortOrder
  }

  export type AlunoMinOrderByAggregateInput = {
    ra?: SortOrder
    nome?: SortOrder
    email?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type AlunoScalarRelationFilter = {
    is?: AlunoWhereInput
    isNot?: AlunoWhereInput
  }

  export type TelefoneOrderByRelevanceInput = {
    fields: TelefoneOrderByRelevanceFieldEnum | TelefoneOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type TelefoneCountOrderByAggregateInput = {
    id?: SortOrder
    alunoRa?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
  }

  export type TelefoneAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TelefoneMaxOrderByAggregateInput = {
    id?: SortOrder
    alunoRa?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
  }

  export type TelefoneMinOrderByAggregateInput = {
    id?: SortOrder
    alunoRa?: SortOrder
    numero?: SortOrder
    tipo?: SortOrder
  }

  export type TelefoneSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AtividadeOrderByRelevanceInput = {
    fields: AtividadeOrderByRelevanceFieldEnum | AtividadeOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type AtividadeCountOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    alunoRa?: SortOrder
    dataInicio?: SortOrder
    dataEntrega?: SortOrder
    nota?: SortOrder
    peso?: SortOrder
    parcial?: SortOrder
  }

  export type AtividadeAvgOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    peso?: SortOrder
    parcial?: SortOrder
  }

  export type AtividadeMaxOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    alunoRa?: SortOrder
    dataInicio?: SortOrder
    dataEntrega?: SortOrder
    nota?: SortOrder
    peso?: SortOrder
    parcial?: SortOrder
  }

  export type AtividadeMinOrderByAggregateInput = {
    id?: SortOrder
    nome?: SortOrder
    alunoRa?: SortOrder
    dataInicio?: SortOrder
    dataEntrega?: SortOrder
    nota?: SortOrder
    peso?: SortOrder
    parcial?: SortOrder
  }

  export type AtividadeSumOrderByAggregateInput = {
    id?: SortOrder
    nota?: SortOrder
    peso?: SortOrder
    parcial?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TelefoneCreateNestedManyWithoutAlunoInput = {
    create?: XOR<TelefoneCreateWithoutAlunoInput, TelefoneUncheckedCreateWithoutAlunoInput> | TelefoneCreateWithoutAlunoInput[] | TelefoneUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: TelefoneCreateOrConnectWithoutAlunoInput | TelefoneCreateOrConnectWithoutAlunoInput[]
    createMany?: TelefoneCreateManyAlunoInputEnvelope
    connect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
  }

  export type AtividadeCreateNestedManyWithoutAlunoInput = {
    create?: XOR<AtividadeCreateWithoutAlunoInput, AtividadeUncheckedCreateWithoutAlunoInput> | AtividadeCreateWithoutAlunoInput[] | AtividadeUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutAlunoInput | AtividadeCreateOrConnectWithoutAlunoInput[]
    createMany?: AtividadeCreateManyAlunoInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type TelefoneUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<TelefoneCreateWithoutAlunoInput, TelefoneUncheckedCreateWithoutAlunoInput> | TelefoneCreateWithoutAlunoInput[] | TelefoneUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: TelefoneCreateOrConnectWithoutAlunoInput | TelefoneCreateOrConnectWithoutAlunoInput[]
    createMany?: TelefoneCreateManyAlunoInputEnvelope
    connect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
  }

  export type AtividadeUncheckedCreateNestedManyWithoutAlunoInput = {
    create?: XOR<AtividadeCreateWithoutAlunoInput, AtividadeUncheckedCreateWithoutAlunoInput> | AtividadeCreateWithoutAlunoInput[] | AtividadeUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutAlunoInput | AtividadeCreateOrConnectWithoutAlunoInput[]
    createMany?: AtividadeCreateManyAlunoInputEnvelope
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type TelefoneUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<TelefoneCreateWithoutAlunoInput, TelefoneUncheckedCreateWithoutAlunoInput> | TelefoneCreateWithoutAlunoInput[] | TelefoneUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: TelefoneCreateOrConnectWithoutAlunoInput | TelefoneCreateOrConnectWithoutAlunoInput[]
    upsert?: TelefoneUpsertWithWhereUniqueWithoutAlunoInput | TelefoneUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: TelefoneCreateManyAlunoInputEnvelope
    set?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    disconnect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    delete?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    connect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    update?: TelefoneUpdateWithWhereUniqueWithoutAlunoInput | TelefoneUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: TelefoneUpdateManyWithWhereWithoutAlunoInput | TelefoneUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: TelefoneScalarWhereInput | TelefoneScalarWhereInput[]
  }

  export type AtividadeUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<AtividadeCreateWithoutAlunoInput, AtividadeUncheckedCreateWithoutAlunoInput> | AtividadeCreateWithoutAlunoInput[] | AtividadeUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutAlunoInput | AtividadeCreateOrConnectWithoutAlunoInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutAlunoInput | AtividadeUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: AtividadeCreateManyAlunoInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutAlunoInput | AtividadeUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutAlunoInput | AtividadeUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type TelefoneUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<TelefoneCreateWithoutAlunoInput, TelefoneUncheckedCreateWithoutAlunoInput> | TelefoneCreateWithoutAlunoInput[] | TelefoneUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: TelefoneCreateOrConnectWithoutAlunoInput | TelefoneCreateOrConnectWithoutAlunoInput[]
    upsert?: TelefoneUpsertWithWhereUniqueWithoutAlunoInput | TelefoneUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: TelefoneCreateManyAlunoInputEnvelope
    set?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    disconnect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    delete?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    connect?: TelefoneWhereUniqueInput | TelefoneWhereUniqueInput[]
    update?: TelefoneUpdateWithWhereUniqueWithoutAlunoInput | TelefoneUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: TelefoneUpdateManyWithWhereWithoutAlunoInput | TelefoneUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: TelefoneScalarWhereInput | TelefoneScalarWhereInput[]
  }

  export type AtividadeUncheckedUpdateManyWithoutAlunoNestedInput = {
    create?: XOR<AtividadeCreateWithoutAlunoInput, AtividadeUncheckedCreateWithoutAlunoInput> | AtividadeCreateWithoutAlunoInput[] | AtividadeUncheckedCreateWithoutAlunoInput[]
    connectOrCreate?: AtividadeCreateOrConnectWithoutAlunoInput | AtividadeCreateOrConnectWithoutAlunoInput[]
    upsert?: AtividadeUpsertWithWhereUniqueWithoutAlunoInput | AtividadeUpsertWithWhereUniqueWithoutAlunoInput[]
    createMany?: AtividadeCreateManyAlunoInputEnvelope
    set?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    disconnect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    delete?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    connect?: AtividadeWhereUniqueInput | AtividadeWhereUniqueInput[]
    update?: AtividadeUpdateWithWhereUniqueWithoutAlunoInput | AtividadeUpdateWithWhereUniqueWithoutAlunoInput[]
    updateMany?: AtividadeUpdateManyWithWhereWithoutAlunoInput | AtividadeUpdateManyWithWhereWithoutAlunoInput[]
    deleteMany?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
  }

  export type AlunoCreateNestedOneWithoutTelefonesInput = {
    create?: XOR<AlunoCreateWithoutTelefonesInput, AlunoUncheckedCreateWithoutTelefonesInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutTelefonesInput
    connect?: AlunoWhereUniqueInput
  }

  export type AlunoUpdateOneRequiredWithoutTelefonesNestedInput = {
    create?: XOR<AlunoCreateWithoutTelefonesInput, AlunoUncheckedCreateWithoutTelefonesInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutTelefonesInput
    upsert?: AlunoUpsertWithoutTelefonesInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutTelefonesInput, AlunoUpdateWithoutTelefonesInput>, AlunoUncheckedUpdateWithoutTelefonesInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AlunoCreateNestedOneWithoutAtividadesInput = {
    create?: XOR<AlunoCreateWithoutAtividadesInput, AlunoUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutAtividadesInput
    connect?: AlunoWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AlunoUpdateOneRequiredWithoutAtividadesNestedInput = {
    create?: XOR<AlunoCreateWithoutAtividadesInput, AlunoUncheckedCreateWithoutAtividadesInput>
    connectOrCreate?: AlunoCreateOrConnectWithoutAtividadesInput
    upsert?: AlunoUpsertWithoutAtividadesInput
    connect?: AlunoWhereUniqueInput
    update?: XOR<XOR<AlunoUpdateToOneWithWhereWithoutAtividadesInput, AlunoUpdateWithoutAtividadesInput>, AlunoUncheckedUpdateWithoutAtividadesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
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

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type TelefoneCreateWithoutAlunoInput = {
    numero: string
    tipo: string
  }

  export type TelefoneUncheckedCreateWithoutAlunoInput = {
    id?: number
    numero: string
    tipo: string
  }

  export type TelefoneCreateOrConnectWithoutAlunoInput = {
    where: TelefoneWhereUniqueInput
    create: XOR<TelefoneCreateWithoutAlunoInput, TelefoneUncheckedCreateWithoutAlunoInput>
  }

  export type TelefoneCreateManyAlunoInputEnvelope = {
    data: TelefoneCreateManyAlunoInput | TelefoneCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type AtividadeCreateWithoutAlunoInput = {
    nome: string
    dataInicio: Date | string
    dataEntrega?: Date | string | null
    nota?: number | null
    peso: number
    parcial?: number | null
  }

  export type AtividadeUncheckedCreateWithoutAlunoInput = {
    id?: number
    nome: string
    dataInicio: Date | string
    dataEntrega?: Date | string | null
    nota?: number | null
    peso: number
    parcial?: number | null
  }

  export type AtividadeCreateOrConnectWithoutAlunoInput = {
    where: AtividadeWhereUniqueInput
    create: XOR<AtividadeCreateWithoutAlunoInput, AtividadeUncheckedCreateWithoutAlunoInput>
  }

  export type AtividadeCreateManyAlunoInputEnvelope = {
    data: AtividadeCreateManyAlunoInput | AtividadeCreateManyAlunoInput[]
    skipDuplicates?: boolean
  }

  export type TelefoneUpsertWithWhereUniqueWithoutAlunoInput = {
    where: TelefoneWhereUniqueInput
    update: XOR<TelefoneUpdateWithoutAlunoInput, TelefoneUncheckedUpdateWithoutAlunoInput>
    create: XOR<TelefoneCreateWithoutAlunoInput, TelefoneUncheckedCreateWithoutAlunoInput>
  }

  export type TelefoneUpdateWithWhereUniqueWithoutAlunoInput = {
    where: TelefoneWhereUniqueInput
    data: XOR<TelefoneUpdateWithoutAlunoInput, TelefoneUncheckedUpdateWithoutAlunoInput>
  }

  export type TelefoneUpdateManyWithWhereWithoutAlunoInput = {
    where: TelefoneScalarWhereInput
    data: XOR<TelefoneUpdateManyMutationInput, TelefoneUncheckedUpdateManyWithoutAlunoInput>
  }

  export type TelefoneScalarWhereInput = {
    AND?: TelefoneScalarWhereInput | TelefoneScalarWhereInput[]
    OR?: TelefoneScalarWhereInput[]
    NOT?: TelefoneScalarWhereInput | TelefoneScalarWhereInput[]
    id?: IntFilter<"Telefone"> | number
    alunoRa?: StringFilter<"Telefone"> | string
    numero?: StringFilter<"Telefone"> | string
    tipo?: StringFilter<"Telefone"> | string
  }

  export type AtividadeUpsertWithWhereUniqueWithoutAlunoInput = {
    where: AtividadeWhereUniqueInput
    update: XOR<AtividadeUpdateWithoutAlunoInput, AtividadeUncheckedUpdateWithoutAlunoInput>
    create: XOR<AtividadeCreateWithoutAlunoInput, AtividadeUncheckedCreateWithoutAlunoInput>
  }

  export type AtividadeUpdateWithWhereUniqueWithoutAlunoInput = {
    where: AtividadeWhereUniqueInput
    data: XOR<AtividadeUpdateWithoutAlunoInput, AtividadeUncheckedUpdateWithoutAlunoInput>
  }

  export type AtividadeUpdateManyWithWhereWithoutAlunoInput = {
    where: AtividadeScalarWhereInput
    data: XOR<AtividadeUpdateManyMutationInput, AtividadeUncheckedUpdateManyWithoutAlunoInput>
  }

  export type AtividadeScalarWhereInput = {
    AND?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
    OR?: AtividadeScalarWhereInput[]
    NOT?: AtividadeScalarWhereInput | AtividadeScalarWhereInput[]
    id?: IntFilter<"Atividade"> | number
    nome?: StringFilter<"Atividade"> | string
    alunoRa?: StringFilter<"Atividade"> | string
    dataInicio?: DateTimeFilter<"Atividade"> | Date | string
    dataEntrega?: DateTimeNullableFilter<"Atividade"> | Date | string | null
    nota?: IntNullableFilter<"Atividade"> | number | null
    peso?: FloatFilter<"Atividade"> | number
    parcial?: FloatNullableFilter<"Atividade"> | number | null
  }

  export type AlunoCreateWithoutTelefonesInput = {
    ra?: string
    nome: string
    email: string
    atividades?: AtividadeCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutTelefonesInput = {
    ra?: string
    nome: string
    email: string
    atividades?: AtividadeUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutTelefonesInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutTelefonesInput, AlunoUncheckedCreateWithoutTelefonesInput>
  }

  export type AlunoUpsertWithoutTelefonesInput = {
    update: XOR<AlunoUpdateWithoutTelefonesInput, AlunoUncheckedUpdateWithoutTelefonesInput>
    create: XOR<AlunoCreateWithoutTelefonesInput, AlunoUncheckedCreateWithoutTelefonesInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutTelefonesInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutTelefonesInput, AlunoUncheckedUpdateWithoutTelefonesInput>
  }

  export type AlunoUpdateWithoutTelefonesInput = {
    ra?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    atividades?: AtividadeUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutTelefonesInput = {
    ra?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    atividades?: AtividadeUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoCreateWithoutAtividadesInput = {
    ra?: string
    nome: string
    email: string
    telefones?: TelefoneCreateNestedManyWithoutAlunoInput
  }

  export type AlunoUncheckedCreateWithoutAtividadesInput = {
    ra?: string
    nome: string
    email: string
    telefones?: TelefoneUncheckedCreateNestedManyWithoutAlunoInput
  }

  export type AlunoCreateOrConnectWithoutAtividadesInput = {
    where: AlunoWhereUniqueInput
    create: XOR<AlunoCreateWithoutAtividadesInput, AlunoUncheckedCreateWithoutAtividadesInput>
  }

  export type AlunoUpsertWithoutAtividadesInput = {
    update: XOR<AlunoUpdateWithoutAtividadesInput, AlunoUncheckedUpdateWithoutAtividadesInput>
    create: XOR<AlunoCreateWithoutAtividadesInput, AlunoUncheckedCreateWithoutAtividadesInput>
    where?: AlunoWhereInput
  }

  export type AlunoUpdateToOneWithWhereWithoutAtividadesInput = {
    where?: AlunoWhereInput
    data: XOR<AlunoUpdateWithoutAtividadesInput, AlunoUncheckedUpdateWithoutAtividadesInput>
  }

  export type AlunoUpdateWithoutAtividadesInput = {
    ra?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefones?: TelefoneUpdateManyWithoutAlunoNestedInput
  }

  export type AlunoUncheckedUpdateWithoutAtividadesInput = {
    ra?: StringFieldUpdateOperationsInput | string
    nome?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    telefones?: TelefoneUncheckedUpdateManyWithoutAlunoNestedInput
  }

  export type TelefoneCreateManyAlunoInput = {
    id?: number
    numero: string
    tipo: string
  }

  export type AtividadeCreateManyAlunoInput = {
    id?: number
    nome: string
    dataInicio: Date | string
    dataEntrega?: Date | string | null
    nota?: number | null
    peso: number
    parcial?: number | null
  }

  export type TelefoneUpdateWithoutAlunoInput = {
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type TelefoneUncheckedUpdateWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type TelefoneUncheckedUpdateManyWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    numero?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
  }

  export type AtividadeUpdateWithoutAlunoInput = {
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    peso?: FloatFieldUpdateOperationsInput | number
    parcial?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AtividadeUncheckedUpdateWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    peso?: FloatFieldUpdateOperationsInput | number
    parcial?: NullableFloatFieldUpdateOperationsInput | number | null
  }

  export type AtividadeUncheckedUpdateManyWithoutAlunoInput = {
    id?: IntFieldUpdateOperationsInput | number
    nome?: StringFieldUpdateOperationsInput | string
    dataInicio?: DateTimeFieldUpdateOperationsInput | Date | string
    dataEntrega?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    nota?: NullableIntFieldUpdateOperationsInput | number | null
    peso?: FloatFieldUpdateOperationsInput | number
    parcial?: NullableFloatFieldUpdateOperationsInput | number | null
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