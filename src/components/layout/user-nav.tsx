import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

export function UserNav({ page }: { page?: string }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarFallback>G{/*{session.user?.name?.[0]}*/}</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {/*{session.user?.name}*/}
              Guest
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {/*{session.user?.email}*/}
              guest@email.com
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <Link href={page === "profile" ? "/" : "/feed"}>
            <DropdownMenuItem>
              {page === "profile" ? "talk" : "feed"}
              <DropdownMenuShortcut>beta</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
          <Link href={page === "profile" ? "/feed" : "/profile"}>
            <DropdownMenuItem>
              {page === "profile" ? "feed" : "profile"}
              <DropdownMenuShortcut>beta</DropdownMenuShortcut>
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
