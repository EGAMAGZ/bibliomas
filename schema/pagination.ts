import { z } from "zod";
import { ApiResponse } from "@/schema/api-response.ts";

export const PaginationParamsSchema = z.object({
  page: z
    .coerce.number({
      invalid_type_error: "Pagina debe ser un numero",
      required_error: "Pagina es requerido",
    })
    .positive({
      message: "Pagina debe ser un numero positivo",
    }),
  limit: z
    .coerce.number({
      invalid_type_error: "Limite debe ser un numero",
      required_error: "Limite es requerido",
    })
    .positive({
      message: "Limite debe ser un numero positivo",
    }),
  userId: z.string({
    invalid_type_error: "Id de usuario debe ser un texto",
    required_error: "Id de usuario es requerido",
  }).nonempty({
    message: "Id de usuario es requerido",
  }).uuid({
    message: "Id de usuario invalido",
  }),
  folderId: z.coerce.number({
    invalid_type_error: "Id de carpeta debe ser un numero",
    required_error: "Id de carpeta es requerido",
  }).nullable(),
  groupId: z.coerce.number({
    invalid_type_error: "Id de carpeta debe ser un numero",
    required_error: "Id de carpeta es requerido",
  }).nullable(),
});

export type Pagination<T> = {
  content: T[];
  pagination: {
    totalRecords: number;
    totalPages: number;
    currentPage: number;
  };
};
