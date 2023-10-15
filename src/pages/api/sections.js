import prisma from "../../../prisma/client"
import { getServerSession } from "next-auth"
import { authOptions } from "./auth/[...nextauth]"


export default async function handler(req, res) {
    const session = await getServerSession(req, res, authOptions)


    if (req.method === "GET") {

        try {
            const sectionData = await prisma.sectionData.findMany({
                include: {
                    Gallery: true
                }
            })

            return res.json(sectionData)
        } catch (error) {
            return res.status(500).json({
                message: "error"
            })
        }

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

        try {
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

        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    }


    if (req.method === "PUT") {

        const body = req.body;

        try {
            const section = await prisma.sectionData.update({
                data: body,
                where: {
                    section: body.section
                }
            })

            return res.json({
                data: section
            })
        } catch (error) {
            return res.status(500).json({
                error
            })
        }
    }


    if (req.method === "DELETE") {
        const { id } = req.query;
        const _id = Number(id);

        try {

            const section = await prisma.sectionData.delete({
                where: {
                    id: _id,
                },
            
            })
            
            return res.json(section);

        } catch (error) {
            return res.status(500).json({
                error
            })

        }

    }

    await prisma.$disconnect();
}