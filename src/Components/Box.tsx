import Link from "next/link"

type Props = {
    title: string,
    texts: string[],
    img: string
}

type PersonalData = {
    title: string,
    texts: string[],
    img: string
}
export type {PersonalData}

export default function Box ({img,texts,title}: Props) {

      return (
        <div className=" border-2 rounded-xl px-3 py-2 Poppins flex gap-10 border-neutral-600 hover:bg-neutral-700 bg-neutral-900 ProjectBox max-md:flex-col">
            <div className="text py-10 px-3 md:max-w-8/12">
            <h1 className="text-4xl"> {title} </h1>
            {texts.map(t=> (

                <p className="text-xl pt-10">{t}</p>
                )
                )
            }
            </div>
            <div className="img w-96 h-96 flex justify-center items-center self-center object-cover rounded-xl max-md:w-full">
                <img src={img} alt="" className="w-full h-full object-cover rounded-xl"/>
            </div>
        </div>
    )


}