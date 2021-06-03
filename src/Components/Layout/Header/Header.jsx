import Logo from "./Logo";
import MainMenu from "./MainMenu";
import MenuRight from "./MenuRight";

const Header = () => {
  return (
    <>
      <header>
        <div className="header-area">
          <div className="main-header header-sticky">
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
