import { Animated } from "react-animated-css";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const HomeSlider = () => {
  return (
    <>
      <Helmet>
        <title>Watch shop | eCommers</title>
      </Helmet>
      <div className="slider-area ">
        <div className="slider-active">
          <div className="single-slider slider-height d-flex align-items-center slide-bg">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                  <div className="hero__caption">
                    <Animated
                      animationIn="fadeInLeft"
                      isVisible={true}
                      animationInDuration={1000}
                      animationDelay={0.4}
                    >
                      <h1>Select Your New Perfect Style</h1>
                    </Animated>
                    <Animated
                      animationIn="fadeInLeft"
                      isVisible={true}
                      animationInDuration={2000}
                      animationDelay={0.7}
                    >
                      <p>
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                        is aute irure.
                      </p>
                    </Animated>
                    <Animated
                      animationIn="fadeInLeft"
                      isVisible={true}
                      animationInDuration={2000}
                      animationDelay={0.8}
                    >
                      <div className="hero__btn">
                        <Link to="/shop" className="btn hero-btn">
                          Shop Now
                        </Link>
                      </div>
                    </Animated>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                  <Animated
                    animationIn="bounceIn"
                    isVisible={true}
                    animationDelay={0.4}
                  >
                    <div className="hero__img">
                      <img
                        src="./images/hero/watch.png"
                        alt=""
                        className=" heartbeat"
                      />
                    </div>
                  </Animated>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSlider;
