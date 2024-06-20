"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Link from "next/link";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { BackgroundBeams } from "@/components/background-beams";
import { FlipWords } from "@/components/flip-words";
import { ArrowRight, UnderlineIcon } from "lucide-react";
import { Tabs } from "@/components/tabs";
import Image from "next/image";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { FontBoldIcon, FontItalicIcon } from "@radix-ui/react-icons";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import PaymentButton from "@/components/payment-button";

const World = dynamic(
  () => import("../components/globe").then((m) => m.World),
  {
    ssr: false,
  }
);

const DummyContent: React.FC = () => {
  return (
    <Image
      src="/sky.jpeg"
      alt="dummy image"
      width={800}
      height={800}
      className="object-cover object-left-top h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};

const GlobeDemo: React.FC = () => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => setIsScriptLoaded(true);
    script.onerror = () => console.error("Razorpay script failed to load");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center dark:bg-black bg-slate-50 w-full overflow-hidden p-4">
      <div className="absolute inset-0 z-0">
        <BackgroundBeams />
      </div>

      <div className="max-w-7xl w-full relative overflow-hidden z-5">
        <div className="flex items-center justify-between">
          <div className="items-center md:flex"></div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center">
          <p className="text-neutral-600 dark:text-neutral-200 sm:text-base">
            The Exclusive School Made For All.
          </p>
          <p className="text-5xl text-center md:text-6xl lg:text-7xl mb-5 mt-5">
            Grad School
          </p>
          <div className="flex flex-row space-x-2 md:space-x-4">
            <Link href={"/join"}>
              <button className="w-40 h-10 rounded-xl bg-black dark:bg-white border dark:border-white border-transparent text-white dark:text-black text-sm">
                Join Now
              </button>
            </Link>
            <PaymentButton />
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-8">
          <HoverEffect items={projects} className="dark:bg-blue" />
        </div>
      </div>
    </div>
  );
};

export default GlobeDemo;

export const projects = [
  {
    title: "Stripe",
    description:
      "A technology company that builds economic infrastructure for the internet.",
    link: "https://stripe.com",
  },
  {
    title: "Netflix",
    description:
      "A streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.",
    link: "https://netflix.com",
  },
  {
    title: "Google",
    description:
      "A multinational technology company that specializes in Internet-related services and products.",
    link: "https://google.com",
  },
  {
    title: "Meta",
    description:
      "A technology company that focuses on building products that advance Facebook's mission of bringing the world closer together.",
    link: "https://meta.com",
  },
  {
    title: "Amazon",
    description:
      "A multinational technology company focusing on e-commerce, cloud computing, digital streaming, and artificial intelligence.",
    link: "https://amazon.com",
  },
  {
    title: "Microsoft",
    description:
      "A multinational technology company that develops, manufactures, licenses, supports, and sells computer software, consumer electronics, personal computers, and related services.",
    link: "https://microsoft.com",
  },
];
