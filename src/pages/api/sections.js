import { main, prisma } from "../../../prisma/client"


export default async function handler(req, res) {

    if (req.method === "GET") {
        main(async function () {
            try {
                const sectionData = await prisma.sectionData.findMany()

                return res.json(sectionData)
            } catch (error) {
                return res.status(500).json({
                    error
                })
            }
        })

    }
    else if (req.method === "POST") {
        const { title, email } = req.body;

        main(async function () {
            try {
                const user = await prisma.post.create({
                    data: {
                        authorId: 1,
                        title,

                    }
                })
                console.log('user', user)

                return res.json(user)
            } catch (error) {
                return res.status(500).json({
                    message: "error",
                    error
                })
            }

        })

    }
}