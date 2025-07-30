"use client"

import { Earth, Jupiter, Mars, Mercury, Moon, Orbit, Saturn, Sun, Venus } from "@/Components/Planets"
import { OrbitControls, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"


export default function Geocentrism () {
    return (
        <div className="py-20 geocentrism__Canva ">        
            <Canvas camera={{position: [10,10,10.5],fov: 75}} className="rounded-xl">
            {Array(7).fill("").map((i,index)=>(
                <Orbit radius={index+5}/>
            ))}
            
            <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <group>
            <Earth/>
            
            </group>
            <group position={[0,0,-10]}>
                <Jupiter/>
            </group>
            <group position={[5,0,0]}>
                <Moon></Moon>
            </group>
            <group position={[0,0,-6]}>
                <Mercury></Mercury>
            </group>
            <group position={[-7,0,0]}>
                <Venus></Venus>
            </group>
            <group position={[0,0,8]}>
                <Sun/>
            </group>
            <group position={[9,0,0]}>
                <Mars/>
            </group>
            <group position={[-11,0,0]}>
                <Saturn/>
            </group>
            <color attach={'background'} args={['black']}/>
            <Stars saturation={1} count={600} speed={1}/>
            <OrbitControls autoRotate autoRotateSpeed={0.25} enablePan={true} enableZoom={true} minPolarAngle={1} maxPolarAngle={Math.PI*2} />
        </Canvas>
        </div>

    )
}


