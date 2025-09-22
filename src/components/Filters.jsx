import { AdjustmentsHorizontalIcon, FunnelIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function Filters({ value, onChange, placeholder, onApplyFilter, onApplySorter }) {
  const [dietOpen, setDietOpen] = useState(false);
  const [sortOpen, setSortOpen] = useState(false);

  // Estado interno dos filtros
  const [dietFilters, setDietFilters] = useState({
    vegetarian: false,
    glutenFree: false,
  });
  const [sortOption, setSortOption] = useState("");

  const clearDietFilters = () => setDietFilters({ vegetarian: false, glutenFree: false });
  const clearSort = () => setSortOption("");

  const applyDietFilters = () => onApplyFilter && onApplyFilter(dietFilters);
  const applySort = () => onApplySorter && onApplySorter(sortOption);

  return (
    <div className="flex flex-col gap-6 w-full max-w-2xl mx-auto relative">
      {/* Barra de pesquisa */}
      <div className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-md shadow-rose-100 relative">
        <div className="flex flex-col flex-1">
          <input
            id="searchbar"
            className="w-full rounded-xl border border-rose-200 bg-rose-50 text-rose-600 placeholder-rose-300 px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-300 transition"
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
          />
          <span className="text-xs text-rose-400 mt-1">*Pesquisa em inglês</span>
        </div>

        {/* Ícones */}
        <div className="flex gap-3 text-rose-500">
          <FunnelIcon
            className="w-7 h-7 hover:text-rose-700 cursor-pointer transition"
            onClick={() => {
              setDietOpen(!dietOpen);
              setSortOpen(false);
            }}
          />
          <AdjustmentsHorizontalIcon
            className="w-7 h-7 hover:text-rose-700 cursor-pointer transition"
            onClick={() => {
              setSortOpen(!sortOpen);
              setDietOpen(false);
            }}
          />
        </div>
      </div>

      {/* Dropdown Dietas */}
      {dietOpen && (
        <Dropdown title="Dietas" onClose={() => setDietOpen(false)}>
          <label className="flex items-center gap-2 text-sm text-rose-600">
            <input
              type="checkbox"
              className="accent-rose-400"
              checked={dietFilters.vegetarian}
              onChange={(e) => setDietFilters((prev) => ({ ...prev, vegetarian: e.target.checked }))}
            />
            Vegetariano
          </label>
          <label className="flex items-center gap-2 text-sm text-rose-600">
            <input
              type="checkbox"
              className="accent-rose-400"
              checked={dietFilters.glutenFree}
              onChange={(e) => setDietFilters((prev) => ({ ...prev, glutenFree: e.target.checked }))}
            />
            Sem Glúten
          </label>
          <div className="flex gap-3 mt-3">
            <button
              onClick={clearDietFilters}
              className="flex-1 px-3 py-2 rounded-lg text-sm font-medium bg-rose-100 text-rose-600 hover:bg-rose-200 transition"
            >
              Limpar
            </button>
            <button
              onClick={applyDietFilters}
              className="flex-1 px-3 py-2 rounded-lg text-sm font-medium bg-rose-500 text-white hover:bg-rose-600 transition"
            >
              Aplicar
            </button>
          </div>
        </Dropdown>
      )}

      {sortOpen && (
        <Dropdown title="Ordenação" onClose={() => setSortOpen(false)}>
          <label className="flex items-center gap-2 text-sm text-rose-600">
            <input
              type="radio"
              name="sort"
              className="accent-rose-400"
              checked={sortOption === "asc"}
              onChange={() => setSortOption("asc")}
            />
            Ordem alfabética
          </label>
          <label className="flex items-center gap-2 text-sm text-rose-600">
            <input
              type="radio"
              name="sort"
              className="accent-rose-400"
              checked={sortOption === "desc"}
              onChange={() => setSortOption("desc")}
            />
            Ordem alfabética invertida
          </label>
          <div className="flex gap-3 mt-3">
            <button
              onClick={clearSort}
              className="flex-1 px-3 py-2 rounded-lg text-sm font-medium bg-rose-100 text-rose-600 hover:bg-rose-200 transition"
            >
              Limpar
            </button>
            <button
              onClick={applySort}
              className="flex-1 px-3 py-2 rounded-lg text-sm font-medium bg-rose-500 text-white hover:bg-rose-600 transition"
            >
              Aplicar
            </button>
          </div>
        </Dropdown>
      )}
    </div>
  );
}

function Dropdown({ title, children, onClose }) {
  return (
    <div className="absolute right-0 top-[100%] mt-2 w-72 bg-white shadow-lg rounded-xl border border-rose-100 z-50">
      <div className="flex justify-between items-center border-b px-4 py-3">
        <h2 className="text-sm font-semibold text-rose-600">{title}</h2>
        <XMarkIcon
          className="w-5 h-5 text-rose-500 hover:text-rose-700 cursor-pointer transition"
          onClick={onClose}
        />
      </div>
      <div className="p-4 flex flex-col gap-4">{children}</div>
    </div>
  );
}
