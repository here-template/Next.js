import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import type React from "react";

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
