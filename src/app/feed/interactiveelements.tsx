// components/InteractiveElements.js
"use client";

import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { IconLogout } from "@tabler/icons-react";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import Link from "next/link";
import React from "react";

export default function InteractiveElements() {
  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove("auth_token");
    router.push("/");
  };

  return (
    <div className="flex items-center justify-center p-2 md:p-6 gap-4">
      <div className="items-center space-x-2 md:flex">
        <Link href={"/feed"}>
          <Button variant={"outline"}>Home</Button>
        </Link>
      </div>
      <div className="flex items-center gap-2">
        <ThemeToggle />
      </div>
      <div className="flex items-center gap-2">
        <Button variant="outline" size="icon" onClick={handleLogout}>
          <IconLogout className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <IconLogout className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </div>
  );
}
