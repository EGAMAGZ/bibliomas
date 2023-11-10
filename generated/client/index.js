
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
} = require('./runtime/library')


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
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
  fk_id_carp: 'fk_id_carp'
};

exports.Prisma.ArchivosScalarFieldEnum = {
  pk_id_arch: 'pk_id_arch',
  txt_dir_arch: 'txt_dir_arch',
  fk_id_biblio: 'fk_id_biblio'
};

exports.Prisma.CarpetasScalarFieldEnum = {
  pk_id_carp: 'pk_id_carp',
  txt_nom_carp: 'txt_nom_carp',
  fk_id_grup: 'fk_id_grup'
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
      "value": "C:\\Users\\gazap\\projects\\bibliomas\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "deno"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.5.2",
  "engineVersion": "aebc046ce8b88ebbcb45efe31cbe7d06fd6abc0a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "Ly8gVGhpcyBpcyB5b3VyIFByaXNtYSBzY2hlbWEgZmlsZSwNCi8vIGxlYXJuIG1vcmUgYWJvdXQgaXQgaW4gdGhlIGRvY3M6IGh0dHBzOi8vcHJpcy5seS9kL3ByaXNtYS1zY2hlbWENCg0KZ2VuZXJhdG9yIGNsaWVudCB7DQogIHByb3ZpZGVyICAgICAgICA9ICJwcmlzbWEtY2xpZW50LWpzIg0KICBwcmV2aWV3RmVhdHVyZXMgPSBbImRlbm8iXQ0KICBvdXRwdXQgICAgICAgICAgPSAiLi4vZ2VuZXJhdGVkL2NsaWVudCINCn0NCg0KZGF0YXNvdXJjZSBkYiB7DQogIHByb3ZpZGVyICA9ICJwb3N0Z3Jlc3FsIg0KICB1cmwgICAgICAgPSBlbnYoIkRBVEFCQVNFX1VSTCIpDQogIGRpcmVjdFVybCA9IGVudigiRElSRUNUX1VSTCIpDQp9DQoNCm1vZGVsIEVzdHVkaWFudGVzIHsNCiAgcGtfaWRfZXN0ICAgICBTdHJpbmcgQGlkIEBkZWZhdWx0KHV1aWQoKSkNCiAgdHh0X3VzZXJfZXN0ICBTdHJpbmcgQHVuaXF1ZQ0KICB0eHRfZW1haWxfZXN0IFN0cmluZyBAdW5pcXVlDQogIHR4dF9wYXNzX2VzdCAgU3RyaW5nIEBkYi5WYXJDaGFyKDI1NSkNCiAgbnVtX3N1Yl9lc3QgICBJbnQgICAgQGRlZmF1bHQoMSkNCg0KICBDYW1iaW9zICAgICAgICBDYW1iaW9zW10NCiAgR3J1cG9zICAgICAgICAgR3J1cG9zW10NCiAgR3J1cG9Db25BY2Nlc28gR3J1cG9Db25BY2Nlc29bXQ0KfQ0KDQptb2RlbCBCaWJsaW9ncmFmaWFzIHsNCiAgcGtfaWRfYmlibGlvICAgICBJbnQgICAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICB0eHRfdGl0X2JpYmxpbyAgIFN0cmluZw0KICBudW1fdGlwX2JpYmxpbyAgIEludCAgICAgIEBkYi5TbWFsbEludA0KICBudW1fZm10X2JpYmxpbyAgIEludCAgICAgIEBkYi5TbWFsbEludA0KICB0eHRfZmVjaGFfYmlibGlvIERhdGVUaW1lDQogIHR4dF9hdXRfYmlibGlvICAgU3RyaW5nDQogIHR4dF9lZGl0X2JpYmxpbyAgU3RyaW5nPw0KICB0eHRfZGlyX2JpYmxpbyAgIFN0cmluZz8gLy8gU2UgcmVmaWVyZSBhIFVSTA0KICB0eHRfcGFnX2JpYmxpbyAgIFN0cmluZz8NCiAgbnVtX2VkaWNfYmlibGlvICBJbnQ/DQogIG51bV92b2xtX2JpYmxpbyAgSW50Pw0KICBudW1fbnBhZ19iaWJsaW8gIEludD8NCiAgdHh0X3ViaWNfYmlibGlvICBTdHJpbmc/DQoNCiAgR3J1cG8gICAgICBHcnVwb3MgQHJlbGF0aW9uKGZpZWxkczogW2ZrX2lkX2dydXBdLCByZWZlcmVuY2VzOiBbcGtfaWRfZ3J1cF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogQ2FzY2FkZSkNCiAgZmtfaWRfZ3J1cCBJbnQNCg0KICBDYXJwZXRhICAgIENhcnBldGFzIEByZWxhdGlvbihmaWVsZHM6IFtma19pZF9jYXJwXSwgcmVmZXJlbmNlczogW3BrX2lkX2NhcnBdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IENhc2NhZGUpDQogIGZrX2lkX2NhcnAgSW50DQoNCiAgQXJjaGl2b3MgQXJjaGl2b3NbXQ0KfQ0KDQptb2RlbCBBcmNoaXZvcyB7DQogIHBrX2lkX2FyY2ggICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgdHh0X2Rpcl9hcmNoIFN0cmluZyAvLyBTZSByZWZpZXJlIGEgVVJMDQoNCiAgQmlibGlvZ3JhZmlhcyBCaWJsaW9ncmFmaWFzIEByZWxhdGlvbihmaWVsZHM6IFtma19pZF9iaWJsaW9dLCByZWZlcmVuY2VzOiBbcGtfaWRfYmlibGlvXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBDYXNjYWRlKQ0KICBma19pZF9iaWJsaW8gIEludCAvLyBUT0RPOiBBR1JFR0FSIERJQ0NJT05BUklPDQp9DQoNCm1vZGVsIENhcnBldGFzIHsNCiAgcGtfaWRfY2FycCAgIEludCAgICBAaWQgQGRlZmF1bHQoYXV0b2luY3JlbWVudCgpKQ0KICB0eHRfbm9tX2NhcnAgU3RyaW5nDQoNCiAgR3J1cG8gICAgICBHcnVwb3MgQHJlbGF0aW9uKGZpZWxkczogW2ZrX2lkX2dydXBdLCByZWZlcmVuY2VzOiBbcGtfaWRfZ3J1cF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogQ2FzY2FkZSkNCiAgZmtfaWRfZ3J1cCBJbnQgLy8gVE9ETzogQUdSRUdBUiBFTiBESUNDSU9OQVJJTw0KDQogIENhbWJpb3MgICAgICAgQ2FtYmlvc1tdDQogIEJpYmxpb2dyYWZpYXMgQmlibGlvZ3JhZmlhc1tdDQp9DQoNCm1vZGVsIEdydXBvQ29uQWNjZXNvIHsNCiAgR3J1cG8gICAgICBHcnVwb3MgQHJlbGF0aW9uKGZpZWxkczogW2ZrX2lkX2dydXBdLCByZWZlcmVuY2VzOiBbcGtfaWRfZ3J1cF0sIG9uRGVsZXRlOiBDYXNjYWRlLCBvblVwZGF0ZTogQ2FzY2FkZSkNCiAgZmtfaWRfZ3J1cCBJbnQNCg0KICBFc3R1ZGlhbnRlIEVzdHVkaWFudGVzIEByZWxhdGlvbihmaWVsZHM6IFtma19pZF9lc3RdLCByZWZlcmVuY2VzOiBbcGtfaWRfZXN0XSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBDYXNjYWRlKQ0KICBma19pZF9lc3QgIFN0cmluZw0KDQogIEBAaWQoW2ZrX2lkX2dydXAsIGZrX2lkX2VzdF0pDQp9DQoNCm1vZGVsIEdydXBvcyB7DQogIHBrX2lkX2dydXAgICBJbnQgICAgQGlkIEBkZWZhdWx0KGF1dG9pbmNyZW1lbnQoKSkNCiAgdHh0X25vbV9ncnVwIFN0cmluZw0KDQogIEVzdHVkaWFudGUgRXN0dWRpYW50ZXMgQHJlbGF0aW9uKGZpZWxkczogW2ZrX2lkX2VzdF0sIHJlZmVyZW5jZXM6IFtwa19pZF9lc3RdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IENhc2NhZGUpDQogIGZrX2lkX2VzdCAgU3RyaW5nDQoNCiAgQ2FtYmlvcyAgICAgICAgQ2FtYmlvc1tdDQogIENhcnBldGFzICAgICAgIENhcnBldGFzW10NCiAgQmlibGlvZ3JhZmlhcyAgQmlibGlvZ3JhZmlhc1tdDQogIEdydXBvQ29uQWNjZXNvIEdydXBvQ29uQWNjZXNvW10NCn0NCg0KbW9kZWwgQ2FtYmlvcyB7DQogIHBrX2lkX2NhbWIgICAgIEludCAgICAgIEBpZCBAZGVmYXVsdChhdXRvaW5jcmVtZW50KCkpDQogIG51bV90aXBfY2FtYiAgIEludCAgICAgIEBkYi5TbWFsbEludA0KICB0eHRfZmVjaGFfY2FtYiBEYXRlVGltZQ0KDQogIEVzdHVkaWFudGUgRXN0dWRpYW50ZXMgQHJlbGF0aW9uKGZpZWxkczogW2ZrX2lkX2VzdF0sIHJlZmVyZW5jZXM6IFtwa19pZF9lc3RdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IENhc2NhZGUpDQogIGZrX2lkX2VzdCAgU3RyaW5nDQoNCiAgQ2FycGV0YSAgICBDYXJwZXRhcyBAcmVsYXRpb24oZmllbGRzOiBbZmtfaWRfY2FycF0sIHJlZmVyZW5jZXM6IFtwa19pZF9jYXJwXSwgb25EZWxldGU6IENhc2NhZGUsIG9uVXBkYXRlOiBDYXNjYWRlKQ0KICBma19pZF9jYXJwIEludA0KDQogIEdydXBvICAgICAgR3J1cG9zIEByZWxhdGlvbihmaWVsZHM6IFtma19pZF9ncnVwXSwgcmVmZXJlbmNlczogW3BrX2lkX2dydXBdLCBvbkRlbGV0ZTogQ2FzY2FkZSwgb25VcGRhdGU6IENhc2NhZGUpDQogIGZrX2lkX2dydXAgSW50DQp9DQo=",
  "inlineSchemaHash": "5453e4a198b795f894d43835210a5af0591fea48c411ea64133293f1bc84872d"
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "generated/client",
    "client",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Estudiantes\":{\"dbName\":null,\"fields\":[{\"name\":\"pk_id_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_user_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_email_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_pass_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_sub_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Cambios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cambios\",\"relationName\":\"CambiosToEstudiantes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grupos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"EstudiantesToGrupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GrupoConAcceso\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GrupoConAcceso\",\"relationName\":\"EstudiantesToGrupoConAcceso\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Bibliografias\":{\"dbName\":null,\"fields\":[{\"name\":\"pk_id_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_tit_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_tip_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_fmt_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_fecha_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_aut_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_edit_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_dir_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_pag_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_edic_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_volm_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_npag_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_ubic_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grupo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"BibliografiasToGrupos\",\"relationFromFields\":[\"fk_id_grup\"],\"relationToFields\":[\"pk_id_grup\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_grup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Carpeta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Carpetas\",\"relationName\":\"BibliografiasToCarpetas\",\"relationFromFields\":[\"fk_id_carp\"],\"relationToFields\":[\"pk_id_carp\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_carp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Archivos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Archivos\",\"relationName\":\"ArchivosToBibliografias\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Archivos\":{\"dbName\":null,\"fields\":[{\"name\":\"pk_id_arch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_dir_arch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Bibliografias\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bibliografias\",\"relationName\":\"ArchivosToBibliografias\",\"relationFromFields\":[\"fk_id_biblio\"],\"relationToFields\":[\"pk_id_biblio\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Carpetas\":{\"dbName\":null,\"fields\":[{\"name\":\"pk_id_carp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_nom_carp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grupo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"CarpetasToGrupos\",\"relationFromFields\":[\"fk_id_grup\"],\"relationToFields\":[\"pk_id_grup\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_grup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Cambios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cambios\",\"relationName\":\"CambiosToCarpetas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Bibliografias\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bibliografias\",\"relationName\":\"BibliografiasToCarpetas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GrupoConAcceso\":{\"dbName\":null,\"fields\":[{\"name\":\"Grupo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"GrupoConAccesoToGrupos\",\"relationFromFields\":[\"fk_id_grup\"],\"relationToFields\":[\"pk_id_grup\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_grup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estudiante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Estudiantes\",\"relationName\":\"EstudiantesToGrupoConAcceso\",\"relationFromFields\":[\"fk_id_est\"],\"relationToFields\":[\"pk_id_est\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"fk_id_grup\",\"fk_id_est\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Grupos\":{\"dbName\":null,\"fields\":[{\"name\":\"pk_id_grup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_nom_grup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estudiante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Estudiantes\",\"relationName\":\"EstudiantesToGrupos\",\"relationFromFields\":[\"fk_id_est\"],\"relationToFields\":[\"pk_id_est\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Cambios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cambios\",\"relationName\":\"CambiosToGrupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Carpetas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Carpetas\",\"relationName\":\"CarpetasToGrupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Bibliografias\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bibliografias\",\"relationName\":\"BibliografiasToGrupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GrupoConAcceso\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GrupoConAcceso\",\"relationName\":\"GrupoConAccesoToGrupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Cambios\":{\"dbName\":null,\"fields\":[{\"name\":\"pk_id_camb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_tip_camb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_fecha_camb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estudiante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Estudiantes\",\"relationName\":\"CambiosToEstudiantes\",\"relationFromFields\":[\"fk_id_est\"],\"relationToFields\":[\"pk_id_est\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Carpeta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Carpetas\",\"relationName\":\"CambiosToCarpetas\",\"relationFromFields\":[\"fk_id_carp\"],\"relationToFields\":[\"pk_id_carp\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_carp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grupo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"CambiosToGrupos\",\"relationFromFields\":[\"fk_id_grup\"],\"relationToFields\":[\"pk_id_grup\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_grup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)



const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "generated/client/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "generated/client/schema.prisma")
