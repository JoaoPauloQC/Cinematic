"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
    children: React.ReactNode,
    classname?: string,
    threshold: number,
}

export default function RevealScroll ({children,classname,threshold}: Props){

    const RevealRef = useRef(null)
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
        if(RevealRef.current){
            observe.observe(RevealRef.current)
        }
        console.log("Constructing")

        return () =>{
            console.log("Destructing")
        }
    })

    return(
        <div className={(isVisible? "opacity-100 " : "opacity-0 ") + "transition-opacity duration-300"} ref={RevealRef}>
            {children}
        </div>
    )

}