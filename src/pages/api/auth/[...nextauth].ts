import { NextAuthOptions } from "next-auth";
import CredentailsProvider from "next-auth/providers/credentials";
import prisma from "../../../../prisma/client";

import NextAuth from "next-auth/next";

const authOptions: NextAuthOptions = {
    providers: [
        CredentailsProvider({
            type: "credentials",
            credentials: {
                userName: {
                    type: "text",
                    label: "Kullanıcı Adı"
                },
                password: {
                    type: "password",
                    label: "Şifre"
                }
            },
            async authorize(credentials, req) {

                const user = await prisma.user.findUnique({
                    where: {
                        userName: credentials?.userName,
                        AND: {
                            password: credentials?.password
                        }
                    }
                })

                if (!user) {
                    throw new Error("Geçersiz bilgiler");
                }

                return {
                    ...user,
                    id: user?.id.toString()
                };

            }
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.role = user?.role;
                token.userName = user?.userName;
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
    secret: process.env.NEXAUTH_SECRET
}

export default NextAuth(authOptions);

export { authOptions };