This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


# Next.js Clerk Authentication

A Next.js authentication frontend using [Clerk](https://clerk.com/) for user authentication and session management.

This project demonstrates how to integrate Clerk into a Next.js application using the App Router, Google OAuth, protected routes, and user profile retrieval.

## Tech Stack

- **Next.js 16** – React framework
- **TypeScript** – Type safety
- **Clerk** – Authentication and session management
- **Turbopack** – Development bundler

## Features

- Clerk authentication integration
- Google OAuth authentication
- Email authentication
- Username support
- Custom sign-in and sign-up pages
- Protected dashboard route
- Retrieve authenticated user details
- Sign-out functionality
- Next.js Proxy-based route protection

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd nextjs-clerk-auth
```

### 2. Install dependencies

```bash
npm install
```

### 3. Create a Clerk application

1. Visit [Clerk Dashboard](https://dashboard.clerk.com/).
2. Create a new application.
3. Enable Google authentication.
4. Configure your preferred email and username authentication methods.
5. Configure phone number collection according to your requirements.

### 4. Configure environment variables

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_publishable_key
CLERK_SECRET_KEY=your_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/sign-in
```

Get your keys from the Clerk Dashboard.

**Never commit `.env.local` or expose your secret key.**

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```text
nextjs-clerk-auth/
├── app/
│   ├── dashboard/
│   │   └── page.tsx
│   ├── sign-in/
│   │   └── [[...sign-in]]/
│   │       └── page.tsx
│   ├── sign-up/
│   │   └── [[...sign-up]]/
│   │       └── page.tsx
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── proxy.ts
├── .env.local
├── package.json
└── tsconfig.json
```

## Authentication Setup

### 1. Clerk Provider

The root layout wraps the application with `ClerkProvider` to make Clerk authentication functionality available throughout the application.

```tsx
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ClerkProvider>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
```

### 2. Sign-in and Sign-up Pages

Clerk provides prebuilt authentication components.

Sign-in:

```tsx
import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignInPage() {
  return (
    <Suspense>
      <SignIn />
    </Suspense>
  );
}
```

Sign-up:

```tsx
import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignUpPage() {
  return (
    <Suspense>
      <SignUp />
    </Suspense>
  );
}
```

The optional catch-all routes allow Clerk to handle multi-step authentication flows.

### 3. Route Protection with Proxy

The root-level `proxy.ts` integrates Clerk middleware and protects dashboard routes.

```ts
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware(async (auth, req) => {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    await auth.protect();
  }
});
```

Protected routes require an authenticated Clerk session.

### 4. Dashboard and User Information

The dashboard retrieves the authenticated user's information using Clerk's server-side API.

```tsx
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export const instant = false;

export default async function DashboardPage() {
  const user = await currentUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <main>
      <h1>Dashboard</h1>

      <p>User ID: {user.id}</p>
      <p>Username: {user.username}</p>
      <p>Email: {user.primaryEmailAddress?.emailAddress}</p>
      <p>First name: {user.firstName}</p>
      <p>Last name: {user.lastName}</p>
    </main>
  );
}
```

The dashboard displays the currently authenticated user's Clerk profile information.

### 5. Sign Out

Clerk provides a built-in `SignOutButton` component.

```tsx
import { SignOutButton } from "@clerk/nextjs";

<SignOutButton>
  <button>Logout</button>
</SignOutButton>
```

This terminates the active Clerk session.

## Authentication Architecture

Clerk handles authentication and identity management, while the application backend is responsible for business logic and application data.

```text
User
  |
  v
Next.js Frontend
  |
  v
Clerk Authentication
  |
  | Issues JWT
  v
Next.js obtains session token
  |
  | Authorization: Bearer <JWT>
  v
NestJS Backend
  |
  v
JWT Verification Guard
  |
  v
MongoDB / PostgreSQL
```

### Responsibilities

| Component | Responsibility |
|---|---|
| Clerk | Authentication, Google OAuth, sessions, JWT issuance |
| Next.js | User interface, authentication pages, frontend API requests |
| NestJS | JWT verification, authorization, business logic |
| Database | Application user profiles and other application data |

## Current Implementation Status

- [x] Create Next.js project with TypeScript
- [x] Install Clerk SDK
- [x] Configure Clerk environment variables
- [x] Set up ClerkProvider
- [x] Configure Google OAuth
- [x] Configure email and username authentication
- [x] Create sign-in page
- [x] Create sign-up page
- [x] Configure Clerk Proxy
- [x] Protect dashboard routes
- [x] Retrieve authenticated user information
- [x] Implement sign-out functionality
- [ ] Integrate with NestJS backend
- [ ] Retrieve application user profile from backend
- [ ] Implement authenticated API requests using Clerk JWT

## License

This project is intended for learning and portfolio purposes.