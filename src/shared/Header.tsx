import { socialmedias } from "@/data";
import icon from '@/app/icon.png'
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
                   <div className="header__icons">
                        {socialmedias.map(sm => (
                            <div className="icon__box w-10 h-10 bg-neutral-100 flex justify-center items-center rounded-xl">
                                <img src={(sm.iconPath? sm.iconPath : (sm.icon? sm.icon.src : ""))} alt="" />

                            </div>

                        ))}

                    </div>

                </div>
            </div>

        </div>
    )
}