"use client"

import { useEffect, useRef, useState } from "react"



export const DirectionReveal = ({direction,responsive,children,threshold,classname}: {direction : string,responsive:number,children:React.ReactNode,threshold:number,classname: string}) => {
    
    const side = () => {
        switch (direction){
            case ("left"):
                return "-translate-x-full"
                break
            case ("right"):
                return "translate-x-full"    
        }
    }
    const DirectionRef = useRef(null)
    const [isVisible,setIsVisible] = useState(false)
    useEffect(()=> {
        console.log("Direção:",direction,"Isvisible? :", isVisible,responsive)
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
            if(DirectionRef.current){
                observe.observe(DirectionRef.current)
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
            
            if(DirectionRef.current){
                observe.observe(DirectionRef.current)
            }
            console.log("Constructing Left")
        
            return () =>{
                console.log("Destructing Left")
            }}
            
        }
        )
        
    
        return(
            <div ref={DirectionRef}>
                <div className={((responsive != undefined)?(isVisible? "-translate-x-0 " : side() + " ") : "-translate-x-0 ") + "transition-transform duration-500 " + classname}>
                    {children}
                </div>
            </div>
        )
    
}

