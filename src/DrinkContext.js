import React, {useState, useEffect} from "react";
import axios from "axios";

const drinkContext = React.createContext()

function DrinkContextProvider(props){
  const [alcoholicDrinks, setAlcoholicDrinks] = useState([])
  
  const [nonAlcoholicDrinks, setNonAlcoholicDrinks] = useState([])
  //---Get Alcoholic Drinks---//
  const getAlcoholicDrinks = () => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic")
    .then(res => setAlcoholicDrinks(() => [...res.data.drinks]))
    .catch(err => console.log(err))
  }
  //---Get Non-Alcoholic Drinks---//
  const getNonAlcoholicDrinks = () => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic")
    .then(res => setNonAlcoholicDrinks(() => [...res.data.drinks]))
    .catch(err => console.log(err))
  }
  //---Real time search---//
  const realTimeSearch = (name) => {
    console.log('name: ', name);
    // axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka")
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
  }
  useEffect(() => {
    getAlcoholicDrinks()
    getNonAlcoholicDrinks()
  }, [])
  return (
    <drinkContext.Provider
    value={{
      alcoholicDrinks,
      nonAlcoholicDrinks,
      realTimeSearch
    }}
    >
      {props.children}
    </drinkContext.Provider>

  )
}
export {DrinkContextProvider, drinkContext}