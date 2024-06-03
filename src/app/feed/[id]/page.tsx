import { Button } from "@/components/ui/button";
import Image from "next/image";

import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import { UserNav } from "@/components/layout/user-nav";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import prisma from "../prisma";
import { useRouter } from "next/router";
import { JsonValue } from "@prisma/client/runtime/library";
import Head from "next/head";
import { TracingBeam } from "@/components/tracing-beam";
import { FloatingNav } from "@/components/floating-navbar";
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

const breadcrumbItems = [{ title: "Feed", link: "/feed" }];

interface Author {
  name: string;
}

interface Section {
  heading: string;
  content: string;
}

interface Post {
  id: string;
  title: string;
  summary: string;
  content: {
    sections: Section[];
  } | null; // Allow content to be null
  author?: Author; // Author can be undefined if not included
}

async function getData(id: string): Promise<Post | null> {
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
  //console.log("Posts", post);

  if (!post) {
    return null;
  }

  let postContent: Post["content"] = null;

  if (
    post.content &&
    typeof post.content === "object" &&
    "sections" in post.content
  ) {
    postContent = post.content as unknown as Post["content"];
  }

  let post1: Post = {
    id: post.id,
    title: post.title,
    summary: post.summary,
    author:
      post.author && post.author.name ? { name: post.author.name } : undefined,
    content: postContent,
  };

  return post1;
}

export default async function Page({ params }: { params: { id: string } }) {
  //console.log(params.id);
  const post = await getData(params.id);

  if (!post) {
    return <div>Post not found</div>;
  }

  const navItems = [
    {
      name: "home",
      link: "/feed",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "refresh",
      link: "/feed/" + params.id,
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
  ];

  //console.log("Content", post.content);

  return (
    <>
      <Head>
        <title>{post.title}</title>
        <meta name="description" content={post.summary} />
        <link
          rel="canonical"
          href={`https://blogai-git-main-girithcs-projects.vercel.app/feed/${post.id}`}
        />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.summary,
            author: {
              "@type": "Person",
              name: post.author,
            },
          })}
        </script>
      </Head>
      <TracingBeam className="px-6">
        <div className="flex-1 space-y-4 p-4 pt-6 md:p-6 ">
          <FloatingNav navItems={navItems} />

          <div className="flex items-center justify-between space-y-2">
            <div className=" items-center space-x-2 md:flex">
              <Link href={"/"}>
                <Button variant={"secondary"}>Home</Button>
              </Link>
              <Link href={"/feed"}>
                <Button>Feed</Button>
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <UserNav />
              <ThemeToggle />
            </div>
          </div>
          <div className="flex items-center justify-center space-y-4 p-4 pt-6 md:p-6">
            <div className="z-10 h-full w-full max-w-5xl rounded-lg p-4 text-lg">
              <h1 className="mb-4 text-2xl font-bold">{post.title}</h1>
              {post.content ? (
                <ul className="list-disc space-y-4 pl-5">
                  {post.content.sections.map((section, index) => (
                    <li key={index}>
                      <strong className="font-semibold">
                        {section.heading}
                      </strong>
                      <p>{section.content}</p>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No description available.</p>
              )}
            </div>
          </div>
        </div>
      </TracingBeam>
    </>
  );
}
