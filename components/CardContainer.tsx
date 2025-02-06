import React from "react";
import CardCarousel from "./CardCarousel";

export default function CardContainer() {
  return (
    <div className="mx-automax-w-7xl py-2 px-4 grid grid-cols-3 gap-4 sm:grid-cols-4">
      <CardCarousel />
      <CardCarousel />
      <CardCarousel />
      <CardCarousel />
    </div>
  );
}
