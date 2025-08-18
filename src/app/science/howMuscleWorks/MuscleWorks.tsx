"use client"
import { Canvas } from "@react-three/fiber";
import Muscle from "./canvas/Muscle";
import { OrbitControls, Stars } from "@react-three/drei"
import { useState } from "react";
import { PersonalData, TextBox } from "@/Components/Box";
import armAnatomyImg from '@/assets/science/armAnatomy.png'

const MuscleData: PersonalData = {
    title: "Contração muscular",
    texts: ["O corpo humano está repleto de músculos que possuem fibras.","Esses possuem um ponto de insercão e de origem, em que para estimular o mesmo geralmente deve se tentar encontrar o ponto de origem com o de inserção"],
    img: armAnatomyImg.src
}

export default function () {
    const [flexing,setFlexing] = useState(false)
    return(    
    <div className="Muscle py-50">
        <div className="wrapper">
            <div className="pb-30">
            <TextBox title={MuscleData.title} texts={MuscleData.texts} img={MuscleData.img}></TextBox>
            </div>
            <div className="h-96 max-md:px-10">
            <Canvas  camera={{position: [0,0,17.5],fov: 30}} className="rounded-xl h-96">
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            
                <Muscle flex={flexing}></Muscle>
                <color attach={'background'} args={['black']}/>
                <OrbitControls autoRotate autoRotateSpeed={0} enablePan={true} enableZoom={true} minPolarAngle={1} maxPolarAngle={Math.PI*2} />          
            </Canvas>
            </div>
            <div className="pt-10 flex justify-center">
            <button onClick={()=> setFlexing(!flexing)} className="px-4 py-2 Graph__Ball__Button cursor-pointer rounded-xl">Contrair</button>
            </div>
        </div>
    </div>
    )
}