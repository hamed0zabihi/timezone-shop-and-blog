import { Link } from "react-router-dom";

const LogoFooter = () => {
  return (
    <div className="footer-logo">
      <Link to="/">
        <img src="/images/logo/logo2_footer.png" alt="" />
      </Link>
    </div>
  );
};

export default LogoFooter;
