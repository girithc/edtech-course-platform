import BreadCrumb from "@/components/breadcrumb";
import ThemeToggle from "@/components/layout/ThemeToggle/theme-toggle";
import { UserNav } from "@/components/layout/user-nav";
import { ScrollArea } from "@/components/ui/scroll-area";

const breadcrumbItems = [{ title: "Profile", link: "/dashboard/profile" }];
export default function page() {
  return (
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
    </ScrollArea>
  );
}
