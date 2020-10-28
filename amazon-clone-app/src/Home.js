import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/15/AMAZON_FASHION/2020/HGG/GW/Top_100ish_Gift_Guide_1A_Holiday_DesktopHero_3000x1200._CB403280868_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="1"
            title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create ..."
            price={23.53}
            image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg"
            rating={5}
          />
          <Product
            id="2"
            title="Save on select Keurig coffee makers"
            price={13.99}
            image="https://m.media-amazon.com/images/I/31gPzgeXkdL._AC_SY480_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Govee RGB Light Bulbs, Bluetooth Light Bulb"
            price={11.45}
            image="https://m.media-amazon.com/images/I/61MPIRd11-L._AC_UL640_FMwebp_QL65_.jpg"
            rating={5}
          />
          <Product
            id="4"
            title="The Subtle Art of Not Giving a F*ck"
            price={15.99}
            image="https://m.media-amazon.com/images/I/71t4GuxLCuL._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="5"
            title="Haggar Mens Cool 18 Hidden Expandable-Waist Plain-Front Pant"
            price={45.99}
            image="https://m.media-amazon.com/images/I/71t-fGNzyNL._AC_UL640_FMwebp_QL65_.jpg"
            rating={2}
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="CorLiving TLK-802-B Lakewood Extra Wide TV Bench in Black Wood Grain Finish, for TVs Upto 80"
            price={139.99}
            image="https://m.media-amazon.com/images/I/81m6yyxYr0L._AC_UL640_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
