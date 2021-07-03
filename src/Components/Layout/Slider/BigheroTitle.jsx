import HomeSlider from "./HomeSlider";
import { Helmet } from "react-helmet";

const BigHeroTitle = ({ name }) => {
  switch (name) {
    case "home":
      return <HomeSlider />;

    default:
      return (
        <>
          <Helmet>
            <title>{name}</title>
          </Helmet>
          <div className="slider-area ">
            <div className="single-slider slider-height2 d-flex align-items-center">
              <div className="container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="hero-cap text-center">
                      <h2>{name}</h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
  }
};

export default BigHeroTitle;
