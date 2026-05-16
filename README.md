# Next.js 16 + Better Auth + Drizzle Template

A modern, production-ready Next.js 16 starter template featuring robust authentication, database management, and optimized route organization.

## 🚀 Features

- **Next.js 16 (App Router)**: Utilizing the latest React 19 features and Turbopack.
- **Better Auth**: Comprehensive authentication system with session management.
- **Automated Migrations**: Database migrations are automatically applied on application launch.
- **Drizzle ORM**: Type-safe database interactions with PostgreSQL.
- **Route Groups & Security Proxy**:
  - `(authenticated)`: Private routes protected by a server-side layout proxy.
  - `(guest)`: Public-only routes (Login/Register) with auto-redirect for logged-in users.
- **Path Aliases**: Standardized `@/*` imports for clean and reliable module resolution.
- **Biome**: Ultra-fast linting and formatting.
- **Tailwind CSS 4**: Modern styling with native CSS variable support.

## 📁 Project Structure

```text
├── app/
│   ├── (authenticated)/  # Protected routes (requires login)
│   │   ├── layout.tsx    # Security Proxy & Permission check
│   │   └── page.tsx      # Dashboard / Home
│   ├── (guest)/          # Public routes (login, register)
│   │   ├── layout.tsx    # Guest-only redirect logic
│   │   ├── login/
│   │   └── register/
│   ├── api/auth/         # Better Auth API handlers
│   └── layout.tsx        # Root layout
├── components/           # UI Components (shadcn/ui)
├── lib/
│   ├── db/               # Drizzle schema and client
│   ├── auth.ts           # Server-side Auth config
│   └── auth-client.ts    # Client-side Auth hook
└── drizzle/              # Generated migrations
```

## 🛠️ Getting Started

### 1. Environment Setup
Copy `.env.example` to `.env.local` and fill in your credentials:
```bash
cp .env.example .env.local
```

### 2. Database
Start the local database using Docker:
```bash
bun db:up
```

Generate migrations after making changes to your schema:
```bash
bun db:generate
```

*Note: Migrations are automatically applied when the application starts (via `instrumentation.ts`). You can also run them manually using `bun db:migrate`.*

### 3. Development
Install dependencies and run the server:
```bash
bun install
bun dev
```

Open [http://localhost:3000](http://localhost:3000) to see your app.

## 📜 Available Scripts

- `bun dev`: Start development server with Turbopack.
- `bun lint:fix`: Run Biome to fix linting and formatting.
- `bun db:generate`: Generate migration files from your schema.
- `bun db:migrate`: Manually apply migrations to the database.
- `bun db:studio`: Open Drizzle Studio to explore your data.

## 🔒 Security & Permissions

The `app/(authenticated)/layout.tsx` file acts as a centralized security proxy. It checks for a valid session before rendering any children. 

A commented-out placeholder is available in the layout to implement role-based access control (RBAC):
```typescript
// const userRole = session.user.role;
// if (!allowedRoles.includes(userRole)) redirect('/dashboard?error=denied');
```
