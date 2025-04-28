import SecHeader from "../SecHeader/SecHeader";

function Logout() {
  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost/CE-Camargo-Esportes/Back-end/logout.php", {
        method: "POST",
        credentials: "include",
      });
      const data = await response.json();
      if (data.success) {
        alert("Sessão encerrada.");
        window.location.reload();
      }
    } catch (error) {
      console.error("Erro ao encerrar sessão:", error);
    }
  };

  return (
    <>
    
      <button onClick={handleLogout}>Sair</button>
    </>
  );
}

export default Logout;
