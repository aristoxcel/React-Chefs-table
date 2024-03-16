

function Cooking({recipe}) {
  const {recipe_id, recipe_name, preparing_time, calories}=recipe
  console.log(recipe);
  return (
    <div>
    <h1>Curently Cooking: {recipe.length}</h1>
    <div className="divider"></div>
    <div className="overflow-x-auto">
<table className="table">

<thead>
  <tr>
    <th></th>
    <th>Name</th>
    <th>Time</th>
    <th>Calories</th>
  </tr>
</thead>
<tbody>

    {
      recipe.map((m,id)=>(
        <tr key={id} className="bg-base-200" >
        <td>{id+1}</td>
        <td>{m.recipe_name}</td>
        <td>{m.preparing_time} minutes</td>
        <td>{m.calories} Calories</td>
    </tr>
      ))
    }

    <tr>
        <td></td>
        <td></td>
        <td>Total minutes ={recipe.reduce((p,c)=>p+c.preparing_time,0)} </td>
        <td>Total Calories ={recipe.reduce((p,c)=>p+c.calories,0)}</td>
    </tr>



</tbody>
</table>
</div>
</div>
  )
}


export default Cooking