import { FloatingNav } from "@/components/floating-navbar";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { TracingBeam } from "@/components/tracing-beam";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import { IconHome, IconRefresh } from "@tabler/icons-react";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
            <Accordion
              type="single"
              collapsible
              defaultValue="item-1"
              className="mb-10"
            >
              <AccordionItem value="item-1">
                <AccordionTrigger>What we do?</AccordionTrigger>
                <AccordionContent>
                  We are an AI image generation tool. Use your imagination to
                  create photo-realistic digital art on the go.
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
