import Link from "next/link";
import profilePic from '@/assets/profile/profilepic.png'

export default function ProjectContent(){


    return (
        <div className=" border-2 rounded-xl px-3 py-2 Poppins flex gap-10 border-neutral-600 hover:bg-neutral-700 bg-neutral-900 ProjectBox max-md:flex-col">
            <div className="text py-10 px-3">
            <h1 className="text-4xl pb-10"> O que é o Central Física? </h1>
            <p className="text-xl">Esse é um projeto feito por <Link href={"https://joaopauloqc.github.io/Portfolio/"} className="hover:text-amber-100 transition-colors duration-300 ease-in">João Paulo Queiroz Costa</Link> para ajudar pessoas com dificuldades na disciplina de física a visualizarem a física de forma menos abstrata.</p>
            <p className="text-xl pt-10"> Se estiver interessado em me ajudar entre no <Link href={"https://github.com/JoaoPauloQC/Cinematic"} className="hover:text-blue-700 transition-colors duration-200 ease-in">Repositório Git </Link>do projeto</p>
            <h1 className="text-3xl pt-10">Aproveite!</h1>
            </div>
            <div className="img w-96 h-96  object-cover rounded-xl max-md:w-full">
                <img src={profilePic.src} alt="" className="w-full h-full object-cover rounded-xl"/>
            </div>
        </div>
    )

}