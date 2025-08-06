"use client";

import { useState } from "react";
import { Button } from "@/src/components/ui/button";
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react";
import { Transaction } from "@/src/app/page";

interface TransactionTableProps {
  transactions: Transaction[];
}

type SortField = "date" | "remark" | "amount";
type SortDirection = "asc" | "desc";

export function TransactionTable({ transactions }: TransactionTableProps) {
  const [sortField, setSortField] = useState<SortField>("date");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const handleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("asc");
    }
  };

  const sortedTransactions = [...transactions].sort((a, b) => {
    let aValue: any = a[sortField];
    let bValue: any = b[sortField];

    if (sortField === "date") {
      aValue = new Date(aValue).getTime();
      bValue = new Date(bValue).getTime();
    }

    if (sortDirection === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  const formatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(Math.abs(amount));
  };

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="w-4 h-4" />;
    }
    return sortDirection === "asc" ? (
      <ArrowUp className="w-4 h-4" />
    ) : (
      <ArrowDown className="w-4 h-4" />
    );
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">
                <Button
                  variant="ghost"
                  onClick={() => handleSort("date")}
                  className="h-auto p-0 font-medium text-gray-500 hover:text-gray-700"
                >
                  Date
                  {getSortIcon("date")}
                </Button>
              </th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">
                <Button
                  variant="ghost"
                  onClick={() => handleSort("remark")}
                  className="h-auto p-0 font-medium text-gray-500 hover:text-gray-700"
                >
                  Remark
                  {getSortIcon("remark")}
                </Button>
              </th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">
                <Button
                  variant="ghost"
                  onClick={() => handleSort("amount")}
                  className="h-auto p-0 font-medium text-gray-500 hover:text-gray-700"
                >
                  Amount
                  {getSortIcon("amount")}
                </Button>
              </th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">
                Currency
              </th>
              <th className="text-left py-3 px-6 text-sm font-medium text-gray-500">
                Type
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedTransactions.map((transaction) => (
              <tr
                key={transaction.id}
                className="hover:bg-gray-50 transition-colors"
              >
                <td className="py-4 px-6 text-sm text-gray-900">
                  {formatDate(transaction.date)}
                </td>
                <td className="py-4 px-6 text-sm text-gray-900">
                  {transaction.remark}
                </td>
                <td
                  className={`py-4 px-6 text-sm font-medium ${
                    transaction.amount > 0 ? "text-green-600" : "text-gray-900"
                  }`}
                >
                  {transaction.amount > 0 ? "" : "-"}
                  {formatAmount(transaction.amount)}
                </td>
                <td className="py-4 px-6 text-sm text-gray-600">
                  {transaction.currency}
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-2 h-2 rounded-full ${
                        transaction.type === "Credit"
                          ? "bg-green-500"
                          : "bg-red-500"
                      }`}
                    ></div>
                    <span className="text-sm text-gray-700">
                      {transaction.type}
                    </span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
