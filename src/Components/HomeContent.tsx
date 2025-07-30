import { allsections } from "@/data";
import Link from "next/link";

export default function HomeContent (){
    return (
        <div className="Home__Content pt-20 fade-in-2s opacity-0">
            <div className="Poppins  ">
                <h1 className="text-4xl">Olá!</h1>
                <h2 className="text-lg">Seja bem vindo ao Central Física</h2>
            </div>


            <div className="w-full overflow-y-hidden overflow-x-scroll scroll-smooth movements__card__container">
            <div className="movements__card__area flex  gap-30 pt-30 p-10 overflow-y-auto  max-md:flex-col max-md:items-center">
                

                {allsections.map(s=>(
                    <Link href={s.path} className="movements__card w-64 h-64 p-2 flex flex-col  gap-2 bg-neutral-800 rounded-lg border-2 border-neutral-200 cursor-pointer hover:bg-neutral-200 hover:border-2 hover:border-neutral-700 hover:text-neutral-800">
                    <h1 className="Montserrat flex pt-3  pl-3 text-xl  ">{s.name}</h1>
                    <p className="text-base Poppins  flex pt-10 pl-3 self-center">{s.description}</p>
                </Link>
                ))}
            
            </div>
            </div>

        </div>
    )
}