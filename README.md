# Job Manager App

A modern job management application built with Next.js 15, TypeScript, Tailwind CSS, shadcn/ui, Prisma, and Clerk authentication.

## 🚀 Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Beautiful and accessible UI components
- **Prisma** - Type-safe database ORM
- **Clerk** - Authentication and user management
- **PostgreSQL** - Database (configurable)

## 📦 What's Included

- ✅ Next.js 15 with App Router and TypeScript
- ✅ Tailwind CSS configured
- ✅ shadcn/ui components (Button, Card, Input, Label)
- ✅ Prisma ORM with basic User model
- ✅ Clerk authentication setup
- ✅ Environment variables configuration
- ✅ Git ignore properly configured
- ✅ Middleware for protected routes
- ✅ Database connection utilities
- ✅ Beautiful demo page showcasing all technologies

## 🛠️ Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Set up Clerk Authentication

1. Create a Clerk account at [clerk.com](https://clerk.com)
2. Create a new application
3. Copy your API keys and update the `.env` file:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_your_key_here
CLERK_SECRET_KEY=sk_test_your_key_here
```

### 3. Set up Database

1. Set up a PostgreSQL database (local or cloud)
2. Update the `DATABASE_URL` in your `.env` file:

```env
DATABASE_URL="postgresql://username:password@localhost:5432/job_manager?schema=public"
```

3. Generate Prisma client and run migrations:

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your application.

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout with Clerk provider
│   └── page.tsx             # Home page with demo
├── components/
│   └── ui/                  # shadcn/ui components
├── lib/
│   ├── db.ts               # Database connection
│   └── utils.ts            # Utility functions
└── generated/
    └── prisma/             # Generated Prisma client
prisma/
└── schema.prisma           # Database schema
middleware.ts               # Clerk middleware for route protection
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🗄️ Database Schema

The app includes a basic User model:

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  name      String?
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@map("users")
}
```

## 🔐 Authentication

Clerk is configured with:
- Sign-in/Sign-up pages
- User profile management
- Protected routes via middleware
- Session management

## 🎨 UI Components

shadcn/ui components are pre-installed and configured:
- Button
- Card
- Input
- Label

Add more components with:
```bash
npx shadcn@latest add [component-name]
```

## 🌐 Environment Variables

Required environment variables:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/mydb?schema=public"

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key_here
CLERK_SECRET_KEY=your_clerk_secret_key_here

# Clerk URLs (optional)
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# Other
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your_nextauth_secret_here
```

## 📝 Next Steps

1. Customize the User model in `prisma/schema.prisma`
2. Add job-related models (Job, Application, Company, etc.)
3. Create API routes for CRUD operations
4. Build job management features
5. Add more shadcn/ui components as needed
6. Implement job search and filtering
7. Add dashboard and analytics

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.