
import type { ReactNode } from "react";

export default function AuthLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="grid min-h-screen w-full place-items-center bg-background px-4">
      <div className="w-full max-w-[400px]">
        {children}
      </div>
    </main>
  );
}
