import { FloatingNav } from "@/components/floating-navbar";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { TracingBeam } from "@/components/tracing-beam";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { IconHome, IconRefresh, IconMessageDots } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpCircle, ArrowDownCircle, MessageSquare } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HoverBorderGradient } from "@/components/ui/hover-body-gradient";

export default async function Page({ params }: { params: { id: string } }) {
  //console.log(params.id);

  const navItems = [
    {
      name: "home",
      link: "/feed",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "refresh",
      link: "/feed/" + params.id,
      icon: (
        <IconRefresh className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];

  const scrollingWrapperStyle = {
    overflowX: "scroll",
    overflowY: "hidden",
    whiteSpace: "nowrap",
    height: "80px",
    marginBottom: "20px",
    width: "100%",
    WebkitOverflowScrolling: "touch",
  };

  const cardStyle = {
    display: "inline-block",
    border: "2px solid red",
    width: "150px",
    height: "75px",
    background: "black",
    color: "white",
    marginRight: "3px",
  };

  //console.log("Content", post.content);

  return (
    <>
      <div
        className="flex-col 
          space-y-4 p-4 "
      >
        <FloatingNav navItems={navItems} />

        <div className="flex items-center justify-between space-y-2">
          <div className="items-center space-x-2 md:flex">
            <Link href={"/feed"}>
              <Button variant={"outline"}>Home</Button>
            </Link>
            <Link href={"/talk"}>
              <Button>Talk</Button>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex items-center justify-center p-4 md:p-6">
          <div className="w-[350px] sm:w-[650px]">
            <AspectRatio ratio={16 / 9} className="mb-5">
              <Image
                src="/sky.jpeg"
                alt="Image"
                layout="fill"
                className="rounded-md object-cover"
              />
            </AspectRatio>

            <Tabs defaultValue="aboutus" className="">
              <TabsList className="mb-5">
                <TabsTrigger value="aboutus">About Us</TabsTrigger>
                <TabsTrigger value="discussion">Discussion</TabsTrigger>
              </TabsList>

              <TabsContent value="aboutus">
                <Accordion
                  type="single"
                  collapsible
                  defaultValue="item-1"
                  className="mb-5 py-5"
                >
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What we do?</AccordionTrigger>
                    <AccordionContent>
                      We are an AI image generation tool. Use your imagination
                      to create photo-realistic digital art on the go.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Pricing?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Age Rating?</AccordionTrigger>
                    <AccordionContent>8+.</AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Is it accessible?</AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              <TabsContent value="discussion">
                <div className=" flex justify-start text-center">
                  <HoverBorderGradient
                    containerClassName="rounded-lg"
                    as="button"
                    className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2 text-sm"
                  >
                    <span>post +</span>
                  </HoverBorderGradient>
                </div>
                <div className="h-96 overflow-y-auto mt-5 mb-10">
                  <div className="flex flex-col mt-1 bg-light rounded-xl py-4 mb-4 border">
                    <div className="flex items-start px-4">
                      <div className="flex flex-col items-center bg-secondary rounded-md p-3">
                        <button className="w-3 h-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 cursor-pointer">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 4v16m8-8H4"
                            ></path>
                          </svg>
                        </button>
                        <div className="text-md my-3">0</div>
                        <button className="w-3 h-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 cursor-pointer">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20 12H4"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div className="flex flex-col flex-1 px-4 justify-between">
                        <div className="flex items-center text-xs font-bold leading-tight mb-2">
                          Danny Hart
                          <span className="ml-2 text-xs font-normal text-gray-500">
                            2 weeks ago
                          </span>
                        </div>
                        <div className="mb-2 text-sm leading-loose text-gray-600">
                          Wow!!! how did you create this?
                        </div>
                        <div className="flex">
                          <button className="inline-flex items-center">
                            <MessageSquare className="h-4 w-4 text-gray-600 dark:text-white" />
                            <p className="text-xs ml-1">reply</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-1 bg-light rounded-xl py-4 mb-4 border">
                    <div className="flex items-start px-4">
                      <div className="flex flex-col items-center bg-secondary rounded-md p-3">
                        <button className="w-3 h-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 cursor-pointer">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 4v16m8-8H4"
                            ></path>
                          </svg>
                        </button>
                        <div className="text-md my-3">0</div>
                        <button className="w-3 h-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 cursor-pointer">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20 12H4"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div className="flex flex-col flex-1 px-4 justify-between">
                        <div className="flex items-center text-xs font-bold leading-tight mb-2 ">
                          Danny Hart
                          <span className="ml-2 text-xs font-normal text-gray-500">
                            2 weeks ago
                          </span>
                        </div>
                        <div className="mb-2 text-sm  leading-loose text-gray-600">
                          Wow!!! how did you create this?
                        </div>
                        <div className="flex">
                          <button className="inline-flex items-center  ">
                            <IconMessageDots className="h-4 w-4 text-gray-600 dark:text-white" />{" "}
                            <p className="text-xs ml-1">reply</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-1 bg-light rounded-xl py-4 mb-4 border">
                    <div className="flex items-start px-4">
                      <div className="flex flex-col items-center bg-secondary rounded-md p-3">
                        <button className="w-3 h-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 cursor-pointer">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 4v16m8-8H4"
                            ></path>
                          </svg>
                        </button>
                        <div className="text-md my-3">0</div>
                        <button className="w-3 h-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 cursor-pointer">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20 12H4"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div className="flex flex-col flex-1 px-4 justify-between">
                        <div className="flex items-center text-xs font-bold leading-tight mb-2 ">
                          Danny Hart
                          <span className="ml-2 text-xs font-normal text-gray-500">
                            2 weeks ago
                          </span>
                        </div>
                        <div className="mb-2 text-sm  leading-loose text-gray-600">
                          Wow!!! how did you create this?
                        </div>
                        <div className="flex">
                          <button className="inline-flex items-center  ">
                            <IconMessageDots className="h-4 w-4 text-gray-600 dark:text-white" />{" "}
                            <p className="text-xs ml-1">reply</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col mt-1 bg-light rounded-xl py-4 mb-4 border">
                    <div className="flex items-start px-4">
                      <div className="flex flex-col items-center bg-secondary rounded-md p-3">
                        <button className="w-3 h-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 cursor-pointer">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M12 4v16m8-8H4"
                            ></path>
                          </svg>
                        </button>
                        <div className="text-md my-3">0</div>
                        <button className="w-3 h-3 text-gray-600 hover:text-gray-900 dark:text-gray-400 cursor-pointer">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M20 12H4"
                            ></path>
                          </svg>
                        </button>
                      </div>
                      <div className="flex flex-col flex-1 px-4 justify-between">
                        <div className="flex items-center text-xs font-bold leading-tight mb-2 ">
                          Danny Hart
                          <span className="ml-2 text-xs font-normal text-gray-500">
                            2 weeks ago
                          </span>
                        </div>
                        <div className="mb-2 text-sm  leading-loose text-gray-600">
                          Wow!!! how did you create this?
                        </div>
                        <div className="flex">
                          <button className="inline-flex items-center  ">
                            <IconMessageDots className="h-4 w-4 text-gray-600 dark:text-white" />{" "}
                            <p className="text-xs ml-1">reply</p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            </Tabs>

            <div className="mb-10">
              <h2 className="text-lg font-bold mb-4">Similar AI Tools</h2>
              <div className="flex space-x-10 overflow-x-auto p-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex-shrink-0 w-60">
                    <AspectRatio ratio={14 / 10}>
                      <Image
                        src="/sky.jpeg"
                        alt={`Image ${item}`}
                        layout="fill"
                        className="rounded-md object-cover"
                      />
                    </AspectRatio>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
