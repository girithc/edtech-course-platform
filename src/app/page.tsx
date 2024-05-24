import Image from "next/image";
import { AccordionDemo } from "../accordion";
import { ChatLayout } from "@/chat/chat-layout";
import { cookies } from "next/headers";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { GitHubLogoIcon } from "@radix-ui/react-icons";




export default function Home() {
  const layout = cookies().get("react-resizable-panels:layout");
  const defaultLayout = layout ? JSON.parse(layout.value) : undefined;


  return (
    <main className="flex h-[calc(100dvh)] flex-col items-center justify-center p-4 md:px-24 py-32 gap-4">
      <div className="flex justify-between max-w-5xl w-full items-center">
   
        <Link href="#" className="text-4xl font-bold text-gradient">alex</Link>
       
      </div>

      <div className="z-10 border rounded-lg max-w-5xl w-full h-full text-sm lg:flex">
        <ChatLayout defaultLayout={defaultLayout} navCollapsedSize={8} />
      </div>

      <div className="flex justify-between max-w-5xl w-full items-start text-xs md:text-sm text-muted-foreground ">
      </div>
    </main>
  );
}
