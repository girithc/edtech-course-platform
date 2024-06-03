import { GetServerSideProps } from "next";
import { Button } from "@/components/ui/button";
import Image from "next/image";

import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { UserNav } from "@/components/layout/user-nav";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import React from "react";
import prisma from "./prisma";
import { BentoGrid, BentoGridItem } from "@/components/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconUser,
  IconMessage,
  IconHome,
} from "@tabler/icons-react";
import { FloatingNav } from "@/components/floating-navbar";
interface Author {
  name: string | null; // Allow name to be null
}

interface Post {
  id: string;
  title: string;
  summary: string;
  content: {
    sections: Array<{
      heading: string;
      content: string;
    }>;
  } | null; // Allow content to be null
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
  const posts = await getData();
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "/about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  return (
    <>
      <ScrollArea>
        <div className="flex-1 space-y-4 p-4 pt-6 md:p-6">
          <FloatingNav navItems={navItems} />

          <div className="flex items-center justify-between space-y-2">
            <div className="items-center space-x-2 md:flex">
              <Link href={"/"}>
                <Button variant={"secondary"}>Home</Button>
              </Link>
              <Link href={"/talk"}>
                <Button>Talk</Button>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <UserNav />
              <ThemeToggle />
            </div>
          </div>
          <BentoGrid className="max-w-3xl mx-auto">
            {posts.map((post, i) => (
              <Link href={`/feed/${post.id}`}>
                <BentoGridItem
                  key={post.id}
                  title={post.title}
                  description={post.summary}
                  header={<Skeleton />}
                  icon={
                    <IconClipboardCopy className="h-4 w-4 text-neutral-500" />
                  }
                  className={i === 3 || i === 6 ? " md:col-span-2" : " col-2"}
                />
              </Link>
            ))}
          </BentoGrid>
        </div>
      </ScrollArea>
    </>
  );
}

const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Pursuit of Knowledge",
    description: "Join the quest for understanding and enlightenment.",
    header: <Skeleton />,
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Joy of Creation",
    description: "Experience the thrill of bringing ideas to life.",
    header: <Skeleton />,
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Spirit of Adventure",
    description: "Embark on exciting journeys and thrilling discoveries.",
    header: <Skeleton />,
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
  },
];
