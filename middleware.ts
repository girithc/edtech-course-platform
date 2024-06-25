import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("auth_token");
  const { pathname } = request.nextUrl;

  if (!authToken) {
    if (
      pathname === "/feed" ||
      pathname === "/join" ||
      pathname === "/tools" ||
      pathname === "/"
    ) {
      return NextResponse.next();
    } else if (pathname === "/login") {
      return NextResponse.redirect(new URL("/join", request.url));
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  } else {
    if (
      pathname === "/feed" ||
      pathname === "/join" ||
      pathname === "/" ||
      pathname === "/tools"
    ) {
      return NextResponse.next();
    } else if (pathname === "/login") {
      return NextResponse.redirect(new URL("/join", request.url));
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}
