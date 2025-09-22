export default function RecipeCard({ recipe }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-2 flex flex-col items-center">
        <img src={recipe.image} alt={recipe.title} className="rounded-lg mb-2" />
        <p className="text-rose-600 font-medium text-center">{recipe.title}</p>
      </div>
    );
  }
  