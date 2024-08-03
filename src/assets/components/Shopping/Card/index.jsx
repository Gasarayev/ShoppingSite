import React, { useContext } from "react";
import { ContextApi } from "../../../contexts/context";
import { PiHeartStraight } from "react-icons/pi";
import "./style.css"

function Card() {
  const { filteredProducts } = useContext(ContextApi);
  // console.log(filteredProducts)

  return (
    <>
      <div className="container">
        <div className="row">
          {filteredProducts.map((info) => {
            return (
              <div className="col-md-3 p-0 mb-4 fade-in" key={info.id}>
                <div className="card_head">
                  <div className="card_head_icon">
                    <PiHeartStraight />
                  </div>

                  {info.discount ? (
                    <div className="card_head_discount">-${info.discount}</div>
                  ) : info.sale ? (
                    <div className="card_head_discount">{info.sale}</div>
                  ) : null}

                </div>
                <div className="card_body">
                    <div className="card_body_img">
                        <img src={info.image} alt="productImg" />
                        {console.log(info.image)}
                        <h6 className="card_bodyTitle">{info.title}</h6>

                        {info.discount ? (
                      <p className="card_body_price">
                        ${info.price - info.discount}.00 <span>${info.price}.00</span>
                      </p>
                    ) : (
                      <p className="card_body_price">${info.price}.00</p>
                    )}

                    </div>
                </div>
                <div className="card_footer">
                    <div className="card_footer_button">
                      Add to Card
                    </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Card;
