"use client"

import Link from "next/link"
import { ProjectBox } from "./Box"
import gemini_app_img from "@/assets/random/gemini_app_img.png"
import { useEffect, useRef, useState } from "react"
import { ProjectCategories } from "@/data"
import { threshold } from "three/src/nodes/TSL.js"
import GeminiBot from "./OtherProject/GeminiBot"
import Castellan from "./OtherProject/Castellan"

type Project = {
    imgurl?: string,
    name?: string
    category?: string
    videourl?: string
    description_text?: string
}

const gemini_bot_app: Project = {
    name: "Gemini-Bot-App",
    description_text: "Um bot assistente que irá te ajudar quando ver que é necessário, feito com GEMINI",
    imgurl: gemini_app_img.src
}

type Props ={
    onclick?: () => void,
    classname?: string
}

export default function OtherProjects({onclick,classname}: Props){
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
                    setBg("gradients--blacktoblue")
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
    const python = ProjectCategories[0]
    console.log(python.bgColor)
    return(
        
        
        <div className={classname} onClick={onclick}>
        <div className="pb-10 pt-20 wrapper">
            <h1 className="OtherProjects Poppins text-4xl max-2xl:pl-5">
                Outros projetos
            </h1>
        </div>
        
        <GeminiBot></GeminiBot>
        <Castellan></Castellan>
    
        
        
    

        
        </div> 
       
    
        
    )
}