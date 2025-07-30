"use client"

import { Earth, Jupiter, Mercury, Moon } from "@/Components/Planets"
import { OrbitControls, Stars } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"


export default function Geocentrism () {
    return (
        <div className="py-20 geocentrism__Canva ">        
            <Canvas camera={{position: [0,0,4.5],fov: 50}} className="rounded-xl">
            <ambientLight intensity={Math.PI / 2} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                    <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            <group>
            <Earth/>
            
            </group>
            <group position={[0,0,25]}>
                <Jupiter/>
            </group>
            <group position={[5,0,0]}>
                <Moon></Moon>
            </group>
            <group position={[0,0,-7.5]}>
                <Mercury></Mercury>
            </group>
            <color attach={'background'} args={['black']}/>
            <Stars saturation={1} count={600} speed={0.5}/>
            <OrbitControls autoRotate autoRotateSpeed={0} enablePan={true} enableZoom={true} minPolarAngle={1} maxPolarAngle={Math.PI*2} />
        </Canvas>
        </div>

    )
}


