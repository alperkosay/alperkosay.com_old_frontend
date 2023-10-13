import { NextResponse } from "next/server"
import { main, prisma } from "../prisma/client"
export function middleware(req, res) {


    return NextResponse.redirect(new URL("/auth/login", req.url))
}


export const config = {
    matcher: ["/dashboard/:path*"]
}