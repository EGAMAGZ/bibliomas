import { HandlerContext, Handlers, PageProps } from "$fresh/server.ts";
import SessionState from "@/schema/session-state.ts";
import { Data } from "@/schema/data.ts";
import prismaClient from "@/database/prisma.ts";
import { GroupWithBibliographies } from "@/schema/groups.ts";
import BibliomasSessionProvider from "@/islands/SessionProvider.tsx";
import { useSignal } from "@preact/signals";
import { GroupManagementStates } from "@/schema/states.ts";
import ListGroups from "@/islands/gg-cu/ListGroups.tsx";
import CreateGroupButton from "@/islands/gg-cu/CreateGroupButton.tsx";
import DeleteGroupDialog from "@/islands/gg-cu/DeleteGroupDialog.tsx";

export const handler: Handlers<Data<GroupWithBibliographies[]>, SessionState> =
  {
    async GET(
      req: Request,
      ctx: HandlerContext<Data<GroupWithBibliographies[]>, SessionState>,
    ) {
      const groups: GroupWithBibliographies[] = await prismaClient.grupos
        .findMany(
          {
            where: {
              fk_id_est: ctx.state._id,
            },
            include: {
              Bibliografias: true,
            },
          },
        );
      return await ctx.render({
        data: groups,
        error: "",
      });
    },
  };

export default function Page(
  props: PageProps<Data<GroupWithBibliographies[]>, SessionState>,
) {
  const managerState = useSignal<GroupManagementStates>(
    GroupManagementStates.IDLE,
  );

  const groups = useSignal(props.data.data);

  const deletableGroupId = useSignal<number | null>(null);

  return (
    <div className="flex justify-center">
      <div className="container p-4 2xl:p-0 flex flex-col ">
        <span className="text-4xl lg:text-6xl font-sans font-bold mt-8 mb-16 self-center">
          Gestionar Grupos
        </span>
        <BibliomasSessionProvider
          value={{
            userId: props.state._id,
          }}
        >
          <div class="flex flex-col gap-4">
            <div class="flex justify-end">
              <CreateGroupButton managerState={managerState} />
            </div>
            <ListGroups
              groups={groups}
              managerState={managerState}
              deletableGroupId={deletableGroupId}
            />
          </div>
          <DeleteGroupDialog groups={groups} groupId={deletableGroupId} />
        </BibliomasSessionProvider>
      </div>
    </div>
  );
}
