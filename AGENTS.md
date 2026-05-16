<!-- BEGIN:drizzle -->
- If you need to migrate the databse, never use `migrate.ts`. Instead, use `drizzle-kit` CLI. For example, to create a new migration, run `bunx drizzle-kit generate:migration <migration-name>`. To run the migrations, use `bunx drizzle-kit migrate`. This ensures that your database schema is properly managed and versioned.
<!-- END:drizzle -->

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
