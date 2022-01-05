import React, {useState, useContext} from "react";
import { TextField } from "@mui/material";
import { Box } from "@mui/system";
import { drinkContext } from "../DrinkContext";

export default function Search(){
  const [search, setSearch] = useState("")
  const { realTimeSearch } = useContext(drinkContext)
  const handleChange = (e) => {
    //setSearch({search: e.target.value})
    searchIt(e.target.value)
  }
  const searchIt = (searched) => {
    console.log('searched: ', searched);
    // axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka")
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))
  }
  return (
  <Box>
    <TextField
     label="Search by name"
     variant="outlined"
     onChange={handleChange}
     />
  </Box>
  )
}