import React from "react";
import { Carousel } from "react-responsive-carousel";
import dal from "../../assets/ExploreProduct/DiscountPic.png";
import bannerimg2 from "../../assets/ExploreProduct/bannerImage.jpg";

const Banner = () => (
  <Carousel autoPlay>
    <div>
      <img alt="" src={bannerimg2} />
    </div>
    <div>
      <img alt="" src={dal} />
    </div>
    <div>
      <img alt="" src={bannerimg2} />
    </div>
    <div>
      <img alt="" src={dal} />
    </div>
    <div>
      <img alt="" src={bannerimg2} />
    </div>
  </Carousel>
);
export default Banner;
