
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model GearItem
 * 
 */
export type GearItem = $Result.DefaultSelection<Prisma.$GearItemPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model RentalOrder
 * 
 */
export type RentalOrder = $Result.DefaultSelection<Prisma.$RentalOrderPayload>
/**
 * Model RentalOrderItem
 * 
 */
export type RentalOrderItem = $Result.DefaultSelection<Prisma.$RentalOrderItemPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  CUSTOMER: 'CUSTOMER',
  PROVIDER: 'PROVIDER',
  ADMIN: 'ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]


export const UserStatus: {
  ACTIVE: 'ACTIVE',
  SUSPENDED: 'SUSPENDED'
};

export type UserStatus = (typeof UserStatus)[keyof typeof UserStatus]


export const RentalStatus: {
  PLACED: 'PLACED',
  CONFIRMED: 'CONFIRMED',
  PAID: 'PAID',
  PICKED_UP: 'PICKED_UP',
  RETURNED: 'RETURNED',
  CANCELLED: 'CANCELLED'
};

export type RentalStatus = (typeof RentalStatus)[keyof typeof RentalStatus]


export const PaymentStatus: {
  PENDING: 'PENDING',
  COMPLETED: 'COMPLETED',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]


export const PaymentMethod: {
  STRIPE: 'STRIPE'
};

export type PaymentMethod = (typeof PaymentMethod)[keyof typeof PaymentMethod]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type UserStatus = $Enums.UserStatus

export const UserStatus: typeof $Enums.UserStatus

export type RentalStatus = $Enums.RentalStatus

export const RentalStatus: typeof $Enums.RentalStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

export type PaymentMethod = $Enums.PaymentMethod

