import Aristoteles from "./Aristoteles/Aristoteles";
import Galileu from "./Galileu/Galileu";

export default function GalileuVSAristoteles() {
    return (
        <div className="GalileuVSAristoles flex flex-col fade-in-4s">
            <Galileu/>
            <Aristoteles/>
        </div>
    )
}