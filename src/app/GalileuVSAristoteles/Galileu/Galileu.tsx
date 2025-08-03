import { PersonalData } from "@/Components/Box";
import GalileuGraph from "./GalileuGraph";

import galileuPic from '@/assets/physicist/galileuPic.jpg'
import {TextBox} from "@/Components/Box";
import { DirectionReveal } from "@/app/ScrollAnimations/DirectionReveal";
import RevealScroll from "@/app/ScrollAnimations/RevealScroll";



const GalileuData: PersonalData ={
    title: "Galileu Galilei",
    texts: ["Grande cientista que defendeu que o peso não impacta nas quedas dos objetos","Galileo di Vincenzo Bonaulti de Galilei, mais conhecido como Galileu Galilei, foi um astrônomo, físico e engenheiro florentino, às vezes descrito como polímata. Frequentemente é referenciado como pai da astronomia observacional, pai da física moderna, pai do método científico e pai da ciência moderna"],
    img: galileuPic.src
}

export default function Galileu () {
    return (
        <div className="Galileu flex flex-col pt-20 gap-10 justify-center wrapper ">
            <TextBox title={GalileuData.title} texts={GalileuData.texts} img={GalileuData.img}></TextBox>
            <DirectionReveal direction={'right'} responsive={2000} threshold={0.9} classname={"py-20 max-md:px-5"}>
                <div className="flex gap-4  flex-row-reverse">
                    <div className="bg-neutral-200 h-20 w-1"></div>
                    <h1 className="fade-in-1s Montserrat self-center text-4xl max-md:text-3xl">Teoria de Galileu </h1>
                </div>
            </DirectionReveal> 
            <RevealScroll threshold={0.5} transition="transition-all duration-800">
            <GalileuGraph/>
            </RevealScroll>
        </div>
    )
}