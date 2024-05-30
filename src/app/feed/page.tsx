import { useRouter } from "next/router";

import { Overview } from "@/components/overview";
import { RecentSales } from "@/components/recent-sales";
import { Button, buttonVariants } from "@/components/ui/button";
import Image from "next/image"; // This is crucial to differentiate from the global Image object
import { ArrowBigUp, ArrowBigDown } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Link from "next/link";
import { cn } from "@/lib/utils";
import BreadCrumb from "@/components/breadcrumb";
import { UserNav } from "@/components/layout/user-nav";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import React from "react";

const breadcrumbItems = [{ title: "Feed", link: "/feed" }];

export default function page() {
  return (
    <>
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4 p-4 pt-6 md:p-6">
          <div className="flex items-center justify-between space-y-2">
            <div className=" items-center space-x-2 md:flex">
              <Link href={"/feed/post"}>
                <Button variant={"secondary"}>post</Button>
              </Link>
              <Link href={"/"}>
                <Button>talk</Button>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              {/* Conditional rendering based on the route */}
              <UserNav />
              <ThemeToggle />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-4 ">
            {Array.from({ length: 8 }).map((_, index) => (
              <Card
                key={index}
                className="md:w-[calc(50% - 20px)] lg:w-[calc(33.333% - 20px)] mb-5 break-inside-avoid"
              >
                <CardContent className="flex items-center justify-center">
                  <Image
                    src="/icon.jpeg"
                    alt="logo"
                    width={135}
                    height={125}
                    layout="fixed"
                  />
                </CardContent>
                <CardHeader>
                  <CardTitle>Create project</CardTitle>
                  <CardDescription>
                    Deploy your new project in one-click. Deploy your new
                    project in one-click. Deploy your new project in one-click.
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Link href={"/feed/post"}>
                    <Button variant="secondary">Read</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="flex items-center justify-between space-y-2">
            <div className=" items-center space-x-2 md:flex">
              <Link href={"/feed/post"}>
                <Button variant={"secondary"}>post</Button>
              </Link>
              <Link href={"/"}>
                <Button>talk</Button>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              {/* Conditional rendering based on the route */}
              <UserNav />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
