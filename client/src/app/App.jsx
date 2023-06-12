import { BrowserRouter } from "react-router-dom";
import AppRouter from "../pages/index";
import Header from "../widgets/Header/index";
import Footer from "../widgets/Footer/index";

const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <AppRouter />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
