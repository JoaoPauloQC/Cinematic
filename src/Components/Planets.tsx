import { Canvas, useLoader } from "@react-three/fiber"
import { Sphere } from '@react-three/drei'
import earthTextureImg from '../../public/assets/mundos/mapamundi.png'
import { TextureLoader } from "three"
import { StaticImageData } from "next/image"
import jupiterTextureImg from '../../public/assets/mundos/jupiterTextureImg.png'
import moonTextureImg from '../../public/assets/mundos/moonTextureImg.png'
import mercuryTextureImg from '../../public/assets/mundos/mercuryTextureImg.png'

type Props = {
    texture: StaticImageData,
    position?: [x: number, y: number, z: number],
    args: [radius?: number, widthSegments?:number,heightSegments?:number]
}

export const Planet = ({args,position,texture}: Props) =>{

    const Texture = useLoader(TextureLoader,texture.src)

    return (
        <Sphere args={args} position={position}>

            <meshStandardMaterial map={Texture}></meshStandardMaterial>
        </Sphere>
    )

}

type PlanetsProps = {
    position? : [x: number, y: number, z: number],
}

export const Earth = ({position}: PlanetsProps) =>{

    return (
        <Planet args={[0.75,64,32]} position={position} texture={earthTextureImg}>
        </Planet>
    )

}

export const Jupiter = ({position}: PlanetsProps) =>{

    return (
        <Planet args={[0.75,64,32]} position={position} texture={jupiterTextureImg}>
        </Planet>
    )

}

export const Moon = ({position}: PlanetsProps) =>{

    return (
        <Planet args={[0.75,64,32]} position={position} texture={moonTextureImg}>
        </Planet>
    )

}
export const Mercury = ({position}: PlanetsProps) =>{

    return (
        <Planet args={[0.75,64,32]} position={position} texture={mercuryTextureImg}>
        </Planet>
    )

}