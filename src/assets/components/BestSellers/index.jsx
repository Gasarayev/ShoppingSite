import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { ContextApi } from "../../contexts/context";
import { PiHeartStraight } from "react-icons/pi";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "../BestSellers/style.css"

function BestSellers() {
  const { filteredProducts } = useContext(ContextApi);

  return (
    <>
      <div className="container mt-5 bestSellers">
        <div className="row">
          <div className="shopping_head">
            <h2 className="shopping_title">Best Sellers</h2>
            <p className="underline"></p>
          </div>

          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            onSlideChange={() => console.log("slide change")}
            onSwiper={(swiper) => console.log(swiper)}
            loop={true}
            navigation={true}
            modules={[Navigation]}
            breakpoints={{
                1024: { slidesPerView: 5 },
                768: { slidesPerView: 3 },
                0: { slidesPerView: 2 },
              }}
              on={{
                slideChange: () => console.log("slide changed"),
                progress: (s, progress) => console.log(`progress is ${progress}`),
              }}
          >
            {filteredProducts.map((info, index) => (
              <SwiperSlide key={index}>
                <div className="p-0 mb-4 fade-in">
                  <div className="card_head">
                    <div className="card_head_icon">
                      <PiHeartStraight />
                    </div>
                  </div>

                  <div className="card_body">
                    <div className="card_body_img">
                      <img src={info.image} alt="productImg" />

                      <h6 className="card_bodyTitle">{info.title}</h6>

                      <p className="card_body_price">${info.price}.00</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default BestSellers;
