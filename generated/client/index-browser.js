
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.14.0
 * Query Engine version: e9771e62de70f79a5e1c604a2d7c8e2a0a874b48
 */
Prisma.prismaVersion = {
  client: "5.14.0",
  engine: "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
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
  txt_url_arch: 'txt_url_arch',
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
  Peliculas: 'Peliculas'
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
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
