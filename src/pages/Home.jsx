// src/pages/Home.jsx
import BenefitsSection from "../components/BenefitsSection";
import HeroSection from "../components/HeroSection";
import RecipeFooter from "../components/RecipeFooter";
import RecipeArea from "../components/RecipesArea";
import Testimony from "../components/Testimony";

export default function Home() {
  return (
    <div className="grid justify-center place-content-center w-screen">
      <HeroSection />
      <BenefitsSection />
      <RecipeArea />
      <Testimony />
      <RecipeFooter />
    </div>
  );
}
