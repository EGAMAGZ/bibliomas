# RoomHome

## URL

Pagina de proyecto: <https://roomhome.deno.dev/>

## Requerimientos

| Tecnologia   | Versión | Link                                                                                                      |
| ------------ | ------- | --------------------------------------------------------------------------------------------------------- |
| Deno         | 1.38.0  | [Home](https://deno.com/) [Intalacion](https://docs.deno.com/runtime/manual/getting_started/installation) |
| Fresh        | 1.5.4   | [Home](https://fresh.deno.dev/)                                                                           |
| Preact       | 10.18.1 | [Home](https://preactjs.com/)                                                                             |
| Zod          | 3.22.2  | [Home](https://zod.dev/)                                                                                  |
| Tabler icons | 2.23.0  | [Home](https://tabler-icons.io/)                                                                          |
| Tailwind     | 3.0.23  | [Home](https://tailwindcss.com/)                                                                          |
| Daisyui      | 3.9.2   | [Home](https://daisyui.com/)                                                                              |
| Supabase     | N/A     | [Home](https://supabase.com/)                                                                             |
| Prisma       | 5.5.2   | [Home](https://www.prisma.io/)                                                                            |

## Uso

Antes que nada, se debe instalar Deno:
<https://deno.land/manual/getting_started/installation>

- Para inicializar proyecto:

```shell
deno task start
```

Esto estará observando la carpeta del proyecto y reiniciar en caso de ser
necesario.

- Checar y formatear codigo:

```shell
deno task check
```

- Visualizar los datos registrados: En caso de no contar acceso a Prisma Data
  Platform, se puede el siguiente comando para visualizar los datos en un panel
  de control:

```shell
deno run prisma:studio
```

- Subir cambios de modelo de base de datos: Esto subiran los cambios en la base
  de datos, pero borrara los datos existentes. Automaticamente generará una
  actulización de la libreria para cliente de Prisma.

```shell
deno task prisma:push
```

- Generar manualmente libreria de cliente de Prisma:

```shell
deno task prisma:generate
```

- Dar formato y validar codigo de Prisma:

```shell
deno task prisma:validate
```

- Poblar la base de datos:

```shell
deno task seed
```

## Convención

### Convención de nombres

- Componentes
  - Regla: [id modulo]/[nombre componente en ingles].tsx
  - Ejemplo:
    - is-cu/GroupCard.tsx

- Islands
  - Regla: [id modulo]/[nombre componente en ingles].tsx
  - Ejemplo:
    - is-cu/LoginForm.tsx
    - is-cu/RegisterForm.tsx

- Archivos no mencionados:
  - Regla: [nombre de archivo separado por guinoes medios en ingles]
  - Ejemplo:
    - jwt.ts
    - context-info.ts

- Contantes/Variables:
  - Regla: [nombre en ingles usando camelCase]
  - Ejemplo:
    - passwordErrors
    - isValid
    - formData

- Clases/Enums/Interfaces/Tipos:
  - Regla: [nombre en ingles usando PascalCase]
  - Ejemplo:
    - ButtonProps

- Schema (de Zod)
  - Regla: [nombre en ingles usando PascalCase]Schema
  - Ejemplo:
    - StudentSchema
    - NewStudentSchema

### Estructura del proyecto

A continuación se muestra la estructura propuesta que el proyecto debería
seguir:

- components
- database
- generated/client
- islands
- prisma
- routes
- schema
- utils
- fresh.config.ts
- main.ts

### Carpeta components

En esta carpeta se encuentran los componentes pertenecientes al proyecto,
generalmente cada componente representa un elemento de la pantalla.

### Carpeta islands

En esta carpeta se encuentran los componentes pertenecientes al proyecto,
generalmente cada isla representa un elemento de la pantallla que **requiere
interactividad**.

### Routing y carpeta routes

En esta carpeta se encuentran las rutas de la aplicación. Cada archivo dentro de
esta carpeta representa una ruta, por ejemplo `login.tsx` representa la ruta de
la pantalla de inicio de sesión con la ruta `/login`; `index.tsx` representa la
raiz ruta de la pantalla con la ruta `/`; y por ultimo
`inicio-sesion/cerrar-sesion.tsx` representa la ruta de la pantalla de cierre de
sesión con la ruta `/inicio-sesion/cerrar-sesion`.

## Configuración

### Entornos de desarrollo

Por parte de los entornos se encuentran configurados los siguientes:

- Production

Se encuentran configurados los siguientes entornos de desarrollo:

- Cada entorno se encuentra configurado con la misma instancia de Prisma con
  diferentes entornos de desarrollo (indicado conforme a la variable
  `DIRECT_URL`).

### Sincronizacion de modelo de base de datos

Al hacer commit de los cambios, se sincronizan los cambios con la base de datos
de Prisma. Esto aplica para la rama `master`.

### Linting y formato

Se utilizará el linting y formato proveido por mismo Deno y Prisma, y la
configuracion establecida en `.editorconfig`.

### Variables de entorno utilizados

Tanto para desarrollo como para producción se utilizan las siguientes variables
de entorno en `.env`:

- **DATABASE_URL**: URL que se utiliza para conectarse con Prisma.
- **DIRECT_URL**: URL que se utiliza para conectarse directamente con la base de
  datos (proveida por Supabase).

## Commits

Para los mensajes de los commits, de preferencia hacer uso del estandar de
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/).

## Proyectos de referencia

- [RoomHome](https://github.com/EGAMAGZ/RoomHome)
- [Dotland](https://github.com/denoland/dotland)

## Deploy

Con cada push que se realiza en cualquier rama, se realizara un deploy de
previsualización (preview) en Deno Deploy automaticamente. Al hacer push en la
rama `master`, se creara un deploy de previsualización junto con el de
producción.
