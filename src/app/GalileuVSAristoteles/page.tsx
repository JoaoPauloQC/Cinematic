import Aristoteles from "./Aristoteles/Aristoteles";
import Galileu from "./Galileu";

export default function GalileuVSAristoteles() {
    return (
        <div className="GalileuVSAristoles flex flex-col">
            <Galileu/>
            <Aristoteles/>
        </div>
    )
}