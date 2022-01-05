import React, {useState, useEffect} from "react";
import axios from "axios";

const drinkContext = React.createContext()

function DrinkContextProvider(props){
  const [alcoholicDrinks, setAlcoholicDrinks] = useState([])
  
  const [nonAlcoholicDrinks, setNonAlcoholicDrinks] = useState([])

  const getAlcoholicDrinks = () => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
      .then(res => setAlcoholicDrinks(() => [...res.data.drinks]))
      .catch(err => console.log(err))
  }
  const getNonAlcoholicDrinks = () => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
      .then(res => setNonAlcoholicDrinks(() => [...res.data.drinks]))
      .catch(err => console.log(err))
  }
  useEffect(() => {
    getAlcoholicDrinks()
    getNonAlcoholicDrinks()
  }, [])
  return (
    <drinkContext.Provider
    value={{
      alcoholicDrinks,
      nonAlcoholicDrinks
    }}
    >
      {props.children}
    </drinkContext.Provider>

  )
}
export {DrinkContextProvider, drinkContext}