"use client"

import { useEffect, useRef, useState } from "react"

type Props = {
    children: React.ReactNode,
    classname?: string,
    threshold: number,
    responsive?: number
}

export default function RevealScroll ({children,classname,threshold, responsive}: Props){

    const LeftRef = useRef(null)
    const [isVisible,setIsVisible] = useState(false)
    useEffect(()=> {
        if (responsive){
        if ( responsive > window.innerWidth){
        const observe = new IntersectionObserver((entries) => {
            entries.forEach(e =>{
                if(e.isIntersecting){
                    console.log("Responsive tag: ", responsive)
                    console.log("Width",window.innerWidth)
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
        }}
        else{
            setIsVisible(true)
        }}
        else{
            const observe = new IntersectionObserver((entries) => {
            entries.forEach(e =>{
                if(e.isIntersecting){
                    console.log("Responsive tag: ", responsive)
                    console.log("Width",window.innerWidth)
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
        }}
        
    }
    )
    

    return(
        <div ref={LeftRef}>
        <div className={((responsive != undefined)?(isVisible? "-translate-x-0 " : "-translate-x-full ") : "-translate-x-0 ") + "transition-transform duration-300 " + classname}>
            {children}
        </div>
        </div>
    )

}