"use client";

import { Search, Bell, LayoutGrid } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-screen mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-end h-16">
          <div className="flex items-center gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  type="search"
                  placeholder="Search transactions..."
                  className="pl-10"
                />
              </div>
            </div>

            <LayoutGrid className="w-5 h-5 object-cover" />

            <Avatar>
              <AvatarImage src="/user-pic.png?height=32&width=32" alt="User" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>

            <Button variant="ghost" size="icon" className="md:hidden">
              <Bell className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
