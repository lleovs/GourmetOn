import { useEffect, useState } from "react";
import Filters from "./Filters";
import RecipeCard from "./RecipeCard";
import RecipeFooter from "./RecipeFooter";
import Testimony from "./Testimony";

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
  
      // Ordenação local
      if (sortOption === "asc") {
        results.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortOption === "desc") {
        results.sort((a, b) => b.title.localeCompare(a.title));
      }
  
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
      <div className="bg-fuchsia-100 w-full flex justify-center p-4 pt-20">
        <Filters
        value={query}
        onChange={(e) => setQuery(e.target.value)}
          placeholder="Digite o nome de uma comida"
          onApplyFilter={(filters) => setDietFilters(filters)}
          onApplySorter={(sort) => setSortOption(sort)}
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {foods.map((food) => (
          <RecipeCard recipe={food} key={food.id} />
        ))}
      </div>
        <Testimony />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4"></div>
    
        <RecipeFooter />

    </>
  );
}
