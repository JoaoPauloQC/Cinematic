import { PersonalData, TextBox } from "@/Components/Box";
import barrocoImg from '@/assets/portuguese/barroco.jpg'

const barrocodata : PersonalData = {
    title: "Barroco",
    texts: ["O Barroco foi um estilo artístico que floresceu na Europa e nas Américas entre os séculos XVI e XVIII, caracterizado por sua exuberância, dramaticidade e uso intenso de elementos decorativos.","No Brasil, o Barroco teve um papel importante durante o período colonial, especialmente no século XVIII, deixando um legado significativo em diversas cidades como Salvador, Rio de Janeiro e Ouro Preto. "],   
    img: barrocoImg.src
}

export default function Barroco(){
    return (
        <div className="Barroco py-40">
            <div className="wrapper">
                <TextBox texts={barrocodata.texts} img={barrocodata.img} title={barrocodata.title}></TextBox>
            </div>
        </div>

    )
}