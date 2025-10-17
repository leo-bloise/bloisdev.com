"use client";

import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  fallback?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function GoBackButton({ fallback = "/", className = "", children }: Props) {
  const router = useRouter();

  function goBack() {
    try {
      router.back();
    } catch (err) {
      router.push(fallback);
    }
  }

  return (
    <button onClick={goBack} className={className}>
      {children ?? "Back"}
    </button>
  );
}
