import { allsections } from "@/data";
import Link from "next/link";
import Physics from "./Physics";
import ProjectContent from "./ProjectContent";
import RevealScroll from "@/app/ScrollAnimations/RevealScroll";
import LeftScroll from "@/app/ScrollAnimations/LeftScroll";
import OtherProjects from "./OtherProjects";
import Portuguese from "./Portuguese";
import PortugueseRoutes from "./PortugueseRoutes";

export default function HomeContent (){
    return (
        <div className="Home__Content pt-10 pb-50 fade-in-4s opacity-0">
            <div className="Poppins max-md:text-center pb-30 ">
                <h1 className="text-6xl">Olá!</h1>
                <div className="flex text-5xl  pt-7 max-md:flex-col">
                <h2 className="">Seja bem vindo ao </h2>
                <p className="font-bold pl-3"> Central Intelecto</p>
                </div>
            </div>
            <div className="max-md:px-5">
            <ProjectContent/>
            <RevealScroll threshold={0.75}>
                <Physics/>
            </RevealScroll>
            </div>

            <div className="w-full overflow-y-hidden overflow-x-scroll scroll-smooth movements__card__container">
            <div className="movements__card__area flex  gap-30 pt-20 p-10 overflow-y-auto  max-md:flex-col max-md:items-center">
                

                {allsections.map(s=>(
                    <LeftScroll threshold={0.75} responsive={768} classname={"expande"}>
                        <Link href={s.path} className="movements__card w-64 h-64 p-2 flex flex-col  gap-2 bg-neutral-800 rounded-lg border-2 border-neutral-200 cursor-pointer hover:bg-neutral-200 hover:border-2 hover:border-neutral-700 hover:text-neutral-800">
                        <h1 className="Montserrat flex pt-3  pl-3 text-xl  ">{s.name}</h1>
                        <p className="text-base Poppins  flex pt-10 pl-3 self-center">{s.description}</p>
                        </Link>
                    </LeftScroll>
                ))}
            
                        

            </div>
            </div>
            <Portuguese/>
            <PortugueseRoutes/>  
            <OtherProjects classname={"pt-20"}></OtherProjects>

        </div>
    )
}