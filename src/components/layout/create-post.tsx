'use client';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { signOut, useSession } from 'next-auth/react';
export function CreatePost() {
  const { data: session } = useSession();
  if (session) {
    return (
      <Button variant="ghost" className="relative h-8 w-8 rounded-full">
        <Avatar className="h-8 w-8">
          <AvatarImage
            src={session.user?.image ?? ''}
            alt={session.user?.name ?? ''}
          />
          <AvatarFallback>{session.user?.name?.[0]}</AvatarFallback>
        </Avatar>
      </Button>
    );
  }
}
