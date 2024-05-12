"use client";
import React from "react";
import { trpc } from "../_trpc/client";

const page = () => {
  const { data } = trpc.getSingleProduct.useQuery({ productId: "1" });
  console.log(data);

  return <div>page</div>;
};

export default page;
