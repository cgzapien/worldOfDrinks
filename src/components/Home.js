import { Typography } from "@mui/material";
import React from "react";

export default function Home(){
  return (
    <div className="home">
      <Typography variant="h2">World of Drinks</Typography>
      <Typography> 
        Welcome!<br/>Here you can explore all drinks you want.<br/>
        I made this App using The CocktailDB API. The purpose of this App is for the user to search<br/>
        for Alcoholic and Non-Alcoholic drinks. When the user clicks on the drink image you will routed<br/> 
        to a details page where details regarding that drink will populate.<br/> Thanks for visiting!
      </Typography>

    </div>
  )
}