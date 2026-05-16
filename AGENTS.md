<!-- BEGIN:drizzle -->
- If you need to migrate the databse,  use `bun run db:generate` to create migration, then use `bun run db:migrate` to apply migration to the DB. Migrations are automatically applied when the application starts (via `instrumentation.ts`), so you can skip the manual step if you prefer.
<!-- END:drizzle -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
