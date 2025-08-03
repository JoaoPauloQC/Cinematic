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
        const shouldAnimate = (responsive == undefined || responsive > window.innerWidth)
        if (!shouldAnimate){
            setIsVisible(true)
            return
        }
        console.log("Direção:",direction,"Isvisible? :", isVisible,responsive)
            const observe = new IntersectionObserver((entries) => {
                entries.forEach(e =>{
                    if(e.isIntersecting){
                        console.log("Responsive tag: ", responsive)
                        console.log("Width",window.innerWidth)
                        console.log(e.target)
                        setIsVisible(true)
                        
                        
                        
                            
                    }
            })
            },{threshold:threshold,rootMargin: '0px 0px -15% 0px'})
            if(DirectionRef.current){
                observe.observe(DirectionRef.current)
            }
            console.log("Constructing Left")
    
            return () =>{
                observe.disconnect()
                console.log("Destructing Left")
            }}
        )
            
        
    
        return(
            <div ref={DirectionRef}>
                <div className={((responsive != undefined)?(isVisible? "-translate-x-0 " : side() + " ") : "-translate-x-0 ") + "transition-transform duration-500 " + classname}>
                    {children}
                </div>
            </div>
        )
    
}

