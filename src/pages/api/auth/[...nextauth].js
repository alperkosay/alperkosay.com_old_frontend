import { NextAuthOptions } from "next-auth";
import CredentailsProvider from "next-auth/providers/credentials";
import { main, prisma } from "../../../../prisma/client";

import NextAuth from "next-auth/next";

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
            credentials: { userName: { type: "text", label: "asd" }, password: { type: "password", label: "asd" } },
            async authorize(credentials, req) {
                const { userName, password } = credentials;
                let user;
                await main(async function () {
                    user = await prisma.user.findUnique({
                        where: {
                            userName,
                            AND: {
                                password
                            }
                        }
                    })
                })
                console.log('user', user)

                return user
            }
        })
    ],

}

export default NextAuth(authOptions);

