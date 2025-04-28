import { Link } from "react-router-dom";
import bg_404 from "../../assets/bg-nologin.svg";
function NotFound() {
  return (
    <>
      <div className="w-screen min-h-[90vh] flex flex-col items-center justify-center mt-4 mb-8">
        <div className="flex flex-col items-center justify-center gap-4">
          <img src={bg_404} alt="imagem 404" className="h-[150px]" />
          <h1 className="text-lg font-medium text-gray-600">
            Parece que você não fez login ainda!
          </h1>
          <Link
            to={"/login"}
            className="py-2 bg-[#06aa48] text-white font-medium rounded px-6 hover:brightness-110 transition-all"
          >
            Faça Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default NotFound;
