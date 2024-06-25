"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Cookies from "js-cookie";

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

const generateRandomToken = () => {
  const length = 24;
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

export default function Page() {
  const [otpSent, setOtpSent] = useState(false);
  const [otpError, setOtpError] = useState("");
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      phone: "",
      otp: "",
    },
  });

  const sendOtp = async () => {
    const phone = form.getValues("phone");
    const requestBody = JSON.stringify({ phone });

    // Log the request body before sending it
    console.log("Request Body:", requestBody);

    try {
      const response = await fetch("http://localhost:8000/send-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: requestBody, // Ensure it's sent as JSON
      });

      // Log the status code and response body
      console.log("Status Code:", response.status);
      const data = await response.json();
      console.log("Response Body:", data);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      console.log("OTP sent:", data);
      setOtpSent(true);
      setOtpError("");
    } catch (error) {
      console.error("Error sending OTP:", error);
      setOtpSent(false);
      if (error instanceof Error) {
        setOtpError(error.message);
      } else {
        setOtpError("An unknown error occurred.");
      }
    }
  };

  const verifyOtp = async (data: any) => {
    const { phone, otp } = data;
    const requestBody = JSON.stringify({ phone, otp, fcm: "dummy-fcm-token" });

    console.log("Request Body:", requestBody);

    try {
      const response = await fetch(
        `http://localhost:8000/verify-otp?phone=${phone}&otp=${otp}&fcm=dummy-fcm-token`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: requestBody,
        }
      );

      console.log("Status Code:", response.status);

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      // Generate a random auth token
      const authToken = generateRandomToken();
      console.log("Generated Auth Token:", authToken);

      // Store auth_token in cookies
      Cookies.set("auth_token", authToken, { expires: 7 }); // expires in 7 days

      console.log("OTP verified successfully.");
      setOtpSent(false);
      setOtpError("");

      // Reload the page
      window.location.reload();
    } catch (error) {
      console.error("Error verifying OTP:", error);
      if (error instanceof Error) {
        setOtpError(error.message);
      } else {
        setOtpError("An unknown error occurred.");
      }
    }
  };

  return (
    <>
      <ScrollArea className="h-full">
        <div className="max-w-5xl mx-auto px-8">
          <div className="flex-1 space-y-4 pt-2 md:pt-6 mb-5 md:mb-10 p-5">
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
          </div>
          <div className="border-black rounded-xl bg-slate-100 dark:bg-blue-800 p-4 md:p-5 md:w-2/3 mx-auto">
            <div className="p-2 md:p-4 rounded-lg bg-white items-center justify-center flex text-lg sm:text-xl text-black ">
              Welcome To Grad School
            </div>
            <br />
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(verifyOtp)}
                className="space-y-2"
              >
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <div className="flex gap-1 sm:gap-2 ">
                          <Input
                            placeholder="Phone number"
                            {...field}
                            className="w-2/3 sm:w-3/4"
                          />
                          <Button
                            type="button"
                            variant={"default"}
                            onClick={sendOtp}
                            className="w-1/3 sm:w-1/4 text-xs sm:text-md"
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
                <Button type="submit" className="w-1/3 sm:w-1/4">
                  Log in
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </ScrollArea>
    </>
  );
}
