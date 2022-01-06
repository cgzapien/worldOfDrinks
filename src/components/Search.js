import React, {useState, useEffect, useContext} from "react";
import { ImageList, TextField, Typography, ImageListItemBar, ImageListItem } from "@mui/material";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import axios from "axios";

export default function Search(){
  const [search, setSearch] = useState("")
  const [results, setResults] = useState([])
  console.log('results: ', results);
  const filtered = results.filter(drinks => drinks.strDrink.toLowerCase().includes(search.toLowerCase()))
  console.log('filtered: ', filtered);
  const handleChange = (e) => {
    e.preventDefault()
    setSearch(e.target.value)
  }
  // const searchIt = () => {
  //   axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
  //     .then(res => setResults(() => [...res.data.drinks]))
  //     .catch(err => console.log(err))
  //   }
    useEffect(() => {
      if(search === ""){
        setResults([])
      }
      if(search.length > 0){
        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`)
        .then(res => setResults([...res.data.drinks]))
        .catch(err => console.log(err))
      }
  }, [search])
  return (
    <div>
      <Box>
        <TextField
        label="Search by name"
        variant="outlined"
        onChange={handleChange}
        value={search}
        />
      </Box>
      <Box>
        <Typography>your search results here</Typography>
        <ImageList variant="masonry" className="imageList" gap={8}>
          {filtered.map(drink => {
            return (
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
            )
          })}
        </ImageList>
      </Box>

    </div>
  )
}