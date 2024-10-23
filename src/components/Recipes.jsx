import { useEffect } from "react";
import { useState } from "react";

const Recipes = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("./recipes.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  console.log(recipes);
  return (
    <div className="md:w-2/3">
   
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
{recipes.map((recipe) => (
        <div key={recipe.recipe_id} className="card bg-base-100  shadow-xl">
          <figure className="px-8 pt-6">
            <img className="w-full md:h-52"
              src={recipe.image_link}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      ))}

</div>

    </div>
  );
};

export default Recipes;
