import GalileuGraph from "./Galileu/GalileuGraph";

export default function Galileu () {
    return (
        <div className="Galileu flex flex-col pt-20 gap-10 justify-center ">
            <h1 className="fade-in-1s Montserrat self-center text-4xl">Teoria de Galileu: </h1>
            <GalileuGraph/>
        </div>
    )
}