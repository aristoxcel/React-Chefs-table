import Cooking from "./Cooking"
import PropTypes from 'prop-types';


function Cook({cookItem, handleCooking, recipe}) {
   return ( 
    <div >
        <h1 className="text-2xl font-bold">Want to cook: {cookItem.length}</h1>
        <div className="divider"></div>
        <div className="overflow-x-auto">
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
                    cookItem.map((c, id)=>(
                      <tr key={id} className="bg-base-200" >
                          <td>{id + 1}</td>
                          <td>{c.recipe_name}</td>
                          <td>{c.preparing_time} minutes</td>
                          <td>{c.calories} Calories</td>
                          <td><button onClick={()=>handleCooking(c.recipe_id)} className="btn rounded-[50px] bg-[#0BE58A] text-[#150B2B] font-semibold   hover:bg-transparent border-transparent hover:text-[#0BE58A]">Preparing</button></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
        </div>

        <div className="mt-6">
          <Cooking recipe={recipe}></Cooking>
        </div>
     </div>
  )
}

Cook.propTypes = {
  cookItem: PropTypes.array.isRequired,
  recipe: PropTypes.array.isRequired,
  handleCooking: PropTypes.func
}

export default Cook