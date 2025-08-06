"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { ArrowUpIcon, ArrowDownIcon, Ellipsis } from "lucide-react";
import { DashboardSummary } from "@/src/app/page";
import { cn } from "@/lib/utils";

interface SummaryCardsProps {
  summary: DashboardSummary;
}

export function SummaryCards({ summary }: SummaryCardsProps) {
  const cards = [
    {
      title: "Total Balance",
      value: summary.totalBalance,
      change: summary.balanceChange,
      format: "currency",
    },
    {
      title: "Total Credits",
      value: summary.totalCredits,
      change: summary.creditsChange,
      format: "currency",
    },
    {
      title: "Total Debits",
      value: summary.totalDebits,
      change: summary.debitsChange,
      format: "currency",
    },
    {
      title: "Transactions",
      value: summary.transactionCount,
      change: summary.transactionChange,
      format: "number",
    },
  ];

  const formatValue = (value: number, format: string) => {
    if (format === "currency") {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(value);
    }
    return value.toLocaleString();
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <Card
          key={index}
          className={cn(
            "hover:shadow-md transition-shadow",
            card.title === "Total Balance" && "border-blue-200 bg-blue-50/30"
          )}
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-bold text-gray-900 flex justify-between items-center w-full">
              {card.title}
              <Ellipsis />
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {formatValue(card.value, card.format)}
            </div>
            <div className="flex items-center mt-2">
              {card.change > 0 ? (
                <ArrowUpIcon className="w-4 h-4 text-green-500 mr-1" />
              ) : (
                <ArrowDownIcon className="w-4 h-4 text-red-500 mr-1" />
              )}
              <span
                className={`text-sm font-medium ${
                  card.change > 0 ? "text-green-600" : "text-red-600"
                }`}
              >
                {Math.abs(card.change)}%
              </span>
              <span className="text-sm text-gray-500 ml-1">vs last month</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
