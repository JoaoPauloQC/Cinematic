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

export const allsections: Sections[] = []
allsections.push(MRU)
allsections.push(MUV)
allsections.push(GalileuVSAristoteles)
allsections.push(Geocentrism)
allsections.push(Heliocentrism)

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