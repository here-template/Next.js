import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import type React from 'react';
import { auth } from '@/lib/auth';

export default async function GuestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // If the user is already logged in, redirect them to home/dashboard
  if (session) {
    redirect('/');
  }

  return <>{children}</>;
}
