import { getSession } from "next-auth/react"
import { main, prisma } from "../../../prisma/client"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"


export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)


    if (req.method === "GET") {

        main(async function () {
            try {
                const sectionData = await prisma.sectionData.findMany({
                    include: {
                        Gallery: true
                    }
                })

                res.json(sectionData)
            } catch (error) {
                res.status(500).json({
                    message: "error"
                })
            }
        })

        return;
    }

    if (!session && session?.user?.role !== "admin") {
        return res.status(401).json({
            message: "unauthorized"
        })
    }

    if (req.method === "POST") {

        /** @type {import("@prisma/client").SectionData} */
        const body = req.body;
        console.log('body', body)

        main(async function () {
            try {
                main(async function () {
                    const section = await prisma.sectionData.create({
                        data: {
                            section: body.section,
                            content: body.content,
                            description: body.description,
                            firstLinkHref: body.firstLinkHref,
                            secondLinkHref: body.secondLinkHref,
                            firstLinkText: body.firstLinkText,
                            secondLinkText: body.secondLinkText,
                            title: body.title,
                            Gallery: !body.imageLinkHref ? false : {
                                create: {
                                    title: body?.imageTitle,
                                    linkHref: body.imageLinkHref
                                }
                            }
                        },
                    })

                    return res.json({
                        data: section
                    });
                })
            } catch (error) {
                return res.status(500).json({
                    message: "error",
                    error
                })
            }

        })
        return;
    }


    if (req.method === "PUT") {

        try {
            const body = req.body;

            main(async function () {
                const section = await prisma.sectionData.update({
                    data: body,
                    where: {
                        section: body.section
                    }
                })

                return res.json({
                    data: section
                })
            })

        } catch (error) {
            return res.status(500).json({
                error
            })
        }
        return;
    }


    if (req.method === "DELETE") {
        try {
            const body = req.body;

            main(async function () {
                const section = await prisma.sectionData.delete({
                    where: {
                        section: body.section
                    }
                })
            })

        } catch (error) {
            res.status(500).json({
                error
            })
        }
        return;
    }

}