import { Img } from "react-image";
import PreLoadings from "./PreLoadings";
import Spinner from "react-spinkit";
const Images = ({ image = [], alt = "alt" }) => {
  return (
    <Img
      src={[image, "https://via.placeholder.com/150"]}
      loader={<PreLoadings />}
      alt={alt}
      className="card-img rounded-0"
    />
  );
};

export default Images;
