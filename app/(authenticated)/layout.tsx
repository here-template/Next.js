import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import type React from "react";

export default async function AuthenticatedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // Session verification proxy
  if (!session) {
    redirect('/login');
  }

  /*
  // Ready-to-use code for verifying permissions on a special route group:
  // 
  // const userRole = session.user.role; // Assuming you added a 'role' or 'permissions' field
  // const allowedRoles = ['admin', 'premium'];
  // 
  // if (!allowedRoles.includes(userRole)) {
  //   redirect('/dashboard?error=permission_denied');
  // }
  */

  return <>{children}</>;
}
