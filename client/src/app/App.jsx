import { BrowserRouter } from "react-router-dom";
import AppRouter from "../pages/index";
import Header from "../widgets/Header/index";
import Footer from "../widgets/Footer/index";
import Swiper from "../widgets/MainSlider/index";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Swiper/>
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
