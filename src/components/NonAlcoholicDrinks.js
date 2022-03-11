import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { drinkContext } from "../DrinkContext";
import { Box, ImageListItem, ImageListItemBar, ImageList, Typography } from "@mui/material";
import ReactPaginate from "react-paginate";

export default function NonAlcoholicDrinks(){
  const {nonAlcoholicDrinks} = useContext(drinkContext)
  const [pageNumber, setPageNumber] = useState(0)
  const drinksPerPage = 10
  const pagesVisited = pageNumber * drinksPerPage
  const displayDrinks = nonAlcoholicDrinks.slice(pagesVisited, pagesVisited + drinksPerPage).map(drink => {
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
            <ImageListItemBar title={drink.strDrink} style={{textAlign: "center"}} />
          </ImageListItem>
        </Link>
    )
  })
  const pageCount = Math.ceil(nonAlcoholicDrinks.length / drinksPerPage)
  const changePage = ({selected}) => {
    setPageNumber(selected)
    window.scrollTo({top: 0, behavior: "smooth"})
  }
  return (
    <Box sx={{ padding: "10px", height: "100vh" }}>
    <Typography variant="h2" style={{textAlign: "center"}}>Non-Alcoholic Drinks</Typography>
    <ImageList variant="masonry" className="imageList" gap={8}>
      {/* {nonAlcoholicDrinks.map((drink) => (
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
      ))} */}
      {displayDrinks}
    </ImageList>
    <ReactPaginate
      previousLabel={"previous"}
      nextLabel={"next"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={3}
      pageRangeDisplayed={5}
      onPageChange={changePage}
      containerClassName={"paginationBtns"}
      previousLinkClassName={"previousBtn"}
      nextLinkClassName={"nextBtn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    />
  </Box>
  )
}