import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const MainLayout = ({ children }) => {
  const [backToUp, setBackToUp] = useState(false);

  const BackToUpScroll = () => {
    const offset = window.scrollY;
    if (offset > 245) {
      setBackToUp(true);
    } else {
      setBackToUp(false);
    }
  };
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", BackToUpScroll);
  }, []);
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ToastContainer />
      <a
        id="scrollUp"
        href="#top"
        className={backToUp ? " back-to-up" : "back-to-up-hidden"}
        onClick={scrollToTop}
      >
        <i className="fas fa-level-up-alt"></i>
      </a>
    </>
  );
};

export default MainLayout;
