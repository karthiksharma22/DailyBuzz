import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [country, setcountry] = useState({ name: "india", code: "in" });
  return (
    <>
      <Router>
        <Navbar setcountry={setcountry} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                key={`general_${country.code}`}
                country={country}
                category="general"
              />
            }
          ></Route>
          <Route
            exact
            path="/business"
            element={
              <News
                key={`business_${country.code}`}
                country={country}
                category="business"
              />
            }
          ></Route>
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key={`entertainment_${country.code}`}
                country={country}
                category="entertainment"
              />
            }
          ></Route>
          <Route
            exact
            path="/health"
            element={
              <News
                key={`health_${country.code}`}
                country={country}
                category="health"
              />
            }
          ></Route>
          <Route
            exact
            path="/science"
            element={
              <News
                key={`science_${country.code}`}
                country={country}
                category="science"
              />
            }
          ></Route>
          <Route
            exact
            path="/sports"
            element={
              <News
                key={`sports_${country.code}`}
                country={country}
                category="sports"
              />
            }
          ></Route>
          <Route
            exact
            path="/technology"
            element={
              <News
                key={`technology_${country.code}`}
                country={country}
                category="technology"
              />
            }
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
