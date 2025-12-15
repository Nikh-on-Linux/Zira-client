"use client"
import React from "react";
import { useTransitionContext } from "@/components/transitionprovider";
function ClientLayout({children}:{children:React.ReactNode}) {
    const{windowed} = useTransitionContext();
  return (
    <section
      className={`center-dom flex items-center flex-col justify-center bg-workspace-background w-full h-full relative transition-all duration-700 ${windowed ?"lg:max-w-320 lg:max-h-176 rounded-[49px]" : "max-w-screen max-h-screen rounded-none"}`}
    >
      {children}
    </section>
  );
}

export default ClientLayout;
