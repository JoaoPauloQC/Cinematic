import { Canvas, useLoader } from "@react-three/fiber"
import { Sphere } from '@react-three/drei'
import earthTextureImg from '../../public/assets/mundos/mapamundi.png'
import { TextureLoader } from "three"
import { StaticImageData } from "next/image"
import jupiterTextureImg from '../../public/assets/mundos/jupiterTextureImg.png'
import moonTextureImg from '../../public/assets/mundos/moonTextureImg.png'
import mercuryTextureImg from '../../public/assets/mundos/mercuryTextureImg.png'
import venusTextureImg from '../../public/assets/mundos/venusTextureImg.png'
import sunTextureImg from '../../public/assets/mundos/sunTextureImg.png'
import marsTextureImg from '../../public/assets/mundos/marsTextureImg.png'
import saturnTextureImg from '../../public/assets/mundos/saturnTextureImg.png'

import * as THREE from 'three';
import { Line } from '@react-three/drei';

type Props = {
    texture: StaticImageData,
    position?: [x: number, y: number, z: number],
    args: [radius?: number, widthSegments?:number,heightSegments?:number]
}


export const Orbit = ({ radius = 1, color = 'white', segments = 100 }) => {
  const points = [];
  for (let i = 0; i <= segments; i++) {
    const angle = (i / segments) * Math.PI * 2;
    points.push(new THREE.Vector3(Math.cos(angle) * radius, 0, Math.sin(angle) * radius));
  }

  return (
    <Line
      points={points}
      color={color}
      dashed={false}
    />
  );
};


export const Planet = ({args,position,texture}: Props) =>{

    const Texture = useLoader(TextureLoader,texture.src)

    return (
        <Sphere args={args} position={position}>

            <meshStandardMaterial map={Texture}></meshStandardMaterial>
        </Sphere>
    )

}

type PlanetsProps = {
    args?: [radius: number, width: number, h: number],
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

export const Moon = ({args,position}: PlanetsProps) =>{

    return (
        <Planet args={args? args : [0.75,64,32]} position={position} texture={moonTextureImg}>
        </Planet>
    )

}
export const Mercury = ({position}: PlanetsProps) =>{

    return (
        <Planet args={[0.75,64,32]} position={position} texture={mercuryTextureImg}>
        </Planet>
    )

}

export const Venus = ({position}: PlanetsProps) =>{

    return (
        <Planet args={[0.75,64,32]} position={position} texture={venusTextureImg}>
        </Planet>
    )

}

export const Sun = ({position}: PlanetsProps) =>{

    return (
        <Planet args={[0.75,64,32]} position={position} texture={sunTextureImg}>
        </Planet>
    )

}

export const Mars = ({position}: PlanetsProps) =>{

    return (
        <Planet args={[0.75,64,32]} position={position} texture={marsTextureImg}>
        </Planet>
    )

}

export const Saturn = ({position}: PlanetsProps) =>{

    return (
        <Planet args={[0.75,64,32]} position={position} texture={saturnTextureImg}>
        </Planet>
    )

}