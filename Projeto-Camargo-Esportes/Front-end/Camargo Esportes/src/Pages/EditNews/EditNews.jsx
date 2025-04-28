import { useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import SecHeader from "../../components/SecHeader/SecHeader";
import { useEffect, useState } from "react";
import Input from "../../components/Input/Input";

function EditNews() {
  const [titulo, setTitulo] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [autor, setAutor] = useState("");
  const [imagens, setImagens] = useState("");
  const [categoria, setCategoria] = useState("");
  const [imagem1, setImagem1] = useState("");
  const [imagem2, setImagem2] = useState("");
  const [materiaCompleta, setMateriaCompleta] = useState("");
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const [errorTitulo, setErrorTitulo] = useState("");
  const [errorConteudo, setErrorConteudo] = useState("");
  const [errorCategoria, setErrorCategoria] = useState("");
  const [errorImagem1, setErrorImagem1] = useState("");
  const [errorImagem2, setErrorImagem2] = useState("");
  const [errorMateriaCompleta, setErrorMateriaCompleta] = useState("");
  const [message, setMessage] = useState("");
  const [sucess, setSucess] = useState();

  useEffect(() => {
    setImagens(
      `{"imagem_principal": "${imagem1}", "imagem_adicional_1": "${imagem2}"}`
    );
  }, [imagem1, imagem2]);

  useEffect(() => {
    const url = `http://localhost/CE-Camargo-Esportes/Back-end/get_news.php?id=${id}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Erro ao buscar dados");
        }
        return res.json();
      })
      .then((data) => {
        if (data.error) {
          setError(data.error);
        } else {
          const imagesNew = JSON.parse(data.imagens);
          setImagem1(imagesNew.imagem_principal);
          setImagem2(imagesNew.imagem_adicional_1);
          setTitulo(data.titulo);
          setConteudo(data.conteudo);
          setCategoria(data.categoria);
          setMateriaCompleta(data.materiaCompleta);
        }
      })
      .catch((err) => {})
      .finally(() => {});
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo) {
      setErrorTitulo("Por favor, insira o titulo.");
      return;
    } else {
      setErrorTitulo("");
    }

    if (!conteudo) {
      setErrorConteudo("Por favor, insira o conteudo.");
      return;
    } else {
      setErrorConteudo("");
    }

    if (!categoria) {
      setErrorCategoria("Por favor, insira a categoria.");
      return;
    } else {
      setErrorCategoria("");
    }

    if (!imagem1) {
      setErrorImagem1("Por favor, insira a 1° imagem.");
      return;
    } else {
      setErrorImagem1("");
    }

    if (!imagem2) {
      setErrorImagem2("Por favor, insira a 2° imagem.");
      return;
    } else {
      setErrorImagem2("");
    }

    if (!materiaCompleta) {
      setErrorMateriaCompleta("Por favor, insira a matéria.");
      return;
    } else {
      setErrorMateriaCompleta("");
    }
    try {
      const response = await fetch(
        "http://localhost/CE-Camargo-Esportes/Back-end/update_news.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            titulo,
            conteudo,
            autor,
            categoria,
            imagens,
            id,
            materiaCompleta,
          }),
        }
      );

      setTitulo("");
      setConteudo("");
      setAutor("");
      setCategoria("");
      setMateriaCompleta("");
      setImagem1("");
      setImagem2("");

      const data = await response.json();
      console.log("Resposta do servidor:", data);

      if (data.status === "success") {
        setSucess(true);
        setMessage(`Notícia atualizada com sucesso!`);
        setTimeout(() => {
          setMessage()
        }, 2000);
      } else {
        setSucess(false);
        setMessage(`Erro ao atualizar a notícia`);
      }
    } catch (error) {
      setSucess(false);
      setMessage(`Erro ao enviar dados`);
    }
  };

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
        setAutor(data.user.nome);
      } else {
        setIsLogged(false);
      }
    };

    checkSession();
  }, []);

  return (
    <>
      <SecHeader />

      <div className="w-screen min-h-screen flex flex-col items-center justify-center mt-10 mb-20">
        <form
          onSubmit={handleSubmit}
          className={`gap-3 h-1/2 flex flex-col items-center box-form`}
        >
          <h1 className="font-bold text-3xl text-gray-600 mb-8">
            Olá, {user.nome}!
          </h1>

          <div className="flex flex-col gap-1 w-[100%]">
            <Input
              label={"Título"}
              type={"text"}
              id={"titulo"}
              placeholder={"Informe o título da notícia"}
              func={setTitulo}
              value={titulo}
            />
            {errorTitulo && (
              <p className="text-red-500 text-sm mt-1">{errorTitulo}</p>
            )}
          </div>

          <div className="flex flex-col gap-1 w-[100%]">
            <Input
              label={"Conteúdo"}
              type={"text"}
              id={"conteudo"}
              placeholder={"Informe o conteúdo da notícia"}
              func={setConteudo}
              value={conteudo}
            />

            {errorConteudo && (
              <p className="text-red-500 text-sm mt-1">{errorConteudo}</p>
            )}
          </div>

          <div className="flex flex-col gap-1 w-[100%]">
            <label
              htmlFor={"categoria"}
              className=" text-gray-600 font-semibold"
            >
              Categoria
            </label>

            <select
              className="text-[#888] py-3 px-1 border-[2px] border-[#80808060] rounded-md"
              type="text"
              value={categoria}
              onChange={(e) => setCategoria(e.target.value)}
              id="categoria"
              placeholder="Informe a categoria da notícia"
            >
              <option value="">Categorias</option>
              <option value="Futebol">Futebol</option>
              <option value="Basquete">Basquete</option>
              <option value="Volei">Volei</option>
              <option value="Boxe">Boxe</option>
              <option value="Tênis">Tênis</option>
              <option value="Golfe">Golfe</option>
              <option value="Fórmula 1">Fórmula 1</option>
            </select>

            {errorCategoria && (
              <p className="text-red-500 text-sm mt-1">{errorCategoria}</p>
            )}
          </div>

          <div className="flex flex-col gap-1 w-[100%]">
            <Input
              label={"Imagens 1"}
              type={"text"}
              id={"imagem1"}
              placeholder={"Informe a URL da imagem 1"}
              func={setImagem1}
              value={imagem1}
            />
            {errorImagem1 && (
              <p className="text-red-500 text-sm mt-1">{errorImagem1}</p>
            )}
          </div>

          <div className="flex flex-col gap-1 w-[100%]">
            <Input
              label={"Imagens 2"}
              type={"text"}
              id={"imagem2"}
              placeholder={"Informe a URL da imagem 2"}
              func={setImagem2}
              value={imagem2}
            />

            {errorImagem2 && (
              <p className="text-red-500 text-sm mt-1">{errorImagem2}</p>
            )}
          </div>

          <div className="flex flex-col gap-1 w-[100%]">
            <label
              htmlFor="materiaCompleta"
              className="text-gray-600 font-semibold"
            >
              Matéria Completa:
            </label>
            <textarea
              className="border-2 border-gray-300 rounded focus:border-[#06aa48]"
              id="materiaCompleta"
              rows="4"
              cols="50"
              value={materiaCompleta}
              onChange={(e) => setMateriaCompleta(e.target.value)}
            ></textarea>

            {errorMateriaCompleta && (
              <p className="text-red-500 text-sm mt-1">
                {errorMateriaCompleta}
              </p>
            )}
          </div>

          {message ? (
            <div className="w-full mb-4">
              <div
                className={`w-full flex justify-center p-2 items-center rounded ${
                  sucess ? "bg-green-200" : "bg-red-200"
                }`}
              >
                <h2 className={`${sucess ? "text-green-700" : "text-red-700"}`}>
                  {message}
                </h2>
              </div>
            </div>
          ) : null}

          <button
            type="submit"
            className="bg-[#06aa48] p-1 py-2 w-[100%] rounded-md text-white hover:shadow-xl transition-all hover:brightness-110"
          >
            Publicar Notícia
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default EditNews;
