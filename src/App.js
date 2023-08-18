import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { RestroPage } from "./pages/RestoPage";
import { SelectedCuisine } from "./pages/SelectedCuisine";

function App() {
  return (
    <div className="App">
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/cuisine/:cuisineId" element={<SelectedCuisine />} />
        <Route path="resturant/:restorId" element={<RestroPage />} />
      </Routes>
    </div>
  );
}

export default App;
