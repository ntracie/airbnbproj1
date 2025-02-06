"use client";

import Image from "next/image";
import Link from "next/link";
import { Search, Globe, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/placeholder.svg?height=32&width=102"
              alt="Airbnb"
              width={102}
              height={32}
              className="w-[102px] h-8 text-red-500 text-2xl font-bold "
            />
          </Link>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/homes" className="font-bold">
              Homes
            </Link>
            <Link href="/experiences" className="text-gray-500">
              Experiences
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="hidden md:flex font-bold">
              Airbnb your home
            </Button>
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Globe className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="flex items-center space-x-2 rounded-full"
            >
              <Menu className="h-5 w-5" />
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex justify-center py-4">
          <div className="flex items-center bg-white border rounded-full shadow-sm divide-x">
            <div className="px-6 py-2">
              <div className="text-sm font-medium">Where</div>
              <input
                type="text"
                placeholder="Search destinations"
                className="w-full outline-none text-sm"
              />
            </div>
            <div className="px-6 py-2">
              <div className="text-sm font-medium">Check in</div>
              <div className="text-sm text-gray-500">Add dates</div>
            </div>
            <div className="px-6 py-2">
              <div className="text-sm font-medium">Check out</div>
              <div className="text-sm text-gray-500">Add dates</div>
            </div>
            <div className="px-6 py-2">
              <div className="text-sm font-medium">Who</div>
              <div className="text-sm text-gray-500">Add guests</div>
            </div>
            <Button className="m-2 rounded-full" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
