import { useState } from "react";
import "./Style.css";
import Input from "../../components/Input/Input";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import CardStatus from "../../components/CardStatus/CardStatus";
import SecHeader from "../../components/SecHeader/SecHeader";
import Footer from "../../components/Footer/Footer";

function SignupScreen() {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNas] = useState("");
  const [genero, setGenero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [statusShow, setStatusShow] = useState("");
  const [statusCadastro, setStatusCadastro] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [sucess, setSucess] = useState();


  const [errorNome, setErrorNome] = useState("");
  const [errorDataNascimento, setErrorDataNascimento] = useState("");
  const [errorGenero, setErrorGenero] = useState("");
  const [errorCidade, setErrorCidade] = useState("");
  const [errorEstado, setErrorEstado] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorSenha, setErrorSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    if (!nome) {
      setErrorNome("Por favor, insira o seu nome.");
      
      return;
    } else {
      setErrorNome("");
    }


    if (!email) {
      setErrorEmail("Por favor, insira o seu email.");
      
      return;
    } else {
      setErrorEmail("");
    }
    if (!senha) {
      setErrorSenha("Por favor, insira a sua senha.");
      
      return;
    } else {
      setErrorSenha("");

    }

    
    if (!genero) {
      setErrorGenero("Por favor, insira o seu gênero.");
      
      return;
    } else {
      setErrorGenero("");
    }
    if (!dataNascimento) {
      setErrorDataNascimento("Por favor, insira a sua data de nascimento.");

      return;
    } else {
      setErrorDataNascimento("");

    }
    
    if (!cidade) {
      setErrorCidade("Por favor, insira a sua cidade.");
      return;
    } else {
      setErrorCidade("");

    }

    if (!estado) {
      setErrorEstado("Por favor, insira o seu estado.");

      return;
    } else {
      setErrorEstado("");

    }






    try {

          setLoading(true);

      const response = await fetch(
        "http://localhost/CE-Camargo-Esportes/Back-end/post_data.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            nome,
            email,
            senha,
            estado,
            cidade,
            genero,
            dataNascimento,
          }),
        }
      );
      setNome("");
      setDataNas("");
      setGenero("");
      setCidade("");
      setEstado("");
      setEmail("");
      setSenha("");
      const data = await response.json();
      if (data.status == "success") {

        setStatusCadastro("sucess");
        setMessage(data.message);
        setTimeout(() => {
          window.location.href = "/login";
        }, 1500);
        setLoading(false);
        setSucess(true);
      } else {
        console.log("tá tudo errado");
        setStatusCadastro("error");
        setMessage(data.message);

        setLoading(false);
        setSucess(false);
      }
    } catch (error) {
      setLoading(false);
      setSucess(false);
      setMessage(error)
    }
  };

  return (
    <>
      <SecHeader />

      <CardStatus show={statusShow} status={statusCadastro} />
      <div className="w-screen min-h-screen flex flex-col items-center justify-center mt-10 mb-20">
        <form
          onSubmit={handleSubmit}
          className={` gap-3 h-1/2 flex flex-col items-center  box-form`}
        >
          <h1 className="font-bold text-3xl text-gray-600">
            Crie sua conta Camargo Esporte
          </h1>
          <div className="flex flex-col gap-1 w-[100%]">
            <Input
              label={"Nome"}
              type={"text"}
              id={"nome"}
              placeholder={"Informe o seu nome completo"}
              func={setNome}
              value={nome}
            />
            {errorNome && (
                  <p className="text-red-500 text-sm mt-1">{errorNome}</p>
                )}
          </div>
          <div className="flex flex-col gap-1 w-[100%]">
            <Input
              label={"Email"}
              type={"email"}
              id={"email"}
              placeholder={"Informe o seu email"}
              func={setEmail}
              value={email}
            />
            {errorEmail && (
                  <p className="text-red-500 text-sm mt-1">{errorEmail}</p>
                )}
          </div>
          <div className="flex flex-col gap-1 w-[100%]">
            <Input
              label={"Senha"}
              type={"password"}
              id={"senha"}
              placeholder={"Digite uma senha forte"}
              func={setSenha}
              value={senha}
            />
            {errorSenha && (
                  <p className="text-red-500 text-sm mt-1">{errorSenha}</p>
                )}
          </div>

          <div className="flex flex-col gap-1 w-[100%]">
            <label htmlFor="genero" className=" text-gray-600 font-semibold">
              Qual o seu gênero?
            </label>
            <input
              type={"text"}
              id={"genero"}
              placeholder={"Qual o seu gênero?"}
              value={genero}
              onChange={(e) => setGenero(e.target.value)}
              list="generoOpt"
            />
            <datalist id="generoOpt">
              <option value="masculino">Masculino</option>
              <option value="feminino">Feminino</option>
              <option value="outro">Outro</option>
            </datalist>
            {errorGenero && (
                  <p className="text-red-500 text-sm mt-1">{errorGenero}</p>
                )}
          </div>

          <div className="flex flex-col gap-1 w-[100%]">
            <Input
              label={"Data de Nascimento"}
              type={"date"}
              id={"data"}
              placeholder={"Informe a data do seu nascimento"}
              func={setDataNas}
              value={dataNascimento}
            />
            {errorDataNascimento && (
                  <p className="text-red-500 text-sm mt-1">{errorDataNascimento}</p>
                )}
          </div>
          <div className="flex flex-col gap-1 w-[100%]">
            <Input
              label={"Cidade"}
              type={"text"}
              id={"cidade"}
              placeholder={"Informe qual a sua cidade"}
              func={setCidade}
              value={cidade}
            />
            {errorCidade && (
                  <p className="text-red-500 text-sm mt-1">{errorCidade}</p>
                )}
          </div>
          <div className="flex flex-col gap-1 w-[100%]">
            <Input
              label={"Estado"}
              type={"text"}
              id={"estado"}
              placeholder={"Informe qual o seu estado"}
              func={setEstado}
              value={estado}
            />
            {errorEstado && (
                  <p className="text-red-500 text-sm mt-1">{errorEstado}</p>
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
          {loading ? (
            <button className="w-full bg-[#06aa48a4] text-white p-2 rounded mt-2 hover:brightness-110 transition-all flex items-center justify-center">
              <div
                className="w-6 h-6 border-4 border-white border-solid rounded-full animate-spin border-t-transparent"
                role="status"
              ></div>
            </button>
          ) : (
            <button
              className="w-full bg-[#06aa48] text-white p-2 rounded mt-2 hover:brightness-110 transition-all"
              onClick={handleSubmit}
            >
              Cadastrar
            </button>
          )}
        </form>
      </div>

      <Footer />
    </>
  );
}

export default SignupScreen;
