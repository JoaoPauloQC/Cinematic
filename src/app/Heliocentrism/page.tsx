import { PersonalData, TextBox } from "@/Components/Box";
import Heliocentrism from "./Heliocentrism";
import helioCentrismImg from '@/assets/random/heliocentrismTheory.png'

const helioCentrismData : PersonalData = {
    title: "Heliocentrismo",
    texts: ["A teoria geocêntrica, também conhecida como modelo geocêntrico, propõe que a Terra é o centro imóvel do universo, e os demais corpos celestes se movem em órbitas ao seu redor","A ideia de um universo geocêntrico foi desenvolvida por diversos pensadores antigos, como Aristóteles e Hiparco, mas foi o astrônomo grego Cláudio Ptolomeu, no século II d.C., quem elaborou o modelo mais completo e influente da época, conhecido como modelo ptolomaico." ],
    img: helioCentrismImg.src
}

export default function App () {
    return(
        <div className="Heliocentrism fade-in-1s" >
            <div className="wrapper pt-30">
            <TextBox title={helioCentrismData.title} texts={helioCentrismData.texts} img={helioCentrismData.img}></TextBox>
            <h1 className="Poppins pt-10 flex text-center self-center justify-center"> Teoria do Heliocentrismo </h1>
            <Heliocentrism></Heliocentrism>
            </div>
        </div>
    )
}