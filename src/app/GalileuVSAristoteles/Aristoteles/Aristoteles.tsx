import Box, { PersonalData } from "@/Components/Box";
import AristolesGraph from "./AristotelesGraph";
import aristotelesPic from '@/assets/physicist/aristotelesPic.jpg'

const AristolesData : PersonalData ={
    title: "Aristóteles",
    texts: ["Aristóteles foi um filósofo e polímata da Grécia Antiga. Ao lado de Platão, de quem foi discípulo na Academia, foi um dos pensadores mais influentes da história da civilização ocidental.", 
        "Foi refutado por Galileu mas acreditava que a velocidade de um corpo em queda era proporcional ao seu peso"],
    img: aristotelesPic.src
}

export default function Galileu () {
    return (
        <div className="Aristoteles flex flex-col pt-20 gap-10 justify-center wrapper ">
            <Box title={AristolesData.title} texts={AristolesData.texts} img={AristolesData.img}></Box>
            <h1 className="fade-in-1s Montserrat self-center text-4xl">Teoria de Aristóteles: </h1>
             <AristolesGraph/>
        </div>
    )
}