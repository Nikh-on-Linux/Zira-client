// app/context/TransitionContext.tsx
"use client";

import React, { createContext, useContext, useState } from "react";
import { useRouter} from "next/navigation";

type TransitionContextType = {
  windowed: boolean;
  setWindowed: (v: boolean) => void;
  Router:Function;
};

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [windowed, setWindowed] = useState(true);
  const router = useRouter();
  const Router = (target:string,source:string)=>{
    if(source != "cw"){
        setWindowed(true);
        router.prefetch(target)
        router.push(target);
        return
    }
    setWindowed(true);
    router.prefetch(target)
    setTimeout(() => {
        router.push(target);
    }, 950);
  }

  return (
    <TransitionContext.Provider value={{ windowed, setWindowed, Router }}>
      {children}
    </TransitionContext.Provider>
  );
}

export function useTransitionContext() {
  const context = useContext(TransitionContext);

  if (!context) {
    throw new Error("useTransitionContext must be used inside AppProvider");
  }

  return context;
}
