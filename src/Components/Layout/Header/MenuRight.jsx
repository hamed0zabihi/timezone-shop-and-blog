const MenuRight = () => {
  return (
    <div className="header-right">
      <ul>
        <li>
          <div className="nav-search search-switch">
            <span className="flaticon-search"></span>
          </div>
        </li>
        <li>
          {" "}
          <a href="/login.html">
            <span className="flaticon-user"></span>
          </a>
        </li>
        <li>
          <a href="/cart.html">
            <span className="flaticon-shopping-cart"></span>
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default MenuRight;
