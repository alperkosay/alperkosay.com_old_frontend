const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();



async function main(cb) {
    try {

        await cb();

        await prisma.$disconnect()
    } catch (e) {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    }
}

// main()
//     .then(async () => {
//         await prisma.$disconnect()
//     })
//     .catch(async (e) => {
//         console.error(e)
//         await prisma.$disconnect()
//         process.exit(1)
//     })

export {
    prisma,
    main
}