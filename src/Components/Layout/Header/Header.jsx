import { useEffect, useState } from "react";
import Logo from "./Logo";
import MainMenu from "./MainMenu";
import MenuRight from "./MenuRight";

const Header = () => {
  const [sticky, setsticky] = useState(false);

  const handleSticky = () => {
    const offset = window.scrollY;
    if (offset < 245) {
      setsticky(true);
    } else {
      setsticky(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleSticky);
  }, []);
  if (sticky) {
    console.log("stiky", sticky);
  }
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
                <MainMenu />
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
