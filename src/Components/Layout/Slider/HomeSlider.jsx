import { Animated } from "react-animated-css";

const HomeSlider = () => {
  return (
    <div class="slider-area ">
      <div class="slider-active">
        <div class="single-slider slider-height d-flex align-items-center slide-bg">
          <div class="container">
            <div class="row justify-content-between align-items-center">
              <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                <div class="hero__caption">
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
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat is aute
                      irure.
                    </p>
                  </Animated>
                  <Animated
                    animationIn="fadeInLeft"
                    isVisible={true}
                    animationInDuration={2000}
                    animationDelay={0.8}
                  >
                    <div class="hero__btn">
                      <a href="industries.html" class="btn hero-btn">
                        Shop Now
                      </a>
                    </div>
                  </Animated>
                </div>
              </div>
              <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                <Animated
                  animationIn="bounceIn"
                  isVisible={true}
                  animationDelay={0.4}
                >
                  <div class="hero__img">
                    <img
                      src="./images/hero/watch.png"
                      alt=""
                      class=" heartbeat"
                    />
                  </div>
                </Animated>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlider;
