import React from "react";
import "../Shopping/style.css";
import Card from "./Card/index";
import FilterCategory from "./FilterCategory";

function Shopping() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="shopping_head">
            <h2 className="shopping_title">New Arrivals</h2>
            <p className="underline"></p>
          </div>
        </div>
      </div>

      <div className="container">
        <FilterCategory/>
        <Card/>
      </div>
    </>
  );
}

export default Shopping;
