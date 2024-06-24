"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";

const FormSchema = z.object({
  phone: z
    .string()
    .regex(/^\d{10}$/, "Phone number must be exactly 10 digits."),
  otp: z.string().regex(/^\d{4}$/, "OTP must be exactly 4 digits."),
});

export default function Page() {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
      otp: "",
    },
  });

  const onSubmit = (data: any) => {
    console.log(data);
    // Payment initiation logic moved to PaymentButton
  };

  const sendOtp = () => {
    // Logic to send OTP
    console.log("OTP sent");
  };

  return (
    <>
      <ScrollArea className="h-full">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex-1 space-y-4 pt-2 md:pt-6 mb-5 md:mb-10 p-5">
            <div className="flex items-center justify-between space-y-2">
              <div className="items-center space-x-2 md:flex">
                <Link href={"/"}>
                  <p>Grad School</p>
                </Link>
              </div>
              <div className="flex items-center gap-2">
                <ThemeToggle />
              </div>
            </div>
          </div>
          <div className="border-black rounded-xl bg-slate-100 dark:bg-blue-800 p-4 md:p-5 md:w-2/3 mx-auto">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input placeholder="Phone number" {...field} />
                          <Button
                            type="button"
                            variant={"default"}
                            onClick={sendOtp}
                          >
                            Send OTP
                          </Button>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="otp"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>OTP</FormLabel>
                      <FormControl>
                        <Input placeholder="OTP" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <br />
                <Link href={"/feed"}>
                  <Button type="submit">Log in</Button>
                </Link>
              </form>
            </Form>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
