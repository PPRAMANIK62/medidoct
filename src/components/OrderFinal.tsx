"use client";
import { FEATURED_CATEGORIES } from "../config";
import { formatPrice } from "../lib/utils";
import { Order, Product, User } from "../payloadTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import PaymentStatus from "./PaymentStatus";
import { Loader2 } from "lucide-react";
import { redirect } from "next/navigation";
import { ORDERID_ADD } from "../config/config";
import { trpc } from "../app/_trpc/client";

interface OrderProps {
  user: User;
  orderId: string;
}

const OrderFinal = ({ user, orderId }: OrderProps) => {
  const { data, isLoading } = trpc.getOrder.useQuery({ orderId });

  const order = data?.order[0] as Order;

  const orderUserId =
    typeof order?.user === "number" ? order?.user : order?.user.id;

  if (isLoading) {
    return (
      <div className="mt-32 flex flex-col items-center gap-2">
        <Loader2 className="animate-spin h-8 w-8 text-zinc-300" />
        <h3 className="font-semibold text-xl">Loading...</h3>
        <p className="text-muted-foreground text-base">
          This won&apos;t take long.
        </p>
      </div>
    );
  }

  if (orderUserId !== user?.id) {
    return redirect(`/sign-in?origin=thank-you?orderId=${order.id}`);
  }

  const products = order.products as Product[];

  const orderTotal = products.reduce((total, product) => {
    return total + product.price;
  }, 0);

  return (
    <>
      {order._isPaid ? (
        <p className="mt-2 text-base text-muted-foreground">
          Your order was processed and your assets are available to download
          below. We&apos;ve sent your receipt and order details to{" "}
          {typeof order.user !== "number" ? (
            <span className="font-medium text-gray-900">
              {order.user.email}
            </span>
          ) : null}
          .
        </p>
      ) : (
        <p className="mt-2 text-base text-muted-foreground">
          We appreciate your order, and we&apos;re currently processing it. So
          hang tight and we&apos;ll send you confirmation very soon!
        </p>
      )}

      <div className="mt-16 text-sm font-medium">
        <div className="text-muted-foreground">Order number</div>
        <div className="mt-2 text-gray-900">{order.id + ORDERID_ADD}</div>

        <ul className="mt-6 divide-y divide-gray-200 border-t border-gray-200 text-sm font-medium text-muted-foreground">
          {(order.products as Product[]).map((product) => {
            const label = FEATURED_CATEGORIES.find(
              ({ value }) => value === product.category
            )?.label;

            // const downloadUrl = (product.product_files as ProductFile)
            //   .url as string;

            const { image } = product.images[0];

            return (
              <li key={product.id} className="flex space-x-6 py-6">
                <div className="relative h-24 w-24">
                  {typeof image !== "string" && image.url ? (
                    <Image
                      fill
                      src={image.url}
                      alt={`${product.name} image`}
                      className="flex-none rounded-md bg-gray-100 object-cover object-center"
                    />
                  ) : null}
                </div>

                <div className="flex-auto flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="text-gray-900">{product.name}</h3>

                    <p className="my-1">Category: {label}</p>
                  </div>

                  {/* {order._isPaid ? (
                    <a
                      href={downloadUrl}
                      download={product.name}
                      className="text-blue-600 hover:underline underline-offset-2"
                    >
                      Download asset
                    </a>
                  ) : null} */}
                </div>

                <p className="flex-none font-medium text-gray-900">
                  {formatPrice(product.price)}
                </p>
              </li>
            );
          })}
        </ul>

        <div className="space-y-6 border-t border-gray-200 pt-6 text-sm font-medium text-muted-foreground">
          <div className="flex justify-between">
            <p>Subtotal</p>
            <p className="text-gray-900">{formatPrice(orderTotal)}</p>
          </div>

          <div className="flex justify-between">
            <p>Transaction Fee</p>
            <p className="text-gray-900">{formatPrice(1)}</p>
          </div>

          <div className="flex items-center justify-between border-t border-gray-200 pt-6 text-gray-900">
            <p className="text-base">Total</p>
            <p className="text-base">{formatPrice(orderTotal + 1)}</p>
          </div>
        </div>

        <PaymentStatus
          isPaid={order._isPaid}
          orderEmail={(order.user as User).email}
          orderId={String(order.id)}
        />

        <div className="mt-16 border-t border-gray-200 py-6 text-right">
          <Link
            href="/products"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            Continue shopping &rarr;
          </Link>
        </div>
      </div>
    </>
  );
};

export default OrderFinal;
