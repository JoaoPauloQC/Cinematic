"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
    children: React.ReactNode,
    classname?: string,
    threshold: number,
    responsive?: string
}

export default function RevealScroll ({children,classname,threshold,responsive}: Props){

    const LeftRef = useRef(null)
    const [isVisible,setIsVisible] = useState(false)
    useEffect(()=>{
        const observe = new IntersectionObserver((entries) => {
            entries.forEach(e =>{
                if(e.isIntersecting){
                    console.log(e.target)
                    setIsVisible(true)
                }
            })
        },{threshold:threshold})
        if(LeftRef.current){
            observe.observe(LeftRef.current)
        }
        console.log("Constructing Left")

        return () =>{
            console.log("Destructing Left")
        }
    })

    return(
        <div ref={LeftRef}>
        <div className={(responsive + (isVisible? ("translate-x-0 ") : "-translate-x-full ")) + "transition-transform duration-300"}>
            {children}
        </div>
        </div>
    )

}