import { useEffect, useState } from "react";
import Filters from "./Filters";
import RecipeCard from "./RecipeCard";

export default function RecipeArea() {
  const [query, setQuery] = useState("");
  const [foods, setFoods] = useState([]);
  const [dietFilters, setDietFilters] = useState({});
  const [sortOption, setSortOption] = useState("");

  const APIKEY = "d56924ee2fd7472c8fbf846ebbcf64d7";

  const buildApiUrl = () => {
    let url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${APIKEY}&query=${query}&number=6`;

    if (dietFilters.vegetarian) url += "&diet=vegetarian";
    if (dietFilters.glutenFree) url += "&intolerances=gluten";

    if (sortOption === "asc") url += "&sort=title&sortDirection=asc";
    if (sortOption === "desc") url += "&sort=title&sortDirection=desc";

    return url;
  };

  const fetchData = async () => {
    if (!query) return;

    try {
      const response = await fetch(buildApiUrl());
      const data = await response.json();
      let results = data.results || [];

      if (sortOption === "asc") results.sort((a, b) => a.title.localeCompare(b.title));
      else if (sortOption === "desc") results.sort((a, b) => b.title.localeCompare(a.title));

      setFoods(results);
    } catch (error) {
      console.error("Erro ao buscar receitas:", error);
    }
  };

  useEffect(() => {
    const handler = setTimeout(() => fetchData(), 500);
    return () => clearTimeout(handler);
  }, [query, dietFilters, sortOption]);

  return (
    <>
      {/* Cabeçalho compacto */}
      <div className="bg-rose-100 w-full flex flex-col justify-center items-center p-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-rose-600 mb-4 text-center">
          Área de Pesquisa
        </h2>
        <div className="w-full max-w-4xl">
          <Filters
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar no Catálogo"
            onApplyFilter={(filters) => setDietFilters(filters)}
            onApplySorter={(sort) => setSortOption(sort)}
          />
        </div>
      </div>

      {/* Grid de receitas compacta */}
      <div className="bg-rose-100 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {foods.length > 0 ? (
          foods.map((food) => <RecipeCard recipe={food} key={food.id} />)
        ) : (
          <p className="text-rose-600 text-center col-span-full">
            Nenhuma receita encontrada. Tente outra busca.
          </p>
        )}
      </div>
    </>
  );
}
