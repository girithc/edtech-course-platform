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
              <button className="w-40 h-10 rounded-xl  border bg-black dark:bg-white text-white dark:text-black text-sm">
                Join Now
              </button>
            </Link>
            <Link href={"/join"}>
              <button className="w-40 h-10 rounded-xl  border dark:border-white border-grey text-black dark:text-white text-sm">
                Existing User
              </button>
            </Link>
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
    title: "Affordable Course",
    description:
      "Learn to master your personal finances with our Affordable Course. Discover how to create and stick to a budget, save money, and achieve your financial goals. Affordable at just ₹49, less than the price of a chai and vadapav.",
    link: "/join",
  },
  {
    title: "Passive Income Streams",
    description:
      "Explore various passive income streams and learn how to earn money while you sleep. Discover strategies to create multiple sources of passive income, making it easier to achieve financial freedom.",
    link: "/join",
  },
  {
    title: "Financial Freedom Blueprint",
    description:
      "Create a blueprint for financial freedom with our comprehensive course. Learn how to save, invest, and manage your money wisely, paving the way for a secure financial future.",
    link: "/join",
  },
  {
    title: "Debt-Free Journey",
    description:
      "Embark on a debt-free journey with our course. Discover effective strategies to pay off debt, save money on interest, and become debt-free sooner than you thought possible.",
    link: "/join",
  },
  {
    title: "Investing for Beginners",
    description:
      "Start your investing journey with our beginner-friendly course. Learn the basics of investing, how to create an investment plan, and start building wealth for your future.",
    link: "/join",
  },
  {
    title: "Smart Money Habits",
    description:
      "Develop smart money habits that will set you up for financial success. Learn how to budget effectively, save money on everyday expenses, and make wise financial decisions.",
    link: "/join",
  },
];
