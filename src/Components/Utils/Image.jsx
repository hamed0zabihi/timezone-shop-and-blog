import { Img } from "react-image";
import PreLoadings from "./PreLoadings";
const Image = ({ src, alt = "alt" }) => {
  return (
    <Img
      src={[src, "https://via.placeholder.com/150"]}
      loader={<PreLoadings />}
      alt={alt}
    />
  );
};

export default Image;