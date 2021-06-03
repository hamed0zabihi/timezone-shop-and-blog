const Slider = ({ name }) => {
  switch (name) {
    case "home":
      return (
        <div class="slider-area ">
          <div class="slider-active">
            <div class="single-slider slider-height d-flex align-items-center slide-bg">
              <div class="container">
                <div class="row justify-content-between align-items-center">
                  <div class="col-xl-8 col-lg-8 col-md-8 col-sm-8">
                    <div class="hero__caption">
                      <h1
                        data-animation="fadeInLeft"
                        data-delay=".4s"
                        data-duration="2000ms"
                      >
                        Select Your New Perfect Style
                      </h1>
                      <p
                        data-animation="fadeInLeft"
                        data-delay=".7s"
                        data-duration="2000ms"
                      >
                        Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat
                        is aute irure.
                      </p>

                      <div
                        class="hero__btn"
                        data-animation="fadeInLeft"
                        data-delay=".8s"
                        data-duration="2000ms"
                      >
                        <a href="industries.html" class="btn hero-btn">
                          Shop Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div class="col-xl-3 col-lg-3 col-md-4 col-sm-4 d-none d-sm-block">
                    <div
                      class="hero__img"
                      data-animation="bounceIn"
                      data-delay=".4s"
                    >
                      <img
                        src="./images/hero/watch.png"
                        alt=""
                        class=" heartbeat"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return (
        <div class="slider-area ">
          <div class="single-slider slider-height2 d-flex align-items-center">
            <div class="container">
              <div class="row">
                <div class="col-xl-12">
                  <div class="hero-cap text-center">
                    <h2>{name}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
  }
};

export default Slider;
