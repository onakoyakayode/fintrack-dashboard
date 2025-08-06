"use client";

import { cn } from "@/lib/utils";

interface TabNavigationProps {
  activeTab: "overview" | "transactions";
  onTabChange: (tab: "overview" | "transactions") => void;
}

export function TabNavigation({ activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        <button
          onClick={() => onTabChange("overview")}
          className={cn(
            "py-2 px-1 border-b-2 font-medium text-sm",
            activeTab === "overview"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
          )}
        >
          Overview
        </button>
        <button
          onClick={() => onTabChange("transactions")}
          className={cn(
            "py-2 px-1 border-b-2 font-medium text-sm",
            activeTab === "transactions"
              ? "border-blue-500 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
          )}
        >
          Transactions
        </button>
      </nav>
    </div>
  );
}
