
"use client"

import Link from "next/link"
import { ProjectBox } from "@/Components/Box"
import gemini_app_img from "@/assets/random/gemini_app_img.png"
import { useEffect, useRef, useState } from "react"
import { ProjectCategories } from "@/data"
import { threshold } from "three/src/nodes/TSL.js"



type Props ={
    onclick?: () => void,
    classname?: string,
    gradientClass: string,
    children: React.ReactNode,
}

export default function GradientWhenAppears({classname,onclick,gradientClass,children} : Props){
    const [width,setWidth] = useState<number>(0)
    
    useEffect(()=>{
        setWidth(window.innerWidth)    
        const resizeWidth = () => setWidth(window.innerWidth)

        window.addEventListener("resize", resizeWidth)
        return () => window.removeEventListener("resize",resizeWidth)
    })
    const bgRef = useRef(null)
    const [bg,setBg] = useState("bg-neutral-950")
    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry => {
                console.log(entry.isIntersecting)
                if(entry.isIntersecting){
                    setBg(gradientClass)
                }
                else(
                    setBg("")
                )
            })
        },{threshold: 0.7})
        if(bgRef.current){
            observer.observe(bgRef.current)
        }
    })

    
    return(
        <div className="relative pt-30 pb-40" ref={bgRef}>
        <div className="absolute inset-0 bg-neutral-950"></div>
        <div className={(bg === gradientClass? "opacity-100" : "opacity-0") + ` absolute inset-0 transition-all duration-400 ease-in ${gradientClass} `}></div>
        <div className="relative">
            {children}
        </div> 
        </div>
        
        
    )
}