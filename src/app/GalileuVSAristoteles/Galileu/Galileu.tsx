import { PersonalData } from "@/Components/Box";
import GalileuGraph from "./GalileuGraph";

import galileuPic from '@/assets/physicist/galileuPic.jpg'
import {TextBox} from "@/Components/Box";



const GalileuData: PersonalData ={
    title: "Galileu Galilei",
    texts: ["Grande cientista que defendeu que o peso não impacta nas quedas dos objetos","Galileo di Vincenzo Bonaulti de Galilei, mais conhecido como Galileu Galilei, foi um astrônomo, físico e engenheiro florentino, às vezes descrito como polímata. Frequentemente é referenciado como pai da astronomia observacional, pai da física moderna, pai do método científico e pai da ciência moderna"],
    img: galileuPic.src
}

export default function Galileu () {
    return (
        <div className="Galileu flex flex-col pt-20 gap-10 justify-center wrapper ">
            <TextBox title={GalileuData.title} texts={GalileuData.texts} img={GalileuData.img}></TextBox>

            <h1 className="fade-in-1s Montserrat self-center text-4xl">Teoria de Galileu: </h1>
            <GalileuGraph/>
        </div>
    )
}