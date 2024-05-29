'use client';

import React from 'react';
import ThemeProvider from './ThemeToggle/theme-provider';
import { SessionProvider } from 'next-auth/react';
import { Session } from 'next-auth';

// Calculate tomorrow's date
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1); // Adds one day to the current date

// Temporary hardcoded session data for development purposes
const dummySession: Session = {
  user: {
    id: '123',
    name: 'John Doe',
    email: 'john.doe@example.com',
    image: 'https://example.com/avatar.jpg'
  },
  expires: tomorrow.toISOString() // Sets the expiry date to tomorrow
};

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {/* Pass the dummy session data directly to the SessionProvider */}
        <SessionProvider session={dummySession}>{children}</SessionProvider>
      </ThemeProvider>
    </>
  );
}
