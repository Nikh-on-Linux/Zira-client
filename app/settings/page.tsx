"use client"
import { ChevronLeftIcon } from 'lucide-react'
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import React, {useState,useEffect, use} from 'react'

function settings() {
    const params = useSearchParams();
    const router = useRouter();
    const[windowed,setWindowed] = useState(true);
    useEffect(()=>{
        if(params.has('cw') && !params.size != 0){
            setWindowed(false);
            setTimeout(() => {
                router.back();
            }, 950);
            return
        }
    },[params])
  return (
    <section
    className={` center-dom
    flex items-start flex-col bg-workspace-background py-10 px-10 w-full h-full
    relative transition-all duration-700
    ${!windowed ? "max-w-screen rounded-none max-h-screen" : "lg:max-w-320 lg:max-h-176 rounded-[49px]"}
    `}
    >
        <div onClick={()=>router.back()} className='w-full select-none cursor-pointer group slidein flex flex-row items-center justify-start' >
            <ChevronLeftIcon className='group-hover:-translate-x-1 transition-all' ></ChevronLeftIcon>
            <span className='text-2xl' >Settings</span>
        </div>
    </section>
  )
}

export default settings