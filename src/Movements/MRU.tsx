"use client"
import Graph from "@/Components/Graph";
import { useEffect, useState } from "react";

export default function MRU () {

    const [t, sett] = useState(5)
    const [max,setMax] = useState(500)
    const [So,setSo] = useState(0)
    const [v,setV] = useState(11)
    
    return (
        <>
            <div className="graphArea flex pt-20 justify-center">
                <Graph So={So} v={v} t={t} max={max}></Graph>
            </div>
            <div className="rangeinputarea flex justify-center">
                <h1>{t}</h1>
                <input type="range" name="" id="" min={0} max={max} onChange={(e)=> sett(Number(e.target.value))} className="bg-neutral-700 w-32 h-10"/>
                <label htmlFor="">{v}</label>
                <input type="range" name="" id="" min={0} max={100} onChange={(e)=> setV(Number(e.target.value))} className="bg-neutral-700 w-32 h-10"/>
                <label htmlFor="">{So}</label>
                <input type="range" name="" id="" min={0} max={1000} onChange={(e)=> setSo(Number(e.target.value))} className="bg-neutral-700 w-32 h-10"/>
            </div>
        </>
    )

}