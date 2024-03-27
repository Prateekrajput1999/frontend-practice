import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Signup";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="flex justify-center p-2">
      <BrowserRouter>
        <Routes>
          <Route path="signup" element={<Signup type="signup" />} />
          <Route path="login" element={<Signup type="login" />} />
          <Route path="movies" element={<Movies />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
