import { use, useEffect, useRef, useState } from "react"
import * as THREE from "three"
type Props={
    flex: boolean
}

export default function Biceps({flex} : Props){
    const [flexioned,setFlexioned] = useState()
    const [x,setX] = useState(1)
    const [y,setY] = useState(1.6)
    const [ypos,setYpos] = useState(-0.3)
    const [bicepsColor,setBicepsColor] = useState("grey")
    const yRef = useRef(ypos)
    const foreArm_z = useRef(0)
    const foreArm_y = useRef(-3.2)
    const bicepsRef = useRef([x,y,0.75])
    const rectRef = useRef<THREE.Mesh>(null)
    
    useEffect(()=>{
        console.log(flex, "Biceps current: ", bicepsRef.current[1])
        if(flex){
        setBicepsColor("red")
        const animate = setInterval(()=>{
            
            if (bicepsRef.current[1]> 1.2){
            setX(prev=>prev+0.0015)
            setY(prev=>prev - 0.0025)
            setYpos(prev=> prev+0.002)
            if(rectRef.current){
            rectRef.current.rotation.x-=0.012
            foreArm_z.current +=0.007
            foreArm_y.current +=0.0075
        }
            }else{
                
                clearInterval(animate)
            }

        },10
        )
        
    
    }else{
        setBicepsColor("grey")
        const animate = setInterval(()=>{
            if (bicepsRef.current[1]< 1.6){
            setX(prev=>prev-0.0015)
            setY(prev=>prev + 0.0025)
            setYpos(prev=> prev-0.0020)
            if(rectRef.current){
            rectRef.current.rotation.x+=0.012
            foreArm_z.current -=0.007
            foreArm_y.current -=0.0075
            }
            }else{
                clearInterval(animate)
                
            }

        },10
        )
    }

    },[flex])
    useEffect(()=> {bicepsRef.current=[x,y,0.75];yRef.current=ypos},[y])
    return(
        <group>
            <mesh
            position={[0,0,0]}
            >
                <boxGeometry args={[1,2.5,0.8]}/>
                <meshStandardMaterial color={"grey"}></meshStandardMaterial>
            </mesh>
            <mesh
            ref={bicepsRef}
            position={[0,yRef.current,0.1]}
            >
                <boxGeometry args={bicepsRef.current as [number,number,number]}/>
                <meshStandardMaterial color={bicepsColor}></meshStandardMaterial>
            </mesh>
            <mesh
            position={[0,1.2,0]}
            >
                <sphereGeometry args={[0.65,32,32]}/>
                <meshStandardMaterial color={"grey"}></meshStandardMaterial>
            </mesh>
            <mesh
            position={[0,-1.7,0]}
            >
                <sphereGeometry args={[0.5,32,32]}/>
                <meshStandardMaterial color={"white"}></meshStandardMaterial>
            </mesh>
            <mesh
            position={[0,foreArm_y.current,foreArm_z.current]}
            ref={rectRef}
            >
                <boxGeometry args={[1,2.5,0.8]}/>
                <meshStandardMaterial color={"grey"}></meshStandardMaterial>
            </mesh>
            
        </group>
    )
}