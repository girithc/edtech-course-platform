import { GetServerSideProps } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { UserNav } from "@/components/layout/user-nav";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import React from "react";
import prisma from "./prisma";
import { useRouter } from "next/navigation";

interface Author {
  name: string | null; // Allow name to be null
}

interface Post {
  id: string;
  title: string;
  content: string | null; // Allow content to be null
  author?: Author; // Author can be undefined if not included
}

async function getData() {
  const posts = await prisma.post.findMany({
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  return posts;
}

export default async function Page() {
  const posts = getData();

  return (
    <>
      <ScrollArea className="h-full pl-20 pr-20 pt-10 md:p-30 lg:p-35">
        <div className="flex-1 space-y-4 p-4 pt-6 md:p-6">
          <div className="flex items-center justify-between space-y-2">
            <div className="items-center space-x-2 md:flex">
              <Link href={"/feed"}>
                <Button variant={"secondary"}>Post</Button>
              </Link>
              <Link href={"/"}>
                <Button>Talk</Button>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <UserNav />
              <ThemeToggle />
            </div>
          </div>
          <div className="grid gap-4 md:gap-8 lg:gap-12 xl:gap-16 lf:gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {(await posts).map((post) => (
              <Card
                key={post.id}
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
                  <CardTitle>{post.title}</CardTitle>
                  <CardDescription>
                    {post.content || "No description available."}
                  </CardDescription>
                </CardHeader>
                <CardFooter className="flex justify-between">
                  <Link href={`/feed/${post.id}`}>
                    <Button variant="secondary">Read </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
