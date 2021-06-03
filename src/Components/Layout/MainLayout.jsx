import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Slider from "./Slider/Slider";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />

      <main>
        <Slider name="home" />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
