
"use client"

import Link from "next/link"
import { ProjectBox } from "@/Components/Box"
import gemini_app_img from "@/assets/random/gemini_app_img.png"
import { useEffect, useRef, useState } from "react"
import { ProjectCategories } from "@/data"
import { threshold } from "three/src/nodes/TSL.js"
import GradientWhenAppears from "../GraidientWhenAppears"

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

export default function GeminiBot(){
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
        <GradientWhenAppears gradientClass="gradients--blacktoblue">
        <div className="wrapper">
        <ProjectBox classname="bg-neutral-900  max-md:flex-col border-blue-500" changeSizeOnHover={true}>
            <div className="flex gap-4 max-md:gap-10 p-2 max-md:flex-col">
                
                <div className="Poppins texts__and__button pl-2 ">
                    <div className="title pt-10 max-lg:pt-7 ">
                        <h1 className="text-3xl text-blue-400">{gemini_bot_app.name}</h1>
                    </div>
                    <div className="pt-5">
                        <div className={"py-1 px-3 max-w-max rounded-4xl "} style={{backgroundColor: python.bgColor}}>
                            <p className="text-xs" style={{color: python.textColor}}>{python.name}</p>
                        </div>
                    </div>
                    <div className="pt-10 max-lg:pt-7">
                        <p>{gemini_bot_app.description_text}</p>
                    </div>
                    {width > 1000 && 
                    <div className="flex justify-center pt-10">
                        <Link href={"/zips/gemini-copilot-app-1.0.rar"} download={true}>
                        <button className="bg-blue-600 p-2 rounded-xl Poppins hover:bg-neutral-300 hover:text-blue-600 transition-all duration-500 cursor-pointer" >
                            Baixar
                        </button>
                        </Link>
                    </div>
                    }

                </div>
                <div className="img-space w-3/4 max-md:w-full h-full overflow-x-hidden overflow-y-hidden object-cover">
                    <img src={gemini_bot_app.imgurl} alt="" className="rounded-xl  border-2 border-blue-200" />
                </div>
            </div>
        </ProjectBox>
        </div> 
        </GradientWhenAppears>
        
        
    )
}
    