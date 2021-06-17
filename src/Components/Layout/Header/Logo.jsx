import { Link } from "react-router-dom";
const Logo = () => {
  return (
    <div className="logo">
      <Link to="/">
        <img src="./images/logo/logo.png" alt="" />
      </Link>
    </div>
  );
};

export default Logo;
