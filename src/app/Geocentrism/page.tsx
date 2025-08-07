import { PersonalData, TextBox } from "@/Components/Box";
import Geocentrism from "./Geocentrism";
import geoCentrismImg from '@/assets/random/geocentrismTheory.jpeg'

const geoCentrismData : PersonalData = {
    title: "Geocentrismo",
    texts: ["A teoria geocêntrica, também conhecida como modelo geocêntrico, propõe que a Terra é o centro imóvel do universo, e os demais corpos celestes se movem em órbitas ao seu redor","A ideia de um universo geocêntrico foi desenvolvida por diversos pensadores antigos, como Aristóteles e Hiparco, mas foi o astrônomo grego Cláudio Ptolomeu, no século II d.C., quem elaborou o modelo mais completo e influente da época, conhecido como modelo ptolomaico." ],
    img: geoCentrismImg.src
}

export default function App () {
    return(
        <div className="Geocentrism fade-in-1s" >
            <div className="wrapper pt-30">
            <TextBox title={geoCentrismData.title} texts={geoCentrismData.texts} img={geoCentrismData.img}></TextBox>
            <h1 className="Poppins pt-20 flex text-center self-center justify-center"> Teoria do Geocentrismo </h1>
            <Geocentrism></Geocentrism>
            </div>
        </div>
    )
}