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
          space-y-4 p-2 "
      >
        <FloatingNav navItems={navItems} />

        <div className="flex items-center justify-center p-2 md:p-6 gap-4">
          <div className="items-center space-x-2 md:flex">
            <Link href={"/feed"}>
              <Button variant={"outline"}>Home</Button>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <ThemeToggle />
          </div>
        </div>
        <div className="flex items-center justify-center ">
          <div className="w-full sm:w-2/3 p-4 md:p-8">
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
                <TabsTrigger value="aboutus">Course Work</TabsTrigger>
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
                    <AccordionTrigger>Introduction</AccordionTrigger>
                    <AccordionContent>
                      Welcome to our comprehensive course on earning money in
                      finance through stocks, options, and futures. This course
                      is designed to equip you with the knowledge and tools
                      needed to navigate the Indian financial market
                      successfully. Whether you are a beginner or an experienced
                      trader, our course provides valuable insights and
                      practical strategies tailored for the Indian audience.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>What is Finance?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        <strong>Topic Sentence:</strong> Finance is the science
                        of managing money and investments.
                      </p>
                      <p>
                        <strong>Evidence:</strong> The Indian financial system
                        encompasses various markets and instruments, including
                        stocks, bonds, derivatives, and more.
                      </p>
                      <p>
                        <strong>Discussion:</strong> Understanding the
                        principles of finance is crucial for making informed
                        decisions about investments. In India, finance plays a
                        significant role in the economy, influencing everything
                        from personal savings to corporate growth. For instance,
                        knowing how to save and invest your money can help you
                        plan for your future, like saving for your education or
                        buying a house. The financial market in India is
                        regulated by entities like SEBI (Securities and Exchange
                        Board of India) and RBI (Reserve Bank of India),
                        ensuring stability and transparency.
                      </p>
                      <p>
                        <strong>Conclusion:</strong> A solid foundation in
                        finance will empower you to make strategic investment
                        choices, contributing to your financial growth and
                        stability.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What are Stocks?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        <strong>Topic Sentence:</strong> Stocks represent
                        ownership in a company and entitle shareholders to a
                        portion of the company's profits.
                      </p>
                      <p>
                        <strong>Evidence:</strong> The Bombay Stock Exchange
                        (BSE) and the National Stock Exchange (NSE) are the two
                        primary stock exchanges in India, hosting thousands of
                        companies across various sectors.
                      </p>
                      <p>
                        <strong>Discussion:</strong> Investing in stocks allows
                        individuals to participate in the growth of companies.
                        Imagine you own a piece of a big company like Reliance
                        or TCS. When the company makes money, you make money
                        too. In India, stocks are a popular investment vehicle
                        due to their potential for high returns. For example, if
                        you bought shares of Infosys 10 years ago, their value
                        would have increased significantly today. However, stock
                        investments also come with risks, and it is essential to
                        conduct thorough research and analysis. Tools such as
                        technical analysis, fundamental analysis, and staying
                        updated with market news are critical for successful
                        stock trading. You can start by using platforms like
                        Zerodha, Upstox, and Groww to buy and sell stocks.
                      </p>
                      <p>
                        <strong>Conclusion:</strong> By understanding how stocks
                        work and leveraging available resources, you can build a
                        diversified portfolio that aligns with your financial
                        goals.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>What are Options?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        <strong>Topic Sentence:</strong> Options are financial
                        derivatives that give buyers the right, but not the
                        obligation, to buy or sell an asset at a predetermined
                        price.
                      </p>
                      <p>
                        <strong>Evidence:</strong> NSE offers various options
                        contracts that are widely traded in the Indian market.
                      </p>
                      <p>
                        <strong>Discussion:</strong> Options can be a powerful
                        tool for investors looking to hedge their risks or
                        speculate on the future price of an asset. Think of
                        options like a ticket to buy something at a fixed price
                        in the future. If the price goes up, you can buy it
                        cheaper with your ticket, or you can choose not to buy
                        it if the price goes down. For example, if you think the
                        price of Tata Motors' stock will rise in the next three
                        months, you can buy a call option. If the stock price
                        increases as expected, you can buy the stock at the
                        lower price specified in the option. However, options
                        trading requires a good understanding of market trends
                        and strategies. Platforms like Sensibull and Zerodha
                        Kite provide educational resources and tools to help you
                        trade options effectively.
                      </p>
                      <p>
                        <strong>Conclusion:</strong> With proper knowledge and
                        strategies, options trading can enhance your investment
                        portfolio and offer significant returns.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>What are Futures?</AccordionTrigger>
                    <AccordionContent>
                      <p>
                        <strong>Topic Sentence:</strong> Futures are
                        standardized contracts to buy or sell an asset at a
                        specified future date and price.
                      </p>
                      <p>
                        <strong>Evidence:</strong> Futures contracts on indices,
                        commodities, and currencies are actively traded on the
                        NSE and MCX in India.
                      </p>
                      <p>
                        <strong>Discussion:</strong> Futures contracts are often
                        used by investors to hedge against price fluctuations or
                        to speculate on price movements. Imagine agreeing today
                        to buy 100 kilograms of rice at ₹40 per kilogram three
                        months from now. If the price of rice increases to ₹50
                        per kilogram, you still pay only ₹40, saving money.
                        Conversely, if the price drops to ₹30, you still have to
                        pay ₹40. In India, futures trading is common in
                        commodities like gold, silver, and crude oil, as well as
                        indices like Nifty 50. Futures trading requires a good
                        understanding of market dynamics and risk management.
                        Platforms like Zerodha, Upstox, and ICICI Direct offer
                        futures trading facilities along with educational
                        resources.
                      </p>
                      <p>
                        <strong>Conclusion:</strong> Futures can provide
                        opportunities for significant profits but also come with
                        high risks. Proper education and risk management
                        strategies are essential for successful futures trading.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-6">
                    <AccordionTrigger>
                      How to make Passive Money?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        <strong>Topic Sentence:</strong> Passive income is money
                        earned with minimal active effort, allowing you to
                        generate revenue while focusing on other activities.
                      </p>
                      <p>
                        <strong>Evidence:</strong> Dividend-paying stocks, real
                        estate investments, and mutual funds are common sources
                        of passive income in India.
                      </p>
                      <p>
                        <strong>Discussion:</strong> Passive income streams can
                        provide financial stability and growth over time. For
                        example, investing in dividend-paying stocks like HDFC
                        Bank or Infosys can earn you regular income without
                        actively trading. Similarly, investing in real estate
                        properties and renting them out can generate monthly
                        rental income. Mutual funds, especially index funds,
                        allow you to invest in a diversified portfolio with
                        professional management, providing steady returns.
                        Platforms like Groww, Zerodha Coin, and Scripbox offer
                        easy ways to invest in mutual funds and stocks for
                        passive income.
                      </p>
                      <p>
                        <strong>Conclusion:</strong> Building passive income
                        streams can help you achieve financial freedom and
                        reduce dependency on a single source of income.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-7">
                    <AccordionTrigger>
                      How to make Active Money?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        <strong>Topic Sentence:</strong> Active income is money
                        earned through direct efforts, such as working a job,
                        freelancing, or actively trading.
                      </p>
                      <p>
                        <strong>Evidence:</strong> Day trading, freelancing, and
                        starting a business are popular ways to earn active
                        income in India.
                      </p>
                      <p>
                        <strong>Discussion:</strong> Active income requires
                        continuous effort and involvement. For instance, day
                        trading involves buying and selling stocks within the
                        same trading day to profit from short-term price
                        movements. This requires a good understanding of market
                        trends, technical analysis, and quick decision-making.
                        Freelancing allows you to offer services like graphic
                        design, content writing, or software development on
                        platforms like Upwork, Freelancer, and Fiverr. Starting
                        a small business or an online store on platforms like
                        Amazon, Flipkart, or Shopify can also generate active
                        income through sales. Active income streams can be
                        lucrative but require time, effort, and skills.
                      </p>
                      <p>
                        <strong>Conclusion:</strong> By actively engaging in
                        various income-generating activities, you can
                        significantly boost your earnings and achieve your
                        financial goals faster.
                      </p>
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
            {/*
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
            */}
          </div>
        </div>
      </div>
    </>
  );
}
