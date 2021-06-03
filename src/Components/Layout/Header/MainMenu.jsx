const MainMenu = () => {
  return (
    <div className="main-menu d-none d-lg-block">
      <nav>
        <ul id="navigation">
          <li>
            <a href="/index.html">Home</a>
          </li>
          <li>
            <a href="/shop.html">shop</a>
          </li>
          <li>
            <a href="/about.html">about</a>
          </li>
          <li className="hot">
            <a href="/#">Latest</a>
            <ul className="submenu">
              <li>
                <a href="/shop.html"> Product list</a>
              </li>
              <li>
                <a href="/product_details.html"> Product Details</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/blog.html">Blog</a>
            <ul className="submenu">
              <li>
                <a href="/blog.html">Blog</a>
              </li>
              <li>
                <a href="/blog-details.html">Blog Details</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/#">Pages</a>
            <ul className="submenu">
              <li>
                <a href="/login.html">Login</a>
              </li>
              <li>
                <a href="/cart.html">Cart</a>
              </li>
              <li>
                <a href="/elements.html">Element</a>
              </li>
              <li>
                <a href="/confirmation.html">Confirmation</a>
              </li>
              <li>
                <a href="/checkout.html">Product Checkout</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="/contact.html">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainMenu;
