import { db } from './client';
import { migrate } from 'drizzle-orm/postgres-js/migrator';
import path from 'path';

async function runMigrations() {
  try {
    console.log('⏳ Running Drizzle migrations...');
    await migrate(db, {
      migrationsFolder: path.join(process.cwd(), 'drizzle')
    });
    console.log('✅ Migrations completed');
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

// Only run if this file is executed directly
if (import.meta.main) {
  runMigrations();
}

export { runMigrations };
