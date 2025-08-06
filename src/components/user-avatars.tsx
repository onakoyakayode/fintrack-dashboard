"use client";

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import Image from "next/image";

const users = [
  { name: "Ava", initials: "AV", image: "/placeholder.svg?height=32&width=32" },
  {
    name: "Liam",
    initials: "LM",
    image: "/placeholder.svg?height=32&width=32",
  },
  {
    name: "Noah",
    initials: "NH",
    image: "/placeholder.svg?height=32&width=32",
  },
];

export function UserAvatars() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/Profile-pictures.png"
        alt="fintrack"
        width={100}
        height={100}
      />
      <div className="flex -space-x-2">
        {users.map((user, index) => (
          <Avatar key={index} className="w-8 h-8 border-2 border-white">
            <AvatarImage
              src={user.image || "/placeholder.svg"}
              alt={user.name}
            />
            <AvatarFallback className="text-xs">{user.initials}</AvatarFallback>
          </Avatar>
        ))}
        <div className="w-8 h-8 bg-gray-100 border-2 border-white rounded-full flex items-center justify-center">
          <span className="text-xs text-gray-600 font-medium">+12</span>
        </div>
      </div>
      <span className="text-sm text-gray-600 ml-2">others</span>
    </div>
  );
}
