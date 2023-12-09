
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  detectRuntime,
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.5.2
 * Query Engine version: aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a
 */
Prisma.prismaVersion = {
  client: "5.5.2",
  engine: "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  throw new Error(`Extensions.getExtensionContext is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.defineExtension = () => {
  throw new Error(`Extensions.defineExtension is unable to be run ${runtimeDescription}.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}

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

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.EstudiantesScalarFieldEnum = {
  pk_id_est: 'pk_id_est',
  txt_user_est: 'txt_user_est',
  txt_email_est: 'txt_email_est',
  txt_pass_est: 'txt_pass_est',
  num_sub_est: 'num_sub_est'
};

exports.Prisma.BibliografiasScalarFieldEnum = {
  pk_id_biblio: 'pk_id_biblio',
  txt_tip_biblio: 'txt_tip_biblio',
  txt_fmt_biblio: 'txt_fmt_biblio',
  txt_tit_biblio: 'txt_tit_biblio',
  txt_aut_biblio: 'txt_aut_biblio',
  txt_pag_biblio: 'txt_pag_biblio',
  txt_url_biblio: 'txt_url_biblio',
  txt_fecha_pub_biblio: 'txt_fecha_pub_biblio',
  txt_fecha_acc_biblio: 'txt_fecha_acc_biblio',
  txt_ubic_biblio: 'txt_ubic_biblio',
  txt_edit_biblio: 'txt_edit_biblio',
  num_volm_biblio: 'num_volm_biblio',
  num_edic_biblio: 'num_edic_biblio',
  num_npag_biblio: 'num_npag_biblio',
  bool_online_biblio: 'bool_online_biblio',
  fk_id_grup: 'fk_id_grup',
  fk_id_carp: 'fk_id_carp',
  fk_id_est: 'fk_id_est'
};

exports.Prisma.ArchivosScalarFieldEnum = {
  pk_id_arch: 'pk_id_arch',
  txt_dir_arch: 'txt_dir_arch',
  fk_id_biblio: 'fk_id_biblio'
};

exports.Prisma.CarpetasScalarFieldEnum = {
  pk_id_carp: 'pk_id_carp',
  txt_nom_carp: 'txt_nom_carp',
  fk_id_grup: 'fk_id_grup',
  fk_id_est: 'fk_id_est'
};

exports.Prisma.GrupoConAccesoScalarFieldEnum = {
  fk_id_grup: 'fk_id_grup',
  fk_id_est: 'fk_id_est'
};

exports.Prisma.GruposScalarFieldEnum = {
  pk_id_grup: 'pk_id_grup',
  txt_nom_grup: 'txt_nom_grup',
  fk_id_est: 'fk_id_est'
};

exports.Prisma.CambiosScalarFieldEnum = {
  pk_id_camb: 'pk_id_camb',
  num_tip_camb: 'num_tip_camb',
  txt_fecha_camb: 'txt_fecha_camb',
  fk_id_est: 'fk_id_est',
  fk_id_carp: 'fk_id_carp',
  fk_id_grup: 'fk_id_grup'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.TipoPublicacion = exports.$Enums.TipoPublicacion = {
  SitioWeb: 'SitioWeb',
  Libro: 'Libro',
  ArticuloRevista: 'ArticuloRevista',
  ArticuloPeriodico: 'ArticuloPeriodico',
  Peliculas: 'Peliculas',
  Varios: 'Varios'
};

exports.TipoFormato = exports.$Enums.TipoFormato = {
  Apa: 'Apa',
  Chicago: 'Chicago',
  Mla: 'Mla',
  Ieee: 'Ieee'
};

exports.Prisma.ModelName = {
  Estudiantes: 'Estudiantes',
  Bibliografias: 'Bibliografias',
  Archivos: 'Archivos',
  Carpetas: 'Carpetas',
  GrupoConAcceso: 'GrupoConAcceso',
  Grupos: 'Grupos',
  Cambios: 'Cambios'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        const runtime = detectRuntime()
        const edgeRuntimeName = {
          'workerd': 'Cloudflare Workers',
          'deno': 'Deno and Deno Deploy',
          'netlify': 'Netlify Edge Functions',
          'edge-light': 'Vercel Edge Functions',
        }[runtime]

        let message = 'PrismaClient is unable to run in '
        if (edgeRuntimeName !== undefined) {
          message += edgeRuntimeName + '. As an alternative, try Accelerate: https://pris.ly/d/accelerate.'
        } else {
          message += 'this browser environment, or has been bundled for the browser (running in `' + runtime + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://github.com/prisma/prisma/issues`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
