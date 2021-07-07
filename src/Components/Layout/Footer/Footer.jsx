import FooterBottom from "./FooterBottom";
import LogoFooter from "./LogoFooter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer>
        {/* <!-- Footer Start--> */}
        <div className="footer-area footer-padding">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                <div className="single-footer-caption mb-50">
                  <div className="single-footer-caption mb-30">
                    <LogoFooter />
                    <div className="footer-tittle">
                      <div className="footer-pera">
                        <p>
                          Asorem ipsum adipolor sdit amet, consectetur
                          adipisicing elitcf sed do eiusmod tem.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-3 col-md-3 col-sm-5">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Quick Links</h4>
                    <ul>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <a href="/#" onClick={(e) => e.preventDefault()}>
                          Offers & Discounts
                        </a>
                      </li>
                      <li>
                        <a href="/#" onClick={(e) => e.preventDefault()}>
                          Get Coupon
                        </a>
                      </li>
                      <li>
                        <Link to="/contacts">Contact Us</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-4 col-sm-7">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>New Products</h4>
                    <ul>
                      <li>
                        <a href="/#" onClick={(e) => e.preventDefault()}>
                          Woman Cloth
                        </a>
                      </li>
                      <li>
                        <a href="/#" onClick={(e) => e.preventDefault()}>
                          Fashion Accessories
                        </a>
                      </li>
                      <li>
                        <a href="/#" onClick={(e) => e.preventDefault()}>
                          {" "}
                          Man Accessories
                        </a>
                      </li>
                      <li>
                        <a href="/#" onClick={(e) => e.preventDefault()}>
                          {" "}
                          Rubber made Toys
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-3 col-md-5 col-sm-7">
                <div className="single-footer-caption mb-50">
                  <div className="footer-tittle">
                    <h4>Support</h4>
                    <ul>
                      <li>
                        <a href="/#" onClick={(e) => e.preventDefault()}>
                          Frequently Asked Questions
                        </a>
                      </li>
                      <li>
                        <a href="/#" onClick={(e) => e.preventDefault()}>
                          Terms & Conditions
                        </a>
                      </li>
                      <li>
                        <a href="/#" onClick={(e) => e.preventDefault()}>
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a href="/#" onClick={(e) => e.preventDefault()}>
                          Report a Payment Issue
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <FooterBottom />
          </div>
        </div>
        {/* <!-- Footer End--> */}
      </footer>
    </>
  );
};

export default Footer;
