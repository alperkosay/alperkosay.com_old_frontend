import { NextResponse } from "next/server"
export function middleware(req, res) {
    console.log('middleware')
    NextResponse
    return NextResponse.redirect(new URL("/auth/login", req.url))
}


export const config = {
    matcher: ["/dashboard/:path*"]
}