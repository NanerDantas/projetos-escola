import { useState, useEffect } from "react";
import ErroPng from "../../assets/Erro.png";
import SucessPng from "../../assets/Sucess.png";
import { FaX } from "react-icons/fa6";
function CardStatus({ show, status }) {
  const [visibily, setVisibily] = useState("");
  const [image, setImage] = useState();
  const [text, setText] = useState("");
  const [subtext, setSubText] = useState("");
  useEffect(() => {
    if (show === "flex") {
        setVisibily("flex items-center justify-center");
    } else{
      setVisibily("hidden");
    }
  }, [show]);

  useEffect(() => {
    if (status === "sucess") {
      setText("Cadastrado com sucesso!");
      setSubText("")
      setImage(SucessPng);
    } else {
      setText("Falha ao cadastrar!");
      setSubText("Revise os dados inseridos.");
      setImage(ErroPng);
    }
  }, [status]);

  return (
    <div className={`${visibily} backdrop:blur-xl fixed w-screen h-screen left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]`}>

<div className="absolute inset-0 bg-black/15 backdrop-blur-sm"></div>
        <div
      className={`gap-4 shadow-2xl w-80 h-80  bg-[#fff] z-20 p-5 rounded-lg  `}
    >
        <div className="w-[100%] flex items-center justify-end ">
            <button onClick={() => setVisibily("hidden")}><FaX /></button>
        </div>
      <div className="flex flex-col items-center justify-center gap-3">
        <img className="h-40" src={image} alt={`img ${status}`} />
        <h1 className="text-2xl font-medium">{text}</h1>
        <h3>{subtext}</h3>
      </div>

      <div></div>
    </div>
    </div>
  );
}

export default CardStatus;
