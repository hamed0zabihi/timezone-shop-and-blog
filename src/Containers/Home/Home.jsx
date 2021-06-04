import Gallery from "../../Components/Gallery/Gallery";
import ShopMethodContainer from "../../Components/Home/ShopMethodContainer";
import BigHeroTitle from "../../Components/Layout/Slider/BigheroTitle";

import NewArrival from "../../Components/Product/NewArrival";
import PopularProducts from "../../Components/Product/PopularProducts";
import WatchChoice from "../../Components/Product/WatchChoice";
import Video from "../../Components/Video/Video";

const Home = () => {
  return (
    <>
      <BigHeroTitle name="home" />
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
