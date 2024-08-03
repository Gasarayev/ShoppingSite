import React, { useContext, useState } from "react";
import { ContextApi } from "../../contexts/context";
import "../FilterCategory/style.css";

function FilterCategory() {
  const { products, setFilteredProducts } = useContext(ContextApi);
  const [selectedCategory, setSelectedCategory] = useState('All');


  const handleFilter = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredProducts(products);
    } else {
      const filtered = products.filter((product) => product.category === category);
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <ul className="d-flex justify-content-center ctgry_filtered">
            <li onClick={() => handleFilter('All')} className={selectedCategory === 'All' ? 'selected' : ''}>All</li>
            <li onClick={() => handleFilter("women")} className={selectedCategory === "women" ? 'selected' : ''}>Women's</li>
            <li onClick={() => handleFilter('accessories')} className={selectedCategory === 'accessories' ? 'selected' : ''}>Accessories</li>
            <li onClick={() => handleFilter("men")} className={selectedCategory === "men" ? 'selected' : ''}>Men's</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FilterCategory;
