import {PrismaClient} from "@prisma/client";

const prismaClientSingleton=()=>new PrismaClient();

declare const globalThis: {
    prisma: ReturnType<typeof prismaClientSingleton>
} & typeof global;

const prisma= globalThis.prisma ?? prismaClientSingleton();

export default prisma;


if(process.env.NODE_ENV!=="production") globalThis.prisma=prisma;