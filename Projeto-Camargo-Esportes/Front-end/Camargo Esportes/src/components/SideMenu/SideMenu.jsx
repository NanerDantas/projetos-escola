import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaFolderOpen, FaRegNewspaper } from "react-icons/fa";

const Sidebar = ({ hidden, func }) => {
  const [user, setUser] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  useEffect(() => {
    const checkSession = async () => {
      const response = await fetch(
        "http://localhost/CE-Camargo-Esportes/Back-end/check-session.php",
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.loggedIn) {
        setIsLogged(true);
        setUser(data.user);
      } else {
        setIsLogged(false);
      }
    };

    checkSession();
  }, []);


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
      className={`z-10 h-screen fixed ${hidden} duration-500 top-0 bg-white shadow-2xl flex flex-col justify-evenly items-center px-5 min-w-[22%]`}
    >
      <div className="flex relative justify-between w-full items-center p-4">
        <button onClick={func} className="text-primary text-lg">
          <FaArrowLeft className="hover:brightness-110" />
        </button>
        <h1 className="text-primary font-bold text-2xl w-45 text-center text-[#06aa48]">
          Camargo Esporte
        </h1>
      </div>

      <div className="w-[90%] flex flex-col items-center space-y-4">
        <Link
          to="/publicacaoNoticia"
          className="flex items-center space-x-2 p-3 hover:bg-green-100 rounded-lg w-full transition-all"
        >
          <FaRegNewspaper className="text-primary text-2xl" />
          <h1 className="font-bold text-xl text-primary">Publicar Notícia</h1>
        </Link>

        <Link
          to="/mynews"
          className="flex items-center space-x-2 p-3 hover:bg-green-100 rounded-lg w-full transition-all"
        >
          <FaFolderOpen className="text-primary text-2xl" />
          <h1 className="font-bold text-xl text-primary">Minhas Notícias</h1>
        </Link>
      </div>

      {isLogged ? (
        <div className="flex flex-col items-center space-y-4 mb-4 w-[90%]">
          <div className="flex items-center space-x-4 w-full">
            <div className="w-10 h-10 bg-[#06aa48] rounded-full flex items-center justify-center text-white font-bold">
              {user.nome.charAt(0)}
            </div>
            <span className="text-primary font-medium">{user.nome}</span>
          </div>

          <button
           onClick={handleLogout}
            className="px-4 py-2 bg-[#06aa48] text-white rounded-lg hover:bg-[#058a3a] transition-all w-full"
          >
            Sair
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center space-y-4 mb-4 w-[90%]">
          <Link to={"/Login"}
            className="px-4 py-2 bg-[#06aa48] text-white rounded-lg hover:bg-[#058a3a] transition-all w-full flex items-center justify-center"
          >
            Entrar
          </Link>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
