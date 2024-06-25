import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth_token");

  if (
    !authToken &&
    (request.nextUrl.pathname === "/feed" ||
      request.nextUrl.pathname === "/tool")
  ) {
    return NextResponse.redirect(new URL("/join", request.url));
  }

  if (authToken && request.nextUrl.pathname === "/login") {
    return NextResponse.redirect(new URL("/feed", request.url));
  }

  if (authToken && request.nextUrl.pathname === "/logout") {
    const response = NextResponse.redirect(new URL("/", request.url));
    response.cookies.delete("auth_token");
    return response;
  }

  return NextResponse.next();
}
