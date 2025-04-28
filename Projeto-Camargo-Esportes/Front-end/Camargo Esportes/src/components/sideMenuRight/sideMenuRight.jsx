import { useEffect, useState } from "react";
import { FaArrowRight, FaUserAlt, FaUserShield } from "react-icons/fa";
import { FaArrowLeft, FaUserAstronaut } from "react-icons/fa6";
import { Link } from "react-router-dom";
import checkLogged from "../../functions/IsLogged"
function SideMenu({ hidden, func }) {
  const logout = async () => {
    try {
      const response = await fetch(
        "http://localhost/CE-Camargo-Esportes/Back-end/logout.php",
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Erro ao encerrar a sessão.");
      }

      const data = await response.json();

      if (data.success) {
        console.log(data.message);
        window.location.href = "/login";
      } else {
        console.error("Falha ao encerrar a sessão:", data.message);
      }
    } catch (error) {
      console.error("Erro ao tentar realizar logout:", error.message);
    }
  };

  const handleLogout = async () => {
    await logout();
  };




  return (
    <div
      className={`z-10 h-screen  fixed ${hidden} transition-[1s]  top-0 bg-slate-100  flex flex-col justify-around items-center px-5 min-w-[20%]`}
    >
      <div className="flex relative justify-between w-[90%]">
        <div></div>
        <div></div>
        <h1 className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]">
          CE
        </h1>
        <button onClick={() => func()}>
          <FaArrowRight />
        </button>
      </div>

      <div>
        <h2>
          <Link to={"/publicacaoNoticia"}>
            <h1 className="font-bold text-2xl">teste noticia</h1>
          </Link>
        </h2>
        <h2>
          <Link to={"/mynews"}>
            <h1 className="font-bold text-2xl">Minhas Notícias</h1>
          </Link>
        </h2>
      </div>

      <div>
        <div>
          <FaUserShield />
          <button onClick={() => checkLogged()}>teste</button>
        </div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default SideMenu;
