"use client";

import BreadCrumb from "@/components/breadcrumb";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { UserNav } from "@/components/layout/user-nav";
import { ScrollArea } from "@/components/ui/scroll-area";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Image from "next/image";
import PaymentButton from "@/components/payment-button";
import Link from "next/link";

const FormSchema = z.object({
  username: z
    .string()
    .regex(
      /^[a-zA-Z\s]+$/,
      "Name must contain only alphabetic characters and spaces."
    )
    .transform((value) => value.trim())
    .refine((value) => value.replace(/\s/g, "").length >= 2, {
      message: "Name must be at least 2 characters excluding spaces.",
    }),
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits."),
});

export default function Page() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      phone: "",
      course: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Payment initiation logic moved to PaymentButton
  };

  return (
    <>
      <ScrollArea className="h-full ">
        <div className="max-w-5xl mx-auto px-8 ">
          <div className="flex-1 space-y-4 pt-2 md:pt-6 mb-5 md:mb-10 p-5">
            <div className="flex items-center justify-center p-2 md:p-6 gap-4">
              <div className="items-center space-x-2 md:flex">
                <Link href={"/"}>
                  <Button variant={"outline"}>Home</Button>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
          <div className="border-black rounded-xl bg-slate-100 dark:bg-blue-800 p-4 md:p-5 md:w-2/3 mx-auto">
            <div className="p-2 md:p-4 rounded-lg bg-white items-center justify-center flex text-lg sm:text-xl text-black ">
              Course: Earn Money With Finance Stocks and Futures
            </div>
            <br />

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name</FormLabel>
                      <FormControl>
                        <Input placeholder="name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="course"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Course</FormLabel>
                      <Select defaultValue="apple">
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select a Course" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectLabel>Courses</SelectLabel>
                            <SelectItem value="apple">
                              Earn Money With Stocks, Options and Futures
                            </SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                      <br />
                    </FormItem>
                  )}
                />
                <div className="rounded-lg ">
                  <PaymentButton handleSubmit={form.handleSubmit} />
                </div>
              </form>
            </Form>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
