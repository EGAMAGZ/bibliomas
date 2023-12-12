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
});

export type Pagination<T> = ApiResponse<T[]> & {
  pagination: {
    totalRecords: number;
    totalPages: number;
    currentPage: number;
  };
};
