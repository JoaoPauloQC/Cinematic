"use client"

import Link from "next/link"
import { ProjectBox } from "./Box"
import gemini_app_img from "@/assets/random/gemini_app_img.png"
import { useEffect, useState } from "react"
import { ProjectCategories } from "@/data"

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
    const [width,setWidth] = useState(window.innerWidth)
    useEffect(()=>setWidth(window.innerWidth),[window.innerWidth])
    const python = ProjectCategories[0]
    console.log(python.bgColor)
    return(
        <div className={classname} onClick={onclick}>
        <div className="py-30">
            <h1 className="OtherProjects Poppins text-4xl max-2xl:pl-5">
                Outros projetos
            </h1>
        </div>
        <ProjectBox classname="bg-neutral-900  max-md:flex-col border-blue-500" changeSizeOnHover={true}>
            <div className="flex gap-4 max-md:gap-10 p-2 max-md:flex-col">
                
                <div className="Poppins texts__and__button pl-2 ">
                    <div className="title pt-10 max-lg:pt-7 ">
                        <h1 className="text-3xl text-blue-400">{gemini_bot_app.name}</h1>
                    </div>
                    <div className="pt-2">
                        <div className={"py-1 px-3 max-w-max rounded-4xl "} style={{backgroundColor: ProjectCategories[0].bgColor}}>
                            <p className="text-xs" style={{color: ProjectCategories[0].textColor}}>{ProjectCategories[0].name}</p>
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
                    <img src={gemini_bot_app.imgurl} alt="" className="rounded-xl  border-2" />
                </div>
            </div>
        </ProjectBox>
        </div>
    )
}