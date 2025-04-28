import { useEffect, useState } from "react";
import SecHeader from "../../components/SecHeader/SecHeader";
import { Link } from "react-router-dom";
import { FaCarCrash, FaEdit, FaTrash } from "react-icons/fa";
import bg_404 from "../../assets/bg-nologin.svg";
import Footer from "../../components/Footer/Footer";
import NotFound from "../../components/boxPageNotFound/NotFound";
function MyNews() {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState([]);
  const [idUser, setIdUser] = useState();
  const [noticia, setNoticia] = useState([]);
  const [message, setMessage] = useState("");
  const [sucess, setSucess] = useState();

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
        setIdUser(data.user.id);
      } else {
        setIsLogged(false);
      }
    };

    checkSession();
  }, []);

  useEffect(() => {
    const handleSubmit = async () => {
      if (idUser) {
        try {
          const response = await fetch(
            "http://localhost/CE-Camargo-Esportes/Back-end/get_news_user.php",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                idUser,
              }),
            }
          );
          const data = await response.json();
          console.log(data);
          setLoading(false);
          setNoticia(data);
        } catch (error) {
          setLoading(false);
          console.error("Erro ao enviar dados:", error);
        }
      }
    };

    handleSubmit();
  }, [idUser]);

  const handleDelete = async (idNews) => {
    if (idNews) {
      if (confirm("Tem certeza de que deseja excluir esta notícia?")) {
        try {
          const response = await fetch(
            "http://localhost/CE-Camargo-Esportes/Back-end/delete_news.php",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                idNews,
              }),
            }
          );

          const data = await response.json();

          if (data.status === "success") {
            setSucess(true);
            setMessage(data.message);
            setTimeout(() => {
              window.location.href = "/mynews";
            }, 2000);
          } else {
            setSucess(false);
            setMessage(data.message);
          }
        } catch (error) {
          setSucess(false);
          setMessage(data.message);
        }
      }
    }
  };

  const [loading, setLoading] = useState(true);

  return (
    <>
      <SecHeader Titulo={"Minhas notícias"} />
      <div className="w-screen min-h-screen flex flex-col gap-16 justify-center items-center">
        {isLogged ? (
          <>
            <div className="p-10 flex flex-col gap-10 mt-10 items-center justify-center  min-h-screen">
              {message ? (
                <div className="w-full mb-4">
                  <div
                    className={`w-full flex justify-center p-2 items-center rounded ${
                      sucess ? "bg-green-200" : "bg-red-200"
                    }`}
                  >
                    <h2
                      className={`${
                        sucess ? "text-green-700" : "text-red-700"
                      }`}
                    >
                      {message}
                    </h2>
                  </div>
                </div>
              ) : null}

              {loading ? (
                <div className="w-screen min-h-screen flex flex-col gap-16 justify-center items-center">
                  <div
                    className="w-24 h-24 border-4 border-[#06aa48] border-solid rounded-full animate-spin border-t-transparent"
                    role="status"
                  ></div>
                </div>
              ) : noticia.length > 0 ? (
                <>
                  {noticia.map((item) => (
                    <div
                      key={item.id}
                      className="bg-gray-50 border border-gray-200 shadow-2xl rounded-lg p-6 py-8 flex gap-12 items-center justify-between"
                    >
                      <div className="flex items-center gap-10">
                        <div className="h-28 w-60 flex items-center">
                          <img
                            src="https://imgs.search.brave.com/cWe3Gv7kKUE6-9YbZKTzpt2NthlSQkj7NZaOFqL-ZXs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMi1n/ZS5nbGJpbWcuY29t/L1dfSFY2Z0M2Ym95/SlQwMmdwVkdXaWQ0/V09vQT0vMHgwOjEy/ODB4NzIwLzU0MHgz/MDQvc21hcnQvZmls/dGVyczptYXhfYWdl/KDM2MDApL2h0dHBz/Oi8vaS5zMy5nbGJp/bWcuY29tL3YxL0FV/VEhfYmM4MjI4YjY2/NzNmNDg4YWEyNTNi/YmNiMDNjODBlYzUv/aW50ZXJuYWxfcGhv/dG9zL2JzLzIwMjMv/MC9WL0R5bkJpWlRB/YUlSWGxBZmFKUUFn/L2UyNDAwM2Y4LTRj/YzAtNDcyMy1hYzQ2/LTA1YWExY2Q2MTQ0/Mi5qZmlm"
                            alt=""
                            className="object-contain rounded"
                          />
                        </div>
                        <div className="flex flex-col gap-2">
                          <h2 className="text-xl font-semibold text-gray-800 truncate w-44">
                            {item.titulo}
                          </h2>
                          <p className="text-gray-600 text-sm">
                            publicado em: {item.data_publicacao}
                          </p>
                          <div className="w-60 truncate">{item.conteudo}</div>
                        </div>
                      </div>
                      <div className="space-x-2 flex items-center">
                        <Link
                          className="flex items-center gap-2 transition-all bg-[#06aa48] hover:bg-[#058a3a]  text-white px-4 py-2 rounded-md text-sm"
                          to={`/editnews/${item.id}`}
                        >
                          <h1 className="font-bold">Editar</h1>
                          <FaEdit />
                        </Link>

                        <button
                          className="flex items-center gap-2 transition-all  bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm"
                          onClick={() => {
                            handleDelete(item.id);
                          }}
                        >
                          <h1 className="font-bold">Deletar</h1>
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                  ))}

                  <div className="flex flex-col items-center gap-3">
                    <Link
                      to="/publicacaoNoticia"
                      className="mt-10 px-4 py-2 bg-[#06aa48] text-white rounded hover:bg-[#058a3a] hover:shadow-2xl transition-all font-medium"
                    >
                      Publique mais Notícias!
                    </Link>
                  </div>
                </>
              ) : (
                <div className="w-screen min-h-[90vh] flex flex-col items-center justify-center mt-4 mb-8">
                  <div className="flex flex-col items-center justify-center gap-4">
                    <img src={bg_404} alt="imagem 404" className="h-[150px]" />
                    <h1 className="text-lg font-medium text-gray-600">
                      Parece que você não publicou nenhuma notícia
                    </h1>
                    <Link
                      to={"/publicacaoNoticia"}
                      className="py-2 bg-[#06aa48] text-white font-medium rounded px-6 hover:brightness-110 transition-all"
                    >
                      Publique
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </>
        ) : (
          <NotFound />
        )}
      </div>
      <Footer />
    </>
  );
}

export default MyNews;
