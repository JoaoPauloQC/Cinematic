"use client"

import { Earth, Jupiter, Mars, Mercury, Moon, Orbit, Saturn, Sun, Venus } from "@/Components/Planets"
import { OrbitControls, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"


export default function Heliocentrism () {
    return (
        <div className="py-20 heliocentrism__Canva ">        
            <Canvas camera={{position: [10,10,10.5],fov: 75}} className="rounded-xl">
            {Array(6).fill("").map((i,index)=>(
                <Orbit radius={index*2+5}/>
            ))}
            
            <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <group position={[4,0,-8]}>
            <Orbit radius={1}/>
            <Moon args={[0.2,10,10]} position={[0,0,1]}></Moon>
            <Earth/>
            
            </group>
            <group position={[8,0,-10]}>
                <Jupiter/>
            </group>
            <group position={[0,0,-5]}>
                <Mercury></Mercury>
            </group>
            <group position={[2,0,-6.5]}>
                <Venus></Venus>
            </group>
            <group position={[0,0,0]}>
                <Sun/>
            </group>
            <group position={[6,0,-9]}>
                <Mars/>
            </group>
            <group position={[10,0,-11]}>
                <Saturn/>
            </group>
            <color attach={'background'} args={['black']}/>
            <Stars saturation={1} count={600} speed={1}/>
            <OrbitControls autoRotate autoRotateSpeed={0} enablePan={true} enableZoom={true} minPolarAngle={1} maxPolarAngle={Math.PI*2} />
        </Canvas>
        </div>

    )
}


