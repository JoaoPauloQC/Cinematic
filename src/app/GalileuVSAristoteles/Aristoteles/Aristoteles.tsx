import { PersonalData } from "@/Components/Box";
import AristolesGraph from "./AristotelesGraph";
import aristotelesPic from '@/assets/physicist/aristotelesPic.jpg'
import {TextBox} from "@/Components/Box";
import { DirectionReveal } from "@/app/ScrollAnimations/DirectionReveal";
import RevealScroll from "@/app/ScrollAnimations/RevealScroll";

const AristolesData : PersonalData ={
    title: "Aristóteles",
    texts: ["Aristóteles foi um filósofo e polímata da Grécia Antiga. Ao lado de Platão, de quem foi discípulo na Academia, foi um dos pensadores mais influentes da história da civilização ocidental.", 
        "Foi refutado por Galileu mas acreditava que a velocidade de um corpo em queda era proporcional ao seu peso"],
    img: aristotelesPic.src
}

export default function Galileu () {
    return (
        <div className="Aristoteles flex flex-col pt-20 gap-10 justify-center wrapper ">
            <TextBox title={AristolesData.title} texts={AristolesData.texts} img={AristolesData.img}></TextBox>
            <DirectionReveal direction={'right'} responsive={2000} threshold={0.9} classname={"py-10 max-md:px-5"}>
                <div className="flex gap-4">
                    <div className="bg-neutral-200 h-20 w-1"></div>
                    <h1 className="fade-in-1s Montserrat self-center text-4xl max-md:text-3xl">Teoria de Aristóteles </h1>
                </div>
            </DirectionReveal>
            <RevealScroll threshold={0.5} transition="transition-opacity duration-800"> 
                <AristolesGraph/>
            </RevealScroll>
        </div>
    )
}