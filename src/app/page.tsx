"use client";

import { useState } from "react";
import { Sidebar } from "../components/sidebar";
import { Header } from "../components/header";
import { SummaryCards } from "../components/summary-cards";
import { TransactionTable } from "../components/transaction-table";
import { UserAvatars } from "../components/user-avatars";
import { TabNavigation } from "../components/tab-navigation";
import "./globals.css";
import { ChevronDown } from "lucide-react";

export interface Transaction {
  id: string;
  date: string;
  remark: string;
  amount: number;
  currency: string;
  type: "Credit" | "Debit";
}

export interface DashboardSummary {
  totalBalance: number;
  totalCredits: number;
  totalDebits: number;
  transactionCount: number;
  balanceChange: number;
  creditsChange: number;
  debitsChange: number;
  transactionChange: number;
}

const sampleTransactions: Transaction[] = [
  {
    id: "1",
    date: "2023-10-09",
    remark: "Salary",
    amount: 3000,
    currency: "USD",
    type: "Credit",
  },
  {
    id: "2",
    date: "2023-10-08",
    remark: "Groceries",
    amount: -150,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "3",
    date: "2023-10-07",
    remark: "Gym Membership",
    amount: -50,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "4",
    date: "2023-10-06",
    remark: "Dinner",
    amount: -40,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "5",
    date: "2023-10-05",
    remark: "Movie Tickets",
    amount: -30,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "6",
    date: "2023-10-04",
    remark: "Rent",
    amount: -1200,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "7",
    date: "2023-10-03",
    remark: "Utilities",
    amount: -100,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "8",
    date: "2023-10-02",
    remark: "Car Payment",
    amount: -400,
    currency: "USD",
    type: "Debit",
  },
  {
    id: "9",
    date: "2023-10-01",
    remark: "Insurance",
    amount: -200,
    currency: "USD",
    type: "Debit",
  },
];

const dashboardSummary: DashboardSummary = {
  totalBalance: 12345,
  totalCredits: 7890,
  totalDebits: 4455,
  transactionCount: 150,
  balanceChange: 5,
  creditsChange: 3,
  debitsChange: -2,
  transactionChange: 10,
};

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "transactions">(
    "overview"
  );

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <div className="flex-1 flex flex-col">
        <Header />

        <main className="flex-1 px-6 py-8">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-gray-900">
                  Wallet Ledger
                </h1>
                <ChevronDown className="-ml-2" />
                <div className="flex items-center gap-2 py-1 px-2 bg-gray-200 rounded-3xl">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-900">Active</span>
                </div>
              </div>
            </div>

            <UserAvatars />

            <div className="mt-6">
              <TabNavigation activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Summary
            </h2>
            <SummaryCards summary={dashboardSummary} />
          </div>

          <TransactionTable transactions={sampleTransactions} />
        </main>
      </div>
    </div>
  );
}
