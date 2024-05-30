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

const breadcrumbItems = [{ title: "Feed", link: "/feed" }];

export default function page() {
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
                Top AI Image Generation Tools
              </h1>
              <p className="mb-4">
                Here’s a list of top AI image generation tools, providing a mix
                of offerings that cater to both professionals and hobbyists
                looking for creative visual content:
              </p>
              <ul className="list-disc space-y-4 pl-5">
                <li>
                  <strong className="font-semibold">DALL-E 2 by OpenAI</strong>
                  <p>
                    <em className="italic">Description:</em> Advanced AI capable
                    of generating high-quality images from textual descriptions.
                    Known for its ability to create detailed and contextually
                    accurate images based on complex prompts.
                  </p>
                </li>
                <li>
                  <strong className="font-semibold">Stable Diffusion</strong>
                  <p>
                    <em className="italic">Description:</em> An open-source AI
                    model that allows users to generate detailed images from
                    textual descriptions. It supports custom fine-tuning and is
                    popular due to its flexibility and accessibility.
                  </p>
                </li>
                <li>
                  <strong className="font-semibold">Midjourney</strong>
                  <p>
                    <em className="italic">Description:</em> An independent
                    research lab’s AI that transforms textual descriptions into
                    rich, detailed artworks. Known for its distinctive style and
                    high-quality artistic outputs, commonly used for generating
                    illustrations and concept art.
                  </p>
                </li>
                <li>
                  <strong className="font-semibold">Artbreeder</strong>
                  <p>
                    <em className="italic">Description:</em> A platform that
                    blends images to create new visuals via genetic algorithms.
                    Users can adjust sliders to influence traits and mix various
                    genes of images to produce unique results.
                  </p>
                </li>
                <li>
                  <strong className="font-semibold">Deep Dream</strong>
                  <p>
                    <em className="italic">Description:</em> Originally
                    developed by Google, this tool uses a neural network to
                    enhance and modify images in a surreal, dream-like manner,
                    often enhancing patterns and textures in unexpected ways.
                  </p>
                </li>
                <li>
                  <strong className="font-semibold">RunwayML</strong>
                  <p>
                    <em className="italic">Description:</em> Offers an
                    easy-to-use interface to implement machine learning
                    techniques for creative projects, including image
                    generation. It’s designed to make AI accessible to creatives
                    without a programming background.
                  </p>
                </li>
                <li>
                  <strong className="font-semibold">
                    Craiyon (formerly DALL-E Mini)
                  </strong>
                  <p>
                    <em className="italic">Description:</em> An AI model capable
                    of generating images from textual descriptions, offering a
                    more accessible and less powerful alternative to more
                    advanced models like DALL-E 2.
                  </p>
                </li>
                <li>
                  <strong className="font-semibold">NightCafe Studio</strong>
                  <p>
                    <em className="italic">Description:</em> An AI art generator
                    tool that uses techniques like neural style transfer and
                    others to create unique and artistic images based on user
                    prompts.
                  </p>
                </li>
                <li>
                  <strong className="font-semibold">DeepArt</strong>
                  <p>
                    <em className="italic">Description:</em> Utilizes an
                    algorithm inspired by the human brain to transform your
                    photos into artworks in the styles of famous artists like
                    Van Gogh, Picasso, and others.
                  </p>
                </li>
                <li>
                  <strong className="font-semibold">Luminar AI</strong>
                  <p>
                    <em className="italic">Description:</em> Focuses on
                    enhancing photo quality through AI-driven tools. It
                    automates common editing tasks like sky replacement and
                    portrait touch-ups, making sophisticated photo editing more
                    accessible.
                  </p>
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
