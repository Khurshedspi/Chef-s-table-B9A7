import Banner from "./components/banner/Banner"
import Header from "./components/header/Header"
import OurRecipes from "./components/OurRecipes"
import Recipes from "./components/Recipes"
import Sidebar from "./components/Sidebar"


function App() {
 

  return (
    <>
    {/* header  */}
    <Header></Header>
    {/* banner  */}
    <Banner></Banner>
    {/* OurRecipes  */}
    <OurRecipes></OurRecipes>

    {/* Recipe card section  */}
    <section className="flex flex-col md:flex-row gap-6">
      {/* Cards section  */}
      <Recipes></Recipes>

      {/* Sidebar  */}
      <Sidebar></Sidebar>
    </section>
    
      
    </>
  )
}

export default App
