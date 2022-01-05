import React from "react";
import { AppBar, Button, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

export default function NavBar(){
  return (
    <div className="navBar">
      <AppBar position="static" >
        <Toolbar className="appbar">
          <Link to="/"><Button variant="text" style={{color: "white", textDecoration: "none"}}>Home</Button></Link>
          <Link to="/alcoholic"><Button style={{color: "black"}}>Alcoholic Drinks</Button></Link>
          <Link to="/non-alcoholic"><Button style={{color: "black"}}>Non-Alcoholic Drinks</Button></Link>
          <Link to="/search"><Button color="inherit">Search</Button></Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}