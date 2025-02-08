"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { redirect } from "next/navigation";

export function AddInvestmentModal() {
  const [open, setOpen] = useState(false);
  const [totalInvestment, setTotalInvestment] = useState("");
  const [totalRoi, setTotalRoi] = useState("");
  const [roiPercentage, setRoiPercentage] = useState("");
  const [dateStarted, setDateStarted] = useState<Date>();
  const [lastPaymentReceivedDate, setLastPaymentReceivedDate] =
    useState<Date>();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await fetch("/api/investments/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        totalInvestment,
        totalRoi,
        roiPercentage,
        dateStarted,
        lastPaymentReceivedDate,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Error:", data.error);
      return;
    }

    console.log("Investment added successfully");
    setOpen(false);

    redirect("/dashboard");
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Investment
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Investment</DialogTitle>
          <DialogDescription>
            Enter the details of your new investment.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="total_investment" className="text-right">
                Total Investment
              </Label>
              <Input
                id="total_investment"
                value={totalInvestment}
                onChange={(e) => setTotalInvestment(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="total_roi" className="text-right">
                Total ROI
              </Label>
              <Input
                id="total_roi"
                value={totalRoi}
                onChange={(e) => setTotalRoi(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="roi_percentage" className="text-right">
                ROI Percentage
              </Label>
              <Input
                id="roi_percentage"
                value={roiPercentage}
                onChange={(e) => setRoiPercentage(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4 z-50">
              <Label htmlFor="date_started" className="text-right">
                Date Started
              </Label>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "col-span-3 justify-start text-left font-normal",
                      !dateStarted && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {dateStarted ? (
                      format(dateStarted, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-auto p-0 z-50">
                  <Calendar
                    mode="single"
                    selected={dateStarted}
                    onSelect={setDateStarted}
                    initialFocus
                    className="z-50"
                  />
                </DialogContent>
              </Dialog>
            </div>
            <div className="grid grid-cols-4 items-center gap-4 z-50">
              <Label
                htmlFor="last_payment_received_date"
                className="text-right"
              >
                Last Payment Received
              </Label>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "col-span-3 justify-start text-left font-normal",
                      !lastPaymentReceivedDate && "text-muted-foreground"
                    )}
                  >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {lastPaymentReceivedDate ? (
                      format(lastPaymentReceivedDate, "PPP")
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </DialogTrigger>
                <DialogContent className="w-auto p-0 z-50">
                  <Calendar
                    mode="single"
                    selected={lastPaymentReceivedDate}
                    onSelect={setLastPaymentReceivedDate}
                    initialFocus
                    className="z-50"
                  />
                </DialogContent>
              </Dialog>
            </div>
          </div>
          <div className="flex justify-end">
            <Button type="submit">Add Investment</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
