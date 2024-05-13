"use client";
import { trpc } from "@/trpc/client";
import { CircleCheckBig, Loader2, XCircle } from "lucide-react";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";

interface VerifyEmailProps {
  token: string;
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {
  const { data, isLoading, isError } = trpc.auth.verifyEmail.useQuery({
    token,
  });

  if (isError) {
    return (
      <div className="flex flex-col items-center gap-2">
        <XCircle className="h-8 w-8 text-red-600" />
        <h3 className="font-semibold text-xl">There was a problem</h3>
        <p className="text-muted-foreground text-base">
          This token is not valid or might be expire. Please try again.
        </p>
      </div>
    );
  }

  if (data?.success) {
    return (
      <div className="flex flex-col items-center gap-2">
        <CircleCheckBig className="h-8 w-8 text-green-600" />
        <h3 className="font-semibold text-xl">You&apos;re all set!</h3>
        <p className="text-muted-foreground text-base">
          Thank you for verifying your email.
        </p>
        <Link href="/sign-in" className={buttonVariants({ className: "mt-4" })}>
          Sign in
        </Link>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="flex flex-col items-center gap-2">
        <Loader2 className="animate-spin h-8 w-8 text-zinc-300" />
        <h3 className="font-semibold text-xl">Verifying...</h3>
        <p className="text-muted-foreground text-base">
          This won&apos;t take long.
        </p>
      </div>
    );
  }

  return <div>VerifyEmail</div>;
};

export default VerifyEmail;
