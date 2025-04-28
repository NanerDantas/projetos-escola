import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function SecHeader({ Titulo, link }) {
  const [title, setTitle] = useState("");
  const [style, setStyle] = useState("");
  useEffect(() => {

    if (Titulo == null || Titulo == undefined || Titulo == "") {
      setTitle("Camargo Esporte");
      setStyle("text-2xl")
    }else {
      setTitle(Titulo)
      setStyle("text-2xl")
    }
  });

  return (
    <header className=" bg-[#06aa48] w-screen py-5 relative h-[74px] flex items-center justify-around  ">
      <Link to={"/"} className="flex items-center gap-2 cursor-pointer">
        <FaArrowLeft className="text-white text-xl font-bold" />
        <span className="text-2xl font-semibold text-white">Voltar</span>
      </Link>

      <div className="absolute flex items-center justify-center left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] ">
        <Link to={link} className="flex items-center justify-center">
          <h1 className={`font-bold ${style} text-white`}>{title}</h1>
        </Link>
      </div>
      <div></div>
    </header>
  );
}

export default SecHeader;
