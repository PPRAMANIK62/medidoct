"use client";
import React from "react";
import { Button } from "./ui/button";
import { PRODUCT_CATEGORIES } from "@/config";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Category = (typeof PRODUCT_CATEGORIES)[number];

interface NavItemProps {
  category: Category;
  handleOpen: () => void;
  isOpen: boolean;
  isAnyOpen: boolean;
}

const NavItem = ({ isOpen, isAnyOpen, category, handleOpen }: NavItemProps) => {
  return (
    <div className="flex">
      <div className="relative flex items-center">
        <Button
          className="gap-1.5"
          onClick={handleOpen}
          variant={isOpen ? "secondary" : "ghost"}
        >
          {category.label}
          <ChevronDown
            className={cn("h-4 w-4 transition-all text-muted-foreground", {
              "-rotate-180": isOpen,
            })}
          />
        </Button>
      </div>

      {isOpen ? (
        <div
          className={cn("absolute top-full text-sm text-muted-foreground", {
            "animate-in fade-in-10 slide-in-from-top-5": !isAnyOpen,
          })}
        >
          <div
            className="absolute indent-0 top-1/2 bg-white shadow"
            aria-hidden="true"
          />

          <div className="relative bg-white rounded-lg shadow shadow-gray-300">
            <div className="mx-auto max-w-4xl px-8">
              <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-8">
                <div className="col-span-4 col-start-1 grid grid-cols-3 gap-x-4 gap-y-4">
                  {category.featured.map((item) => (
                    <div
                      key={item.label}
                      className="group relative text-base sm:text-sm"
                    >
                      <div className="relative rounded-lg bg-green-100 hover:shadow hover:shadow-green-500 flex justify-start py-4 px-3">
                        <Image
                          src={item.imageUrl}
                          alt="product category image"
                          width={64}
                          height={58}
                          className=""
                        />
                        <div className="flex flex-col justify-center pl-2">
                          <Link
                            href={item.href}
                            className="block font-medium text-gray-900"
                          >
                            {item.label}
                          </Link>
                          <p className="mt-1" aria-hidden="true">
                            Shop Now
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default NavItem;
