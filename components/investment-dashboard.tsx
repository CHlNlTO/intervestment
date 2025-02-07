"use client";

import { useEffect, useState } from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { Investment } from "@/types/investment";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart as BarChartIcon, DollarSign, Users } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function InvestmentDashboard({ user }: { user: any }) {
  const [investmentData, setInvestmentData] = useState<Investment>({
    id: "",
    total_investment: 0,
    total_roi: 0,
    roi_percentage: 0,
    date_started: "",
    last_payment_received_date: "",
  });

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("/api/investments");
      if (res.ok) {
        const data = await res.json();
        setInvestmentData(data[0]);
      }
    }

    fetchData();
  }, []);

  if (!investmentData) return LoadingDashboardWidgetSkeleton(user);

  console.log("InvestmentData", investmentData);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex flex-row gap-2">
        <SidebarTrigger className="-ml-1" />
        <h1 className="text-xl font-semibold">Welcome, {user?.firstName}</h1>
      </div>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
        <div className="grid auto-rows-min gap-4 md:grid-cols-3">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ₱{investmentData.total_roi}
              </div>
              <p className="text-xs text-muted-foreground">
                As of {investmentData.last_payment_received_date}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Total Investments
              </CardTitle>
              <Users className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ₱{investmentData.total_investment}
              </div>
              <p className="text-xs text-muted-foreground">
                Since {investmentData.date_started}
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Next Month&apos;s Receivable
              </CardTitle>
              <BarChartIcon className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ₱
                {investmentData.total_investment *
                  (investmentData.roi_percentage * 0.01)}
              </div>
              <p className="text-xs text-muted-foreground">
                Based on {investmentData.roi_percentage}% ROI
              </p>
            </CardContent>
          </Card>
        </div>
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">Monthly Performance</div>
            <p className="text-muted-foreground">
              Your investment performance is up by{" "}
              {(investmentData.total_roi / investmentData.total_investment) *
                100}
              {"% "}
              since the day you started.
            </p>
            <div className="mt-4 h-[300px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={(() => {
                    const startDate = new Date(investmentData.date_started);
                    const endDate = new Date(
                      investmentData.last_payment_received_date
                    );
                    const months = [];
                    const monthNames = [
                      "Jan",
                      "Feb",
                      "Mar",
                      "Apr",
                      "May",
                      "Jun",
                      "Jul",
                      "Aug",
                      "Sep",
                      "Oct",
                      "Nov",
                      "Dec",
                    ];
                    let currentDate = new Date(startDate);

                    while (currentDate <= endDate) {
                      months.push({
                        name: monthNames[currentDate.getMonth()],
                        total:
                          investmentData.total_investment *
                          (investmentData.roi_percentage * 0.01),
                      });
                      currentDate.setMonth(currentDate.getMonth() + 1);
                    }

                    return months;
                  })()}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    className="stroke-muted"
                  />
                  <XAxis
                    dataKey="name"
                    className="text-sm text-muted-foreground"
                  />
                  <YAxis className="text-sm text-muted-foreground" />
                  <Tooltip
                    content={({ active, payload }) => {
                      if (active && payload && payload.length) {
                        return (
                          <div className="rounded-lg border bg-background p-2 shadow-sm">
                            <div className="grid grid-cols-2 gap-2">
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Month
                                </span>
                                <span className="font-bold text-muted-foreground">
                                  {payload[0].payload.name}
                                </span>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-[0.70rem] uppercase text-muted-foreground">
                                  Sales
                                </span>
                                <span className="font-bold">
                                  ₱{payload[0].value!.toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        );
                      }
                      return null;
                    }}
                  />
                  <Bar
                    dataKey="total"
                    fill="currentColor"
                    radius={[4, 4, 0, 0]}
                    className="fill-primary"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            {/* <div className="text-2xl font-bold">Monthly Investment</div>
            <p className="text-muted-foreground">
              Your investments are up by 24% compared to last month.
            </p>
            <div className="mt-4 h-[200px] w-full bg-muted/50 flex items-center justify-center">
              <p className="text-muted-foreground">Chart Placeholder</p>
            </div> */}
          </CardContent>
        </Card>
      </div>
      {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="aspect-video rounded-xl bg-muted/50">
          <div className="flex flex-col gap-2 p-4">
            <h2 className="text-lg font-semibold">Total Investments</h2>
            <p className="text-muted-foreground">
              ₱{investmentData.total_investment}
            </p>
          </div>
        </div>
        <div className="aspect-video rounded-xl bg-muted/50">
          <div className="flex flex-col gap-2 p-4">
            <h2 className="text-lg font-semibold">Total ROI</h2>
            <p className="text-muted-foreground">₱{investmentData.total_roi}</p>
          </div>
        </div>
        <div className="aspect-video rounded-xl bg-muted/50">
          <div className="flex flex-col gap-2 p-4">
            <h2 className="text-lg font-semibold">ROI Percentage</h2>
            <p className="text-muted-foreground">
              {investmentData.roi_percentage}%
            </p>
          </div>
        </div>
      </div>
      <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" /> */}
    </div>
  );
}

const LoadingDashboardWidgetSkeleton = (user: any): JSX.Element => {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="flex flex-row gap-2">
        <SidebarTrigger className="-ml-1" />
        <h1 className="text-xl font-semibold">Welcome, {user?.firstName}</h1>
      </div>
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <div className="animate-pulse aspect-video rounded-xl bg-muted/50" />
        <div className="animate-pulse aspect-video rounded-xl bg-muted/50" />
        <div className="animate-pulse aspect-video rounded-xl bg-muted/50" />
      </div>
      <div className="animate-pulse min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
    </div>
  );
};
