import { NextResponse } from "next/server";

const isLoggedIn: boolean = false;

export function middleware(request: Request) {
  if (!isLoggedIn && request.url === "http://localhost:3000/feed") {
    return NextResponse.redirect(new URL("/join", request.url));
  }
  return NextResponse.next();
}
