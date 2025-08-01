import { PersonalData } from "@/Components/Box";
import AristolesGraph from "./AristotelesGraph";
import aristotelesPic from '@/assets/physicist/aristotelesPic.jpg'
import TextBox from "@/Components/Box";

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
            <h1 className="fade-in-1s Montserrat self-center text-4xl max-md:text-3xl">Teoria de Aristóteles: </h1>
             <AristolesGraph/>
        </div>
    )
}