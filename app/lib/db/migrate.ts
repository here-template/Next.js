import { db } from './client';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import path from 'path';

export async function runMigrations() {
  if (process.env.NEXT_PHASE === 'phase-production-build') return;

  const maxRetries = 5;
  let currentRetry = 0;

  while (currentRetry < maxRetries) {
    try {
      console.log(`⏳ Running Drizzle migrations (Attempt ${currentRetry + 1}/${maxRetries})...`);
      await migrate(db, {
        migrationsFolder: path.join(process.cwd(), 'drizzle')
      });
      console.log('✅ Migrations completed');
      return;
    } catch (error) {
      currentRetry++;
      if (currentRetry >= maxRetries) {
        if (process.env.NODE_ENV === 'production') {
          console.error('❌ Migration failed (Strict Mode):', error);
          process.exit(1);
        } else {
          console.warn('⚠️ Migration failed after multiple attempts (Dev Mode). Skipping...');
        }
      } else {
        console.log(`📡 DB not ready, retrying in 2s...`);
        await new Promise(res => setTimeout(res, 2000));
      }
    }
  }
}

// Still allow manual execution via bun app/lib/db/migrate.ts
if (import.meta.main) {
  runMigrations();
}
