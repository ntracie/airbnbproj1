"use client";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomCarousel from "./customcarousel";
import SubmitButton from "./SubmitButton";
import TextInput from "./textinput";
import TextArea from "./TextArea";

export type RegisterInputProps = {
  name: string;
  price: number;
  description: string;
};
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
export default function Form() {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterInputProps>();
  const router = useRouter();
  async function onSubmit(data: RegisterInputProps) {
    console.log(data);

    try {
      const res = await fetch(`${baseUrl}/api/v1/products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log(res);
    } catch (error) {}
  }

  return (
    <div className="w-full lg:grid h-screen lg:min-h-[600px] lg:grid-cols-2 relative ">
      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="absolute top-5 left-5">Simple UI</div>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Create an Account</h1>
          </div>
          <form className="grid gap-4" onSubmit={handleSubmit(onSubmit)}>
            <TextInput
              register={register}
              errors={errors}
              label="Product Name"
              name="name"
            />
            <TextInput
              register={register}
              errors={errors}
              label="Product Price"
              name="price"
            />
            <TextArea
              register={register}
              errors={errors}
              label="Product description"
              name="productDetails"
            />

            <SubmitButton
              title="Submit Product"
              loading={isLoading}
              loadingTitle="Creating Account please wait..."
            />
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
      <div className="hidden bg-muted lg:block relative">
        <CustomCarousel />
      </div>
    </div>
  );
}
