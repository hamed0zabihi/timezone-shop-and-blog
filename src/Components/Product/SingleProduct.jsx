import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetSelectedProduct } from "../../Redux/Actions/Products/GetSelectedProduct";
import BigHeroTitle from "../Layout/Slider/BigheroTitle";
import SingleProductDetails from "./SingleProductDetails";
import SingleProductSlider from "./SingleProductSlider";
import SubscribeSection from "./SubscribeSection";
const SingleProduct = ({ match }) => {
  const dispatch = useDispatch();
  const SelectedProduct = useSelector((state) => state.Product);
  useEffect(() => {
    dispatch(GetSelectedProduct(match.params.id));
  }, []);
  const { id, title, image, price, quantity, description } = {
    ...SelectedProduct[0],
  };
  return (
    <>
      <BigHeroTitle name={title} />
      <div className="product_image_area">
        <div className="container">
          <div className="row justify-content-center">
            <SingleProductSlider />
            <SingleProductDetails
              id={id}
              title={title}
              price={price}
              quantity={quantity}
              description={description}
              image={image}
            />
          </div>
        </div>
      </div>
      <SubscribeSection />
    </>
  );
};

export default SingleProduct;
