import FooterBottom from "./FooterBottom";
import LogoFooter from "./LogoFooter";

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
                        <a href="/#">About</a>
                      </li>
                      <li>
                        <a href="/#"> Offers & Discounts</a>
                      </li>
                      <li>
                        <a href="/#"> Get Coupon</a>
                      </li>
                      <li>
                        <a href="/#"> Contact Us</a>
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
                        <a href="/#">Woman Cloth</a>
                      </li>
                      <li>
                        <a href="/#">Fashion Accessories</a>
                      </li>
                      <li>
                        <a href="/#"> Man Accessories</a>
                      </li>
                      <li>
                        <a href="/#"> Rubber made Toys</a>
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
                        <a href="/#">Frequently Asked Questions</a>
                      </li>
                      <li>
                        <a href="/#">Terms & Conditions</a>
                      </li>
                      <li>
                        <a href="/#">Privacy Policy</a>
                      </li>
                      <li>
                        <a href="/#">Report a Payment Issue</a>
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
