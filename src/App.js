import { Route, Routes } from "react-router-dom";

import NavBar from "./components/nav-bar/nav-bar";
import Loader from "./components/loader/loader";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("./pages/home/home"));

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="page_content">
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
