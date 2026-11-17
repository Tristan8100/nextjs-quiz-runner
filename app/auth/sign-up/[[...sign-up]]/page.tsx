
import { SignUp } from "@clerk/nextjs";
import { Suspense } from "react";

export default function SignUpPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <div className="w-full space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">
            Sign up
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Welcome! Please sign up to continue.
          </p>
        </div>

        <SignUp />
      </div>
    </Suspense>
  );
}
