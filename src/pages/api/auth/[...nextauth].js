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

                return user
            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user.role; 
                token.userName = user.userName;
            }
            return token;
        },

        async session({ session, token }) {
            if (session.user) {
                session.user.role = token.role;
                session.user.userName = token.userName;
            }
            return session;
        }
    },
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60,
    },
    secret: process.env.SECRET_AUTH_KEY
}

export default NextAuth(authOptions);

export {authOptions};