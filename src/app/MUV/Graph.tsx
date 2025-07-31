"use client"
import { useEffect, useState } from "react"

type Props = {
    So : number,
    v: number,
    t: number,
    a: number,
    max: number, 
    y: number,
    sety: (y:number) => void
}


export default function Graph({So,v,t,max,a,y,sety}: Props){

    
    const [ypos, setypos] = useState(y)
    const [xpos, setxpos] = useState(y)
    const [divisor,setDivisor] = useState(2)
    useEffect (()=>{
        
        const newy = So + (v * t) + (a* (t*t)/2)
        console.log("S = " , (So + (v * t)))
        console.log(newy)
        sety(newy)
    },[So,v,t,a])
    useEffect(()=>{
        
        let newdivisor: number = 2
        console.log("hi")
        while(true){
            console.log(((((So + (v*max))/1000)*100)/newdivisor) + "%")
            if(((((So + (v*max) + (a* (t*t)/2))/1000)*100)/newdivisor) > 100){
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
        const newypos = (((y/1000 * 100)/divisor)/100 * max) - 12
        console.log(newypos)
        const newxpos = t
        setxpos(t)
        setypos(newypos)
    },[y])
    

    return (
        <div className="graph flex items-end bg-neutral-600 rounded-lg">
            
            <div className="y w-3 h-3 rounded-full bg-red-700 relative" style={{bottom: ypos + "px", left: (t-12) + "px"}}></div>
            <div className="lineArea relative flex h-full" style={{left: (max > 400? -100+ "px" : -80 + "px")}}>
                <h1 className="pr-2 md:pr-1 Poppins">{divisor*1000}</h1>
                <div className="line bg-white w-3 rounded-full h-full"></div>
            </div>
            
        </div>
        
    )
}