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
    <div className="flex justify-center">
      <div className="container p-4 mt-16 lg:p-0 flex flex-col items-center gap-4">
        <div className="flex flex-col lg:text-center">
          <span className="text-4xl lg:text-6xl font-sans font-bold">
            Bienvenido a BIBLIOMAS
          </span>
          <span className="font-sans text-xl md:text-2xl">
            Donde te ayudamos a la mejor calidad de tus fuentes de información
          </span>
        </div>
        <div className="stats shadow font-sans  stats-vertical md:stats-horizontal">
          <div className="stat">
            <div className="stat-figure">
              <IconListNumbers size={48} />
            </div>
            <div className="stat-title">
              Referencias creadas
            </div>
            <div className="stat-value">
              {totalBibliographies}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <IconFolder size={48} />
            </div>
            <div className="stat-title">
              Carpetas creadas
            </div>
            <div className="stat-value">
              {totalFolders}
            </div>
          </div>

          <div className="stat">
            <div className="stat-figure">
              <IconUsersGroup size={48} />
            </div>
            <div className="stat-title">
              Grupos registrados
            </div>
            <div className="stat-value">
              {totalGroups}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
