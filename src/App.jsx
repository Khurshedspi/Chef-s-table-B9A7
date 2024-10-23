import { useState } from "react"
import Banner from "./components/banner/Banner"
import Header from "./components/header/Header"
import OurRecipes from "./components/OurRecipes"
import Recipes from "./components/Recipes"
import Sidebar from "./components/Sidebar"


function App() {
 const [recipeQueue, setRecipeQueue] = useState([]);

 const addRecipeToQueue = recipe => {

  const isExist = recipeQueue.find(
    previousRecipe => previousRecipe.recipe_id === recipe.recipe_id
  )

if(!isExist){
  setRecipeQueue([...recipeQueue, recipe])
}
else{
  alert('Recipe already exists in the queue.')
}
 }
 console.log(recipeQueue);

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
      <Recipes
      addRecipeToQueue ={addRecipeToQueue}
      ></Recipes>

      {/* Sidebar  */}
      <Sidebar 
      
      recipeQueue={recipeQueue}
      ></Sidebar>
    </section>
    
      
    </>
  )
}

export default App
