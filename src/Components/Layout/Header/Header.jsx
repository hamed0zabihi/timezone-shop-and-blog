import { useEffect, useState } from "react";
import Logo from "./Logo";
import MainMenu1 from "./MainMenu1";
import MenuRight from "./MenuRight";

const Header = () => {
  const [sticky, setSticky] = useState(false);

  const handleSticky = () => {
    const offset = window.scrollY;
    if (offset < 245) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);

  return (
    <>
      <header>
        <div className="header-area">
          <div
            className={
              sticky
                ? "main-header header-sticky"
                : "main-header header-sticky sticky-bar sticky"
            }
          >
            <div className="container-fluid">
              <div className="menu-wrapper">
                <Logo />

                <MainMenu1 />
                <MenuRight />
              </div>
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none"></div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
