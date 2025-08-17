"use client"

import LeftScroll from "@/app/ScrollAnimations/LeftScroll";
import { portugueseSections } from "@/data";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function PortugueseRoutex(){
    const bgRef = useRef(null)
    const [bg,setBg] = useState("bg-neutral-950")
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    setBg("gradient--blacktoblue")
                }
            })
        })
    })

    return (
        
        <div className="w-full overflow-y-hidden overflow-x-scroll scroll-smooth movements__card__container">
            <div className="movements__card__area flex  gap-30 pt-20 p-10 overflow-y-auto  max-md:flex-col max-md:items-center">
                

                {portugueseSections.map(s=>(
                    <LeftScroll threshold={0.75} responsive={768} classname={"expande"}>
                        <Link href={s.path} className="movements__card w-64 h-64 p-2 flex flex-col  gap-2 bg-neutral-800 rounded-lg border-2 border-neutral-200 cursor-pointer hover:bg-neutral-200 hover:border-2 hover:border-neutral-700 hover:text-neutral-800">
                        <h1 className="Montserrat flex pt-3  pl-3 text-xl  ">{s.name}</h1>
                        <p className="text-base Poppins  flex pt-10 pl-3 self-center">{s.description}</p>
                        </Link>
                    </LeftScroll>
                ))}
            
                

            </div>
        </div>
    
    )
}