import React, { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "../index.css";

export default function Navbar(props) {
  const location = useLocation();

  const handleClick = (country) => {
    getCountryCode(country);
  };

  const dropdown = useRef(null);
  const [cname, setcname] = useState("");

  const handlechange = (e) => {
    setcname(e.target.value);
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    getCountryCode(cname);
    setcname("");
    dropdown.current.click();
  };
  const getCountryCode = async (countryName) => {
    try {
      const response = await fetch(
        `https://restcountries.com/v3/name/${countryName}`
      );

      if (response.ok) {
        const data = await response.json();
        if (data.length > 0) {
          const countryCode = data[0].cca2;
          props.setcountry({
            name: countryName,
            code: countryCode.toLowerCase(),
          });
        } else {
          console.log(`Country not found: ${countryName}`);
        }
      } else {
        alert(`ERROR : ${countryName} country not found`);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
        <div className="container-fluid m-1">
          <Link className="navbar-brand" to="/">
            DailyBuzz
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/" ? "active1 active" : ""
                  }`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/business" ? "active1 active" : ""
                  }`}
                  aria-current="page"
                  to="/business"
                >
                  Business
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/entertainment"
                      ? "active1 active"
                      : ""
                  }`}
                  aria-current="page"
                  to="/entertainment"
                >
                  Entertainment
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/health" ? "active1 active" : ""
                  }`}
                  aria-current="page"
                  to="/health"
                >
                  Health
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/science" ? "active1 active" : ""
                  }`}
                  aria-current="page"
                  to="/science"
                >
                  Science
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/sports" ? "active1 active" : ""
                  }`}
                  aria-current="page"
                  to="/sports"
                >
                  Sports
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link ${
                    location.pathname === "/technology" ? "active1 active" : ""
                  }`}
                  aria-current="page"
                  to="/technology"
                >
                  Technology
                </Link>
              </li>
              <li className="nav-item dropdown" style={{ width: "180px" }}>
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Country
                </a>
                <ul className="dropdown-menu" ref={dropdown}>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        handleClick("india");
                      }}
                    >
                      India
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        handleClick("usa");
                      }}
                    >
                      USA
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        handleClick("canada");
                      }}
                    >
                      Canada
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        handleClick("uk");
                      }}
                    >
                      United Kingdom
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        handleClick("australia");
                      }}
                    >
                      Australia
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        handleClick("germany");
                      }}
                    >
                      Germany
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        handleClick("france");
                      }}
                    >
                      France
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        handleClick("japan");
                      }}
                    >
                      Japan
                    </a>
                  </li>
                  <li>
                    <a
                      className="dropdown-item"
                      href="#"
                      onClick={() => {
                        handleClick("south korea");
                      }}
                    >
                      South Korea
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <form action="" onSubmit={handlesubmit} className="d-flex">
                      <input
                        type="text"
                        placeholder="Country Name"
                        onChange={handlechange}
                        value={cname}
                        className="form-control"
                      />
                      <input type="submit" value="&#128269;" id="formsubmit" />
                    </form>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
