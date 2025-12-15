"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useTransitionContext } from "@/components/transitionprovider";
function ChatWindow() {
    const router = useRouter();
    const pathname = usePathname();
    const{windowed,setWindowed,Router} = useTransitionContext();
    useEffect(()=>{
      if(pathname == "/chat" && windowed){
          setWindowed(false);
      }  
    },[pathname])
    return (
    <section>
      <h2 style={{animationDelay:"500ms"}} className={` ${windowed ? "fadeout" :""} slidein font-sans font-semibold absolute text-4xl top-10 left-15`}>
        Zira
      </h2>
      <div
        className={`${windowed ? "fadeout" : " "} slidein user-dom absolute bottom-9 left-10 group flex flex-row items-center justify-start gap-2 bg-gray-100 px-1.5 py-1.5 rounded-full transition-all slidein duration-300 ease-in-out hover:w-max overflow-hidden `}
        style={{ animationDelay: "100ms" }}
      >
        <img
          src="https://untitledui.com/images/avatars/owen-harding"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="user-text font-sans select-none whitespace-nowrap opacity-0 hidden group-hover:block starting:opacity-0 transition-discrete group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          Admin
        </span>
      </div>
    </section>
  );
}

export default ChatWindow;
