import React, { useEffect, useState } from "react";
import "../DealWeek/style.css";

function DealWeek() {
  const initialTime = 2 * 24 * 60 * 60 + 23 * 60 * 60 + 30 * 60; // 2 days, 23 hours, 30 minutes in seconds
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime === 0) {
          clearInterval(timer);
          return 0;
        } else {
          return prevTime - 1;
        }
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup function
  }, []);

  const days = Math.floor(time / (24 * 60 * 60));
  const hours = Math.floor((time % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((time % (60 * 60)) / 60);
  const seconds = time % 60;

  return (
    <div className="container-fluid bgColor_deal">
      <div className="row">
        <div className="col-md-6">
          <div className="man_img">
            <img
              src="https://preview.colorlib.com/theme/coloshop/images/deal_ofthe_week.png.webp"
              alt="dealTimerMan"
            />
          </div>
        </div>

        <div className="col-md-6 d-flex flex-column justify-content-center align-center mobile_resp">
          <div className="shopping_head">
            <h2 className="shopping_title">Deal of The Week</h2>
            <p className="underline"></p>
          </div>

          <div className="deal_timer">
            <div className="timer">
              {" "}
              <div className="timer_numb">{days}</div>
              <div className="timer_title">Days</div>{" "}
            </div>
            <div className="timer">
              <div className="timer_numb">{hours}</div> <div className="timer_title">Hours</div>
            </div>
            <div className="timer">
              <div className="timer_numb">{minutes}</div> <div className="timer_title">Mins</div>
            </div>
            <div className="timer">
              <div className="timer_numb">{seconds}</div> <div className="timer_title">Sec</div>
            </div>
          </div>

          <div className="deal_btn">
                <button>Shop now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DealWeek;
