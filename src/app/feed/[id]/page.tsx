import { Button } from "@/components/ui/button";
import Image from "next/image";

import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { UserNav } from "@/components/layout/user-nav";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import prisma from "../prisma";
import { useRouter } from "next/router";

const breadcrumbItems = [{ title: "Feed", link: "/feed" }];

interface Author {
  name: string | null; // Allow name to be null
}

interface Post {
  id: string;
  title: string;
  content: string | null; // Allow content to be null
  author?: Author; // Author can be undefined if not included
}

async function getData(id: string | "") {
  const post = await prisma.post.findUnique({
    where: {
      id: id, // Using the id parameter to find a specific post
    },
    include: {
      author: {
        select: { name: true }, // Include author's name in the response
      },
    },
  });
  console.log("Posts", post);

  let post1: Post = {
    id: post!.id,
    title: post!.title,
    content: post!.content,
    author: post!.author ? { name: post!.author.name } : undefined,
  };

  return post1;
}

export default async function page({ params }: { params: { id: string } }) {
  console.log(params.id);
  const result = getData(params.id);

  return (
    <>
      <ScrollArea className="h-full pl-20 pr-20 pt-10 md:p-30 lg:p-35 ">
        <div className="flex-1 space-y-4 p-4 pt-6 md:p-6 ">
          <div className="flex items-center justify-between space-y-2">
            <div className=" items-center space-x-2 md:flex">
              <Link href={"/feed"}>
                <Button variant={"secondary"}>feed</Button>
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
          <div className="flex items-center justify-center space-y-4 p-4 pt-6 md:p-6">
            {" "}
            {/*<BreadCrumb items={breadcrumbItems} />*/}
            <div className="z-10  h-full w-full max-w-5xl  rounded-lg p-4 text-lg">
              <h1 className="mb-4 text-2xl font-bold">
                {(await result).title}
              </h1>
              <p className="mb-4"> </p>
              <ul className="list-disc space-y-4 pl-5">
                <li>
                  <strong className="font-semibold">
                    {(await result).content}
                  </strong>
                  <p>content</p>
                </li>
              </ul>
            </div>{" "}
          </div>
          <div className="flex items-center justify-between space-y-2">
            <div className=" items-center space-x-2 md:flex">
              <Link href={"/feed"}>
                <Button variant={"secondary"}>feed</Button>
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
