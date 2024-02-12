import { Route, Routes } from "react-router-dom";

import NavBar from "./components/nav-bar/nav-bar";
import Loader from "./components/loader/loader";
import React, { Suspense, useEffect, useState } from "react";

const Home = React.lazy(() => import("./pages/home/home"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App">
      <NavBar />
      {isLoading ? <Loader /> : ""}
      <div className="page_content">
        <Suspense fallback={"..."}>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
