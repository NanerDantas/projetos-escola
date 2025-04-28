import { useState } from "react";
import { FaSearch, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import SideMenu from "../SideMenu/SideMenu";
import SideMenuRight from "../SideMenuRight/SideMenuRight";
import { FaCalculator, FaX } from "react-icons/fa6";

function Header({ categoria = "Camargo Esporte", cadastro }) {
  const [link, setLink] = useState("/");
  const [noticia, setNoticia] = useState([]);
  const [menuStyle, setMenuStyle] = useState("left-[-100%]");
  const [sideMenuRightStyle, setSideMenuRightStyle] = useState("right-[-100%]");
  const [pesquisa, setPesquisa] = useState("");
  const [showBoxFlutuante, setShowBoxFlutuante] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggleMenu = () =>
    setMenuStyle((prev) =>
      prev === "left-[-100%]" ? "left-0" : "left-[-100%]"
    );

  const toggleSideMenuRight = () =>
    setSideMenuRightStyle((prev) =>
      prev === "right-[-100%]" ? "right-0" : "right-[-100%]"
    );

  const handleSearch = async () => {
    setLoading(true);
    try {
      setShowBoxFlutuante(true);

      const response = await fetch(
        "http://localhost/CE-Camargo-Esportes/Back-end/search_news.php",

        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ pesquisa }),
        }
      );

      const data = await response.json();

      setLoading(false);
      setNoticia(data);
    } catch (error) {
      console.error("Erro ao buscar notícias:", error);
    }
  };

  return (
    <>
      <SideMenu hidden={menuStyle} func={toggleMenu} />
      <header className="bg-[#06aa48] w-screen py-5 h-[74px] relative">
        <div className="flex items-center justify-between px-20 absolute w-full">
          <button onClick={toggleMenu} className="flex items-center gap-2">
            <div className="flex flex-col gap-1">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="w-5 h-[3px] bg-white rounded-md"
                ></div>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-white">MENU</h3>
          </button>

          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <Link to={link}>
              <h1 className="font-bold text-2xl text-white">{categoria}</h1>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-[#058a3a] p-[6px] px-2 rounded gap-2">
              <button onClick={handleSearch}>
                <FaSearch className="text-white" />
              </button>
              <input
                type="text"
                className={`rounded px-4 w-36 text-gray-700 outline-none ${
                  pesquisa ? "text-black bg-white" : "placeholder:text-white"
                }`}
                placeholder="Buscar"
                value={pesquisa}
                onChange={(e) => setPesquisa(e.target.value)}
              />
            </div>

            <div className="flex items-center gap-1">
              {!cadastro ? (
                <>
                  <Link to="/login" className="text-white font-semibold">
                    Entre
                  </Link>
                  <span className="text-white">|</span>
                  <Link to="/cadastro" className="text-white font-semibold">
                    Fazer cadastro
                  </Link>
                </>
              ) : (
                <button onClick={toggleMenu}>
                  <FaUser className="text-white text-xl" />
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {showBoxFlutuante && (
        <div className="w-full flex flex-col justify-center mt-2 mb-4 items-center relative">
          <div className="bg-white h-60 border-2 w-[70vw] flex flex-col  shadow-2xl rounded overflow-y-auto z-20 relative">
            <div className="flex justify-between">
              <div></div>
              <h1 className="text-center mt-2 mb-2 font-medium text-lg ">
                Resultado da Pesquisa
              </h1>
              <button className="mr-5" onClick={() => setShowBoxFlutuante(false)}><FaX /></button>
            </div>
            {loading ? (
              <div className="w-full h-full flex justify-center items-center">
                <div
                  className="w-12 h-12 border-4 border-[#06aa48] border-solid rounded-full animate-spin border-t-transparent"
                  role="status"
                ></div>
              </div>
            ) : noticia.length > 0 ? (
              noticia.map((item) => (
                <div key={item.id} className="p-2 border-t border-b">
                  <Link to={`/news/${item.id}`} className="">
                    <h1 className="text-[#06aa48] font-medium ">
                      {item.titulo}
                    </h1>
                    <h1 className="text-gray-500 font-light w-full truncate">
                      {item.conteudo}
                    </h1>
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-500 p-2">
                Nenhuma notícia encontrada
              </p>
            )}
          </div>
        </div>
      )}

      <SideMenuRight hidden={sideMenuRightStyle} func={toggleSideMenuRight} />
    </>
  );
}

export default Header;
