const FooterBottom = () => {
  return (
    <div className="row align-items-center">
      <div className="col-xl-7 col-lg-8 col-md-7">
        <div className="footer-copy-right">
          <p>
            Copyright &copy;2021 All rights reserved | This template is made
            with <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
          </p>
        </div>
      </div>
      <div className="col-xl-5 col-lg-4 col-md-5">
        <div className="footer-copy-right f-right">
          <div className="footer-social">
            <a href="/#">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.facebook.com/sai4ull">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="/#">
              <i className="fab fa-behance"></i>
            </a>
            <a href="/#">
              <i className="fas fa-globe"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterBottom;