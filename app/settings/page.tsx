"use client";
import { useTransitionContext } from "@/components/transitionprovider";
import { ChevronLeftIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState, useEffect, use } from "react";

function settings() {
  const pathname = usePathname();
  const router = useRouter();
  const { windowed, setWindowed, Router } = useTransitionContext();
  useEffect(() => {
    if (pathname == "/settings" && !windowed) {
      setWindowed(true);
    }
  }, [pathname]);
  return (
    <section
      className={`
    
    `}
    >
      <div
        onClick={() => Router('/chat',"sttng")}
        className="w-full select-none cursor-pointer group slidein flex flex-row items-center justify-start"
      >
        <ChevronLeftIcon className="group-hover:-translate-x-1 transition-all"></ChevronLeftIcon>
        <span className="text-2xl">Settings</span>
      </div>
    </section>
  );
}

export default settings;
