"use client";
import React, { useState, useRef, useEffect } from "react";
import { ArrowUpRightIcon } from "lucide-react";
import { useRouter , useSearchParams } from "next/navigation";

function Home() {
  const [numRows, setNumRows] = useState(1);
  const textRef = useRef<HTMLTextAreaElement | null>(null);
  const inputRef = useRef<HTMLDivElement | null>(null);
  const router = useRouter();
  const params = useSearchParams();
  const[isChatWindow, setChatWindow] = useState(false);

  useEffect(()=>{
    if(params.has("cw")){
      setChatWindow(true);
      setTimeout(() => {
        router.push("/chat?id=");
      }, 950);
    }
    else{
      setChatWindow(false);
    }
  },[params])

  return (
    <section
      className={` center-dom
    flex items-center flex-col justify-center bg-workspace-background    w-full h-full
    relative transition-all duration-700
    slidein
    ${isChatWindow ? "max-w-screen rounded-none max-h-screen" : "lg:max-w-320 lg:max-h-176 rounded-[49px]"}
    `}
    >
      <div className={`${isChatWindow ? "fadeout" : ""} flex flex-col items-center justify-start gap-4 relative`}>
        <h2 className="font-sans font-semibold text-4xl slidein" style={{animationDelay:"200ms"}}>Zira</h2>
        <div
          ref={inputRef}
          className="slidein bg-background border-2 pr-2 border-border rounded-4xl flex flex-row items-center justify-between px-4 py-1.5 h-auto"
          style={{animationDelay:"260ms"}}
        >
          <textarea
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
              const target = e.target;
              target.style.height = "auto";
              target.style.height = target.scrollHeight + "px";
              console.log(target.scrollHeight);
              if (target.scrollHeight > 24 && inputRef.current) {
                inputRef.current.style.borderRadius = "12px";
                inputRef.current.style.alignItems = "end";
              }
              else{
                inputRef.current.style.borderRadius = "32px";
                inputRef.current.style.alignItems = "center";
              }
            }}
            ref={textRef}
            placeholder="What is in your mind?"
            name="prompt"
            id="prompt"
            rows={numRows}
            className="slidein font-sans resize-none max-h-42 font-normal w-60 outline-none border-none grow min-h-5 peer focus:lg:w-100 focus:w-70 transition-all"
            style={{animationDelay:"300ms"}}
          ></textarea>
          <div className="p-0.5 bg-primary-background rounded-full peer-focus:rotate-z-45">
            <ArrowUpRightIcon className="w-5 h-5 text-secondary-foreground slidein" style={{animationDelay:"400ms"}} />
          </div>
        </div>
      </div>
      <div className={`${isChatWindow ? "fadeout" : ""} user-dom absolute bottom-9 left-10 group flex flex-row items-center justify-start gap-2 bg-gray-100 px-1.5 py-1.5 rounded-full transition-all slidein duration-300 ease-in-out hover:w-max overflow-hidden `} style={{animationDelay:"900ms"}}>
        <img
          src="https://untitledui.com/images/avatars/owen-harding"
          alt="avatar"
          className="w-8 h-8 rounded-full"
        />
        <span className="user-text font-sans select-none whitespace-nowrap opacity-0 hidden group-hover:block starting:opacity-0 transition-discrete group-hover:opacity-100 transition-opacity duration-500 ease-in-out">
          Admin
        </span>
      </div>
      <button onClick={()=>{router.push('?cw')}} >Click Me</button>
    </section>
  );
}

export default Home;
