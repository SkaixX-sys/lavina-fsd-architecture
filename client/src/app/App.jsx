import { BrowserRouter } from "react-router-dom";
import AppRouter from "../pages/index";
import Header from "../widgets/Header/index";
import Footer from "../widgets/Footer/index";
import { observer } from "mobx-react-lite";
import IsAuthSpinner from "../shared/service/isAuthSpinner";

const App = observer(() => {
  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <IsAuthSpinner />
      <Footer />
    </BrowserRouter>
  );
});

export default App;
