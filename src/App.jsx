import BenefitsSection from "./components/BenefitsSection"
import Navbar from "./components/Navbar"
import HeroSection from "./components/HeroSection"
import RecipeFooter from "./components/RecipeFooter"
import RecipeArea from "./components/RecipesArea"
import Testimony from "./components/Testimony"

export default function App() {
  return(
    <div className="grid justify-center place-content-center w-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <RecipeArea />
      <Testimony />
      <RecipeFooter />
    </div>
  )
}
