import { PersonalData, TextBox } from "@/Components/Box";
import arcadismImg from '@/assets/portuguese/arcadismo.jpg'

const arcadismdata : PersonalData = {
    title: "Arcadismo",
    texts: ["O arcadismo, também conhecido como neoclassicismo, foi um movimento literário que surgiu na Europa no século XVIII e se manifestou no Brasil na segunda metade desse mesmo século, entre 1768 e 1836.","Caracterizado pela valorização da natureza, da simplicidade e da razão, o arcadismo buscou romper com os excessos do barroco, adotando uma estética mais clássica e racional. "],   
    img: arcadismImg.src
}

export default function Arcadism(){
    return (
        <div className="Arcadism py-40">
            <div className="wrapper">
                <TextBox texts={arcadismdata.texts} img={arcadismdata.img} title={arcadismdata.title}></TextBox>
            </div>
        </div>

    )
}