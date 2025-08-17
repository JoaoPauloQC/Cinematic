import { GuessingWGame } from "./GuessingWGame";
import GuessingW from "./page";

export default function GuessingWContent (){
    return (
        <div className="GuessinW py-20">
            <div className="wrapper flex flex-col gap-x-10 gap-y-8 items-center">
                <h1 className="text-3xl text-center GuessingW__title">Acerte a palavra!</h1>
                <GuessingWGame></GuessingWGame>
            </div>
        </div>
    )
}