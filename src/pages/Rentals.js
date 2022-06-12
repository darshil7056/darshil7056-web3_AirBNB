import React from "react";
import "./Rentals.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Rentals = () => {
  const {state:searchFilters} = useLocation()

  return (
    <>
     <Link to="/"> Home </Link>
    { searchFilters && 
    <div onClick = {() =>console.log(searchFilters)}>Helo</div>
    }
    </>
  );
};

export default Rentals;
