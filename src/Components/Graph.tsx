"use client"
import { useEffect, useState } from "react"

type Props = {
    So : number,
    v: number,
    t: number,
    max: number, 
    y: number,
    sety: (y:number) => void
}


export default function Graph({So,v,t,max,y,sety}: Props){

    
    const [ypos, setypos] = useState(y)
    const [xpos, setxpos] = useState(y)
    const [divisor,setDivisor] = useState(2)
    useEffect (()=>{
        
        const newy = So + (v * t)
        console.log("S = " , (So + (v * t)))
        console.log(newy)
        sety(newy)
    },[So,v,t])
    useEffect(()=>{
        
        let newdivisor: number = 2
        console.log("hi")
        while(true){
            console.log(((((So + (v*500))/1000)*100)/newdivisor) + "%")
            if(((((So + (v*max))/1000)*100)/newdivisor) > 100){
                newdivisor += 1
            }
            else{
                break
            }

        }
        console.log("Divisor ", newdivisor)
        setDivisor(newdivisor)
    },[y,v,t,So])
    useEffect(()=>{
        console.log()
        const newypos = (y/1000 * 100)/divisor
        const newxpos = t
        setxpos(t)
        setypos(newypos)
    },[y])
    

    return (
        <div className="graph flex items-end bg-amber-200 rounded-lg">
            
            <div className="y w-3 h-3 rounded-full bg-amber-700 relative" style={{bottom: ypos + "%", left: t + "px"}}></div>
            
        </div>
        
    )
}