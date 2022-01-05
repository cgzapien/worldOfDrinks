import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home"
import Search from "./components/Search"
import AlcoholicDrinks from "./components/AlcoholicDrinks";
import NonAlcoholicDrinks from "./components/NonAlcoholicDrinks"
import DrinkDetails from "./components/DrinkDetails"

export default function App(){
  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/alcoholic" element={<AlcoholicDrinks />} />
      <Route path="/non-alcoholic" element={<NonAlcoholicDrinks />} />
      <Route path="/search" element={<Search />} />
      <Route path="/drink/:drinkId" element={<DrinkDetails />} />
    </Routes>
    </>
  )
}