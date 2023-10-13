import { NextAuthOptions } from "next-auth";
import CredentailsProvider from "next-auth/providers/credentials";
import { prisma } from "../../../../prisma/client";


/**
 * @type {NextAuthOptions}
 */
const authOptions = {
    session: {
        strategy: "jwt",
    },
    providers: [
        CredentailsProvider({
            type: "credentials",
            credentials: { username, password },
            authorize(credentials, req) {
                const { username, password } = credentials;

                const user = prisma.user.findUnique({
                    where: {
                        name: username,
                    }
                })

            }
        })
    ]
}