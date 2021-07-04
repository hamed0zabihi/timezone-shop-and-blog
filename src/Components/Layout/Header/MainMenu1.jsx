import { useState } from "react";
import { Link } from "react-router-dom";

const MainMenu1 = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="main-menu">
      <nav className="navbar navbar-expand-xl  ">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContentXL"
          aria-controls="navbarSupportedContentXL"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => settoggle(!toggle)}
        >
          <span className="navbar-toggler-icon">
            <i
              className="fas fa-bars"
              style={{ color: "#ff2020", fontSize: "28px" }}
            ></i>
          </span>
        </button>

        <div
          className={
            toggle
              ? "collapse navbar-collapse show"
              : "collapse navbar-collapse"
          }
          id="navbarSupportedContentXL"
        >
          <ul className="navbar-nav mr-auto" id="navigation">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                shop
              </Link>
            </li>
            <li className="nav-item hot">
              <Link className="nav-link " to="/shop">
                latest
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">
                blog
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contacts">
                contact
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                about
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MainMenu1;
