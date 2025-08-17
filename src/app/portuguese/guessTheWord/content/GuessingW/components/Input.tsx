import { ChangeEvent, useEffect, useState } from "react";

type Props = {
    myword_splited: string[],
    word : string,
    line: number,
    indexEnable: number,
    resp: string[],
    setResp : (a: string[]) => void,
    i : number;
    gameWon: number,
    setGameWon: (n:number) => void,
}

export default function Input ({gameWon,setGameWon,myword_splited, word,line, indexEnable,resp, setResp, i} : Props) {
    
    const [isLineFinished, setIsLineFinished] = useState(false)
    const [isThere, setIsThere] = useState("")
    
    const HasOrNot = (e: ChangeEvent<HTMLInputElement>) => {
        const response = e.target.value
        
        if (indexEnable < line){
            if (myword_splited.includes(response)){
                return setIsThere("bg-green")
            }
            return setIsThere("bg-red")
        }
        console.log("for some reason i am here")
    }
    const UpdatingColor = (i : number) =>{
        console.log("Array number = " + i)
        if (indexEnable > gameWon){
            return setIsThere(" bg-neutral-500")
        }
        if (line === indexEnable){
            return setIsThere(" bg-neutral-100")
        }
        else if (line < indexEnable){
            return setIsThere(" bg-neutral-500")
        }
        else if (indexEnable < line){
            if (myword_splited.includes(resp[i])){
                console.log("Resp[2] = " + resp[2],"MyWord = "+ myword_splited)
                console.log(resp.join(""),myword_splited.join(""),resp.join("") == myword_splited.join(""))
                    if (resp.join("") === myword_splited.join("")){
                        console.log("resp === myword_splited")
                        setGameWon(indexEnable)
                        
                    }
                    if (myword_splited[i] == resp[i]){
                        return setIsThere(" bg-green-300")
                    }
                    return setIsThere(" bg-yellow-300")
                }
            
                return setIsThere(" bg-red-300")    
            }
            
        }   
    

    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let inputValue = ""
        if (e.target.value.length == 0){
            inputValue = ""
            console.log("here")
        }
        else{
            inputValue = e.target.value[(e.target.value.length != undefined)? e.target.value.length-1 : 0 ]
            
        }
        console.log("input value: " ,inputValue)
        
        const newword = resp.map((c,index) => index == i? inputValue : c)
        console.log("Newword : ",newword) 
        setResp(newword)
        HasOrNot(e)
    }

    useEffect(() => {UpdatingColor(i)},[line,gameWon])
    
    return(
        <input type="text" disabled={indexEnable != line} value={resp[i] ? resp[i] : ""} onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(e)} className={"Montserrat w-20 h-20 text-center text-3xl   text-neutral-950 border-neutral-900 outline-none border-4 rounded-2xl caret-transparent max-sm:w-15 max-sm:h-15 " + (indexEnable === line? "" : "disabled cursor-not-allowed ") + (isThere)} />
    )
}