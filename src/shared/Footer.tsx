import {Box} from "@/Components/Box";

export default function Footer ()  {
    return(
        <div className="footer bg-neutral-900">
            <div className="wrapper">
                <div className="footer__container flex justify-between py-10 max-md:flex-col max-md:justify-center max-md:text-center max-md:gap-10">
                    <div className="footer__left grid gap-10 Poppins text-xl items-center">
                        <p> João Paulo Queiroz Costa </p>
                        <p> Repositório GitHub </p>
                        <p> 11 95080-6063</p>
                    </div>
                    <div className="footer__right">
                        <Box classname={"border-amber-200 py-10 px-2  bg-neutral-900 max-md:flex-col"}>
                            <form action="" className="w-96 grid justify-center p-5 gap-5 max-md:p-3 max-md:w-full">
                                <input type="text" className="border-2 max-w-full border-amber-200 rounded-xl Poppins py-4 px-5 outline-none bg-neutral-900 text-amber-200" placeholder="seuemail@gmail.com" />
                                <textarea  className="border-2 border-amber-200 max-w-full rounded-xl h-40 Poppins py-4 px-5 outline-none bg-neutral-900 text-amber-200 flex text-start" placeholder="Sua mensagem"/>

                            </form>
                        </Box>
                    </div>
                </div>
            </div>
        </div>
    )
}