
import Link from "next/link";

const technologies = [
  "Next.js 16",
  "React",
  "TypeScript",
  "Clerk",
  "Tailwind CSS",
  "shadcn/ui",
];

const features = [
  {
    title: "Authentication",
    description:
      "User registration, login, logout, and session management powered by Clerk.",
  },
  {
    title: "Server-side authentication",
    description:
      "Retrieve authenticated users and protect server components using Clerk's server SDK.",
  },
  {
    title: "User management",
    description:
      "Access user information including user ID, username, email, and profile details.",
  },
  {
    title: "Protected routes",
    description:
      "Restrict dashboard access to authenticated users and redirect unauthenticated visitors.",
  },
];

const routes = [
  { path: "/", description: "Project landing page" },
  { path: "/auth/sign-in", description: "User sign-in" },
  { path: "/auth/sign-up", description: "User registration" },
  { path: "/dashboard", description: "Protected dashboard" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="border-b">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <Link href="/" className="text-lg font-bold tracking-tight">
            Clerk Auth
          </Link>

          <div className="flex items-center gap-3">
            <Link
              href="/auth/sign-in"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Sign in
            </Link>

            <Link
              href="/auth/sign-up"
              className="rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Get started
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center px-6 py-24 text-center md:py-32">
        <span className="mb-6 rounded-full border px-4 py-1.5 text-xs font-medium text-muted-foreground">
          Authentication Starter Project
        </span>

        <h1 className="max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
          Authentication made
          <span className="text-primary"> simple.</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
          A Next.js authentication application powered by Clerk.
          Includes user registration, login, protected routes,
          server-side authentication, and user management.
        </p>

        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/auth/sign-up"
            className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Create an account
          </Link>

          <Link
            href="/auth/sign-in"
            className="rounded-md border px-6 py-3 text-sm font-semibold transition-colors hover:bg-accent"
          >
            Sign in
          </Link>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border bg-muted/40 px-3 py-1.5 text-xs font-medium text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="border-t bg-muted/20">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="mb-10">
            <h2 className="text-2xl font-bold tracking-tight">
              Project features
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Core functionality implemented in this project.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border bg-card p-6"
              >
                <h3 className="font-semibold">{feature.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Documentation */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-2xl font-bold tracking-tight">
            Project documentation
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Overview of the application architecture and implementation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Authentication flow */}
          <div className="space-y-4">
            <h3 className="font-semibold">Authentication flow</h3>

            <div className="rounded-xl border bg-card p-5">
              <div className="space-y-3 text-sm">
                {[
                  ["01", "User visits the application"],
                  ["02", "User signs in or creates an account"],
                  ["03", "Clerk authenticates the user"],
                  ["04", "User is redirected to the dashboard"],
                  ["05", "Server verifies the authenticated session"],
                ].map(([number, description]) => (
                  <div key={number} className="flex items-center gap-4">
                    <span className="font-mono text-xs text-muted-foreground">
                      {number}
                    </span>
                    <span>{description}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Routes */}
          <div className="space-y-4">
            <h3 className="font-semibold">Application routes</h3>

            <div className="overflow-hidden rounded-xl border bg-card">
              {routes.map((route, index) => (
                <div
                  key={route.path}
                  className={`flex flex-col gap-1 p-4 ${
                    index !== routes.length - 1 ? "border-b" : ""
                  }`}
                >
                  <code className="text-sm font-medium text-primary">
                    {route.path}
                  </code>
                  <span className="text-xs text-muted-foreground">
                    {route.description}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Implementation notes */}
      <section className="border-t bg-muted/20">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-2xl font-bold tracking-tight">
            Implementation notes
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Important configuration and implementation details.
          </p>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">Environment variables</h3>

              <pre className="mt-4 overflow-x-auto rounded-lg bg-muted p-4 text-xs leading-6">
{`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/sign-up

NEXT_PUBLIC_CLERK_SIGN_IN_FORCE_REDIRECT_URL=/dashboard
NEXT_PUBLIC_CLERK_SIGN_UP_FORCE_REDIRECT_URL=/dashboard`}
              </pre>
            </div>

            <div className="rounded-xl border bg-card p-6">
              <h3 className="font-semibold">Server-side authentication</h3>

              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                The dashboard uses Clerk's currentUser() function
                to retrieve the authenticated user's profile.
                Unauthenticated users are redirected to the sign-in page.
              </p>

              <pre className="mt-4 overflow-x-auto rounded-lg bg-muted p-4 text-xs leading-6">
{`const user = await currentUser();

if (!user) {
  redirect("/auth/sign-in");
}`}
              </pre>
            </div>
          </div>

          <div className="mt-6 rounded-xl border bg-card p-6">
            <h3 className="font-semibold">Project structure</h3>
            <pre className="mt-4 overflow-x-auto text-xs leading-6 text-muted-foreground">
{`app/
├── auth/
│   ├── layout.tsx
│   ├── sign-in/
│   │   └── page.tsx
│   └── sign-up/
│       └── page.tsx
├── dashboard/
│   └── page.tsx
├── layout.tsx
└── page.tsx

proxy.ts
.env.local`}
            </pre>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-muted-foreground sm:flex-row">
          <p>Clerk Authentication Starter</p>
          <p>Built with Next.js and Clerk.</p>
        </div>
      </footer>
    </main>
  );
}
