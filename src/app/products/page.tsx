import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ProductReel from "@/components/ProductReel";
import { FEATURED_CATEGORIES } from "@/config";
import { PRODUCTS_IN_A_PAGE } from "@/config/config";
import React from "react";

type Param = string | string[] | undefined;

interface ProductsPageProps {
  searchParams: { [key: string]: Param };
}

const parse = (param: Param) => {
  return typeof param === "string" ? param : undefined;
};

const page = ({ searchParams }: ProductsPageProps) => {
  const category = parse(searchParams.category);

  const label = FEATURED_CATEGORIES.find(
    ({ value }) => value === category
  )?.label;

  return (
    <MaxWidthWrapper>
      <ProductReel
        title={label ?? "Browse products"}
        query={{ category, limit: PRODUCTS_IN_A_PAGE }}
      />
    </MaxWidthWrapper>
  );
};

export default page;
