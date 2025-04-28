import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupScreen from "./Pages/SignupScreen/SignupScreen";
import Home from "./Pages/Home/Home";
import News from "./Pages/News/News";
import RegisterNews from "./Pages/RegisterNews/RegisterNews";
import Login from "./components/Login/Login";
import { useEffect, useState } from "react";
import MyNews from "./Pages/MyNews/MyNews";
import EditNews from "./Pages/EditNews/EditNews";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkSession = async () => {
      const response = await fetch('http://localhost/CE-Camargo-Esportes/Back-end/check-session.php', {
        credentials: 'include',
      });
      const data = await response.json();
      if (data.loggedIn) {
        setUser(data.user);
      }
    };

    checkSession();
  }, []);
  return (
    <>
    <Router>
      <Routes>
        <Route path="/Cadastro" element={<SignupScreen />} />
        <Route path="/" element={<Home />} />
        <Route path="/news/:id" element={<News />} />
        <Route path="/editnews/:id" element={<EditNews />} />
        <Route path="/publicacaoNoticia" element={<RegisterNews />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mynews" element={<MyNews />} />
      </Routes>
    </Router>

    </>
  );
}

export default App;
