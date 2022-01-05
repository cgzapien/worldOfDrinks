import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { drinkContext } from "../DrinkContext";
import { Box, ImageListItem, ImageListItemBar, ImageList } from "@mui/material";

export default function NonAlcoholicDrinks(){
  const {nonAlcoholicDrinks} = useContext(drinkContext)
  
  return (
    <Box sx={{ padding: "10px", height: "100vh" }}>
    <ImageList variant="masonry" cols={3} gap={8}>
      {nonAlcoholicDrinks.map((drink) => (
        <Link to={`/drink/${drink.idDrink}`} key={drink.idDrink}>
          <ImageListItem key={drink.idDrink}>
            <img
              style={{borderRadius: "4px", margin: "auto"}}
              src={`${drink.strDrinkThumb}?w=248&fit=crop&auto=format`}
              srcSet={`${drink.strDrinkThumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={drink.strDrink}
              loading="lazy"
              />
            <ImageListItemBar title={drink.strDrink} />
          </ImageListItem>
        </Link>
      ))}
    </ImageList>
  </Box>
  )
}