export const PaymentMethod: typeof $Enums.PaymentMethod

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Categories
 * const categories = await prisma.category.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Categories
   * const categories = await prisma.category.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.gearItem`: Exposes CRUD operations for the **GearItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more GearItems
    * const gearItems = await prisma.gearItem.findMany()
    * ```
    */
  get gearItem(): Prisma.GearItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentalOrder`: Exposes CRUD operations for the **RentalOrder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentalOrders
    * const rentalOrders = await prisma.rentalOrder.findMany()
    * ```
    */
  get rentalOrder(): Prisma.RentalOrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rentalOrderItem`: Exposes CRUD operations for the **RentalOrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RentalOrderItems
    * const rentalOrderItems = await prisma.rentalOrderItem.findMany()
    * ```
    */
  get rentalOrderItem(): Prisma.RentalOrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Category: 'Category',
    GearItem: 'GearItem',
    Payment: 'Payment',
    RentalOrder: 'RentalOrder',
    RentalOrderItem: 'RentalOrderItem',
    Review: 'Review',
    User: 'User'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "category" | "gearItem" | "payment" | "rentalOrder" | "rentalOrderItem" | "review" | "user"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      GearItem: {
        payload: Prisma.$GearItemPayload<ExtArgs>
        fields: Prisma.GearItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GearItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GearItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GearItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GearItemPayload>
          }
          findFirst: {
            args: Prisma.GearItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GearItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GearItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GearItemPayload>
          }
          findMany: {
            args: Prisma.GearItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GearItemPayload>[]
          }
          create: {
            args: Prisma.GearItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GearItemPayload>
          }
          createMany: {
            args: Prisma.GearItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.GearItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GearItemPayload>[]
          }
          delete: {
            args: Prisma.GearItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GearItemPayload>
          }
          update: {
            args: Prisma.GearItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GearItemPayload>
          }
          deleteMany: {
            args: Prisma.GearItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.GearItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.GearItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GearItemPayload>[]
          }
          upsert: {
            args: Prisma.GearItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$GearItemPayload>
          }
          aggregate: {
            args: Prisma.GearItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateGearItem>
          }
          groupBy: {
            args: Prisma.GearItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<GearItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.GearItemCountArgs<ExtArgs>
            result: $Utils.Optional<GearItemCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      RentalOrder: {
        payload: Prisma.$RentalOrderPayload<ExtArgs>
        fields: Prisma.RentalOrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalOrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalOrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderPayload>
          }
          findFirst: {
            args: Prisma.RentalOrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalOrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderPayload>
          }
          findMany: {
            args: Prisma.RentalOrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderPayload>[]
          }
          create: {
            args: Prisma.RentalOrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderPayload>
          }
          createMany: {
            args: Prisma.RentalOrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalOrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderPayload>[]
          }
          delete: {
            args: Prisma.RentalOrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderPayload>
          }
          update: {
            args: Prisma.RentalOrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderPayload>
          }
          deleteMany: {
            args: Prisma.RentalOrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalOrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RentalOrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderPayload>[]
          }
          upsert: {
            args: Prisma.RentalOrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderPayload>
          }
          aggregate: {
            args: Prisma.RentalOrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentalOrder>
          }
          groupBy: {
            args: Prisma.RentalOrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalOrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalOrderCountArgs<ExtArgs>
            result: $Utils.Optional<RentalOrderCountAggregateOutputType> | number
          }
        }
      }
      RentalOrderItem: {
        payload: Prisma.$RentalOrderItemPayload<ExtArgs>
        fields: Prisma.RentalOrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RentalOrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RentalOrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>
          }
          findFirst: {
            args: Prisma.RentalOrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RentalOrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>
          }
          findMany: {
            args: Prisma.RentalOrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>[]
          }
          create: {
            args: Prisma.RentalOrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>
          }
          createMany: {
            args: Prisma.RentalOrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RentalOrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>[]
          }
          delete: {
            args: Prisma.RentalOrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>
          }
          update: {
            args: Prisma.RentalOrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>
          }
          deleteMany: {
            args: Prisma.RentalOrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RentalOrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RentalOrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>[]
          }
          upsert: {
            args: Prisma.RentalOrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RentalOrderItemPayload>
          }
          aggregate: {
            args: Prisma.RentalOrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRentalOrderItem>
          }
          groupBy: {
            args: Prisma.RentalOrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<RentalOrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.RentalOrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<RentalOrderItemCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
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
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    category?: CategoryOmit
    gearItem?: GearItemOmit
    payment?: PaymentOmit
    rentalOrder?: RentalOrderOmit
    rentalOrderItem?: RentalOrderItemOmit
    review?: ReviewOmit
    user?: UserOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    gearItems: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gearItems?: boolean | CategoryCountOutputTypeCountGearItemsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountGearItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GearItemWhereInput
  }


  /**
   * Count Type GearItemCountOutputType
   */

  export type GearItemCountOutputType = {
    rentalOrderItems: number
    reviews: number
  }

  export type GearItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentalOrderItems?: boolean | GearItemCountOutputTypeCountRentalOrderItemsArgs
    reviews?: boolean | GearItemCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * GearItemCountOutputType without action
   */
  export type GearItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearItemCountOutputType
     */
    select?: GearItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * GearItemCountOutputType without action
   */
  export type GearItemCountOutputTypeCountRentalOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalOrderItemWhereInput
  }

  /**
   * GearItemCountOutputType without action
   */
  export type GearItemCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type RentalOrderCountOutputType
   */

  export type RentalOrderCountOutputType = {
    items: number
    payments: number
  }

  export type RentalOrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | RentalOrderCountOutputTypeCountItemsArgs
    payments?: boolean | RentalOrderCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * RentalOrderCountOutputType without action
   */
  export type RentalOrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderCountOutputType
     */
    select?: RentalOrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RentalOrderCountOutputType without action
   */
  export type RentalOrderCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalOrderItemWhereInput
  }

  /**
   * RentalOrderCountOutputType without action
   */
  export type RentalOrderCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    gearItems: number
    rentalOrders: number
    reviews: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gearItems?: boolean | UserCountOutputTypeCountGearItemsArgs
    rentalOrders?: boolean | UserCountOutputTypeCountRentalOrdersArgs
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountGearItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GearItemWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRentalOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalOrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    description: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    description: string | null
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    gearItems?: boolean | Category$gearItemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gearItems?: boolean | Category$gearItemsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      gearItems: Prisma.$GearItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gearItems<T extends Category$gearItemsArgs<ExtArgs> = {}>(args?: Subset<T, Category$gearItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.gearItems
   */
  export type Category$gearItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearItem
     */
    select?: GearItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GearItem
     */
    omit?: GearItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GearItemInclude<ExtArgs> | null
    where?: GearItemWhereInput
    orderBy?: GearItemOrderByWithRelationInput | GearItemOrderByWithRelationInput[]
    cursor?: GearItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GearItemScalarFieldEnum | GearItemScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model GearItem
   */

  export type AggregateGearItem = {
    _count: GearItemCountAggregateOutputType | null
    _avg: GearItemAvgAggregateOutputType | null
    _sum: GearItemSumAggregateOutputType | null
    _min: GearItemMinAggregateOutputType | null
    _max: GearItemMaxAggregateOutputType | null
  }

  export type GearItemAvgAggregateOutputType = {
    price: Decimal | null
    stockQuantity: number | null
  }

  export type GearItemSumAggregateOutputType = {
    price: Decimal | null
    stockQuantity: number | null
  }

  export type GearItemMinAggregateOutputType = {
    id: string | null
    providerId: string | null
    categoryId: string | null
    name: string | null
    description: string | null
    brand: string | null
    price: Decimal | null
    stockQuantity: number | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GearItemMaxAggregateOutputType = {
    id: string | null
    providerId: string | null
    categoryId: string | null
    name: string | null
    description: string | null
    brand: string | null
    price: Decimal | null
    stockQuantity: number | null
    isAvailable: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type GearItemCountAggregateOutputType = {
    id: number
    providerId: number
    categoryId: number
    name: number
    description: number
    brand: number
    price: number
    stockQuantity: number
    isAvailable: number
    images: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type GearItemAvgAggregateInputType = {
    price?: true
    stockQuantity?: true
  }

  export type GearItemSumAggregateInputType = {
    price?: true
    stockQuantity?: true
  }

  export type GearItemMinAggregateInputType = {
    id?: true
    providerId?: true
    categoryId?: true
    name?: true
    description?: true
    brand?: true
    price?: true
    stockQuantity?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GearItemMaxAggregateInputType = {
    id?: true
    providerId?: true
    categoryId?: true
    name?: true
    description?: true
    brand?: true
    price?: true
    stockQuantity?: true
    isAvailable?: true
    createdAt?: true
    updatedAt?: true
  }

  export type GearItemCountAggregateInputType = {
    id?: true
    providerId?: true
    categoryId?: true
    name?: true
    description?: true
    brand?: true
    price?: true
    stockQuantity?: true
    isAvailable?: true
    images?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type GearItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GearItem to aggregate.
     */
    where?: GearItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GearItems to fetch.
     */
    orderBy?: GearItemOrderByWithRelationInput | GearItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GearItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GearItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GearItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned GearItems
    **/
    _count?: true | GearItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GearItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GearItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GearItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GearItemMaxAggregateInputType
  }

  export type GetGearItemAggregateType<T extends GearItemAggregateArgs> = {
        [P in keyof T & keyof AggregateGearItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGearItem[P]>
      : GetScalarType<T[P], AggregateGearItem[P]>
  }




  export type GearItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GearItemWhereInput
    orderBy?: GearItemOrderByWithAggregationInput | GearItemOrderByWithAggregationInput[]
    by: GearItemScalarFieldEnum[] | GearItemScalarFieldEnum
    having?: GearItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GearItemCountAggregateInputType | true
    _avg?: GearItemAvgAggregateInputType
    _sum?: GearItemSumAggregateInputType
    _min?: GearItemMinAggregateInputType
    _max?: GearItemMaxAggregateInputType
  }

  export type GearItemGroupByOutputType = {
    id: string
    providerId: string
    categoryId: string
    name: string
    description: string | null
    brand: string | null
    price: Decimal
    stockQuantity: number
    isAvailable: boolean
    images: string[]
    createdAt: Date
    updatedAt: Date
    _count: GearItemCountAggregateOutputType | null
    _avg: GearItemAvgAggregateOutputType | null
    _sum: GearItemSumAggregateOutputType | null
    _min: GearItemMinAggregateOutputType | null
    _max: GearItemMaxAggregateOutputType | null
  }

  type GetGearItemGroupByPayload<T extends GearItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GearItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GearItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GearItemGroupByOutputType[P]>
            : GetScalarType<T[P], GearItemGroupByOutputType[P]>
        }
      >
    >


  export type GearItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    brand?: boolean
    price?: boolean
    stockQuantity?: boolean
    isAvailable?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    rentalOrderItems?: boolean | GearItem$rentalOrderItemsArgs<ExtArgs>
    reviews?: boolean | GearItem$reviewsArgs<ExtArgs>
    _count?: boolean | GearItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gearItem"]>

  export type GearItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    brand?: boolean
    price?: boolean
    stockQuantity?: boolean
    isAvailable?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gearItem"]>

  export type GearItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    providerId?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    brand?: boolean
    price?: boolean
    stockQuantity?: boolean
    isAvailable?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    provider?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["gearItem"]>

  export type GearItemSelectScalar = {
    id?: boolean
    providerId?: boolean
    categoryId?: boolean
    name?: boolean
    description?: boolean
    brand?: boolean
    price?: boolean
    stockQuantity?: boolean
    isAvailable?: boolean
    images?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type GearItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "providerId" | "categoryId" | "name" | "description" | "brand" | "price" | "stockQuantity" | "isAvailable" | "images" | "createdAt" | "updatedAt", ExtArgs["result"]["gearItem"]>
  export type GearItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    rentalOrderItems?: boolean | GearItem$rentalOrderItemsArgs<ExtArgs>
    reviews?: boolean | GearItem$reviewsArgs<ExtArgs>
    _count?: boolean | GearItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type GearItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type GearItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | UserDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $GearItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "GearItem"
    objects: {
      provider: Prisma.$UserPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      rentalOrderItems: Prisma.$RentalOrderItemPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      providerId: string
      categoryId: string
      name: string
      description: string | null
      brand: string | null
      price: Prisma.Decimal
      stockQuantity: number
      isAvailable: boolean
      images: string[]
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["gearItem"]>
    composites: {}
  }

  type GearItemGetPayload<S extends boolean | null | undefined | GearItemDefaultArgs> = $Result.GetResult<Prisma.$GearItemPayload, S>

  type GearItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<GearItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: GearItemCountAggregateInputType | true
    }

  export interface GearItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['GearItem'], meta: { name: 'GearItem' } }
    /**
     * Find zero or one GearItem that matches the filter.
     * @param {GearItemFindUniqueArgs} args - Arguments to find a GearItem
     * @example
     * // Get one GearItem
     * const gearItem = await prisma.gearItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends GearItemFindUniqueArgs>(args: SelectSubset<T, GearItemFindUniqueArgs<ExtArgs>>): Prisma__GearItemClient<$Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one GearItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {GearItemFindUniqueOrThrowArgs} args - Arguments to find a GearItem
     * @example
     * // Get one GearItem
     * const gearItem = await prisma.gearItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends GearItemFindUniqueOrThrowArgs>(args: SelectSubset<T, GearItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__GearItemClient<$Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GearItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearItemFindFirstArgs} args - Arguments to find a GearItem
     * @example
     * // Get one GearItem
     * const gearItem = await prisma.gearItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends GearItemFindFirstArgs>(args?: SelectSubset<T, GearItemFindFirstArgs<ExtArgs>>): Prisma__GearItemClient<$Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first GearItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearItemFindFirstOrThrowArgs} args - Arguments to find a GearItem
     * @example
     * // Get one GearItem
     * const gearItem = await prisma.gearItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends GearItemFindFirstOrThrowArgs>(args?: SelectSubset<T, GearItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__GearItemClient<$Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more GearItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all GearItems
     * const gearItems = await prisma.gearItem.findMany()
     * 
     * // Get first 10 GearItems
     * const gearItems = await prisma.gearItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const gearItemWithIdOnly = await prisma.gearItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends GearItemFindManyArgs>(args?: SelectSubset<T, GearItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a GearItem.
     * @param {GearItemCreateArgs} args - Arguments to create a GearItem.
     * @example
     * // Create one GearItem
     * const GearItem = await prisma.gearItem.create({
     *   data: {
     *     // ... data to create a GearItem
     *   }
     * })
     * 
     */
    create<T extends GearItemCreateArgs>(args: SelectSubset<T, GearItemCreateArgs<ExtArgs>>): Prisma__GearItemClient<$Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many GearItems.
     * @param {GearItemCreateManyArgs} args - Arguments to create many GearItems.
     * @example
     * // Create many GearItems
     * const gearItem = await prisma.gearItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends GearItemCreateManyArgs>(args?: SelectSubset<T, GearItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many GearItems and returns the data saved in the database.
     * @param {GearItemCreateManyAndReturnArgs} args - Arguments to create many GearItems.
     * @example
     * // Create many GearItems
     * const gearItem = await prisma.gearItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many GearItems and only return the `id`
     * const gearItemWithIdOnly = await prisma.gearItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends GearItemCreateManyAndReturnArgs>(args?: SelectSubset<T, GearItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a GearItem.
     * @param {GearItemDeleteArgs} args - Arguments to delete one GearItem.
     * @example
     * // Delete one GearItem
     * const GearItem = await prisma.gearItem.delete({
     *   where: {
     *     // ... filter to delete one GearItem
     *   }
     * })
     * 
     */
    delete<T extends GearItemDeleteArgs>(args: SelectSubset<T, GearItemDeleteArgs<ExtArgs>>): Prisma__GearItemClient<$Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one GearItem.
     * @param {GearItemUpdateArgs} args - Arguments to update one GearItem.
     * @example
     * // Update one GearItem
     * const gearItem = await prisma.gearItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends GearItemUpdateArgs>(args: SelectSubset<T, GearItemUpdateArgs<ExtArgs>>): Prisma__GearItemClient<$Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more GearItems.
     * @param {GearItemDeleteManyArgs} args - Arguments to filter GearItems to delete.
     * @example
     * // Delete a few GearItems
     * const { count } = await prisma.gearItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends GearItemDeleteManyArgs>(args?: SelectSubset<T, GearItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GearItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many GearItems
     * const gearItem = await prisma.gearItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends GearItemUpdateManyArgs>(args: SelectSubset<T, GearItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more GearItems and returns the data updated in the database.
     * @param {GearItemUpdateManyAndReturnArgs} args - Arguments to update many GearItems.
     * @example
     * // Update many GearItems
     * const gearItem = await prisma.gearItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more GearItems and only return the `id`
     * const gearItemWithIdOnly = await prisma.gearItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends GearItemUpdateManyAndReturnArgs>(args: SelectSubset<T, GearItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one GearItem.
     * @param {GearItemUpsertArgs} args - Arguments to update or create a GearItem.
     * @example
     * // Update or create a GearItem
     * const gearItem = await prisma.gearItem.upsert({
     *   create: {
     *     // ... data to create a GearItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the GearItem we want to update
     *   }
     * })
     */
    upsert<T extends GearItemUpsertArgs>(args: SelectSubset<T, GearItemUpsertArgs<ExtArgs>>): Prisma__GearItemClient<$Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of GearItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearItemCountArgs} args - Arguments to filter GearItems to count.
     * @example
     * // Count the number of GearItems
     * const count = await prisma.gearItem.count({
     *   where: {
     *     // ... the filter for the GearItems we want to count
     *   }
     * })
    **/
    count<T extends GearItemCountArgs>(
      args?: Subset<T, GearItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GearItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a GearItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GearItemAggregateArgs>(args: Subset<T, GearItemAggregateArgs>): Prisma.PrismaPromise<GetGearItemAggregateType<T>>

    /**
     * Group by GearItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GearItemGroupByArgs} args - Group by arguments.
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
      T extends GearItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GearItemGroupByArgs['orderBy'] }
        : { orderBy?: GearItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GearItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGearItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the GearItem model
   */
  readonly fields: GearItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for GearItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GearItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rentalOrderItems<T extends GearItem$rentalOrderItemsArgs<ExtArgs> = {}>(args?: Subset<T, GearItem$rentalOrderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends GearItem$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, GearItem$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the GearItem model
   */
  interface GearItemFieldRefs {
    readonly id: FieldRef<"GearItem", 'String'>
    readonly providerId: FieldRef<"GearItem", 'String'>
    readonly categoryId: FieldRef<"GearItem", 'String'>
    readonly name: FieldRef<"GearItem", 'String'>
    readonly description: FieldRef<"GearItem", 'String'>
    readonly brand: FieldRef<"GearItem", 'String'>
    readonly price: FieldRef<"GearItem", 'Decimal'>
    readonly stockQuantity: FieldRef<"GearItem", 'Int'>
    readonly isAvailable: FieldRef<"GearItem", 'Boolean'>
    readonly images: FieldRef<"GearItem", 'String[]'>
    readonly createdAt: FieldRef<"GearItem", 'DateTime'>
    readonly updatedAt: FieldRef<"GearItem", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * GearItem findUnique
   */
  export type GearItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearItem
     */
    select?: GearItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GearItem
     */
    omit?: GearItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GearItemInclude<ExtArgs> | null
    /**
     * Filter, which GearItem to fetch.
     */
    where: GearItemWhereUniqueInput
  }

  /**
   * GearItem findUniqueOrThrow
   */
  export type GearItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearItem
     */
    select?: GearItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GearItem
     */
    omit?: GearItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GearItemInclude<ExtArgs> | null
    /**
     * Filter, which GearItem to fetch.
     */
    where: GearItemWhereUniqueInput
  }

  /**
   * GearItem findFirst
   */
  export type GearItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearItem
     */
    select?: GearItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GearItem
     */
    omit?: GearItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GearItemInclude<ExtArgs> | null
    /**
     * Filter, which GearItem to fetch.
     */
    where?: GearItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GearItems to fetch.
     */
    orderBy?: GearItemOrderByWithRelationInput | GearItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GearItems.
     */
    cursor?: GearItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GearItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GearItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GearItems.
     */
    distinct?: GearItemScalarFieldEnum | GearItemScalarFieldEnum[]
  }

  /**
   * GearItem findFirstOrThrow
   */
  export type GearItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearItem
     */
    select?: GearItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GearItem
     */
    omit?: GearItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GearItemInclude<ExtArgs> | null
    /**
     * Filter, which GearItem to fetch.
     */
    where?: GearItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GearItems to fetch.
     */
    orderBy?: GearItemOrderByWithRelationInput | GearItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for GearItems.
     */
    cursor?: GearItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GearItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GearItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GearItems.
     */
    distinct?: GearItemScalarFieldEnum | GearItemScalarFieldEnum[]
  }

  /**
   * GearItem findMany
   */
  export type GearItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearItem
     */
    select?: GearItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GearItem
     */
    omit?: GearItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GearItemInclude<ExtArgs> | null
    /**
     * Filter, which GearItems to fetch.
     */
    where?: GearItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of GearItems to fetch.
     */
    orderBy?: GearItemOrderByWithRelationInput | GearItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing GearItems.
     */
    cursor?: GearItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` GearItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` GearItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of GearItems.
     */
    distinct?: GearItemScalarFieldEnum | GearItemScalarFieldEnum[]
  }

  /**
   * GearItem create
   */
  export type GearItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearItem
     */
    select?: GearItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GearItem
     */
    omit?: GearItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GearItemInclude<ExtArgs> | null
    /**
     * The data needed to create a GearItem.
     */
    data: XOR<GearItemCreateInput, GearItemUncheckedCreateInput>
  }

  /**
   * GearItem createMany
   */
  export type GearItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many GearItems.
     */
    data: GearItemCreateManyInput | GearItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * GearItem createManyAndReturn
   */
  export type GearItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearItem
     */
    select?: GearItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GearItem
     */
    omit?: GearItemOmit<ExtArgs> | null
    /**
     * The data used to create many GearItems.
     */
    data: GearItemCreateManyInput | GearItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GearItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * GearItem update
   */
  export type GearItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearItem
     */
    select?: GearItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GearItem
     */
    omit?: GearItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GearItemInclude<ExtArgs> | null
    /**
     * The data needed to update a GearItem.
     */
    data: XOR<GearItemUpdateInput, GearItemUncheckedUpdateInput>
    /**
     * Choose, which GearItem to update.
     */
    where: GearItemWhereUniqueInput
  }

  /**
   * GearItem updateMany
   */
  export type GearItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update GearItems.
     */
    data: XOR<GearItemUpdateManyMutationInput, GearItemUncheckedUpdateManyInput>
    /**
     * Filter which GearItems to update
     */
    where?: GearItemWhereInput
    /**
     * Limit how many GearItems to update.
     */
    limit?: number
  }

  /**
   * GearItem updateManyAndReturn
   */
  export type GearItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearItem
     */
    select?: GearItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the GearItem
     */
    omit?: GearItemOmit<ExtArgs> | null
    /**
     * The data used to update GearItems.
     */
    data: XOR<GearItemUpdateManyMutationInput, GearItemUncheckedUpdateManyInput>
    /**
     * Filter which GearItems to update
     */
    where?: GearItemWhereInput
    /**
     * Limit how many GearItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GearItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * GearItem upsert
   */
  export type GearItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearItem
     */
    select?: GearItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GearItem
     */
    omit?: GearItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GearItemInclude<ExtArgs> | null
    /**
     * The filter to search for the GearItem to update in case it exists.
     */
    where: GearItemWhereUniqueInput
    /**
     * In case the GearItem found by the `where` argument doesn't exist, create a new GearItem with this data.
     */
    create: XOR<GearItemCreateInput, GearItemUncheckedCreateInput>
    /**
     * In case the GearItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GearItemUpdateInput, GearItemUncheckedUpdateInput>
  }

  /**
   * GearItem delete
   */
  export type GearItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearItem
     */
    select?: GearItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GearItem
     */
    omit?: GearItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GearItemInclude<ExtArgs> | null
    /**
     * Filter which GearItem to delete.
     */
    where: GearItemWhereUniqueInput
  }

  /**
   * GearItem deleteMany
   */
  export type GearItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which GearItems to delete
     */
    where?: GearItemWhereInput
    /**
     * Limit how many GearItems to delete.
     */
    limit?: number
  }

  /**
   * GearItem.rentalOrderItems
   */
  export type GearItem$rentalOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: RentalOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: RentalOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderItemInclude<ExtArgs> | null
    where?: RentalOrderItemWhereInput
    orderBy?: RentalOrderItemOrderByWithRelationInput | RentalOrderItemOrderByWithRelationInput[]
    cursor?: RentalOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalOrderItemScalarFieldEnum | RentalOrderItemScalarFieldEnum[]
  }

  /**
   * GearItem.reviews
   */
  export type GearItem$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * GearItem without action
   */
  export type GearItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearItem
     */
    select?: GearItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GearItem
     */
    omit?: GearItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GearItemInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentAvgAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentSumAggregateOutputType = {
    amount: Decimal | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    transactionId: string | null
    rentalOrderId: string | null
    amount: Decimal | null
    currency: string | null
    method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    transactionId: string | null
    rentalOrderId: string | null
    amount: Decimal | null
    currency: string | null
    method: $Enums.PaymentMethod | null
    status: $Enums.PaymentStatus | null
    paidAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    transactionId: number
    rentalOrderId: number
    amount: number
    currency: number
    method: number
    status: number
    paidAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PaymentAvgAggregateInputType = {
    amount?: true
  }

  export type PaymentSumAggregateInputType = {
    amount?: true
  }

  export type PaymentMinAggregateInputType = {
    id?: true
    transactionId?: true
    rentalOrderId?: true
    amount?: true
    currency?: true
    method?: true
    status?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    transactionId?: true
    rentalOrderId?: true
    amount?: true
    currency?: true
    method?: true
    status?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    transactionId?: true
    rentalOrderId?: true
    amount?: true
    currency?: true
    method?: true
    status?: true
    paidAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PaymentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PaymentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _avg?: PaymentAvgAggregateInputType
    _sum?: PaymentSumAggregateInputType
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    transactionId: string
    rentalOrderId: string
    amount: Decimal
    currency: string
    method: $Enums.PaymentMethod
    status: $Enums.PaymentStatus
    paidAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: PaymentCountAggregateOutputType | null
    _avg: PaymentAvgAggregateOutputType | null
    _sum: PaymentSumAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    rentalOrderId?: boolean
    amount?: boolean
    currency?: boolean
    method?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    rentalOrderId?: boolean
    amount?: boolean
    currency?: boolean
    method?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    transactionId?: boolean
    rentalOrderId?: boolean
    amount?: boolean
    currency?: boolean
    method?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    transactionId?: boolean
    rentalOrderId?: boolean
    amount?: boolean
    currency?: boolean
    method?: boolean
    status?: boolean
    paidAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "transactionId" | "rentalOrderId" | "amount" | "currency" | "method" | "status" | "paidAt" | "createdAt" | "updatedAt", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      rentalOrder: Prisma.$RentalOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      transactionId: string
      rentalOrderId: string
      amount: Prisma.Decimal
      currency: string
      method: $Enums.PaymentMethod
      status: $Enums.PaymentStatus
      paidAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
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
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rentalOrder<T extends RentalOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RentalOrderDefaultArgs<ExtArgs>>): Prisma__RentalOrderClient<$Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly transactionId: FieldRef<"Payment", 'String'>
    readonly rentalOrderId: FieldRef<"Payment", 'String'>
    readonly amount: FieldRef<"Payment", 'Decimal'>
    readonly currency: FieldRef<"Payment", 'String'>
    readonly method: FieldRef<"Payment", 'PaymentMethod'>
    readonly status: FieldRef<"Payment", 'PaymentStatus'>
    readonly paidAt: FieldRef<"Payment", 'DateTime'>
    readonly createdAt: FieldRef<"Payment", 'DateTime'>
    readonly updatedAt: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model RentalOrder
   */

  export type AggregateRentalOrder = {
    _count: RentalOrderCountAggregateOutputType | null
    _avg: RentalOrderAvgAggregateOutputType | null
    _sum: RentalOrderSumAggregateOutputType | null
    _min: RentalOrderMinAggregateOutputType | null
    _max: RentalOrderMaxAggregateOutputType | null
  }

  export type RentalOrderAvgAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type RentalOrderSumAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type RentalOrderMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    startDate: Date | null
    endDate: Date | null
    totalAmount: Decimal | null
    status: $Enums.RentalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalOrderMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    startDate: Date | null
    endDate: Date | null
    totalAmount: Decimal | null
    status: $Enums.RentalStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type RentalOrderCountAggregateOutputType = {
    id: number
    customerId: number
    startDate: number
    endDate: number
    totalAmount: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type RentalOrderAvgAggregateInputType = {
    totalAmount?: true
  }

  export type RentalOrderSumAggregateInputType = {
    totalAmount?: true
  }

  export type RentalOrderMinAggregateInputType = {
    id?: true
    customerId?: true
    startDate?: true
    endDate?: true
    totalAmount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalOrderMaxAggregateInputType = {
    id?: true
    customerId?: true
    startDate?: true
    endDate?: true
    totalAmount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type RentalOrderCountAggregateInputType = {
    id?: true
    customerId?: true
    startDate?: true
    endDate?: true
    totalAmount?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type RentalOrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalOrder to aggregate.
     */
    where?: RentalOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalOrders to fetch.
     */
    orderBy?: RentalOrderOrderByWithRelationInput | RentalOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentalOrders
    **/
    _count?: true | RentalOrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalOrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalOrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalOrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalOrderMaxAggregateInputType
  }

  export type GetRentalOrderAggregateType<T extends RentalOrderAggregateArgs> = {
        [P in keyof T & keyof AggregateRentalOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentalOrder[P]>
      : GetScalarType<T[P], AggregateRentalOrder[P]>
  }




  export type RentalOrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalOrderWhereInput
    orderBy?: RentalOrderOrderByWithAggregationInput | RentalOrderOrderByWithAggregationInput[]
    by: RentalOrderScalarFieldEnum[] | RentalOrderScalarFieldEnum
    having?: RentalOrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalOrderCountAggregateInputType | true
    _avg?: RentalOrderAvgAggregateInputType
    _sum?: RentalOrderSumAggregateInputType
    _min?: RentalOrderMinAggregateInputType
    _max?: RentalOrderMaxAggregateInputType
  }

  export type RentalOrderGroupByOutputType = {
    id: string
    customerId: string
    startDate: Date
    endDate: Date
    totalAmount: Decimal
    status: $Enums.RentalStatus
    createdAt: Date
    updatedAt: Date
    _count: RentalOrderCountAggregateOutputType | null
    _avg: RentalOrderAvgAggregateOutputType | null
    _sum: RentalOrderSumAggregateOutputType | null
    _min: RentalOrderMinAggregateOutputType | null
    _max: RentalOrderMaxAggregateOutputType | null
  }

  type GetRentalOrderGroupByPayload<T extends RentalOrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalOrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalOrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalOrderGroupByOutputType[P]>
            : GetScalarType<T[P], RentalOrderGroupByOutputType[P]>
        }
      >
    >


  export type RentalOrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | RentalOrder$itemsArgs<ExtArgs>
    payments?: boolean | RentalOrder$paymentsArgs<ExtArgs>
    review?: boolean | RentalOrder$reviewArgs<ExtArgs>
    _count?: boolean | RentalOrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalOrder"]>

  export type RentalOrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalOrder"]>

  export type RentalOrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalOrder"]>

  export type RentalOrderSelectScalar = {
    id?: boolean
    customerId?: boolean
    startDate?: boolean
    endDate?: boolean
    totalAmount?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type RentalOrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "startDate" | "endDate" | "totalAmount" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["rentalOrder"]>
  export type RentalOrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    items?: boolean | RentalOrder$itemsArgs<ExtArgs>
    payments?: boolean | RentalOrder$paymentsArgs<ExtArgs>
    review?: boolean | RentalOrder$reviewArgs<ExtArgs>
    _count?: boolean | RentalOrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RentalOrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RentalOrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RentalOrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentalOrder"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>
      items: Prisma.$RentalOrderItemPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      review: Prisma.$ReviewPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      startDate: Date
      endDate: Date
      totalAmount: Prisma.Decimal
      status: $Enums.RentalStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["rentalOrder"]>
    composites: {}
  }

  type RentalOrderGetPayload<S extends boolean | null | undefined | RentalOrderDefaultArgs> = $Result.GetResult<Prisma.$RentalOrderPayload, S>

  type RentalOrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentalOrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalOrderCountAggregateInputType | true
    }

  export interface RentalOrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentalOrder'], meta: { name: 'RentalOrder' } }
    /**
     * Find zero or one RentalOrder that matches the filter.
     * @param {RentalOrderFindUniqueArgs} args - Arguments to find a RentalOrder
     * @example
     * // Get one RentalOrder
     * const rentalOrder = await prisma.rentalOrder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalOrderFindUniqueArgs>(args: SelectSubset<T, RentalOrderFindUniqueArgs<ExtArgs>>): Prisma__RentalOrderClient<$Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RentalOrder that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalOrderFindUniqueOrThrowArgs} args - Arguments to find a RentalOrder
     * @example
     * // Get one RentalOrder
     * const rentalOrder = await prisma.rentalOrder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalOrderFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalOrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalOrderClient<$Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalOrder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderFindFirstArgs} args - Arguments to find a RentalOrder
     * @example
     * // Get one RentalOrder
     * const rentalOrder = await prisma.rentalOrder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalOrderFindFirstArgs>(args?: SelectSubset<T, RentalOrderFindFirstArgs<ExtArgs>>): Prisma__RentalOrderClient<$Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalOrder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderFindFirstOrThrowArgs} args - Arguments to find a RentalOrder
     * @example
     * // Get one RentalOrder
     * const rentalOrder = await prisma.rentalOrder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalOrderFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalOrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalOrderClient<$Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RentalOrders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalOrders
     * const rentalOrders = await prisma.rentalOrder.findMany()
     * 
     * // Get first 10 RentalOrders
     * const rentalOrders = await prisma.rentalOrder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalOrderWithIdOnly = await prisma.rentalOrder.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalOrderFindManyArgs>(args?: SelectSubset<T, RentalOrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RentalOrder.
     * @param {RentalOrderCreateArgs} args - Arguments to create a RentalOrder.
     * @example
     * // Create one RentalOrder
     * const RentalOrder = await prisma.rentalOrder.create({
     *   data: {
     *     // ... data to create a RentalOrder
     *   }
     * })
     * 
     */
    create<T extends RentalOrderCreateArgs>(args: SelectSubset<T, RentalOrderCreateArgs<ExtArgs>>): Prisma__RentalOrderClient<$Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RentalOrders.
     * @param {RentalOrderCreateManyArgs} args - Arguments to create many RentalOrders.
     * @example
     * // Create many RentalOrders
     * const rentalOrder = await prisma.rentalOrder.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalOrderCreateManyArgs>(args?: SelectSubset<T, RentalOrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RentalOrders and returns the data saved in the database.
     * @param {RentalOrderCreateManyAndReturnArgs} args - Arguments to create many RentalOrders.
     * @example
     * // Create many RentalOrders
     * const rentalOrder = await prisma.rentalOrder.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RentalOrders and only return the `id`
     * const rentalOrderWithIdOnly = await prisma.rentalOrder.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalOrderCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalOrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RentalOrder.
     * @param {RentalOrderDeleteArgs} args - Arguments to delete one RentalOrder.
     * @example
     * // Delete one RentalOrder
     * const RentalOrder = await prisma.rentalOrder.delete({
     *   where: {
     *     // ... filter to delete one RentalOrder
     *   }
     * })
     * 
     */
    delete<T extends RentalOrderDeleteArgs>(args: SelectSubset<T, RentalOrderDeleteArgs<ExtArgs>>): Prisma__RentalOrderClient<$Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RentalOrder.
     * @param {RentalOrderUpdateArgs} args - Arguments to update one RentalOrder.
     * @example
     * // Update one RentalOrder
     * const rentalOrder = await prisma.rentalOrder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalOrderUpdateArgs>(args: SelectSubset<T, RentalOrderUpdateArgs<ExtArgs>>): Prisma__RentalOrderClient<$Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RentalOrders.
     * @param {RentalOrderDeleteManyArgs} args - Arguments to filter RentalOrders to delete.
     * @example
     * // Delete a few RentalOrders
     * const { count } = await prisma.rentalOrder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalOrderDeleteManyArgs>(args?: SelectSubset<T, RentalOrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalOrders
     * const rentalOrder = await prisma.rentalOrder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalOrderUpdateManyArgs>(args: SelectSubset<T, RentalOrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalOrders and returns the data updated in the database.
     * @param {RentalOrderUpdateManyAndReturnArgs} args - Arguments to update many RentalOrders.
     * @example
     * // Update many RentalOrders
     * const rentalOrder = await prisma.rentalOrder.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RentalOrders and only return the `id`
     * const rentalOrderWithIdOnly = await prisma.rentalOrder.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RentalOrderUpdateManyAndReturnArgs>(args: SelectSubset<T, RentalOrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RentalOrder.
     * @param {RentalOrderUpsertArgs} args - Arguments to update or create a RentalOrder.
     * @example
     * // Update or create a RentalOrder
     * const rentalOrder = await prisma.rentalOrder.upsert({
     *   create: {
     *     // ... data to create a RentalOrder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalOrder we want to update
     *   }
     * })
     */
    upsert<T extends RentalOrderUpsertArgs>(args: SelectSubset<T, RentalOrderUpsertArgs<ExtArgs>>): Prisma__RentalOrderClient<$Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RentalOrders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderCountArgs} args - Arguments to filter RentalOrders to count.
     * @example
     * // Count the number of RentalOrders
     * const count = await prisma.rentalOrder.count({
     *   where: {
     *     // ... the filter for the RentalOrders we want to count
     *   }
     * })
    **/
    count<T extends RentalOrderCountArgs>(
      args?: Subset<T, RentalOrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalOrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentalOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentalOrderAggregateArgs>(args: Subset<T, RentalOrderAggregateArgs>): Prisma.PrismaPromise<GetRentalOrderAggregateType<T>>

    /**
     * Group by RentalOrder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderGroupByArgs} args - Group by arguments.
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
      T extends RentalOrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalOrderGroupByArgs['orderBy'] }
        : { orderBy?: RentalOrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RentalOrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentalOrder model
   */
  readonly fields: RentalOrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentalOrder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalOrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    items<T extends RentalOrder$itemsArgs<ExtArgs> = {}>(args?: Subset<T, RentalOrder$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends RentalOrder$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, RentalOrder$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    review<T extends RentalOrder$reviewArgs<ExtArgs> = {}>(args?: Subset<T, RentalOrder$reviewArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RentalOrder model
   */
  interface RentalOrderFieldRefs {
    readonly id: FieldRef<"RentalOrder", 'String'>
    readonly customerId: FieldRef<"RentalOrder", 'String'>
    readonly startDate: FieldRef<"RentalOrder", 'DateTime'>
    readonly endDate: FieldRef<"RentalOrder", 'DateTime'>
    readonly totalAmount: FieldRef<"RentalOrder", 'Decimal'>
    readonly status: FieldRef<"RentalOrder", 'RentalStatus'>
    readonly createdAt: FieldRef<"RentalOrder", 'DateTime'>
    readonly updatedAt: FieldRef<"RentalOrder", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * RentalOrder findUnique
   */
  export type RentalOrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: RentalOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: RentalOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderInclude<ExtArgs> | null
    /**
     * Filter, which RentalOrder to fetch.
     */
    where: RentalOrderWhereUniqueInput
  }

  /**
   * RentalOrder findUniqueOrThrow
   */
  export type RentalOrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: RentalOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: RentalOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderInclude<ExtArgs> | null
    /**
     * Filter, which RentalOrder to fetch.
     */
    where: RentalOrderWhereUniqueInput
  }

  /**
   * RentalOrder findFirst
   */
  export type RentalOrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: RentalOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: RentalOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderInclude<ExtArgs> | null
    /**
     * Filter, which RentalOrder to fetch.
     */
    where?: RentalOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalOrders to fetch.
     */
    orderBy?: RentalOrderOrderByWithRelationInput | RentalOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalOrders.
     */
    cursor?: RentalOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalOrders.
     */
    distinct?: RentalOrderScalarFieldEnum | RentalOrderScalarFieldEnum[]
  }

  /**
   * RentalOrder findFirstOrThrow
   */
  export type RentalOrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: RentalOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: RentalOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderInclude<ExtArgs> | null
    /**
     * Filter, which RentalOrder to fetch.
     */
    where?: RentalOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalOrders to fetch.
     */
    orderBy?: RentalOrderOrderByWithRelationInput | RentalOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalOrders.
     */
    cursor?: RentalOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalOrders.
     */
    distinct?: RentalOrderScalarFieldEnum | RentalOrderScalarFieldEnum[]
  }

  /**
   * RentalOrder findMany
   */
  export type RentalOrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: RentalOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: RentalOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderInclude<ExtArgs> | null
    /**
     * Filter, which RentalOrders to fetch.
     */
    where?: RentalOrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalOrders to fetch.
     */
    orderBy?: RentalOrderOrderByWithRelationInput | RentalOrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentalOrders.
     */
    cursor?: RentalOrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalOrders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalOrders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalOrders.
     */
    distinct?: RentalOrderScalarFieldEnum | RentalOrderScalarFieldEnum[]
  }

  /**
   * RentalOrder create
   */
  export type RentalOrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: RentalOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: RentalOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderInclude<ExtArgs> | null
    /**
     * The data needed to create a RentalOrder.
     */
    data: XOR<RentalOrderCreateInput, RentalOrderUncheckedCreateInput>
  }

  /**
   * RentalOrder createMany
   */
  export type RentalOrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalOrders.
     */
    data: RentalOrderCreateManyInput | RentalOrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentalOrder createManyAndReturn
   */
  export type RentalOrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: RentalOrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: RentalOrderOmit<ExtArgs> | null
    /**
     * The data used to create many RentalOrders.
     */
    data: RentalOrderCreateManyInput | RentalOrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalOrder update
   */
  export type RentalOrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: RentalOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: RentalOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderInclude<ExtArgs> | null
    /**
     * The data needed to update a RentalOrder.
     */
    data: XOR<RentalOrderUpdateInput, RentalOrderUncheckedUpdateInput>
    /**
     * Choose, which RentalOrder to update.
     */
    where: RentalOrderWhereUniqueInput
  }

  /**
   * RentalOrder updateMany
   */
  export type RentalOrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalOrders.
     */
    data: XOR<RentalOrderUpdateManyMutationInput, RentalOrderUncheckedUpdateManyInput>
    /**
     * Filter which RentalOrders to update
     */
    where?: RentalOrderWhereInput
    /**
     * Limit how many RentalOrders to update.
     */
    limit?: number
  }

  /**
   * RentalOrder updateManyAndReturn
   */
  export type RentalOrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: RentalOrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: RentalOrderOmit<ExtArgs> | null
    /**
     * The data used to update RentalOrders.
     */
    data: XOR<RentalOrderUpdateManyMutationInput, RentalOrderUncheckedUpdateManyInput>
    /**
     * Filter which RentalOrders to update
     */
    where?: RentalOrderWhereInput
    /**
     * Limit how many RentalOrders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalOrder upsert
   */
  export type RentalOrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: RentalOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: RentalOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderInclude<ExtArgs> | null
    /**
     * The filter to search for the RentalOrder to update in case it exists.
     */
    where: RentalOrderWhereUniqueInput
    /**
     * In case the RentalOrder found by the `where` argument doesn't exist, create a new RentalOrder with this data.
     */
    create: XOR<RentalOrderCreateInput, RentalOrderUncheckedCreateInput>
    /**
     * In case the RentalOrder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalOrderUpdateInput, RentalOrderUncheckedUpdateInput>
  }

  /**
   * RentalOrder delete
   */
  export type RentalOrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: RentalOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: RentalOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderInclude<ExtArgs> | null
    /**
     * Filter which RentalOrder to delete.
     */
    where: RentalOrderWhereUniqueInput
  }

  /**
   * RentalOrder deleteMany
   */
  export type RentalOrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalOrders to delete
     */
    where?: RentalOrderWhereInput
    /**
     * Limit how many RentalOrders to delete.
     */
    limit?: number
  }

  /**
   * RentalOrder.items
   */
  export type RentalOrder$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: RentalOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: RentalOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderItemInclude<ExtArgs> | null
    where?: RentalOrderItemWhereInput
    orderBy?: RentalOrderItemOrderByWithRelationInput | RentalOrderItemOrderByWithRelationInput[]
    cursor?: RentalOrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalOrderItemScalarFieldEnum | RentalOrderItemScalarFieldEnum[]
  }

  /**
   * RentalOrder.payments
   */
  export type RentalOrder$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * RentalOrder.review
   */
  export type RentalOrder$reviewArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
  }

  /**
   * RentalOrder without action
   */
  export type RentalOrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: RentalOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: RentalOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderInclude<ExtArgs> | null
  }


  /**
   * Model RentalOrderItem
   */

  export type AggregateRentalOrderItem = {
    _count: RentalOrderItemCountAggregateOutputType | null
    _avg: RentalOrderItemAvgAggregateOutputType | null
    _sum: RentalOrderItemSumAggregateOutputType | null
    _min: RentalOrderItemMinAggregateOutputType | null
    _max: RentalOrderItemMaxAggregateOutputType | null
  }

  export type RentalOrderItemAvgAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
  }

  export type RentalOrderItemSumAggregateOutputType = {
    quantity: number | null
    price: Decimal | null
  }

  export type RentalOrderItemMinAggregateOutputType = {
    id: string | null
    rentalOrderId: string | null
    gearItemId: string | null
    quantity: number | null
    price: Decimal | null
  }

  export type RentalOrderItemMaxAggregateOutputType = {
    id: string | null
    rentalOrderId: string | null
    gearItemId: string | null
    quantity: number | null
    price: Decimal | null
  }

  export type RentalOrderItemCountAggregateOutputType = {
    id: number
    rentalOrderId: number
    gearItemId: number
    quantity: number
    price: number
    _all: number
  }


  export type RentalOrderItemAvgAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type RentalOrderItemSumAggregateInputType = {
    quantity?: true
    price?: true
  }

  export type RentalOrderItemMinAggregateInputType = {
    id?: true
    rentalOrderId?: true
    gearItemId?: true
    quantity?: true
    price?: true
  }

  export type RentalOrderItemMaxAggregateInputType = {
    id?: true
    rentalOrderId?: true
    gearItemId?: true
    quantity?: true
    price?: true
  }

  export type RentalOrderItemCountAggregateInputType = {
    id?: true
    rentalOrderId?: true
    gearItemId?: true
    quantity?: true
    price?: true
    _all?: true
  }

  export type RentalOrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalOrderItem to aggregate.
     */
    where?: RentalOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalOrderItems to fetch.
     */
    orderBy?: RentalOrderItemOrderByWithRelationInput | RentalOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RentalOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RentalOrderItems
    **/
    _count?: true | RentalOrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RentalOrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RentalOrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RentalOrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RentalOrderItemMaxAggregateInputType
  }

  export type GetRentalOrderItemAggregateType<T extends RentalOrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateRentalOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRentalOrderItem[P]>
      : GetScalarType<T[P], AggregateRentalOrderItem[P]>
  }




  export type RentalOrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RentalOrderItemWhereInput
    orderBy?: RentalOrderItemOrderByWithAggregationInput | RentalOrderItemOrderByWithAggregationInput[]
    by: RentalOrderItemScalarFieldEnum[] | RentalOrderItemScalarFieldEnum
    having?: RentalOrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RentalOrderItemCountAggregateInputType | true
    _avg?: RentalOrderItemAvgAggregateInputType
    _sum?: RentalOrderItemSumAggregateInputType
    _min?: RentalOrderItemMinAggregateInputType
    _max?: RentalOrderItemMaxAggregateInputType
  }

  export type RentalOrderItemGroupByOutputType = {
    id: string
    rentalOrderId: string
    gearItemId: string
    quantity: number
    price: Decimal
    _count: RentalOrderItemCountAggregateOutputType | null
    _avg: RentalOrderItemAvgAggregateOutputType | null
    _sum: RentalOrderItemSumAggregateOutputType | null
    _min: RentalOrderItemMinAggregateOutputType | null
    _max: RentalOrderItemMaxAggregateOutputType | null
  }

  type GetRentalOrderItemGroupByPayload<T extends RentalOrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RentalOrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RentalOrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RentalOrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], RentalOrderItemGroupByOutputType[P]>
        }
      >
    >


  export type RentalOrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rentalOrderId?: boolean
    gearItemId?: boolean
    quantity?: boolean
    price?: boolean
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
    gearItem?: boolean | GearItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalOrderItem"]>

  export type RentalOrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rentalOrderId?: boolean
    gearItemId?: boolean
    quantity?: boolean
    price?: boolean
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
    gearItem?: boolean | GearItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalOrderItem"]>

  export type RentalOrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rentalOrderId?: boolean
    gearItemId?: boolean
    quantity?: boolean
    price?: boolean
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
    gearItem?: boolean | GearItemDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rentalOrderItem"]>

  export type RentalOrderItemSelectScalar = {
    id?: boolean
    rentalOrderId?: boolean
    gearItemId?: boolean
    quantity?: boolean
    price?: boolean
  }

  export type RentalOrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rentalOrderId" | "gearItemId" | "quantity" | "price", ExtArgs["result"]["rentalOrderItem"]>
  export type RentalOrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
    gearItem?: boolean | GearItemDefaultArgs<ExtArgs>
  }
  export type RentalOrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
    gearItem?: boolean | GearItemDefaultArgs<ExtArgs>
  }
  export type RentalOrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
    gearItem?: boolean | GearItemDefaultArgs<ExtArgs>
  }

  export type $RentalOrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RentalOrderItem"
    objects: {
      rentalOrder: Prisma.$RentalOrderPayload<ExtArgs>
      gearItem: Prisma.$GearItemPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rentalOrderId: string
      gearItemId: string
      quantity: number
      price: Prisma.Decimal
    }, ExtArgs["result"]["rentalOrderItem"]>
    composites: {}
  }

  type RentalOrderItemGetPayload<S extends boolean | null | undefined | RentalOrderItemDefaultArgs> = $Result.GetResult<Prisma.$RentalOrderItemPayload, S>

  type RentalOrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RentalOrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RentalOrderItemCountAggregateInputType | true
    }

  export interface RentalOrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RentalOrderItem'], meta: { name: 'RentalOrderItem' } }
    /**
     * Find zero or one RentalOrderItem that matches the filter.
     * @param {RentalOrderItemFindUniqueArgs} args - Arguments to find a RentalOrderItem
     * @example
     * // Get one RentalOrderItem
     * const rentalOrderItem = await prisma.rentalOrderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalOrderItemFindUniqueArgs>(args: SelectSubset<T, RentalOrderItemFindUniqueArgs<ExtArgs>>): Prisma__RentalOrderItemClient<$Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RentalOrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalOrderItemFindUniqueOrThrowArgs} args - Arguments to find a RentalOrderItem
     * @example
     * // Get one RentalOrderItem
     * const rentalOrderItem = await prisma.rentalOrderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalOrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, RentalOrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RentalOrderItemClient<$Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalOrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemFindFirstArgs} args - Arguments to find a RentalOrderItem
     * @example
     * // Get one RentalOrderItem
     * const rentalOrderItem = await prisma.rentalOrderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalOrderItemFindFirstArgs>(args?: SelectSubset<T, RentalOrderItemFindFirstArgs<ExtArgs>>): Prisma__RentalOrderItemClient<$Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RentalOrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemFindFirstOrThrowArgs} args - Arguments to find a RentalOrderItem
     * @example
     * // Get one RentalOrderItem
     * const rentalOrderItem = await prisma.rentalOrderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalOrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, RentalOrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__RentalOrderItemClient<$Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RentalOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItem.findMany()
     * 
     * // Get first 10 RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const rentalOrderItemWithIdOnly = await prisma.rentalOrderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RentalOrderItemFindManyArgs>(args?: SelectSubset<T, RentalOrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RentalOrderItem.
     * @param {RentalOrderItemCreateArgs} args - Arguments to create a RentalOrderItem.
     * @example
     * // Create one RentalOrderItem
     * const RentalOrderItem = await prisma.rentalOrderItem.create({
     *   data: {
     *     // ... data to create a RentalOrderItem
     *   }
     * })
     * 
     */
    create<T extends RentalOrderItemCreateArgs>(args: SelectSubset<T, RentalOrderItemCreateArgs<ExtArgs>>): Prisma__RentalOrderItemClient<$Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RentalOrderItems.
     * @param {RentalOrderItemCreateManyArgs} args - Arguments to create many RentalOrderItems.
     * @example
     * // Create many RentalOrderItems
     * const rentalOrderItem = await prisma.rentalOrderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RentalOrderItemCreateManyArgs>(args?: SelectSubset<T, RentalOrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RentalOrderItems and returns the data saved in the database.
     * @param {RentalOrderItemCreateManyAndReturnArgs} args - Arguments to create many RentalOrderItems.
     * @example
     * // Create many RentalOrderItems
     * const rentalOrderItem = await prisma.rentalOrderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RentalOrderItems and only return the `id`
     * const rentalOrderItemWithIdOnly = await prisma.rentalOrderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RentalOrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, RentalOrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RentalOrderItem.
     * @param {RentalOrderItemDeleteArgs} args - Arguments to delete one RentalOrderItem.
     * @example
     * // Delete one RentalOrderItem
     * const RentalOrderItem = await prisma.rentalOrderItem.delete({
     *   where: {
     *     // ... filter to delete one RentalOrderItem
     *   }
     * })
     * 
     */
    delete<T extends RentalOrderItemDeleteArgs>(args: SelectSubset<T, RentalOrderItemDeleteArgs<ExtArgs>>): Prisma__RentalOrderItemClient<$Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RentalOrderItem.
     * @param {RentalOrderItemUpdateArgs} args - Arguments to update one RentalOrderItem.
     * @example
     * // Update one RentalOrderItem
     * const rentalOrderItem = await prisma.rentalOrderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RentalOrderItemUpdateArgs>(args: SelectSubset<T, RentalOrderItemUpdateArgs<ExtArgs>>): Prisma__RentalOrderItemClient<$Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RentalOrderItems.
     * @param {RentalOrderItemDeleteManyArgs} args - Arguments to filter RentalOrderItems to delete.
     * @example
     * // Delete a few RentalOrderItems
     * const { count } = await prisma.rentalOrderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RentalOrderItemDeleteManyArgs>(args?: SelectSubset<T, RentalOrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalOrderItems
     * const rentalOrderItem = await prisma.rentalOrderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RentalOrderItemUpdateManyArgs>(args: SelectSubset<T, RentalOrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RentalOrderItems and returns the data updated in the database.
     * @param {RentalOrderItemUpdateManyAndReturnArgs} args - Arguments to update many RentalOrderItems.
     * @example
     * // Update many RentalOrderItems
     * const rentalOrderItem = await prisma.rentalOrderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RentalOrderItems and only return the `id`
     * const rentalOrderItemWithIdOnly = await prisma.rentalOrderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RentalOrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, RentalOrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RentalOrderItem.
     * @param {RentalOrderItemUpsertArgs} args - Arguments to update or create a RentalOrderItem.
     * @example
     * // Update or create a RentalOrderItem
     * const rentalOrderItem = await prisma.rentalOrderItem.upsert({
     *   create: {
     *     // ... data to create a RentalOrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalOrderItem we want to update
     *   }
     * })
     */
    upsert<T extends RentalOrderItemUpsertArgs>(args: SelectSubset<T, RentalOrderItemUpsertArgs<ExtArgs>>): Prisma__RentalOrderItemClient<$Result.GetResult<Prisma.$RentalOrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RentalOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemCountArgs} args - Arguments to filter RentalOrderItems to count.
     * @example
     * // Count the number of RentalOrderItems
     * const count = await prisma.rentalOrderItem.count({
     *   where: {
     *     // ... the filter for the RentalOrderItems we want to count
     *   }
     * })
    **/
    count<T extends RentalOrderItemCountArgs>(
      args?: Subset<T, RentalOrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RentalOrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RentalOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RentalOrderItemAggregateArgs>(args: Subset<T, RentalOrderItemAggregateArgs>): Prisma.PrismaPromise<GetRentalOrderItemAggregateType<T>>

    /**
     * Group by RentalOrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemGroupByArgs} args - Group by arguments.
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
      T extends RentalOrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RentalOrderItemGroupByArgs['orderBy'] }
        : { orderBy?: RentalOrderItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RentalOrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RentalOrderItem model
   */
  readonly fields: RentalOrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RentalOrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RentalOrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rentalOrder<T extends RentalOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RentalOrderDefaultArgs<ExtArgs>>): Prisma__RentalOrderClient<$Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gearItem<T extends GearItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GearItemDefaultArgs<ExtArgs>>): Prisma__GearItemClient<$Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the RentalOrderItem model
   */
  interface RentalOrderItemFieldRefs {
    readonly id: FieldRef<"RentalOrderItem", 'String'>
    readonly rentalOrderId: FieldRef<"RentalOrderItem", 'String'>
    readonly gearItemId: FieldRef<"RentalOrderItem", 'String'>
    readonly quantity: FieldRef<"RentalOrderItem", 'Int'>
    readonly price: FieldRef<"RentalOrderItem", 'Decimal'>
  }
    

  // Custom InputTypes
  /**
   * RentalOrderItem findUnique
   */
  export type RentalOrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: RentalOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: RentalOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which RentalOrderItem to fetch.
     */
    where: RentalOrderItemWhereUniqueInput
  }

  /**
   * RentalOrderItem findUniqueOrThrow
   */
  export type RentalOrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: RentalOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: RentalOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which RentalOrderItem to fetch.
     */
    where: RentalOrderItemWhereUniqueInput
  }

  /**
   * RentalOrderItem findFirst
   */
  export type RentalOrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: RentalOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: RentalOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which RentalOrderItem to fetch.
     */
    where?: RentalOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalOrderItems to fetch.
     */
    orderBy?: RentalOrderItemOrderByWithRelationInput | RentalOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalOrderItems.
     */
    cursor?: RentalOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalOrderItems.
     */
    distinct?: RentalOrderItemScalarFieldEnum | RentalOrderItemScalarFieldEnum[]
  }

  /**
   * RentalOrderItem findFirstOrThrow
   */
  export type RentalOrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: RentalOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: RentalOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which RentalOrderItem to fetch.
     */
    where?: RentalOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalOrderItems to fetch.
     */
    orderBy?: RentalOrderItemOrderByWithRelationInput | RentalOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RentalOrderItems.
     */
    cursor?: RentalOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalOrderItems.
     */
    distinct?: RentalOrderItemScalarFieldEnum | RentalOrderItemScalarFieldEnum[]
  }

  /**
   * RentalOrderItem findMany
   */
  export type RentalOrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: RentalOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: RentalOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderItemInclude<ExtArgs> | null
    /**
     * Filter, which RentalOrderItems to fetch.
     */
    where?: RentalOrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RentalOrderItems to fetch.
     */
    orderBy?: RentalOrderItemOrderByWithRelationInput | RentalOrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RentalOrderItems.
     */
    cursor?: RentalOrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RentalOrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RentalOrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RentalOrderItems.
     */
    distinct?: RentalOrderItemScalarFieldEnum | RentalOrderItemScalarFieldEnum[]
  }

  /**
   * RentalOrderItem create
   */
  export type RentalOrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: RentalOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: RentalOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a RentalOrderItem.
     */
    data: XOR<RentalOrderItemCreateInput, RentalOrderItemUncheckedCreateInput>
  }

  /**
   * RentalOrderItem createMany
   */
  export type RentalOrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalOrderItems.
     */
    data: RentalOrderItemCreateManyInput | RentalOrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RentalOrderItem createManyAndReturn
   */
  export type RentalOrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: RentalOrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: RentalOrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many RentalOrderItems.
     */
    data: RentalOrderItemCreateManyInput | RentalOrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalOrderItem update
   */
  export type RentalOrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: RentalOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: RentalOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a RentalOrderItem.
     */
    data: XOR<RentalOrderItemUpdateInput, RentalOrderItemUncheckedUpdateInput>
    /**
     * Choose, which RentalOrderItem to update.
     */
    where: RentalOrderItemWhereUniqueInput
  }

  /**
   * RentalOrderItem updateMany
   */
  export type RentalOrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalOrderItems.
     */
    data: XOR<RentalOrderItemUpdateManyMutationInput, RentalOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which RentalOrderItems to update
     */
    where?: RentalOrderItemWhereInput
    /**
     * Limit how many RentalOrderItems to update.
     */
    limit?: number
  }

  /**
   * RentalOrderItem updateManyAndReturn
   */
  export type RentalOrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: RentalOrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: RentalOrderItemOmit<ExtArgs> | null
    /**
     * The data used to update RentalOrderItems.
     */
    data: XOR<RentalOrderItemUpdateManyMutationInput, RentalOrderItemUncheckedUpdateManyInput>
    /**
     * Filter which RentalOrderItems to update
     */
    where?: RentalOrderItemWhereInput
    /**
     * Limit how many RentalOrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RentalOrderItem upsert
   */
  export type RentalOrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: RentalOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: RentalOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the RentalOrderItem to update in case it exists.
     */
    where: RentalOrderItemWhereUniqueInput
    /**
     * In case the RentalOrderItem found by the `where` argument doesn't exist, create a new RentalOrderItem with this data.
     */
    create: XOR<RentalOrderItemCreateInput, RentalOrderItemUncheckedCreateInput>
    /**
     * In case the RentalOrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RentalOrderItemUpdateInput, RentalOrderItemUncheckedUpdateInput>
  }

  /**
   * RentalOrderItem delete
   */
  export type RentalOrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: RentalOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: RentalOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderItemInclude<ExtArgs> | null
    /**
     * Filter which RentalOrderItem to delete.
     */
    where: RentalOrderItemWhereUniqueInput
  }

  /**
   * RentalOrderItem deleteMany
   */
  export type RentalOrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RentalOrderItems to delete
     */
    where?: RentalOrderItemWhereInput
    /**
     * Limit how many RentalOrderItems to delete.
     */
    limit?: number
  }

  /**
   * RentalOrderItem without action
   */
  export type RentalOrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItem
     */
    select?: RentalOrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrderItem
     */
    omit?: RentalOrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderItemInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    gearItemId: string | null
    rentalOrderId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    gearItemId: string | null
    rentalOrderId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    customerId: number
    gearItemId: number
    rentalOrderId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    customerId?: true
    gearItemId?: true
    rentalOrderId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    customerId?: true
    gearItemId?: true
    rentalOrderId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    customerId?: true
    gearItemId?: true
    rentalOrderId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    customerId: string
    gearItemId: string
    rentalOrderId: string
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    gearItemId?: boolean
    rentalOrderId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    gearItem?: boolean | GearItemDefaultArgs<ExtArgs>
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    gearItemId?: boolean
    rentalOrderId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    gearItem?: boolean | GearItemDefaultArgs<ExtArgs>
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    gearItemId?: boolean
    rentalOrderId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    customer?: boolean | UserDefaultArgs<ExtArgs>
    gearItem?: boolean | GearItemDefaultArgs<ExtArgs>
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    customerId?: boolean
    gearItemId?: boolean
    rentalOrderId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "gearItemId" | "rentalOrderId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    gearItem?: boolean | GearItemDefaultArgs<ExtArgs>
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    gearItem?: boolean | GearItemDefaultArgs<ExtArgs>
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | UserDefaultArgs<ExtArgs>
    gearItem?: boolean | GearItemDefaultArgs<ExtArgs>
    rentalOrder?: boolean | RentalOrderDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      customer: Prisma.$UserPayload<ExtArgs>
      gearItem: Prisma.$GearItemPayload<ExtArgs>
      rentalOrder: Prisma.$RentalOrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      gearItemId: string
      rentalOrderId: string
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    gearItem<T extends GearItemDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GearItemDefaultArgs<ExtArgs>>): Prisma__GearItemClient<$Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    rentalOrder<T extends RentalOrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RentalOrderDefaultArgs<ExtArgs>>): Prisma__RentalOrderClient<$Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly customerId: FieldRef<"Review", 'String'>
    readonly gearItemId: FieldRef<"Review", 'String'>
    readonly rentalOrderId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    phone: string | null
    address: string | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    phone: string | null
    address: string | null
    status: $Enums.UserStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    passwordHash: number
    role: number
    phone: number
    address: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    phone?: true
    address?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    phone?: true
    address?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    passwordHash?: true
    role?: true
    phone?: true
    address?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone: string | null
    address: string | null
    status: $Enums.UserStatus
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    phone?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    gearItems?: boolean | User$gearItemsArgs<ExtArgs>
    rentalOrders?: boolean | User$rentalOrdersArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    phone?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    phone?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    phone?: boolean
    address?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "passwordHash" | "role" | "phone" | "address" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    gearItems?: boolean | User$gearItemsArgs<ExtArgs>
    rentalOrders?: boolean | User$rentalOrdersArgs<ExtArgs>
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      gearItems: Prisma.$GearItemPayload<ExtArgs>[]
      rentalOrders: Prisma.$RentalOrderPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      passwordHash: string
      role: $Enums.Role
      phone: string | null
      address: string | null
      status: $Enums.UserStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    gearItems<T extends User$gearItemsArgs<ExtArgs> = {}>(args?: Subset<T, User$gearItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rentalOrders<T extends User$rentalOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$rentalOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly phone: FieldRef<"User", 'String'>
    readonly address: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'UserStatus'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.gearItems
   */
  export type User$gearItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GearItem
     */
    select?: GearItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the GearItem
     */
    omit?: GearItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: GearItemInclude<ExtArgs> | null
    where?: GearItemWhereInput
    orderBy?: GearItemOrderByWithRelationInput | GearItemOrderByWithRelationInput[]
    cursor?: GearItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GearItemScalarFieldEnum | GearItemScalarFieldEnum[]
  }

  /**
   * User.rentalOrders
   */
  export type User$rentalOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrder
     */
    select?: RentalOrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RentalOrder
     */
    omit?: RentalOrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RentalOrderInclude<ExtArgs> | null
    where?: RentalOrderWhereInput
    orderBy?: RentalOrderOrderByWithRelationInput | RentalOrderOrderByWithRelationInput[]
    cursor?: RentalOrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RentalOrderScalarFieldEnum | RentalOrderScalarFieldEnum[]
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const GearItemScalarFieldEnum: {
    id: 'id',
    providerId: 'providerId',
    categoryId: 'categoryId',
    name: 'name',
    description: 'description',
    brand: 'brand',
    price: 'price',
    stockQuantity: 'stockQuantity',
    isAvailable: 'isAvailable',
    images: 'images',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type GearItemScalarFieldEnum = (typeof GearItemScalarFieldEnum)[keyof typeof GearItemScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    transactionId: 'transactionId',
    rentalOrderId: 'rentalOrderId',
    amount: 'amount',
    currency: 'currency',
    method: 'method',
    status: 'status',
    paidAt: 'paidAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const RentalOrderScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    startDate: 'startDate',
    endDate: 'endDate',
    totalAmount: 'totalAmount',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type RentalOrderScalarFieldEnum = (typeof RentalOrderScalarFieldEnum)[keyof typeof RentalOrderScalarFieldEnum]


  export const RentalOrderItemScalarFieldEnum: {
    id: 'id',
    rentalOrderId: 'rentalOrderId',
    gearItemId: 'gearItemId',
    quantity: 'quantity',
    price: 'price'
  };

  export type RentalOrderItemScalarFieldEnum = (typeof RentalOrderItemScalarFieldEnum)[keyof typeof RentalOrderItemScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    gearItemId: 'gearItemId',
    rentalOrderId: 'rentalOrderId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    phone: 'phone',
    address: 'address',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PaymentMethod'
   */
  export type EnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod'>
    


  /**
   * Reference to a field of type 'PaymentMethod[]'
   */
  export type ListEnumPaymentMethodFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentMethod[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'RentalStatus'
   */
  export type EnumRentalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RentalStatus'>
    


  /**
   * Reference to a field of type 'RentalStatus[]'
   */
  export type ListEnumRentalStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RentalStatus[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'UserStatus'
   */
  export type EnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus'>
    


  /**
   * Reference to a field of type 'UserStatus[]'
   */
  export type ListEnumUserStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserStatus[]'>
    


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


  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    gearItems?: GearItemListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    gearItems?: GearItemOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    gearItems?: GearItemListRelationFilter
  }, "id" | "name">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
  }

  export type GearItemWhereInput = {
    AND?: GearItemWhereInput | GearItemWhereInput[]
    OR?: GearItemWhereInput[]
    NOT?: GearItemWhereInput | GearItemWhereInput[]
    id?: StringFilter<"GearItem"> | string
    providerId?: StringFilter<"GearItem"> | string
    categoryId?: StringFilter<"GearItem"> | string
    name?: StringFilter<"GearItem"> | string
    description?: StringNullableFilter<"GearItem"> | string | null
    brand?: StringNullableFilter<"GearItem"> | string | null
    price?: DecimalFilter<"GearItem"> | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFilter<"GearItem"> | number
    isAvailable?: BoolFilter<"GearItem"> | boolean
    images?: StringNullableListFilter<"GearItem">
    createdAt?: DateTimeFilter<"GearItem"> | Date | string
    updatedAt?: DateTimeFilter<"GearItem"> | Date | string
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    rentalOrderItems?: RentalOrderItemListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type GearItemOrderByWithRelationInput = {
    id?: SortOrder
    providerId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    price?: SortOrder
    stockQuantity?: SortOrder
    isAvailable?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    provider?: UserOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    rentalOrderItems?: RentalOrderItemOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type GearItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: GearItemWhereInput | GearItemWhereInput[]
    OR?: GearItemWhereInput[]
    NOT?: GearItemWhereInput | GearItemWhereInput[]
    providerId?: StringFilter<"GearItem"> | string
    categoryId?: StringFilter<"GearItem"> | string
    name?: StringFilter<"GearItem"> | string
    description?: StringNullableFilter<"GearItem"> | string | null
    brand?: StringNullableFilter<"GearItem"> | string | null
    price?: DecimalFilter<"GearItem"> | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFilter<"GearItem"> | number
    isAvailable?: BoolFilter<"GearItem"> | boolean
    images?: StringNullableListFilter<"GearItem">
    createdAt?: DateTimeFilter<"GearItem"> | Date | string
    updatedAt?: DateTimeFilter<"GearItem"> | Date | string
    provider?: XOR<UserScalarRelationFilter, UserWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    rentalOrderItems?: RentalOrderItemListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id">

  export type GearItemOrderByWithAggregationInput = {
    id?: SortOrder
    providerId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    brand?: SortOrderInput | SortOrder
    price?: SortOrder
    stockQuantity?: SortOrder
    isAvailable?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: GearItemCountOrderByAggregateInput
    _avg?: GearItemAvgOrderByAggregateInput
    _max?: GearItemMaxOrderByAggregateInput
    _min?: GearItemMinOrderByAggregateInput
    _sum?: GearItemSumOrderByAggregateInput
  }

  export type GearItemScalarWhereWithAggregatesInput = {
    AND?: GearItemScalarWhereWithAggregatesInput | GearItemScalarWhereWithAggregatesInput[]
    OR?: GearItemScalarWhereWithAggregatesInput[]
    NOT?: GearItemScalarWhereWithAggregatesInput | GearItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"GearItem"> | string
    providerId?: StringWithAggregatesFilter<"GearItem"> | string
    categoryId?: StringWithAggregatesFilter<"GearItem"> | string
    name?: StringWithAggregatesFilter<"GearItem"> | string
    description?: StringNullableWithAggregatesFilter<"GearItem"> | string | null
    brand?: StringNullableWithAggregatesFilter<"GearItem"> | string | null
    price?: DecimalWithAggregatesFilter<"GearItem"> | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntWithAggregatesFilter<"GearItem"> | number
    isAvailable?: BoolWithAggregatesFilter<"GearItem"> | boolean
    images?: StringNullableListFilter<"GearItem">
    createdAt?: DateTimeWithAggregatesFilter<"GearItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"GearItem"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    transactionId?: StringFilter<"Payment"> | string
    rentalOrderId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    rentalOrder?: XOR<RentalOrderScalarRelationFilter, RentalOrderWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    rentalOrderId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    rentalOrder?: RentalOrderOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    transactionId?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    rentalOrderId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
    rentalOrder?: XOR<RentalOrderScalarRelationFilter, RentalOrderWhereInput>
  }, "id" | "transactionId">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    transactionId?: SortOrder
    rentalOrderId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paidAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _avg?: PaymentAvgOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
    _sum?: PaymentSumOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    transactionId?: StringWithAggregatesFilter<"Payment"> | string
    rentalOrderId?: StringWithAggregatesFilter<"Payment"> | string
    amount?: DecimalWithAggregatesFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringWithAggregatesFilter<"Payment"> | string
    method?: EnumPaymentMethodWithAggregatesFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusWithAggregatesFilter<"Payment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableWithAggregatesFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type RentalOrderWhereInput = {
    AND?: RentalOrderWhereInput | RentalOrderWhereInput[]
    OR?: RentalOrderWhereInput[]
    NOT?: RentalOrderWhereInput | RentalOrderWhereInput[]
    id?: StringFilter<"RentalOrder"> | string
    customerId?: StringFilter<"RentalOrder"> | string
    startDate?: DateTimeFilter<"RentalOrder"> | Date | string
    endDate?: DateTimeFilter<"RentalOrder"> | Date | string
    totalAmount?: DecimalFilter<"RentalOrder"> | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFilter<"RentalOrder"> | $Enums.RentalStatus
    createdAt?: DateTimeFilter<"RentalOrder"> | Date | string
    updatedAt?: DateTimeFilter<"RentalOrder"> | Date | string
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: RentalOrderItemListRelationFilter
    payments?: PaymentListRelationFilter
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }

  export type RentalOrderOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    customer?: UserOrderByWithRelationInput
    items?: RentalOrderItemOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    review?: ReviewOrderByWithRelationInput
  }

  export type RentalOrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RentalOrderWhereInput | RentalOrderWhereInput[]
    OR?: RentalOrderWhereInput[]
    NOT?: RentalOrderWhereInput | RentalOrderWhereInput[]
    customerId?: StringFilter<"RentalOrder"> | string
    startDate?: DateTimeFilter<"RentalOrder"> | Date | string
    endDate?: DateTimeFilter<"RentalOrder"> | Date | string
    totalAmount?: DecimalFilter<"RentalOrder"> | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFilter<"RentalOrder"> | $Enums.RentalStatus
    createdAt?: DateTimeFilter<"RentalOrder"> | Date | string
    updatedAt?: DateTimeFilter<"RentalOrder"> | Date | string
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    items?: RentalOrderItemListRelationFilter
    payments?: PaymentListRelationFilter
    review?: XOR<ReviewNullableScalarRelationFilter, ReviewWhereInput> | null
  }, "id">

  export type RentalOrderOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: RentalOrderCountOrderByAggregateInput
    _avg?: RentalOrderAvgOrderByAggregateInput
    _max?: RentalOrderMaxOrderByAggregateInput
    _min?: RentalOrderMinOrderByAggregateInput
    _sum?: RentalOrderSumOrderByAggregateInput
  }

  export type RentalOrderScalarWhereWithAggregatesInput = {
    AND?: RentalOrderScalarWhereWithAggregatesInput | RentalOrderScalarWhereWithAggregatesInput[]
    OR?: RentalOrderScalarWhereWithAggregatesInput[]
    NOT?: RentalOrderScalarWhereWithAggregatesInput | RentalOrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RentalOrder"> | string
    customerId?: StringWithAggregatesFilter<"RentalOrder"> | string
    startDate?: DateTimeWithAggregatesFilter<"RentalOrder"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"RentalOrder"> | Date | string
    totalAmount?: DecimalWithAggregatesFilter<"RentalOrder"> | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusWithAggregatesFilter<"RentalOrder"> | $Enums.RentalStatus
    createdAt?: DateTimeWithAggregatesFilter<"RentalOrder"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RentalOrder"> | Date | string
  }

  export type RentalOrderItemWhereInput = {
    AND?: RentalOrderItemWhereInput | RentalOrderItemWhereInput[]
    OR?: RentalOrderItemWhereInput[]
    NOT?: RentalOrderItemWhereInput | RentalOrderItemWhereInput[]
    id?: StringFilter<"RentalOrderItem"> | string
    rentalOrderId?: StringFilter<"RentalOrderItem"> | string
    gearItemId?: StringFilter<"RentalOrderItem"> | string
    quantity?: IntFilter<"RentalOrderItem"> | number
    price?: DecimalFilter<"RentalOrderItem"> | Decimal | DecimalJsLike | number | string
    rentalOrder?: XOR<RentalOrderScalarRelationFilter, RentalOrderWhereInput>
    gearItem?: XOR<GearItemScalarRelationFilter, GearItemWhereInput>
  }

  export type RentalOrderItemOrderByWithRelationInput = {
    id?: SortOrder
    rentalOrderId?: SortOrder
    gearItemId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    rentalOrder?: RentalOrderOrderByWithRelationInput
    gearItem?: GearItemOrderByWithRelationInput
  }

  export type RentalOrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RentalOrderItemWhereInput | RentalOrderItemWhereInput[]
    OR?: RentalOrderItemWhereInput[]
    NOT?: RentalOrderItemWhereInput | RentalOrderItemWhereInput[]
    rentalOrderId?: StringFilter<"RentalOrderItem"> | string
    gearItemId?: StringFilter<"RentalOrderItem"> | string
    quantity?: IntFilter<"RentalOrderItem"> | number
    price?: DecimalFilter<"RentalOrderItem"> | Decimal | DecimalJsLike | number | string
    rentalOrder?: XOR<RentalOrderScalarRelationFilter, RentalOrderWhereInput>
    gearItem?: XOR<GearItemScalarRelationFilter, GearItemWhereInput>
  }, "id">

  export type RentalOrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    rentalOrderId?: SortOrder
    gearItemId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    _count?: RentalOrderItemCountOrderByAggregateInput
    _avg?: RentalOrderItemAvgOrderByAggregateInput
    _max?: RentalOrderItemMaxOrderByAggregateInput
    _min?: RentalOrderItemMinOrderByAggregateInput
    _sum?: RentalOrderItemSumOrderByAggregateInput
  }

  export type RentalOrderItemScalarWhereWithAggregatesInput = {
    AND?: RentalOrderItemScalarWhereWithAggregatesInput | RentalOrderItemScalarWhereWithAggregatesInput[]
    OR?: RentalOrderItemScalarWhereWithAggregatesInput[]
    NOT?: RentalOrderItemScalarWhereWithAggregatesInput | RentalOrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RentalOrderItem"> | string
    rentalOrderId?: StringWithAggregatesFilter<"RentalOrderItem"> | string
    gearItemId?: StringWithAggregatesFilter<"RentalOrderItem"> | string
    quantity?: IntWithAggregatesFilter<"RentalOrderItem"> | number
    price?: DecimalWithAggregatesFilter<"RentalOrderItem"> | Decimal | DecimalJsLike | number | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: StringFilter<"Review"> | string
    customerId?: StringFilter<"Review"> | string
    gearItemId?: StringFilter<"Review"> | string
    rentalOrderId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    gearItem?: XOR<GearItemScalarRelationFilter, GearItemWhereInput>
    rentalOrder?: XOR<RentalOrderScalarRelationFilter, RentalOrderWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    gearItemId?: SortOrder
    rentalOrderId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customer?: UserOrderByWithRelationInput
    gearItem?: GearItemOrderByWithRelationInput
    rentalOrder?: RentalOrderOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    rentalOrderId?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    customerId?: StringFilter<"Review"> | string
    gearItemId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    customer?: XOR<UserScalarRelationFilter, UserWhereInput>
    gearItem?: XOR<GearItemScalarRelationFilter, GearItemWhereInput>
    rentalOrder?: XOR<RentalOrderScalarRelationFilter, RentalOrderWhereInput>
  }, "id" | "rentalOrderId">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    gearItemId?: SortOrder
    rentalOrderId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Review"> | string
    customerId?: StringWithAggregatesFilter<"Review"> | string
    gearItemId?: StringWithAggregatesFilter<"Review"> | string
    rentalOrderId?: StringWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    gearItems?: GearItemListRelationFilter
    rentalOrders?: RentalOrderListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    gearItems?: GearItemOrderByRelationAggregateInput
    rentalOrders?: RentalOrderOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    phone?: StringNullableFilter<"User"> | string | null
    address?: StringNullableFilter<"User"> | string | null
    status?: EnumUserStatusFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    gearItems?: GearItemListRelationFilter
    rentalOrders?: RentalOrderListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    status?: EnumUserStatusWithAggregatesFilter<"User"> | $Enums.UserStatus
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    description?: string | null
    gearItems?: GearItemCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    gearItems?: GearItemUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gearItems?: GearItemUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    gearItems?: GearItemUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GearItemCreateInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    price: Decimal | DecimalJsLike | number | string
    stockQuantity?: number
    isAvailable?: boolean
    images?: GearItemCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: UserCreateNestedOneWithoutGearItemsInput
    category: CategoryCreateNestedOneWithoutGearItemsInput
    rentalOrderItems?: RentalOrderItemCreateNestedManyWithoutGearItemInput
    reviews?: ReviewCreateNestedManyWithoutGearItemInput
  }

  export type GearItemUncheckedCreateInput = {
    id?: string
    providerId: string
    categoryId: string
    name: string
    description?: string | null
    brand?: string | null
    price: Decimal | DecimalJsLike | number | string
    stockQuantity?: number
    isAvailable?: boolean
    images?: GearItemCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    rentalOrderItems?: RentalOrderItemUncheckedCreateNestedManyWithoutGearItemInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutGearItemInput
  }

  export type GearItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    images?: GearItemUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: UserUpdateOneRequiredWithoutGearItemsNestedInput
    category?: CategoryUpdateOneRequiredWithoutGearItemsNestedInput
    rentalOrderItems?: RentalOrderItemUpdateManyWithoutGearItemNestedInput
    reviews?: ReviewUpdateManyWithoutGearItemNestedInput
  }

  export type GearItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    images?: GearItemUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalOrderItems?: RentalOrderItemUncheckedUpdateManyWithoutGearItemNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutGearItemNestedInput
  }

  export type GearItemCreateManyInput = {
    id?: string
    providerId: string
    categoryId: string
    name: string
    description?: string | null
    brand?: string | null
    price: Decimal | DecimalJsLike | number | string
    stockQuantity?: number
    isAvailable?: boolean
    images?: GearItemCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GearItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    images?: GearItemUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GearItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    images?: GearItemUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    transactionId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    rentalOrder: RentalOrderCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    transactionId: string
    rentalOrderId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalOrder?: RentalOrderUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    rentalOrderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    transactionId: string
    rentalOrderId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    rentalOrderId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalOrderCreateInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutRentalOrdersInput
    items?: RentalOrderItemCreateNestedManyWithoutRentalOrderInput
    payments?: PaymentCreateNestedManyWithoutRentalOrderInput
    review?: ReviewCreateNestedOneWithoutRentalOrderInput
  }

  export type RentalOrderUncheckedCreateInput = {
    id?: string
    customerId: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: RentalOrderItemUncheckedCreateNestedManyWithoutRentalOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutRentalOrderInput
    review?: ReviewUncheckedCreateNestedOneWithoutRentalOrderInput
  }

  export type RentalOrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutRentalOrdersNestedInput
    items?: RentalOrderItemUpdateManyWithoutRentalOrderNestedInput
    payments?: PaymentUpdateManyWithoutRentalOrderNestedInput
    review?: ReviewUpdateOneWithoutRentalOrderNestedInput
  }

  export type RentalOrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RentalOrderItemUncheckedUpdateManyWithoutRentalOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutRentalOrderNestedInput
    review?: ReviewUncheckedUpdateOneWithoutRentalOrderNestedInput
  }

  export type RentalOrderCreateManyInput = {
    id?: string
    customerId: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalOrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalOrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalOrderItemCreateInput = {
    id?: string
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    rentalOrder: RentalOrderCreateNestedOneWithoutItemsInput
    gearItem: GearItemCreateNestedOneWithoutRentalOrderItemsInput
  }

  export type RentalOrderItemUncheckedCreateInput = {
    id?: string
    rentalOrderId: string
    gearItemId: string
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type RentalOrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rentalOrder?: RentalOrderUpdateOneRequiredWithoutItemsNestedInput
    gearItem?: GearItemUpdateOneRequiredWithoutRentalOrderItemsNestedInput
  }

  export type RentalOrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalOrderId?: StringFieldUpdateOperationsInput | string
    gearItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RentalOrderItemCreateManyInput = {
    id?: string
    rentalOrderId: string
    gearItemId: string
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type RentalOrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RentalOrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalOrderId?: StringFieldUpdateOperationsInput | string
    gearItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    customer: UserCreateNestedOneWithoutReviewsInput
    gearItem: GearItemCreateNestedOneWithoutReviewsInput
    rentalOrder: RentalOrderCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    customerId: string
    gearItemId: string
    rentalOrderId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutReviewsNestedInput
    gearItem?: GearItemUpdateOneRequiredWithoutReviewsNestedInput
    rentalOrder?: RentalOrderUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    gearItemId?: StringFieldUpdateOperationsInput | string
    rentalOrderId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    customerId: string
    gearItemId: string
    rentalOrderId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    gearItemId?: StringFieldUpdateOperationsInput | string
    rentalOrderId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    gearItems?: GearItemCreateNestedManyWithoutProviderInput
    rentalOrders?: RentalOrderCreateNestedManyWithoutCustomerInput
    reviews?: ReviewCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    gearItems?: GearItemUncheckedCreateNestedManyWithoutProviderInput
    rentalOrders?: RentalOrderUncheckedCreateNestedManyWithoutCustomerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gearItems?: GearItemUpdateManyWithoutProviderNestedInput
    rentalOrders?: RentalOrderUpdateManyWithoutCustomerNestedInput
    reviews?: ReviewUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gearItems?: GearItemUncheckedUpdateManyWithoutProviderNestedInput
    rentalOrders?: RentalOrderUncheckedUpdateManyWithoutCustomerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type GearItemListRelationFilter = {
    every?: GearItemWhereInput
    some?: GearItemWhereInput
    none?: GearItemWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type GearItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type RentalOrderItemListRelationFilter = {
    every?: RentalOrderItemWhereInput
    some?: RentalOrderItemWhereInput
    none?: RentalOrderItemWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type RentalOrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GearItemCountOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    stockQuantity?: SortOrder
    isAvailable?: SortOrder
    images?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GearItemAvgOrderByAggregateInput = {
    price?: SortOrder
    stockQuantity?: SortOrder
  }

  export type GearItemMaxOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    stockQuantity?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GearItemMinOrderByAggregateInput = {
    id?: SortOrder
    providerId?: SortOrder
    categoryId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    brand?: SortOrder
    price?: SortOrder
    stockQuantity?: SortOrder
    isAvailable?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type GearItemSumOrderByAggregateInput = {
    price?: SortOrder
    stockQuantity?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type EnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type RentalOrderScalarRelationFilter = {
    is?: RentalOrderWhereInput
    isNot?: RentalOrderWhereInput
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    rentalOrderId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    rentalOrderId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    transactionId?: SortOrder
    rentalOrderId?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    method?: SortOrder
    status?: SortOrder
    paidAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PaymentSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type EnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRentalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusFilter<$PrismaModel> | $Enums.RentalStatus
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type ReviewNullableScalarRelationFilter = {
    is?: ReviewWhereInput | null
    isNot?: ReviewWhereInput | null
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RentalOrderCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalOrderAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type RentalOrderMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalOrderMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    totalAmount?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type RentalOrderSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type EnumRentalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel> | $Enums.RentalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRentalStatusFilter<$PrismaModel>
    _max?: NestedEnumRentalStatusFilter<$PrismaModel>
  }

  export type GearItemScalarRelationFilter = {
    is?: GearItemWhereInput
    isNot?: GearItemWhereInput
  }

  export type RentalOrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    rentalOrderId?: SortOrder
    gearItemId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type RentalOrderItemAvgOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type RentalOrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    rentalOrderId?: SortOrder
    gearItemId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type RentalOrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    rentalOrderId?: SortOrder
    gearItemId?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
  }

  export type RentalOrderItemSumOrderByAggregateInput = {
    quantity?: SortOrder
    price?: SortOrder
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    gearItemId?: SortOrder
    rentalOrderId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    gearItemId?: SortOrder
    rentalOrderId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    gearItemId?: SortOrder
    rentalOrderId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type RentalOrderListRelationFilter = {
    every?: RentalOrderWhereInput
    some?: RentalOrderWhereInput
    none?: RentalOrderWhereInput
  }

  export type RentalOrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type GearItemCreateNestedManyWithoutCategoryInput = {
    create?: XOR<GearItemCreateWithoutCategoryInput, GearItemUncheckedCreateWithoutCategoryInput> | GearItemCreateWithoutCategoryInput[] | GearItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GearItemCreateOrConnectWithoutCategoryInput | GearItemCreateOrConnectWithoutCategoryInput[]
    createMany?: GearItemCreateManyCategoryInputEnvelope
    connect?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
  }

  export type GearItemUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<GearItemCreateWithoutCategoryInput, GearItemUncheckedCreateWithoutCategoryInput> | GearItemCreateWithoutCategoryInput[] | GearItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GearItemCreateOrConnectWithoutCategoryInput | GearItemCreateOrConnectWithoutCategoryInput[]
    createMany?: GearItemCreateManyCategoryInputEnvelope
    connect?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type GearItemUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<GearItemCreateWithoutCategoryInput, GearItemUncheckedCreateWithoutCategoryInput> | GearItemCreateWithoutCategoryInput[] | GearItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GearItemCreateOrConnectWithoutCategoryInput | GearItemCreateOrConnectWithoutCategoryInput[]
    upsert?: GearItemUpsertWithWhereUniqueWithoutCategoryInput | GearItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: GearItemCreateManyCategoryInputEnvelope
    set?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    disconnect?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    delete?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    connect?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    update?: GearItemUpdateWithWhereUniqueWithoutCategoryInput | GearItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: GearItemUpdateManyWithWhereWithoutCategoryInput | GearItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: GearItemScalarWhereInput | GearItemScalarWhereInput[]
  }

  export type GearItemUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<GearItemCreateWithoutCategoryInput, GearItemUncheckedCreateWithoutCategoryInput> | GearItemCreateWithoutCategoryInput[] | GearItemUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: GearItemCreateOrConnectWithoutCategoryInput | GearItemCreateOrConnectWithoutCategoryInput[]
    upsert?: GearItemUpsertWithWhereUniqueWithoutCategoryInput | GearItemUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: GearItemCreateManyCategoryInputEnvelope
    set?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    disconnect?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    delete?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    connect?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    update?: GearItemUpdateWithWhereUniqueWithoutCategoryInput | GearItemUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: GearItemUpdateManyWithWhereWithoutCategoryInput | GearItemUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: GearItemScalarWhereInput | GearItemScalarWhereInput[]
  }

  export type GearItemCreateimagesInput = {
    set: string[]
  }

  export type UserCreateNestedOneWithoutGearItemsInput = {
    create?: XOR<UserCreateWithoutGearItemsInput, UserUncheckedCreateWithoutGearItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGearItemsInput
    connect?: UserWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutGearItemsInput = {
    create?: XOR<CategoryCreateWithoutGearItemsInput, CategoryUncheckedCreateWithoutGearItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutGearItemsInput
    connect?: CategoryWhereUniqueInput
  }

  export type RentalOrderItemCreateNestedManyWithoutGearItemInput = {
    create?: XOR<RentalOrderItemCreateWithoutGearItemInput, RentalOrderItemUncheckedCreateWithoutGearItemInput> | RentalOrderItemCreateWithoutGearItemInput[] | RentalOrderItemUncheckedCreateWithoutGearItemInput[]
    connectOrCreate?: RentalOrderItemCreateOrConnectWithoutGearItemInput | RentalOrderItemCreateOrConnectWithoutGearItemInput[]
    createMany?: RentalOrderItemCreateManyGearItemInputEnvelope
    connect?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutGearItemInput = {
    create?: XOR<ReviewCreateWithoutGearItemInput, ReviewUncheckedCreateWithoutGearItemInput> | ReviewCreateWithoutGearItemInput[] | ReviewUncheckedCreateWithoutGearItemInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGearItemInput | ReviewCreateOrConnectWithoutGearItemInput[]
    createMany?: ReviewCreateManyGearItemInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type RentalOrderItemUncheckedCreateNestedManyWithoutGearItemInput = {
    create?: XOR<RentalOrderItemCreateWithoutGearItemInput, RentalOrderItemUncheckedCreateWithoutGearItemInput> | RentalOrderItemCreateWithoutGearItemInput[] | RentalOrderItemUncheckedCreateWithoutGearItemInput[]
    connectOrCreate?: RentalOrderItemCreateOrConnectWithoutGearItemInput | RentalOrderItemCreateOrConnectWithoutGearItemInput[]
    createMany?: RentalOrderItemCreateManyGearItemInputEnvelope
    connect?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutGearItemInput = {
    create?: XOR<ReviewCreateWithoutGearItemInput, ReviewUncheckedCreateWithoutGearItemInput> | ReviewCreateWithoutGearItemInput[] | ReviewUncheckedCreateWithoutGearItemInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGearItemInput | ReviewCreateOrConnectWithoutGearItemInput[]
    createMany?: ReviewCreateManyGearItemInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type GearItemUpdateimagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutGearItemsNestedInput = {
    create?: XOR<UserCreateWithoutGearItemsInput, UserUncheckedCreateWithoutGearItemsInput>
    connectOrCreate?: UserCreateOrConnectWithoutGearItemsInput
    upsert?: UserUpsertWithoutGearItemsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutGearItemsInput, UserUpdateWithoutGearItemsInput>, UserUncheckedUpdateWithoutGearItemsInput>
  }

  export type CategoryUpdateOneRequiredWithoutGearItemsNestedInput = {
    create?: XOR<CategoryCreateWithoutGearItemsInput, CategoryUncheckedCreateWithoutGearItemsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutGearItemsInput
    upsert?: CategoryUpsertWithoutGearItemsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutGearItemsInput, CategoryUpdateWithoutGearItemsInput>, CategoryUncheckedUpdateWithoutGearItemsInput>
  }

  export type RentalOrderItemUpdateManyWithoutGearItemNestedInput = {
    create?: XOR<RentalOrderItemCreateWithoutGearItemInput, RentalOrderItemUncheckedCreateWithoutGearItemInput> | RentalOrderItemCreateWithoutGearItemInput[] | RentalOrderItemUncheckedCreateWithoutGearItemInput[]
    connectOrCreate?: RentalOrderItemCreateOrConnectWithoutGearItemInput | RentalOrderItemCreateOrConnectWithoutGearItemInput[]
    upsert?: RentalOrderItemUpsertWithWhereUniqueWithoutGearItemInput | RentalOrderItemUpsertWithWhereUniqueWithoutGearItemInput[]
    createMany?: RentalOrderItemCreateManyGearItemInputEnvelope
    set?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    disconnect?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    delete?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    connect?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    update?: RentalOrderItemUpdateWithWhereUniqueWithoutGearItemInput | RentalOrderItemUpdateWithWhereUniqueWithoutGearItemInput[]
    updateMany?: RentalOrderItemUpdateManyWithWhereWithoutGearItemInput | RentalOrderItemUpdateManyWithWhereWithoutGearItemInput[]
    deleteMany?: RentalOrderItemScalarWhereInput | RentalOrderItemScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutGearItemNestedInput = {
    create?: XOR<ReviewCreateWithoutGearItemInput, ReviewUncheckedCreateWithoutGearItemInput> | ReviewCreateWithoutGearItemInput[] | ReviewUncheckedCreateWithoutGearItemInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGearItemInput | ReviewCreateOrConnectWithoutGearItemInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutGearItemInput | ReviewUpsertWithWhereUniqueWithoutGearItemInput[]
    createMany?: ReviewCreateManyGearItemInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutGearItemInput | ReviewUpdateWithWhereUniqueWithoutGearItemInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutGearItemInput | ReviewUpdateManyWithWhereWithoutGearItemInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type RentalOrderItemUncheckedUpdateManyWithoutGearItemNestedInput = {
    create?: XOR<RentalOrderItemCreateWithoutGearItemInput, RentalOrderItemUncheckedCreateWithoutGearItemInput> | RentalOrderItemCreateWithoutGearItemInput[] | RentalOrderItemUncheckedCreateWithoutGearItemInput[]
    connectOrCreate?: RentalOrderItemCreateOrConnectWithoutGearItemInput | RentalOrderItemCreateOrConnectWithoutGearItemInput[]
    upsert?: RentalOrderItemUpsertWithWhereUniqueWithoutGearItemInput | RentalOrderItemUpsertWithWhereUniqueWithoutGearItemInput[]
    createMany?: RentalOrderItemCreateManyGearItemInputEnvelope
    set?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    disconnect?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    delete?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    connect?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    update?: RentalOrderItemUpdateWithWhereUniqueWithoutGearItemInput | RentalOrderItemUpdateWithWhereUniqueWithoutGearItemInput[]
    updateMany?: RentalOrderItemUpdateManyWithWhereWithoutGearItemInput | RentalOrderItemUpdateManyWithWhereWithoutGearItemInput[]
    deleteMany?: RentalOrderItemScalarWhereInput | RentalOrderItemScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutGearItemNestedInput = {
    create?: XOR<ReviewCreateWithoutGearItemInput, ReviewUncheckedCreateWithoutGearItemInput> | ReviewCreateWithoutGearItemInput[] | ReviewUncheckedCreateWithoutGearItemInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutGearItemInput | ReviewCreateOrConnectWithoutGearItemInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutGearItemInput | ReviewUpsertWithWhereUniqueWithoutGearItemInput[]
    createMany?: ReviewCreateManyGearItemInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutGearItemInput | ReviewUpdateWithWhereUniqueWithoutGearItemInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutGearItemInput | ReviewUpdateManyWithWhereWithoutGearItemInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type RentalOrderCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<RentalOrderCreateWithoutPaymentsInput, RentalOrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: RentalOrderCreateOrConnectWithoutPaymentsInput
    connect?: RentalOrderWhereUniqueInput
  }

  export type EnumPaymentMethodFieldUpdateOperationsInput = {
    set?: $Enums.PaymentMethod
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type RentalOrderUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<RentalOrderCreateWithoutPaymentsInput, RentalOrderUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: RentalOrderCreateOrConnectWithoutPaymentsInput
    upsert?: RentalOrderUpsertWithoutPaymentsInput
    connect?: RentalOrderWhereUniqueInput
    update?: XOR<XOR<RentalOrderUpdateToOneWithWhereWithoutPaymentsInput, RentalOrderUpdateWithoutPaymentsInput>, RentalOrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserCreateNestedOneWithoutRentalOrdersInput = {
    create?: XOR<UserCreateWithoutRentalOrdersInput, UserUncheckedCreateWithoutRentalOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type RentalOrderItemCreateNestedManyWithoutRentalOrderInput = {
    create?: XOR<RentalOrderItemCreateWithoutRentalOrderInput, RentalOrderItemUncheckedCreateWithoutRentalOrderInput> | RentalOrderItemCreateWithoutRentalOrderInput[] | RentalOrderItemUncheckedCreateWithoutRentalOrderInput[]
    connectOrCreate?: RentalOrderItemCreateOrConnectWithoutRentalOrderInput | RentalOrderItemCreateOrConnectWithoutRentalOrderInput[]
    createMany?: RentalOrderItemCreateManyRentalOrderInputEnvelope
    connect?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutRentalOrderInput = {
    create?: XOR<PaymentCreateWithoutRentalOrderInput, PaymentUncheckedCreateWithoutRentalOrderInput> | PaymentCreateWithoutRentalOrderInput[] | PaymentUncheckedCreateWithoutRentalOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRentalOrderInput | PaymentCreateOrConnectWithoutRentalOrderInput[]
    createMany?: PaymentCreateManyRentalOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ReviewCreateNestedOneWithoutRentalOrderInput = {
    create?: XOR<ReviewCreateWithoutRentalOrderInput, ReviewUncheckedCreateWithoutRentalOrderInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutRentalOrderInput
    connect?: ReviewWhereUniqueInput
  }

  export type RentalOrderItemUncheckedCreateNestedManyWithoutRentalOrderInput = {
    create?: XOR<RentalOrderItemCreateWithoutRentalOrderInput, RentalOrderItemUncheckedCreateWithoutRentalOrderInput> | RentalOrderItemCreateWithoutRentalOrderInput[] | RentalOrderItemUncheckedCreateWithoutRentalOrderInput[]
    connectOrCreate?: RentalOrderItemCreateOrConnectWithoutRentalOrderInput | RentalOrderItemCreateOrConnectWithoutRentalOrderInput[]
    createMany?: RentalOrderItemCreateManyRentalOrderInputEnvelope
    connect?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutRentalOrderInput = {
    create?: XOR<PaymentCreateWithoutRentalOrderInput, PaymentUncheckedCreateWithoutRentalOrderInput> | PaymentCreateWithoutRentalOrderInput[] | PaymentUncheckedCreateWithoutRentalOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRentalOrderInput | PaymentCreateOrConnectWithoutRentalOrderInput[]
    createMany?: PaymentCreateManyRentalOrderInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedOneWithoutRentalOrderInput = {
    create?: XOR<ReviewCreateWithoutRentalOrderInput, ReviewUncheckedCreateWithoutRentalOrderInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutRentalOrderInput
    connect?: ReviewWhereUniqueInput
  }

  export type EnumRentalStatusFieldUpdateOperationsInput = {
    set?: $Enums.RentalStatus
  }

  export type UserUpdateOneRequiredWithoutRentalOrdersNestedInput = {
    create?: XOR<UserCreateWithoutRentalOrdersInput, UserUncheckedCreateWithoutRentalOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutRentalOrdersInput
    upsert?: UserUpsertWithoutRentalOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRentalOrdersInput, UserUpdateWithoutRentalOrdersInput>, UserUncheckedUpdateWithoutRentalOrdersInput>
  }

  export type RentalOrderItemUpdateManyWithoutRentalOrderNestedInput = {
    create?: XOR<RentalOrderItemCreateWithoutRentalOrderInput, RentalOrderItemUncheckedCreateWithoutRentalOrderInput> | RentalOrderItemCreateWithoutRentalOrderInput[] | RentalOrderItemUncheckedCreateWithoutRentalOrderInput[]
    connectOrCreate?: RentalOrderItemCreateOrConnectWithoutRentalOrderInput | RentalOrderItemCreateOrConnectWithoutRentalOrderInput[]
    upsert?: RentalOrderItemUpsertWithWhereUniqueWithoutRentalOrderInput | RentalOrderItemUpsertWithWhereUniqueWithoutRentalOrderInput[]
    createMany?: RentalOrderItemCreateManyRentalOrderInputEnvelope
    set?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    disconnect?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    delete?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    connect?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    update?: RentalOrderItemUpdateWithWhereUniqueWithoutRentalOrderInput | RentalOrderItemUpdateWithWhereUniqueWithoutRentalOrderInput[]
    updateMany?: RentalOrderItemUpdateManyWithWhereWithoutRentalOrderInput | RentalOrderItemUpdateManyWithWhereWithoutRentalOrderInput[]
    deleteMany?: RentalOrderItemScalarWhereInput | RentalOrderItemScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutRentalOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutRentalOrderInput, PaymentUncheckedCreateWithoutRentalOrderInput> | PaymentCreateWithoutRentalOrderInput[] | PaymentUncheckedCreateWithoutRentalOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRentalOrderInput | PaymentCreateOrConnectWithoutRentalOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutRentalOrderInput | PaymentUpsertWithWhereUniqueWithoutRentalOrderInput[]
    createMany?: PaymentCreateManyRentalOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutRentalOrderInput | PaymentUpdateWithWhereUniqueWithoutRentalOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutRentalOrderInput | PaymentUpdateManyWithWhereWithoutRentalOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ReviewUpdateOneWithoutRentalOrderNestedInput = {
    create?: XOR<ReviewCreateWithoutRentalOrderInput, ReviewUncheckedCreateWithoutRentalOrderInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutRentalOrderInput
    upsert?: ReviewUpsertWithoutRentalOrderInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutRentalOrderInput, ReviewUpdateWithoutRentalOrderInput>, ReviewUncheckedUpdateWithoutRentalOrderInput>
  }

  export type RentalOrderItemUncheckedUpdateManyWithoutRentalOrderNestedInput = {
    create?: XOR<RentalOrderItemCreateWithoutRentalOrderInput, RentalOrderItemUncheckedCreateWithoutRentalOrderInput> | RentalOrderItemCreateWithoutRentalOrderInput[] | RentalOrderItemUncheckedCreateWithoutRentalOrderInput[]
    connectOrCreate?: RentalOrderItemCreateOrConnectWithoutRentalOrderInput | RentalOrderItemCreateOrConnectWithoutRentalOrderInput[]
    upsert?: RentalOrderItemUpsertWithWhereUniqueWithoutRentalOrderInput | RentalOrderItemUpsertWithWhereUniqueWithoutRentalOrderInput[]
    createMany?: RentalOrderItemCreateManyRentalOrderInputEnvelope
    set?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    disconnect?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    delete?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    connect?: RentalOrderItemWhereUniqueInput | RentalOrderItemWhereUniqueInput[]
    update?: RentalOrderItemUpdateWithWhereUniqueWithoutRentalOrderInput | RentalOrderItemUpdateWithWhereUniqueWithoutRentalOrderInput[]
    updateMany?: RentalOrderItemUpdateManyWithWhereWithoutRentalOrderInput | RentalOrderItemUpdateManyWithWhereWithoutRentalOrderInput[]
    deleteMany?: RentalOrderItemScalarWhereInput | RentalOrderItemScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutRentalOrderNestedInput = {
    create?: XOR<PaymentCreateWithoutRentalOrderInput, PaymentUncheckedCreateWithoutRentalOrderInput> | PaymentCreateWithoutRentalOrderInput[] | PaymentUncheckedCreateWithoutRentalOrderInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutRentalOrderInput | PaymentCreateOrConnectWithoutRentalOrderInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutRentalOrderInput | PaymentUpsertWithWhereUniqueWithoutRentalOrderInput[]
    createMany?: PaymentCreateManyRentalOrderInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutRentalOrderInput | PaymentUpdateWithWhereUniqueWithoutRentalOrderInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutRentalOrderInput | PaymentUpdateManyWithWhereWithoutRentalOrderInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateOneWithoutRentalOrderNestedInput = {
    create?: XOR<ReviewCreateWithoutRentalOrderInput, ReviewUncheckedCreateWithoutRentalOrderInput>
    connectOrCreate?: ReviewCreateOrConnectWithoutRentalOrderInput
    upsert?: ReviewUpsertWithoutRentalOrderInput
    disconnect?: ReviewWhereInput | boolean
    delete?: ReviewWhereInput | boolean
    connect?: ReviewWhereUniqueInput
    update?: XOR<XOR<ReviewUpdateToOneWithWhereWithoutRentalOrderInput, ReviewUpdateWithoutRentalOrderInput>, ReviewUncheckedUpdateWithoutRentalOrderInput>
  }

  export type RentalOrderCreateNestedOneWithoutItemsInput = {
    create?: XOR<RentalOrderCreateWithoutItemsInput, RentalOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RentalOrderCreateOrConnectWithoutItemsInput
    connect?: RentalOrderWhereUniqueInput
  }

  export type GearItemCreateNestedOneWithoutRentalOrderItemsInput = {
    create?: XOR<GearItemCreateWithoutRentalOrderItemsInput, GearItemUncheckedCreateWithoutRentalOrderItemsInput>
    connectOrCreate?: GearItemCreateOrConnectWithoutRentalOrderItemsInput
    connect?: GearItemWhereUniqueInput
  }

  export type RentalOrderUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<RentalOrderCreateWithoutItemsInput, RentalOrderUncheckedCreateWithoutItemsInput>
    connectOrCreate?: RentalOrderCreateOrConnectWithoutItemsInput
    upsert?: RentalOrderUpsertWithoutItemsInput
    connect?: RentalOrderWhereUniqueInput
    update?: XOR<XOR<RentalOrderUpdateToOneWithWhereWithoutItemsInput, RentalOrderUpdateWithoutItemsInput>, RentalOrderUncheckedUpdateWithoutItemsInput>
  }

  export type GearItemUpdateOneRequiredWithoutRentalOrderItemsNestedInput = {
    create?: XOR<GearItemCreateWithoutRentalOrderItemsInput, GearItemUncheckedCreateWithoutRentalOrderItemsInput>
    connectOrCreate?: GearItemCreateOrConnectWithoutRentalOrderItemsInput
    upsert?: GearItemUpsertWithoutRentalOrderItemsInput
    connect?: GearItemWhereUniqueInput
    update?: XOR<XOR<GearItemUpdateToOneWithWhereWithoutRentalOrderItemsInput, GearItemUpdateWithoutRentalOrderItemsInput>, GearItemUncheckedUpdateWithoutRentalOrderItemsInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type GearItemCreateNestedOneWithoutReviewsInput = {
    create?: XOR<GearItemCreateWithoutReviewsInput, GearItemUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: GearItemCreateOrConnectWithoutReviewsInput
    connect?: GearItemWhereUniqueInput
  }

  export type RentalOrderCreateNestedOneWithoutReviewInput = {
    create?: XOR<RentalOrderCreateWithoutReviewInput, RentalOrderUncheckedCreateWithoutReviewInput>
    connectOrCreate?: RentalOrderCreateOrConnectWithoutReviewInput
    connect?: RentalOrderWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type GearItemUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<GearItemCreateWithoutReviewsInput, GearItemUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: GearItemCreateOrConnectWithoutReviewsInput
    upsert?: GearItemUpsertWithoutReviewsInput
    connect?: GearItemWhereUniqueInput
    update?: XOR<XOR<GearItemUpdateToOneWithWhereWithoutReviewsInput, GearItemUpdateWithoutReviewsInput>, GearItemUncheckedUpdateWithoutReviewsInput>
  }

  export type RentalOrderUpdateOneRequiredWithoutReviewNestedInput = {
    create?: XOR<RentalOrderCreateWithoutReviewInput, RentalOrderUncheckedCreateWithoutReviewInput>
    connectOrCreate?: RentalOrderCreateOrConnectWithoutReviewInput
    upsert?: RentalOrderUpsertWithoutReviewInput
    connect?: RentalOrderWhereUniqueInput
    update?: XOR<XOR<RentalOrderUpdateToOneWithWhereWithoutReviewInput, RentalOrderUpdateWithoutReviewInput>, RentalOrderUncheckedUpdateWithoutReviewInput>
  }

  export type GearItemCreateNestedManyWithoutProviderInput = {
    create?: XOR<GearItemCreateWithoutProviderInput, GearItemUncheckedCreateWithoutProviderInput> | GearItemCreateWithoutProviderInput[] | GearItemUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: GearItemCreateOrConnectWithoutProviderInput | GearItemCreateOrConnectWithoutProviderInput[]
    createMany?: GearItemCreateManyProviderInputEnvelope
    connect?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
  }

  export type RentalOrderCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RentalOrderCreateWithoutCustomerInput, RentalOrderUncheckedCreateWithoutCustomerInput> | RentalOrderCreateWithoutCustomerInput[] | RentalOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RentalOrderCreateOrConnectWithoutCustomerInput | RentalOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: RentalOrderCreateManyCustomerInputEnvelope
    connect?: RentalOrderWhereUniqueInput | RentalOrderWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type GearItemUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<GearItemCreateWithoutProviderInput, GearItemUncheckedCreateWithoutProviderInput> | GearItemCreateWithoutProviderInput[] | GearItemUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: GearItemCreateOrConnectWithoutProviderInput | GearItemCreateOrConnectWithoutProviderInput[]
    createMany?: GearItemCreateManyProviderInputEnvelope
    connect?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
  }

  export type RentalOrderUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<RentalOrderCreateWithoutCustomerInput, RentalOrderUncheckedCreateWithoutCustomerInput> | RentalOrderCreateWithoutCustomerInput[] | RentalOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RentalOrderCreateOrConnectWithoutCustomerInput | RentalOrderCreateOrConnectWithoutCustomerInput[]
    createMany?: RentalOrderCreateManyCustomerInputEnvelope
    connect?: RentalOrderWhereUniqueInput | RentalOrderWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumUserStatusFieldUpdateOperationsInput = {
    set?: $Enums.UserStatus
  }

  export type GearItemUpdateManyWithoutProviderNestedInput = {
    create?: XOR<GearItemCreateWithoutProviderInput, GearItemUncheckedCreateWithoutProviderInput> | GearItemCreateWithoutProviderInput[] | GearItemUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: GearItemCreateOrConnectWithoutProviderInput | GearItemCreateOrConnectWithoutProviderInput[]
    upsert?: GearItemUpsertWithWhereUniqueWithoutProviderInput | GearItemUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: GearItemCreateManyProviderInputEnvelope
    set?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    disconnect?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    delete?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    connect?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    update?: GearItemUpdateWithWhereUniqueWithoutProviderInput | GearItemUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: GearItemUpdateManyWithWhereWithoutProviderInput | GearItemUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: GearItemScalarWhereInput | GearItemScalarWhereInput[]
  }

  export type RentalOrderUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RentalOrderCreateWithoutCustomerInput, RentalOrderUncheckedCreateWithoutCustomerInput> | RentalOrderCreateWithoutCustomerInput[] | RentalOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RentalOrderCreateOrConnectWithoutCustomerInput | RentalOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: RentalOrderUpsertWithWhereUniqueWithoutCustomerInput | RentalOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RentalOrderCreateManyCustomerInputEnvelope
    set?: RentalOrderWhereUniqueInput | RentalOrderWhereUniqueInput[]
    disconnect?: RentalOrderWhereUniqueInput | RentalOrderWhereUniqueInput[]
    delete?: RentalOrderWhereUniqueInput | RentalOrderWhereUniqueInput[]
    connect?: RentalOrderWhereUniqueInput | RentalOrderWhereUniqueInput[]
    update?: RentalOrderUpdateWithWhereUniqueWithoutCustomerInput | RentalOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RentalOrderUpdateManyWithWhereWithoutCustomerInput | RentalOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RentalOrderScalarWhereInput | RentalOrderScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCustomerInput | ReviewUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCustomerInput | ReviewUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCustomerInput | ReviewUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type GearItemUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<GearItemCreateWithoutProviderInput, GearItemUncheckedCreateWithoutProviderInput> | GearItemCreateWithoutProviderInput[] | GearItemUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: GearItemCreateOrConnectWithoutProviderInput | GearItemCreateOrConnectWithoutProviderInput[]
    upsert?: GearItemUpsertWithWhereUniqueWithoutProviderInput | GearItemUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: GearItemCreateManyProviderInputEnvelope
    set?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    disconnect?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    delete?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    connect?: GearItemWhereUniqueInput | GearItemWhereUniqueInput[]
    update?: GearItemUpdateWithWhereUniqueWithoutProviderInput | GearItemUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: GearItemUpdateManyWithWhereWithoutProviderInput | GearItemUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: GearItemScalarWhereInput | GearItemScalarWhereInput[]
  }

  export type RentalOrderUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<RentalOrderCreateWithoutCustomerInput, RentalOrderUncheckedCreateWithoutCustomerInput> | RentalOrderCreateWithoutCustomerInput[] | RentalOrderUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: RentalOrderCreateOrConnectWithoutCustomerInput | RentalOrderCreateOrConnectWithoutCustomerInput[]
    upsert?: RentalOrderUpsertWithWhereUniqueWithoutCustomerInput | RentalOrderUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: RentalOrderCreateManyCustomerInputEnvelope
    set?: RentalOrderWhereUniqueInput | RentalOrderWhereUniqueInput[]
    disconnect?: RentalOrderWhereUniqueInput | RentalOrderWhereUniqueInput[]
    delete?: RentalOrderWhereUniqueInput | RentalOrderWhereUniqueInput[]
    connect?: RentalOrderWhereUniqueInput | RentalOrderWhereUniqueInput[]
    update?: RentalOrderUpdateWithWhereUniqueWithoutCustomerInput | RentalOrderUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: RentalOrderUpdateManyWithWhereWithoutCustomerInput | RentalOrderUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: RentalOrderScalarWhereInput | RentalOrderScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput> | ReviewCreateWithoutCustomerInput[] | ReviewUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutCustomerInput | ReviewCreateOrConnectWithoutCustomerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutCustomerInput | ReviewUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: ReviewCreateManyCustomerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutCustomerInput | ReviewUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutCustomerInput | ReviewUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumPaymentMethodFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodFilter<$PrismaModel> | $Enums.PaymentMethod
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentMethod | EnumPaymentMethodFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentMethod[] | ListEnumPaymentMethodFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentMethodWithAggregatesFilter<$PrismaModel> | $Enums.PaymentMethod
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentMethodFilter<$PrismaModel>
    _max?: NestedEnumPaymentMethodFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRentalStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusFilter<$PrismaModel> | $Enums.RentalStatus
  }

  export type NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RentalStatus | EnumRentalStatusFieldRefInput<$PrismaModel>
    in?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.RentalStatus[] | ListEnumRentalStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumRentalStatusWithAggregatesFilter<$PrismaModel> | $Enums.RentalStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRentalStatusFilter<$PrismaModel>
    _max?: NestedEnumRentalStatusFilter<$PrismaModel>
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumUserStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusFilter<$PrismaModel> | $Enums.UserStatus
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumUserStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserStatus | EnumUserStatusFieldRefInput<$PrismaModel>
    in?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserStatus[] | ListEnumUserStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumUserStatusWithAggregatesFilter<$PrismaModel> | $Enums.UserStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserStatusFilter<$PrismaModel>
    _max?: NestedEnumUserStatusFilter<$PrismaModel>
  }

  export type GearItemCreateWithoutCategoryInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    price: Decimal | DecimalJsLike | number | string
    stockQuantity?: number
    isAvailable?: boolean
    images?: GearItemCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: UserCreateNestedOneWithoutGearItemsInput
    rentalOrderItems?: RentalOrderItemCreateNestedManyWithoutGearItemInput
    reviews?: ReviewCreateNestedManyWithoutGearItemInput
  }

  export type GearItemUncheckedCreateWithoutCategoryInput = {
    id?: string
    providerId: string
    name: string
    description?: string | null
    brand?: string | null
    price: Decimal | DecimalJsLike | number | string
    stockQuantity?: number
    isAvailable?: boolean
    images?: GearItemCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    rentalOrderItems?: RentalOrderItemUncheckedCreateNestedManyWithoutGearItemInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutGearItemInput
  }

  export type GearItemCreateOrConnectWithoutCategoryInput = {
    where: GearItemWhereUniqueInput
    create: XOR<GearItemCreateWithoutCategoryInput, GearItemUncheckedCreateWithoutCategoryInput>
  }

  export type GearItemCreateManyCategoryInputEnvelope = {
    data: GearItemCreateManyCategoryInput | GearItemCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type GearItemUpsertWithWhereUniqueWithoutCategoryInput = {
    where: GearItemWhereUniqueInput
    update: XOR<GearItemUpdateWithoutCategoryInput, GearItemUncheckedUpdateWithoutCategoryInput>
    create: XOR<GearItemCreateWithoutCategoryInput, GearItemUncheckedCreateWithoutCategoryInput>
  }

  export type GearItemUpdateWithWhereUniqueWithoutCategoryInput = {
    where: GearItemWhereUniqueInput
    data: XOR<GearItemUpdateWithoutCategoryInput, GearItemUncheckedUpdateWithoutCategoryInput>
  }

  export type GearItemUpdateManyWithWhereWithoutCategoryInput = {
    where: GearItemScalarWhereInput
    data: XOR<GearItemUpdateManyMutationInput, GearItemUncheckedUpdateManyWithoutCategoryInput>
  }

  export type GearItemScalarWhereInput = {
    AND?: GearItemScalarWhereInput | GearItemScalarWhereInput[]
    OR?: GearItemScalarWhereInput[]
    NOT?: GearItemScalarWhereInput | GearItemScalarWhereInput[]
    id?: StringFilter<"GearItem"> | string
    providerId?: StringFilter<"GearItem"> | string
    categoryId?: StringFilter<"GearItem"> | string
    name?: StringFilter<"GearItem"> | string
    description?: StringNullableFilter<"GearItem"> | string | null
    brand?: StringNullableFilter<"GearItem"> | string | null
    price?: DecimalFilter<"GearItem"> | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFilter<"GearItem"> | number
    isAvailable?: BoolFilter<"GearItem"> | boolean
    images?: StringNullableListFilter<"GearItem">
    createdAt?: DateTimeFilter<"GearItem"> | Date | string
    updatedAt?: DateTimeFilter<"GearItem"> | Date | string
  }

  export type UserCreateWithoutGearItemsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rentalOrders?: RentalOrderCreateNestedManyWithoutCustomerInput
    reviews?: ReviewCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutGearItemsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    rentalOrders?: RentalOrderUncheckedCreateNestedManyWithoutCustomerInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutGearItemsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutGearItemsInput, UserUncheckedCreateWithoutGearItemsInput>
  }

  export type CategoryCreateWithoutGearItemsInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type CategoryUncheckedCreateWithoutGearItemsInput = {
    id?: string
    name: string
    description?: string | null
  }

  export type CategoryCreateOrConnectWithoutGearItemsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutGearItemsInput, CategoryUncheckedCreateWithoutGearItemsInput>
  }

  export type RentalOrderItemCreateWithoutGearItemInput = {
    id?: string
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    rentalOrder: RentalOrderCreateNestedOneWithoutItemsInput
  }

  export type RentalOrderItemUncheckedCreateWithoutGearItemInput = {
    id?: string
    rentalOrderId: string
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type RentalOrderItemCreateOrConnectWithoutGearItemInput = {
    where: RentalOrderItemWhereUniqueInput
    create: XOR<RentalOrderItemCreateWithoutGearItemInput, RentalOrderItemUncheckedCreateWithoutGearItemInput>
  }

  export type RentalOrderItemCreateManyGearItemInputEnvelope = {
    data: RentalOrderItemCreateManyGearItemInput | RentalOrderItemCreateManyGearItemInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutGearItemInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    customer: UserCreateNestedOneWithoutReviewsInput
    rentalOrder: RentalOrderCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutGearItemInput = {
    id?: string
    customerId: string
    rentalOrderId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutGearItemInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutGearItemInput, ReviewUncheckedCreateWithoutGearItemInput>
  }

  export type ReviewCreateManyGearItemInputEnvelope = {
    data: ReviewCreateManyGearItemInput | ReviewCreateManyGearItemInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutGearItemsInput = {
    update: XOR<UserUpdateWithoutGearItemsInput, UserUncheckedUpdateWithoutGearItemsInput>
    create: XOR<UserCreateWithoutGearItemsInput, UserUncheckedCreateWithoutGearItemsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutGearItemsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutGearItemsInput, UserUncheckedUpdateWithoutGearItemsInput>
  }

  export type UserUpdateWithoutGearItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalOrders?: RentalOrderUpdateManyWithoutCustomerNestedInput
    reviews?: ReviewUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutGearItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalOrders?: RentalOrderUncheckedUpdateManyWithoutCustomerNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CategoryUpsertWithoutGearItemsInput = {
    update: XOR<CategoryUpdateWithoutGearItemsInput, CategoryUncheckedUpdateWithoutGearItemsInput>
    create: XOR<CategoryCreateWithoutGearItemsInput, CategoryUncheckedCreateWithoutGearItemsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutGearItemsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutGearItemsInput, CategoryUncheckedUpdateWithoutGearItemsInput>
  }

  export type CategoryUpdateWithoutGearItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CategoryUncheckedUpdateWithoutGearItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RentalOrderItemUpsertWithWhereUniqueWithoutGearItemInput = {
    where: RentalOrderItemWhereUniqueInput
    update: XOR<RentalOrderItemUpdateWithoutGearItemInput, RentalOrderItemUncheckedUpdateWithoutGearItemInput>
    create: XOR<RentalOrderItemCreateWithoutGearItemInput, RentalOrderItemUncheckedCreateWithoutGearItemInput>
  }

  export type RentalOrderItemUpdateWithWhereUniqueWithoutGearItemInput = {
    where: RentalOrderItemWhereUniqueInput
    data: XOR<RentalOrderItemUpdateWithoutGearItemInput, RentalOrderItemUncheckedUpdateWithoutGearItemInput>
  }

  export type RentalOrderItemUpdateManyWithWhereWithoutGearItemInput = {
    where: RentalOrderItemScalarWhereInput
    data: XOR<RentalOrderItemUpdateManyMutationInput, RentalOrderItemUncheckedUpdateManyWithoutGearItemInput>
  }

  export type RentalOrderItemScalarWhereInput = {
    AND?: RentalOrderItemScalarWhereInput | RentalOrderItemScalarWhereInput[]
    OR?: RentalOrderItemScalarWhereInput[]
    NOT?: RentalOrderItemScalarWhereInput | RentalOrderItemScalarWhereInput[]
    id?: StringFilter<"RentalOrderItem"> | string
    rentalOrderId?: StringFilter<"RentalOrderItem"> | string
    gearItemId?: StringFilter<"RentalOrderItem"> | string
    quantity?: IntFilter<"RentalOrderItem"> | number
    price?: DecimalFilter<"RentalOrderItem"> | Decimal | DecimalJsLike | number | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutGearItemInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutGearItemInput, ReviewUncheckedUpdateWithoutGearItemInput>
    create: XOR<ReviewCreateWithoutGearItemInput, ReviewUncheckedCreateWithoutGearItemInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutGearItemInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutGearItemInput, ReviewUncheckedUpdateWithoutGearItemInput>
  }

  export type ReviewUpdateManyWithWhereWithoutGearItemInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutGearItemInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: StringFilter<"Review"> | string
    customerId?: StringFilter<"Review"> | string
    gearItemId?: StringFilter<"Review"> | string
    rentalOrderId?: StringFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type RentalOrderCreateWithoutPaymentsInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutRentalOrdersInput
    items?: RentalOrderItemCreateNestedManyWithoutRentalOrderInput
    review?: ReviewCreateNestedOneWithoutRentalOrderInput
  }

  export type RentalOrderUncheckedCreateWithoutPaymentsInput = {
    id?: string
    customerId: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: RentalOrderItemUncheckedCreateNestedManyWithoutRentalOrderInput
    review?: ReviewUncheckedCreateNestedOneWithoutRentalOrderInput
  }

  export type RentalOrderCreateOrConnectWithoutPaymentsInput = {
    where: RentalOrderWhereUniqueInput
    create: XOR<RentalOrderCreateWithoutPaymentsInput, RentalOrderUncheckedCreateWithoutPaymentsInput>
  }

  export type RentalOrderUpsertWithoutPaymentsInput = {
    update: XOR<RentalOrderUpdateWithoutPaymentsInput, RentalOrderUncheckedUpdateWithoutPaymentsInput>
    create: XOR<RentalOrderCreateWithoutPaymentsInput, RentalOrderUncheckedCreateWithoutPaymentsInput>
    where?: RentalOrderWhereInput
  }

  export type RentalOrderUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: RentalOrderWhereInput
    data: XOR<RentalOrderUpdateWithoutPaymentsInput, RentalOrderUncheckedUpdateWithoutPaymentsInput>
  }

  export type RentalOrderUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutRentalOrdersNestedInput
    items?: RentalOrderItemUpdateManyWithoutRentalOrderNestedInput
    review?: ReviewUpdateOneWithoutRentalOrderNestedInput
  }

  export type RentalOrderUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RentalOrderItemUncheckedUpdateManyWithoutRentalOrderNestedInput
    review?: ReviewUncheckedUpdateOneWithoutRentalOrderNestedInput
  }

  export type UserCreateWithoutRentalOrdersInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    gearItems?: GearItemCreateNestedManyWithoutProviderInput
    reviews?: ReviewCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutRentalOrdersInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    gearItems?: GearItemUncheckedCreateNestedManyWithoutProviderInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutRentalOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRentalOrdersInput, UserUncheckedCreateWithoutRentalOrdersInput>
  }

  export type RentalOrderItemCreateWithoutRentalOrderInput = {
    id?: string
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
    gearItem: GearItemCreateNestedOneWithoutRentalOrderItemsInput
  }

  export type RentalOrderItemUncheckedCreateWithoutRentalOrderInput = {
    id?: string
    gearItemId: string
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type RentalOrderItemCreateOrConnectWithoutRentalOrderInput = {
    where: RentalOrderItemWhereUniqueInput
    create: XOR<RentalOrderItemCreateWithoutRentalOrderInput, RentalOrderItemUncheckedCreateWithoutRentalOrderInput>
  }

  export type RentalOrderItemCreateManyRentalOrderInputEnvelope = {
    data: RentalOrderItemCreateManyRentalOrderInput | RentalOrderItemCreateManyRentalOrderInput[]
    skipDuplicates?: boolean
  }

  export type PaymentCreateWithoutRentalOrderInput = {
    id?: string
    transactionId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentUncheckedCreateWithoutRentalOrderInput = {
    id?: string
    transactionId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PaymentCreateOrConnectWithoutRentalOrderInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutRentalOrderInput, PaymentUncheckedCreateWithoutRentalOrderInput>
  }

  export type PaymentCreateManyRentalOrderInputEnvelope = {
    data: PaymentCreateManyRentalOrderInput | PaymentCreateManyRentalOrderInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutRentalOrderInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    customer: UserCreateNestedOneWithoutReviewsInput
    gearItem: GearItemCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutRentalOrderInput = {
    id?: string
    customerId: string
    gearItemId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutRentalOrderInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRentalOrderInput, ReviewUncheckedCreateWithoutRentalOrderInput>
  }

  export type UserUpsertWithoutRentalOrdersInput = {
    update: XOR<UserUpdateWithoutRentalOrdersInput, UserUncheckedUpdateWithoutRentalOrdersInput>
    create: XOR<UserCreateWithoutRentalOrdersInput, UserUncheckedCreateWithoutRentalOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRentalOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRentalOrdersInput, UserUncheckedUpdateWithoutRentalOrdersInput>
  }

  export type UserUpdateWithoutRentalOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gearItems?: GearItemUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutRentalOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gearItems?: GearItemUncheckedUpdateManyWithoutProviderNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type RentalOrderItemUpsertWithWhereUniqueWithoutRentalOrderInput = {
    where: RentalOrderItemWhereUniqueInput
    update: XOR<RentalOrderItemUpdateWithoutRentalOrderInput, RentalOrderItemUncheckedUpdateWithoutRentalOrderInput>
    create: XOR<RentalOrderItemCreateWithoutRentalOrderInput, RentalOrderItemUncheckedCreateWithoutRentalOrderInput>
  }

  export type RentalOrderItemUpdateWithWhereUniqueWithoutRentalOrderInput = {
    where: RentalOrderItemWhereUniqueInput
    data: XOR<RentalOrderItemUpdateWithoutRentalOrderInput, RentalOrderItemUncheckedUpdateWithoutRentalOrderInput>
  }

  export type RentalOrderItemUpdateManyWithWhereWithoutRentalOrderInput = {
    where: RentalOrderItemScalarWhereInput
    data: XOR<RentalOrderItemUpdateManyMutationInput, RentalOrderItemUncheckedUpdateManyWithoutRentalOrderInput>
  }

  export type PaymentUpsertWithWhereUniqueWithoutRentalOrderInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutRentalOrderInput, PaymentUncheckedUpdateWithoutRentalOrderInput>
    create: XOR<PaymentCreateWithoutRentalOrderInput, PaymentUncheckedCreateWithoutRentalOrderInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutRentalOrderInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutRentalOrderInput, PaymentUncheckedUpdateWithoutRentalOrderInput>
  }

  export type PaymentUpdateManyWithWhereWithoutRentalOrderInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutRentalOrderInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    transactionId?: StringFilter<"Payment"> | string
    rentalOrderId?: StringFilter<"Payment"> | string
    amount?: DecimalFilter<"Payment"> | Decimal | DecimalJsLike | number | string
    currency?: StringFilter<"Payment"> | string
    method?: EnumPaymentMethodFilter<"Payment"> | $Enums.PaymentMethod
    status?: EnumPaymentStatusFilter<"Payment"> | $Enums.PaymentStatus
    paidAt?: DateTimeNullableFilter<"Payment"> | Date | string | null
    createdAt?: DateTimeFilter<"Payment"> | Date | string
    updatedAt?: DateTimeFilter<"Payment"> | Date | string
  }

  export type ReviewUpsertWithoutRentalOrderInput = {
    update: XOR<ReviewUpdateWithoutRentalOrderInput, ReviewUncheckedUpdateWithoutRentalOrderInput>
    create: XOR<ReviewCreateWithoutRentalOrderInput, ReviewUncheckedCreateWithoutRentalOrderInput>
    where?: ReviewWhereInput
  }

  export type ReviewUpdateToOneWithWhereWithoutRentalOrderInput = {
    where?: ReviewWhereInput
    data: XOR<ReviewUpdateWithoutRentalOrderInput, ReviewUncheckedUpdateWithoutRentalOrderInput>
  }

  export type ReviewUpdateWithoutRentalOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutReviewsNestedInput
    gearItem?: GearItemUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRentalOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    gearItemId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalOrderCreateWithoutItemsInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutRentalOrdersInput
    payments?: PaymentCreateNestedManyWithoutRentalOrderInput
    review?: ReviewCreateNestedOneWithoutRentalOrderInput
  }

  export type RentalOrderUncheckedCreateWithoutItemsInput = {
    id?: string
    customerId: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    payments?: PaymentUncheckedCreateNestedManyWithoutRentalOrderInput
    review?: ReviewUncheckedCreateNestedOneWithoutRentalOrderInput
  }

  export type RentalOrderCreateOrConnectWithoutItemsInput = {
    where: RentalOrderWhereUniqueInput
    create: XOR<RentalOrderCreateWithoutItemsInput, RentalOrderUncheckedCreateWithoutItemsInput>
  }

  export type GearItemCreateWithoutRentalOrderItemsInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    price: Decimal | DecimalJsLike | number | string
    stockQuantity?: number
    isAvailable?: boolean
    images?: GearItemCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: UserCreateNestedOneWithoutGearItemsInput
    category: CategoryCreateNestedOneWithoutGearItemsInput
    reviews?: ReviewCreateNestedManyWithoutGearItemInput
  }

  export type GearItemUncheckedCreateWithoutRentalOrderItemsInput = {
    id?: string
    providerId: string
    categoryId: string
    name: string
    description?: string | null
    brand?: string | null
    price: Decimal | DecimalJsLike | number | string
    stockQuantity?: number
    isAvailable?: boolean
    images?: GearItemCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutGearItemInput
  }

  export type GearItemCreateOrConnectWithoutRentalOrderItemsInput = {
    where: GearItemWhereUniqueInput
    create: XOR<GearItemCreateWithoutRentalOrderItemsInput, GearItemUncheckedCreateWithoutRentalOrderItemsInput>
  }

  export type RentalOrderUpsertWithoutItemsInput = {
    update: XOR<RentalOrderUpdateWithoutItemsInput, RentalOrderUncheckedUpdateWithoutItemsInput>
    create: XOR<RentalOrderCreateWithoutItemsInput, RentalOrderUncheckedCreateWithoutItemsInput>
    where?: RentalOrderWhereInput
  }

  export type RentalOrderUpdateToOneWithWhereWithoutItemsInput = {
    where?: RentalOrderWhereInput
    data: XOR<RentalOrderUpdateWithoutItemsInput, RentalOrderUncheckedUpdateWithoutItemsInput>
  }

  export type RentalOrderUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutRentalOrdersNestedInput
    payments?: PaymentUpdateManyWithoutRentalOrderNestedInput
    review?: ReviewUpdateOneWithoutRentalOrderNestedInput
  }

  export type RentalOrderUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    payments?: PaymentUncheckedUpdateManyWithoutRentalOrderNestedInput
    review?: ReviewUncheckedUpdateOneWithoutRentalOrderNestedInput
  }

  export type GearItemUpsertWithoutRentalOrderItemsInput = {
    update: XOR<GearItemUpdateWithoutRentalOrderItemsInput, GearItemUncheckedUpdateWithoutRentalOrderItemsInput>
    create: XOR<GearItemCreateWithoutRentalOrderItemsInput, GearItemUncheckedCreateWithoutRentalOrderItemsInput>
    where?: GearItemWhereInput
  }

  export type GearItemUpdateToOneWithWhereWithoutRentalOrderItemsInput = {
    where?: GearItemWhereInput
    data: XOR<GearItemUpdateWithoutRentalOrderItemsInput, GearItemUncheckedUpdateWithoutRentalOrderItemsInput>
  }

  export type GearItemUpdateWithoutRentalOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    images?: GearItemUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: UserUpdateOneRequiredWithoutGearItemsNestedInput
    category?: CategoryUpdateOneRequiredWithoutGearItemsNestedInput
    reviews?: ReviewUpdateManyWithoutGearItemNestedInput
  }

  export type GearItemUncheckedUpdateWithoutRentalOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    images?: GearItemUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutGearItemNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    gearItems?: GearItemCreateNestedManyWithoutProviderInput
    rentalOrders?: RentalOrderCreateNestedManyWithoutCustomerInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    name: string
    email: string
    passwordHash: string
    role: $Enums.Role
    phone?: string | null
    address?: string | null
    status?: $Enums.UserStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    gearItems?: GearItemUncheckedCreateNestedManyWithoutProviderInput
    rentalOrders?: RentalOrderUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type GearItemCreateWithoutReviewsInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    price: Decimal | DecimalJsLike | number | string
    stockQuantity?: number
    isAvailable?: boolean
    images?: GearItemCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: UserCreateNestedOneWithoutGearItemsInput
    category: CategoryCreateNestedOneWithoutGearItemsInput
    rentalOrderItems?: RentalOrderItemCreateNestedManyWithoutGearItemInput
  }

  export type GearItemUncheckedCreateWithoutReviewsInput = {
    id?: string
    providerId: string
    categoryId: string
    name: string
    description?: string | null
    brand?: string | null
    price: Decimal | DecimalJsLike | number | string
    stockQuantity?: number
    isAvailable?: boolean
    images?: GearItemCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    rentalOrderItems?: RentalOrderItemUncheckedCreateNestedManyWithoutGearItemInput
  }

  export type GearItemCreateOrConnectWithoutReviewsInput = {
    where: GearItemWhereUniqueInput
    create: XOR<GearItemCreateWithoutReviewsInput, GearItemUncheckedCreateWithoutReviewsInput>
  }

  export type RentalOrderCreateWithoutReviewInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    customer: UserCreateNestedOneWithoutRentalOrdersInput
    items?: RentalOrderItemCreateNestedManyWithoutRentalOrderInput
    payments?: PaymentCreateNestedManyWithoutRentalOrderInput
  }

  export type RentalOrderUncheckedCreateWithoutReviewInput = {
    id?: string
    customerId: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: RentalOrderItemUncheckedCreateNestedManyWithoutRentalOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutRentalOrderInput
  }

  export type RentalOrderCreateOrConnectWithoutReviewInput = {
    where: RentalOrderWhereUniqueInput
    create: XOR<RentalOrderCreateWithoutReviewInput, RentalOrderUncheckedCreateWithoutReviewInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gearItems?: GearItemUpdateManyWithoutProviderNestedInput
    rentalOrders?: RentalOrderUpdateManyWithoutCustomerNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumUserStatusFieldUpdateOperationsInput | $Enums.UserStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gearItems?: GearItemUncheckedUpdateManyWithoutProviderNestedInput
    rentalOrders?: RentalOrderUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type GearItemUpsertWithoutReviewsInput = {
    update: XOR<GearItemUpdateWithoutReviewsInput, GearItemUncheckedUpdateWithoutReviewsInput>
    create: XOR<GearItemCreateWithoutReviewsInput, GearItemUncheckedCreateWithoutReviewsInput>
    where?: GearItemWhereInput
  }

  export type GearItemUpdateToOneWithWhereWithoutReviewsInput = {
    where?: GearItemWhereInput
    data: XOR<GearItemUpdateWithoutReviewsInput, GearItemUncheckedUpdateWithoutReviewsInput>
  }

  export type GearItemUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    images?: GearItemUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: UserUpdateOneRequiredWithoutGearItemsNestedInput
    category?: CategoryUpdateOneRequiredWithoutGearItemsNestedInput
    rentalOrderItems?: RentalOrderItemUpdateManyWithoutGearItemNestedInput
  }

  export type GearItemUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    images?: GearItemUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalOrderItems?: RentalOrderItemUncheckedUpdateManyWithoutGearItemNestedInput
  }

  export type RentalOrderUpsertWithoutReviewInput = {
    update: XOR<RentalOrderUpdateWithoutReviewInput, RentalOrderUncheckedUpdateWithoutReviewInput>
    create: XOR<RentalOrderCreateWithoutReviewInput, RentalOrderUncheckedCreateWithoutReviewInput>
    where?: RentalOrderWhereInput
  }

  export type RentalOrderUpdateToOneWithWhereWithoutReviewInput = {
    where?: RentalOrderWhereInput
    data: XOR<RentalOrderUpdateWithoutReviewInput, RentalOrderUncheckedUpdateWithoutReviewInput>
  }

  export type RentalOrderUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutRentalOrdersNestedInput
    items?: RentalOrderItemUpdateManyWithoutRentalOrderNestedInput
    payments?: PaymentUpdateManyWithoutRentalOrderNestedInput
  }

  export type RentalOrderUncheckedUpdateWithoutReviewInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RentalOrderItemUncheckedUpdateManyWithoutRentalOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutRentalOrderNestedInput
  }

  export type GearItemCreateWithoutProviderInput = {
    id?: string
    name: string
    description?: string | null
    brand?: string | null
    price: Decimal | DecimalJsLike | number | string
    stockQuantity?: number
    isAvailable?: boolean
    images?: GearItemCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutGearItemsInput
    rentalOrderItems?: RentalOrderItemCreateNestedManyWithoutGearItemInput
    reviews?: ReviewCreateNestedManyWithoutGearItemInput
  }

  export type GearItemUncheckedCreateWithoutProviderInput = {
    id?: string
    categoryId: string
    name: string
    description?: string | null
    brand?: string | null
    price: Decimal | DecimalJsLike | number | string
    stockQuantity?: number
    isAvailable?: boolean
    images?: GearItemCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
    rentalOrderItems?: RentalOrderItemUncheckedCreateNestedManyWithoutGearItemInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutGearItemInput
  }

  export type GearItemCreateOrConnectWithoutProviderInput = {
    where: GearItemWhereUniqueInput
    create: XOR<GearItemCreateWithoutProviderInput, GearItemUncheckedCreateWithoutProviderInput>
  }

  export type GearItemCreateManyProviderInputEnvelope = {
    data: GearItemCreateManyProviderInput | GearItemCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type RentalOrderCreateWithoutCustomerInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: RentalOrderItemCreateNestedManyWithoutRentalOrderInput
    payments?: PaymentCreateNestedManyWithoutRentalOrderInput
    review?: ReviewCreateNestedOneWithoutRentalOrderInput
  }

  export type RentalOrderUncheckedCreateWithoutCustomerInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    items?: RentalOrderItemUncheckedCreateNestedManyWithoutRentalOrderInput
    payments?: PaymentUncheckedCreateNestedManyWithoutRentalOrderInput
    review?: ReviewUncheckedCreateNestedOneWithoutRentalOrderInput
  }

  export type RentalOrderCreateOrConnectWithoutCustomerInput = {
    where: RentalOrderWhereUniqueInput
    create: XOR<RentalOrderCreateWithoutCustomerInput, RentalOrderUncheckedCreateWithoutCustomerInput>
  }

  export type RentalOrderCreateManyCustomerInputEnvelope = {
    data: RentalOrderCreateManyCustomerInput | RentalOrderCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutCustomerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    gearItem: GearItemCreateNestedOneWithoutReviewsInput
    rentalOrder: RentalOrderCreateNestedOneWithoutReviewInput
  }

  export type ReviewUncheckedCreateWithoutCustomerInput = {
    id?: string
    gearItemId: string
    rentalOrderId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutCustomerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput>
  }

  export type ReviewCreateManyCustomerInputEnvelope = {
    data: ReviewCreateManyCustomerInput | ReviewCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type GearItemUpsertWithWhereUniqueWithoutProviderInput = {
    where: GearItemWhereUniqueInput
    update: XOR<GearItemUpdateWithoutProviderInput, GearItemUncheckedUpdateWithoutProviderInput>
    create: XOR<GearItemCreateWithoutProviderInput, GearItemUncheckedCreateWithoutProviderInput>
  }

  export type GearItemUpdateWithWhereUniqueWithoutProviderInput = {
    where: GearItemWhereUniqueInput
    data: XOR<GearItemUpdateWithoutProviderInput, GearItemUncheckedUpdateWithoutProviderInput>
  }

  export type GearItemUpdateManyWithWhereWithoutProviderInput = {
    where: GearItemScalarWhereInput
    data: XOR<GearItemUpdateManyMutationInput, GearItemUncheckedUpdateManyWithoutProviderInput>
  }

  export type RentalOrderUpsertWithWhereUniqueWithoutCustomerInput = {
    where: RentalOrderWhereUniqueInput
    update: XOR<RentalOrderUpdateWithoutCustomerInput, RentalOrderUncheckedUpdateWithoutCustomerInput>
    create: XOR<RentalOrderCreateWithoutCustomerInput, RentalOrderUncheckedCreateWithoutCustomerInput>
  }

  export type RentalOrderUpdateWithWhereUniqueWithoutCustomerInput = {
    where: RentalOrderWhereUniqueInput
    data: XOR<RentalOrderUpdateWithoutCustomerInput, RentalOrderUncheckedUpdateWithoutCustomerInput>
  }

  export type RentalOrderUpdateManyWithWhereWithoutCustomerInput = {
    where: RentalOrderScalarWhereInput
    data: XOR<RentalOrderUpdateManyMutationInput, RentalOrderUncheckedUpdateManyWithoutCustomerInput>
  }

  export type RentalOrderScalarWhereInput = {
    AND?: RentalOrderScalarWhereInput | RentalOrderScalarWhereInput[]
    OR?: RentalOrderScalarWhereInput[]
    NOT?: RentalOrderScalarWhereInput | RentalOrderScalarWhereInput[]
    id?: StringFilter<"RentalOrder"> | string
    customerId?: StringFilter<"RentalOrder"> | string
    startDate?: DateTimeFilter<"RentalOrder"> | Date | string
    endDate?: DateTimeFilter<"RentalOrder"> | Date | string
    totalAmount?: DecimalFilter<"RentalOrder"> | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFilter<"RentalOrder"> | $Enums.RentalStatus
    createdAt?: DateTimeFilter<"RentalOrder"> | Date | string
    updatedAt?: DateTimeFilter<"RentalOrder"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutCustomerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutCustomerInput, ReviewUncheckedUpdateWithoutCustomerInput>
    create: XOR<ReviewCreateWithoutCustomerInput, ReviewUncheckedCreateWithoutCustomerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutCustomerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutCustomerInput, ReviewUncheckedUpdateWithoutCustomerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutCustomerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutCustomerInput>
  }

  export type GearItemCreateManyCategoryInput = {
    id?: string
    providerId: string
    name: string
    description?: string | null
    brand?: string | null
    price: Decimal | DecimalJsLike | number | string
    stockQuantity?: number
    isAvailable?: boolean
    images?: GearItemCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type GearItemUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    images?: GearItemUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: UserUpdateOneRequiredWithoutGearItemsNestedInput
    rentalOrderItems?: RentalOrderItemUpdateManyWithoutGearItemNestedInput
    reviews?: ReviewUpdateManyWithoutGearItemNestedInput
  }

  export type GearItemUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    images?: GearItemUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalOrderItems?: RentalOrderItemUncheckedUpdateManyWithoutGearItemNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutGearItemNestedInput
  }

  export type GearItemUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    providerId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    images?: GearItemUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalOrderItemCreateManyGearItemInput = {
    id?: string
    rentalOrderId: string
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type ReviewCreateManyGearItemInput = {
    id?: string
    customerId: string
    rentalOrderId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type RentalOrderItemUpdateWithoutGearItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    rentalOrder?: RentalOrderUpdateOneRequiredWithoutItemsNestedInput
  }

  export type RentalOrderItemUncheckedUpdateWithoutGearItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalOrderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RentalOrderItemUncheckedUpdateManyWithoutGearItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    rentalOrderId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type ReviewUpdateWithoutGearItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: UserUpdateOneRequiredWithoutReviewsNestedInput
    rentalOrder?: RentalOrderUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutGearItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    rentalOrderId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutGearItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    rentalOrderId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalOrderItemCreateManyRentalOrderInput = {
    id?: string
    gearItemId: string
    quantity?: number
    price: Decimal | DecimalJsLike | number | string
  }

  export type PaymentCreateManyRentalOrderInput = {
    id?: string
    transactionId: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string
    method?: $Enums.PaymentMethod
    status?: $Enums.PaymentStatus
    paidAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalOrderItemUpdateWithoutRentalOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    gearItem?: GearItemUpdateOneRequiredWithoutRentalOrderItemsNestedInput
  }

  export type RentalOrderItemUncheckedUpdateWithoutRentalOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    gearItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type RentalOrderItemUncheckedUpdateManyWithoutRentalOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    gearItemId?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
  }

  export type PaymentUpdateWithoutRentalOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateWithoutRentalOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutRentalOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    transactionId?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: StringFieldUpdateOperationsInput | string
    method?: EnumPaymentMethodFieldUpdateOperationsInput | $Enums.PaymentMethod
    status?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    paidAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type GearItemCreateManyProviderInput = {
    id?: string
    categoryId: string
    name: string
    description?: string | null
    brand?: string | null
    price: Decimal | DecimalJsLike | number | string
    stockQuantity?: number
    isAvailable?: boolean
    images?: GearItemCreateimagesInput | string[]
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type RentalOrderCreateManyCustomerInput = {
    id?: string
    startDate: Date | string
    endDate: Date | string
    totalAmount: Decimal | DecimalJsLike | number | string
    status?: $Enums.RentalStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyCustomerInput = {
    id?: string
    gearItemId: string
    rentalOrderId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type GearItemUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    images?: GearItemUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutGearItemsNestedInput
    rentalOrderItems?: RentalOrderItemUpdateManyWithoutGearItemNestedInput
    reviews?: ReviewUpdateManyWithoutGearItemNestedInput
  }

  export type GearItemUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    images?: GearItemUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rentalOrderItems?: RentalOrderItemUncheckedUpdateManyWithoutGearItemNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutGearItemNestedInput
  }

  export type GearItemUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    brand?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    stockQuantity?: IntFieldUpdateOperationsInput | number
    isAvailable?: BoolFieldUpdateOperationsInput | boolean
    images?: GearItemUpdateimagesInput | string[]
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RentalOrderUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RentalOrderItemUpdateManyWithoutRentalOrderNestedInput
    payments?: PaymentUpdateManyWithoutRentalOrderNestedInput
    review?: ReviewUpdateOneWithoutRentalOrderNestedInput
  }

  export type RentalOrderUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: RentalOrderItemUncheckedUpdateManyWithoutRentalOrderNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutRentalOrderNestedInput
    review?: ReviewUncheckedUpdateOneWithoutRentalOrderNestedInput
  }

  export type RentalOrderUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    totalAmount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    status?: EnumRentalStatusFieldUpdateOperationsInput | $Enums.RentalStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    gearItem?: GearItemUpdateOneRequiredWithoutReviewsNestedInput
    rentalOrder?: RentalOrderUpdateOneRequiredWithoutReviewNestedInput
  }

  export type ReviewUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gearItemId?: StringFieldUpdateOperationsInput | string
    rentalOrderId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    gearItemId?: StringFieldUpdateOperationsInput | string
    rentalOrderId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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