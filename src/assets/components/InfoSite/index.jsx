import React from "react";
import "../InfoSite/style.css";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { GiReturnArrow } from "react-icons/gi";
import { GoClock } from "react-icons/go";

function InfoSite() {
  return (
    <div className="container">
      <div className="row m-0">
        <div className="col-lg-3 p-0 mb-2">
          <div className="info_site">
            <div className="info_site_icon">
              <CiDeliveryTruck />
            </div>
            <div className="info_site_body">
              <h6>Free Shipping</h6>
              <p>Suffered Aleteration in Some Form</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 p-0 mb-2">
          <div className="info_site">
            <div className="info_site_icon">
              <FaRegMoneyBillAlt />
            </div>
            <div className="info_site_body">
              <h6>Cach on Delivery</h6>
              <p>The Internet Trend To Repeat</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 p-0 mb-2">
          <div className="info_site">
            <div className="info_site_icon">
              <GiReturnArrow />
            </div>
            <div className="info_site_body">
              <h6>45 Days Return</h6>
              <p>Making it Look Like Readable</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 p-0 mb-2">
          <div className="info_site">
            <div className="info_site_icon">
              <GoClock />
            </div>
            <div className="info_site_body">
              <h6>Opening All Week</h6>
              <p> 8AM - 09PM </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSite;
