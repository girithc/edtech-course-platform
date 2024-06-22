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

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

const breadcrumbItems = [{ title: "Profile", link: "/dashboard/profile" }];
export default function page() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {}
  return (
    <>
      <ScrollArea className="h-full">
        <div className="flex-1 space-y-4 p-4 pt-6 md:p-8">
          <div className="flex items-center justify-between space-y-2">
            <div className=" items-center space-x-2 md:flex">
              <BreadCrumb items={breadcrumbItems} />
            </div>
            <div className="flex items-center gap-2">
              {/* Conditional rendering based on the route */}
              <UserNav page="profile" />
              <ThemeToggle />
            </div>
          </div>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="shadcn" {...field} />
                  </FormControl>
                  <FormDescription>
                    This is your public display name.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </ScrollArea>
    </>
  );
}
