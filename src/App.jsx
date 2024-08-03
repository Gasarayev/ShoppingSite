import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./assets/components/Layout/Header";
import MainPage from "./assets/components/MainSlider";
import Categories from "./assets/components/Categories";
import Shopping from "./assets/components/Shopping";
import Context from "./assets/contexts/context";
import FavContext from "./assets/contexts/favContext";

function App() {
  return (
    <>
      <Context>
        <FavContext>
          <Header />
          <MainPage />
          <Categories />
          <Shopping />
        </FavContext>
      </Context>
    </>
  );
}

export default App;
