import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import { supabaseAdmin } from "@/utils/supabase/admin";

export async function POST(req: Request) {
  try {
    const { userId } = await auth();

    if (!userId) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const {
      totalInvestment,
      totalRoi,
      roiPercentage,
      dateStarted,
      lastPaymentReceivedDate,
    } = await req.json();

    const { error } = await supabaseAdmin.from("investments").insert([
      {
        clerk_id: userId,
        total_investment: totalInvestment,
        total_roi: totalRoi,
        roi_percentage: roiPercentage,
        date_started: dateStarted,
        last_payment_received_date: lastPaymentReceivedDate,
      },
    ]);

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Investment added successfully" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
