import { ToastContainer } from "react-toastify";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ToastContainer />
    </>
  );
};

export default MainLayout;
