
import { SignIn } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignInPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="flex w-full flex-col items-center">
        <div className="mb-6 w-full text-center">
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            Sign in
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Welcome back! Please sign in to continue.
          </p>
        </div>

        <div className="w-full flex justify-center">
          <SignIn />
        </div>
      </div>
    </Suspense>
  );
}
