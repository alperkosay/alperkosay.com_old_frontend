import { User } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../prisma/client";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method === "POST") {

        const { email, password, userName }: User = req.body;
        try {
            const newUser = await prisma.user.create({
                data: {
                    email,
                    password,
                    userName
                }
            })
            prisma.$disconnect();

            return res.json(newUser);
        } catch (error) {
            return res.json({
                error
            })
        }
    }
}   