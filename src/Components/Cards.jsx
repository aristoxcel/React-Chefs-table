import { PiFireSimpleBold } from "react-icons/pi";
import { MdOutlineWatchLater } from "react-icons/md";
import PropTypes from 'prop-types';

function Cards({card, handleChoose}) {
    const {recipe_image, recipe_name, short_description, ingredients, preparing_time, calories}=card
  return (
    <div>
        <div className="card   shadow-xl border-2 border-gray-200">
        <figure className="px-8 pt-8">
            <img src={recipe_image} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{recipe_name}</h2>
            <p className="text-start">{short_description}</p>
            <div className="divider my-0"></div>
            <div className="text-start">
                <h1 className="font-semibold mb-3">Ingredients: {ingredients.length}</h1>
                <ul className="list-disc pl-7">
                    {
                        ingredients.map((i, id)=> id<3?<li key={id}>{i}</li>:'')
                    } 
                </ul>
            </div>
            <div className="divider my-1"></div>
            <div className="flex justify-between w-full">
                <div className="flex gap-1 items-center">
                    <MdOutlineWatchLater />
                    <p className="mt-1">{preparing_time} minutes</p>
                </div>
                <div className="flex gap-1 items-center">
                    <PiFireSimpleBold />
                    <p className="mt-1">{calories} calories</p>
                </div>
            </div>
        
            <div className="flex w-full my-3">
            <button className="btn rounded-[50px] bg-[#0BE58A] text-[#150B2B] font-semibold text-xl  hover:bg-transparent border-transparent" onClick={()=>handleChoose(card)}>Want to Cook</button>
            </div>

        </div>
        </div>
    </div>
  )
}

Cards.propTypes = {
    card: PropTypes.object.isRequired,
    handleChoose: PropTypes.func
  }

export default Cards