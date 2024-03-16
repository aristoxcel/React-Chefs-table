import Cooking from "./Cooking"


function Cook({cookItem, handleCooking, recipe}) {
    const {recipe_id, recipe_name, preparing_time, calories}=cookItem
   return ( 
    <div >
        <h1>Want to cook: {cookItem.length}</h1>
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

export default Cook