import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SecHeader from "../SecHeader/SecHeader";
import google from "../../assets/icons8-google.svg";
import facebook from "../../assets/icons8-facebook.svg";
import twitter from "../../assets/icons8-twitter.svg";
import Footer from "../Footer/Footer";
function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [message, setMessage] = useState("");
  const [sucess, setSucess] = useState();
  const [error, setError] = useState("");
  const [errorEmail, setErrorEmail] = useState("");

  const handleLogin = async () => {
    if (!email) {
      setErrorEmail("Por favor, insira seu Email.");
      return;
    } else {
      setErrorEmail("");
    }

    if (!senha) {
      setError("Por favor, insira sua senha.");
      return;
    } else {
      setError("");
    }
    setLoading(true);

    try {
      const response = await fetch(
        "http://localhost/CE-Camargo-Esportes/Back-end/login.php",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: JSON.stringify({ email, senha }),
        }
      );
      const data = await response.json();
      if (data.success) {
        setError("");
        setErrorEmail;
        setSucess(true);
        setMessage(`Bem-vindo, ${data.user.nome}!`);
        setLoading(false);
        setTimeout(() => {
          window.location.href = "/";
        }, 1500);
      } else {
        setMessage(data.message);
        setSucess(false);
        setLoading(false);
      }
    } catch (error) {
      setMessage("Erro ao logar. Tente novamente.");
      setSucess(false);
      setLoading(false);
    }
  };

  const [logged, setLogged] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const response = await fetch(
        "http://localhost/CE-Camargo-Esportes/Back-end/check-session.php",
        {
          credentials: "include",
        }
      );
      const data = await response.json();
      setLogged(data);
    };

    checkSession();
  }, []);

  const [loading, setLoading] = useState(false);

  return (
    <>
      <SecHeader />

      <div className="w-screen min-h-screen flex items-center justify-center">
        <div className="flex flex-col justify-center items-center w-[400px] gap-6 box-form">
          <h1 className="flex items-center justify-center text-4xl font-bold mb-4 text-[#06aa48]">
            Seja Bem-vindo
          </h1>

          <div className="flex flex-col gap-4 items-center w-full">
            {message ? (
              <div className="w-full mb-4">
                <div
                  className={`w-full flex justify-center p-2 items-center rounded ${
                    sucess ? "bg-green-200" : "bg-red-200"
                  }`}
                >
                  <h2
                    className={`${sucess ? "text-green-700" : "text-red-700"}`}
                  >
                    {message}
                  </h2>
                </div>
              </div>
            ) : null}
            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="email" className="text-[#666666]">
                Email
              </label>
              <input
                className={`border ${
                  errorEmail ? "border-red-500" : "border-[#666666]"
                } p-2 rounded w-full`}
                type="email"
                placeholder="Insira seu Email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errorEmail && (
                <p className="text-red-500 text-sm mt-1">{errorEmail}</p>
              )}
            </div>

            <div className="flex flex-col gap-1 w-full">
              <label htmlFor="senha" className="text-[#666666]">
                Senha
              </label>
              <input
                className={`border ${
                  error ? "border-red-500" : "border-[#666666]"
                } p-2 rounded w-full`}
                type="password"
                placeholder="Insira sua senha"
                id="senha"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                required
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>

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
                onClick={handleLogin}
              >
                Entrar
              </button>
            )}
          </div>

          <div className="w-full flex flex-col items-center gap-6">
            <span className="text-[#666666]">Ou escolha a opção</span>

            <div className="flex w-full justify-center gap-4">
              <button className="py-2 px-5 border rounded-md border-[#06aa48]">
                <img
                  src={google}
                  className="h-[32px] w-[32px]"
                  aalt="google login"
                />
              </button>
              <button className="py-2 px-5 border rounded-md border-[#06aa48]">
                <img
                  src={facebook}
                  className="h-[32px] w-[32px]"
                  alt="facebook login"
                />
              </button>
              <button className="py-2 px-5 border rounded-md border-[#06aa48]">
                <img
                  src={twitter}
                  className="h-[32px] w-[32px]"
                  alt="twitter login"
                />
              </button>
            </div>

            <span className=" font-medium text-[#4e4e4e]">
              Não tem conta?{" "}
              <Link to={"/Cadastro"} className="text-[#06aa48] font-bold">
                Criar conta
              </Link>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Login;
