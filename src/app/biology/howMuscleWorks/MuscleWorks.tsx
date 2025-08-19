"use client"
import { Canvas } from "@react-three/fiber";
import Biceps from "./canvas/Biceps";
import { OrbitControls, Stars } from "@react-three/drei"
import { useState } from "react";
import { Box, PersonalData, TextBox } from "@/Components/Box";
import armAnatomyImg from '@/assets/biology/armAnatomy.png'
import Triceps from "./canvas/Triceps";

const BicepsData: PersonalData = {
    title: "Contração muscular",
    texts: ["O corpo humano está repleto de músculos que possuem fibras.","Esses possuem um ponto de insercão e de origem, em que para estimular o mesmo geralmente deve se tentar encontrar o ponto de origem com o de inserção"],
    img: armAnatomyImg.src
}

export default function Muscles() {
    const [flexing,setFlexing] = useState(false)
    return(    
    <div className="Biceps py-50">
        <div className="wrapper">
            <div className="pb-30">
            <TextBox title={BicepsData.title} texts={BicepsData.texts} img={BicepsData.img}></TextBox>
            </div>
            <div className="h-96 max-md:px-10">
            <Canvas  camera={{position: [0,0,17.5],fov: 30}} className="rounded-xl h-96">
                <ambientLight intensity={Math.PI / 2} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
                <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
            
                <Biceps flex={flexing}></Biceps>
                <Triceps flex={flexing}></Triceps>
                <color attach={'background'} args={['black']}/>
                <OrbitControls autoRotate autoRotateSpeed={0} enablePan={true} enableZoom={true} minPolarAngle={0} maxPolarAngle={Math.PI*2} />          
            </Canvas>
            </div>
            <div className="pt-10 pb-20 flex justify-center">
            <button onClick={()=> setFlexing(!flexing)} className="px-4 py-2 Graph__Ball__Button cursor-pointer rounded-xl">Contrair</button>
            </div>
            <Box classname="">
                <div className="gap-5 grid p-3">
                <h1 className="text-2xl">
                    Explicação
                </h1>
                <p>
                    A primeira esfera representa a articulação do ombro, a segunda a articulação do antebraço. O primeiro paralelepípedo mostra do ombro ao antebraço e contém o biceps, ja o segundo representa o antebraço.
                    Quando contraímos o braço (flexionamos nosso antebraço em direção ao ombro) aproximamos a inserção do biceps (perto do antebraço) a origem(perto do ombro) e o bíceps é "ativado" ficando vermelho e sendo estimulado. O mesmo acontece com o triceps
                    mas sendo o oposto, sua contração é feita com o braço "esticado". 
                </p>
                </div>
            </Box>
        </div>
    </div>
    )
}