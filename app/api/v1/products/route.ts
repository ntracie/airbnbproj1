import { RegisterInputProps } from "@/components/Form";
import { db } from "@/prisma/db";

import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  console.log("created  ");
  const data: RegisterInputProps = await request.json();
  console.log(data);
  try {
    const createdProduct = await db.product.create({
      data: {
        name: data.name,
        price: data.price,
        description: data.description,
      },
    });
    console.log(createdProduct);
    return NextResponse.json(
      {
        message: "created",
        data: createdProduct,
        error: null,
      },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        data: null,
        error: "something went wrong",
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const products = await db.product.findMany();
    return NextResponse.json(
      {
        data: products,
        error: null,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        data: null,
        error: "data notFound",
      },
      {
        status: 500,
      }
    );
  }
}
