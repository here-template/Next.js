'use client';

import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { authClient } from '@/lib/auth-client';

export default function Home() {
  const { data: session, isPending } = authClient.useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.refresh();
        },
      },
    });
  };

  if (isPending) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-zinc-500">Chargement...</p>
      </div>
    );
  }

  if (!session) return null; // Le layout gère la redirection

  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black min-h-screen">
      <main className="flex flex-col items-center gap-8 p-8 bg-white dark:bg-zinc-900 rounded-xl shadow-sm border border-zinc-200 dark:border-zinc-800 max-w-md w-full text-center">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">
            Bienvenue, {session.user.name} !
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400">
            Vous êtes bien connecté avec l'adresse <br />
            <span className="font-medium text-zinc-900 dark:text-zinc-100">
              {session.user.email}
            </span>
          </p>
        </div>
        <Button onClick={handleLogout} variant="destructive" className="w-full">
          Se déconnecter
        </Button>
      </main>
    </div>
  );
}
