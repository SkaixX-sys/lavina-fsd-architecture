import { BrowserRouter } from "react-router-dom";
import AppRouter from "./routing/AppRouter";
import MainSlider from "../shared/ui/MainSlider/MainSlider";

const App = () => {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
};

export default App;
