"use client"

import { useEffect, useRef, useState } from "react"

export default function AristolesGraph(){
    const [ypos, setypos] = useState(0)
        const yposRef = useRef(ypos)
        const [speed, setSpeed] = useState(0.5)
        const speedRef = useRef(speed)
        const [ballsize , setballsize] = useState(12)
        const [timer, settimer] = useState(0)
        const ballsizeRef = useRef(ballsize)
        useEffect(()=>{
            yposRef.current = ypos
        },[ypos])
        useEffect(()=>{
            speedRef.current = speed
            console.log(speed)
        },[speed])
        useEffect(()=>{
            ballsizeRef.current = ballsize;
        },[ballsize])

        function increaseball (){
            setballsize(prev => prev+1)
        }
    
        function displayball () {
            settimer(0)
            const timing = setInterval(()=> settimer(prev=> prev +1),1000) 
            function displaying (){
                if (yposRef.current < 400){
                    console.log('IF - DisplayBall')
                    setypos(prev => prev+1)
                    console.log(ypos)
                    setSpeed(prev => prev +0.05)
                    setTimeout(displaying,speedRef.current)
                }
                else{
                    console.log('Else - DisplayBall')
                    clearInterval(timing)
                    droppingball()
                }
            }
            displaying()
            
        }
    
        function droppingball (){
            
            const timing = setInterval(()=> settimer(prev=> prev +1),1000) 
            function droppingball(){
                if (yposRef.current != 0){
                    console.log('IF - DroppingBall')
                    setypos(prev => prev-1)
                    if (speedRef.current < 2){
                        setSpeed(1)
                    }
                    else{
                        setSpeed(prev => prev-(0.05+(ballsizeRef.current * 0.001)))
                    }
                    setTimeout(droppingball,speedRef.current)
                }
                else{
                    console.log('Else - DroppingBall')
                    clearInterval(timing)
                    setSpeed(0.5)
                }
            }
            droppingball()
        }
    
        return (
            <div className="Aristoteles__Graph__area flex gap-10 flex-col items-center justify-center">
                <div className="Aristoteles__Graph flex justify-center items-end  rounded-lg">
                    <div className={`Aristoteles__ball  bg-red-500 relative rounded-full`} style={{bottom: ypos + "px", width: ballsize, height:ballsize}}></div>
                </div>
                <button onClick={displayball} className="w-50  rounded-lg p-5 bg-neutral-300 text-neutral-800 Poppins cursor-pointer Graph__Ball__Button"> Lançar bola </button>
                <button onClick={()=> setballsize(prev=> prev+1)} className="w-50  rounded-lg p-5 bg-neutral-300 text-neutral-800 Poppins cursor-pointer Graph__Ball__Button"> Aumentar bola </button>
                <button onClick={()=> setballsize(prev=> prev-1)} className="w-50  rounded-lg p-5 bg-neutral-300 text-neutral-800 Poppins cursor-pointer Graph__Ball__Button"> Diminuir bola </button>
                <div className="time">
                    <h1 className="text-4xl Poppins">{timer}</h1>
                </div>
            </div>
    
        )
}