import { getServerSideUser } from "@/lib/payloadUtils";
import Image from "next/image";
import React from "react";
import { cookies } from "next/headers";
import OrderFinal from "@/components/OrderFinal";

interface PageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

const page = async ({ searchParams }: PageProps) => {
  const orderId = searchParams.orderId as string;
  const nextCookies = cookies();

  const { user } = await getServerSideUser(nextCookies);

  return (
    <main className="relative lg:min-h-full">
      <div className="hidden align-middle lg:block h-80 overflow-hidden lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-12">
        <Image
          height={420}
          width={600}
          src="/checkout-thank-you.png"
          className="object-cover object-center mx-auto my-48"
          alt="thank you for your order"
        />
      </div>

      <div>
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:py-32 xl:gap-x-24">
          <div className="lg:col-start-2">
            <p className="text-sm font-medium text-green-600">
              Order Successful
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Thanks for ordering
            </h1>
            <OrderFinal user={user} orderId={orderId} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
