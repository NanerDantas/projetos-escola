function Footer() {
    return ( 
        <footer className="bg-[#06aa48] flex flex-col items-start justify-center gap-8 w-screen py-4  bottom-0 left-0 px-24">
            <div className="flex gap-5 items-center">
                <h1 className="font-bold text-3xl text-white">CE</h1>

                <div>
                    <p className="text-white text-sm">Agenda | tabelas</p>
                </div>
            </div>
            
            <div className="flex justify-between w-[100%] text-white">
                <span className="text-xs">© Copyright 2024 Camargo Esportes.</span>
                <span className="text-xs">princípios editoriais | política de privacidade | minha conta | anuncie conosco</span>
            </div>
        </footer>
     );
}

export default Footer;