"use client"
import Graph from "@/app/MRU/Graph";
import { useEffect, useState } from "react";

export default function MRU () {

    const [t, sett] = useState(5)
    const [max,setMax] = useState(500)
    const [So,setSo] = useState(0)
    const [v,setV] = useState(11)
    const [y, sety] = useState(0)
    
    return (
        <div className="left-to-normal__4s">
            <div className="graphArea flex pt-20 justify-center">
                <Graph So={So} v={v} t={t} max={max} y={y} sety={sety}></Graph>
            </div>
            <div className="rangeinputarea grid gap-20 pt-10 justify-center">
                <div className="flex flex-col justify-center items-center">
                    <label htmlFor="" className="text-center Poppins"> Tempo: {t}</label>
                    <input type="range" name="" id="" min={0} max={max} onChange={(e)=> sett(Number(e.target.value))} className="bg-neutral-700 w-32 h-10"/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <label htmlFor="" className="text-center Poppins"> Velocidade: {v}</label>
                    <input type="range" name="" id="" min={0} max={100} onChange={(e)=> setV(Number(e.target.value))} className="bg-neutral-700 w-32 h-10"/>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <label htmlFor="" className="text-center Poppins"> Distância Inicial: {So}</label>
                    <input type="range" name="" id="" min={0} max={1000} onChange={(e)=> setSo(Number(e.target.value))} className="bg-neutral-700 w-32 h-10"/>
                </div>
                <div className="Montserrat flex justify-center w-max  p-5 rounded-xl bg-neutral-700 transition transition__1s border-2 border-neutral-700  hover:bg-neutral-200 hover:border-2 hover:border-neutral-700 hover:text-neutral-800"><h1 className="text-2xl"> S({t}) = {y}</h1></div>
            </div>
            
        </div>
    )

}