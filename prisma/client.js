import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main(cb) {   
    try {
        await cb();

        await prisma.$disconnect()
    } catch (e) {
        console.error(e)
        await prisma.$disconnect()
    }
}

export {
    prisma,
    main
}