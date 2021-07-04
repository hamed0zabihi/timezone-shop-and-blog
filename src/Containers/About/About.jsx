import BigHeroTitle from "../../Components/Layout/Slider/BigheroTitle";
import Video from "../../Components/Video/Video";
import ShopMethodContainer from "../../Components/Home/ShopMethodContainer";
const About = () => {
  return (
    <>
      <BigHeroTitle name="about us" />
      <div className="about-details section-padding30">
        <div className="container">
          <div className="row">
            <div className="offset-xl-1 col-lg-8">
              <div className="about-details-cap mb-50">
                <h4>Our Mission</h4>
                <p>
                  Consectetur adipiscing elit, sued do eiusmod tempor ididunt
                  udfgt labore et dolore magna aliqua. Quis ipsum suspendisces
                  gravida. Risus commodo viverra sebfd dho eiusmod tempor
                  maecenas accumsan lacus. Risus commodo viverra sebfd dho
                  eiusmod tempor maecenas accumsan lacus.
                </p>
                <p>
                  Risus commodo viverra sebfd dho eiusmod tempor maecenas
                  accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor
                  maecenas accumsan.
                </p>
              </div>

              <div className="about-details-cap mb-50">
                <h4>Our Vision</h4>
                <p>
                  Consectetur adipiscing elit, sued do eiusmod tempor ididunt
                  udfgt labore et dolore magna aliqua. Quis ipsum suspendisces
                  gravida. Risus commodo viverra sebfd dho eiusmod tempor
                  maecenas accumsan lacus. Risus commodo viverra sebfd dho
                  eiusmod tempor maecenas accumsan lacus.
                </p>
                <p>
                  Risus commodo viverra sebfd dho eiusmod tempor maecenas
                  accumsan lacus. Risus commodo viverra sebfd dho eiusmod tempor
                  maecenas accumsan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Video />
      <ShopMethodContainer />
    </>
  );
};

export default About;
