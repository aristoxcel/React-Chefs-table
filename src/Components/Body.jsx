/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react"
import Cards from "./Cards"
import Cook from "./Cook"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Body() {
    const [cards, setCards]=useState([])
    const[cookItem, setCookItem]=useState([])
    const [recipe, setRecipe]=useState([])

    useEffect(()=>{
        fetch('chef.json')
        .then(res=>res.json())
        .then(data=>setCards(data))
    },[])

    const handleChoose=(p)=>{
        const isExist= cookItem.find(c=>c.recipe_id ==p.recipe_id)
        if(!isExist){
            setCookItem([...cookItem,p])
        }
        else{
            toast("You already selected this item !")
        }
    }

    const handleCooking = (id)=>{
        setCookItem(cookItem.filter(c=>c.recipe_id !=id))

        const cooking=cookItem.find(m=>m.recipe_id == id)
        setRecipe([...recipe,cooking])
    }


  return (
    <div>
         <div className="space-y-7 mt-32 ">
             <h1 className="font-semibold text-5xl ">Our Recipes</h1>
            <p className="text-base max-w-screen-lg mx-auto "> Explore "Our Recipes" for delicious dishes! From appetizers to desserts, our collection has something for everyone. Join us on a culinary journey today and let your taste buds dance with delight!!</p>
        </div>

        <div className="grid grid-cols-8 gap-4 mt-10">
            <div className="lg:col-span-5 col-span-8">
           <div className="grid lg:grid-cols-2 gap-4">
            {
                cards.map(card=><Cards
                key={card.recipe_id}
                card={card}
                handleChoose={handleChoose}
                ></Cards>)
            }
           </div>
            </div>
            <div className="lg:col-span-3 col-span-8">
                <div className=" border-2 border-gray-200 px-4 py-8 rounded-2xl">
                    <Cook
                    key={cookItem.recipe_id}
                    cookItem={cookItem}
                    handleCooking={handleCooking}
                    recipe={recipe}
                    ></Cook>
                </div>
            </div>
        </div>
        <ToastContainer />
    </div>
  )
}

export default Body
