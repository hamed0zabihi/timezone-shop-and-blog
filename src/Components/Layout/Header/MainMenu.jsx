import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
    <div className="main-menu d-none d-lg-block">
      <nav>
        <ul id="navigation">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/shop">shop</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li className="hot">
            <Link to="/"> Latest</Link>
            <ul className="submenu">
              <li>
                <Link to="/shop"> Product list</Link>
              </li>
              <li>
                <Link to="/product"> Product Details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/"> Product Details</Link>
            <ul className="submenu">
              <li>
                <Link to="/"> Blog</Link>
              </li>
              <li>
                <Link to="/="> Blog Details</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">Pages</Link>
            <ul className="submenu">
              <li>
                <Link to="/"> Product Details</Link>
              </li>
              <li>
                <Link to="/cart">cart</Link>
              </li>
              <li>
                <Link to="/">Element</Link>
              </li>
              <li>
                <Link to="/">Confirmation</Link>
              </li>
              <li>
                <Link to="/">Product Checkout</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
