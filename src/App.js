import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/home";
import NavBar from "./components/nav-bar/nav-bar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page_content">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
