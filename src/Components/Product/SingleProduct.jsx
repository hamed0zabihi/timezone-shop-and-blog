import BigHeroTitle from "../Layout/Slider/BigheroTitle";
import SingleProductDetails from "./SingleProductDetails";
import SingleProductSlider from "./SingleProductSlider";
import SubscribeSection from "./SubscribeSection";
const SingleProduct = () => {
  return (
    <>
      <BigHeroTitle name="Watch Shop" />
      <div className="product_image_area">
        <div className="container">
          <div className="row justify-content-center">
            <SingleProductSlider />
            <SingleProductDetails />
          </div>
        </div>
      </div>
      <SubscribeSection />
    </>
  );
};

export default SingleProduct;
