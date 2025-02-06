"use client";

import { useRef } from "react";
import { ChevronRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Home,
  Ticket,
  UtensilsCrossed,
  PocketIcon as Pool,
  GuitarIcon as Golf,
  Mountain,
  Warehouse,
  Trees,
  Building,
  SlidersHorizontal,
} from "lucide-react";

const categories = [
  { icon: Home, label: "Rooms" },
  { icon: Ticket, label: "Icons" },
  { icon: UtensilsCrossed, label: "Bed & breakfasts" },
  { icon: Pool, label: "Amazing pools" },
  { icon: Golf, label: "Golfing" },
  { icon: Mountain, label: "Top of the world" },
  { icon: Warehouse, label: "Farms" },
  { icon: Trees, label: "Countryside" },
  { icon: Building, label: "Mansions" },
];

export default function CategoryBar() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Scrollable Categories */}
          <div className="flex-1 relative">
            <div
              ref={scrollContainerRef}
              className="flex items-center gap-8 overflow-x-auto scrollbar-hide"
            >
              {categories.map((Category, index) => (
                <button
                  key={index}
                  className="flex flex-col items-center gap-2 min-w-fit text-gray-600 hover:text-gray-900 transition-colors"
                >
                  <Category.icon className="w-6 h-6" />
                  <span className="text-xs whitespace-nowrap">
                    {Category.label}
                  </span>
                </button>
              ))}
            </div>

            {/* Scroll Button */}
            <button
              onClick={scrollRight}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:scale-105 transition-transform"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Filters and Toggle */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <Button variant="outline" className="flex items-center gap-2">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </Button>
            <div className="flex items-center gap-2">
              <span className="text-sm whitespace-nowrap">
                Display total before taxes
              </span>
              <Switch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Add this to your global CSS file
const styles = `
  .scrollbar-hide::-webkit-scrollbar {
    display: none;
  }
  .scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;
