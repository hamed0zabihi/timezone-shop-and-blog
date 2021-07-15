import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { GetSelectedProduct } from "../../Redux/Actions/Products/GetSelectedProduct";
import BigHeroTitle from "../Layout/Slider/BigheroTitle";
import SingleProductDetails from "./SingleProductDetails";
import SingleProductSlider from "./SingleProductSlider";
import SubscribeSection from "./SubscribeSection";

const SingleProduct = ({ match }) => {
  const dispatch = useDispatch();
  const SelectedProduct = useSelector((state) => state.product);
  const { productId } = useParams();
  const idProduct = productId;
  useEffect(() => {
    dispatch(GetSelectedProduct(idProduct));
  }, [dispatch, idProduct]);

  const { id, title, image, imageGallery, price, inventory, description } = {
    ...SelectedProduct[0],
  };

  return (
    <>
      <BigHeroTitle name={title} />
      <div className="product_image_area">
        <div className="container">
          <div className="row justify-content-center">
            <SingleProductSlider images={imageGallery} />
            <SingleProductDetails
              id={id}
              title={title}
              price={price}
              inventory={inventory}
              description={description}
              image={image}
              product={SelectedProduct[0]}
            />
          </div>
        </div>
      </div>
      <SubscribeSection />
    </>
  );
};

export default SingleProduct;
