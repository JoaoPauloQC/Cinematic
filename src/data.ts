import { StaticImageData } from "next/image"

type Sections = {
    name : string,
    path: string,
    description: string
    image?: string
}

const MRU : Sections = {
    name: "MRU",
    path: "/MRU",
    description: "Entenda o MRU com um simples gráfico da função horária"
}
const MUV : Sections = {
    name: "MUV",
    path: "/MUV",
    description: "Entenda o MUV com um simples gráfico da função horária"
}

const GalileuVSAristoteles : Sections = {
    name: "Galileu VS Aristóteles",
    path: "GalileuVSAristoteles",
    description: "Saiba sobre as duas famosas teorias discutidas a respeito do movimento de queda."
}

const Geocentrism : Sections = {
    name: "Geocentrismo",
    path: "/Geocentrism",
    description: "O que foi o geocentrismo?",
}

const Heliocentrism : Sections = {
    name: "Heliocentrismo",
    path: "/Heliocentrism",
    description: "O que foi o Heliocentrismo?",
}

export type ProjectCategory = {
    name: string,
    img?: ImageData | string,
    textColor: string,
    bgColor: string
}

const python: ProjectCategory = {
    name: "Python",
    textColor: "#edf222",
    bgColor: "#011752"
}

export const ProjectCategories: ProjectCategory[] = [
    python
]

export const allsections: Sections[] = []
allsections.push(MRU)
allsections.push(MUV)
allsections.push(GalileuVSAristoteles)
allsections.push(Geocentrism)
allsections.push(Heliocentrism)


const Arcade: Sections = {
    name: "Arcadismo",
    path: "/portuguese/arcadism",
    description: "O que é arcadismo?"

}
const Barroco: Sections = {
    name: "Barroco",
    path: "/portuguese/barroco",
    description: "O que é o Barroco?"

}

const guessTheWord: Sections = {
    name: "Acerte a palavra",
    path: "/portuguese/guessTheWord",
    description: "Você consegue acertar a palavra?"
}

const howMuscleWorks: Sections = {
    name: "Como o musculo funciona",
    path: "/science/howMuscleWorks",
    description: ""
}

export const scienceSections: Sections[] = [
    howMuscleWorks
]

export const portugueseSections: Sections[] = [
    Arcade,Barroco,guessTheWord
]

type socialmedia = {
    name: string,
    icon?: StaticImageData,
    iconPath?: string,
    link?: string
}

import githubIcon from '@/assets/icons/icons8-github.svg'

const github: socialmedia = {
    name: "GitHub",
    icon: githubIcon,
    link: "https://github.com/JoaoPauloQC"
}

import instaIcon from '@/assets/icons/icons8-instagram.svg'

const instagram : socialmedia = {
    name: "Instagram",
    icon: instaIcon,
    link: "https://www.instagram.com/joao.pqc"
}

import whatsappIcon from '@/assets/icons/icons8-whatsapp.svg'

const whatsapp : socialmedia ={
    name: "WhatsApp",
    icon: whatsappIcon,
    link: "https://wa.me/5511950806063"
}

export const socialmedias : socialmedia[] = []
socialmedias.push(github,instagram, whatsapp)