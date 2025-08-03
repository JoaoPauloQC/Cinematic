"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
    children: React.ReactNode,
    classname?: string,
    transition?: string,
    threshold: number,
}

export default function RevealScroll ({children,classname,threshold,transition = "transition-opacity duration-300"}: Props){

    
    
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
        },{threshold:threshold, rootMargin: '0px'})
        if(RevealRef.current){
            observe.observe(RevealRef.current)
        }
        console.log("Constructing")

        return () =>{
            observe.disconnect()
            console.log("Destructing")
        }
    },[threshold])

    return(
        <div className={(isVisible? "opacity-100 translate-y-0 " : "opacity-0 translate-y-0") + transition } ref={RevealRef} style={{minHeight: 250 + "px"}}>
            {children}
        </div>
    )

}