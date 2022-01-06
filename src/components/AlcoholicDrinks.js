import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
import { ImageList, ImageListItem, ImageListItemBar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { drinkContext } from "../DrinkContext";

export default function AlcoholicDrinks(){
  const { alcoholicDrinks } = useContext(drinkContext)
  const [pageNumber, setPageNumber] = useState(0)
  const drinksPerPage = 10
  const pagesVisited = pageNumber * drinksPerPage
  const displayDrinks = alcoholicDrinks.slice(pagesVisited, pagesVisited + drinksPerPage).map(drink => {
    return (
        <Link to={`/drink/${drink.idDrink}`} key={drink.idDrink}>
        <ImageListItem variant="masonry">
            
          <img
            className="drinkImage"
            style={{borderRadius: "4px", margin: "auto"}}
            src={`${drink.strDrinkThumb}?w=248&fit=crop&auto=format`}
            srcSet={`${drink.strDrinkThumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={drink.strDrink}
            // loading="lazy"
            />
          <ImageListItemBar title={drink.strDrink} />
        </ImageListItem>
            </Link>
    )
  })
  const pageCount = Math.ceil(alcoholicDrinks.length / drinksPerPage)
  const changePage = ({selected})  => {
    setPageNumber(selected)
    window.scrollTo({top: 0, behavior: "smooth"})
  }
  return (
    <Box sx={{ padding: "10px", height: "100vh" }}>
    <Typography variant="h2" style={{textAlign: "center"}}>Alcoholic Drinks</Typography>
    <ImageList  gap={8} className="imageList">
      {/* {alcoholicDrinks.map((drink) => (
        <Link to={`/drink/${drink.idDrink}`} key={drink.idDrink}>
        <ImageListItem >
            
          <img
            style={{borderRadius: "4px", margin: "auto"}}
            src={`${drink.strDrinkThumb}?w=248&fit=crop&auto=format`}
            srcSet={`${drink.strDrinkThumb}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={drink.strDrink}
            // loading="lazy"
            />
          <ImageListItemBar title={drink.strDrink} />
        </ImageListItem>
            </Link>
      ))} */}
      {displayDrinks}
    </ImageList>
    <ReactPaginate
      previousLabel="previous"
      nextLabel={"next"}
      breakLabel={"..."}
      pageCount={pageCount}
      marginPagesDisplayed={5}
      pageRangeDisplayed={3}
      onPageChange={changePage}
      containerClassName={"paginationBtns"}
      previousLinkClassName={"previousBtn"}
      nextLinkClassName={"nextBtn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    />
  </Box>
);
}