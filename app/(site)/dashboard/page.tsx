"use server";

import InvestmentDashboard from "@/components/investment-dashboard";
import { auth, currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function Page() {
  const { userId } = await auth();
  const user = await currentUser();
  const data = JSON.parse(JSON.stringify(user));

  if (!userId) {
    redirect("/sign-in");
  }

  return <InvestmentDashboard user={data} />;
}
