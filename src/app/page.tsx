'use client';

import * as React from 'react';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@radix-ui/react-navigation-menu';
import { ChatLayout } from '@/chat/chat-layout';

const components: { title: string; href: string; description: string }[] = [
  {
    title: 'Alert Dialog',
    href: '/docs/primitives/alert-dialog',
    description: 'A modal dialog that interrupts the user with important content and expects a response.',
  },
  {
    title: 'Hover Card',
    href: '/docs/primitives/hover-card',
    description: 'For sighted users to preview content available behind a link.',
  },
  {
    title: 'Progress',
    href: '/docs/primitives/progress',
    description: 'Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.',
  },
  {
    title: 'Scroll-area',
    href: '/docs/primitives/scroll-area',
    description: 'Visually or semantically separates content.',
  },
  {
    title: 'Tabs',
    href: '/docs/primitives/tabs',
    description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
  },
  {
    title: 'Tooltip',
    href: '/docs/primitives/tooltip',
    description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => (
  <li>
    <a
      ref={ref}
      className={`block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ${className}`}
      {...props}
    >
      <div className='text-sm font-medium leading-none'>{title}</div>
      <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
        {children}
      </p>
    </a>
  </li>
));
ListItem.displayName = 'ListItem';

export default function Home() {
  return (
    
      
    <main className='flex h-[calc(100vh)]  flex-col items-center justify-center p-4 md:px-24 py-32 gap-4'>
    <div className='flex justify-between max-w-5xl w-full items-center'>
          <Link href='#' className='text-4xl font-bold text-gradient'>alex</Link>
          <NavigationMenu>
            <NavigationMenuList className="flex space-x-4">
              <NavigationMenuItem>
                <NavigationMenuTrigger>talk</NavigationMenuTrigger>
                <NavigationMenuContent className="absolute bg-white shadow-md mt-1 rounded-lg p-4 z-50">
                  <ul>
                    <ListItem href="/" title="shadcn/ui">
                      Beautifully designed components built with Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs" title="Introduction">
                      Re-usable components built using Radix UI and Tailwind CSS.
                    </ListItem>
                    <ListItem href="/docs/installation" title="Installation">
                      How to install dependencies and structure your app.
                    </ListItem>
                    <ListItem href="/docs/primitives/typography" title="Typography">
                      Styles for headings, paragraphs, lists...etc
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/feed" legacyBehavior passHref>
                  <NavigationMenuLink>
                    ai tools
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/docs" legacyBehavior passHref>
                  <NavigationMenuLink>
                    profile
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
    </div>

        <div className='z-10 border rounded-lg max-w-5xl w-full h-full text-sm lg:flex'>
          <ChatLayout navCollapsedSize={8} />
        </div>

        <div className='flex justify-between max-w-5xl w-full items-start text-xs md:text-sm text-muted-foreground'></div>
      </main>
    
  );
}

