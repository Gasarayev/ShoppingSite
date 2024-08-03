import React from "react";
import { useContext } from "react";
import { FavContextApi } from "../../contexts/favContext";
import "../Basket/style.css";
import { TbTruckDelivery } from "react-icons/tb";
import { FaStar } from "react-icons/fa";
import { FaStarHalfStroke } from "react-icons/fa6";
import { PiHeartStraight } from "react-icons/pi";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

function Basket() {
  const { favs, setFavs } = useContext(FavContextApi);

  const handleQuantityChange = (product, increment) => {
    const updatedFavs = favs
      .map((fav) =>
        fav.id === product.id
          ? { ...fav, quantity: fav.quantity + (increment ? 1 : -1) }
          : fav
      )
      .filter((fav) => fav.quantity > 0);
    setFavs(updatedFavs);
  };

  return (
    <div>
      {favs.map((product) => (
        <div key={product.id} className="container pt-5">
          <div className="row mt-5">
            <div className="col-md-6">
              <div className="product_img">
                <img src={product.basket_img} alt={product.title} />
              </div>
            </div>

            <div className="col-md-6">
              <div className="product_content">
                <h2>{product.title}</h2>
                <p>
                  Nam tempus turpis at metus scelerisque placerat nulla
                  deumantos solicitud felis. Pellentesque diam dolor, elementum
                  etos lobortis des mollis ut...
                </p>

                <div className="product_delivery">
                  <TbTruckDelivery /> FREE DELIVERY
                </div>

                <div className="product_price">
                  {product.discount ? (
                    <p>
                      <p className="old_price m-0">${product.price}.00</p>
                      <div className="price_raiting">
                        <p className="current_price">
                          {" "}
                          ${product.price - product.discount}.00
                        </p>
                        <p className="raiting_stars">
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStarHalfStroke />
                        </p>
                      </div>
                    </p>
                  ) : (
                    <p className="price_raiting">
                      <p className="current_price">${product.price}.00</p>

                      <p className="raiting_stars">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalfStroke />
                      </p>
                    </p>
                  )}
                </div>

                <div className="product_quantity">
                  <p className="m-0">Quantity:</p>
                  <div className="quantity_btn">
                    <p
                      className="handle_quantity m-0"
                      onClick={() => handleQuantityChange(product, false)}
                    >
                      <FaMinus />
                    </p>
                    <p className="m-0 handle_quantity_numb">{product.quantity || 0}</p>
                    <p className="handle_quantity m-0" onClick={() => handleQuantityChange(product, true)}>
                      {" "}
                      <FaPlus />
                    </p>
                  </div>
                  <p className="m-0 fav_icon">
                    <PiHeartStraight />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Basket;
