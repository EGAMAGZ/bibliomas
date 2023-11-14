import { IconFolder, IconListNumbers, IconUsersGroup } from "@tabler-icons";
import { RouteContext } from "$fresh/server.ts";
import { Data } from "@/schema/data.ts";
import SessionState from "@/schema/session-state.ts";
import prismaClient from "@/database/prisma.ts";

export default async function InicioSesionPage(
  _req: Request,
  ctx: RouteContext<Data, SessionState>,
) {
  const totalFolders = await prismaClient.carpetas.count({
    where: {
      fk_id_est: ctx.state._id,
    },
  });

  const totalBibliographies = await prismaClient.bibliografias.count({
    where: {
      fk_id_est: ctx.state._id,
    },
  });

  const totalGroupsCreated = await prismaClient.grupos.count({
    where: {
      fk_id_est: ctx.state._id,
    },
  });

  const totalGroupsJoined = await prismaClient.grupoConAcceso.count({
    where: {
      fk_id_est: ctx.state._id,
    },
  });

  const totalGroups = totalGroupsCreated + totalGroupsJoined;

  return (
    <div class="flex justify-center">
      <div class="container p-4 mt-16 lg:p-0 flex flex-col items-center gap-4">
        <div class="flex flex-col lg:text-center">
          <span class="text-4xl lg:text-6xl font-sans font-bold">
            Bienvenido a BIBLIOMAS
          </span>
          <span class="font-sans text-xl md:text-2xl">
            Donde te ayudamos a la mejor calidad de tus fuentes de información
          </span>
        </div>
        <div class="stats shadow font-sans  stats-vertical md:stats-horizontal">
          <div class="stat">
            <div class="stat-figure">
              <IconListNumbers size={48} />
            </div>
            <div class="stat-title">
              Referencias creadas
            </div>
            <div class="stat-value">
              {totalBibliographies}
            </div>
          </div>

          <div class="stat">
            <div class="stat-figure">
              <IconFolder size={48} />
            </div>
            <div class="stat-title">
              Carpetas creadas
            </div>
            <div class="stat-value">
              {totalFolders}
            </div>
          </div>

          <div class="stat">
            <div class="stat-figure">
              <IconUsersGroup size={48} />
            </div>
            <div class="stat-title">
              Grupos registrados
            </div>
            <div class="stat-value">
              {totalGroups}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
