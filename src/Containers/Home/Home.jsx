import Gallery from "../../Components/Gallery/Gallery";
import ShopMethodContainer from "../../Components/Home/ShopMethodContainer";
import Slider from "../../Components/Layout/Slider/Slider";
import NewArrival from "../../Components/Product/NewArrival";
import PopularProducts from "../../Components/Product/PopularProducts";
import WatchChoice from "../../Components/Product/WatchChoice";
import Video from "../../Components/Video/Video";

const Home = () => {
  return (
    <>
      <Slider name="home" />
      <NewArrival />
      <Gallery />
      <PopularProducts />
      <Video />
      <WatchChoice />
      <ShopMethodContainer />
    </>
  );
};

export default Home;
