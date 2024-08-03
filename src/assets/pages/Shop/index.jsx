import React from "react";
import Shopping from "../../components/Shopping";
import Categories from "../../components/Shopping/Categories";

function ShopPage() {
  return (
    <div>
      <Categories />
      <Shopping />
      <Categories />
      <Categories />
      <Categories />
    </div>
  );
}

export default ShopPage;
