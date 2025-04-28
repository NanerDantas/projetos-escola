import React, { useState } from "react";

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError("Por favor, insira um termo de pesquisa.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch(`http://localhost/CE-Camargo-Esportes/Back-end/search?q=${searchTerm}`);
      const data = await response.json();
      setResults(data.results || []);
    } catch {
      setError("Erro ao realizar a pesquisa. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-4">

      <div className="flex items-center gap-3 mb-6">
        <input
          type="text"
          placeholder="Digite aqui sua pesquisa..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
          onClick={handleSearch}
          className="p-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-all"
          disabled={loading}
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-white border-solid rounded-full animate-spin border-t-transparent"></div>
          ) : (
            "Buscar"
          )}
        </button>
      </div>

      {error && (
        <div className="p-3 mb-4 text-red-700 bg-red-100 border border-red-300 rounded-lg">
          {error}
        </div>
      )}

      <div className="space-y-4">
        {loading ? (
          <p className="text-center text-gray-500">Carregando resultados...</p>
        ) : results.length > 0 ? (
          results.map((result, index) => (
            <div
              key={index}
              className="p-4 border rounded-lg shadow-sm bg-white hover:bg-gray-50 transition-all"
            >
              <h3 className="font-bold text-lg text-green-700">{result.title}</h3>
              <p className="text-gray-600">{result.description}</p>
              <a
                href={result.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-500 hover:underline mt-2 inline-block"
              >
                Ver mais
              </a>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">
            {searchTerm ? "Nenhum resultado encontrado." : "Digite algo para iniciar a pesquisa."}
          </p>
        )}
      </div>
    </div>
  );
};

export default SearchComponent;
