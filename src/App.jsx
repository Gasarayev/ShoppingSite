import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./assets/style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./assets/components/Layout/Header";
import MainPage from "./assets/components/MainSlider";
import Categories from "./assets/components/Shopping/Categories";
import Shopping from "./assets/components/Shopping";
import Context from "./assets/contexts/context";
import FavContext from "./assets/contexts/favContext";
import Basket from "./assets/components/Basket";
import ShopPage from "./assets/pages/Shop";
import DealWeek from "./assets/components/DealWeek/idnex";
import BestSellers from "./assets/components/BestSellers";
import InfoSite from "./assets/components/InfoSite";

function App() {
  return (
    <>
      <Context>
        <FavContext>
          <Router>
            <Header />
            <Routes>
            <Route
                path="/"
                element={
                  <>
                    <MainPage />
                    <Categories />
                    <Shopping />
                    <DealWeek/>
                    <BestSellers/>
                    <InfoSite/>
                  </>
                }
              />
              <Route path="/shopping-page" element={<ShopPage/>}/>
              <Route path="/basket" element={<Basket />} />
              {/* <Route path="/" element ={} /> */}
            </Routes>
          </Router>
        </FavContext>
      </Context>
    </>
  );
}

export default App;
