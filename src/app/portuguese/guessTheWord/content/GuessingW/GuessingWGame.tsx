"use client"


import { ChangeEvent, use, useEffect, useState } from "react"
import Line from "./components/Line"
import GameOverPopUp from "./components/GameOverPopUp"
import WonPopUp from "./components/WonPopUp"

export const GuessingWGame = () => {
    
    

    
    const [word, setword] = useState("bingo")
    
    const myword_splited = word.split("")
    const [line,setLine] = useState(0)
    const [gameWon, setGameWon] = useState(word.length+1)
    const [isPopUpVisible, setIsPopUpVisible] = useState(false)
    const [wonPopUpState,setWonPopUpState] = useState(false)
    useEffect (()=> {console.log("gamewon: " + gameWon); line != 0? setLine(gameWon+1) : setLine(line);if(gameWon < word.length){setWonPopUpState(true)}},[gameWon])
    useEffect(()=> gameWon < 6? setLine(gameWon+1) : console.log("Line = " + line + " Pop is visibible = " + isPopUpVisible) , [line])
    useEffect(()=> console.log(isPopUpVisible),[isPopUpVisible])
    useEffect(()=>{setLine(0);setGameWon(word.length+1);console.log("Word useEffect")},[word])
    const handleclick = () =>{
        if(gameWon == 6){
            console.log(gameWon)
            if (line != word.length-1){
                console.log("in if")
                setLine((line === myword_splited.length - 1)? 0 : line+1)
            }
            else{
                
                setLine(word.length)
                console.log("else")
                setIsPopUpVisible(true)
            }
        }
    }

    return (
        <>
            <div className="GuessingW__inputs">  
            {Array(word.length).fill("").map((c,indexEnable) => 
                <Line gameWon={gameWon} setGameWon={setGameWon} line={line} indexEnable={indexEnable} word={word} myword_splited={myword_splited}/>
            )}
            </div>
            <button onClick={() => handleclick()} className="GuessTheW__button Poppins bg-neutral-900 border-amber-300 border-2 hover:bg-neutral-950  transition-all duration-300 ease-out rounded-2xl p-3 text-lg"> Tentar </button>
            <GameOverPopUp isPopUpVisible={isPopUpVisible} setIsPopUpVisible={setIsPopUpVisible} />
            <WonPopUp isPopUpVisible={wonPopUpState} setIsPopUpVisible={setWonPopUpState}></WonPopUp>
        </>
    )

}