import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Card, CardHeader, CardMedia, Typography, CardContent, Button } from "@mui/material";

export default function DrinkDetails(){
  const [drinkDetail, setDrinkDetail] = useState({})
  const {drinkId} = useParams()
  const navigate = useNavigate()
  const arrayOfKeyValuePairs = Object.entries(drinkDetail)
  const ingredientsArray = arrayOfKeyValuePairs.filter(([word, value]) => word.slice(0, 13) === "strIngredient" && value )
  function getDrinkInfo(){
    axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`)
      .then(res => setDrinkDetail(() => res.data.drinks[0]))
      .catch(err => console.log(err))
  }
  const ingredients = ingredientsArray.map(ingredientName => ingredientName[1])
  useEffect(() => {
    getDrinkInfo()
    //eslint-disable-next-line
  },[])
  return (
    <Card sx={{width: 1/2,}}>
      <CardHeader
      title={drinkDetail.strDrink}
      subheader={drinkDetail.strAlcoholic}
      />
      <CardMedia
      component="img"
      height="300"
      width=""
      image={drinkDetail.strDrinkThumb}
      alt={drinkDetail.strDrink}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Instructions: {drinkDetail.strInstructions}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Ingredient: {ingredients.join(", ")}
        </Typography>
      </CardContent>
      <Button onClick={() => navigate(-1)}>go back</Button>
    </Card>
    
  )
}