import { socialmedias } from "@/data";
import icon from '@/app/icon.png'
import Link from "next/link";
export default function Header () {
    return (
        <div className="bg-neutral-800 ">
            <div className="wrapper">
                <div className="header__container flex justify-between p-5">
                    <div className="header__icon flex max-w-10">
                        <img src={icon.src} alt="" />
                    </div>
                    <div className="header__title Poppins flex items-center text-2xl">
                        <h1>Central Física</h1>
                    </div>
                   <div className="header__icons flex gap-2">
                        {socialmedias.map(sm => (
                            <Link href={sm.link?? ""} className="icon__box w-10 h-10 bg-neutral-100 flex justify-center items-center rounded-xl p-1">
                                <img src={(sm.iconPath? sm.iconPath : (sm.icon? sm.icon.src : ""))} alt="" className="w-full"/>

                            </Link>

                        ))}

                    </div>

                </div>
            </div>

        </div>
    )
}