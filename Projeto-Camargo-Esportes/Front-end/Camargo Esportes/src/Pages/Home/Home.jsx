import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [data, setData] = useState([]);
  const url = "http://localhost/CE-Camargo-Esportes/Back-end/get_tasks.php";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        const formattedData = data.map((item) => {
          if (typeof item.imagens === "string") {
            item.imagens = JSON.parse(item.imagens);
          }
          return item;
        });
        setData(formattedData);
        setLoading(false);
      });
  }, []);

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

  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <>
        <Header />
        <div className="flex flex-col w-full left-10 items-center justify-center mt-10 mb-10 min-h-[80vh]">
          <div
            className="w-24 h-24 border-4 border-[#06aa48] border-solid rounded-full animate-spin border-t-transparent"
            role="status"
          ></div>
        </div>
        <Footer />
      </>
    );
  }
  return (
    <>
      <Header cadastro={isLogged} />

      <div className="flex flex-col w-full left-10 items-center mt-10 mb-10 min-h-screen">
        <div className="flex flex-col w-1/2 left-10 items-start ">
          {data.map((item, index) => (
            <Link
              to={`/news/${item.id}`}
              className="w-[100%] flex items-center justify-between gap-6 border-b-2 py-8"
              key={index}
            >
              <div className="">
                <img
                  className="w-[300px] object-cover rounded-sm"
                  src={item.imagens.imagem_principal}
                  alt={item.titulo}
                />
              </div>

              <div className="w-1/2 flex flex-col gap-2">
                <h1 className="font-bold text-2xl text-[#06aa48] hover:brightness-125 transition-all">
                  {item.titulo}
                </h1>
                <p className="font-normal text-md truncate">{item.conteudo}</p>
                <span className="font-light text-sm text-gray-600">
                  {item.data_publicacao} | {item.categoria}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
