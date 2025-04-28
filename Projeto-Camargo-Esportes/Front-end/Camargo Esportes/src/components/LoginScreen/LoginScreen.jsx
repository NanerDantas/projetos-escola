import React, { useState } from "react";
import './Style.css';  

function CadastroUsuario() {
  const [nome, setNome] = useState("");
  const [dataNascimento, setDataNas] = useState("");
  const [genero, setGenero] = useState("");
  const [cidade, setCidade] = useState("");
  const [estado, setEstado] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();


    try {
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
      setNome("")
      setDataNas("")
      setGenero("")
      setCidade("")
      setEstado("")
      setEmail("")
      setSenha("")
      const data = await response.json();
      console.log("Resposta do servidor:", data);
    } catch (error) {
      console.error("Erro ao enviar dados:", error);
    }
  };
  

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-1  box-form`}>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <input
        type="text"
        placeholder="Genêro"
        value={genero}
        onChange={(e) => setGenero(e.target.value)}
      />
      <input
        type="date"
        placeholder="Data de Nascimento"
        value={dataNascimento}
        onChange={(e) => setDataNas(e.target.value)}
      />
      <input
        type="text"
        placeholder="Cidade"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />
      <input
        type="text"
        placeholder="Estado"
        value={estado}
        onChange={(e) => setEstado(e.target.value)}
      />
      <button type="submit">Cadastrar</button>
    </form>
  );
}

export default CadastroUsuario;
