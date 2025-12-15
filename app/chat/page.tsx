"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
function ChatWindow() {
    const router = useRouter();
    const params = useSearchParams();
    const[changeState, setChangeState] = useState(false);
    useEffect(()=>{
        if(params.has('sttgs') && params.size !=0 ){
            setChangeState(true);
            router.prefetch('/settings');
            setTimeout(() => {
                router.push('/settings');
            }, 950);
            return;
        }
        setChangeState(false);
    },[params])
    return (
    <section className={`${changeState ? "lg:max-w-320 lg:max-h-176 rounded-[49px]" : "max-w-screen max-h-screen rounded-none"} w-full h-full bg-workspace-background center-dom  flex items-center justify-center px-15 py-10 relative`}>
      <h2 className={` ${changeState ? "fadeout" :""} slidein font-sans font-semibold absolute text-4xl top-10 left-15`}>
        Zira
      </h2>
        <button onClick={()=>router.push('?sttgs')} >Go to settings</button>
      <div
        className={`${changeState ? "fadeout" : " "} slidein user-dom absolute bottom-9 left-10 group flex flex-row items-center justify-start gap-2 bg-gray-100 px-1.5 py-1.5 rounded-full transition-all slidein duration-300 ease-in-out hover:w-max overflow-hidden `}
        style={{ animationDelay: "900ms" }}
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
