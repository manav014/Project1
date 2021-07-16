import React from "react";
import OffersDailyProduct from "./ExploreProduct/OffersDailyProduct";
import TopDeals from "./ExploreProduct/TopDeals";
import HeaderBar from "./HeaderBar.js";
import SpecificCategory from "./ExploreProduct/SpecificCategory";
import ShopFromTopCategory from "./ExploreProduct/ShopFromTopCategory";
import Banner from "./ExploreProduct/Banner";
import GridDiscounts from "./ExploreProduct/GridDiscounts";

function ExploreProduct() {
  return (
    <div>
      {/* <HeaderBar sticky /> */}
      <Banner />
      <OffersDailyProduct />
      <SpecificCategory />
      <GridDiscounts />
      <TopDeals />
      <ShopFromTopCategory />
    </div>
  );
}

export default ExploreProduct;
