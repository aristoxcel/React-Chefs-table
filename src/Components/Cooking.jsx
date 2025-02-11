import PropTypes from 'prop-types';

function Cooking({recipe}) {
  
  return (
    <div>
    <h1 className="text-2xl font-bold">Curently Cooking: {recipe.length}</h1>
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
        <td>Total Time = {recipe.reduce((p,c)=>p+c.preparing_time,0)} minutes </td>
        <td>Total Calories = {recipe.reduce((p,c)=>p+c.calories,0)} calories</td>
    </tr>



</tbody>
</table>
</div>
</div>
  )
}

Cooking.propTypes = {
  recipe: PropTypes.array.isRequired,
}

export default Cooking