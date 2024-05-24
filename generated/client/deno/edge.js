const exports = {}
Object.defineProperty(exports, "__esModule", { value: true });

import {
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
  defineDmmfProperty,
  Public,
  getRuntime,
} from '.././runtime/edge-esm.js'

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
    "rootEnvPath": null,
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "5.14.0",
  "engineVersion": "e9771e62de70f79a5e1c604a2d7c8e2a0a874b48",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = [\"deno\"]\n  output          = \"../generated/client\"\n}\n\ndatasource db {\n  provider  = \"postgresql\"\n  url       = env(\"DATABASE_URL\")\n  directUrl = env(\"DIRECT_URL\")\n}\n\nmodel Estudiantes {\n  pk_id_est     String @id @default(uuid())\n  txt_user_est  String @unique\n  txt_email_est String @unique\n  txt_pass_est  String @db.VarChar(255)\n  num_sub_est   Int    @default(1)\n\n  Cambios        Cambios[]\n  Grupos         Grupos[]\n  GrupoConAcceso GrupoConAcceso[]\n  Carpetas       Carpetas[]\n  Bibliografias  Bibliografias[]\n}\n\nenum TipoPublicacion {\n  SitioWeb\n  Libro\n  ArticuloRevista\n  ArticuloPeriodico\n  Peliculas\n}\n\nenum TipoFormato {\n  Apa\n  Chicago\n  Mla\n  Ieee\n}\n\nmodel Bibliografias {\n  pk_id_biblio         Int             @id @default(autoincrement())\n  txt_tip_biblio       TipoPublicacion // Tipo de publicacion\n  txt_fmt_biblio       TipoFormato // Formato de referencia\n  txt_tit_biblio       String // Titulo\n  txt_aut_biblio       String // Autores\n  txt_pag_biblio       String? // Nombre de pagina\n  txt_url_biblio       String? // URL\n  txt_fecha_pub_biblio Int? // Fecha de publicacion\n  txt_fecha_acc_biblio DateTime? // Fecha de acceso\n  txt_ubic_biblio      String? // Ubicacion\n  txt_edit_biblio      String? // Editorial\n  num_volm_biblio      Int? // Volumen\n  num_edic_biblio      Int? // Edicion\n  num_npag_biblio      Int? // Numero de pagina\n  bool_online_biblio   Boolean? // Fuente online\n\n  Grupo      Grupos? @relation(fields: [fk_id_grup], references: [pk_id_grup], onDelete: Cascade, onUpdate: Cascade)\n  fk_id_grup Int?\n\n  Carpeta    Carpetas? @relation(fields: [fk_id_carp], references: [pk_id_carp], onDelete: Cascade, onUpdate: Cascade)\n  fk_id_carp Int?\n\n  Estudiante Estudiantes @relation(fields: [fk_id_est], references: [pk_id_est], onDelete: Cascade, onUpdate: Cascade)\n  fk_id_est  String\n\n  Archivos Archivos[]\n}\n\nmodel Archivos {\n  pk_id_arch   Int    @id @default(autoincrement())\n  txt_url_arch String\n\n  Bibliografias Bibliografias @relation(fields: [fk_id_biblio], references: [pk_id_biblio], onDelete: Cascade, onUpdate: Cascade)\n  fk_id_biblio  Int\n}\n\nmodel Carpetas {\n  pk_id_carp   Int    @id @default(autoincrement())\n  txt_nom_carp String\n\n  Grupo      Grupos? @relation(fields: [fk_id_grup], references: [pk_id_grup], onDelete: Cascade, onUpdate: Cascade)\n  fk_id_grup Int?\n\n  Estudiante Estudiantes @relation(fields: [fk_id_est], references: [pk_id_est], onDelete: Cascade, onUpdate: Cascade)\n  fk_id_est  String\n\n  Cambios       Cambios[]\n  Bibliografias Bibliografias[]\n}\n\nmodel GrupoConAcceso {\n  Grupo      Grupos @relation(fields: [fk_id_grup], references: [pk_id_grup], onDelete: Cascade, onUpdate: Cascade)\n  fk_id_grup Int\n\n  Estudiante Estudiantes @relation(fields: [fk_id_est], references: [pk_id_est], onDelete: Cascade, onUpdate: Cascade)\n  fk_id_est  String\n\n  @@id([fk_id_grup, fk_id_est])\n}\n\nmodel Grupos {\n  pk_id_grup   Int    @id @default(autoincrement())\n  txt_nom_grup String\n\n  Estudiante Estudiantes @relation(fields: [fk_id_est], references: [pk_id_est], onDelete: Cascade, onUpdate: Cascade)\n  fk_id_est  String\n\n  Cambios        Cambios[]\n  Carpetas       Carpetas[]\n  Bibliografias  Bibliografias[]\n  GrupoConAcceso GrupoConAcceso[]\n}\n\nmodel Cambios {\n  pk_id_camb     Int      @id @default(autoincrement())\n  num_tip_camb   Int      @db.SmallInt\n  txt_fecha_camb DateTime\n\n  Estudiante Estudiantes @relation(fields: [fk_id_est], references: [pk_id_est], onDelete: Cascade, onUpdate: Cascade)\n  fk_id_est  String\n\n  Carpeta    Carpetas @relation(fields: [fk_id_carp], references: [pk_id_carp], onDelete: Cascade, onUpdate: Cascade)\n  fk_id_carp Int\n\n  Grupo      Grupos @relation(fields: [fk_id_grup], references: [pk_id_grup], onDelete: Cascade, onUpdate: Cascade)\n  fk_id_grup Int\n}\n",
  "inlineSchemaHash": "1386e28ac0d30cd98c1584c6daf6982190a7fb02282e8732b18d2b2d7f5cbc35",
  "copyEngine": false
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"Estudiantes\":{\"dbName\":null,\"fields\":[{\"name\":\"pk_id_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"uuid\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_user_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_email_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_pass_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_sub_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":1,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Cambios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cambios\",\"relationName\":\"CambiosToEstudiantes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grupos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"EstudiantesToGrupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GrupoConAcceso\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GrupoConAcceso\",\"relationName\":\"EstudiantesToGrupoConAcceso\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Carpetas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Carpetas\",\"relationName\":\"CarpetasToEstudiantes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Bibliografias\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bibliografias\",\"relationName\":\"BibliografiasToEstudiantes\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Bibliografias\":{\"dbName\":null,\"fields\":[{\"name\":\"pk_id_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_tip_biblio\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoPublicacion\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_fmt_biblio\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TipoFormato\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_tit_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_aut_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_pag_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_url_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_fecha_pub_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_fecha_acc_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_ubic_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_edit_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_volm_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_edic_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_npag_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"bool_online_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grupo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"BibliografiasToGrupos\",\"relationFromFields\":[\"fk_id_grup\"],\"relationToFields\":[\"pk_id_grup\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_grup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Carpeta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Carpetas\",\"relationName\":\"BibliografiasToCarpetas\",\"relationFromFields\":[\"fk_id_carp\"],\"relationToFields\":[\"pk_id_carp\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_carp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estudiante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Estudiantes\",\"relationName\":\"BibliografiasToEstudiantes\",\"relationFromFields\":[\"fk_id_est\"],\"relationToFields\":[\"pk_id_est\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Archivos\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Archivos\",\"relationName\":\"ArchivosToBibliografias\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Archivos\":{\"dbName\":null,\"fields\":[{\"name\":\"pk_id_arch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_url_arch\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Bibliografias\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bibliografias\",\"relationName\":\"ArchivosToBibliografias\",\"relationFromFields\":[\"fk_id_biblio\"],\"relationToFields\":[\"pk_id_biblio\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_biblio\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Carpetas\":{\"dbName\":null,\"fields\":[{\"name\":\"pk_id_carp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_nom_carp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grupo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"CarpetasToGrupos\",\"relationFromFields\":[\"fk_id_grup\"],\"relationToFields\":[\"pk_id_grup\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_grup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estudiante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Estudiantes\",\"relationName\":\"CarpetasToEstudiantes\",\"relationFromFields\":[\"fk_id_est\"],\"relationToFields\":[\"pk_id_est\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Cambios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cambios\",\"relationName\":\"CambiosToCarpetas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Bibliografias\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bibliografias\",\"relationName\":\"BibliografiasToCarpetas\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"GrupoConAcceso\":{\"dbName\":null,\"fields\":[{\"name\":\"Grupo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"GrupoConAccesoToGrupos\",\"relationFromFields\":[\"fk_id_grup\"],\"relationToFields\":[\"pk_id_grup\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_grup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estudiante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Estudiantes\",\"relationName\":\"EstudiantesToGrupoConAcceso\",\"relationFromFields\":[\"fk_id_est\"],\"relationToFields\":[\"pk_id_est\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"fk_id_grup\",\"fk_id_est\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Grupos\":{\"dbName\":null,\"fields\":[{\"name\":\"pk_id_grup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_nom_grup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estudiante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Estudiantes\",\"relationName\":\"EstudiantesToGrupos\",\"relationFromFields\":[\"fk_id_est\"],\"relationToFields\":[\"pk_id_est\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Cambios\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Cambios\",\"relationName\":\"CambiosToGrupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Carpetas\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Carpetas\",\"relationName\":\"CarpetasToGrupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Bibliografias\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Bibliografias\",\"relationName\":\"BibliografiasToGrupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"GrupoConAcceso\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"GrupoConAcceso\",\"relationName\":\"GrupoConAccesoToGrupos\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Cambios\":{\"dbName\":null,\"fields\":[{\"name\":\"pk_id_camb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"num_tip_camb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"txt_fecha_camb\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Estudiante\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Estudiantes\",\"relationName\":\"CambiosToEstudiantes\",\"relationFromFields\":[\"fk_id_est\"],\"relationToFields\":[\"pk_id_est\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_est\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Carpeta\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Carpetas\",\"relationName\":\"CambiosToCarpetas\",\"relationFromFields\":[\"fk_id_carp\"],\"relationToFields\":[\"pk_id_carp\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_carp\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Grupo\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Grupos\",\"relationName\":\"CambiosToGrupos\",\"relationFromFields\":[\"fk_id_grup\"],\"relationToFields\":[\"pk_id_grup\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"fk_id_grup\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"TipoPublicacion\":{\"values\":[{\"name\":\"SitioWeb\",\"dbName\":null},{\"name\":\"Libro\",\"dbName\":null},{\"name\":\"ArticuloRevista\",\"dbName\":null},{\"name\":\"ArticuloPeriodico\",\"dbName\":null},{\"name\":\"Peliculas\",\"dbName\":null}],\"dbName\":null},\"TipoFormato\":{\"values\":[{\"name\":\"Apa\",\"dbName\":null},{\"name\":\"Chicago\",\"dbName\":null},{\"name\":\"Mla\",\"dbName\":null},{\"name\":\"Ieee\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)
export { exports as default, Prisma, PrismaClient }

