import { use, useEffect, useRef, useState } from "react"
import * as THREE from "three"
type Props={
    flex: boolean
}

export default function Triceps({flex} : Props){
    const [flexioned,setFlexioned] = useState()
    const [x,setX] = useState(1)
    const [y,setY] = useState(0.8)
    const [ypos,setYpos] = useState(0.4)
    const [TricepsColor,setTricepsColor] = useState("grey")
    const yRef = useRef(ypos)
    const longTriceps_zRef = useRef(-0.2)
    const medialTriceps_z = useRef(-0.15)
    const medialTriceps_y = useRef(-0.5)
    const tricepsRef = useRef([x,y,0.75])
    const rectRef = useRef<THREE.Mesh>(null)
    
    useEffect(()=>{
        console.log(flex)
        if(!flex){
        setTricepsColor("red")
        const animate = setInterval(()=>{
            
            if (tricepsRef.current[1]> 0.6){
            setX(prev=>prev+0.0015)
            setY(prev=>prev - 0.0025)
            setYpos(prev=> prev+0.002)
            
            medialTriceps_z.current +=0.001
            
        
            }else{
                
                clearInterval(animate)
            }

        },10
        )
        
    
    }else{
        setTricepsColor("grey")
        const animate = setInterval(()=>{
            if (tricepsRef.current[1]< 0.8){
            setX(prev=>prev-0.0015)
            setY(prev=>prev + 0.0025)
            setYpos(prev=> prev-0.002)
            
            
            medialTriceps_z.current -=0.001
            
            
            }else{
                clearInterval(animate)
            }
            

        },10
        )
    }

    },[flex])
    useEffect(()=> {tricepsRef.current=[x,y,0.75];yRef.current=ypos},[y])
    return(
        <group>
            
            <mesh
            ref={tricepsRef}
            position={[0,yRef.current,longTriceps_zRef.current]}
            >
                <boxGeometry args={tricepsRef.current as [number,number,number]}/>
                <meshStandardMaterial color={TricepsColor}></meshStandardMaterial>
            </mesh>
            
            
            <mesh
            position={[0.3,medialTriceps_y.current,medialTriceps_z.current]}
            
            >
                <boxGeometry args={[0.4,1.6,0.8]}/>
                <meshStandardMaterial color={TricepsColor}></meshStandardMaterial>
            </mesh>
            <mesh
            position={[-0.3,medialTriceps_y.current,medialTriceps_z.current]}
            
            >
                <boxGeometry args={[0.4,1.6,0.8]}/>
                <meshStandardMaterial color={TricepsColor}></meshStandardMaterial>
            </mesh>
            
        </group>
    )
}