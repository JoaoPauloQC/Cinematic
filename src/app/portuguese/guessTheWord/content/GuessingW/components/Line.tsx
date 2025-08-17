import { ChangeEvent, useEffect, useState } from "react";
import Input from "./Input";

type Props = {
    myword_splited: string[],
    word : string,
    line: number,
    indexEnable: number,
    gameWon: number,
    setGameWon: (n:number) => void,
}

export default function Line ({gameWon,setGameWon,myword_splited, word,line, indexEnable} : Props){
    
    const [isLineFinished, setIsLineFinished] = useState(false)
    const HasOrNot = (e: ChangeEvent<HTMLInputElement>) => {
        const response = e.target.value
        if (myword_splited.includes(response)){
            return "bg-green"
        }
        return "bg-red"
    }
    const [resp , setResp] = useState(Array(word.length).fill(""))
    

    return (
        <div className="flex">
            {myword_splited.map((c,i) => { return (

                <Input gameWon={gameWon} setGameWon={setGameWon} resp={resp} setResp={setResp} line={line} indexEnable={indexEnable} word={word} myword_splited={myword_splited} i={i}/>

            )})}
        </div>
    )
    }