import CardContainer from "@/components/CardContainer";
import CategoryBar from "@/components/CategoryBar";
import Form from "@/components/Form";

import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <Header />
      <CategoryBar />
      {/* <a href="" className="">
        Add Product
      </a> */}
      <div className="flex justify-end mr-3">
        <Button asChild>
          <Link href="/add-product">Add Product</Link>
        </Button>
      </div>
      <CardContainer />
      {/* <Form /> */}
    </div>
  );
}
