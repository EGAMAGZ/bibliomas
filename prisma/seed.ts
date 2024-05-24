import { generateHash } from "@/utils/hash.ts";
import { Prisma, PrismaClient } from "@/generated/client/deno/edge.ts";
import { load } from "https://deno.land/std@0.202.0/dotenv/mod.ts";

const envVars = await load();

const prismaClient = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});
console.log("Prisma connected");

const students: Prisma.EstudiantesCreateInput[] = [
  {
    txt_user_est: "Gamaliel",
    txt_email_est: "gamaliel@bibliomas.com",
    txt_pass_est: generateHash("Gamaliel"),
  },
  {
    txt_user_est: "Kathy",
    txt_email_est: "katherine@bibliomas.com",
    txt_pass_est: generateHash("Katherine"),
  },
  {
    txt_user_est: "Amairani",
    txt_email_est: "Amairani@bibliomas.com",
    txt_pass_est: generateHash("Amairani"),
  },
];

console.log("Creating students...");

await prismaClient.estudiantes.createMany({
  data: students,
});

console.log("Studentes created successfully");

await prismaClient.$disconnect();
console.log("Prisma disconnected");
