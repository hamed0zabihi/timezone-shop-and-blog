import { useSelector } from "react-redux";
import { isEmpty } from "lodash";
import { Link } from "react-router-dom";
const MenuRight = () => {
  const { cart, user } = useSelector((state) => state);

  return (
    <div className="header-right ">
      <ul>
        <li>
          <div className="nav-search search-switch">
            <span className="flaticon-search"></span>
          </div>
        </li>
        <li>
          <Link to="/login">
            <span
              className={
                !isEmpty(user) ? "flaticon-user text-info" : "flaticon-user "
              }
            ></span>
          </Link>
        </li>
        <li>
          <Link to="/cart">
            <span className="flaticon-shopping-cart"></span>
            {!isEmpty(cart) ? (
              <span
                style={{
                  display: "inline-flex",
                  justifyContent: "center",
                  top: "-12px",
                  right: "22px",
                  position: "relative",
                  backgroundColor: "#ff003c",
                  color: "#fff",

                  borderRadius: "50%",
                  minwidth: "20px",
                  padding: "10px",
                  lineHeight: "1px",
                  fontSize: "12px",
                  width: "20px",
                }}
              >
                {cart.length}
              </span>
            ) : (
              ""
            )}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MenuRight;
