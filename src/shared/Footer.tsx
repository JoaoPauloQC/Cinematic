"use client"
import {Box} from "@/Components/Box";
import Link from "next/link";
import { useState } from "react";

export default function Footer ()  {
    const [msg,setMsg]= useState("")
    
    return(
        <div className="footer bg-neutral-900">
            <div className="wrapper">
                <div className="footer__container flex justify-between py-10 max-md:flex-col max-md:justify-center max-md:text-center max-md:gap-10">
                    <div className="footer__left grid gap-5 Poppins text-xl items-center">
                        <p> João Paulo Queiroz Costa </p>
                        <p> Repositório GitHub </p>
                        <p> 11 95080-6063</p>
                    </div>
                    <div className="footer__right">
                        <Box classname={"border-transparent py-2 px-2  bg-neutral-900 max-md:flex-col w-full"}>
                            <form action="" onSubmit={(e)=> e.preventDefault()} className="w-96 max-md:w-full grid justify-center p-5 gap-5 max-md:p-3">
                                
                                <textarea  className="border-1 border-amber-200 w-full rounded-xl h-40 Poppins py-4 px-5 outline-none bg-neutral-900 text-amber-200 flex text-start"onChange={(e)=> setMsg(e.target.value) } placeholder="Sua mensagem"/>
                                <a href={`https://wa.me/5511950806063?text=${msg}`} target="blank" className="p-2 max-w-max flex self-center justify-self-center border-amber-200 border-1 rounded-xl cursor-pointer">
                                Enviar
                                </a>
                            </form>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}