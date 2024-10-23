import PropTypes from "prop-types";

const Sidebar = ({ recipeQueue }) => {
  return (
    <div className="md:w-1/3 border-2 rounded-2xl text-gray-600 p-2 bg-base-100">
      {/* Want to cook table  */}

      <div className="overflow-x-auto">
        <h2 className="border-b-2 mx-auto font-semibold text-2xl text-gray-800 text-center pb-2">Want To Cook: {recipeQueue.length}</h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
           {
            recipeQueue.map((recipe, idx) => (
                <tr className="hover" key={idx}>
              <th>{idx + 1}</th>
              <td>{recipe.recipe_title}</td>
              <td>{recipe.preparing_time}</td>
              <td>{recipe.calories}</td>
            </tr>
            ))
           }
            
          
          </tbody>
        </table>
      </div>

      {/* curently cooking table  */}
    </div>
  );
};

Sidebar.propTypes = {
  recipeQueue: PropTypes.array.isRequired,
};

export default Sidebar;
