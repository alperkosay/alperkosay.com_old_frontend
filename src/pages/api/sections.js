import { main, prisma } from "../../../prisma/client"


export default async function handler(req, res) {

    if (req.method === "GET") {
        main(async function () {
            const user = await prisma.user.findMany({
                include: {
                    posts: true
                }
            });

            // const user = await prisma.user.create({
            //     data: {
            //         email: "as4124124d",

            //         posts: {
            //             create: {
            //                 title: "asd"
            //             }
            //         }
            //     }
            // })
            console.log('user', user)

            return res.json(user)
        })
    }
    else if (req.method === "POST") {
        const { title } = req.body;
        main(async function () {
            const user = await prisma.user.create({
                data: {
                    title,
                    posts: {
                        create: {
                            title: "asd"
                        }
                    }
                }
            })
        })

    }
}