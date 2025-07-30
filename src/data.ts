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

export const allsections: Sections[] = []
allsections.push(MRU)
allsections.push(MUV)
allsections.push(GalileuVSAristoteles)