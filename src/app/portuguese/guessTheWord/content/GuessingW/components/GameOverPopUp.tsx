import { useEffect } from "react"

type Props = {
    isPopUpVisible : boolean,
    setIsPopUpVisible: (bool: boolean) => void
}

export default function GameOverPopUp ({isPopUpVisible,setIsPopUpVisible}: Props) {

    useEffect(()=> console.log(isPopUpVisible),[isPopUpVisible])

    return (
        <div className={"GuessingW__PopUp w-50 h-50 bg-neutral-900 text-2xl text-center flex items-center justify-center rounded-2xl " + (isPopUpVisible? "block animation__top-to-mid" : "hidden") }>

            <h1>Você Perdeu!</h1>

        </div>


    )

}