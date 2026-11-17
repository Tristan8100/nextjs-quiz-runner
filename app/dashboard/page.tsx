
import { currentUser } from "@clerk/nextjs/server";
import { SignOutButton } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default function DashboardPage() {
  return (
    <Suspense fallback={<p>Loading dashboard...</p>}>
      <DashboardContent />
    </Suspense>
  );
}

async function DashboardContent() {
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

      <SignOutButton>
        <button>Logout</button>
      </SignOutButton>
    </main>
  );
}
